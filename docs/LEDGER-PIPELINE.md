# Ledger of Compelling Facts – Integration Blueprint

This document expands on the on-site ledger page and captures the technical decisions required to bring the public ledger online.

## Source Systems

| Source | Purpose | Access Method | Notes |
| --- | --- | --- | --- |
| Mercury Business Banking | Primary operating account that receives consolidated deposits | [Mercury API](https://mercury.com/developers/api) using a read-only token | Only ingest credits tagged as revenue; internal transfers should be ignored. |
| Operating Checking Account | Legacy ACH/wire deposits outside of Mercury | Plaid or direct bank export (CSV) | Requires manual tagging to filter out personal/legacy transactions. |
| Stripe | Card payments for workshops/programs | Stripe API + webhooks | Backfill historical balance transactions, then rely on `payment_intent.succeeded` events. |
| Square | Point-of-sale and invoice payments | Square Transactions API | OAuth app with read-only scopes. Capture invoice/customer metadata. |
| Historical Spreadsheets | Pre-Mercury ledger | Manual CSV import | Normalize column headers to `date`, `description`, `amount`, `client_alias`, and `source_document`. |

## Environment Variables

Add the following keys to your deployment environment (e.g., Netlify, Vercel, or Docker secrets). Keep them out of version control.

```
MERCURY_API_KEY=
STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=
SQUARE_ACCESS_TOKEN=
PLAID_CLIENT_ID=
PLAID_SECRET=
LEDGER_DATABASE_URL=
```

- `MERCURY_API_KEY`: Generate a read-only token scoped to transactions.
- `STRIPE_API_KEY`: Restricted key with read-only permissions.
- `STRIPE_WEBHOOK_SECRET`: For validating inbound webhook requests.
- `SQUARE_ACCESS_TOKEN`: OAuth token with `PAYMENTS_READ` and `CUSTOMERS_READ` scopes.
- `PLAID_CLIENT_ID` / `PLAID_SECRET`: Only required if you choose Plaid for the legacy checking account.
- `LEDGER_DATABASE_URL`: Connection string for the warehouse (e.g., Supabase, Neon, or managed Postgres).

## Ingestion Flow

1. **Scheduler** – Use a cron job (GitHub Actions, Netlify Scheduled Functions, or Supabase Cron) to fetch new transactions every hour.
2. **Normalizer** – Convert provider payloads into a shared schema:
   ```json
   {
     "id": "provider-transaction-id",
     "source": "mercury|stripe|square|checking|legacy",
     "event_type": "inflow|adjustment|transfer",
     "occurred_at": "ISO8601",
     "amount": {
       "currency": "USD",
       "gross": 4999,
       "net": 4870
     },
     "client_alias": "Atlas Manufacturing",
     "metadata": {
       "program": "AI Tooling Workshop",
       "processor_fee": 129,
       "memo": "Invoice #INV-2301"
     }
   }
   ```
3. **Deduplication** – Mark Stripe/Square derived settlements and suppress duplicates once the Mercury deposit is observed.
4. **Review queue** – Flag each entry for manual approval before it is published to the public feed. Capture redaction rules (amount hidden vs. visible).
5. **Publish** – Commit approved entries to a static JSON feed (`public/ledger.json`) or expose them via an API route consumed by the React page.

## Evidence Management

- Store transcripts, briefs, and deliverables in a secure drive (Notion, Google Drive, or Supabase Storage).
- Record artifact metadata (type, URL, notes, permission status) alongside the ledger entry.
- Use expiring, access-controlled links for artifacts that become public.

## Roadmap Alignment

The milestones exposed on `/ledger` mirror this plan:

1. **Architecture blueprint** – Complete (this document + UI page).
2. **Mercury sync** – Implement ETL job using `MERCURY_API_KEY`.
3. **Stripe/Square webhooks** – Add webhook handler with signature verification and dedupe logic.
4. **Public ledger alpha** – Publish vetted entries and supporting evidence.

## Next Steps

- Stand up the ingestion repository or serverless function.
- Backfill historical records via Mercury CSV export and Stripe balance transactions.
- Configure monitoring/alerting for failed syncs.
- Iterate on redaction tooling to balance transparency with confidentiality.

Once the data feed is live, the React ledger timeline can switch from static sample data to the real JSON endpoint without structural changes.

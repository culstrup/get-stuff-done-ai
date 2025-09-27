export type LedgerSource = "mercury" | "checking" | "stripe" | "square" | "legacy";

export interface LedgerArtifact {
  label: string;
  url?: string;
  type?: "transcript" | "email" | "document" | "automation-log" | "note";
  notes?: string;
}

export interface LedgerEntry {
  id: string;
  date: string; // ISO 8601 string
  source: LedgerSource;
  clientAlias: string;
  summary: string;
  amount?: number;
  currency?: string;
  isAmountPublic?: boolean;
  tags?: string[];
  status: "verified" | "pending" | "draft";
  entryType?: "inflow" | "adjustment" | "transfer";
  artifacts?: LedgerArtifact[];
  notes?: string;
}

export interface LedgerSourceMeta {
  id: LedgerSource;
  name: string;
  description: string;
  integrationStatus: "not-started" | "in-progress" | "live";
  syncStrategy: string;
  visibilityNotes?: string;
  lastSyncedAt?: string;
}

export const ledgerSources: LedgerSourceMeta[] = [
  {
    id: "mercury",
    name: "Mercury Business Banking",
    description:
      "Primary operating account capturing consolidated revenue deposits and settlements from payment processors.",
    integrationStatus: "in-progress",
    syncStrategy:
      "Use Mercury API with read-only token scoped to transactions endpoint. Mirror deposits tagged as revenue inflows while ignoring internal transfers.",
    visibilityNotes:
      "Some deposits are already roll-ups from Stripe or Square. Requires deduplication logic before publishing entries.",
    lastSyncedAt: "2025-02-15T15:30:00Z",
  },
  {
    id: "checking",
    name: "Operating Checking Account",
    description:
      "Legacy checking account that receives direct ACH and wire payments from clients who do not use card processors.",
    integrationStatus: "not-started",
    syncStrategy:
      "Explore Plaid or direct bank API export. Fallback: secure CSV export with manual review before ingestion into ledger pipeline.",
    visibilityNotes:
      "Contains both business and legacy transactions. Needs tagging workflow before entries can be shared publicly.",
  },
  {
    id: "stripe",
    name: "Stripe",
    description:
      "Handles card transactions for productized services and workshops.",
    integrationStatus: "in-progress",
    syncStrategy:
      "Webhook listener for `payment_intent.succeeded` and scheduled backfill job using Stripe Balance Transaction API to reconcile fees and settlements.",
  },
  {
    id: "square",
    name: "Square",
    description:
      "Point-of-sale and invoice payments for on-site activations and legacy clients.",
    integrationStatus: "not-started",
    syncStrategy:
      "Square Transactions API with OAuth. Capture payment, customer reference, and location metadata for contextual timeline entries.",
  },
  {
    id: "legacy",
    name: "Pre-Mercury Historical Ledger",
    description:
      "Spreadsheet exports and notebooks from the early business phase before the dedicated Mercury account existed.",
    integrationStatus: "not-started",
    syncStrategy:
      "Manual migration: normalize existing spreadsheets into CSV, enrich with client aliases, and import through ledger ingestion script.",
    visibilityNotes:
      "Some entries pre-date formal NDAs; require case-by-case approval before making public.",
  },
];

export const ledgerEntries: LedgerEntry[] = [
  {
    id: "2025-merc-jan-automation-sprint",
    date: "2025-01-12",
    source: "mercury",
    clientAlias: "GrowthOps Collective",
    summary:
      "Deposit from GrowthOps Collective for AI Automation Sprint focused on marketing attribution pipeline overhaul.",
    amount: 12500,
    currency: "USD",
    isAmountPublic: false,
    tags: ["ai-automation", "marketing-ops", "sprint"],
    status: "verified",
    entryType: "inflow",
    artifacts: [
      {
        label: "Engagement kickoff transcript",
        type: "transcript",
        notes: "Zoom transcript stored in Notion workspace. Ready for redaction pending client approval.",
      },
      {
        label: "Automation architecture diagram",
        type: "document",
        url: "https://example.com/automation-architecture",
      },
    ],
    notes:
      "Matches Stripe settlement batch STRIPE-SET-8841. Need to suppress duplicate entry once processor level timeline is live.",
  },
  {
    id: "2024-stripe-dec-tooling-report",
    date: "2024-12-05",
    source: "stripe",
    clientAlias: "Atlas Manufacturing",
    summary:
      "Stripe payment for 2025 AI Tooling & Budget workshop facilitation including executive briefing deck.",
    amount: 4999,
    currency: "USD",
    isAmountPublic: true,
    tags: ["workshop", "tooling-report", "executive"],
    status: "verified",
    entryType: "inflow",
    artifacts: [
      {
        label: "Workshop agenda",
        type: "document",
        url: "https://example.com/ai-tooling-agenda",
      },
      {
        label: "Client testimonial request",
        type: "email",
        notes: "Awaiting approval to publish clip on ledger page.",
      },
    ],
  },
  {
    id: "2023-square-summit",
    date: "2023-08-22",
    source: "square",
    clientAlias: "Summit Retreats",
    summary:
      "Square invoice payment for on-site AI adoption training during leadership offsite.",
    tags: ["training", "onsite", "legacy"],
    status: "pending",
    entryType: "inflow",
    artifacts: [
      {
        label: "Legacy invoice PDF",
        type: "document",
        notes: "Stored in Google Drive. Needs migration to central ledger storage.",
      },
    ],
    notes:
      "Amount withheld until reconciliation confirms final payout after Square fees. Add currency once records are normalized.",
  },
];

export interface LedgerRoadmapItem {
  id: string;
  milestone: string;
  status: "complete" | "in-progress" | "up-next";
  targetDate?: string;
  description: string;
  dependencies?: string[];
}

export const ledgerRoadmap: LedgerRoadmapItem[] = [
  {
    id: "architecture-blueprint",
    milestone: "Define ledger architecture and publishing workflow",
    status: "complete",
    targetDate: "2025-02-10",
    description:
      "Documented ingestion pipeline, source systems, and redaction strategy for the public ledger (this page).",
  },
  {
    id: "mercury-sync",
    milestone: "Stand up Mercury API sync job",
    status: "in-progress",
    targetDate: "2025-03-01",
    description:
      "Provision read-only API token, implement scheduled pull into internal warehouse, and flag deposits requiring duplicate suppression.",
    dependencies: ["architecture-blueprint"],
  },
  {
    id: "stripe-webhooks",
    milestone: "Launch Stripe + Square processor listeners",
    status: "up-next",
    targetDate: "2025-03-20",
    description:
      "Configure webhook relays capturing invoice/customer metadata and link to supporting transcripts or deliverables.",
    dependencies: ["mercury-sync"],
  },
  {
    id: "public-ledger-alpha",
    milestone: "Publish first public ledger entries",
    status: "up-next",
    targetDate: "2025-04-05",
    description:
      "Ship read-only timeline with curated entries, client-approved aliases, and optional evidence links.",
    dependencies: ["stripe-webhooks"],
  },
];

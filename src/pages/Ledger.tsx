import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import LedgerTimeline from "@/components/ledger/LedgerTimeline";
import { ledgerSources, ledgerRoadmap } from "@/data/ledger";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { shadows, gradients } from "@/lib/design-tokens";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  GitBranch,
  KeyRound,
  Lock,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const LedgerPage = () => {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Ledger of Compelling Facts",
      description:
        "Programmatically generated ledger documenting revenue inflows, engagement metadata, and proof of work for GSD at Work clients.",
      url: "https://gsdat.work/ledger",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://gsdat.work/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Ledger of Compelling Facts",
            item: "https://gsdat.work/ledger",
          },
        ],
      },
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="Ledger of Compelling Facts | GSD at Work"
        description="Follow the real-time ledger of capital inflows, engagement artifacts, and supporting primary sources that document proof of value at GSD at Work."
        canonicalUrl="https://gsdat.work/ledger"
        keywords="public client ledger, ai consulting proof, capital inflow timeline, GSD at Work ledger"
        structuredData={structuredData}
      />

      <div className="relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-white to-primary/5" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-28 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="bg-secondary/20 text-secondary border-0 mb-4">Ledger of Compelling Facts</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Documenting every meaningful inflow of value
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              This public-facing ledger is the system of record for the engagements and transactions that prove competence. Each entry captures the revenue inflow, the program that generated it, and the artifacts we can share once client permissions are in place.
            </p>
            <p className="mt-4 text-base text-slate-500">
              The data below is a curated snapshot while the ingestion pipeline comes online. As integrations progress, the timeline will update automatically.
            </p>
          </div>
        </div>
      </div>

      <section className="-mt-12 pb-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card className={`${gradients.primaryLight} ${shadows.md} text-white`}>
              <CardHeader>
                <CardTitle className="text-2xl">Operational intent</CardTitle>
                <CardDescription className="text-white/80">
                  Build a verifiable, API-driven ledger that connects capital inflows to the conversations, deliverables, and transformations they created.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-white/80">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                  <span>Source-level ingestion with deduplication across Mercury, Stripe, Square, and legacy archives.</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-white" />
                  <span>Redaction controls to honor client confidentiality while still proving the work.</span>
                </div>
                <div className="flex items-center gap-3">
                  <GitBranch className="h-5 w-5 text-white" />
                  <span>Roadmap toward automated case-study generation by linking every entry to primary sources.</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-slate-200">
              <CardHeader>
                <CardTitle>API & data pipeline snapshot</CardTitle>
                <CardDescription>
                  Inventory of data sources and current integration status for the public ledger.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {ledgerSources.map((source) => (
                  <div key={source.id} className="rounded-lg border border-slate-200 bg-white p-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h3 className="text-base font-semibold text-slate-900">{source.name}</h3>
                        <p className="text-sm text-slate-600">{source.description}</p>
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-0 capitalize">
                        {source.integrationStatus.replace("-", " ")}
                      </Badge>
                    </div>
                    <p className="mt-3 text-sm text-slate-500">{source.syncStrategy}</p>
                    {source.visibilityNotes && (
                      <p className="mt-2 text-xs text-amber-600">
                        <strong className="uppercase tracking-wide">Visibility:</strong> {source.visibilityNotes}
                      </p>
                    )}
                    {source.lastSyncedAt && (
                      <p className="mt-2 text-xs text-slate-400">Last sync: {new Date(source.lastSyncedAt).toLocaleString()}</p>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              Timeline (Alpha)
            </Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Curated inflows and proof packets
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Filter the data by source to see how value moved into the business. Each record links to the artifacts that will power future case studies.
            </p>
          </div>

          <LedgerTimeline />
        </div>
      </section>

      <section className="pb-28 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Card className="bg-slate-800/70 border border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Database className="h-5 w-5" /> Data warehouse choreography
                </CardTitle>
                <CardDescription className="text-slate-300">
                  The ledger starts with a normalized event store that merges raw transactions with contextual metadata.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-slate-200">
                <p>Daily sync jobs land into a Postgres instance. Records are tagged with engagement IDs and settlement provenance.</p>
                <p>Stripe and Square fees are reconciled so net and gross values can both be reported when permissions allow.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/70 border border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <KeyRound className="h-5 w-5" /> Permissions & redaction
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Every line item is reviewed for confidentiality before it leaves the internal system.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-slate-200">
                <p>Client aliases default to anonymized names until explicit publishing approval is captured.</p>
                <p>Sensitive numbers can be redacted while still proving that the engagement existed and was paid for.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/70 border border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Lock className="h-5 w-5" /> Evidence linking
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Each transaction will eventually link to transcripts, briefs, and deliverables that prove the work.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-slate-200">
                <p>Artifacts are organized in shared drives with expiring, permissioned URLs before being surfaced on this page.</p>
                <p>The ledger acts as the launch pad for AI-assisted case study assembly.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Card className="border border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <Workflow className="h-5 w-5 text-secondary" /> Implementation checklist
                </CardTitle>
                <CardDescription>
                  Concrete steps to bring the fully automated ledger online.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-secondary" />
                  <span>Secure read-only API keys for Mercury, Stripe, and Square. Store them in environment variables within the deployment platform.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-secondary" />
                  <span>Stand up ingestion script (scheduled function or serverless cron) that hydrates the internal warehouse.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-secondary" />
                  <span>Tag and deduplicate deposits that originate from payment processors before they hit Mercury.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-secondary" />
                  <span>Attach supporting transcripts, briefs, and approvals as structured metadata in Notion or a lightweight CMS.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-secondary" />
                  <span>Expose a read-only API endpoint or static JSON feed that this page can poll for updates.</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <GitBranch className="h-5 w-5 text-secondary" /> Delivery roadmap
                </CardTitle>
                <CardDescription>
                  Milestones that track progress toward a fully public ledger experience.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {ledgerRoadmap.map((item) => (
                  <div key={item.id} className="rounded-lg border border-slate-200 bg-white p-4">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-base font-semibold text-slate-900">{item.milestone}</h3>
                      <Badge
                        className={`capitalize ${
                          item.status === "complete"
                            ? "bg-emerald-100 text-emerald-700 border-emerald-200"
                            : item.status === "in-progress"
                            ? "bg-secondary/10 text-secondary border-secondary/20"
                            : "bg-slate-100 text-slate-600 border-slate-200"
                        }`}
                      >
                        {item.status.replace("-", " ")}
                      </Badge>
                    </div>
                    {item.targetDate && (
                      <p className="mt-1 text-xs text-slate-400">Target: {item.targetDate}</p>
                    )}
                    <p className="mt-3 text-sm text-slate-600">{item.description}</p>
                    {item.dependencies && (
                      <p className="mt-2 text-xs text-slate-400">Depends on: {item.dependencies.join(", ")}</p>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-3xl text-center px-6 lg:px-0">
          <h2 className="text-3xl font-semibold text-slate-900">Want your success story recorded here?</h2>
          <p className="mt-4 text-lg text-slate-600">
            Book a strategy conversation, become a ledger entry, and unlock the evidence trail that showcases what we built together.
          </p>
          <a
            href="https://calendly.com/d/cst9-jzy-7kj/accelerated-ai-adoption-strategic-planning-call"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-white shadow-lg hover:bg-secondary/90 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a strategy session
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default LedgerPage;

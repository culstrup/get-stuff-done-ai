import { useMemo, useState } from "react";
import { format, parseISO } from "date-fns";
import {
  ledgerEntries,
  ledgerSources,
  type LedgerEntry,
  type LedgerSource,
  type LedgerSourceMeta,
} from "@/data/ledger";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Banknote,
  Building2,
  CalendarDays,
  CircleDot,
  FileText,
  Link as LinkIcon,
  Loader,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

type SourceFilter = LedgerSource | "all";

const statusStyles: Record<LedgerEntry["status"], { label: string; className: string; icon: JSX.Element }> = {
  verified: {
    label: "Verified",
    className: "bg-emerald-100 text-emerald-700 border-emerald-200",
    icon: <ShieldCheck className="h-3.5 w-3.5" />,
  },
  pending: {
    label: "Pending",
    className: "bg-amber-100 text-amber-700 border-amber-200",
    icon: <Loader className="h-3.5 w-3.5 animate-spin" />,
  },
  draft: {
    label: "Draft",
    className: "bg-slate-200 text-slate-700 border-slate-200",
    icon: <CircleDot className="h-3.5 w-3.5" />,
  },
};

const sourceMetaMap = Object.fromEntries(ledgerSources.map((source) => [source.id, source]));

const sourceIcon: Record<LedgerSource, JSX.Element> = {
  mercury: <Banknote className="h-4 w-4" />,
  checking: <Building2 className="h-4 w-4" />,
  stripe: <Banknote className="h-4 w-4" />,
  square: <Banknote className="h-4 w-4" />,
  legacy: <FileText className="h-4 w-4" />,
};

const entryTypeCopy: Record<NonNullable<LedgerEntry["entryType"]>, string> = {
  inflow: "Revenue Inflow",
  adjustment: "Adjustment",
  transfer: "Transfer",
};

const integrationStatusMeta: Record<LedgerSourceMeta["integrationStatus"], { label: string; icon: JSX.Element }> = {
  "not-started": {
    label: "Not started",
    icon: <CircleDot className="h-4 w-4 text-slate-400" />,
  },
  "in-progress": {
    label: "In progress",
    icon: <Loader className="h-4 w-4 animate-spin text-secondary" />,
  },
  live: {
    label: "Live",
    icon: <ShieldCheck className="h-4 w-4 text-emerald-500" />,
  },
};

const formatAmount = (entry: LedgerEntry) => {
  if (!entry.amount || !entry.currency || !entry.isAmountPublic) {
    return "Amount redacted";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: entry.currency,
    maximumFractionDigits: 0,
  }).format(entry.amount);
};

export const LedgerTimeline = () => {
  const [activeSource, setActiveSource] = useState<SourceFilter>("all");

  const entriesByYear = useMemo(() => {
    const filtered = ledgerEntries
      .filter((entry) => activeSource === "all" || entry.source === activeSource)
      .sort((a, b) => parseISO(b.date).getTime() - parseISO(a.date).getTime());

    return filtered.reduce<Record<string, LedgerEntry[]>>((acc, entry) => {
      const year = format(parseISO(entry.date), "yyyy");
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(entry);
      return acc;
    }, {});
  }, [activeSource]);

  const sourceFilters: { id: SourceFilter; label: string }[] = [
    { id: "all", label: "All Sources" },
    ...ledgerSources.map((source) => ({ id: source.id, label: source.name })),
  ];

  return (
    <div className="space-y-12">
      <Card className="border border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Source Filters</CardTitle>
          <CardDescription>
            Toggle data sources to understand what is currently represented in the ledger timeline.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          {sourceFilters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeSource === filter.id ? "default" : "outline"}
              className={cn(
                "rounded-full",
                activeSource === filter.id ? "bg-secondary hover:bg-secondary/90 text-white" : "border-slate-200"
              )}
              onClick={() => setActiveSource(filter.id)}
            >
              {filter.id !== "all" && sourceIcon[filter.id]}
              <span className={cn(filter.id !== "all" ? "ml-2" : "")}>{filter.label}</span>
            </Button>
          ))}
        </CardContent>
      </Card>

      <div className="space-y-8">
        {Object.entries(entriesByYear).length === 0 ? (
          <Card className="border border-dashed border-slate-200 text-center py-16">
            <CardHeader className="items-center">
              <CardTitle className="text-xl">No entries yet</CardTitle>
              <CardDescription className="max-w-md">
                Add transactions for the selected source to populate the ledger timeline. Once sources sync, they will appear here
.
              </CardDescription>
            </CardHeader>
          </Card>
        ) : (
          Object.entries(entriesByYear)
            .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
            .map(([year, entries]) => (
              <section key={year} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-secondary/40 via-secondary/60 to-transparent" />
                  <Badge className="bg-secondary/20 text-secondary border-0 px-4 py-1 text-sm">{year}</Badge>
                  <div className="h-px flex-1 bg-gradient-to-l from-secondary/40 via-secondary/60 to-transparent" />
                </div>
                <div className="space-y-6">
                  {entries.map((entry) => {
                    const meta = sourceMetaMap[entry.source];
                    const status = statusStyles[entry.status];

                    return (
                      <Card key={entry.id} className="border border-slate-200 shadow-sm">
                        <CardHeader className="space-y-3">
                          <div className="flex flex-wrap items-center gap-3">
                            <Badge className={cn("flex items-center gap-2 border", status.className)}>
                              {status.icon}
                              <span>{status.label}</span>
                            </Badge>
                            {entry.entryType && (
                              <Badge variant="outline" className="border-secondary/20 text-secondary bg-secondary/10">
                                {entryTypeCopy[entry.entryType]}
                              </Badge>
                            )}
                            <Badge variant="outline" className="border-slate-200 text-slate-600 bg-white">
                              <div className="flex items-center gap-2">
                                {sourceIcon[entry.source]}
                                <span>{meta?.name ?? entry.source}</span>
                              </div>
                            </Badge>
                          </div>

                          <CardTitle className="text-xl font-semibold">{entry.clientAlias}</CardTitle>
                          <CardDescription className="text-base text-slate-600">
                            {entry.summary}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                            <div className="flex items-center gap-2">
                              <CalendarDays className="h-4 w-4" />
                              <span>{format(parseISO(entry.date), "MMMM d, yyyy")}</span>
                            </div>
                            <Separator orientation="vertical" className="h-5" />
                            <div className="flex items-center gap-2">
                              <Banknote className="h-4 w-4" />
                              <span>{formatAmount(entry)}</span>
                            </div>
                            {meta?.integrationStatus && (
                              <>
                                <Separator orientation="vertical" className="h-5" />
                                <div className="flex items-center gap-2">
                                  {integrationStatusMeta[meta.integrationStatus].icon}
                                  <span>{`Source sync: ${integrationStatusMeta[meta.integrationStatus].label}`}</span>
                                </div>
                              </>
                            )}
                          </div>

                          {entry.tags && entry.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {entry.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-0">
                                  #{tag}
                                </Badge>
                              ))}
                            </div>
                          )}

                          {entry.artifacts && entry.artifacts.length > 0 && (
                            <div className="rounded-lg border border-dashed border-slate-200 bg-slate-50/60 p-4">
                              <h4 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                                <FileText className="h-4 w-4" /> Supporting Materials
                              </h4>
                              <ScrollArea className="max-h-48 pr-4">
                                <ul className="space-y-3 text-sm text-slate-600">
                                  {entry.artifacts.map((artifact, index) => (
                                    <li key={`${entry.id}-artifact-${index}`} className="flex items-start gap-3">
                                      <LinkIcon className="h-4 w-4 mt-0.5 text-secondary" />
                                      <div>
                                        <p className="font-medium text-slate-700">{artifact.label}</p>
                                        {artifact.url ? (
                                          <a
                                            href={artifact.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-secondary hover:underline"
                                          >
                                            View primary source
                                          </a>
                                        ) : (
                                          <p className="text-xs text-slate-500">Link coming soon</p>
                                        )}
                                        {artifact.notes && (
                                          <p className="text-xs text-slate-500 mt-1">{artifact.notes}</p>
                                        )}
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </ScrollArea>
                            </div>
                          )}

                          {entry.notes && (
                            <p className="text-sm text-slate-500 bg-amber-50/80 border border-amber-100 rounded-lg p-4">
                              {entry.notes}
                            </p>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </section>
            ))
        )}
      </div>
    </div>
  );
};

export default LedgerTimeline;

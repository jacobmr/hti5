/**
 * Duplicates Page — HTI-5 Analysis
 * Transparency page showing the 7 duplicate submissions removed from analysis
 */
import { ExternalLink } from "lucide-react";
import duplicatesData from "@data/duplicates.json";

import { POSITION_LABELS } from "@shared/const";

function regGovUrl(id: string) {
  return `https://www.regulations.gov/comment/${id}`;
}

function CommentCard({
  entry,
  variant,
}: {
  entry: {
    id: string;
    short_id: string;
    commenter: string;
    organization: string | null;
    position: string;
  };
  variant: "retained" | "removed";
}) {
  const isRetained = variant === "retained";
  return (
    <div
      className={`${isRetained ? "bg-muted/30 border-border" : "bg-muted/10 border-border/60 opacity-80"} border p-4 rounded-sm`}
    >
      <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
        {isRetained ? "Retained" : "Removed (duplicate)"}
      </div>
      <div className="text-sm font-semibold text-foreground">
        {entry.commenter}
      </div>
      {entry.organization && entry.organization !== entry.commenter && (
        <div className="text-xs text-muted-foreground">
          {entry.organization}
        </div>
      )}
      <div className="flex items-center gap-2 mt-2">
        <span className="text-xs text-muted-foreground">
          {POSITION_LABELS[entry.position] || entry.position}
        </span>
        <span className="text-muted-foreground">·</span>
        <a
          href={regGovUrl(entry.id)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-mono text-primary hover:underline"
        >
          {entry.short_id}
          <ExternalLink size={10} />
        </a>
      </div>
    </div>
  );
}

export default function DuplicatesPage() {
  const { summary, pairs } = duplicatesData;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="mb-8">
        <div className="rule-line" />
        <h1 className="font-display text-3xl font-bold mb-2">
          Duplicate Submissions
        </h1>
        <p className="text-muted-foreground text-sm max-w-2xl mb-4">
          {summary.explanation}
        </p>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: "Original Submissions", value: summary.total_original },
            { label: "Duplicates Removed", value: summary.duplicates_removed },
            {
              label: "Unique Comments Analyzed",
              value: summary.total_after_dedup,
            },
          ].map(({ label, value }) => (
            <div key={label} className="border border-border bg-card p-4">
              <div className="text-xs text-muted-foreground uppercase tracking-wider font-mono mb-1">
                {label}
              </div>
              <div className="font-display text-3xl font-bold text-foreground">
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {pairs.map((pair, i) => (
          <div key={i} className="border border-border bg-card">
            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-sm text-muted-foreground">
                      #{i + 1}
                    </span>
                    <h2 className="font-display text-lg font-bold text-foreground">
                      {pair.reason}
                    </h2>
                  </div>
                </div>
              </div>

              <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                {pair.detail}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <CommentCard entry={pair.kept} variant="retained" />
                <CommentCard entry={pair.removed} variant="removed" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rule-line-thin mt-12 pt-4 text-xs text-muted-foreground font-mono">
        All original submissions remain publicly accessible on regulations.gov
      </div>
    </div>
  );
}

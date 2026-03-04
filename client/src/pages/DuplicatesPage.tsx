/**
 * Duplicates Page — HTI-5 Analysis
 * Transparency page showing the 7 duplicate submissions removed from analysis
 */
import { ExternalLink } from "lucide-react";
import duplicatesData from "@/data/duplicates.json";

const POSITION_LABELS: Record<string, string> = {
  strongly_oppose_deregulation: "Strongly Oppose",
  oppose_deregulation: "Oppose",
  neutral_mixed: "Neutral / Mixed",
  support_deregulation: "Support",
  strongly_support_deregulation: "Strongly Support",
  unclear: "Unclear",
};

function regGovUrl(id: string) {
  return `https://www.regulations.gov/comment/${id}`;
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
                {/* Kept */}
                <div className="bg-muted/30 border border-border p-4 rounded-sm">
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                    Retained
                  </div>
                  <div className="text-sm font-semibold text-foreground">
                    {pair.kept.commenter}
                  </div>
                  {pair.kept.organization &&
                    pair.kept.organization !== pair.kept.commenter && (
                      <div className="text-xs text-muted-foreground">
                        {pair.kept.organization}
                      </div>
                    )}
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-muted-foreground">
                      {POSITION_LABELS[pair.kept.position] ||
                        pair.kept.position}
                    </span>
                    <span className="text-muted-foreground">·</span>
                    <a
                      href={regGovUrl(pair.kept.id)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-primary hover:underline"
                    >
                      {pair.kept.short_id}
                      <ExternalLink size={10} />
                    </a>
                  </div>
                </div>

                {/* Removed */}
                <div className="bg-muted/10 border border-border/60 p-4 rounded-sm opacity-80">
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                    Removed (duplicate)
                  </div>
                  <div className="text-sm font-semibold text-foreground">
                    {pair.removed.commenter}
                  </div>
                  {pair.removed.organization &&
                    pair.removed.organization !== pair.removed.commenter && (
                      <div className="text-xs text-muted-foreground">
                        {pair.removed.organization}
                      </div>
                    )}
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-muted-foreground">
                      {POSITION_LABELS[pair.removed.position] ||
                        pair.removed.position}
                    </span>
                    <span className="text-muted-foreground">·</span>
                    <a
                      href={regGovUrl(pair.removed.id)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-primary hover:underline"
                    >
                      {pair.removed.short_id}
                      <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
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

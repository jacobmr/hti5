/**
 * Themes Page — HTI-5 Analysis
 * Design: Federal Register Meets Data Journalism
 * Deep-dive analysis for each of the eleven major themes
 */
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import themesData from "@/data/themes.json";

type Theme = (typeof themesData)[0];

const POSITION_COLORS: Record<string, string> = {
  strongly_oppose_deregulation: "#C4862A",
  oppose_deregulation: "#E0A84A",
  neutral_mixed: "#8A8A8A",
  support_deregulation: "#2A7A6B",
  strongly_support_deregulation: "#1B5C4E",
  unclear: "#AAAAAA",
};

const POSITION_LABELS: Record<string, string> = {
  strongly_oppose_deregulation: "Strongly Oppose",
  oppose_deregulation: "Oppose",
  neutral_mixed: "Neutral/Mixed",
  support_deregulation: "Support",
  strongly_support_deregulation: "Strongly Support",
  unclear: "Unclear",
};

function PositionBar({ breakdown }: { breakdown: Record<string, number> }) {
  const total = Object.values(breakdown).reduce((a, b) => a + b, 0);
  if (total === 0) return null;

  const order = [
    "strongly_oppose_deregulation",
    "oppose_deregulation",
    "neutral_mixed",
    "support_deregulation",
    "strongly_support_deregulation",
    "unclear",
  ];

  return (
    <div className="mt-3">
      <div className="flex h-4 rounded-sm overflow-hidden gap-px">
        {order.map(key => {
          const count = breakdown[key] || 0;
          if (count === 0) return null;
          const pct = (count / total) * 100;
          return (
            <div
              key={key}
              style={{
                width: `${pct}%`,
                backgroundColor: POSITION_COLORS[key],
              }}
              title={`${POSITION_LABELS[key]}: ${count}`}
            />
          );
        })}
      </div>
      <div className="flex flex-wrap gap-3 mt-2">
        {order.map(key => {
          const count = breakdown[key] || 0;
          if (count === 0) return null;
          return (
            <div
              key={key}
              className="flex items-center gap-1 text-xs text-muted-foreground"
            >
              <div
                className="w-2.5 h-2.5 rounded-sm flex-shrink-0"
                style={{ backgroundColor: POSITION_COLORS[key] }}
              />
              <span>
                {POSITION_LABELS[key]}: {count}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ThemeCard({ theme }: { theme: Theme }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-border bg-card">
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-baseline gap-3">
              <h2 className="font-display text-xl font-bold text-foreground">
                {theme.label}
              </h2>
              <span className="comment-id">{theme.comment_count} comments</span>
            </div>
            {theme.dominant_position && (
              <div className="text-sm text-muted-foreground mt-0.5">
                Dominant position:{" "}
                <span className="text-foreground font-medium">
                  {POSITION_LABELS[theme.dominant_position] ||
                    theme.dominant_position}
                </span>
              </div>
            )}
          </div>
        </div>

        <PositionBar
          breakdown={
            theme.position_breakdown as unknown as Record<string, number>
          }
        />

        {theme.analysis && (
          <p className="mt-4 text-sm leading-relaxed text-foreground/80">
            {theme.analysis}
          </p>
        )}

        {(theme.top_recommendations?.length > 0 ||
          theme.notable_voices?.length > 0 ||
          theme.key_tensions?.length > 0) && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 flex items-center gap-1 text-xs text-primary hover:opacity-80"
          >
            {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            {expanded
              ? "Show less"
              : "Show recommendations, notable voices & tensions"}
          </button>
        )}
      </div>

      {expanded && (
        <div className="border-t border-border px-6 py-5 space-y-5 bg-muted/30">
          {/* Top arguments */}
          {theme.top_arguments &&
            Object.keys(theme.top_arguments).length > 0 && (
              <div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">
                  Top Arguments
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {Object.entries(
                    theme.top_arguments as unknown as Record<string, string[]>
                  ).map(([side, args]) => (
                    <div key={side}>
                      <div className="text-xs font-semibold mb-1 capitalize">
                        {side.replace(/_/g, " ")}
                      </div>
                      <ul className="space-y-1">
                        {(args as string[]).map((arg, i) => (
                          <li
                            key={i}
                            className="text-xs text-foreground/80 flex gap-1.5"
                          >
                            <span className="text-muted-foreground flex-shrink-0">
                              ·
                            </span>
                            <span>{arg}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* Top recommendations */}
          {theme.top_recommendations &&
            theme.top_recommendations.length > 0 && (
              <div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                  Top Recommendations
                </div>
                <ul className="space-y-1.5">
                  {theme.top_recommendations.map((rec, i) => (
                    <li
                      key={i}
                      className="text-sm text-foreground/80 flex gap-2"
                    >
                      <span className="text-muted-foreground flex-shrink-0 font-mono">
                        {i + 1}.
                      </span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          {/* Notable voices */}
          {theme.notable_voices && theme.notable_voices.length > 0 && (
            <div>
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                Notable Voices
              </div>
              <div className="space-y-3">
                {(
                  theme.notable_voices as Array<
                    | {
                        commenter?: string;
                        org?: string;
                        quote?: string;
                        id?: string;
                      }
                    | string
                  >
                ).map((voice, i) => {
                  if (typeof voice === "string") {
                    return (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-background border border-border rounded-sm text-foreground/80"
                      >
                        {voice}
                      </span>
                    );
                  }
                  return (
                    <div
                      key={i}
                      className="bg-background border border-border p-3"
                    >
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <div>
                          <span className="text-xs font-semibold text-foreground">
                            {voice.commenter}
                          </span>
                          {voice.org && (
                            <span className="text-xs text-muted-foreground ml-1">
                              · {voice.org}
                            </span>
                          )}
                        </div>
                        {voice.id && (
                          <a
                            href={`https://www.regulations.gov/comment/${voice.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-mono text-primary hover:underline flex-shrink-0"
                          >
                            {voice.id.split("-").pop()}
                          </a>
                        )}
                      </div>
                      {voice.quote && (
                        <blockquote className="text-xs italic text-foreground/70 border-l-2 border-primary/40 pl-2 mt-1">
                          &ldquo;{voice.quote}&rdquo;
                        </blockquote>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Key tensions */}
          {theme.key_tensions && theme.key_tensions.length > 0 && (
            <div>
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                Key Tensions
              </div>
              <ul className="space-y-1.5">
                {theme.key_tensions.map((tension, i) => (
                  <li key={i} className="text-sm text-foreground/80 flex gap-2">
                    <span className="text-muted-foreground flex-shrink-0">
                      ↔
                    </span>
                    <span>{tension}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function ThemesPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="mb-8">
        <div className="rule-line" />
        <h1 className="font-display text-3xl font-bold mb-2">
          Thematic Analysis
        </h1>
        <p className="text-muted-foreground text-sm max-w-2xl mb-4">
          Comments were analyzed and grouped into major themes. Each theme shows
          the position breakdown among comments that addressed it, the dominant
          arguments on each side, and the most frequently cited recommendations.
          Themes are ordered by comment frequency and safety relevance.
        </p>
        <div className="bg-muted/40 border border-border p-4 rounded-sm text-sm leading-relaxed space-y-3 text-foreground/80">
          <p>
            <strong>Safety is the through-line connecting these themes.</strong>{" "}
            Across domains—audit logs, clinical decision support attribution, AI
            governance, C-CDA standards, and data preservation—commenters
            emphasized that usability improvements are meaningless if they
            compromise the ability to detect errors, ensure accountability, or
            maintain system integrity. The central tension is not whether to
            modernize, but whether removing standards is the right way to do it.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {themesData.map(theme => (
          <ThemeCard key={theme.key} theme={theme} />
        ))}
      </div>

      <div className="rule-line-thin mt-12 pt-4 text-xs text-muted-foreground font-mono">
        Themes identified via LLM analysis of 298 unique comments · Expand each
        theme for full detail
      </div>
    </div>
  );
}

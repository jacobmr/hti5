/**
 * Comments Page — HTI-5 Analysis
 * Design: Federal Register Meets Data Journalism
 * Searchable, filterable list of all 274 substantive comments
 */
import { useState, useMemo } from "react";
import { Search, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import commentsData from "@/data/comments.json";
import coordinationData from "@/data/coordination_groups.json";

type Comment = (typeof commentsData)[0];

const POSITION_LABELS: Record<string, string> = {
  strongly_oppose_deregulation: "Strongly Oppose",
  oppose_deregulation: "Oppose",
  neutral_mixed: "Neutral / Mixed",
  support_deregulation: "Support",
  strongly_support_deregulation: "Strongly Support",
  unclear: "Unclear",
};

const POSITION_BADGE: Record<string, string> = {
  strongly_oppose_deregulation: "badge-oppose",
  oppose_deregulation: "badge-oppose",
  neutral_mixed: "badge-neutral",
  support_deregulation: "badge-support",
  strongly_support_deregulation: "badge-support",
  unclear: "badge-unclear",
};

const THEME_LABELS: Record<string, string> = {
  interoperability: "Interoperability",
  burden_reduction: "Burden Reduction",
  patient_safety: "Patient Safety",
  fhir_standards: "FHIR Standards",
  ai_regulation: "AI Regulation",
  audit_log_standards: "Audit Logs",
  data_privacy: "Data Privacy",
  clinical_workflow: "Clinical Workflow",
  ccda_removal: "C-CDA",
  information_blocking: "Info Blocking",
  health_equity: "Health Equity",
  uscdi_data_classes: "USCDI",
  vendor_burden: "Vendor Burden",
  ehi_export: "EHI Export",
  data_integrity: "Data Integrity",
};

const ORG_TYPE_LABELS: Record<string, string> = {
  professional_association: "Professional Association",
  health_it_company: "Health IT Company",
  advocacy_group: "Advocacy Group",
  health_system: "Health System",
  individual_clinician: "Individual Clinician",
  government_agency: "Government Agency",
  academic_research: "Academic / Research",
  payer: "Payer",
  other: "Other",
};

const ALL_POSITIONS = [
  "strongly_oppose_deregulation",
  "oppose_deregulation",
  "neutral_mixed",
  "support_deregulation",
  "strongly_support_deregulation",
  "unclear",
];
const ALL_THEMES = Object.keys(THEME_LABELS);

// Build coordination lookup: comment ID -> group ID
const coordinationLookup = new Map<string, string>();
(
  coordinationData.groups as Array<{ id: string; comment_ids: string[] }>
).forEach(group => {
  group.comment_ids.forEach(commentId => {
    coordinationLookup.set(commentId, group.id);
  });
});

function CommentCard({ comment }: { comment: Comment }) {
  const [expanded, setExpanded] = useState(false);
  const badgeClass = POSITION_BADGE[comment.position] || "badge-unclear";
  const coordinationGroupId = coordinationLookup.get(comment.id);
  const coordinationGroup = coordinationGroupId
    ? (
        coordinationData.groups as Array<{
          id: string;
          label: string;
          count: number;
        }>
      ).find(g => g.id === coordinationGroupId)
    : null;
  const hasCoI = comment.org_type === "health_it_company";

  return (
    <div className="border border-border bg-card p-5 hover:border-primary/40 transition-colors">
      <div className="flex flex-wrap items-start gap-2 mb-2">
        <span
          className={`inline-block text-xs px-2 py-0.5 rounded-sm font-medium ${badgeClass}`}
        >
          {POSITION_LABELS[comment.position] || comment.position}
        </span>
        {coordinationGroup && (
          <span
            className="inline-block text-xs px-2 py-0.5 rounded-sm bg-amber/10 text-amber-900 border border-amber/20"
            title={`Shares language with ${coordinationGroup.count} other submissions in the ${coordinationGroup.label} campaign`}
          >
            Coordinated campaign
          </span>
        )}
        {hasCoI && (
          <span
            className="inline-block text-xs px-2 py-0.5 rounded-sm bg-slate-100 text-slate-700 border border-slate-200"
            title="This commenter represents a health IT company with direct financial interest in reduced compliance requirements"
          >
            💼 Financial interest
          </span>
        )}
        {comment.has_attachment && (
          <span className="inline-block text-xs px-2 py-0.5 rounded-sm bg-muted text-muted-foreground border border-border">
            Has attachment
          </span>
        )}
      </div>

      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-foreground leading-snug">
            {comment.commenter}
            {comment.organization && (
              <span className="font-normal text-muted-foreground">
                {" "}
                · {comment.organization}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3 mt-0.5">
            <span className="comment-id">{comment.id}</span>
            {comment.org_type &&
              comment.org_type !== "other" &&
              comment.org_type !== "unknown" && (
                <span className="text-xs text-muted-foreground">
                  {ORG_TYPE_LABELS[comment.org_type] || comment.org_type}
                </span>
              )}
            {comment.posted_date && (
              <span className="text-xs text-muted-foreground">
                {comment.posted_date.split("T")[0]}
              </span>
            )}
          </div>
        </div>
        <a
          href={comment.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 text-muted-foreground hover:text-primary transition-colors"
          title="View on regulations.gov"
        >
          <ExternalLink size={14} />
        </a>
      </div>

      {comment.summary && (
        <p className="mt-3 text-sm leading-relaxed text-foreground/80 line-clamp-3">
          {comment.summary}
        </p>
      )}

      {(comment.notable_quote || comment.recommendations?.length > 0) && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 flex items-center gap-1 text-xs text-primary hover:opacity-80 transition-opacity"
        >
          {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          {expanded ? "Show less" : "Show quote & recommendations"}
        </button>
      )}

      {expanded && (
        <div className="mt-3 space-y-3">
          {comment.notable_quote && (
            <div className="pull-quote text-sm">"{comment.notable_quote}"</div>
          )}
          {comment.recommendations && comment.recommendations.length > 0 && (
            <div>
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                Recommendations
              </div>
              <ul className="space-y-1">
                {comment.recommendations.map((rec, i) => (
                  <li key={i} className="text-sm text-foreground/80 flex gap-2">
                    <span className="text-muted-foreground flex-shrink-0">
                      —
                    </span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {comment.themes && comment.themes.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {comment.themes.map(t => (
            <span
              key={t}
              className="text-xs px-1.5 py-0.5 bg-muted text-muted-foreground rounded-sm border border-border"
            >
              {THEME_LABELS[t as keyof typeof THEME_LABELS] ||
                (t as string).replace(/_/g, " ")}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CommentsPage() {
  const [query, setQuery] = useState("");
  const [selectedPositions, setSelectedPositions] = useState<string[]>([]);
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [selectedOrgType, setSelectedOrgType] = useState("");
  const [showOnlyCoordinated, setShowOnlyCoordinated] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [page, setPage] = useState(1);
  const PER_PAGE = 25;

  const filtered = useMemo(() => {
    let results = commentsData as Comment[];

    if (query.trim()) {
      const q = query.toLowerCase();
      results = results.filter(
        c =>
          c.commenter.toLowerCase().includes(q) ||
          c.organization.toLowerCase().includes(q) ||
          c.summary.toLowerCase().includes(q) ||
          c.notable_quote.toLowerCase().includes(q) ||
          c.id.toLowerCase().includes(q)
      );
    }

    if (selectedPositions.length > 0) {
      results = results.filter(c => selectedPositions.includes(c.position));
    }

    if (selectedThemes.length > 0) {
      results = results.filter(c =>
        selectedThemes.some(t => (c.themes as string[]).includes(t))
      );
    }

    if (selectedOrgType) {
      results = results.filter(c => c.org_type === selectedOrgType);
    }

    if (showOnlyCoordinated) {
      results = results.filter(c => coordinationLookup.has(c.id));
    }

    return results;
  }, [
    query,
    selectedPositions,
    selectedThemes,
    selectedOrgType,
    showOnlyCoordinated,
  ]);

  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const totalPages = Math.ceil(filtered.length / PER_PAGE);

  const togglePosition = (p: string) => {
    setPage(1);
    setSelectedPositions(prev =>
      prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]
    );
  };

  const toggleTheme = (t: string) => {
    setPage(1);
    setSelectedThemes(prev =>
      prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <div className="rule-line" />
        <h1 className="font-display text-3xl font-bold mb-2">
          Public Comments
        </h1>
        <p className="text-muted-foreground text-sm">
          {commentsData.length} comments with substantive text, searchable and
          filterable.
        </p>
      </div>

      {/* Search bar */}
      <div className="relative mb-4">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        <input
          type="text"
          placeholder="Search by commenter, organization, or content…"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
            setPage(1);
          }}
          className="w-full pl-9 pr-4 py-2.5 border border-border bg-card text-foreground text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-primary"
          style={{ fontFamily: "var(--font-body)" }}
        />
      </div>

      {/* Filter toggle */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="text-sm text-primary flex items-center gap-1 hover:opacity-80"
        >
          {showFilters ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          {showFilters ? "Hide filters" : "Show filters"}
          {selectedPositions.length +
            selectedThemes.length +
            (selectedOrgType ? 1 : 0) +
            (showOnlyCoordinated ? 1 : 0) >
            0 && (
            <span className="ml-1 bg-primary text-primary-foreground text-xs px-1.5 py-0.5 rounded-full">
              {selectedPositions.length +
                selectedThemes.length +
                (selectedOrgType ? 1 : 0) +
                (showOnlyCoordinated ? 1 : 0)}
            </span>
          )}
        </button>
        <span className="text-xs text-muted-foreground font-mono">
          {filtered.length} result{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Filters panel */}
      {showFilters && (
        <div className="border border-border bg-card p-4 mb-6 space-y-4">
          {/* Position filter */}
          <div>
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
              Position
            </div>
            <div className="flex flex-wrap gap-2">
              {ALL_POSITIONS.map(p => (
                <button
                  key={p}
                  onClick={() => togglePosition(p)}
                  className={`text-xs px-2.5 py-1 rounded-sm border transition-colors ${
                    selectedPositions.includes(p)
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-foreground border-border hover:border-primary/50"
                  }`}
                >
                  {POSITION_LABELS[p]}
                </button>
              ))}
            </div>
          </div>

          {/* Theme filter */}
          <div>
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
              Theme
            </div>
            <div className="flex flex-wrap gap-2">
              {ALL_THEMES.map(t => (
                <button
                  key={t}
                  onClick={() => toggleTheme(t)}
                  className={`text-xs px-2.5 py-1 rounded-sm border transition-colors ${
                    selectedThemes.includes(t)
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-foreground border-border hover:border-primary/50"
                  }`}
                >
                  {THEME_LABELS[t as keyof typeof THEME_LABELS] ||
                    (t as string).replace(/_/g, " ")}
                </button>
              ))}
            </div>
          </div>

          {/* Org type filter */}
          <div>
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
              Organization Type
            </div>
            <select
              value={selectedOrgType}
              onChange={e => {
                setSelectedOrgType(e.target.value);
                setPage(1);
              }}
              className="text-sm border border-border bg-background text-foreground px-3 py-1.5 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <option value="">All types</option>
              {Object.entries(ORG_TYPE_LABELS).map(([k, v]) => (
                <option key={k} value={k}>
                  {v}
                </option>
              ))}
            </select>
          </div>

          {/* Coordination filter */}
          <div>
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
              Campaign Coordination
            </div>
            <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary transition-colors">
              <input
                type="checkbox"
                checked={showOnlyCoordinated}
                onChange={e => {
                  setShowOnlyCoordinated(e.target.checked);
                  setPage(1);
                }}
                className="w-4 h-4 rounded border border-border cursor-pointer"
              />
              Show only coordinated comments
            </label>
          </div>

          {/* Clear filters */}
          {selectedPositions.length +
            selectedThemes.length +
            (selectedOrgType ? 1 : 0) +
            (showOnlyCoordinated ? 1 : 0) >
            0 && (
            <button
              onClick={() => {
                setSelectedPositions([]);
                setSelectedThemes([]);
                setSelectedOrgType("");
                setShowOnlyCoordinated(false);
                setPage(1);
              }}
              className="text-xs text-destructive hover:opacity-80"
            >
              Clear all filters
            </button>
          )}
        </div>
      )}

      {/* Comment list */}
      <div className="space-y-3">
        {paginated.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            No comments match your search criteria.
          </div>
        ) : (
          paginated.map(c => <CommentCard key={c.id} comment={c} />)
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="text-sm px-3 py-1.5 border border-border rounded-sm disabled:opacity-40 hover:border-primary/50 transition-colors"
          >
            ← Previous
          </button>
          <span className="text-sm font-mono text-muted-foreground">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="text-sm px-3 py-1.5 border border-border rounded-sm disabled:opacity-40 hover:border-primary/50 transition-colors"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}

/**
 * AssessmentPage — Comment Quality & Logical Outgrowth Analysis
 * Shows understanding scores and logical outgrowth classifications
 * for all 298 HTI-5 comments against the NPRM.
 */

import { useState, useMemo } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import assessmentData from "@data/comment_assessments.json";
import commentsData from "@data/comments.json";

type Assessment = (typeof assessmentData.assessments)[0];
type Comment = (typeof commentsData)[0];

// Build comment lookup for URLs
const commentMap = new Map<string, Comment>();
for (const c of commentsData) {
  commentMap.set(c.id, c as Comment);
}

const UNDERSTANDING_COLORS: Record<number, string> = {
  0: "bg-red-100 text-red-800 border-red-200",
  1: "bg-orange-100 text-orange-800 border-orange-200",
  2: "bg-amber-100 text-amber-800 border-amber-200",
  3: "bg-sky-100 text-sky-800 border-sky-200",
  4: "bg-emerald-100 text-emerald-800 border-emerald-200",
  5: "bg-indigo-100 text-indigo-800 border-indigo-200",
};

const OUTGROWTH_LABELS: Record<string, { label: string; color: string }> = {
  within_scope: {
    label: "Within Scope",
    color: "bg-emerald-100 text-emerald-800 border-emerald-200",
  },
  likely_within: {
    label: "Likely Within",
    color: "bg-sky-100 text-sky-800 border-sky-200",
  },
  borderline: {
    label: "Borderline",
    color: "bg-amber-100 text-amber-800 border-amber-200",
  },
  outside_scope: {
    label: "Outside Scope",
    color: "bg-red-100 text-red-800 border-red-200",
  },
  not_applicable: {
    label: "N/A",
    color: "bg-gray-100 text-gray-600 border-gray-200",
  },
};

const POSTURE_LABELS: Record<string, { label: string; color: string }> = {
  accept: {
    label: "Accept",
    color: "bg-emerald-100 text-emerald-800",
  },
  accept_with_modification: {
    label: "Accept w/ Modification",
    color: "bg-teal-100 text-teal-800",
  },
  partially_accept: {
    label: "Partially Accept",
    color: "bg-sky-100 text-sky-800",
  },
  acknowledge: {
    label: "Acknowledge",
    color: "bg-gray-100 text-gray-700",
  },
  reject: {
    label: "Reject",
    color: "bg-red-100 text-red-800",
  },
};

const PROVISION_LABELS: Record<string, string> = {
  certification_removal_general: "Certification Removal (General)",
  privacy_security_criteria: "Privacy/Security Criteria",
  audit_log_criteria: "Audit Log Criteria",
  cds_removal: "CDS Removal",
  dsi_ai_model_card: "DSI/AI Model Card",
  ccda_transition: "C-CDA Transition",
  uscdi_data_elements: "USCDI Data Elements",
  information_blocking: "Information Blocking",
  tefca_removal: "TEFCA Removal",
  real_world_testing: "Real World Testing",
  patient_demographics: "Patient Demographics",
  public_health_reporting: "Public Health Reporting",
  burden_reduction_general: "Burden Reduction (General)",
  multiple_provisions: "Multiple Provisions",
  general_comment: "General Comment",
};

function AssessmentRow({ assessment }: { assessment: Assessment }) {
  const [expanded, setExpanded] = useState(false);
  const comment = commentMap.get(assessment.comment_id);
  const outgrowthInfo =
    OUTGROWTH_LABELS[assessment.logical_outgrowth] ||
    OUTGROWTH_LABELS.not_applicable;
  const postureInfo =
    POSTURE_LABELS[assessment.agency_posture] || POSTURE_LABELS.acknowledge;

  return (
    <div className="border border-border bg-card hover:border-primary/30 transition-colors">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left px-5 py-4"
      >
        <div className="flex items-start gap-3">
          {/* Understanding score circle */}
          <div
            className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border ${UNDERSTANDING_COLORS[assessment.understanding_score]}`}
          >
            {assessment.understanding_score}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-foreground text-sm">
                {assessment.commenter}
              </span>
              {assessment.organization && (
                <span className="text-xs text-muted-foreground">
                  · {assessment.organization}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              <span className="comment-id">{assessment.comment_id}</span>
              <span
                className={`text-xs px-1.5 py-0.5 rounded-sm border ${outgrowthInfo.color}`}
              >
                {outgrowthInfo.label}
              </span>
              <span className="text-xs text-muted-foreground">
                {PROVISION_LABELS[assessment.provision_addressed] ||
                  assessment.provision_addressed.replace(/_/g, " ")}
              </span>
            </div>
          </div>

          <div className="flex-shrink-0 text-muted-foreground">
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
        </div>
      </button>

      {expanded && (
        <div className="px-5 pb-5 pt-0 space-y-4 border-t border-border/50 mt-0">
          <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Understanding */}
            <div>
              <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1.5">
                Understanding
              </h4>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`text-xs px-2 py-0.5 rounded-sm border font-medium ${UNDERSTANDING_COLORS[assessment.understanding_score]}`}
                >
                  {assessment.understanding_score}/5 —{" "}
                  {assessment.understanding_label}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {assessment.understanding_rationale}
              </p>
            </div>

            {/* Logical Outgrowth */}
            <div>
              <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1.5">
                Logical Outgrowth
              </h4>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`text-xs px-2 py-0.5 rounded-sm border font-medium ${outgrowthInfo.color}`}
                >
                  {outgrowthInfo.label}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {assessment.outgrowth_rationale}
              </p>
            </div>

            {/* Agency Posture */}
            <div>
              <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1.5">
                Agency Posture
              </h4>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`text-xs px-2 py-0.5 rounded-sm font-medium ${postureInfo.color}`}
                >
                  {postureInfo.label}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {assessment.posture_rationale}
              </p>
            </div>
          </div>

          {/* Link to full comment */}
          {comment && (
            <div className="flex items-center gap-3 pt-2">
              <a
                href={comment.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-primary hover:opacity-80 transition-opacity"
              >
                <ExternalLink size={12} />
                View on regulations.gov
              </a>
              <Link
                href={`/comments?q=${encodeURIComponent(assessment.comment_id)}`}
                className="inline-flex items-center gap-1.5 text-xs text-primary hover:opacity-80 transition-opacity"
              >
                View in Comments
                <ArrowRight size={12} />
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Bar chart component for distributions
function DistributionBar({
  label,
  count,
  total,
  color,
}: {
  label: string;
  count: number;
  total: number;
  color: string;
}) {
  const pct = ((count / total) * 100).toFixed(1);
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-muted-foreground w-24 text-right flex-shrink-0">
        {label}
      </span>
      <div className="flex-1 bg-muted/50 rounded-full h-5 overflow-hidden">
        <div
          className={`h-full rounded-full ${color} flex items-center justify-end px-2`}
          style={{ width: `${Math.max(Number(pct), 2)}%` }}
        >
          {Number(pct) > 8 && (
            <span className="text-xs font-medium">{count}</span>
          )}
        </div>
      </div>
      {Number(pct) <= 8 && (
        <span className="text-xs text-muted-foreground w-8">{count}</span>
      )}
    </div>
  );
}

export default function AssessmentPage() {
  const { summary, assessments } = assessmentData;
  const [filterScore, setFilterScore] = useState<number | null>(null);
  const [filterOutgrowth, setFilterOutgrowth] = useState<string | null>(null);
  const [filterProvision, setFilterProvision] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"id" | "score_asc" | "score_desc">("id");
  const [page, setPage] = useState(1);
  const PER_PAGE = 30;

  const filtered = useMemo(() => {
    let results = assessments as Assessment[];

    if (filterScore !== null) {
      results = results.filter(a => a.understanding_score === filterScore);
    }
    if (filterOutgrowth) {
      results = results.filter(a => a.logical_outgrowth === filterOutgrowth);
    }
    if (filterProvision) {
      results = results.filter(a => a.provision_addressed === filterProvision);
    }

    if (sortBy === "score_asc") {
      results = [...results].sort(
        (a, b) => a.understanding_score - b.understanding_score
      );
    } else if (sortBy === "score_desc") {
      results = [...results].sort(
        (a, b) => b.understanding_score - a.understanding_score
      );
    }

    return results;
  }, [assessments, filterScore, filterOutgrowth, filterProvision, sortBy]);

  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const totalPages = Math.ceil(filtered.length / PER_PAGE);

  // Reset page when filters change
  useMemo(() => setPage(1), [filterScore, filterOutgrowth, filterProvision]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Comment Quality Assessment
          </h1>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Each of the 298 comments is scored on how well the commenter
            understands the HTI-5 proposal and existing regulatory framework,
            and whether their requested changes fall within the APA's{" "}
            <strong>logical outgrowth doctrine</strong> — a legal requirement
            that final rules be foreseeable from the proposed rule.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
        {/* Summary cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="text-3xl font-bold text-federal-blue">
              {summary.average_understanding}
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Avg. Understanding
            </div>
            <div className="text-xs text-muted-foreground">out of 5</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="text-3xl font-bold text-federal-blue">
              {summary.outgrowth_distribution.within_scope ?? 0}
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Within Scope
            </div>
            <div className="text-xs text-muted-foreground">
              of {summary.total_assessed} comments
            </div>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="text-3xl font-bold text-federal-blue">
              {(summary.understanding_distribution as Record<string, number>)[
                "4"
              ] +
                (summary.understanding_distribution as Record<string, number>)[
                  "5"
                ]}
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Strong/Expert
            </div>
            <div className="text-xs text-muted-foreground">scored 4 or 5</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="text-3xl font-bold text-federal-blue">
              {summary.outgrowth_distribution.borderline ?? 0}
            </div>
            <div className="text-sm text-muted-foreground mt-1">Borderline</div>
            <div className="text-xs text-muted-foreground">
              outgrowth questions
            </div>
          </div>
        </div>

        {/* Distribution charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Understanding distribution */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="font-display text-lg font-bold text-foreground mb-4">
              Understanding Scores
            </h2>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1, 0].map(score => {
                const count =
                  (
                    summary.understanding_distribution as Record<string, number>
                  )[String(score)] || 0;
                const labels = [
                  "Off-topic",
                  "Weak",
                  "Partial",
                  "Adequate",
                  "Strong",
                  "Expert",
                ];
                return (
                  <button
                    key={score}
                    onClick={() =>
                      setFilterScore(filterScore === score ? null : score)
                    }
                    className={`w-full ${filterScore === score ? "ring-2 ring-federal-blue rounded" : ""}`}
                  >
                    <DistributionBar
                      label={`${score} ${labels[score]}`}
                      count={count}
                      total={summary.total_assessed}
                      color={
                        score >= 4
                          ? "bg-emerald-200 text-emerald-900"
                          : score === 3
                            ? "bg-sky-200 text-sky-900"
                            : score === 2
                              ? "bg-amber-200 text-amber-900"
                              : "bg-red-200 text-red-900"
                      }
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Outgrowth distribution */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="font-display text-lg font-bold text-foreground mb-4">
              Logical Outgrowth
            </h2>
            <div className="space-y-2">
              {[
                "within_scope",
                "likely_within",
                "borderline",
                "outside_scope",
                "not_applicable",
              ].map(key => {
                const count =
                  (summary.outgrowth_distribution as Record<string, number>)[
                    key
                  ] || 0;
                const info = OUTGROWTH_LABELS[key];
                return (
                  <button
                    key={key}
                    onClick={() =>
                      setFilterOutgrowth(filterOutgrowth === key ? null : key)
                    }
                    className={`w-full ${filterOutgrowth === key ? "ring-2 ring-federal-blue rounded" : ""}`}
                  >
                    <DistributionBar
                      label={info.label}
                      count={count}
                      total={summary.total_assessed}
                      color={
                        key === "within_scope"
                          ? "bg-emerald-200 text-emerald-900"
                          : key === "likely_within"
                            ? "bg-sky-200 text-sky-900"
                            : key === "borderline"
                              ? "bg-amber-200 text-amber-900"
                              : key === "outside_scope"
                                ? "bg-red-200 text-red-900"
                                : "bg-gray-200 text-gray-700"
                      }
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active filters & sort */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="text-sm text-muted-foreground">
            {filtered.length} of {assessments.length} comments
          </span>

          {(filterScore !== null ||
            filterOutgrowth !== null ||
            filterProvision !== null) && (
            <button
              onClick={() => {
                setFilterScore(null);
                setFilterOutgrowth(null);
                setFilterProvision(null);
              }}
              className="text-xs text-primary hover:opacity-80 transition-opacity"
            >
              Clear filters
            </button>
          )}

          <div className="ml-auto flex items-center gap-2">
            <label className="text-xs text-muted-foreground">Sort:</label>
            <select
              value={sortBy}
              onChange={e =>
                setSortBy(e.target.value as "id" | "score_asc" | "score_desc")
              }
              className="text-xs border border-border rounded px-2 py-1 bg-background text-foreground"
            >
              <option value="id">Comment ID</option>
              <option value="score_desc">Score (high to low)</option>
              <option value="score_asc">Score (low to high)</option>
            </select>
          </div>
        </div>

        {/* Assessment list */}
        <div className="space-y-1">
          {paged.map(a => (
            <AssessmentRow key={a.comment_id} assessment={a} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-8">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="px-3 py-1.5 text-sm border border-border rounded bg-card text-foreground disabled:opacity-40 hover:bg-muted transition-colors"
            >
              Previous
            </button>
            <span className="text-sm text-muted-foreground">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className="px-3 py-1.5 text-sm border border-border rounded bg-card text-foreground disabled:opacity-40 hover:bg-muted transition-colors"
            >
              Next
            </button>
          </div>
        )}

        {/* Methodology link */}
        <div className="mt-12 bg-card border border-border rounded-lg p-6 lg:p-8">
          <h2 className="font-display text-lg font-bold text-foreground mb-4">
            About This Assessment
          </h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              Each comment is evaluated on two dimensions:{" "}
              <strong>understanding</strong> (0–5 scale measuring how accurately
              the commenter grasps the existing regulatory framework, the NPRM
              proposal, and the distinction between certification requirements
              and underlying law like HIPAA) and{" "}
              <strong>logical outgrowth</strong> (whether the requested change
              could legally be adopted in a final rule without re-proposing
              under the APA).
            </p>
            <p>
              Scoring uses heuristic analysis combining keyword detection,
              regulatory citation patterns, and existing theme/position data.
              All scoring logic is transparent and available in the{" "}
              <a
                href="https://github.com/jacobmr/hti5/blob/main/scripts/generate-assessments.mjs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:opacity-80 transition-opacity"
              >
                assessment script
              </a>
              . The full methodology is documented in{" "}
              <a
                href="https://github.com/jacobmr/hti5/blob/main/source/assessment-methodology.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:opacity-80 transition-opacity"
              >
                assessment-methodology.md
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

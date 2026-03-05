/**
 * CoordinationPage — Comment Campaign Analysis
 * Visualizes organized comment campaigns in federal rulemaking
 */

import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import coordinationData from "@data/coordination_groups.json";

interface CoordinationGroup {
  id: string;
  campaign_type: string;
  label: string;
  description: string;
  theme: string;
  stance: string;
  count: number;
  comment_ids: string[];
  fingerprint_phrases: string[];
  significance: string;
  temporal_note: string | null;
  org_breakdown: string;
  overlap_note?: string;
}

const CAMPAIGN_TYPE_LABELS: Record<string, string> = {
  organized_campaign: "Organized Campaign",
  industry_alignment: "Industry Alignment",
  institutional_alignment: "Institutional Alignment",
  coalition_submission: "Coalition Submissions",
};

const STANCE_LABELS: Record<string, string> = {
  oppose_deregulation: "Oppose Deregulation",
  support_deregulation: "Support Deregulation",
  mixed: "Mixed Positions",
};

export default function CoordinationPage() {
  const groups = coordinationData.groups as CoordinationGroup[];
  const summary = coordinationData.summary;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Comment Campaign Analysis
          </h1>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Coordinated comment campaigns are a normal, legal feature of federal
            rulemaking. Identifying them helps readers understand which
            arguments represent organized advocacy versus independent voices.
            This analysis detects patterns of intent — shared policy goals,
            organizational alignment, temporal clustering, and talking point
            convergence — not just text matching.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        {/* Summary card */}
        <div className="bg-card border border-border rounded-lg p-6 lg:p-8 mb-8">
          <div className="grid grid-cols-3 gap-6 lg:gap-8">
            <div>
              <div className="text-4xl font-bold text-federal-blue">
                {summary.campaigns_identified}
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                campaigns identified
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-federal-blue">
                {summary.unique_after_dedup}
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                unique comments involved
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-federal-blue">
                {summary.pct_of_comments}%
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                of all 298 comments
              </div>
            </div>
          </div>
          {summary.overlap_note && (
            <p className="text-xs text-muted-foreground mt-4 border-t border-border pt-4">
              {summary.overlap_note}
            </p>
          )}
        </div>

        {/* Campaign groups */}
        {groups.length > 0 ? (
          <div className="space-y-8">
            {groups.map(group => (
              <div
                key={group.id}
                className="bg-card border border-border rounded-lg overflow-hidden"
              >
                {/* Campaign header */}
                <div className="bg-gradient-to-r from-federal-blue/10 to-transparent px-6 lg:px-8 py-6 border-b border-border">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h2 className="font-display text-xl lg:text-2xl font-bold text-foreground">
                        {group.label}
                      </h2>
                      <span className="text-xs text-muted-foreground uppercase tracking-wide">
                        {CAMPAIGN_TYPE_LABELS[group.campaign_type] ??
                          group.campaign_type}
                      </span>
                    </div>
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-federal-blue/10 text-federal-blue whitespace-nowrap ml-4">
                      {group.count} comments
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {((group.count / 298) * 100).toFixed(1)}% of comment period
                  </p>
                </div>

                {/* Campaign details */}
                <div className="px-6 lg:px-8 py-6 space-y-6">
                  {/* Description */}
                  <div>
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">
                      Overview
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {group.description}
                    </p>
                  </div>

                  {/* Theme & Stance */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">
                        Primary Theme
                      </h3>
                      <p className="text-sm text-muted-foreground capitalize">
                        {group.theme.replace(/_/g, " ")}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">
                        Stance
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {STANCE_LABELS[group.stance] ?? group.stance}
                      </p>
                    </div>
                  </div>

                  {/* Significance */}
                  <div>
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">
                      Significance
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {group.significance}
                    </p>
                  </div>

                  {/* Temporal evidence (if present) */}
                  {group.temporal_note && (
                    <div>
                      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">
                        Temporal Evidence
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {group.temporal_note}
                      </p>
                    </div>
                  )}

                  {/* Overlap note (if present) */}
                  {group.overlap_note && (
                    <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded px-4 py-3">
                      <p className="text-sm text-amber-800 dark:text-amber-200">
                        {group.overlap_note}
                      </p>
                    </div>
                  )}

                  {/* Shared signals */}
                  <div>
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                      Shared Signals
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.fingerprint_phrases.map(phrase => (
                        <span
                          key={phrase}
                          className="bg-federal-blue/5 border border-federal-blue/20 rounded-full px-3 py-1 text-xs text-muted-foreground"
                        >
                          {phrase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View comments button */}
                  <div className="pt-4">
                    <Link
                      href={`/comments?coordination=${group.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-federal-blue text-white rounded text-sm font-medium hover:bg-federal-blue/90 transition-colors"
                    >
                      View {group.count} Comments
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <p className="text-muted-foreground">
              No major coordinated campaigns detected in this comment period.
            </p>
          </div>
        )}

        {/* Context section */}
        <div className="mt-12 bg-card border border-border rounded-lg p-6 lg:p-8">
          <h2 className="font-display text-lg font-bold text-foreground mb-4">
            About This Analysis
          </h2>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              This analysis uses <strong>intent-based detection</strong> rather
              than simple text matching. Instead of looking only for identical
              phrases, it identifies coordination through:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                Shared policy goals and talking points across organizations
              </li>
              <li>
                Temporal clustering (multiple comments submitted on the same day
                with aligned positions)
              </li>
              <li>
                Organizational alignment (industry blocs, professional networks)
              </li>
              <li>Coalition submissions representing multiple organizations</li>
            </ul>
            <p>
              Campaigns are categorized as <strong>organized campaigns</strong>{" "}
              (clear evidence of coordinated mobilization),{" "}
              <strong>industry/institutional alignment</strong> (shared interest
              without necessarily organized effort), or{" "}
              <strong>coalition submissions</strong> (single comments
              representing multiple organizations).
            </p>
            <p>
              For comparison, the entire comment period received{" "}
              <strong>298 comments</strong> from individual citizens, healthcare
              professionals, patient safety organizations, EHR vendors, and
              policy advocates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

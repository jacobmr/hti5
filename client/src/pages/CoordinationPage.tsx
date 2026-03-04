/**
 * CoordinationPage — Comment Campaign Analysis
 * Visualizes organized comment campaigns in federal rulemaking
 */

import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import coordinationData from "@/data/coordination_groups.json";

interface CoordinationGroup {
  id: string;
  label: string;
  description: string;
  theme: string;
  stance: string;
  count: number;
  comment_ids: string[];
  fingerprint_phrases: string[];
  significance: string;
}

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
            This analysis detects patterns in comment text, shared language, and
            organizational coordination.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        {/* Summary card */}
        <div className="bg-card border border-border rounded-lg p-6 lg:p-8 mb-8">
          <div className="grid grid-cols-2 gap-6 lg:gap-8">
            <div>
              <div className="text-4xl font-bold text-federal-blue">
                {summary.total_coordinated}
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                comments in organized campaigns
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-federal-blue">
                {summary.pct_of_comments}%
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                of all 305 comments submitted
              </div>
            </div>
          </div>
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
                    <h2 className="font-display text-xl lg:text-2xl font-bold text-foreground">
                      {group.label}
                    </h2>
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-federal-blue/10 text-federal-blue">
                      {group.count} comments
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {((group.count / 305) * 100).toFixed(1)}% of comment period
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
                      <p className="text-sm text-muted-foreground capitalize">
                        {group.stance === "oppose_deregulation"
                          ? "Oppose Deregulation"
                          : "Support Deregulation"}
                      </p>
                    </div>
                  </div>

                  {/* Significance */}
                  <div>
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">
                      Significance
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {group.significance}
                    </p>
                  </div>

                  {/* Fingerprint phrases */}
                  <div>
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                      Shared Language Patterns
                    </h3>
                    <div className="space-y-2">
                      {group.fingerprint_phrases.map(phrase => (
                        <div
                          key={phrase}
                          className="bg-amber/5 border border-amber/20 rounded px-3 py-2 text-sm font-mono text-muted-foreground"
                        >
                          "{phrase}"
                        </div>
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
            About Coordination Analysis
          </h2>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              Coordinated campaigns represent organized advocacy
              groups—professional associations, law firms, advocacy networks, or
              industry coalitions—that submit comments with shared language,
              arguments, or themes. These are common and legal in federal
              rulemaking.
            </p>
            <p>This analysis uses pattern matching to identify:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Shared technical phrases (e.g., standards references)</li>
              <li>Common organizational templates and opening language</li>
              <li>Text similarity clustering</li>
            </ul>
            <p>
              For comparison, the entire comment period received{" "}
              <strong>305 comments</strong> from individual citizens, healthcare
              professionals, patient safety organizations, EHR vendors, and
              policy advocates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

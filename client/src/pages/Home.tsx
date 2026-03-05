/**
 * Home / Overview Page — HTI-5 Analysis
 * Design: Federal Register Meets Data Journalism
 * Shows key stats, position distribution chart, top themes, and executive summary
 */
import { useMemo } from "react";
import { Link } from "wouter";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  Legend,
} from "recharts";
import statsData from "@data/stats.json";
import themesData from "@data/themes.json";
import commentsData from "@data/comments.json";
import coordinationData from "@data/coordination_groups.json";

import { POSITION_LABELS, POSITION_COLORS } from "@shared/const";

const THEME_LABELS: Record<string, string> = {
  fhir_standards: "FHIR Standards & Interoperability",
  burden_reduction: "Burden Reduction",
  patient_safety: "Patient Safety",
  ai_regulation: "AI Regulation & Governance",
  data_privacy: "Data Privacy & Security",
  clinical_workflow: "Clinical Workflow",
  audit_log_standards: "Audit Log Standards",
  health_equity: "Health Equity",
  information_blocking: "Information Blocking Enforcement",
  ccda_removal: "C-CDA Removal Concerns",
  uscdi_data_classes: "USCDI Data Classes",
  long_term_care: "Long-Term Care",
};

export default function Home() {
  const positionData = useMemo(() => {
    const dist = statsData.position_distribution as Record<string, number>;
    return Object.entries(dist)
      .map(([key, count]) => ({
        key,
        label: POSITION_LABELS[key] || key,
        count,
        color: POSITION_COLORS[key] || "#999",
      }))
      .sort((a, b) => b.count - a.count);
  }, []);

  const themeData = useMemo(() => {
    const top = statsData.top_themes as Record<string, number>;
    return Object.entries(top)
      .slice(0, 12)
      .map(([key, count]) => ({
        key,
        label: THEME_LABELS[key] || key.replace(/_/g, " "),
        count,
      }))
      .sort((a, b) => b.count - a.count);
  }, []);

  const orgData = useMemo(() => {
    const dist = statsData.org_type_distribution as Record<string, number>;
    const labels: Record<string, string> = {
      professional_association: "Prof. Association",
      health_it_company: "Health IT Company",
      advocacy_group: "Advocacy Group",
      health_system: "Health System",
      individual_clinician: "Individual Clinician",
      government_agency: "Government Agency",
      academic_research: "Academic / Research",
      payer: "Payer",
      other: "Other",
      unknown: "Unknown",
    };
    return Object.entries(dist)
      .filter(([k]) => k !== "unknown" && k !== "other")
      .map(([key, count]) => ({ key, label: labels[key] || key, count }))
      .sort((a, b) => b.count - a.count);
  }, []);

  const totalOppose =
    (statsData.position_distribution as Record<string, number>)
      .strongly_oppose_deregulation +
    (statsData.position_distribution as Record<string, number>)
      .oppose_deregulation;
  const totalSupport =
    (statsData.position_distribution as Record<string, number>)
      .strongly_support_deregulation +
    (statsData.position_distribution as Record<string, number>)
      .support_deregulation;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Masthead */}
      <div className="mb-10">
        <div className="rule-line" />
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
            HTI-5 Proposed Rule:
            <br className="sm:hidden" /> Public Comment Analysis
          </h1>
          <div className="text-sm text-muted-foreground font-mono whitespace-nowrap">
            March 2, 2026
          </div>
        </div>
        <p className="mt-3 text-base text-muted-foreground max-w-2xl leading-relaxed">
          A systematic analysis of 298 unique public comments submitted on{" "}
          <a
            href="https://www.regulations.gov/document/HHS-ONC-2025-0005-0001/comment"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-2 hover:opacity-80"
          >
            HHS-ONC-2025-0005-0001
          </a>
          , the ASTP/ONC proposed rule on deregulatory actions in health data
          and technology interoperability.
        </p>
        <div className="rule-line-thin mt-6" />
      </div>

      {/* Key stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          {
            label: "Total Comments",
            value: "298",
            sub: "unique submissions analyzed",
          },
          {
            label: "Oppose / Strongly Oppose",
            value: `${totalOppose}`,
            sub: `${Math.round((totalOppose / 269) * 100)}% of clear positions`,
          },
          {
            label: "Support / Strongly Support",
            value: `${totalSupport}`,
            sub: `${Math.round((totalSupport / 269) * 100)}% of clear positions`,
          },
          {
            label: "Avg. Sentiment",
            value: `${statsData.avg_sentiment?.toFixed(2) ?? "–0.73"}`,
            sub: "scale: −3 to +3",
          },
        ].map(({ label, value, sub }) => (
          <div key={label} className="border border-border bg-card p-4">
            <div className="text-xs text-muted-foreground uppercase tracking-wider font-mono mb-1">
              {label}
            </div>
            <div className="font-display text-3xl font-bold text-foreground">
              {value}
            </div>
            <div className="text-xs text-muted-foreground mt-1">{sub}</div>
          </div>
        ))}
      </div>

      {/* Position distribution chart */}
      <section className="mb-10">
        <div className="rule-line-thin mb-4" />
        <h2 className="font-display text-xl font-bold mb-1">
          Position Distribution
        </h2>
        <p className="text-sm text-muted-foreground mb-5">
          How commenters positioned themselves on the proposed deregulatory
          actions.
        </p>
        <div className="bg-card border border-border p-4">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart
              data={positionData}
              layout="vertical"
              margin={{ left: 15, right: 30, top: 5, bottom: 5 }}
            >
              <XAxis
                type="number"
                tick={{ fontSize: 12, fontFamily: "JetBrains Mono" }}
              />
              <YAxis
                type="category"
                dataKey="label"
                width={140}
                tick={{ fontSize: 12, fontFamily: "Source Serif 4" }}
              />
              <Tooltip
                formatter={(val: number) => [`${val} comments`, "Count"]}
                contentStyle={{ fontFamily: "Source Serif 4", fontSize: 13 }}
              />
              <Bar dataKey="count" radius={[0, 2, 2, 0]}>
                {positionData.map(entry => (
                  <Cell key={entry.key} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Top themes chart */}
      <section className="mb-10">
        <div className="rule-line-thin mb-4" />
        <h2 className="font-display text-xl font-bold mb-1">
          Top Comment Themes
        </h2>
        <p className="text-sm text-muted-foreground mb-5">
          Number of comments mentioning each theme. Many comments addressed
          multiple themes.
        </p>
        <div className="bg-card border border-border p-4">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={themeData}
              layout="vertical"
              margin={{ left: 15, right: 30, top: 5, bottom: 5 }}
            >
              <XAxis
                type="number"
                tick={{ fontSize: 12, fontFamily: "JetBrains Mono" }}
              />
              <YAxis
                type="category"
                dataKey="label"
                width={160}
                tick={{ fontSize: 12, fontFamily: "Source Serif 4" }}
              />
              <Tooltip
                formatter={(val: number) => [`${val} mentions`, "Count"]}
                contentStyle={{ fontFamily: "Source Serif 4", fontSize: 13 }}
              />
              <Bar
                dataKey="count"
                fill="oklch(0.32 0.09 250)"
                radius={[0, 2, 2, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Two-column: org breakdown + key finding */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Org type breakdown */}
        <section>
          <div className="rule-line-thin mb-4" />
          <h2 className="font-display text-xl font-bold mb-1">Who Commented</h2>
          <p className="text-sm text-muted-foreground mb-4">
            By organization type.
          </p>
          <div className="space-y-2">
            {orgData.map(({ key, label, count }) => (
              <div key={key} className="flex items-center gap-3">
                <div className="text-xs font-mono text-muted-foreground w-5 text-right">
                  {count}
                </div>
                <div className="flex-1 bg-muted rounded-sm overflow-hidden h-5">
                  <div
                    className="h-full bg-primary/70 transition-all"
                    style={{ width: `${(count / orgData[0].count) * 100}%` }}
                  />
                </div>
                <div className="text-sm w-40">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Key finding callout */}
        <section>
          <div className="rule-line-thin mb-4" />
          <h2 className="font-display text-xl font-bold mb-3">Key Finding</h2>
          <div className="pull-quote text-base leading-relaxed mb-4">
            "The overwhelming message is that{" "}
            <strong>usability and safety are inseparable</strong>. The health IT
            regulatory framework needs modernization and streamlining—but not
            deregulation. Stakeholders support updating standards, but{" "}
            <strong>
              categorically oppose removing them without proven replacements
            </strong>
            ."
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A sharp divide emerged by stakeholder type:
            <strong> 90% of individual clinicians</strong> (18/20) opposed the
            proposed actions, as did <strong>65.5% of advocacy groups</strong>{" "}
            (19/29) and <strong>39.6% of professional associations</strong>{" "}
            (21/53). In contrast, 53.5% of health IT companies supported them.
            This split reveals competing interests: clinicians prioritize
            safety; vendors prioritize burden reduction.
          </p>
          <div className="mt-4 flex gap-3">
            <Link
              href="/themes"
              className="text-sm text-primary underline underline-offset-2 hover:opacity-80"
            >
              Explore themes →
            </Link>
            <Link
              href="/recommendations"
              className="text-sm text-primary underline underline-offset-2 hover:opacity-80"
            >
              View recommendations →
            </Link>
          </div>
        </section>
      </div>

      {/* Coordination analysis callout */}
      <section className="mb-10">
        <div className="rule-line-thin mb-4" />
        <h2 className="font-display text-xl font-bold mb-3">
          Organized Campaigns & Aligned Interests
        </h2>
        <div className="bg-amber/5 border border-amber/20 rounded-lg p-6">
          <p className="text-base leading-relaxed text-foreground mb-3">
            Intent-based analysis identified{" "}
            <strong>
              {coordinationData.summary.campaigns_identified} campaigns
            </strong>{" "}
            involving{" "}
            <strong>
              {coordinationData.summary.unique_after_dedup} unique comments
            </strong>{" "}
            ({coordinationData.summary.pct_of_comments}% of all submissions).
            These range from organized legal advocacy networks and industry
            blocs to coalition letters representing 100+ organizations.
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Coordinated campaigns are a normal, legal feature of federal
            rulemaking. This analysis detects patterns of intent — shared policy
            goals, temporal clustering, and organizational alignment — not just
            text matching.
          </p>
          <Link
            href="/coordination"
            className="text-sm text-primary underline underline-offset-2 hover:opacity-80"
          >
            View coordination analysis →
          </Link>
        </div>
      </section>

      {/* Executive summary */}
      <section className="mb-10">
        <div className="rule-line mb-4" />
        <h2 className="font-display text-2xl font-bold mb-4">
          Executive Summary
        </h2>
        <div className="prose max-w-none text-base leading-relaxed space-y-4 text-foreground">
          <p>
            The ASTP/ONC proposed rule (HTI-5) seeks to remove or reduce health
            IT certification requirements under the guise of burden reduction.
            The public comment period closed February 27, 2026, with 298 unique
            submissions from clinicians, vendors, advocacy groups, health
            systems, government agencies, and professional associations (7{" "}
            <Link
              href="/duplicates"
              className="text-primary underline underline-offset-2 hover:opacity-80"
            >
              duplicate submissions
            </Link>{" "}
            were identified and excluded).
          </p>

          <p>
            <strong>The response was decisively negative.</strong> Average
            sentiment scored −0.73 on a −3 to +3 scale. Of 269 comments with a
            clear position, 127 (47%) opposed the proposed actions, while only
            70 (26%) supported them. The remaining 72 took neutral or mixed
            positions. Notably, some major organizations filed nuanced comments
            that resist simple categorization—HIMSS and EHRA, for example,
            support certain deregulatory steps while opposing others, reflecting
            the conditional nature of industry support.
          </p>

          <p>
            <strong>Safety concerns dominated the analysis.</strong> The most
            contentious provision was the proposed removal of audit log, data
            preservation, and privacy/security certification criteria—the very
            standards that protect clinicians and patients from system failures
            and unauthorized access. Commenters emphasized that usability gains
            mean little if they come at the cost of safety. The removal of
            <strong>
              {" "}
              source attribution requirements for clinical decision support
              systems
            </strong>{" "}
            drew particular concern: without knowing which system generated a
            recommendation, clinicians cannot properly evaluate reliability or
            identify systematic errors. Across all stakeholder types, the
            dominant message was clear:
            <strong>
              {" "}
              modernize these standards rather than discard them.
            </strong>
          </p>

          <p>
            The proposed removal of the{" "}
            <strong>C-CDA creation criterion</strong> heightened these safety
            concerns. Public health agencies and patient advocates flagged
            incomplete FHIR readiness as a critical barrier. Losing the C-CDA
            standard before FHIR alternatives are mature risks losing
            interoperability entirely during the transition.
          </p>

          <p>
            <strong>AI governance emerged as a second major flashpoint.</strong>{" "}
            The American Medical Association, College of American Pathologists,
            and dozens of clinicians called for{" "}
            <strong>retaining or strengthening</strong> AI transparency and
            governance requirements. Their argument was straightforward: AI is
            not yet mature in clinical settings. Removing oversight now, before
            regulatory frameworks catch up, creates unacceptable patient safety
            risks.
          </p>

          <p>
            <strong>Health equity and vulnerable populations</strong> received
            less attention but raised serious concerns. USCDI data elements for
            LGBTQ+ patients and caregiver information—critical for equitable
            care—faced potential loss. The impact on
            <strong> long-term and post-acute care settings</strong>, which have
            historically lagged in health IT adoption, threatens to widen
            existing inequities.
          </p>
        </div>
      </section>

      {/* Footer */}
      <div className="rule-line-thin mt-12 pt-4 text-xs text-muted-foreground font-mono">
        Analysis based on 298 unique comments fetched via regulations.gov API ·{" "}
        {commentsData.length} comments with substantive text · Generated March
        2, 2026
      </div>
    </div>
  );
}

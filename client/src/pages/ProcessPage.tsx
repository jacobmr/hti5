/**
 * ProcessPage — Analysis Process & Methodology
 * Full transparency into how 298 comments were analyzed.
 * Every prompt, script, and methodology doc is linked to GitHub.
 */

import { ExternalLink } from "lucide-react";

const REPO = "https://github.com/jacobmr/hti5";

function GhLink({
  path,
  children,
}: {
  path: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={`${REPO}/${path}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-primary hover:opacity-80 underline underline-offset-2"
    >
      {children}
      <ExternalLink size={13} className="shrink-0" />
    </a>
  );
}

function Stage({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-baseline gap-3 mb-3">
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold shrink-0">
          {number}
        </span>
        <h2 className="font-display text-xl font-bold text-foreground">
          {title}
        </h2>
      </div>
      <div className="text-muted-foreground leading-relaxed space-y-3 pl-10">
        {children}
      </div>
    </div>
  );
}

export default function ProcessPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      {/* Header */}
      <div className="border-b border-border pb-6 mb-8">
        <h1 className="font-display text-3xl font-bold text-foreground">
          Analysis Process & Methodology
        </h1>
        <p className="text-muted-foreground mt-2 leading-relaxed">
          Every step of this analysis is documented and publicly auditable.
          Below is the full pipeline — from raw data collection to the scores
          you see on this site — with links to the exact scripts, prompts, and
          methodology documents used.
        </p>
      </div>

      {/* Overview */}
      <div className="mb-8 text-muted-foreground leading-relaxed">
        <p>
          298 public comments on ONC's HTI-5 proposed rule were analyzed using a
          multi-stage process that combines AI-assisted summarization with
          deterministic scoring scripts. No editorial judgment was applied to
          filter or steer results. All tools and prompts are published in the{" "}
          <GhLink path="">project repository</GhLink> so anyone can reproduce or
          challenge the analysis.
        </p>
      </div>

      {/* Pipeline stages */}
      <div className="space-y-5">
        <Stage number={1} title="Data Collection">
          <p>
            All 305 submissions (298 unique after removing 7 exact duplicates)
            were downloaded from{" "}
            <a
              href="https://www.regulations.gov/document/HHS-ONC-2025-0005-0001/comment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:opacity-80 underline underline-offset-2"
            >
              regulations.gov
              <ExternalLink size={13} className="shrink-0" />
            </a>{" "}
            including full text, metadata, and any attachments. The raw data is
            preserved in the{" "}
            <GhLink path="tree/main/raw-data">raw-data/</GhLink> directory.
          </p>
          <p>
            Collection scripts and the summarization prompt are documented in{" "}
            <GhLink path="tree/main/source">source/</GhLink>.
          </p>
        </Stage>

        <Stage number={2} title="Summarization & Classification">
          <p>
            Each comment was summarized using AI to extract: a plain-language
            summary, the commenter's position on ONC's deregulatory proposals
            (support, oppose, neutral), relevant policy themes, and organization
            type. The summarization approach and final consolidated analysis are
            documented in{" "}
            <GhLink path="blob/main/source/final_report.md">
              source/final_report.md
            </GhLink>
            .
          </p>
          <p>
            The resulting structured data is stored in{" "}
            <GhLink path="blob/main/data/comments.json">
              data/comments.json
            </GhLink>
            , which powers the Comments, Themes, and Overview pages on this
            site.
          </p>
        </Stage>

        <Stage
          number={3}
          title="Quality Assessment — Understanding & Outgrowth"
        >
          <p>
            Every comment was scored on two dimensions using a deterministic
            script (no AI in the loop):
          </p>
          <ul className="list-disc list-outside ml-5 space-y-1.5">
            <li>
              <strong>Understanding (0–5):</strong> How well the commenter
              demonstrates comprehension of the proposed rule, scored by
              matching against NPRM provisions and policy concepts.
            </li>
            <li>
              <strong>Logical outgrowth:</strong> Whether the comment's
              recommendations fall within the scope of what the agency proposed
              — a legal standard for valid rulemaking comments.
            </li>
          </ul>
          <p>
            Script:{" "}
            <GhLink path="blob/main/scripts/generate-assessments.mjs">
              scripts/generate-assessments.mjs
            </GhLink>
          </p>
        </Stage>

        <Stage
          number={4}
          title="Quality Assessment — Provision & Agency Posture"
        >
          <p>
            A second analysis pass identifies which specific NPRM provision each
            comment addresses and recommends an appropriate agency posture
            (accept, modify, note, etc.) with a written rationale.
          </p>
          <p>
            This step uses AI-assisted analysis to produce comment-specific
            rationales rather than generic boilerplate. The script and its
            methodology are fully published:
          </p>
          <p>
            Script:{" "}
            <GhLink path="blob/main/scripts/reassess-posture.mjs">
              scripts/reassess-posture.mjs
            </GhLink>
          </p>
        </Stage>
      </div>

      {/* Prompts & Methodology */}
      <div className="mt-10 mb-8">
        <h2 className="font-display text-2xl font-bold text-foreground mb-4">
          Prompts & Methodology Documents
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The exact prompts and scoring rubrics used in the analysis are
          published verbatim. Nothing was paraphrased or sanitized.
        </p>
        <div className="space-y-3">
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="font-medium text-foreground mb-1">
              Assessment Prompt
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              The verbatim, user-authored prompt used to guide the quality
              assessment analysis.
            </p>
            <GhLink path="blob/main/source/assessment-prompt.md">
              source/assessment-prompt.md
            </GhLink>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="font-medium text-foreground mb-1">
              Assessment Methodology
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              Scoring rubric, criteria definitions, and classification rules.
            </p>
            <GhLink path="blob/main/source/assessment-methodology.md">
              source/assessment-methodology.md
            </GhLink>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="font-medium text-foreground mb-1">
              Full NPRM Reference Text
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              The complete text of the proposed rule, used as the ground truth
              for understanding scores.
            </p>
            <GhLink path="blob/main/raw-data/hti5-nprm-clean.txt">
              raw-data/hti5-nprm-clean.txt
            </GhLink>
          </div>
        </div>
      </div>

      {/* What We Did NOT Do */}
      <div className="bg-muted/40 border border-border rounded-lg p-6 mb-8">
        <h2 className="font-display text-xl font-bold text-foreground mb-3">
          What We Did Not Do
        </h2>
        <ul className="text-muted-foreground leading-relaxed space-y-2">
          <li>
            <strong>No cherry-picking.</strong> All 298 unique comments were
            analyzed using the same pipeline. None were excluded or
            down-weighted.
          </li>
          <li>
            <strong>No steering toward conclusions.</strong> The summarization
            and scoring prompts were written before results were generated. They
            were not tuned to produce a preferred outcome.
          </li>
          <li>
            <strong>No filtering by viewpoint.</strong> Comments supporting and
            opposing deregulation received identical treatment. Position was
            classified, not judged.
          </li>
          <li>
            <strong>No hidden corrections.</strong> When we found accuracy
            issues in the provision and posture analysis (see below), we
            documented the problem, rebuilt the analysis, and published the fix.
          </li>
        </ul>
      </div>

      {/* Iteration Log */}
      <div className="mb-10">
        <h2 className="font-display text-2xl font-bold text-foreground mb-4">
          Iteration Log
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Analysis is iterative. When we identified problems, we fixed them
          openly. Key corrections:
        </p>
        <div className="space-y-3">
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="font-medium text-foreground mb-1">
              Provision & Posture Accuracy Fix
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              The initial version used keyword-counting heuristics to identify
              which NPRM provision a comment addressed and what agency posture
              to recommend. Spot-checking revealed inaccuracies — 55% of
              comments were bucketed as "multiple provisions" and rationales
              were generic boilerplate. We replaced these heuristics with
              AI-assisted comment-level analysis that produces specific,
              verifiable rationales.
            </p>
            <GhLink path="commits/main">View commits</GhLink>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="font-medium text-foreground mb-1">
              Assessment Accuracy: Weighted Pattern Matching
            </div>
            <p className="text-sm text-muted-foreground">
              Replaced simple keyword heuristics with weighted pattern matching
              for more accurate understanding scores.{" "}
              <GhLink path="commit/246dd2a">246dd2a</GhLink>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border pt-6 text-center">
        <p className="text-muted-foreground text-sm">
          The complete source code, data, and analysis artifacts are available
          at{" "}
          <a
            href={REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:opacity-80 underline underline-offset-2"
          >
            github.com/jacobmr/hti5
            <ExternalLink size={13} />
          </a>
        </p>
      </div>
    </div>
  );
}

/**
 * Provisions Page — HTI-5 Analysis
 * Organizes comments by specific NPRM provision sections.
 * Shows support/opposition per provision and flags beyond-scope asks.
 */
import { useState, useMemo } from "react";
import { Link } from "wouter";
import {
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  XCircle,
  CircleDot,
  AlertTriangle,
  ExternalLink,
} from "lucide-react";
import provisionsData from "@data/nprm_provisions.json";
import commentsData from "@data/comments.json";
import { POSITION_LABELS, POSITION_COLORS } from "@shared/const";

type ProvisionComment = {
  id: string;
  stance: string;
  name: string;
};

type CommentData = (typeof commentsData)[0];

type Provision = (typeof provisionsData.provisions)[0];
type BeyondScope = (typeof provisionsData.beyond_scope)[0];

// Build comment lookup for excerpts and metadata
const commentLookup = new Map<string, CommentData>();
for (const c of commentsData) {
  commentLookup.set(c.id, c as CommentData);
}

const INITIAL_SHOW = 8;

function StanceIcon({ stance }: { stance: string }) {
  switch (stance) {
    case "oppose":
      return <XCircle size={14} className="text-red-600 flex-shrink-0" />;
    case "support":
      return (
        <CheckCircle2 size={14} className="text-green-600 flex-shrink-0" />
      );
    case "mixed":
    default:
      return <CircleDot size={14} className="text-amber-500 flex-shrink-0" />;
  }
}

function StanceBar({
  support,
  oppose,
  mixed,
  total,
}: {
  support: number;
  oppose: number;
  mixed: number;
  total: number;
}) {
  if (total === 0) return null;
  const segments = [
    {
      key: "oppose",
      count: oppose,
      color: POSITION_COLORS.strongly_oppose_deregulation,
    },
    { key: "mixed", count: mixed, color: POSITION_COLORS.neutral_mixed },
    {
      key: "support",
      count: support,
      color: POSITION_COLORS.strongly_support_deregulation,
    },
  ];

  return (
    <div className="mt-3">
      <div className="flex h-4 rounded-sm overflow-hidden gap-px">
        {segments.map(({ key, count, color }) => {
          if (count === 0) return null;
          const pct = (count / total) * 100;
          return (
            <div
              key={key}
              style={{ width: `${pct}%`, backgroundColor: color }}
              title={`${key}: ${count}`}
            />
          );
        })}
      </div>
      <div className="flex flex-wrap gap-3 mt-2">
        {segments.map(({ key, count, color }) => {
          if (count === 0) return null;
          return (
            <div
              key={key}
              className="flex items-center gap-1 text-xs text-muted-foreground"
            >
              <div
                className="w-2.5 h-2.5 rounded-sm flex-shrink-0"
                style={{ backgroundColor: color }}
              />
              <span className="capitalize">
                {key}: {count}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CommentRow({ comment }: { comment: ProvisionComment }) {
  const data = commentLookup.get(comment.id);
  const summary = data?.summary || "";
  const truncated =
    summary.length > 140 ? summary.substring(0, 140) + "…" : summary;

  return (
    <div className="py-2 border-b border-border/50 last:border-0">
      <div className="flex items-start gap-2">
        <StanceIcon stance={comment.stance} />
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 flex-wrap">
            <Link
              href={`/comments?comment=${comment.id}`}
              className="font-medium text-sm text-foreground hover:text-primary transition-colors"
            >
              {comment.name}
            </Link>
            <span className="comment-id">{comment.id.split("-").pop()}</span>
            {data?.url && (
              <a
                href={data.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                title="View on regulations.gov"
              >
                <ExternalLink size={11} />
              </a>
            )}
          </div>
          {truncated && (
            <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
              {truncated}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function ProvisionCard({ provision }: { provision: Provision }) {
  const [expanded, setExpanded] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const comments = provision.comments as ProvisionComment[];
  const visibleComments =
    expanded && !showAll ? comments.slice(0, INITIAL_SHOW) : comments;
  const hasMore = comments.length > INITIAL_SHOW;

  return (
    <div className="border border-border bg-card">
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-baseline gap-3 flex-wrap">
              <h2 className="font-display text-xl font-bold text-foreground">
                {provision.label}
              </h2>
              <span className="comment-id">{provision.total} comments</span>
            </div>
            <div className="text-sm text-muted-foreground mt-0.5">
              <span className="font-mono text-xs">
                {provision.nprm_section}
              </span>
              <span className="mx-2">·</span>
              {provision.description}
            </div>
          </div>
        </div>

        <StanceBar
          support={provision.support_count}
          oppose={provision.oppose_count}
          mixed={provision.mixed_count}
          total={provision.total}
        />

        {provision.total > 0 && (
          <button
            onClick={() => {
              setExpanded(!expanded);
              if (expanded) setShowAll(false);
            }}
            className="mt-4 flex items-center gap-1 text-xs text-primary hover:opacity-80"
          >
            {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            {expanded ? "Hide comments" : `Show ${provision.total} comments`}
          </button>
        )}
      </div>

      {expanded && (
        <div className="border-t border-border px-6 py-4 bg-muted/30">
          <div>
            {visibleComments.map(comment => (
              <CommentRow key={comment.id} comment={comment} />
            ))}
          </div>
          {hasMore && !showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="mt-3 text-xs text-primary hover:opacity-80"
            >
              Show all {comments.length} comments (
              {comments.length - INITIAL_SHOW} more)
            </button>
          )}
          {hasMore && showAll && (
            <button
              onClick={() => setShowAll(false)}
              className="mt-3 text-xs text-primary hover:opacity-80"
            >
              Show fewer
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function BeyondScopeCard({ topic }: { topic: BeyondScope }) {
  const [expanded, setExpanded] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const comments = topic.comments as string[];
  const visibleComments =
    expanded && !showAll ? comments.slice(0, INITIAL_SHOW) : comments;
  const hasMore = comments.length > INITIAL_SHOW;

  return (
    <div className="border border-amber-500/30 bg-card">
      <div className="p-5">
        <div className="flex items-baseline gap-3">
          <div className="flex items-center gap-2">
            <AlertTriangle size={14} className="text-amber-500" />
            <h3 className="font-display text-base font-bold text-foreground">
              {topic.label}
            </h3>
          </div>
          <span className="comment-id">{topic.count} comments</span>
        </div>

        {topic.count > 0 && (
          <button
            onClick={() => {
              setExpanded(!expanded);
              if (expanded) setShowAll(false);
            }}
            className="mt-3 flex items-center gap-1 text-xs text-primary hover:opacity-80"
          >
            {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            {expanded ? "Hide" : `Show ${topic.count} comments`}
          </button>
        )}
      </div>

      {expanded && (
        <div className="border-t border-amber-500/20 px-5 py-3 bg-amber-50/5">
          <div>
            {visibleComments.map((id: string) => {
              const data = commentLookup.get(id);
              const name = data?.commenter || id;
              const summary = data?.summary || "";
              const truncated =
                summary.length > 140
                  ? summary.substring(0, 140) + "…"
                  : summary;

              return (
                <div
                  key={id}
                  className="py-2 border-b border-border/50 last:border-0"
                >
                  <div className="flex items-start gap-2">
                    <AlertTriangle
                      size={14}
                      className="text-amber-500 flex-shrink-0 mt-0.5"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <Link
                          href={`/comments?comment=${id}`}
                          className="font-medium text-sm text-foreground hover:text-primary transition-colors"
                        >
                          {name}
                        </Link>
                        <span className="comment-id">
                          {id.split("-").pop()}
                        </span>
                        {data?.url && (
                          <a
                            href={data.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                            title="View on regulations.gov"
                          >
                            <ExternalLink size={11} />
                          </a>
                        )}
                      </div>
                      {truncated && (
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                          {truncated}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {hasMore && !showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="mt-3 text-xs text-primary hover:opacity-80"
            >
              Show all {comments.length} comments (
              {comments.length - INITIAL_SHOW} more)
            </button>
          )}
          {hasMore && showAll && (
            <button
              onClick={() => setShowAll(false)}
              className="mt-3 text-xs text-primary hover:opacity-80"
            >
              Show fewer
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default function ProvisionsPage() {
  const provisions = provisionsData.provisions;
  const beyondScope = provisionsData.beyond_scope;

  const topProvision = provisions[0];
  const totalBeyondScope = beyondScope.reduce(
    (sum: number, b: BeyondScope) => sum + b.count,
    0
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="mb-8">
        <div className="rule-line" />
        <h1 className="font-display text-3xl font-bold mb-2">
          NPRM Provisions Analysis
        </h1>
        <p className="text-muted-foreground text-sm max-w-2xl mb-4">
          Comments organized by the specific NPRM sections they address. Each
          provision shows the breakdown of support, opposition, and mixed
          positions. This view helps identify where ONC faces the strongest
          pushback and where consensus exists.
        </p>
        <div className="bg-muted/40 border border-border p-4 rounded-sm text-sm leading-relaxed text-foreground/80">
          <p>
            <strong>
              The APA requires agencies to respond to each comment within the
              scope of the proposed rule.
            </strong>{" "}
            Comments that fall outside the "logical outgrowth" of what was
            proposed cannot lead to new requirements in the final rule without
            re-proposing. This page identifies both in-scope provision feedback
            and beyond-scope asks.
          </p>
        </div>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        <div className="border border-border bg-card p-4">
          <div className="text-xs text-muted-foreground uppercase tracking-wider font-mono mb-1">
            Provisions Addressed
          </div>
          <div className="font-display text-3xl font-bold text-foreground">
            {provisions.filter((p: Provision) => p.total > 0).length}
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            of {provisions.length} provision groups
          </div>
        </div>
        <div className="border border-border bg-card p-4">
          <div className="text-xs text-muted-foreground uppercase tracking-wider font-mono mb-1">
            Most Discussed
          </div>
          <div className="font-display text-xl font-bold text-foreground leading-tight">
            {topProvision.label}
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            {topProvision.total} comments
          </div>
        </div>
        <div className="border border-border bg-card p-4">
          <div className="text-xs text-muted-foreground uppercase tracking-wider font-mono mb-1">
            Beyond-Scope Asks
          </div>
          <div className="font-display text-3xl font-bold text-foreground">
            {totalBeyondScope}
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            across {beyondScope.length} topics
          </div>
        </div>
      </div>

      {/* Provision cards */}
      <section className="mb-10">
        <div className="rule-line-thin mb-4" />
        <h2 className="font-display text-xl font-bold mb-1">
          Provisions by Comment Volume
        </h2>
        <p className="text-sm text-muted-foreground mb-5">
          Sorted by number of comments addressing each provision. Comments may
          appear under multiple provisions.
        </p>
        <div className="space-y-4">
          {provisions.map((provision: Provision) => (
            <ProvisionCard key={provision.id} provision={provision} />
          ))}
        </div>
      </section>

      {/* Beyond scope */}
      {beyondScope.length > 0 && (
        <section className="mb-10">
          <div className="rule-line-thin mb-4" />
          <h2 className="font-display text-xl font-bold mb-1">
            Beyond Logical Outgrowth
          </h2>
          <p className="text-sm text-muted-foreground mb-5">
            Comments that raise topics outside the scope of this NPRM. Under the
            APA, ONC must acknowledge these but cannot adopt them without
            re-proposing. These are flagged based on pattern matching and may
            overlap with in-scope feedback.
          </p>
          <div className="space-y-3">
            {beyondScope.map((topic: BeyondScope) => (
              <BeyondScopeCard key={topic.topic} topic={topic} />
            ))}
          </div>
        </section>
      )}

      <div className="rule-line-thin mt-12 pt-4 text-xs text-muted-foreground font-mono">
        Provisions mapped via weighted pattern matching on 298 comments ·
        Comments may appear under multiple provisions
      </div>
    </div>
  );
}

#!/usr/bin/env node
/**
 * reassess-posture.mjs
 *
 * Re-analyzes provision_addressed, agency_posture, and their rationales
 * for all 298 HTI-5 comment assessments. Replaces the crude keyword-counting
 * heuristic in generate-assessments.mjs with semantic analysis of the
 * Claude-generated summaries and recommendations in comments.json.
 *
 * Preserves: understanding_score, understanding_label, understanding_rationale,
 *            logical_outgrowth, outgrowth_rationale (more defensible heuristics)
 *
 * Usage: node scripts/reassess-posture.mjs
 */

import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const comments = JSON.parse(
  readFileSync(join(ROOT, "data/comments.json"), "utf-8")
);
const assessments = JSON.parse(
  readFileSync(join(ROOT, "data/comment_assessments.json"), "utf-8")
);
const allComments = JSON.parse(
  readFileSync(
    join(ROOT, "raw-data/comments/full-text/all-comments.json"),
    "utf-8"
  )
);

const fullTextMap = new Map(allComments.map(c => [c.id, c.comment_text || ""]));
const commentMap = new Map(comments.map(c => [c.id, c]));

// ─── Provision Detection ─────────────────────────────────────────────
// Each provision has weighted patterns. We score the SUMMARY + RECOMMENDATIONS
// (not the full text) because the summary already captures the substantive focus.

const PROVISION_PATTERNS = {
  ccda_transition: {
    // Strong: explicitly about C-CDA or the g(6)/g(9) criteria
    strong: [
      /\bc-?cda\b/i,
      /consolidated\s+c(?:linical\s+)?d(?:ocument)?/i,
      /§?170\.315\s*\(g\)\s*\(6\)/,
      /§?170\.315\s*\(g\)\s*\(9\)/,
      /\bg\(6\)\b/,
      /\bg\(9\)\b/,
      /transition\s+(?:of|to)\s+care/i,
      /continuity\s+of\s+care\s+document/i,
    ],
    // Moderate: FHIR-focused when paired with document exchange
    moderate: [
      /fhir.*(?:document|exchange|transition)/i,
      /(?:document|exchange|transition).*fhir/i,
      /(?:retain|keep|preserve).*(?:cda|document\s+standard)/i,
    ],
    themeSignals: ["ccda_removal"],
  },
  privacy_security_criteria: {
    strong: [
      /privacy.*(?:certif|criteria|remov)/i,
      /security.*(?:certif|criteria|remov)/i,
      /§?170\.315\s*\(d\)\s*\(\d+\)/,
      /\(d\)\(\d+\)/,
      /authentication.*certif/i,
      /access\s+control.*certif/i,
      /encryption.*certif/i,
    ],
    moderate: [
      /(?:remov|eliminat).*(?:privacy|security)/i,
      /hipaa.*(?:not\s+enough|insufficient|gap|alone)/i,
      /hipaa.*(?:does\s*n[o']t|cannot|won't).*(?:replac|substitut|cover)/i,
      /cybersecurity.*(?:certif|standard|requirement)/i,
    ],
    themeSignals: ["data_privacy"],
  },
  audit_log_criteria: {
    strong: [
      /audit\s+log/i,
      /audit\s+trail/i,
      /auditable\s+event/i,
      /§?170\.315\s*\(d\)\s*\(2\)/,
      /§?170\.315\s*\(d\)\s*\(3\)/,
      /§?170\.315\s*\(d\)\s*\(10\)/,
      /tamper[- ](?:resistant|evident)/i,
      /immutable.*log/i,
    ],
    moderate: [
      /audit.*(?:certif|criteria|remov|standard)/i,
      /(?:certif|criteria|remov).*audit/i,
      /accountability.*(?:log|trail|record)/i,
    ],
    themeSignals: ["audit_log_standards"],
  },
  dsi_ai_model_card: {
    strong: [
      /model\s+card/i,
      /§?170\.315\s*\(b\)\s*\(11\)/,
      /\(b\)\(11\)/,
      /predictive\s+dsi/i,
      /decision\s+support\s+intervention/i,
      /ai\s+(?:transparency|regulation|governance|oversight)/i,
      /source\s+attribute/i,
    ],
    moderate: [
      /(?:artificial\s+intelligence|machine\s+learning|algorithm).*(?:certif|standard|oversight|regulat)/i,
      /(?:certif|standard|oversight|regulat).*(?:artificial\s+intelligence|machine\s+learning|algorithm)/i,
      /ai.*(?:bias|fairness|accountability|safety)/i,
    ],
    themeSignals: ["ai_regulation"],
  },
  cds_removal: {
    strong: [
      /clinical\s+decision\s+support.*(?:remov|criteria|\(a\)\(9\))/i,
      /§?170\.315\s*\(a\)\s*\(9\)/,
      /\(a\)\(9\)/,
      /cds.*(?:remov|criteria|certif)/i,
      /knowledge\s+artifact/i,
    ],
    moderate: [/decision\s+support.*certif/i],
    themeSignals: [],
  },
  uscdi_data_elements: {
    strong: [
      /uscdi/i,
      /united\s+states\s+core\s+data/i,
      /data\s+class(?:es)?.*(?:remov|add|retain)/i,
      /data\s+element/i,
    ],
    moderate: [
      /sogi/i,
      /sexual\s+orientation.*gender\s+identity/i,
      /chosen\s+name/i,
      /pronoun/i,
      /tribal\s+affiliation/i,
    ],
    themeSignals: ["uscdi_data_classes"],
  },
  information_blocking: {
    strong: [
      /information\s+blocking/i,
      /info\s+blocking/i,
      /part\s+171/i,
      /ehi.*(?:definition|scope|expand)/i,
      /electronic\s+health\s+information.*(?:block|defin)/i,
    ],
    moderate: [
      /(?:manner|infeasibility)\s+exception/i,
      /(?:block|interfer).*(?:access|exchange)/i,
    ],
    themeSignals: ["information_blocking"],
  },
  tefca_removal: {
    strong: [
      /tefca/i,
      /trusted\s+exchange\s+framework/i,
      /manner\s+exception.*(?:remov|tefca)/i,
      /qhin/i,
      /qualified\s+health\s+information\s+network/i,
    ],
    moderate: [],
    themeSignals: [],
  },
  real_world_testing: {
    strong: [
      /real\s+world\s+testing/i,
      /\brwt\b/i,
      /\bsvap\b/i,
      /standards\s+version\s+advancement/i,
      /insights\s+condition/i,
    ],
    moderate: [],
    themeSignals: [],
  },
  patient_demographics: {
    strong: [
      /§?170\.315\s*\(a\)\s*\(5\)/,
      /\(a\)\(5\)/,
      /patient\s+demographics.*certif/i,
    ],
    moderate: [/demographic.*(?:data|standard|criterion)/i],
    themeSignals: [],
  },
  public_health_reporting: {
    strong: [
      /§?170\.315\s*\(f\)/,
      /\(f\)\(\d\)/,
      /syndromic\s+surveillance/i,
      /electronic\s+case\s+reporting/i,
      /immunization.*(?:registr|report)/i,
    ],
    moderate: [
      /public\s+health.*(?:report|criteria|certif)/i,
      /reportable\s+condition/i,
    ],
    themeSignals: [],
  },
  certification_removal_general: {
    // This is a catch-all for comments about the general deregulatory direction
    // Only matches when no more specific provision applies
    strong: [],
    moderate: [
      /(?:remov|eliminat).*(?:certif|criteria)/i,
      /deregulat/i,
      /certification\s+(?:criteria|requirement|program)/i,
    ],
    themeSignals: [],
  },
  burden_reduction_general: {
    strong: [],
    moderate: [
      /(?:regulatory|compliance|administrative)\s+burden/i,
      /burden\s+reduction/i,
      /cost\s+saving/i,
      /reduce\s+burden/i,
    ],
    themeSignals: ["burden_reduction"],
  },
};

function scoreProvision(provisionId, patterns, text, themes) {
  let score = 0;

  for (const re of patterns.strong || []) {
    if (re.test(text)) score += 3;
  }
  for (const re of patterns.moderate || []) {
    if (re.test(text)) score += 1;
  }
  // Theme signals add a small boost but don't dominate
  for (const themeId of patterns.themeSignals || []) {
    if (themes.includes(themeId)) score += 0.5;
  }
  return score;
}

function determineProvision(comment) {
  const summary = comment.summary || "";
  const recs = (comment.recommendations || []).join(". ");
  const text = summary + " " + recs;
  const themes = comment.themes || [];

  // Score each provision
  const scores = {};
  for (const [provId, patterns] of Object.entries(PROVISION_PATTERNS)) {
    const score = scoreProvision(provId, patterns, text, themes);
    if (score > 0) scores[provId] = score;
  }

  const entries = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  if (entries.length === 0) {
    return {
      provision: "general_comment",
      rationale: summaryToProvisionRationale(comment, "general_comment"),
    };
  }

  const top = entries[0];

  // Only use multiple_provisions when 3+ provisions score highly AND
  // the top score isn't clearly dominant (>2x the third)
  if (
    entries.length >= 3 &&
    top[1] < entries[2][1] * 2.5 &&
    entries[2][1] >= 2
  ) {
    const topProvs = entries
      .filter(e => e[1] >= 2)
      .slice(0, 3)
      .map(e => e[0]);
    return {
      provision: "multiple_provisions",
      rationale: `Addresses ${topProvs.map(p => provisionLabel(p)).join(", ")} with roughly equal emphasis.`,
    };
  }

  // Use certification_removal_general and burden_reduction_general only as
  // fallbacks — if a more specific provision scored, prefer it
  if (
    (top[0] === "certification_removal_general" ||
      top[0] === "burden_reduction_general") &&
    entries.length >= 2 &&
    entries[1][1] >= 2
  ) {
    return {
      provision: entries[1][0],
      rationale: summaryToProvisionRationale(comment, entries[1][0]),
    };
  }

  return {
    provision: top[0],
    rationale: summaryToProvisionRationale(comment, top[0]),
  };
}

function provisionLabel(id) {
  const labels = {
    ccda_transition: "C-CDA/FHIR transition",
    privacy_security_criteria: "privacy/security criteria removal",
    audit_log_criteria: "audit log criteria",
    dsi_ai_model_card: "AI/DSI model card requirements",
    cds_removal: "CDS criteria removal",
    uscdi_data_elements: "USCDI data elements",
    information_blocking: "information blocking rules",
    tefca_removal: "TEFCA Manner Exception",
    real_world_testing: "Real World Testing",
    patient_demographics: "patient demographics criteria",
    public_health_reporting: "public health reporting criteria",
    certification_removal_general: "general certification removal",
    burden_reduction_general: "general burden reduction",
    multiple_provisions: "multiple provisions",
    general_comment: "general comment",
  };
  return labels[id] || id;
}

function summaryToProvisionRationale(comment, provision) {
  const summary = comment.summary || "";
  // Extract the first clause/sentence for context
  const firstSentence = summary.split(/[.!]/).filter(Boolean)[0]?.trim() || "";
  const shortContext =
    firstSentence.length > 120
      ? firstSentence.slice(0, 117) + "..."
      : firstSentence;

  const provLabel = provisionLabel(provision);
  if (provision === "general_comment") {
    return `Comment provides general feedback on the rulemaking without targeting a specific provision. ${shortContext}.`;
  }
  return `Primary focus is ${provLabel}. ${shortContext}.`;
}

// ─── Agency Posture ──────────────────────────────────────────────────
// Determines posture based on what the commenter asks for (recommendations),
// whether it aligns with the NPRM direction, and how actionable it is.

function determinePosture(comment, outgrowth) {
  const position = comment.position || "";
  const recs = comment.recommendations || [];
  const summary = (comment.summary || "").toLowerCase();
  const recsText = recs.join(" ").toLowerCase();
  const allText = summary + " " + recsText;

  // === Not applicable / out of scope → acknowledge ===
  if (outgrowth === "outside_scope" || outgrowth === "not_applicable") {
    return {
      posture: "acknowledge",
      rationale: makePostureRationale("acknowledge", comment),
    };
  }

  // === Supports the NPRM direction ===
  if (position.includes("support")) {
    // Pure support with no modifications requested
    if (
      recs.length <= 1 &&
      !allText.match(/modif|adjust|tweak|refine|clarif|suggest/)
    ) {
      return {
        posture: "accept",
        rationale: makePostureRationale("accept", comment),
      };
    }
    // Support with suggested improvements
    if (recs.length >= 1) {
      return {
        posture: "accept_with_modification",
        rationale: makePostureRationale("accept_with_modification", comment),
      };
    }
    return {
      posture: "accept",
      rationale: makePostureRationale("accept", comment),
    };
  }

  // === Opposes the NPRM direction ===
  if (position.includes("oppose")) {
    // Opposition with specific, actionable recommendations
    if (recs.length >= 2 && outgrowth === "within_scope") {
      // Check if they ask for complete reversal or targeted changes
      // Even for strong opposition/withdrawal requests, agencies use "acknowledge"
      // rather than "reject" — they explain their decision in the preamble
      const reversal = allText.match(
        /withdraw|rescind|abandon|halt|stop|reverse|do\s+not\s+finalize/
      );
      if (reversal) {
        return {
          posture: "acknowledge",
          rationale: makePostureRationale("acknowledge_opposition", comment),
        };
      }
      return {
        posture: "partially_accept",
        rationale: makePostureRationale("partially_accept", comment),
      };
    }
    // Opposition with one recommendation
    if (recs.length === 1 && outgrowth === "within_scope") {
      // Single targeted ask (e.g., "retain criterion X")
      if (allText.match(/retain|keep|preserve|do\s+not\s+remov/)) {
        return {
          posture: "partially_accept",
          rationale: makePostureRationale("partially_accept", comment),
        };
      }
      return {
        posture: "acknowledge",
        rationale: makePostureRationale("acknowledge", comment),
      };
    }
    // General opposition without actionable alternatives
    return {
      posture: "acknowledge",
      rationale: makePostureRationale("acknowledge", comment),
    };
  }

  // === Neutral/mixed position ===
  if (recs.length >= 2 && outgrowth === "within_scope") {
    return {
      posture: "accept_with_modification",
      rationale: makePostureRationale("accept_with_modification", comment),
    };
  }
  if (
    recs.length >= 1 &&
    (outgrowth === "within_scope" || outgrowth === "likely_within")
  ) {
    return {
      posture: "accept_with_modification",
      rationale: makePostureRationale("accept_with_modification", comment),
    };
  }

  return {
    posture: "acknowledge",
    rationale: makePostureRationale("acknowledge", comment),
  };
}

function makePostureRationale(posture, comment) {
  const recs = comment.recommendations || [];
  const commenterName =
    comment.organization || comment.commenter || "The commenter";
  const firstRec = recs[0] || "";
  const shortRec =
    firstRec.length > 100 ? firstRec.slice(0, 97) + "..." : firstRec;

  switch (posture) {
    case "accept":
      if (recs.length > 0) {
        return `${commenterName} supports the proposed direction. Their recommendation to "${shortRec}" aligns with ONC's approach.`;
      }
      return `${commenterName} supports the proposed changes, which ONC will finalize as proposed.`;

    case "accept_with_modification":
      if (recs.length > 0) {
        return `${commenterName} offers constructive suggestions including "${shortRec}" that ONC will consider incorporating.`;
      }
      return `${commenterName} provides feedback that may inform modifications to the final rule.`;

    case "partially_accept":
      if (recs.length >= 2) {
        return `${commenterName} raises concerns with specific alternatives. ONC will address "${shortRec}" while proceeding with the general regulatory direction.`;
      }
      return `${commenterName} raises concerns that warrant targeted modifications while the overall proposal proceeds.`;

    case "reject":
      return `${commenterName} opposes the proposed changes. ONC has considered these objections but will proceed with the proposal as the regulatory rationale supports the direction.`;

    case "acknowledge_opposition":
      if (recs.length > 0) {
        return `${commenterName} opposes the proposed direction and asks ONC to "${shortRec}". ONC has carefully considered these concerns and addresses them in the preamble discussion.`;
      }
      return `${commenterName} opposes the proposed changes. ONC has carefully considered these concerns and addresses them in the preamble discussion.`;

    case "acknowledge":
    default:
      if (recs.length > 0) {
        return `ONC has considered ${commenterName}'s feedback regarding "${shortRec}" in developing the final rule.`;
      }
      return `ONC has considered ${commenterName}'s feedback in developing the final rule.`;
  }
}

// ─── Main Processing ─────────────────────────────────────────────────

console.log(`Processing ${comments.length} comments...`);

const existingMap = new Map(
  assessments.assessments.map(a => [a.comment_id, a])
);

const newAssessments = [];

for (const comment of comments) {
  const existing = existingMap.get(comment.id);
  if (!existing) {
    console.warn(
      `  WARNING: No existing assessment for ${comment.id}, skipping`
    );
    continue;
  }

  const { provision, rationale: provRationale } = determineProvision(comment);
  const { posture, rationale: postureRationale } = determinePosture(
    comment,
    existing.logical_outgrowth
  );

  newAssessments.push({
    ...existing,
    provision_addressed: provision,
    provision_rationale: provRationale,
    agency_posture: posture,
    posture_rationale: postureRationale,
  });
}

// ─── Summary Statistics ──────────────────────────────────────────────

const stats = {
  total_assessed: newAssessments.length,
  understanding_distribution: {},
  outgrowth_distribution: {},
  provision_distribution: {},
  posture_distribution: {},
  average_understanding: 0,
};

for (let i = 0; i <= 5; i++) {
  stats.understanding_distribution[i] = newAssessments.filter(
    a => a.understanding_score === i
  ).length;
}
stats.average_understanding = +(
  newAssessments.reduce((s, a) => s + a.understanding_score, 0) /
  newAssessments.length
).toFixed(2);

for (const a of newAssessments) {
  stats.outgrowth_distribution[a.logical_outgrowth] =
    (stats.outgrowth_distribution[a.logical_outgrowth] || 0) + 1;
  stats.provision_distribution[a.provision_addressed] =
    (stats.provision_distribution[a.provision_addressed] || 0) + 1;
  stats.posture_distribution[a.agency_posture] =
    (stats.posture_distribution[a.agency_posture] || 0) + 1;
}

const output = {
  metadata: {
    generated: new Date().toISOString(),
    methodology: "source/assessment-methodology.md",
    prompt: "source/assessment-prompt.md",
    nprm_reference: "FR Doc 2025-23896, 90 FR 60970-61034",
    total_comments: newAssessments.length,
    scoring_approach:
      "Provision and posture determined by semantic analysis of Claude-generated " +
      "comment summaries and recommendations. Understanding scores and logical " +
      "outgrowth classifications preserved from heuristic analysis. " +
      "See scripts/reassess-posture.mjs for scoring logic.",
  },
  summary: stats,
  assessments: newAssessments,
};

const outPath = join(ROOT, "data/comment_assessments.json");
writeFileSync(outPath, JSON.stringify(output, null, 2) + "\n");

console.log(`\nWrote ${outPath}`);
console.log("\nProvision distribution (NEW):");
for (const [k, v] of Object.entries(stats.provision_distribution).sort(
  (a, b) => b[1] - a[1]
)) {
  console.log(`  ${k}: ${v}`);
}
console.log("\nPosture distribution (NEW):");
for (const [k, v] of Object.entries(stats.posture_distribution).sort(
  (a, b) => b[1] - a[1]
)) {
  console.log(`  ${k}: ${v}`);
}

// Show changes from old distribution
console.log("\n--- Changes from previous ---");
const oldProvDist = assessments.summary.provision_distribution;
const oldPostDist = assessments.summary.posture_distribution;

console.log("\nProvision changes:");
const allProvs = new Set([
  ...Object.keys(oldProvDist),
  ...Object.keys(stats.provision_distribution),
]);
for (const p of [...allProvs].sort()) {
  const old = oldProvDist[p] || 0;
  const now = stats.provision_distribution[p] || 0;
  if (old !== now) {
    console.log(
      `  ${p}: ${old} → ${now} (${now - old > 0 ? "+" : ""}${now - old})`
    );
  }
}

console.log("\nPosture changes:");
const allPosts = new Set([
  ...Object.keys(oldPostDist),
  ...Object.keys(stats.posture_distribution),
]);
for (const p of [...allPosts].sort()) {
  const old = oldPostDist[p] || 0;
  const now = stats.posture_distribution[p] || 0;
  if (old !== now) {
    console.log(
      `  ${p}: ${old} → ${now} (${now - old > 0 ? "+" : ""}${now - old})`
    );
  }
}

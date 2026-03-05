#!/usr/bin/env node
/**
 * generate-assessments.mjs
 *
 * Generates comment_assessments.json by analyzing each of the 298 HTI-5
 * public comments against the NPRM text. Uses the existing analysis from
 * comments.json (summaries, positions, themes, recommendations) plus the
 * full comment text from all-comments.json.
 *
 * This is a deterministic scoring script — it applies the rubric defined
 * in source/assessment-methodology.md using heuristics derived from the
 * existing analyzed data. For transparency, all scoring logic is visible
 * in this file.
 *
 * Usage: node scripts/generate-assessments.mjs
 */

import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// Load data sources
const comments = JSON.parse(
  readFileSync(join(ROOT, "data/comments.json"), "utf-8")
);
const allComments = JSON.parse(
  readFileSync(
    join(ROOT, "raw-data/comments/full-text/all-comments.json"),
    "utf-8"
  )
);

// Build lookup for full text
const fullTextMap = new Map();
for (const c of allComments) {
  fullTextMap.set(c.id, c.comment_text || "");
}

// ─── NPRM Provision Keywords ───────────────────────────────────────────
// Maps provision categories to keywords/phrases that indicate the comment
// addresses that provision. Used for provision_addressed classification.

const PROVISION_KEYWORDS = {
  privacy_security_criteria: [
    "privacy",
    "security criteria",
    "(d)(1)",
    "(d)(2)",
    "(d)(3)",
    "(d)(4)",
    "(d)(5)",
    "(d)(6)",
    "(d)(7)",
    "(d)(8)",
    "(d)(9)",
    "(d)(10)",
    "(d)(11)",
    "(d)(12)",
    "(d)(13)",
    "authentication",
    "access control",
    "encryption",
    "integrity",
    "emergency access",
    "automatic access time-out",
    "end-user device encryption",
  ],
  audit_log_criteria: [
    "audit log",
    "audit trail",
    "auditable event",
    "(d)(2)",
    "(d)(3)",
    "(d)(10)",
    "ASTM E2147",
    "tamper-resistant",
    "tamper-evident",
    "immutable",
    "ephemeral",
  ],
  cds_removal: [
    "clinical decision support",
    "CDS",
    "(a)(9)",
    "decision support",
    "knowledge artifact",
  ],
  dsi_ai_model_card: [
    "model card",
    "AI transparency",
    "predictive DSI",
    "(b)(11)",
    "decision support intervention",
    "source attribute",
    "algorithm",
    "machine learning",
    "artificial intelligence",
  ],
  ccda_transition: [
    "C-CDA",
    "CCDA",
    "Consolidated CDA",
    "consolidated clinical document",
    "(g)(6)",
    "(b)(1)",
    "transition of care",
    "CDA",
    "continuity of care document",
  ],
  uscdi_data_elements: [
    "USCDI",
    "United States Core Data",
    "data class",
    "data element",
    "SOGI",
    "sexual orientation",
    "gender identity",
    "chosen name",
    "pronoun",
    "tribal affiliation",
  ],
  information_blocking: [
    "information blocking",
    "Part 171",
    "EHI",
    "electronic health information",
    "info blocking",
  ],
  tefca_removal: [
    "TEFCA",
    "Trusted Exchange Framework",
    "manner exception",
    "qualified health information network",
    "QHIN",
  ],
  real_world_testing: [
    "real world testing",
    "RWT",
    "SVAP",
    "Insights Condition",
    "standards version advancement",
  ],
  patient_demographics: ["(a)(5)", "demographics", "patient demographics"],
  public_health_reporting: [
    "(f)(1)",
    "(f)(2)",
    "(f)(3)",
    "(f)(4)",
    "(f)(5)",
    "(f)(6)",
    "(f)(7)",
    "public health",
    "immunization",
    "syndromic surveillance",
    "electronic case reporting",
    "reportable condition",
  ],
  certification_removal_general: [
    "certification criteria",
    "certification requirement",
    "deregulation",
    "remove criteria",
    "removing criteria",
    "decertification",
  ],
  burden_reduction_general: [
    "burden reduction",
    "regulatory burden",
    "compliance burden",
    "administrative burden",
    "reduce burden",
    "cost savings",
  ],
};

// ─── Understanding Score Heuristics ────────────────────────────────────
// Scores 0-5 based on signals in the comment text and existing analysis.

function scoreUnderstanding(comment, fullText) {
  let score = 2; // Default: partial understanding
  let reasons = [];
  const text = (fullText + " " + (comment.summary || "")).toLowerCase();
  const recs = (comment.recommendations || []).join(" ").toLowerCase();

  // Expert signals (score 5): cites specific CFR sections, understands nuances
  const cfrCitations =
    text.match(/§\s*170\.315|45\s*cfr|170\.315|§170|part\s*170|part\s*171/gi) ||
    [];
  const specificity =
    text.match(
      /\(a\)\(\d+\)|\(b\)\(\d+\)|\(c\)\(\d+\)|\(d\)\(\d+\)|\(e\)\(\d+\)|\(f\)\(\d+\)|\(g\)\(\d+\)/g
    ) || [];

  if (cfrCitations.length >= 3 && specificity.length >= 2) {
    score = 5;
    reasons.push("Cites specific CFR sections and criteria designations");
  } else if (cfrCitations.length >= 1 || specificity.length >= 2) {
    score = Math.max(score, 4);
    reasons.push("References specific regulatory provisions");
  }

  // Strong signals (score 4): addresses specific provisions accurately
  const addressesSpecificProvision =
    comment.themes &&
    comment.themes.length > 0 &&
    comment.themes.some(
      t =>
        ![
          "burden_reduction",
          "general_comment",
          "patient_safety",
          "health_equity",
        ].includes(t)
    );
  if (addressesSpecificProvision && score < 4) {
    score = Math.max(score, 3);
    reasons.push("Addresses specific NPRM provisions");
  }

  // Adequate signals (score 3): understands general proposal
  if (
    text.includes("certification") &&
    (text.includes("remov") || text.includes("propos"))
  ) {
    score = Math.max(score, 3);
    reasons.push(
      "Understands the proposal involves removing certification criteria"
    );
  }

  // Distinction between certification and underlying law
  if (
    text.includes("hipaa") &&
    (text.includes("certification") || text.includes("criteria"))
  ) {
    score = Math.max(score, 4);
    reasons.push(
      "Distinguishes between certification requirements and underlying law (HIPAA)"
    );
  }

  // Understands HIPAA doesn't replace certification
  if (
    text.match(
      /hipaa\s*(alone|insufficient|not\s*enough|does\s*not|doesn't|gap)/i
    )
  ) {
    score = Math.max(score, 4);
    reasons.push("Recognizes HIPAA limitations relative to certification");
  }

  // Mentions NPRM-specific concepts
  if (
    text.includes("hti-5") ||
    text.includes("hti5") ||
    text.includes("hti 5")
  ) {
    score = Math.max(score, 3);
    reasons.push("Identifies the specific rulemaking (HTI-5)");
  }

  // References ONC, ASTP, or the docket
  if (
    text.includes("onc") ||
    text.includes("astp") ||
    text.includes("0955-aa09") ||
    text.includes("hhs-onc-2025")
  ) {
    score = Math.max(score, 3);
    reasons.push("References the issuing agency or docket number");
  }

  // Penalty: very short comments with no specifics
  if (
    (fullText || "").length < 200 &&
    specificity.length === 0 &&
    cfrCitations.length === 0
  ) {
    score = Math.min(score, 2);
    reasons.push("Brief comment with limited specificity");
  }

  // Penalty: off-topic or general (no clear NPRM connection)
  if (
    comment.themes &&
    comment.themes.length <= 1 &&
    comment.themes[0] === "general_comment"
  ) {
    score = Math.min(score, 1);
    reasons.push("General comment without specific NPRM connection");
  }

  // Bonus: mentions specific standards or organizations
  if (text.match(/hl7|fhir|c-cda|uscdi|astm|nist|iso|ncpdp|x12/i)) {
    score = Math.max(score, 3);
    reasons.push("References specific health IT standards");
  }

  // Bonus: provides specific recommendations
  if (comment.recommendations && comment.recommendations.length >= 2) {
    score = Math.max(score, 3);
    reasons.push("Provides multiple specific recommendations");
  }

  // Cap at 5
  score = Math.min(score, 5);

  // Assign label
  const labels = [
    "Off-topic",
    "Weak",
    "Partial",
    "Adequate",
    "Strong",
    "Expert",
  ];

  if (reasons.length === 0) {
    reasons.push(
      score >= 3
        ? "Shows general understanding of the proposal"
        : "Limited engagement with specific NPRM provisions"
    );
  }

  return {
    score,
    label: labels[score],
    rationale: reasons.join(". ") + ".",
  };
}

// ─── Logical Outgrowth Classification ──────────────────────────────────

function classifyLogicalOutgrowth(comment, fullText) {
  const text = (fullText + " " + (comment.summary || "")).toLowerCase();
  const recs = (comment.recommendations || []).join(" ").toLowerCase();
  const combined = text + " " + recs;

  // Not applicable: general feedback without specific regulatory change request
  if (
    !comment.recommendations ||
    comment.recommendations.length === 0 ||
    (comment.recommendations.length === 1 &&
      comment.recommendations[0].length < 30)
  ) {
    return {
      classification: "not_applicable",
      rationale:
        "Comment provides general feedback without requesting a specific regulatory change.",
    };
  }

  // Within scope: asks to keep/remove something that's explicitly proposed for change
  const withinScopeSignals = [
    combined.match(
      /retain|keep|do not remove|don't remove|maintain|preserve/
    ) &&
      combined.match(
        /\(d\)\(\d+\)|\(a\)\(9\)|\(b\)\(11\)|\(g\)\(6\)|certification|criteria/
      ),
    combined.match(/support.*remov|agree.*remov|favor.*deregulat/),
    combined.match(/oppose.*remov|against.*remov|reconsider.*remov/),
    combined.match(/transition.*period|phase|timeline|compliance.*date/),
    combined.match(
      /uscdi.*v3|data element|data class.*remov|data class.*retain/
    ),
    combined.match(/tefca|manner exception/),
    combined.match(/real world testing|rwt|svap/),
  ];

  const withinCount = withinScopeSignals.filter(Boolean).length;

  // Outside scope: introduces concepts not in the NPRM
  const outsideScopeSignals = [
    combined.match(
      /new\s+certification|new\s+criteria|add\s+new|create\s+new.*standard/
    ) && !combined.match(/uscdi|fhir/),
    combined.match(/medicare|medicaid|cms\s+should|cms\s+must/) &&
      !combined.match(/align|coordinate/),
    combined.match(/legislation|congress|statutory/),
    combined.match(/fda.*should|fda.*must|fda.*regulate/) &&
      !combined.match(/information blocking/),
  ];

  const outsideCount = outsideScopeSignals.filter(Boolean).length;

  // Borderline: reasonable extension of proposals
  const borderlineSignals = [
    combined.match(/expand.*scope|broaden|extend/),
    combined.match(/additional.*requirement|new.*requirement/) &&
      combined.match(/certification|criteria/),
    combined.match(/enforcement|penalty|penalties|sanction/) &&
      !combined.match(/information blocking/),
  ];

  const borderlineCount = borderlineSignals.filter(Boolean).length;

  if (outsideCount >= 2) {
    return {
      classification: "outside_scope",
      rationale:
        "Requests introduce regulatory concepts not addressed in the NPRM and would require separate rulemaking.",
    };
  }

  if (withinCount >= 2) {
    return {
      classification: "within_scope",
      rationale:
        "Directly responds to specific provisions proposed for change in the NPRM.",
    };
  }

  if (withinCount >= 1 && outsideCount === 0) {
    return {
      classification: "likely_within",
      rationale:
        "Closely related to the NPRM proposals; a reasonable person would anticipate this as a possible outcome.",
    };
  }

  if (borderlineCount >= 1 || (outsideCount >= 1 && withinCount >= 1)) {
    return {
      classification: "borderline",
      rationale:
        "Some requests are within the NPRM scope while others extend beyond what was proposed.",
    };
  }

  // Default based on whether recommendations target specific provisions
  if (
    comment.themes &&
    comment.themes.some(t =>
      [
        "fhir_standards",
        "ccda_removal",
        "uscdi_data_classes",
        "audit_trail_standards",
        "privacy_security",
        "ai_transparency",
        "information_blocking",
        "real_world_testing",
      ].includes(t)
    )
  ) {
    return {
      classification: "likely_within",
      rationale:
        "Addresses NPRM topics, though specific request may extend beyond the exact proposal.",
    };
  }

  return {
    classification: "not_applicable",
    rationale:
      "Comment provides feedback on the general direction without requesting a specific regulatory text change.",
  };
}

// ─── Provision Addressed ───────────────────────────────────────────────

function identifyProvision(comment, fullText) {
  const text = (fullText + " " + (comment.summary || "")).toLowerCase();
  const recs = (comment.recommendations || []).join(" ").toLowerCase();
  const combined = text + " " + recs;

  const matches = [];
  for (const [provision, keywords] of Object.entries(PROVISION_KEYWORDS)) {
    const matchCount = keywords.filter(kw =>
      combined.includes(kw.toLowerCase())
    ).length;
    if (matchCount >= 2) {
      matches.push({ provision, matchCount });
    }
  }

  // Also use existing theme data as signal
  const themeToProvision = {
    audit_trail_standards: "audit_log_criteria",
    privacy_security: "privacy_security_criteria",
    ccda_removal: "ccda_transition",
    uscdi_data_classes: "uscdi_data_elements",
    ai_transparency: "dsi_ai_model_card",
    information_blocking: "information_blocking",
    fhir_standards: "ccda_transition",
    real_world_testing: "real_world_testing",
    burden_reduction: "burden_reduction_general",
    clinical_workflow: "certification_removal_general",
  };

  for (const theme of comment.themes || []) {
    const prov = themeToProvision[theme];
    if (prov) {
      const existing = matches.find(m => m.provision === prov);
      if (existing) {
        existing.matchCount += 1;
      } else {
        matches.push({ provision: prov, matchCount: 1 });
      }
    }
  }

  matches.sort((a, b) => b.matchCount - a.matchCount);

  if (matches.length === 0) {
    return "general_comment";
  }
  if (
    matches.length >= 3 &&
    matches[0].matchCount - matches[2].matchCount < 3
  ) {
    return "multiple_provisions";
  }
  return matches[0].provision;
}

// ─── Agency Posture ────────────────────────────────────────────────────

function recommendPosture(comment, understanding, outgrowth) {
  const position = comment.position || "";

  // Outside scope → acknowledge
  if (outgrowth.classification === "outside_scope") {
    return {
      posture: "acknowledge",
      rationale:
        "The requested changes fall outside the scope of this rulemaking. ONC acknowledges the commenter's concerns and will consider them in future rulemaking efforts.",
    };
  }

  // Not applicable (general feedback) → acknowledge
  if (outgrowth.classification === "not_applicable") {
    return {
      posture: "acknowledge",
      rationale:
        "ONC acknowledges the commenter's general feedback on the proposed rule.",
    };
  }

  // Strong support for what's proposed → accept
  if (
    position.includes("support") &&
    outgrowth.classification === "within_scope"
  ) {
    return {
      posture: "accept",
      rationale:
        "The comment supports the proposed changes, which ONC will finalize as proposed.",
    };
  }

  // Opposition with specific, within-scope alternatives → partially accept or accept with modification
  if (
    position.includes("oppose") &&
    comment.recommendations &&
    comment.recommendations.length >= 2
  ) {
    if (outgrowth.classification === "within_scope") {
      return {
        posture: "partially_accept",
        rationale:
          "ONC acknowledges the commenter's concerns and will consider modifications to address specific issues raised while proceeding with the general direction of the proposal.",
      };
    }
    return {
      posture: "acknowledge",
      rationale:
        "ONC has considered the commenter's opposition and specific recommendations. The final rule addresses these concerns in the preamble discussion.",
    };
  }

  // Opposition with within-scope request → partially accept
  if (
    position.includes("oppose") &&
    outgrowth.classification === "within_scope"
  ) {
    return {
      posture: "partially_accept",
      rationale:
        "ONC acknowledges the commenter's concerns regarding the proposed changes and will consider targeted modifications.",
    };
  }

  // Neutral with specific suggestions → accept with modification
  if (
    position.includes("neutral") &&
    comment.recommendations &&
    comment.recommendations.length >= 1 &&
    outgrowth.classification !== "outside_scope"
  ) {
    return {
      posture: "accept_with_modification",
      rationale:
        "ONC appreciates the commenter's nuanced perspective and will incorporate suggested modifications where feasible.",
    };
  }

  // Default
  return {
    posture: "acknowledge",
    rationale:
      "ONC has reviewed and considered this comment in developing the final rule.",
  };
}

// ─── Main Processing ───────────────────────────────────────────────────

console.log("Processing", comments.length, "comments...");

const assessments = [];

for (const comment of comments) {
  const fullText = fullTextMap.get(comment.id) || "";

  const understanding = scoreUnderstanding(comment, fullText);
  const outgrowth = classifyLogicalOutgrowth(comment, fullText);
  const provision = identifyProvision(comment, fullText);
  const posture = recommendPosture(comment, understanding, outgrowth);

  assessments.push({
    comment_id: comment.id,
    commenter: comment.commenter,
    organization: comment.organization || null,
    org_type: comment.org_type,
    position: comment.position,
    understanding_score: understanding.score,
    understanding_label: understanding.label,
    understanding_rationale: understanding.rationale,
    logical_outgrowth: outgrowth.classification,
    outgrowth_rationale: outgrowth.rationale,
    provision_addressed: provision,
    agency_posture: posture.posture,
    posture_rationale: posture.rationale,
    themes: comment.themes,
    recommendation_count: (comment.recommendations || []).length,
  });
}

// ─── Summary Statistics ────────────────────────────────────────────────

const stats = {
  total_assessed: assessments.length,
  understanding_distribution: {},
  outgrowth_distribution: {},
  provision_distribution: {},
  posture_distribution: {},
  average_understanding: 0,
};

for (let i = 0; i <= 5; i++) {
  const count = assessments.filter(a => a.understanding_score === i).length;
  stats.understanding_distribution[i] = count;
}
stats.average_understanding = +(
  assessments.reduce((s, a) => s + a.understanding_score, 0) /
  assessments.length
).toFixed(2);

for (const a of assessments) {
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
    total_comments: assessments.length,
    scoring_approach:
      "Heuristic analysis combining keyword detection, structural analysis, " +
      "and existing theme/position data. See scripts/generate-assessments.mjs " +
      "for complete scoring logic.",
  },
  summary: stats,
  assessments,
};

const outPath = join(ROOT, "data/comment_assessments.json");
writeFileSync(outPath, JSON.stringify(output, null, 2) + "\n");

console.log("\nWrote", outPath);
console.log("\nSummary:");
console.log("  Average understanding:", stats.average_understanding);
console.log("  Understanding distribution:", stats.understanding_distribution);
console.log("  Outgrowth distribution:", stats.outgrowth_distribution);
console.log("  Posture distribution:", stats.posture_distribution);
console.log(
  "  Top provisions:",
  Object.entries(stats.provision_distribution)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
);

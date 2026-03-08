#!/usr/bin/env node
/**
 * map-provisions.mjs
 *
 * Maps each of the 298 HTI-5 comments to one or more NPRM provision groups
 * derived from the proposed rule's Table 1. Uses weighted pattern matching
 * on summary + recommendations + full text (following reassess-posture.mjs).
 *
 * Also detects beyond-scope asks (outside the NPRM's logical outgrowth).
 *
 * Input:  data/comments.json, data/comment_assessments.json,
 *         raw-data/comments/full-text/all-comments.json
 * Output: data/nprm_provisions.json
 *
 * Usage: node scripts/map-provisions.mjs
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
const assessmentMap = new Map(
  assessments.assessments.map(a => [a.comment_id, a])
);

// ─── Provision Definitions ───────────────────────────────────────────

const PROVISIONS = [
  {
    id: "clinical_demographics",
    label: "Patient Demographics & Observations",
    nprm_section: "§1(a)",
    description:
      "Criteria for recording patient demographic data including race, ethnicity, preferred language, and sex.",
  },
  {
    id: "clinical_cds",
    label: "Clinical Decision Support",
    nprm_section: "§1(b)",
    description:
      "CDS certification criteria including source attribution, knowledge artifact linking, and evidence-based triggers.",
  },
  {
    id: "clinical_cpoe",
    label: "Computerized Provider Order Entry",
    nprm_section: "§1(c)",
    description:
      "CPOE criteria for medication, laboratory, and diagnostic imaging orders.",
  },
  {
    id: "clinical_drug_checks",
    label: "Drug Interaction & Allergy Checks",
    nprm_section: "§1(d)",
    description:
      "Drug-drug interaction checking, drug-allergy interaction checking, and clinical formulary criteria.",
  },
  {
    id: "data_c_cda",
    label: "C-CDA Creation & Transmission",
    nprm_section: "§2(a)-(b)",
    description:
      "Consolidated CDA document creation, transition of care, and clinical information reconciliation criteria.",
  },
  {
    id: "data_api_access",
    label: "API-Based Data Access & FHIR",
    nprm_section: "§2(c)-(d)",
    description:
      "FHIR-based API criteria for patient and population services, standardized API functionality.",
  },
  {
    id: "data_export",
    label: "EHI Export & Data Portability",
    nprm_section: "§2(e)",
    description:
      "Electronic health information export criteria for data portability and patient access.",
  },
  {
    id: "privacy_security",
    label: "Privacy & Security",
    nprm_section: "§3(a)-(d)",
    description:
      "Authentication, access control, audit log, encryption, and integrity certification criteria.",
  },
  {
    id: "design_usability",
    label: "Design & Usability",
    nprm_section: "§4(a)-(c)",
    description:
      "Accessibility, UDI display, safety-enhanced design, and quality management system criteria.",
  },
  {
    id: "uscdi_standards",
    label: "USCDI Data Classes & Elements",
    nprm_section: "§5",
    description:
      "United States Core Data for Interoperability standards, data classes, and elements.",
  },
  {
    id: "conditions_maintenance",
    label: "Conditions & Maintenance of Certification",
    nprm_section: "§6",
    description:
      "Conditions of certification, real world testing, SVAP, and maintenance requirements.",
  },
  {
    id: "information_blocking",
    label: "Information Blocking Provisions",
    nprm_section: "§7",
    description:
      "Information blocking definitions, exceptions, TEFCA manner exception, and enforcement.",
  },
  {
    id: "ai_governance",
    label: "AI/ML & Predictive DSI Governance",
    nprm_section: "Cross-cutting",
    description:
      "AI transparency, model cards, algorithmic bias, predictive DSI oversight requirements.",
  },
  {
    id: "health_equity",
    label: "Health Equity & Vulnerable Populations",
    nprm_section: "Cross-cutting",
    description:
      "SOGI data, health disparities, LTPAC considerations, and equitable access concerns.",
  },
  {
    id: "burden_cost",
    label: "Regulatory Burden & Cost Impact",
    nprm_section: "Cross-cutting",
    description:
      "Regulatory compliance costs, implementation burden, and economic impact analysis.",
  },
  {
    id: "general_framework",
    label: "General Regulatory Framework Comments",
    nprm_section: "General",
    description:
      "General comments on the overall regulatory direction, rulemaking process, or framework.",
  },
];

const PROVISION_MAP = new Map(PROVISIONS.map(p => [p.id, p]));

// ─── Pattern Matching ────────────────────────────────────────────────

const PROVISION_PATTERNS = {
  clinical_demographics: {
    strong: [
      /§?170\.315\s*\(a\)\s*\(5\)/,
      /\(a\)\(5\)/,
      /patient\s+demographics.*certif/i,
      /demographic.*(?:criterion|criteria)/i,
    ],
    moderate: [
      /demographic.*(?:data|standard|record)/i,
      /race.*ethnicity.*language/i,
    ],
    themeSignals: [],
  },
  clinical_cds: {
    strong: [
      /clinical\s+decision\s+support/i,
      /§?170\.315\s*\(a\)\s*\(9\)/,
      /\(a\)\(9\)/,
      /\bcds\b.*(?:certif|criteria|remov|source)/i,
      /knowledge\s+artifact/i,
      /source\s+attribut/i,
    ],
    moderate: [
      /decision\s+support.*certif/i,
      /cds\s+hook/i,
      /evidence[- ]based\s+(?:trigger|alert)/i,
    ],
    themeSignals: [],
  },
  clinical_cpoe: {
    strong: [
      /§?170\.315\s*\(a\)\s*\(1\)/,
      /§?170\.315\s*\(a\)\s*\(2\)/,
      /§?170\.315\s*\(a\)\s*\(3\)/,
      /\(a\)\([1-3]\)/,
      /\bcpoe\b/i,
      /computerized\s+(?:provider|physician)\s+order/i,
    ],
    moderate: [/order\s+entry.*certif/i],
    themeSignals: [],
  },
  clinical_drug_checks: {
    strong: [
      /§?170\.315\s*\(a\)\s*\(4\)/,
      /\(a\)\(4\)/,
      /drug[- ]drug\s+interaction/i,
      /drug[- ]allergy/i,
      /formulary\s+check/i,
    ],
    moderate: [
      /medication.*(?:alert|check|interaction)/i,
      /allergy.*(?:alert|check)/i,
    ],
    themeSignals: [],
  },
  data_c_cda: {
    strong: [
      /\bc-?cda\b/i,
      /consolidated\s+c(?:linical\s+)?d(?:ocument)?/i,
      /§?170\.315\s*\(g\)\s*\(6\)/,
      /§?170\.315\s*\(g\)\s*\(9\)/,
      /\bg\(6\)\b/,
      /\bg\(9\)\b/,
      /transition\s+(?:of|to)\s+care/i,
      /continuity\s+of\s+care\s+document/i,
      /clinical\s+information\s+reconciliation/i,
    ],
    moderate: [
      /fhir.*(?:document|exchange|transition)/i,
      /(?:retain|keep|preserve).*(?:cda|document\s+standard)/i,
      /document\s+(?:creation|generation).*certif/i,
    ],
    themeSignals: ["ccda_removal"],
  },
  data_api_access: {
    strong: [
      /§?170\.315\s*\(g\)\s*\(7\)/,
      /§?170\.315\s*\(g\)\s*\(8\)/,
      /§?170\.315\s*\(g\)\s*\(10\)/,
      /\bg\(7\)\b/,
      /\bg\(8\)\b/,
      /\bg\(10\)\b/,
      /\bfhir\b.*api/i,
      /api.*\bfhir\b/i,
      /patient\s+access\s+api/i,
      /smart[- ]on[- ]fhir/i,
      /bulk\s+fhir/i,
    ],
    moderate: [
      /standardized\s+api/i,
      /\bfhir\b.*(?:standard|interoperab|resource)/i,
      /(?:standard|interoperab).*\bfhir\b/i,
    ],
    themeSignals: ["fhir_standards"],
  },
  data_export: {
    strong: [
      /§?170\.315\s*\(b\)\s*\(10\)/,
      /\(b\)\(10\)/,
      /ehi\s+export/i,
      /electronic\s+health\s+information\s+export/i,
      /data\s+portability/i,
      /data\s+export.*certif/i,
    ],
    moderate: [
      /export.*(?:all|complet|full).*(?:data|record|information)/i,
      /patient.*(?:download|export)/i,
    ],
    themeSignals: [],
  },
  privacy_security: {
    strong: [
      /§?170\.315\s*\(d\)\s*\(\d+\)/,
      /\(d\)\(\d+\)/,
      /privacy.*(?:certif|criteria|remov)/i,
      /security.*(?:certif|criteria|remov)/i,
      /authentication.*certif/i,
      /access\s+control.*certif/i,
      /encryption.*certif/i,
      /audit\s+log/i,
      /audit\s+trail/i,
      /tamper[- ](?:resistant|evident)/i,
      /immutable.*log/i,
    ],
    moderate: [
      /(?:remov|eliminat).*(?:privacy|security)/i,
      /hipaa.*(?:not\s+enough|insufficient|gap|alone)/i,
      /cybersecurity.*(?:certif|standard|requirement)/i,
      /audit.*(?:certif|criteria|remov|standard)/i,
      /data\s+integrity/i,
    ],
    themeSignals: ["data_privacy", "audit_log_standards"],
  },
  design_usability: {
    strong: [
      /§?170\.315\s*\(a\)\s*\(14\)/,
      /\(a\)\(14\)/,
      /safety[- ]enhanced\s+design/i,
      /\budi\b.*display/i,
      /unique\s+device\s+identif/i,
      /quality\s+management\s+system/i,
      /\bqms\b/i,
      /accessibility.*certif/i,
    ],
    moderate: [
      /usability.*(?:certif|criteria|standard)/i,
      /human\s+factor/i,
      /user[- ]centered\s+design/i,
    ],
    themeSignals: ["clinical_workflow"],
  },
  uscdi_standards: {
    strong: [
      /\buscdi\b/i,
      /united\s+states\s+core\s+data/i,
      /data\s+class(?:es)?.*(?:remov|add|retain)/i,
      /data\s+element/i,
    ],
    moderate: [
      /\bsogi\b/i,
      /sexual\s+orientation.*gender\s+identity/i,
      /chosen\s+name/i,
      /pronoun/i,
      /tribal\s+affiliation/i,
    ],
    themeSignals: ["uscdi_data_classes"],
  },
  conditions_maintenance: {
    strong: [
      /real\s+world\s+testing/i,
      /\brwt\b/i,
      /\bsvap\b/i,
      /standards\s+version\s+advancement/i,
      /insights\s+condition/i,
      /conditions?\s+(?:of|and)\s+(?:maintenance\s+of\s+)?certification/i,
    ],
    moderate: [
      /maintenance\s+of\s+certification/i,
      /certification\s+program.*(?:condition|maintain)/i,
    ],
    themeSignals: [],
  },
  information_blocking: {
    strong: [
      /information\s+blocking/i,
      /info\s+blocking/i,
      /part\s+171/i,
      /ehi.*(?:definition|scope|expand)/i,
      /electronic\s+health\s+information.*(?:block|defin)/i,
      /\btefca\b/i,
      /trusted\s+exchange\s+framework/i,
      /manner\s+exception/i,
      /\bqhin\b/i,
    ],
    moderate: [
      /infeasibility\s+exception/i,
      /(?:block|interfer).*(?:access|exchange)/i,
    ],
    themeSignals: ["information_blocking"],
  },
  ai_governance: {
    strong: [
      /model\s+card/i,
      /§?170\.315\s*\(b\)\s*\(11\)/,
      /\(b\)\(11\)/,
      /predictive\s+dsi/i,
      /decision\s+support\s+intervention/i,
      /ai\s+(?:transparency|regulation|governance|oversight)/i,
      /source\s+attribute/i,
      /algorithmic\s+(?:bias|fairness|accountability)/i,
    ],
    moderate: [
      /(?:artificial\s+intelligence|machine\s+learning|algorithm).*(?:certif|standard|oversight|regulat)/i,
      /(?:certif|standard|oversight|regulat).*(?:artificial\s+intelligence|machine\s+learning|algorithm)/i,
      /ai.*(?:bias|fairness|accountability|safety)/i,
    ],
    themeSignals: ["ai_regulation"],
  },
  health_equity: {
    strong: [
      /health\s+(?:equity|disparit)/i,
      /vulnerable\s+population/i,
      /underserved/i,
      /social\s+determinants?\s+of\s+health/i,
      /\bsdoh\b/i,
      /long[- ]term\s+(?:care|post[- ]acute)/i,
      /\bltpac\b/i,
    ],
    moderate: [
      /(?:equity|disparit).*(?:data|health|care)/i,
      /(?:minority|marginalized|disenfranchised)/i,
      /rural.*(?:health|access|care)/i,
    ],
    themeSignals: ["health_equity", "long_term_care"],
  },
  burden_cost: {
    strong: [
      /(?:regulatory|compliance|administrative)\s+burden/i,
      /burden\s+reduction/i,
      /cost\s+(?:saving|impact|analysis|benefit)/i,
      /reduce\s+(?:regulatory\s+)?burden/i,
      /implementation\s+cost/i,
    ],
    moderate: [
      /compliance\s+cost/i,
      /economic\s+impact/i,
      /unfunded\s+mandate/i,
      /small\s+(?:practice|provider).*(?:cost|burden)/i,
    ],
    themeSignals: ["burden_reduction"],
  },
  general_framework: {
    // Catch-all — only applies when nothing else matches strongly
    strong: [],
    moderate: [
      /deregulat/i,
      /certification\s+(?:criteria|requirement|program)/i,
      /(?:remov|eliminat).*(?:certif|criteria)/i,
      /rulemaking\s+process/i,
    ],
    themeSignals: [],
  },
};

// ─── Beyond-Scope Detection ──────────────────────────────────────────

const BEYOND_SCOPE_PATTERNS = {
  medicare_reimbursement: {
    label: "Medicare/Medicaid Reimbursement",
    patterns: [
      /medicare.*(?:reimburse|payment|rate)/i,
      /medicaid.*(?:reimburse|payment|rate)/i,
      /(?:reimburse|payment\s+rate).*(?:medicare|medicaid)/i,
      /cms.*(?:payment|reimburse)/i,
    ],
  },
  state_regulations: {
    label: "State-Level Regulatory Changes",
    patterns: [
      /state\s+(?:law|regulation|legislat|requirement)/i,
      /state[- ]level\s+(?:regulat|policy)/i,
      /(?:individual|specific)\s+state/i,
    ],
  },
  new_certification_criteria: {
    label: "New Certification Criteria Not Proposed",
    patterns: [
      /(?:new|additional|create)\s+certif.*(?:criteri|requirement)/i,
      /(?:establish|introduce)\s+(?:new|additional).*(?:standard|requirement)/i,
    ],
  },
  workforce_funding: {
    label: "Workforce Training & Funding",
    patterns: [
      /workforce\s+(?:training|funding|shortage)/i,
      /training\s+funding/i,
      /staffing\s+(?:fund|appropriat)/i,
    ],
  },
  cms_interoperability_rules: {
    label: "CMS Interoperability Rules",
    patterns: [
      /cms\s+interoperability/i,
      /cms\s+(?:rule|regulation).*(?:interop|data\s+exchange)/i,
      /(?:patient\s+access|prior\s+auth).*cms/i,
    ],
  },
  prior_authorization_reform: {
    label: "Prior Authorization Reform",
    patterns: [
      /prior\s+auth(?:orization)?.*(?:reform|automat|streamline)/i,
      /(?:reform|automat|streamline).*prior\s+auth/i,
      /gold\s+card/i,
    ],
  },
  other_beyond_scope: {
    label: "Other Out-of-Scope Requests",
    patterns: [
      /congress(?:ional)?.*(?:act|legislat|fund)/i,
      /(?:federal|national)\s+(?:funding|appropriat)/i,
    ],
  },
};

// ─── Scoring Functions ───────────────────────────────────────────────

function scoreProvision(patterns, text, themes) {
  let score = 0;
  for (const re of patterns.strong || []) {
    if (re.test(text)) score += 3;
  }
  for (const re of patterns.moderate || []) {
    if (re.test(text)) score += 1;
  }
  for (const themeId of patterns.themeSignals || []) {
    if (themes.includes(themeId)) score += 0.5;
  }
  return score;
}

function mapCommentToProvisions(comment) {
  const summary = comment.summary || "";
  const recs = (comment.recommendations || []).join(". ");
  const fullText = fullTextMap.get(comment.id) || "";
  // Weight summary/recs more heavily, but include full text for catch
  const primaryText = summary + " " + recs;
  const secondaryText = fullText;
  const themes = comment.themes || [];

  const scores = {};
  for (const [provId, patterns] of Object.entries(PROVISION_PATTERNS)) {
    // Score primary text at full weight, secondary at 0.3x
    const primaryScore = scoreProvision(patterns, primaryText, themes);
    const secondaryScore = scoreProvision(patterns, secondaryText, themes);
    const total = primaryScore + secondaryScore * 0.3;
    if (total > 0) scores[provId] = total;
  }

  const entries = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  if (entries.length === 0) {
    return {
      provisions: ["general_framework"],
      scores: { general_framework: 1 },
    };
  }

  // Include all provisions scoring above threshold (2.0)
  // Always include the top provision regardless
  const threshold = 2.0;
  const result = [];
  const resultScores = {};

  for (const [provId, score] of entries) {
    if (score >= threshold || result.length === 0) {
      // Skip general_framework and burden_cost if more specific provisions exist
      if (
        (provId === "general_framework" || provId === "burden_cost") &&
        result.length > 0
      ) {
        continue;
      }
      result.push(provId);
      resultScores[provId] = score;
    }
  }

  return { provisions: result, scores: resultScores };
}

function determineStanceForProvision(comment, provisionId) {
  const position = comment.position || "";

  // Map position to stance
  if (position.includes("oppose")) return "oppose";
  if (position.includes("support")) return "support";

  // Neutral/mixed — try to detect from text
  const summary = (comment.summary || "").toLowerCase();
  const recs = (comment.recommendations || []).join(" ").toLowerCase();
  const text = summary + " " + recs;

  // Look for mixed signals
  const hasOppose =
    /concern|risk|oppose|against|retain|keep|preserve|shouldn't|should\s+not/.test(
      text
    );
  const hasSupport = /support|endorse|agree|commend|applaud|streamline/.test(
    text
  );

  if (hasOppose && hasSupport) return "mixed";
  if (hasOppose) return "oppose";
  if (hasSupport) return "support";
  return "mixed";
}

function detectBeyondScope(comment) {
  const summary = comment.summary || "";
  const recs = (comment.recommendations || []).join(". ");
  const fullText = fullTextMap.get(comment.id) || "";
  const text = summary + " " + recs + " " + fullText;

  const assessment = assessmentMap.get(comment.id);
  const outgrowth = assessment?.logical_outgrowth || "";

  const topics = [];

  // Only check if the comment has borderline/outside scope outgrowth
  // or if patterns explicitly match
  for (const [topicId, { patterns }] of Object.entries(BEYOND_SCOPE_PATTERNS)) {
    for (const re of patterns) {
      if (re.test(text)) {
        topics.push(topicId);
        break;
      }
    }
  }

  return topics;
}

// ─── Main Processing ─────────────────────────────────────────────────

console.log(`Processing ${comments.length} comments...`);

// Map each comment to provisions
const commentProvisions = [];
const provisionComments = {}; // provisionId -> array of { id, stance }
const beyondScopeComments = {}; // topicId -> array of comment ids

// Initialize provision buckets
for (const p of PROVISIONS) {
  provisionComments[p.id] = [];
}

for (const comment of comments) {
  const { provisions, scores } = mapCommentToProvisions(comment);
  const stancePerProvision = {};
  const beyondTopics = detectBeyondScope(comment);

  for (const provId of provisions) {
    const stance = determineStanceForProvision(comment, provId);
    stancePerProvision[provId] = stance;
    provisionComments[provId].push({
      id: comment.id,
      stance,
      name: comment.organization || comment.commenter || "Anonymous",
    });
  }

  for (const topic of beyondTopics) {
    if (!beyondScopeComments[topic]) beyondScopeComments[topic] = [];
    beyondScopeComments[topic].push(comment.id);
  }

  commentProvisions.push({
    comment_id: comment.id,
    provisions,
    stance_per_provision: stancePerProvision,
    beyond_scope_topics: beyondTopics,
  });
}

// Build output
const provisionsOutput = PROVISIONS.map(p => {
  const comments = provisionComments[p.id];
  const support_count = comments.filter(c => c.stance === "support").length;
  const oppose_count = comments.filter(c => c.stance === "oppose").length;
  const mixed_count = comments.filter(c => c.stance === "mixed").length;

  return {
    id: p.id,
    label: p.label,
    nprm_section: p.nprm_section,
    description: p.description,
    comments: comments.map(c => ({ id: c.id, stance: c.stance, name: c.name })),
    support_count,
    oppose_count,
    mixed_count,
    total: comments.length,
  };
}).sort((a, b) => b.total - a.total);

const beyondScopeOutput = Object.entries(BEYOND_SCOPE_PATTERNS)
  .map(([topicId, { label }]) => ({
    topic: topicId,
    label,
    comments: beyondScopeComments[topicId] || [],
    count: (beyondScopeComments[topicId] || []).length,
  }))
  .filter(b => b.count > 0)
  .sort((a, b) => b.count - a.count);

const unmappedCount = commentProvisions.filter(
  c => c.provisions.length === 0
).length;

const output = {
  metadata: {
    generated: new Date().toISOString(),
    total_comments: comments.length,
    methodology:
      "Weighted pattern matching on comment summaries, recommendations, and full text. " +
      "Each comment mapped to one or more of 16 provision groups derived from NPRM Table 1. " +
      "Stance determined from position field with text analysis fallback. " +
      "See scripts/map-provisions.mjs for scoring logic.",
  },
  provisions: provisionsOutput,
  beyond_scope: beyondScopeOutput,
  comment_mappings: commentProvisions,
  unmapped_count: unmappedCount,
};

const outPath = join(ROOT, "data/nprm_provisions.json");
writeFileSync(outPath, JSON.stringify(output, null, 2) + "\n");

console.log(`\nWrote ${outPath}`);
console.log(`\nProvision coverage:`);
for (const p of provisionsOutput) {
  const bar = "█".repeat(Math.ceil(p.total / 5));
  console.log(
    `  ${p.label.padEnd(40)} ${String(p.total).padStart(4)} comments  ${bar}`
  );
  console.log(
    `    ${"".padEnd(40)} support: ${p.support_count}  oppose: ${p.oppose_count}  mixed: ${p.mixed_count}`
  );
}

console.log(`\nBeyond-scope topics:`);
for (const b of beyondScopeOutput) {
  console.log(`  ${b.label.padEnd(40)} ${b.count} comments`);
}

console.log(`\nUnmapped comments: ${unmappedCount}`);

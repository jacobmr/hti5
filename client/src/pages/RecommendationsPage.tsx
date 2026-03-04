/**
 * Recommendations Page — HTI-5 Analysis
 * Design: Federal Register Meets Data Journalism
 * 7 crisp policy recommendations with evidence base
 */

const recommendations = [
  {
    number: 1,
    priority: "Critical",
    priorityColor: "text-red-700 bg-red-50 border-red-200",
    title:
      "Retain All Safety Certification Requirements — Modernize, Do Not Remove",
    summary:
      "Patient safety experts (Jacob Reider MD, ECRI, Anesthesia Patient Safety Foundation, American Medical Association) unanimously oppose removal of safety criteria established in response to documented patient harm. These standards are not outdated; they are foundational. Retain all of them while modernizing their scope to address AI and medical devices.",
    actions: [
      "Retain Safety-Enhanced Design requirement (§170.315(g)(3))—the standard that minimizes human errors through design",
      "Retain Quality Management Systems requirement (§170.315(g)(4))—structured product quality and safety oversight",
      "Retain Audit Log and Tamper-Resistance requirements (§170.315(d)(2), (d)(3), (d)(10))—essential for detecting unauthorized access and investigating incidents",
      "Retain Authentication and Access Control requirements (§170.315(d)(1), (d)(13))—vital for preventing unauthorized system access and protecting patient data",
      "Retain Clinical Decision Support Source Attributes (§170.315(b)(11))—transparency into the basis of clinical recommendations, ensuring clinicians can evaluate reliability",
      "Issue a concurrent ANPRM on modernized safety standards addressing AI model inference, medical device integration, and messaging activities, with a defined timeline (18–24 months) before any requirement modifications take effect",
      "Establish an exception to Information Blocking Rule for complex results (pathology, laboratory) to allow clinician context and review before patient access—preventing harm from misinterpretation",
      "Require impact assessments demonstrating that privacy, security, and safety safeguards remain strong after any criteria modifications",
    ],
    evidence:
      "The patient safety and usability community—including organizations like ECRI, Jacob Reider's expert group, Anesthesia Patient Safety Foundation, and the American Medical Association—explicitly state these criteria were established in response to the IOM 2011 'Health IT and Patient Safety' report documenting patient harm. As Jacob Reider noted: 'We do not remove seatbelt requirements because cars have seatbelts. The requirement is what made them so.' Widespread adoption does not negate safety need; it amplifies it.",
  },
  {
    number: 2,
    priority: "High",
    priorityColor: "text-amber-700 bg-amber-50 border-amber-200",
    title: "Phase the C-CDA Transition — Do Not Remove Immediately",
    summary:
      "Retain the C-CDA creation certification criterion (§170.315(g)(6)) in the near term and establish a phased sunset with a clear timeline and support structure.",
    actions: [
      "Set a 3–5 year sunset date for C-CDA certification requirements, contingent on FHIR Clinical Document maturity milestones",
      "Provide funding and technical assistance to public health agencies and smaller providers for FHIR transition",
      "Maintain support for HL7 v2.5.1 and CDA until public health reporting is fully FHIR-capable",
      "Require a baseline end-to-end transitions-of-care capability during the transition period",
    ],
    evidence:
      "31 comments specifically addressed C-CDA; opponents cited patient/caregiver usability and public health readiness; supporters cited global alignment and FHIR maturity.",
  },
  {
    number: 3,
    priority: "High",
    priorityColor: "text-amber-700 bg-amber-50 border-amber-200",
    title: "Retain and Strengthen Clinical Decision Support Safety Standards",
    summary:
      "Patient safety and usability are inseparable. Retain Clinical Decision Support Source Attributes (§170.315(b)(11)) for all decision support systems—not just AI—ensuring clinicians always know the basis of recommendations. Implement risk-based governance for high-risk decision support, with full transparency, auditability, and change control requirements.",
    actions: [
      "Retain Clinical Decision Support Source Attributes requirement (§170.315(b)(11)) for all decision support systems, both algorithmic and AI-based",
      "Require that all clinical decision support systems—including rule-based systems, predictive models, and AI tools—disclose their source, logic, and key assumptions in the clinical workflow",
      "Implement a risk-based governance framework: high-risk decision support (sepsis prediction, prior authorization, medication dosing, pathology interpretation) requires full transparency, model cards, performance data across demographic groups, and change control processes",
      "Implement lighter requirements (basic disclosure only) for low-risk informational tools (educational summaries, reference materials) that do not actively influence clinical decisions",
      "Require decision support disclosures to be machine-readable and accessible via FHIR APIs for seamless integration into clinical workflows",
      "Issue subregulatory guidance explicitly defining CDS risk tiers, requiring validation studies for high-risk tools, and establishing a process for clinician and patient feedback on decision support reliability",
      "Establish a minimum 'safety and trust' package for high-risk AI and algorithmic decision support: transparency, governance, auditability, version control, and periodic performance validation across all patient populations",
    ],
    evidence:
      "95 comments raised clinical decision support and AI governance. The AMA, CAP, and safety experts (ECRI, Jacob Reider MD) emphasized that clinicians must evaluate decision support reliability. The College of American Pathologists raised specific concern: immediate release of complex pathology results without clinician context causes patient anxiety and harm. Safety and usability are inseparable—as noted by ECRI, these standards have 'historically functioned as a minimum safety floor.'",
  },
  {
    number: 4,
    priority: "High",
    priorityColor: "text-amber-700 bg-amber-50 border-amber-200",
    title: "Protect USCDI Data Classes for Vulnerable Populations",
    summary:
      "Do not reduce USCDI data requirements in ways that would harm LGBTQ+ patients, caregivers, or other vulnerable populations. Consider upgrading to USCDI v4.",
    actions: [
      "Retain data elements for sexual orientation, gender identity, and pronouns in certified EHR systems",
      "Include standardized caregiver data elements (caregiver identification, strain assessments) in FHIR API scope",
      "Adopt USCDI v4 rather than v3.1 to include physical activity assessment data",
      "Issue guidance on how to implement sensitive data segmentation to protect vulnerable populations",
    ],
    evidence:
      "Rocky Mountain Equality, Family Caregiver Alliance, Physical Activity Alliance, and others submitted detailed comments on specific data class impacts.",
  },
  {
    number: 5,
    priority: "Medium-High",
    priorityColor: "text-blue-700 bg-blue-50 border-blue-200",
    title: "Strengthen Information Blocking Enforcement",
    summary:
      "Pair any deregulatory actions with a strengthened enforcement posture on information blocking, particularly for pharmacies and delegated entities.",
    actions: [
      "Issue guidance clarifying that sending electronic PDFs, faxes, JPEGs, or TIFs in lieu of structured data constitutes information blocking",
      "Strengthen accountability requirements for delegated entities and pharmacies in adopting FHIR APIs",
      "Collaborate with accrediting bodies (e.g., The Joint Commission) to enforce interoperability standards",
      "Provide clear guidance affirming automated system-to-system access under information blocking rules",
    ],
    evidence:
      "WENO Exchange LLC, David Rocha, and others argued that the real problem is under-enforcement, not over-regulation.",
  },
  {
    number: 6,
    priority: "Medium",
    priorityColor: "text-slate-600 bg-slate-50 border-slate-200",
    title: "Conduct Targeted Outreach to Clinicians and Patient Advocates",
    summary:
      "The overwhelming opposition from individual clinicians (90.5% oppose) and advocacy groups (66.7% oppose) indicates that these communities have not been persuaded of the benefits of the proposed actions. Before finalizing, engage directly with these stakeholders.",
    actions: [
      "Conduct listening sessions specifically with individual clinicians and patient advocacy organizations",
      "Publish a plain-language summary of the proposed rule's benefits and risks for non-technical audiences",
      "Consider a targeted RFI on the specific clinical workflow impacts of the proposed changes",
      "Explore whether alternative approaches (e.g., streamlining certification processes) could achieve burden reduction goals with less patient safety risk",
    ],
    evidence:
      "Position distribution analysis shows a stark divide between health IT companies (54.5% support) and individual clinicians (90.5% oppose).",
  },
  {
    number: 7,
    priority: "Medium",
    priorityColor: "text-slate-600 bg-slate-50 border-slate-200",
    title: "Address Long-Term Post-Acute Care (LTPAC) Gaps",
    summary:
      "Health IT policies developed primarily for acute care settings often fail to account for the unique characteristics of long-term and post-acute care. Any deregulatory actions should be assessed for their specific impact on LTPAC providers.",
    actions: [
      "Conduct a specific impact assessment of the proposed rule on LTPAC providers and residents",
      "Issue LTPAC-specific implementation guidance for FHIR adoption",
      "Engage the American Health Care Association and National Center for Assisted Living in the transition planning process",
    ],
    evidence:
      "American Health Care Association/National Center for Assisted Living submitted a detailed comment on LTPAC-specific concerns.",
  },
];

export default function RecommendationsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <div className="rule-line" />
        <h1 className="font-display text-3xl font-bold mb-2">
          Policy Recommendations
        </h1>
        <p className="text-muted-foreground text-sm max-w-2xl mb-4">
          Seven recommendations derived from the analysis of 305 public
          comments. Each recommendation is grounded in the evidence from the
          comment record and includes specific actionable steps.
        </p>
        <div className="bg-muted/40 border border-border p-4 rounded-sm text-sm leading-relaxed text-foreground/80">
          <strong>Patient Safety Framework:</strong> These recommendations
          maintain critical safety certification requirements—particularly audit
          trail standards, clinical decision support source attribution, and
          safety-enhanced system design—while modernizing their scope to address
          emerging risks (AI, medical devices, real-world workflows). Burden
          reduction should be achieved through{" "}
          <strong>updating and streamlining</strong> standards, not removing
          them.
        </div>
      </div>

      {/* Evidence base summary */}
      <div className="border border-border bg-card p-5 mb-8">
        <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">
          Evidence Base
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Total Comments", value: "305" },
            { label: "Oppose / Strongly Oppose", value: "129 (42.3%)" },
            { label: "Support / Strongly Support", value: "71 (23.3%)" },
            { label: "Recommendations Extracted", value: "1,002" },
          ].map(({ label, value }) => (
            <div key={label}>
              <div className="font-display text-xl font-bold">{value}</div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="space-y-6">
        {recommendations.map(rec => (
          <div key={rec.number} className="border border-border bg-card">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="font-display text-4xl font-bold text-border flex-shrink-0 leading-none mt-1">
                  {rec.number}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h2 className="font-display text-xl font-bold text-foreground">
                      {rec.title}
                    </h2>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-sm border font-medium ${rec.priorityColor}`}
                    >
                      {rec.priority}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/80 mt-2">
                    {rec.summary}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid sm:grid-cols-2 gap-6">
                {/* Actions */}
                <div>
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                    Specific Actions
                  </div>
                  <ul className="space-y-2">
                    {rec.actions.map((action, i) => (
                      <li
                        key={i}
                        className="text-sm text-foreground/80 flex gap-2"
                      >
                        <span className="text-primary font-mono flex-shrink-0">
                          →
                        </span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Evidence */}
                <div>
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                    Evidence
                  </div>
                  <div className="pull-quote text-sm">{rec.evidence}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cross-cutting principle */}
      <div className="mt-10 border-t-2 border-foreground pt-6">
        <h2 className="font-display text-2xl font-bold mb-3">
          Cross-Cutting Principle: Safety and Usability — Safety First
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 text-sm leading-relaxed text-foreground/80">
          <p>
            Patient safety experts (Jacob Reider MD, ECRI, Anesthesia Patient
            Safety Foundation, American Medical Association) are united on one
            point:{" "}
            <strong className="text-foreground">
              safety and usability are inseparable, and safety comes first.
            </strong>{" "}
            These standards were established in response to documented patient
            harm documented in the 2011 Institute of Medicine report, "Health IT
            and Patient Safety: Building Safer Systems for Better Care."
            Removing them is not burden reduction—it is unacceptable risk. The
            regulatory framework needs modernization, not deregulation.
            Modernization means updating standards to address emerging risks
            (AI, medical devices, new workflows) while retaining foundational
            protections: Safety-Enhanced Design, Quality Management Systems,
            Audit Trails, Access Control, and Clinical Decision Support
            Transparency.
          </p>
          <p>
            The path forward is clear: Retain all safety certification
            requirements (§170.315(g)(3), §170.315(g)(4), §170.315(d)(1),
            (d)(2), (d)(3), (d)(10), (d)(13), §170.315(b)(11)). Modernize them
            to address AI and medical devices with clear timelines (18–24
            months). Phase C-CDA with support for public health. Mandate source
            attribution for all clinical decision support. Implement risk-based
            governance for high-risk tools. Strengthen information blocking
            enforcement. This approach achieves genuine burden reduction while
            maintaining protections that prevent patient harm. It is supported
            by 90.5% of clinicians and 66.7% of advocacy groups—the communities
            closest to patient care.
          </p>
        </div>
      </div>

      <div className="rule-line-thin mt-12 pt-4 text-xs text-muted-foreground font-mono">
        Recommendations derived from analysis of 305 public comments on
        HHS-ONC-2025-0005-0001 · March 2, 2026
      </div>
    </div>
  );
}

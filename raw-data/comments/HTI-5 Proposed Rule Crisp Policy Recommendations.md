# HTI-5 Proposed Rule: Crisp Policy Recommendations

## Based on Analysis of 305 Public Comments — HHS-ONC-2025-0005-0001

**Prepared by:** Manus AI | **Date:** March 2, 2026

---

## Summary of Evidence Base

| Metric                                   | Value                   |
| ---------------------------------------- | ----------------------- |
| Total Comments Analyzed                  | 305                     |
| Oppose / Strongly Oppose                 | 129 (42.3%)             |
| Support / Strongly Support               | 71 (23.3%)              |
| Neutral / Mixed                          | 74 (24.3%)              |
| Average Sentiment Score                  | -0.81 (scale: -3 to +3) |
| Total Specific Recommendations Extracted | 1,002                   |

---

## Recommendation 1: Pause Audit Log and Security Criteria Removal

**Priority: Critical**

Do not finalize the removal of audit log, data preservation, and privacy/security certification criteria until modernized replacement standards are ready. The current standards are acknowledged to be outdated, but removing them before updating them creates an accountability vacuum.

**Specific actions:**

- Issue a concurrent ANPRM or RFI on modernized audit trail standards that explicitly address AI, medical device, and messaging activities
- Commit to a defined timeline (e.g., 18 months) for issuing updated standards before the removal takes effect
- Issue subregulatory guidance establishing interim enforceable assurance floors for privacy, security, and auditability

**Evidence:** 138 comments addressed this theme; the dominant recommendation across all stakeholder types was to modernize before deregulating.

---

## Recommendation 2: Phase the C-CDA Transition — Do Not Remove Immediately

**Priority: High**

Retain the C-CDA creation certification criterion (§170.315(g)(6)) in the near term and establish a phased sunset with a clear timeline and support structure.

**Specific actions:**

- Set a 3-5 year sunset date for C-CDA certification requirements, contingent on FHIR Clinical Document maturity milestones
- Provide funding and technical assistance to public health agencies and smaller providers for FHIR transition
- Maintain support for HL7 v2.5.1 and CDA until public health reporting is fully FHIR-capable
- Require a "baseline end-to-end transitions-of-care capability" during the transition period

**Evidence:** 31 comments specifically addressed C-CDA; opponents cited patient/caregiver usability and public health readiness; supporters cited global alignment and FHIR maturity.

---

## Recommendation 3: Retain AI Transparency Requirements with a Risk-Based Tiering Option

**Priority: High**

Do not remove AI model card, governance, and auditability requirements. Instead, implement a risk-based tiering framework that reduces burden for low-risk applications while maintaining full requirements for high-risk clinical decision support tools.

**Specific actions:**

- Retain AI transparency requirements for high-risk predictive decision support interventions (e.g., sepsis prediction, prior authorization algorithms)
- Implement lighter requirements (e.g., basic disclosure only) for low-risk informational tools
- Issue subregulatory guidance defining the risk tiers and the specific requirements for each
- Require that AI model cards be machine-readable and accessible via FHIR APIs

**Evidence:** 95 comments raised AI regulation themes; the AMA, CAP, Fairview Health Services, and dozens of others called for retention or strengthening of AI transparency requirements.

---

## Recommendation 4: Protect USCDI Data Classes for Vulnerable Populations

**Priority: High**

Do not reduce USCDI data requirements in ways that would harm LGBTQ+ patients, caregivers, or other vulnerable populations. Consider upgrading to USCDI v4.

**Specific actions:**

- Retain data elements for sexual orientation, gender identity, and pronouns in certified EHR systems
- Include standardized caregiver data elements (caregiver identification, strain assessments) in FHIR API scope
- Adopt USCDI v4 rather than v3.1 to include physical activity assessment data
- Issue guidance on how to implement sensitive data segmentation to protect vulnerable populations

**Evidence:** Rocky Mountain Equality, Family Caregiver Alliance, Physical Activity Alliance, and others submitted detailed comments on specific data class impacts.

---

## Recommendation 5: Strengthen Information Blocking Enforcement

**Priority: Medium-High**

Pair any deregulatory actions with a strengthened enforcement posture on information blocking, particularly for pharmacies and delegated entities.

**Specific actions:**

- Issue guidance clarifying that sending electronic PDFs, faxes, JPEGs, or TIFs in lieu of structured data constitutes information blocking
- Strengthen accountability requirements for delegated entities and pharmacies in adopting FHIR APIs
- Collaborate with accrediting bodies (e.g., The Joint Commission) to enforce interoperability standards
- Provide clear guidance affirming automated system-to-system access under information blocking rules to reduce unintentional violations

**Evidence:** WENO Exchange LLC, David Rocha, and others argued that the real problem is under-enforcement, not over-regulation.

---

## Recommendation 6: Conduct Targeted Outreach to Clinicians and Patient Advocates Before Finalizing

**Priority: Medium**

The overwhelming opposition from individual clinicians (90.5% oppose) and advocacy groups (66.7% oppose) indicates that these communities have not been persuaded of the benefits of the proposed actions. Before finalizing, engage directly with these stakeholders.

**Specific actions:**

- Conduct listening sessions specifically with individual clinicians and patient advocacy organizations
- Publish a plain-language summary of the proposed rule's benefits and risks for non-technical audiences
- Consider a targeted Request for Information (RFI) on the specific clinical workflow impacts of the proposed changes
- Explore whether alternative approaches (e.g., streamlining certification processes rather than removing criteria) could achieve burden reduction goals with less patient safety risk

**Evidence:** Position distribution analysis shows a stark divide between health IT companies (54.5% support) and individual clinicians (90.5% oppose).

---

## Recommendation 7: Address Long-Term Post-Acute Care (LTPAC) Gaps

**Priority: Medium**

Health IT policies developed primarily for acute care settings often fail to account for the unique characteristics of long-term and post-acute care. Any deregulatory actions should be assessed for their specific impact on LTPAC providers.

**Specific actions:**

- Conduct a specific impact assessment of the proposed rule on LTPAC providers and residents
- Issue LTPAC-specific implementation guidance for FHIR adoption
- Engage the American Health Care Association and National Center for Assisted Living in the transition planning process

**Evidence:** American Health Care Association/National Center for Assisted Living submitted a detailed comment on LTPAC-specific concerns.

---

## Cross-Cutting Principle: Modernize, Do Not Simply Deregulate

The most consistent message across all 305 comments — regardless of position on specific provisions — is that the health IT regulatory framework needs **modernization**, not simply deregulation. The distinction matters:

- **Deregulation** removes requirements without necessarily replacing them
- **Modernization** updates requirements to reflect current technology, workflows, and risks

The comments suggest that stakeholders would broadly support a rule that modernizes audit log standards to address AI and medical devices, updates C-CDA requirements to reflect FHIR maturity, right-sizes AI transparency requirements based on risk, and strengthens enforcement of existing information blocking rules. Such a rule would achieve the underlying goals of burden reduction and innovation while addressing the patient safety and equity concerns that dominate the public comment record.

---

_Source: Analysis of 305 public comments on HHS-ONC-2025-0005-0001. Full analysis available in the companion report._

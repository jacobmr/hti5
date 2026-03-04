# HHS-ONC-2025-0005-0087 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0087/attachment_1.pdf

---

February 24, 2026

Tom Keane, MD
Assistant Secretary for Technology Policy
Office of the National Coordinator for Health Information Technology (ONC)
U.S. Department of Health and Human Services
200 Independence Avenue, S.W.
Washington, DC 20201

Submitted via regulations.gov · Docket ONC-2025-0005

Re: Public Comment on the Health Data, Technology, and Interoperability: ASTP/ONC
Deregulatory Actions to Unleash Prosperity Through Health IT (HTI-5) Proposed Rule

Dear Dr. Keane and ONC Staff:

Executive Summary

Family Caregiver Alliance (FCA), the nation’s first and longest-serving caregiver support
organization, respectfully submits these comments on the HTI-5 Proposed Rule. FCA and our
statewide network of 11 Caregiver Resource Centers (CRCs) serve more than 40,000 family
caregivers annually; approximately 61 percent support dual-eligible beneficiaries. Our work is
increasingly integrated with Medi-Cal managed care plans, county partners, and health systems
serving older adults and people with dementia and complex conditions in home and community
settings.

We submit these comments jointly with CareNav Health, a caregiver-inclusive health technology
venture being formed as a strategic initiative of FCA. CareNav Health has developed a FHIR-native
platform for dyadic (caregiver–care recipient) care management, initially focused on dual-eligible
populations with dementia and complex conditions in California’s CalAIM delivery system. CareNav
Health’s platform is designed to generate, exchange, and analyze caregiver assessment data using
FHIR R4 resources, including RelatedPerson, QuestionnaireResponse, and CarePlan, making the
interoperability standards and certification requirements addressed in HTI-5 directly relevant to our
work. Our recommendations are platform-agnostic and intended to ensure that caregiver data can
be captured and exchanged across any certified health IT system, not to advantage any particular
vendor.

We write as both a caregiver advocacy organization with deep operational roots in community-based
care and as a health technology developer building the infrastructure that HTI-5’s standards will
govern. This dual perspective informs every recommendation in this letter.

We make four substantive recommendations and one RFI response:

• Support the FHIR-first certification reset, with a specific request that caregiver data
elements be included in the expanded FHIR API scope and USCDI updates.

                                                   1

• Oppose removal of AI model card transparency requirements for predictive decision
support interventions used in vulnerable-population health care.

    •       Support information blocking reforms, with additions to protect caregiver-inclusive care
            coordination data exchange.

    •       Recommend caregiver outcomes as qualifying metrics for AI reimbursement and patient
            safety frameworks (RFI response).


    I.      Policy Context: Technology as the Missing Infrastructure for Caregivers

The HTI-5 Proposed Rule arrives at a defining moment for community-based care delivery and for
the 53 million Americans providing unpaid care to adults with illness or disability. Family caregivers
are the among the largest workforces in American health care—and they are structurally invisible in
the certified health IT systems that HTI-5 governs. Certified EHR systems today are not required as
part of the baseline certification criteria to capture who a patient’s caregiver is, what burden they
carry, whether they are approaching burnout, or how their capacity affects the patient’s risk of
institutionalization. This is not a gap in clinical practice—it is a gap in data architecture. HTI-5 is the
rulemaking where that architecture is set.

The fiscal backdrop amplifies the urgency. The five-year budget window established by H.R. 1 is
projected to substantially reduce aggregate federal Medicaid spending over the coming decade.
HCBS, the programs most dependent on family caregiver infrastructure, are disproportionately
vulnerable because they remain optional Medicaid benefits. States that can demonstrate
measurable cost avoidance through community-based alternatives to institutionalization will be best
positioned to sustain HCBS. That demonstration requires data. The interoperability standards set in
HTI-5 will determine whether that data exists.

The intersection of these pressures creates both a challenge and an opportunity. Done right, HTI-5’s
FHIR-first certification reset and information blocking reforms can create the technical foundation for
a health care system that finally recognizes caregivers as part of the care team—not as an
afterthought, but as a structured data element in the platforms that coordinate care, allocate
resources, and measure outcomes.

Two features of HTI-5 are particularly consequential for caregiver-inclusive care delivery. First,
ASTP/ONC proposes to realign the entire Certification Program around FHIR-based APIs, creating a
once-in-a-generation opportunity to embed caregiver data elements into the technical standards that
govern health information exchange. Second, the proposed changes to information blocking
definitions and exceptions will reshape the rules governing how caregiver-inclusive platforms like
CareNav Health access and exchange electronic health information. These are the two areas where
our recommendations are concentrated, supplemented by specific concerns about AI transparency
and an RFI response on AI reimbursement and safety.

                                                     2

II. Specific Recommendations

Recommendation 1: Support the FHIR-First Certification Reset—With Explicit Caregiver Data
Element Inclusion

Type: Certification criteria amendment (§170.315 revisions; USCDI v3.1 scope) | Position: Support
with modification

FCA and CareNav Health strongly support ASTP/ONC’s proposal to reset the Certification Program
around FHIR-based APIs. We recognize that HTI-5 is a deregulatory action under Executive Order
14192, and we support its core objectives: reducing certification burden, removing outdated
functionality-oriented criteria, and clearing space for FHIR-based innovation. Consolidating
certification criteria around FHIR R4 and Patient Access APIs is the most consequential step ONC
can take to enable interoperable, person-centered care—and it is the foundation on which caregiver-
inclusive data exchange depends.

We urge, however, that ASTP/ONC use this certification reset to remove a barrier to the kind of third-
party innovation the rule is designed to unleash: the complete absence of standardized caregiver
data elements in the FHIR API ecosystem. CMS’s GUIDE dementia care model, now operating
across nationwide with nearly 400 participating organizations, requires participating organizations to
collect standardized caregiver burden assessments and dementia staging, yet no certified EHR is
required to store, exchange, or interoperate on this data. The result is that federally funded care
models are collecting caregiver data that the certified health IT ecosystem cannot transport. Enabling
FHIR-based exchange of this data through existing R4 resources like RelatedPerson and
QuestionnaireResponse does not require new certification functionality—it requires recognizing data
elements that third-party platforms like CareNav Health are already building on.

We request that the expansion of FHIR API scope explicitly include the following caregiver data
elements:

• Caregiver identification (relationship, contact information, primary caregiver designation)
as a required data element for Patient Access APIs, leveraging the FHIR R4
RelatedPerson resource and aligned with USCDI v3 Care Team Member data class.

• Caregiver strain assessment scores using validated instruments such as the Zarit
Burden Interview or the Bakas Caregiving Outcomes Scale as a standardized data
element under USCDI, leveraging the FHIR R4 QuestionnaireResponse resource.

• Dyadic care planning documentation (joint goals, caregiver-specific service referrals,
caregiver capacity flags) as a data element within CarePlan resources exchanged
through FHIR APIs.

This recommendation aligns with California’s SB 1249, which establishes a state statutory
foundation for caregiver data collection. We recognize that the proposed USCDI v3.1 streamlines
data elements relative to v3, consistent with HTI-5’s deregulatory objectives. We are not asking
ASTP/ONC to reverse that direction. Rather, we recommend that caregiver data elements be
prioritized for inclusion in future USCDI versions or FHIR implementation guide requirements and
that this rulemaking signal that intent. This aligns with CMS’s GUIDE model requirements for
standardized caregiver burden assessment. Taken together, these policies create a policy
3
environment in which certified health IT should be expected to support caregiver data exchange—
not merely permitted to do so. They also make a strong case for treating caregiver data as core
infrastructure in the FHIR ecosystem.

Without this inclusion, the FHIR-first certification reset, despite its transformative potential, will leave
America’s 53 million family caregivers invisible in the health data infrastructure that third-party
innovators depend on.

Recommendation 2: Oppose Removal of AI Model Card Transparency Requirements for
Predictive Decision Support in Vulnerable-Population Health Care

Type: DSI criterion amendment (§170.315(b)(11)) | Position: Oppose proposed removal

HTI-5 proposes to remove the requirement that AI-based predictive DSI tools supply model card
transparency information including training data descriptions, performance metrics, and bias
evaluation on the grounds that developers have found the requirement burdensome and that clinical
utility has not been demonstrated.

FCA and CareNav Health oppose this removal and urge ASTP/ONC to maintain AI transparency
requirements with particular attention to AI tools used in care pathways affecting older adults, people
with dementia, and other populations where caregiver capacity directly influences clinical outcomes.

CareNav Health’s platform will use AI-driven risk stratification to identify family caregivers at elevated
risk of burnout, predict community placement instability, and recommend dyadic interventions. These
tools will directly influence care decisions for vulnerable populations including D-SNP members with
dementia and near-dual older adults in California’s proposed BridgeCare Pilots. The stakes are
heightened by current MA market dynamics: Milliman’s February 2026 analysis documents the
largest decline in MA benefit value in at least a decade, with Part C benefit value decreasing
approximately the benefit value of Medicare-covered benefits decreasing by over $7 PMPM and
non-Medicare-covered supplemental benefit value decreasing by about $10 PMPM for 2026
general-enrollment plans. When plans are compressing benefits and tightening care management
resources, AI tools that determine which D-SNP members receive caregiver support carry greater
consequences for vulnerable populations—and require greater, not less, transparency. In our view,
any AI tool that influences care pathways for these populations should be subject to minimum
transparency requirements, regardless of the general regulatory burden argument.

The argument that model card transparency lacks demonstrated clinical utility proves too much: the
requirement has been in effect for less than two years, and its removal before meaningful evaluation
would set a precedent that transparency requirements for AI in health care can be discarded before
they are tested.

We propose a tiered alternative that achieves burden reduction while preserving accountability
where it matters most:

    •       Maintain model card requirements for AI predictive DSI tools deployed in: (a) dementia
            and cognitive impairment care, (b) LTSS and HCBS eligibility or care planning, (c) dual-
            eligible and Medicare-Medicaid crossover populations, and (d) any clinical use case
            where caregiver capacity is a documented predictor of outcomes.

                                                     4

• Allow streamlined disclosure for well-validated tools with demonstrated safety records—
e.g., those with independent algorithmic audits or that are cleared or approved as FDA-
regulated AI/ML-enabled devices.

    •       Require certified health IT to disclose to clinical end-users when a predictive DSI tool has
            limited training data representation for populations over 65, people with dementia, or
            dual-eligible individuals—populations systematically underrepresented in health AI
            training datasets.

A tiered transparency framework of this kind would substantially reduce developer burden for low-
risk, validated tools while maintaining meaningful safeguards where AI’s impact on vulnerable
populations is greatest. It would also align with CMS’s emphasis on health equity in the CY 2026 D-
SNP Policy Guide and with the GUIDE model’s requirement for evidence-based dementia staging
and caregiver assessment.

Recommendation 3: Support Information Blocking Reforms—With Additions to Protect
Caregiver-Inclusive Care Coordination

Type: Information blocking rule amendment (§171.102 definitions; §171.301(a) Manner Exception;
§171.403 TEFCA Exception) | Position: Support with additions

FCA and CareNav Health support ASTP/ONC’s proposed expansion of the definitions of ‘access’
and ‘use’ to encompass automated, machine-based interactions with electronic health information
(EHI). This is essential to enable AI-driven care coordination platforms including CareNav Health’s
FHIR-native caregiver assessment and risk stratification tools—to access and process EHI in real
time, without requiring manual human retrieval.

We also support the proposed revision to the Manner Exception (§171.301(a)) to clarify that the
exception does not cover practices that restrict access based on the identity or role of the requester,
as opposed to the technical format or manner of the request. This clarification is important for
caregiver-inclusive platforms, which may be denied EHI access on the basis that they are not
“traditional” clinical systems, even when they are authorized to receive and use EHI for care
coordination purposes.

We offer two additions to strengthen these provisions:

Addition A — Explicit Protection for Caregiver-Inclusive Care Coordination Platforms

ASTP/ONC should clarify in the final rule that AI-based platforms accessing EHI for caregiver-
inclusive care management and dyadic care coordination are engaged in ‘permitted use’ of EHI for
treatment and care coordination under the information blocking rules, provided they meet applicable
privacy and security standards. This would prevent EHR vendors or health systems from blocking
caregiver-inclusive platforms’ access to EHI by arguing that caregiver data exchange is outside the
scope of ‘treatment’ or ‘care coordination.’

Addition B — TEFCA Manner Exception Removal: Clarification Request

HTI-5 proposes to remove the TEFCA Manner Exception (§171.403). FCA and CareNav Health
request clarification on whether the removal of this exception affects the ability of TEFCA QHINs and
5
their participants to condition data exchange on TEFCA participation as a technical manner
requirement. If removal is intended to broaden access to EHI beyond TEFCA-participating entities,
this would benefit caregiver-inclusive platforms that may not yet participate in TEFCA but are
authorized data exchange partners under state-level frameworks such as California’s Data
Exchange Framework.

Recommendation 4: RFI Response — AI Policy, Patient Safety, and Reimbursement

Type: Response to companion RFI on AI software change rules, patient safety, and reimbursement

On AI Software Change Rules and Patient Safety

FCA recommends that any federal AI safety framework for health care require AI developers to
conduct and publicly disclose bias and performance evaluations specifically for populations over 65,
people with cognitive impairment, dual-eligible individuals, and populations where family caregiver
capacity is a documented clinical variable. These populations are systematically underrepresented in
AI training data and face the highest stakes from AI-driven care decisions.

We further recommend that ONC establish a mechanism for community-based care organizations to
report AI tool performance issues in real-world settings, analogous to the existing MedWatch
adverse event reporting system for drugs and devices.

On Reimbursement for Cost-Reducing AI Technologies

FCA recommends that any reimbursement evaluation framework for AI tools include caregiver
outcomes as qualifying cost-reduction metrics. Evidence from Washington’s TSOA/MAC programs,
Georgia’s Respite Care Study, and CMS’s GUIDE model demonstrates that caregiver-inclusive
interventions reduce ED visits and inpatient admissions and delay nursing facility placement, often
by months to years per care dyad. AI tools that improve caregiver identification, assessment, and
support should be eligible for reimbursement credit based on these demonstrated savings.

On Interoperability of Protected Health Data

FCA urges ONC to address the complete absence of family caregiver data in certified EHR systems
as a foundational interoperability gap—not merely a clinical workflow issue. Until caregiver data
elements are part of the certified health IT baseline, no amount of interoperability reform will make
caregivers visible in the systems that coordinate and pay for care.

                                                  6

III. FCA and CareNav Health as National Implementation Partners

FCA and CareNav Health offer these recommendations as organizations with demonstrated
operational and technical capacity to implement the caregiver-inclusive data standards we propose,
and with a long-standing public-interest mission to support family caregivers.

CareNav Health’s platform, built on a FHIR-native infrastructure with integrated analytics capabilities,
is currently designed to support California’s CalAIM delivery system, including Enhanced Care
Management, D-SNP care integration, and the proposed BridgeCare Pilots for near-dual older
adults. The platform generates structured caregiver assessment data using FHIR R4 resources and
is designed to exchange that data with EHRs, health plans, and state data systems through
standardized APIs.

The administrative ecosystem for California’s dual-eligible population—encompassing CalAIM ECM,
D-SNP care management, and BridgeCare—provides a natural testing ground for the caregiver data
elements we recommend for USCDI and the FHIR API scope expansion. We are building the
infrastructure that HTI-5’s standards would govern.

We are prepared to collaborate with ASTP/ONC in any of the following capacities:

    •       Contributing to a stakeholder process on caregiver data element standardization under
            USCDI.

    •       Providing real-world testing data from our FHIR-based caregiver data exchange pilot in
            California to support post-rulemaking implementation guidance.

    •       Participating in development of tiered AI transparency criteria for vulnerable-population
            clinical use cases.

    •       Providing comment on draft interpretive guidance clarifying information blocking
            protections for caregiver-inclusive care coordination platforms.

Conclusion

The choices made in HTI-5 will determine whether America’s 53 million family caregivers become
visible in the health data infrastructure—or remain structurally excluded for another decade. This is
not an abstract equity concern. It is a question of whether the interoperability standards that govern
health care will reflect the reality that most community-based care is delivered by unpaid family
members whose capacity, burden, and well-being directly affect clinical outcomes and costs.

Interoperability is only as valuable as the range of data it connects. The clinical and economic case
for including caregiver data in certified health IT is as strong as the case for including social
determinants of health—which ONC has already recognized as a USCDI priority. We ask that
caregivers receive the same recognition.

We respectfully urge ASTP/ONC to: (1) include caregiver data elements in the expanded FHIR API
scope and USCDI v3.1 updates; (2) maintain AI transparency requirements for predictive tools used
in vulnerable-population health care; (3) clarify information blocking protections for caregiver-
7
inclusive care coordination platforms; and (4) include caregiver outcomes in AI reimbursement and
safety frameworks.

We appreciate the opportunity to contribute to this rulemaking and stand ready to provide additional
technical detail, pilot data, or stakeholder convening support at ASTP/ONC’s request.

Respectfully submitted,

Kathleen Kelly
Executive Director
Family Caregiver Alliance
National Center on Caregiving

Genevieve Caruncho-Simpson, MPA-HPM
Senior Advisor, Family Caregiver Alliance
Co-Founder & CEO, CareNav Health

                                                  8

# HHS-ONC-2025-0005-0145 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0145/attachment_1.pdf

---

February 26, 2026

Thomas Keane, MD, MBA
Assistant Secretary for Technology Policy
U.S. Department of Health and Human Services
330 C St SW
Floor 7
Washington, DC 20201

Attention: Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory
Actions to Unleash Prosperity (HTI-5)(RIN 095-AA09)

Dear Assistant Secretary Keane,

On behalf of Medical Information Technology, Inc., I am pleased to offer comments
on the Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory
Actions to Unleash Prosperity Proposed Rule.

MEDITECH empowers healthcare organizations to expand their vision of what’s
possible with Expanse, the intelligent EHR platform. Around the globe, Expanse
transforms care and ushers organizations into the future with AI-infused solutions,
personalized workflows, next-level interoperability, and predictive analytics — all
working together to drive better outcomes.

We support ASTP/ONC’s deregulatory direction in HTI-5, particularly efforts to reduce
duplicative or misaligned requirements between certification and information
blocking enforcement. Greater consistency across these frameworks is essential to
minimizing confusion, implementation burden, and unnecessary cost, while allowing
developers to focus on reliable, secure, and clinically appropriate data exchange.

We respect ASTP/ONC’s continued engagement with stakeholders and appreciate
the opportunity to provide comments on this proposed rule. Kindly find our feedback
noted below.

Thank you for your time and consideration. We look forward to your responses in the
final rule.

                                                                                      1

Certification Program Proposed Changes

§ 170.213 USCDI Update to v 3.1
MEDITECH advocates for a strong baseline standard for data elements that
effectively address cross-program requirements. Although this particular proposed
change was the removal of data elements to align with the recent USCDI v3 Data
Elements Enforcement Discretion Notice, we would like to take this time to
communicate that changes in version can impose considerable burden not only on
health IT developers but also on healthcare providers via implementation and
training.

MEDITECH recommends a minimum of 24 months' lead time to effectively develop,
safely test, and successfully rollout code changes to our customers in response to
future certification requirements. This timeframe is essential to ensure the reliability,
security, and interoperability of HIT systems. Additionally, any proposed changes to
standards necessitate sufficient lead time for development and deployment,
minimizing disruptions and impacts on healthcare providers.

We continue to support a clear, dependable, and consistent methodology for the
adoption of subsequent USCDI versions. Maintaining consistency in this domain will
enable ASTP/ONC to ensure that Health IT developers remain aligned with evolving
standards and providers of healthcare have ample time to learn new workflows.

§ 170.315(a)(5) - Patient Demographics

MEDITECH supports the proposed revisions of the § 170.315(a)(5) certification criterion
by aligning with the recent USCDI v3 Data Elements Enforcement Discretion Notice.
Maintaining a consistent standard for seamless data exchange is fundamentally
important.

We also recommend consideration of further deregulation by removing §170.315(a)(5)
entirely and deferring to the demographic data class within USCDI instead.

§ 170.315(a)(12) - Family Health History

MEDITECH supports the removal of the § 170.315(a)(12) certification criterion.
We agree that the functionality to capture family health history is well-established
and thoroughly integrated within electronic health record (EHR) systems.

§ 170.315(a)(14) - Implantable Device List

MEDITECH supports the removal of the § 170.315(a)(14) certification criterion as this
functionality is well-established and is also included as a required data element
within the USCDI. We appreciate streamlining the certification program through the
elimination of redundant requirements.

                                                                                            2

§ 170.315(b)(1) - Transitions of Care

MEDITECH seeks clarification regarding the proposed removal of certification
requirements to send or generate Consolidated Clinical Document Architecture
(C-CDA) documents, while retaining requirements to receive and validate them.
While we understand ASTP/ONC’s broader goal of transitioning toward more FHIR
API-based exchange, we are concerned about potential unintended consequences
during the interim period.

Absent a clear regulatory bridge between HTI-5 and anticipated future requirements
(e.g., HTI-6), there is a risk that removal of requirements could inadvertently disrupt
established transitions of care workflows. C-CDAs remain widely relied upon across
care settings, particularly in environments not yet fully enabled for FHIR-based
exchange.

While patient access is vital, the "Transmit" function within (e)(1), allowing patients to
send a C-CDA to a third party, is one of the least utilized functions in certified EHR
technology (CEHRT). As an alternative, we propose consideration of removal of
sending C-CDA from (e)(1) and retain it in (b)(1). This change would ensure the major
use case is certified and it has an increased reduction on testing burden.

§ 170.315(b)(2) - Clinical information reconciliation and incorporation

MEDITECH supports the proposed removal of the § 170.315(b)(2) certification criterion.
We believe that its removal would stimulate greater innovation in this domain,
thereby aligning with the core principles of the ASTP/ONC.

Should the criterion be retained, we recommend a substantial simplification,
focusing exclusively on the demonstration of incorporation and eliminating all User
Interface-specific requirements regarding display presentation.

§ 170.315(b)(11) - Decision Support Interventions (DSI)
MEDITECH supports a revision of the § 170.315(b)(11) certification criterion related to
source attributes, but rather than complete elimination of the requirement, instead
encourages HHS to re-evaluate the enumerated information to ensure source
attribute documentation fully aligns with organizational and end-user needs for
transparency and explainability. Given the currently unconfirmed understanding of
how this information has been used by organizations and end-users to-date–and
whether organizations of varying resources and capacities are even able to leverage
this information to make informed decisions regarding the implementation and
ongoing monitoring of an AI system–we acknowledge and agree that requiring
developers to consistently maintain large volumes of information is burdensome. We
feel revising these requirements will also offer an avenue to instead develop a
streamlined, reciprocated transparency framework across HHS (ASTP/ONC, FDA,
CMS) that supports consistent and clear communication regarding AI system

                                                                                         3

intended use, risks and limitations, performance information, and accountability in a
way that better supports organization and end-user assessment of AI systems while
minimizing vendor strain.

MEDITECH also supports a revision of the § 170.315(b)(11) certification criterion related
to the risk management framework; however, rather than a complete removal of this
requirement, we recommend a revision that supports a risk-tiered approach and
consistent expectations and documentation requirements across HHS agencies and
offices. This would still include risk management and controls, but allow more
flexibility for developers to allocate resources and define an approach more
commensurate with each use case's identified/perceived risk. Without a federal-level
risk framework that broadly addresses concerns, states will continue to enact
individualized legislation, putting extra strain on vendors to comply with varying
requirements. Ensuring this federal framework also aligns with international
standards and will additionally support developers in having one pathway to achieve
broad compliance.

§ 170.315(c)(3) - Clinical quality measures — report

MEDITECH supports the proposal to revise the § 170.315(c)(3) certification criterion.
We agree that it makes sense to remove expired standards and appreciate
streamlining the remaining requirements to ensure clarity and consistency.

§ 170.315(g)(1) - Automated numerator recording & § 170.315(g)(2) - Automated
measure calculation

MEDITECH seeks clarification on the proposed removal of both the § 170.315(g)(1)
and § 170.315(g)(2) certification criteria. We agree that the current requirements are
significantly burdensome and do appreciate efforts to streamline; however, we are
cautious about how CMS will adapt its reporting requirements in response. Should
CMS’s Promoting Interoperability Program move toward purely attestation-based
measures, we believe the removal is appropriate. Conversely, if the program
continues to require numerator and denominator-based measures, their removal
might lead to measurement inconsistencies.

§ 170.315(d) - Privacy and Security

MEDITECH supports ASTP/ONC’s alternate proposal to retain “auditable events and
tamper resistance” (§ 170.315(d)(2)), “audit report(s)” (§ 170.315(d)(3)), and “auditing
actions on health information” (§ 170.315(d)(10)) certification criteria and associated
Privacy and Security Certification Framework certification requirements. HIPAA is not
currently prescriptive as to what specific pieces of information should be present on
an audit log. The certification criteria, as outlined within the alternate proposal,
currently provide vetted proof of HIPAA compliance within EHR systems and provide

                                                                                         4

essential guidance to developers to create tools to fulfill the essential purpose, as well
as the letter of the regulation. This vetted proof will also be beneficial as new market
entrants understand the technical needs of their healthcare clients.

MEDITECH agrees with the proposed removal of the remaining criteria, as the
technical requirements they address would be encompassed by the broader API,
FHIR, and TEFCA standards.

§ 170.315(e)(1) - View, download, and transmit to 3rd party

MEDITECH remains firmly committed to ensuring robust patient access to health
information through the Patient Portal. However, to better align certification
requirements with actual real-world usage, we recommend that ASTP/ONC prioritize
the removal of C-CDA generation and transmission requirements from § 170.315(e)(1)
(View, Download, and Transmit to 3rd Party).

While we have expressed concerns regarding the potential disruption of
provider-to-provider workflows in § 170.315(b)(1), we believe (e)(1) is a more
appropriate candidate for removal due to its low utilization. Should ASTP/ONC move
forward with removing the "send" requirements in (b)(1), we strongly urge a
reciprocal removal in (e)(1). Maintaining these requirements in (e)(1) creates a
disjointed development path for a feature that sees minimal engagement from
end-users, whereas removal would allow developers to focus resources on the
high-utilization FHIR pathways that patients actually use.

MEDITECH supports the proposed revisions regarding removal of the WCAG and
NTP standards from this criterion.

§ 170.315(e)(3) - Patient health information capture

MEDITECH supports the removal of the § 170.315(e)(3) certification criterion. We agree
the capabilities to capture patient health information are widely implemented and
utilized within EHR systems.

§ 170.315(f)(4) - Transmission to cancer registries

MEDITECH supports the removal of the § 170.315(f)(4) certification criterion and the
EHR Association's recommendation to encourage ASTP/ONC to establish a defined
pathway for migration.

We also echo the EHR Association's observation that provider-based reporting for
cancer is likely redundant as a mandate for laboratory reporting already exists under
the Clinical Laboratory Improvement Amendments (CLIA).

                                                                                         5

§ 170.315(f)(5) - Transmission to public health agencies - electronic case reporting

MEDITECH strongly opposes the proposal to revise the § 170.315(f)(5) certification
criterion by removing standards-based requirements. While we appreciate the
Department’s goal of reducing administrative burden, we believe that pivoting to a
purely ‘functional’ requirement, without mandating adherence to established HL7
standards, will inadvertently create a fragmented landscape that potentially
increases long-term costs and stifles innovation.

We strongly suggest this criterion remain unchanged and the standard-based
requirements remain.

§ 170.315(f)(6) - Transmission to public health agencies - antimicrobial use and
resistance reporting

MEDITECH supports the proposed revisions to the § 170.315(f)(6) certification criterion.
We agree the transition from a standards-based requirement to a functional
requirement works better in this specific use case as it will better align with the
CDC's National Healthcare Safety Network’s (NHSN) reporting requirements.

§ 170.315(f)(7) - Transmission to public health agencies - health care surveys

MEDITECH supports the proposed removal of the § 170.315(f)(7) certification criterion
as we agree it decreases burden.

We encourage ASTP/ONC to develop and maintain testing tools which will allow EHR
vendors to ensure baseline specifications are successfully met prior to provider
customer deployment.

§ 170.315(g)(3) - Safety-enhanced design

MEDITECH supports the proposal to remove the § 170.315(g)(3) certification criterion.
We are strong advocates for safety-enhanced and user-centered design and are
committed to their inclusion in our development approach. Nevertheless, we
recognize the hefty expense associated with the testing required for certification. The
removal of this criterion is appreciated, as it will reduce regulatory burden and allow
for greater autonomy in driving more effective usability studies.

§ 170.315(g)(4) - Quality management system

MEDITECH supports the proposal to remove the § 170.315(g)(4) certification criterion.
We will continue to follow the ISO industry standard, so agree this criterion can be
seen as duplicative. However, we share the EHR Association’s concern regarding
industry newcomers and their adoption of quality management systems should it

                                                                                        6

not be achieved through certification.

§ 170.315(g)(5) - Accessibility-centered design

MEDITECH supports the proposal to remove the § 170.315(g)(5) certification criterion.
We view this criterion as redundant, given that accessibility-centered design is
already mandated by the Americans with Disabilities Act and enforced by the
Department of Justice. We appreciate the acknowledgment of this redundancy by
ASTP/ONC.

§ 170.315(g)(6) - Consolidated CDA creation performance

MEDITECH supports the proposal to remove the § 170.315(g)(6) certification criterion.

§ 170.315(g)(7) - Application access — patient selection

MEDITECH supports the proposal to remove the § 170.315(g)(7) certification criterion.
We find this criterion to be duplicative of § 170.315(g)(10) and, consequently, favor
streamlining efforts in this area.

§ 170.315(g)(9) - Application access — all data request

MEDITECH supports the proposal to remove the § 170.315(g)(9) certification criterion.
We find this criterion to be duplicative of § 170.315(g)(10) and, consequently, favor
streamlining efforts in this area.

§ 170.405(b) - Real World Testing - Plans

Under the proposed HTI-5 framework, MEDITECH notes a lack of clarity regarding
testing expectations for criteria outside the API and ePA domains. While we
acknowledge the focused reporting for (g)(10) and (g)(31)–(33), it is unclear whether
developers are still obligated to maintain metrics for the broader suite of previously
required criteria. To ensure compliance and minimize unnecessary data gathering,
MEDITECH requests that ASTP define the minimum necessary metrics for reporting
now that individualized Test Plans are being retired. Specifically, we ask for a
definitive list of criteria subject to RWT and how SVAP participation influences these
reporting obligations.

§ 170.407 - Insights Condition and Maintenance of Certification Requirements

MEDITECH supports the proposed revisions to the Insights certification
requirements to align with the recent enforcement discretion. We also agree that
efforts should be focused on exchange using FHIR-based APIs.

However, with any new future measure creation, we recommend ASTP/ONC to
please consider providing sufficient lead time as new metrics and data capture

                                                                                         7

capabilities do require significant efforts.

Information Blocking Proposed Changes

MEDITECH generally aligns with and echoes the themes raised by the EHR
Association related to information sharing, and appreciates ASTP/ONC’s intent to
refine information blocking policy to better target intentional interference rather
than good-faith limitations.

We encourage ASTP/ONC to refine the definition of information blocking to clearly
distinguish intentional interference from legitimate delays or limitations driven by
patient safety, data accuracy, privacy concerns, or technical feasibility. Predictable
standards are critical for compliance planning and for fostering continued
investment in interoperability infrastructure.

We also encourage ASTP/ONC to prioritize and accelerate the development of a
national standard and implementation guide for patient consent. Currently, the lack
of a unified national standard poses considerable technical and operational hurdles
for stakeholders throughout the industry, as detailed in the work of the
Interoperability & Consent Workgroup of the Interoperability Matters Leadership
Council. Establishing an industry standard is essential to ensure compliance with 45
CFR 171.202(e) Sub-exception - individual’s request not to share EHI, which permits
an individual to request that their electronic health information not be shared.

                                                                                         8

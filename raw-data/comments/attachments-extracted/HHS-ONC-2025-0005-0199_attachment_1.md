# HHS-ONC-2025-0005-0199 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0199/attachment_1.pdf

---

February 27, 2026

Thomas Keane, M.D., MBA, Secretary
Office of the Assistant Secretary for Technology Policy / Office of the National
Coordinator for Health IT (ASTP/ONC)
330 C Street SW
Washington, DC 20201

RE: ASTP/ONC Health Data, Technology, and Interoperability (“HTI-5”) Proposed
Rule
RIN 0955–AA09

Dear Secretary Keane,

The American Psychiatric Association (APA), representing over 39,200 psychiatric
physicians and the patients they serve, appreciates ASTP/ONC’s ongoing efforts to
improve interoperability, advance responsible innovation, and reduce unnecessary
burden in health IT policy. We share the agency’s commitment to patient-
authorized access that supports care coordination and engagement. However, APA
encourages ASTP/ONC to carefully consider the potential cumulative effects of the
HTI-5 proposal’s focus on reducing or narrowing certain certification requirements.
As summarized in the proposal, HTI-5 would scale back a number of existing
certification criteria while also making a significant shift in defining “access” to and
“use” of electronic health information to not be limited to direct human interaction,
but may also occur through automated processes, including software-enabled and
AI-driven workflows that retrieve or act on data. APA has concerns that expanding
interpretations of “access” and “use” to include AI-enabled and other automated
systems may outpace the availability of consistent safeguards for privacy, consent,
auditability, and clinical integrity particularly for sensitive behavioral health
information.

Overall, APA is concerned that reducing certification requirements without a clearly
developed replacement framework could lead to increased variability across health
IT products in areas such as privacy controls, auditability, consent-aware workflows,
and data segmentation which are capabilities especially important for sensitive
behavioral health information. Additionally, large systems may be able to build
compensating controls while smaller behavioral health practices and safety-net
providers often cannot. The likely result is uneven safeguards across settings, raising
the risk of both inappropriate disclosure (over-sharing) and care disruption (under-
sharing), particularly during transitions of care.
In the spirit of collaboration and shared goals, APA offers the following
recommendations:

Algorithm Transparency: Retain a Minimum “Model Card” Transparency
Requirement for Predictive DSI
APA strongly urges ASTP/ONC to reconsider removing the “model card”
requirement from the Decision Support Interventions (DSI) transparency framework. As proposed,
eliminating model cards would reduce transparency, increase “black box” use, and complicate safe and
lawful use particularly where sensitive behavioral health and substance use disorder information is
implicated. The proposal highlights heightened risk for confidentiality and compliance expectations
(including 42 CFR Part 2 considerations) when clinicians and organizations cannot understand how
models process sensitive data or generate recommendations.
AI-driven interventions may influence high-stakes clinical decisions (e.g., suicide risk flags, involuntary
hold workflows, medication risk scoring, discharge readiness) and may affect confidentiality-related
decisions. Removing transparency requirements shifts risk to clinicians and patients and may undermine
trust in health IT-enabled care.

APA Recommends:

1. Retaining a minimum, scalable model transparency requirement for predictive models used in
   certified health IT (a “right-sized” model card), rather than eliminating the requirement entirely.
2. Provide implementation guidance that supports behavioral health workflows, including how
   model documentation should address limitations, appropriate-use contexts, and handling of
   sensitive data.

USCDI v3.1 Baseline and Sensitive Demographics: Avoid New Interoperability Gaps
APA recognizes the complexity surrounding standardization of sensitive demographic elements. As
described in the HTI-5 proposed rule’s overview, USCDI v3.1 which establishes the baseline set of data
elements required for ONC Health IT Certification would represent a more limited data set than USCDI
v3, including by removing or revising certain standardized elements related to sex, sexual orientation,
and gender identity. This may reduce pressure on some providers to collect sensitive information;
however, reduced standardization may also weaken continuity of care, quality clinical decision making,
and patient-centered documentation, especially where patients want those data used appropriately
across settings.
Recommendations: 1. Clarify how ASTP/ONC will support patient-centered documentation goals if standardization is
reduced and system support becomes inconsistent. 2. Ensure that any reduction in standardized elements does not inadvertently create new
interoperability barriers for integrated behavioral health and primary care workflows, referrals,
and transitions.

Data Segmentation and Security Tags: Do Not Let Segmentation Backslide
APA is particularly concerned about proposals to remove certification criteria related to “security tags”;
an important mechanism to support data segmentation (e.g. substance use disorder data) for privacy.
Retaining data segmentation and tagging standard while removing the associated certification
requirements lowers the minimum level of functionality that health IT products must support, resulting
in greater variability in whether and how segmentation and security tags are implemented. In practice,
this variability can shift responsibility to clinicians and organizations to manage sensitive behavioral
health information through manual workarounds such as redaction or separate documentation
pathways as well as increased administrative burden in order to document sensitive data. This could
also result in increase risk of both over-sharing and under-sharing of information during referrals and
transitions of care.
Recommendations:

1. Retain certification requirements for segmentation/security tagging or adopt a clear alternative
   pathway that ensures segmentation is implemented, tested, and interoperable end-to-end in an
   API-forward ecosystem.
2. Provide a clear transition plan to ensure that existing data segmentation capabilities are not lost
   and that consent and restricted data indicators continue to function consistently across
   networks.

Privacy & Security Certification Framework: Preserve Baseline Auditability and Access Governance
The proposal to eliminate the requirement for certified vendors to demonstrate certain privacy and
security-related capabilities, such as user access controls (e.g., role-based access), audit logging of
access to electronic health information, and other requirements with only an optional narrower audit-
focused alternative, raises significant concerns for behavioral health. Behavioral health providers often
require strong auditing, role-based access, as well as clear, consistent, and well-documented controls
over who can access patient data due to heightened confidentiality expectations and patient safety
concerns. The proposal to eliminate these safeguards does not meet ONC’s intended goal or the needs
of clinicians and their patients.
Additionally, the HTI-5 Proposed Rule indicates that ASTP/ONC would remove a broad set of privacy and
security certification criteria including access control and authorization, audit logging and audit
reporting, auditing actions on health information, accounting of disclosures, encryption-related
capabilities, and multi-factor authentication. For behavioral health, these functions are not “nice to
have” but rather are foundational to confidentiality, access governance, and the ability to investigate
inappropriate access.
Recommendations: 1. Retain a minimal, core privacy/security certification baseline which includes at least multi-factor
authentication, role-based access controls, and audit logging/audit reporting, for all certified
health IT, given the heightened confidentiality needs in behavioral health. 2. If certification criteria are removed, ASTP/ONC should clearly require vendors to continue
supporting key capabilities through other enforceable mechanisms, so that certified products do
not lose important privacy and security functionality over time. For example, a requirement for
a public attestation from developers stating that their certified products support specific
privacy, security, or segmentation capabilities, even if those capabilities are no longer tested
through certification.

Information Blocking Updates: Automated Access Must Come with Guardrails for Confidentiality,
Consent, and Safety
Under HTI-5, ONC proposes to clarify that “access,” “use,” and potentially “exchange” of electronic
health information include automated processes, not just requests initiated and reviewed by a human.
This means that requests made by software systems, including AI-enabled tools, could be treated as
legitimate requests for access to data under information blocking policy. At the same time, the proposal
would narrow the infeasibility exception and remove or limit certain justifications that organizations
currently rely on to decline or delay access (until further investigation has been done) when technical,
privacy, safety, or governance safeguards are not yet in place.
Taken together, these changes create a real concern that providers could be expected to respond to
automated or AI-initiated data requests as if they were traditional access requests, even when:
 • the request is continuous or bulk rather than episodic,
• the purpose and downstream use of the data are unclear,
• consent and segmentation controls are incomplete or unreliable, or
• the organization cannot adequately oversee or revoke access once granted.

In this context, declining or conditioning AI-enabled access in order to protect patient privacy, comply
with behavioral health confidentiality requirements, or preserve clinical integrity could be
mischaracterized as impermissible information blocking, rather than recognized as a reasonable and
necessary safeguard.
Recommendations: 1. Explicitly clarify in regulation and guidance that providers are not required to enable third-party
or automated access, including bulk access or write-back (vs. read only) functionality, where
appropriate privacy, consent, safety, and compliance safeguards are not consistently available. 2. Explicitly recognize clinical integrity, patient safety, and confidentiality as legitimate bases for
conditioning or limiting third-party access, including in automated workflows. 3. Provide clear, practical examples showing how organizations can handle consent and restricted
data appropriately in automated access situations, so that uncertainty about enforcement does
not discourage necessary privacy protections. 4. Do not narrow infeasibility or expand automated access expectations without ensuring that
FHIR-based consent, segmentation, and re-disclosure controls are consistently available and
reliable for Part 2 and other sensitive behavioral health data.

Information Block Exceptions
Infeasibility Exception
APA supports efforts to limit overuse of the infeasibility exception as a response to data request, but
HTI-5 would revise how the exception applies to requests that go beyond read-only access such as
requests that involve adding to or modifying the electronic record and would change how alternative
“manners” of access must be exhausted. In behavioral health, where tools increasingly seek to write
information back into clinical systems, APA urges ONC to ensure providers retain clear discretion to
require safeguards that protect record integrity and patient safety.
Recommendations: 1. Ensure that revisions to infeasibility do not undermine the ability of clinicians and organizations
to protect record integrity and patient safety, especially where third-party write-back,
automated ingestion, or AI-mediated changes are requested.
▪ State plainly that requests involving write-back, automated ingestion, or AI-mediated
changes are not the same as read-only access, and that providers may require
governance and validation steps before enabling them. 2. Provide guidance describing when it is appropriate to condition or decline write-back/record
modification requests pending validation, governance, and clinical oversight.

TEFCA Manner Exception
HTI-5 proposes to eliminate the “TEFCA Manner Exception” and an associated set of provisions (Subpart
D). In simple terms, TEFCA is a federal effort to make it easier for health information to move between
organizations through trusted networks. The TEFCA Manner Exception was a rule that helped explain
how organizations could meet information blocking expectations when they were sharing data through
these TEFCA networks and essentially, it provided a TEFCA-specific pathway for compliance.
If this TEFCA-specific pathway is removed, organizations that exchange data through TEFCA may be left
without clear direction on what rules and processes they should follow to demonstrate compliance, and
what they can reasonably require from requesters. This uncertainty is particularly important for
behavioral health, where information is often highly sensitive and where technical safeguards such as
consent controls and data segmentation are not yet consistently implemented across all systems and
networks.
Recommendations: 1. Explain clearly where TEFCA privacy and trust expectations will “live” if Subpart D is removed,
including what network policies, contractual terms, and implementation guidance will be
expected. 2. Ensure through stakeholder dialogue and comment opportunities, that any revised approach
does not weaken protections for sensitive behavioral health information exchanged via TEFCA-
connected networks.

APA appreciates ASTP/ONC’s commitment to advancing interoperability while reducing unnecessary
burden, and we share the goal of ensuring health IT supports high-quality, patient-centered care. We
stand ready to partner with ASTP/ONC and other stakeholders to help ensure HTI-5 is implemented in a
way that works in real-world clinical settings, particularly for behavioral health, by maintaining essential
safeguards for privacy, consent, and safety while enabling appropriate information sharing. APA looks
forward to continued collaboration to align policy and implementation approaches that support both
providers and patients and strengthen trust in the health IT ecosystem.

Thank you for your review and consideration of these comments. If you have any questions or would
like to discuss any of these comments further, please contact Zuhal Haidari (zhaidari@psych.org),
Deputy Director, Digital Health.

Sincerely,

Kristin Kroeger
Vice President, Advocacy, Policy & Practice Advancement
American Psychiatric Association

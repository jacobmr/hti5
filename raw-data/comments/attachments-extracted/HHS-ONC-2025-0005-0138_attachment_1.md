# HHS-ONC-2025-0005-0138 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0138/attachment_1.pdf

---

February 27, 2026

Dr. Thomas Keane
Department of Health & Human Services
Assistant Secretary for Technology Policy/Office of the National Coordinator for Health
Information Technology
Mary E. Switzer Building
Mail Stop: 7033A
330 C Street SW
Washington, DC 20201

RE: Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions to
Unleash Prosperity Proposed Rule (RIN 0955-AA09)

Dear Assistant Secretary Keane:

Civitas Networks for Health (“Civitas”) appreciates the opportunity to provide input on RIN 0955-
AA09, Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions to
Unleash Prosperity (“HTI-5 Proposed Rule”). Civitas is a national nonprofit collaborative
comprised of more than 160 member organizations—health information exchanges (HIEs), health
data utilities (HDUs), all-payer claims databases (APCDs), quality improvement organizations
(QIOs), and organizations supporting their work—dedicated to improving health and health equity
through data infrastructure, multi-stakeholder governance, and cross-sector collaboration.

Civitas members are not primarily developers of certified health IT. Rather, as health information
networks and exchanges under the Cures Act framework, we operate the neutral infrastructure
that enables the access, exchange, and use of electronic health information across communities.
Our members exchange millions of transactions daily, support public health reporting, integrate
clinical and social data, and provide analytics and quality improvement services. For that reason,
changes to certification requirements and information blocking regulations directly affect our
operations and the communities we serve.

Civitas supports ASTP/ONC’s goal of modernizing interoperability policy and reducing
unnecessary regulatory burden. We appreciate the Department’s continued efforts to align federal
policy with current technological capabilities and market maturity. At the same time, HTI-5
represents a significant reset of the Certification Program and a recalibration of enforcement
expectations. These changes should be implemented in a manner that strengthens trusted
exchange infrastructure, preserves functional interoperability across standards, and avoids
shifting unintended risk onto providers, states, and intermediary networks while advancing
innovation and scalability.

Civitas offers the following comments on behalf of our members.

Health IT Certification – Program Reset, FHIR Emphasis, and Standards Continuity
HTI-5 proposes to remove a substantial portion of existing certification criteria and refocus the
Certification Program on FHIR-based API functionality and modernized interoperability standards.

                                  www.civitasforhealth.org                                       1

Civitas recognizes the rationale for updating requirements to reflect current industry capabilities
and to reduce duplicative or outdated mandates.

Nearly all Civitas member systems already support FHIR-based API exchange and have invested
heavily in standards modernization. As Civitas has previously shared, raising the federal
certification baseline to align with evolving industry standards facilitates our members’ efforts to
help partners modernize and enables more efficient and accurate exchange across the health
data ecosystem—including public health agencies and federal partners such as CDC and CMS.
The continued emphasis on standardized APIs can promote scalability and more consistent
exchange across systems.

However, modernization must also account for the reality that a significant portion of exchange
today remains dependent on widely implemented standards such as C-CDA, HL7 v2 messaging,
secure messaging frameworks (e.g., Direct), electronic case reporting (eCR), and electronic
laboratory reporting (eLR). These standards are often considered “baseline” and therefore not the
focus of new certification requirements, yet they remain foundational to operational interoperability
across hospitals, ambulatory providers, public health authorities, rural providers, and long-term
care settings. HTI-5 proposes to remove or reduce certification requirements for several of these
standards, including secure messaging transport. Where such standards remain widely relied
upon in production exchange environments, reducing their certified implementation floor warrants
careful evaluation of operational impact before finalization.

If certification shifts exclusively toward FHIR-based APIs, without continued enforcement and
oversight of these foundational exchange standards, there is a risk that vendor investment and
maintenance attention could drift away from capabilities that remain mission-critical. Functional
interoperability depends not only on API availability, but also on the reliability, accuracy, and
continued support of established exchange mechanisms. For example, degradation in C-CDA
document exchange, HL7 v2 messaging reliability, or electronic laboratory reporting interfaces
could disrupt public health reporting, quality measurement, and rural hospital connectivity – even
if API capabilities are technically available.

In prior comments to CMS regarding the Health Tech Ecosystem, Civitas emphasized the
importance of enforcing baseline standards and real-world interoperability, including inter-version
compatibility and the practical ability to send and receive C-CDAs and HL7 messages across
systems. Interoperability policy should therefore combine standards-based APIs with continued
accountability for foundational exchange capabilities.

Civitas has also consistently emphasized that innovation must account for variability in ecosystem
readiness—particularly in public health. In prior comments to ASTP/ONC, Civitas supported the
introduction of standardized FHIR APIs for public health exchange while recommending a phased,
functional approach during transition periods. Many of our members exchange data with state
and local public health authorities through HIE and HDU intermediaries using a mix of standards-
based exchange, secure messaging, flat files, and API-based methods. A short-term functional
approach, paired with clear milestones toward broader FHIR adoption, can preserve timely data
flow while supporting long-term standards alignment.

                                   www.civitasforhealth.org                                        2

The proposed reset of the Certification Program warrants similar attention to transition and
accountability. Certification has historically provided a shared federal baseline that stakeholders
rely upon—not only for API availability, but for functionality related to care coordination, public
health reporting, emergency access, identity verification, and transparency for decision support
tools. When certification criteria are removed, those responsibilities do not disappear; they often
shift to providers, state and local governments, and intermediary networks. To the extent specific
criteria are retired, Civitas encourages ASTP/ONC to clarify whether oversight will be maintained
through alternative mechanisms such as Conditions of Participation alignment, CMS program
requirements, enhanced real-world testing, or other accountability pathways. Smaller providers,
rural organizations, and community-based entities frequently lack the capacity to independently
validate health IT functionality, interoperability performance, security safeguards, or AI-enabled
tools during procurement and implementation. As certification requirements are reduced, it is
important to ensure that core safeguards are not weakened without clear alternative mechanisms
for oversight.

Civitas recommends that ASTP/ONC:
• Clearly articulate how essential functions previously embedded in certification will be
preserved or overseen through other mechanisms;
• Maintain enforcement of both FHIR-based APIs and widely implemented baseline
exchange standards during clearly defined transition periods, with transparent milestones
toward modernization;
• Emphasize real-world interoperability testing, including inter-version compatibility and
practical exchange performance across diverse environments.
• Clarify how core safety, transparency, and interoperability safeguards previously
embedded in certification will be preserved through complementary policy mechanisms
where appropriate.
• Evaluate proposed removal of certification criteria for widely deployed exchange
standards against evidence of operational reliance, and where such standards remain
foundational to production workflows, consider alternative accountability mechanisms —
such as accredited third-party testing or structured attestation — rather than eliminating
conformance expectations entirely.

Information Blocking – Operational Flexibility and Real-World Constraints
The Proposed Rule revises aspects of the information blocking framework, including narrowing
certain conditions within the Infeasibility Exception (§171.204). Civitas understands and supports
ASTP/ONC’s intent to ensure that exceptions are not used to shield impermissible conduct,
consistent with the statutory purpose of the 21st Century Cures Act to prevent intentional
interference with lawful exchange. However, changes that reduce flexibility without clear
implementation guidance may create uncertainty for actors facilitating exchange in good faith.

Civitas members operate exchange infrastructure across heterogeneous technical environments,
varying state legal frameworks, and differing levels of standards adoption. Interoperability
frequently requires negotiation and reasonable alternative manners of exchange to ensure lawful
and effective data flow. This includes accommodating public health systems that are not yet API-
enabled, addressing consent-related constraints under state law, and sequencing implementation
where recipient systems cannot immediately consume data in a requested format.

                                   www.civitasforhealth.org                                       3

In these circumstances, proposing reasonable alternative manners should not be viewed as
obstruction but rather responsible coordination across complex systems. The Infeasibility
Exception has historically provided guardrails that distinguish intentional withholding from
operational implementation challenges in complex, multi-party exchange environments. Civitas
encourages ASTP/ONC to ensure that revisions preserve clear pathways for good-faith actors to
address real-world constraints without heightened enforcement risk.

As exchange becomes increasingly automated and machine-to-machine, these operational
realities do not disappear but may actually accelerate. Infrastructure actors must retain the ability
to respond to technical, legal, and workflow variability without concern that reasonable
accommodations will be interpreted as interference.

Civitas recommends that ASTP/ONC:
• Provide clear examples within final rule preamble or guidance illustrating permissible
good-faith alternative manners of exchange;
• Affirm that reasonable implementation sequencing, transition periods, and
accommodation of recipient limitations are not indicative of information blocking when
pursued transparently;
• Ensure enforcement frameworks continue to distinguish between competitive withholding
and operational coordination within intermediary networks.
• Affirm that good-faith efforts to comply with evolving standards, including documented
implementation plans and transparent communication with requestors, will be considered
in enforcement determinations.

Information Blocking – Manner Exception and Contractual Limitations
The Proposed Rule revises §171.301 (Manner Exception) to include new contractual conditions,
including requirements that agreements be at “market rate,” not constitute “contracts of adhesion,”
and not contain “unconscionable terms.”

Civitas supports ASTP/ONC’s effort to prevent abusive contracting practices that restrict lawful
access, exchange, or use of electronic health information or that undermine competition and
patient access. However, Civitas is concerned that, without clarification, the proposed changes
could inadvertently encompass standardized participation agreements used by HIEs, HDUs, and
national exchange frameworks.

Standardized participation agreements are foundational to neutral exchange infrastructure. They
establish:
• Consistent privacy and security expectations;
• Uniform permitted and prohibited uses;
• Enforceable governance structures;
• Clear auditability and accountability across participants.

These agreements are often standardized in form because they must apply consistently across
hundreds or thousands of participants. In this context, standardization is not indicative of coercion

                                   www.civitasforhealth.org                                         4

or exclusion – it is necessary for scale, transparency, and fairness when applied uniformly and
transparently across participants.

Civitas recommends that ASTP/ONC clarify that standardized, nondiscriminatory participation
agreements used by neutral health information exchange networks are not per se contracts of
adhesion for purposes of the Manner Exception and do not, by virtue of their structure alone,
constitute interference under the information blocking regulations. Clear differentiation between
exclusionary conduct and neutral governance will reduce uncertainty while preserving
enforcement authority against bad actors. Such clarification would preserve enforcement
authority against genuinely coercive or exclusionary practices while reducing uncertainty for
neutral governance frameworks.

Information Blocking – Automated Access and Use
The Proposed Rule clarifies that “access,” “exchange,” and “use” of electronic health information
include automated and AI-enabled systems. Civitas supports responsible health tech innovation
and recognizes the potential of automation and AI to improve care coordination, quality
measurement, and population health. As data exchange becomes increasingly API-driven and
machine-to-machine, it is appropriate that regulatory definitions reflect current technical realities.

At the same time, the expansion of automated access heightens the importance of verification,
auditability, and clear governance. Local and regional HIEs have built trusted exchange over more
than a decade through transparent participation agreements, enforceable use policies, and
documented audit trails. Many members employ attribution-based query models that require
verifiable evidence of an existing care relationship before granting access, or implement consent
segmentation and role based access controls that embed patient privacy protections directly into
automated workflows. These approaches strengthen identity verification, consent management,
and retrospective accountability.

As automated querying expands, particularly at national scale, access decisions may occur with
limited human review. In this environment, clear standards for verification and oversight are
essential to maintaining trust. Automation does not eliminate variability in legal, consent, or
technical constraints; it can accelerate edge cases and magnify unintended consequences if
governance expectations are unclear.

Civitas encourages ASTP/ONC to ensure that implementation of the expanded definitions:
• Reinforces expectations for auditability and verifiable access controls;
• Recognizes the role of intermediary networks in embedding governance and consent
controls into exchange workflows;
• Distinguishes between responsible automation that incorporates verification safeguards
and practices that may expose patients or communities to inappropriate access.
• Clarifies whether additional subregulatory guidance will be issued to address automated
and AI-enabled querying at scale.

Interoperability Infrastructure and Federal Policy Alignment
While HTI-5 focuses on specific revisions to the Certification Program and information blocking
regulations, it also reflects an ongoing evolution in federal interoperability policy. Civitas

                                    www.civitasforhealth.org                                        5

encourages continued alignment between modernization efforts and the decentralized but
connected infrastructure that enables exchange across communities.

For nearly two decades, local and regional HIEs have supported multi-directional exchange
across clinical care, public health, behavioral health, rural providers, and social service
organizations. This exchange has been built on neutral governance, standardized participation
agreements, auditability, and community accountability. Millions of transactions move daily
through these networks.

National initiatives expand connectivity and scale, while local infrastructure provides contextual
governance, verification, consent management, and oversight. These roles are complementary.
Proven multi-state models such as the Patient Centered Data Home1 demonstrate how
coordinated exchange can operate across jurisdictions while preserving local governance and
enforceable data use frameworks.

As certification requirements are streamlined and definitions expand to encompass automated
access and use, federal policy should continue to:
• Recognize the operational role of intermediary networks in embedding governance and
consent controls into exchange workflows;
• Preserve stability in foundational exchange standards;
• Provide structured opportunities for HIEs, HDUs, APCDs, and other multistakeholder
health data organizations to inform ongoing interoperability strategy alongside developers
and vendors.

Interoperability depends on both modern standards and durable governance. Aligning federal
policy with established infrastructure models will support modernization while reinforcing trust in
data exchange.

Conclusion
Civitas and our members remain committed to advancing secure, trusted, and equitable data
exchange across the healthcare ecosystem. HTI-5 presents an opportunity not only to refine
regulatory requirements, but to ensure that federal policy strengthens the neutral infrastructure
that makes interoperability possible in practice – pairing modern technical standards with durable
governance, real-world accountability, and trusted exchange.

We appreciate ASTP/ONC’s consideration of our comments and stand ready to collaborate in
advancing a resilient and trustworthy national data ecosystem.

Please do not hesitate to reach out if you have any questions or comments for us.

Sincerely,

1
To learn more about the Patient Centered Data Home initiative and its impact, visit
https://civitasforhealth.org/patient-centered-data-home/

                                        www.civitasforhealth.org                                  6

Jolie Ritzo
CEO, Civitas Networks for Health

                                   www.civitasforhealth.org   7

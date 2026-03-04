# HHS-ONC-2025-0005-0218 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0218/attachment_1.pdf

---

February 27, 2026
Thomas Keane, MD
Assistant Secretary for Technology Policy/National Coordinator for Health Information
Technology (ASTP/ONC)
Department of Health and Human Services
200 Independence Ave, SW
Washington, DC 20201

Re: RIN 0055-AA09; Health Data, Technology, and Interoperability: ASTP/ONC
Deregulatory Actions to Unleash Prosperity (HTI-5)
Submitted electronically to www.regulations.gov

Dear Dr. Keane,

The Sequoia Project is pleased to submit comments to the Assistant Secretary of
Technology Policy/Office of the National Coordinator for Health Information Technology
(ASTP/ONC), on the Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory
Actions to Unleash Prosperity (HTI-5) proposed rule.

The Sequoia Project is a non-profit, 501(c)(3) public-private collaborative dedicated to
advancing nationwide interoperability of electronic health information for the public good.
For more than a decade, we have worked to enable sustainable, scalable health information
exchange by bringing together stakeholders from across healthcare and health IT to identify,
prioritize, and collaboratively address the most pressing challenges to nationwide health
information sharing.

Through our Interoperability Matters initiative, we convene providers, consumers,
caregivers, payers, health IT companies, health information networks, federal agencies, and
other stakeholders to develop practical, consensus-driven solutions that drive meaningful
progress in interoperability. Our Interoperability Matters workgroups provide a forum for
engagement on key topics, including Consumer Engagement, Privacy and Consent, Payer-
to-Payer API Implementation (CMS-0057), Data Usability, Public Health, Pharmacy
Interoperability, and Information Blocking Compliance.
We are also honored to serve as the Recognized Coordinating Entity (RCE) for the Trusted
Exchange Framework and Common Agreement (TEFCA), as designated by ASTP/ONC. Our
decade of experience building public-private collaborations and launching successful,
sustainable nationwide health IT initiatives provides us with a unique and practical
perspective on the proposed rule. TEFCA exchange has reached nearly 500 million health
records exchanged and continues to accelerate, providing a real-world lens on how the

                                                                                          1

industry currently uses document-based exchange, suggesting that it will be important to
affect the smooth adoption of a FHIR-first strategy. We thank ASTP/ONC for the opportunity
to provide feedback.

Health Information Technology Standards, Implementation
Specifications, and Certification Criteria and Certification Programs for
Health Information Technology (Part 170)
The Sequoia Project appreciates ASTP/ONC’s efforts to reduce regulatory burden and
modernize longstanding components of the Health IT Certification Program. We support the
goal of creating a more flexible, innovation-friendly framework and generally support
ASTP/ONC’s proposals to revise and remove the certification criteria, as proposed.
We encourage ASTP/ONC to carefully consider the timing of these changes and, where
appropriate, delay certain removals or revisions until a clearer end state is defined.
Implementing significant changes without a well-articulated path forward could create
uncertainty and disrupt alignment across industry and federal initiatives.
Below, we offer additional comments on specific criteria that intersect with the
interoperability programs and initiatives driven by The Sequoia Project.
Care Coordination Certification Criteria (Sections III.A.2.a-d, III.A.5.a, III.A.7.f)
The Sequoia Project supports the long-term direction toward API-based exchange. C-CDA
document exchange, however, remains foundational at national scale today. For example,
Carequality supports over 1.2 billion clinical documents exchanged each month, and TEFCA
has surpassed 600 million health records exchanged since going live in December 2023.
As ASTP/ONC advances HTI-5, we encourage careful consideration to ensure that high-
value, high-volume workflows remain stable until clear, implementation-ready guidance
and tooling are available to support equivalent FHIR-based document semantics,
validation, and privacy controls.
The Sequoia Project understands ASTP/ONC’s rationale that without federal requirements
to support C-CDA capabilities within EHR products, developers will likely keep the
capabilities within their systems. In practice, capabilities that are not required for
certification and procurement are often deprioritized or subject to increased variability.
Through its Interoperability Matters program, the Sequoia Project’s Data Usability
Workgroup is focused on practical, implementable approaches to improving data quality,
consistency, and safe clinical use across exchange modalities. This work reflects ongoing
industry recognition that, while the ecosystem advances toward FHIR-based exchange,

                                                                                        2

significant volumes of document-based exchange will persist for the foreseeable future and
will require continued attention to quality, validation, and usability.
The Sequoia Project also maintains and supports widely used interoperability testing tools
that help implementers validate transport, security, and data content conformance,
promoting consistent, high-quality exchange across networks. As policy and certification
requirements evolve, these types of community-supported resources can help provide
continuity for implementers and reduce disruption as focus shifts to more API and FHIR-
centric approaches.
Recommendation: If ASTP/ONC finalizes the proposal to sunset the C-CDA-centered
criteria and/or capabilities, we suggest that ASTP/ONC support industry efforts to 1)
define C-CDA and FHIR equivalence expectations for USCDI data, and 2) ensure
continued availability of C-CDA validation capabilities that are currently supported in
ONC SITE test tools to support implementers. Community-supported testing
resources, including those maintained by The Sequoia Project, can help promote
consistent, high quality document exchange, provide continuity for implementers, and
reduce disruption while the ecosystem evolves.
§ 170.315(d) Privacy and Security Criteria (Section III.A.4)
The Sequoia Project appreciates ASTP/ONC’s efforts to modernize the Health IT
Certification Program and reduce burden around privacy and security criteria. We
understand the interest in streamlining requirements and creating space for innovation. A
common baseline of privacy and security tooling is essential to maintaining stakeholder
trust when engaging in the interoperable exchange of health information. As these changes
are considered, careful attention to potential impacts will help ensure continued progress
while minimizing unintended consequences.
• Evolving and Fragmented Security Landscape. States are currently advancing
varying approaches to cybersecurity oversight, while the industry continues to await
revisions to the HIPAA Security Rule, which may present opportunities for stronger
alignment with Certification Program objectives. At the same time, cybersecurity
threats remain persistent across the healthcare ecosystem. Removing certification
criteria in advance of a coordinated national approach to health IT security,
particularly alignment with any HIPAA security rule updates, may inadvertently signal
reduced prioritization of security capabilities within certified health IT.

• Timing and Transitions Considerations. Given the evolving regulatory environment,
we encourage ASTP/ONC to carefully consider the timing of the proposed removals.
Eliminating privacy and security certification criteria prematurely could increase
3
 regulatory fragmentation and uncertainty. While we recognize the rule’s broader
deregulatory goals and ASTP/ONC’s stated intent to address privacy and security in
future updates, a phased or delayed approach may better support thoughtful
alignment with forthcoming federal requirements. Maintaining an optional pathway
could help reduce burden while preserving transparency and market flexibility.

• Importance of Maintaining Multi-Factor Authentication. The Sequoia Project
wishes to highlight the value of § 170.315(d)(13): Multi-factor authentication (MFA).
MFA is already required across multiple federal and industry security requirements
(e.g., DEA EPCS, IRS Pub 1075 for FTI, NIST 800-171 for covered contractors, PCI DSS
for cardholder environments). By contrast, HIPAA does not explicitly require MFA,
making Health IT certification one of the only consistent levers promoting MFA in
healthcare.
As an alternative to removing these criteria, ASTP/ONC could consider removing the
required dependencies that are currently outlined in the privacy and security framework,
making the certification to such privacy and security criteria purely at a developer’s
discretion. This would eliminate the burden on those that do not wish to certify to or maintain
certification to the privacy and security criteria but allow others to demonstrate their
capabilities for their product offerings. An optional pathway can also preserve transparency
and support market differentiation for developers that choose to invest in advanced security
capabilities. Maintaining voluntary criteria would also preserve a consistent reference point
that states and other regulatory programs can leverage when establishing or aligning their
own requirements for regulated entities.
Removing certification-driven security capabilities shifts the burden (and liability) to
providers and networks who may reasonably assume certified products include baseline
controls, thus creating a mismatch between perceived and actual security posture.
Recommendation: The Sequoia Project recommends that ASTP/ONC carefully
evaluate the timing of any removal of privacy and security certification criteria, and
consider a phased transition aligned with any forthcoming federal security
requirements. To reduce burden while preserving transparency and market flexibility,
ASTP/ONC could maintain these capabilities as voluntary certification criteria and
remove associated required dependencies in the Privacy and Security Framework.
Security Tags Criteria (§ 170.315(b)(7) and (b)(8))
In addition to our comments regarding the general privacy and security criteria, The Sequoia
Project also recommends ASTP/ONC retain the voluntary criteria at 170.315(b)(7) “Security
tags – summary of care – send” and 170.315(b)(8) “Security tags - summary of care –

                                                                                             4

receive.” Maintaining these voluntary criteria would not add burden but continue to signal
the importance of a standards-based approach to computable consent.
As discussed in The Sequoia Project’s Interoperability Matters Privacy and Consent
workgroup white paper, “Guidance to States: Legislating Technical Standard Definitions for
Existing State Sensitive Health Data Laws” we believe that the national use of technical
standards around data segmentation for privacy (DS4P) is a critical step to creating a unified
approach “for understanding how to identify information that falls under each sensitive
category, and how to record and communicate this identification in the form of security
labels in different data structures and protocols.” The Sequoia Project is also working on
guidance to health care organizations on how to adopt computable consent to allow for
greater ability to both share data and protect sensitive information. Furthermore, removing
these criteria could result in impeding the ability to test conformance to these standards.
Rather than fully removing these criteria, we encourage ASTP/ONC to establish a clear
timeline to adopt widespread use of FHIR-based functionality for DS4P.
Patients with sensitive conditions will disengage from exchange, or be harmed, if
computable privacy controls are unavailable. Maintaining DS4P signals commitment to
trust and equitable participation. It will also support additional efforts to support health
information exchange in the context of behavioral health.

Recommendation: The Sequoia Project recommends that ASTP/ONC retain the
security tag-related criteria until an approach for FHIR-based functionality is provided
as an option within the Certification Program.

Information Blocking (Part 171)
The Sequoia Project supports ASTP/ONC’s efforts to strengthen the Information Blocking
rule and ensure it keeps pace with evolving exchange practices. We appreciate the agency’s
focus on reducing unnecessary burden and addressing potential misuse of existing
exceptions through our Interoperability Matters program, The Sequoia Project convenes an
Information Sharing Workgroup (formerly the Information Blocking Workgroup) focused on
the practical implications of implementing the Information Blocking rules, as well as on the
ground approaches to facilitate information sharing. Established in 2019, this group
includes participants from across the health IT ecosystem and continues to provide diverse,
cross-sector input on emerging policy and operational considerations. Our comments are
informed, in part, by input from this workgroup but should not be attributed to any individual
workgroup members.
We understand ASTP/ONC’s objectives in proposing these revisions and appreciate the
intent to promote clarity and appropriate use of the exceptions. Across these proposals, we

                                                                                            5

encourage ASTP/ONC to prioritize clear, workable standards, provide greater transparency
and implementation guidance, and avoid unintended operational burden or compliance
uncertainty for actors working in good faith to comply with the Information Blocking
requirements. We further recommend increased transparency regarding enforcement
expectations and continued coordination with the Office of the Inspector General (OIG) to
promote consistent and predictable application of the Information Blocking regulations.

Infeasibility Exception Revisions (45 CFR 171.204).
Third Party Seeking Modification Use Condition (§ 171.204(a)(3))
The Sequoia Project appreciates ASTP/ONC’s continued efforts to refine the Information
Blocking rules and to reduce opportunities for misuse of exceptions in ways that
unnecessarily inhibit access, exchange, or use of EHI. We understand and generally support
the agency’s rationale for proposing to remove the Third Party Seeking Modification Use
Condition from the Infeasibility Exception, particularly given concerns that this provision
may be invoked inappropriately to withhold EHI from third parties that patients and health
care providers wish to engage.
As ASTP/ONC finalizes this proposal, we recommend accompanying it with an FAQ
describing how actors should address legitimate concerns related to confidentiality,
integrity, or availability of the EHI through other existing exceptions, including by engaging in
information gathering and analysis to work through the available alternative exceptions.
Given the frequency of recent Information Blocking policy changes and limited transparency
into enforcement expectations, additional clarity will be important to support consistent
implementation, compliance investment, and long-term program stability.
Recommendation: The Sequoia Project supports finalizing the removal of the Third
Party Seeking Modification Use Condition, provided that ASTP/ONC issue
accompanying FAQs describing how actors should address legitimate concerns
related to confidentiality, integrity, or availability of the EHI through other existing
exceptions, including by engaging in information gathering and analysis to work
through the available alternatives.

                                                                                               6

Manner Exception Exhausted Condition (§ 171.204(a)(4))
The Sequoia Project appreciates ASTP/ONC’s continued focus on ensuring that the
Infeasibility Exception is not used inappropriately to limit access, exchange, or use of EHI.
We understand the concern that the Manner Exception Exhausted Condition (Exhausted
Condition) may be susceptible to misuse in certain circumstances. We encourage careful
consideration, however, of whether the proposed revisions, or the alternative proposal to
remove § 171.204(a)(4) entirely, could introduce additional uncertainty or operational
complexity without fully resolving the underlying concerns identified.
• Potential Impact of Proposed Terminology Changes. Several of the proposed
changes may warrant careful consideration to ensure they enhance clarity rather
than reduce it. Replacing “same” with “analogous” may introduce subjectivity and
raise questions about how actors and requestors will determine what qualifies as
sufficiently comparable access in practice. Similarly, revising the “substantial
number” element to “any” individual or entity may allow isolated or edge-case
situations to drive broader compliance obligations in ways that may not reflect
typical operational realities.
• Operational Implications of Exhaustion Requirements and Timing. We also
encourage consideration of the operational implications of requiring actors to offer
“all” alternative manners within the existing 10-business-day timeframe. In practice,
organizations often present multiple options at once and work collaboratively with
requestors, particularly those with less technical sophistication to identify a
workable path forward. A more rigid exhaustion process could increase
documentation burden and potentially slow negotiations without materially
improving access outcomes. As noted in our HTI-2 comment letter, we continue to
ask for clarification of the 10-business day timeframe and suggest specifying that the
time-period begins on the business day in which the actor has determined that the
request is infeasible. This will provide stronger assurance that an actor is acting upon
their determination as soon as it is made.

• Value of a Clear Compliance Endpoint. More broadly, the current Exhausted
Condition provides organizations with a clear way to demonstrate good-faith efforts
to meet a request under the Manner Exception. Revising or removing this endpoint
could make it less clear when an actor has satisfied its obligations, particularly where
requestors are not required to respond within the same timeframe. Additional clarity
regarding the specific misuse ASTP/ONC is seeking to address would help ensure
that any revisions do not inadvertently burden actors making good-faith compliance
efforts.

                                                                                             7

Recommendation: The Sequoia Project recommends that ASTP/ONC further clarify the
specific misuse motivating these revisions and ensure that any modifications remain
practical and workable to implement. We also encourage consideration for retaining
the current Exception Exhausted condition so that actors have a clear and consistent
endpoint for demonstrating compliance.

Manner Exception Revisions (§ 171.301)
The Sequoia Project supports ASTP/ONC’s goal of ensuring that agreements reached under
the Manner Exception are fair and do not impose coercive or abusive terms on requestors.
We agree that this exception should not be used to pressure requesters into accepting
unreasonable conditions. Standardized agreements can be important tools for enabling
exchange at scale, particularly when they are supported by transparent governance and
meaningful opportunities for stakeholder input. Any additional policy to promote fair
contracting needs to balance operational realities. For example, there are important
questions about how the definitions of “market rate”, “contracts of adhesion”, and
“unconscionable terms” would be defined and applied across organizations with very
different sizes, cost structures, and business models.
We encourage ASTP/ONC to clarify how the concept of a “contract of adhesion” applies in
participatory governance and change management structures by distinguishing
unreasonably coercive contracting practices from trust agreements that support broad
participation.
Recommendation: We encourage ASTP/ONC to carefully weigh operational realities as
it seeks to ensure fair terms. In addition, we ask ASTP/ONC to clarify how the concept
of a “contract of adhesion” applies in participatory governance and change
management structures by distinguishing unreasonably coercive contracting practices
from trust agreements that support broad participation.
TEFCA Manner Exception (§171.403)
The Sequoia Project does not object to ASTP/ONC’s proposal to remove subpart D of 45 CFR
part 171, including the TEFCA Manner Exception and associated definitions. Removing the
TEFCA-specific exception does not diminish the importance of clear, consistent treatment
of standardized agreements under the broader Manner Exception framework. TEFCA
participation remains voluntary, and its value derives from operational efficiency and
trusted exchange.
Recommendation: The Sequoia Project does not object to the removal of the TEFCA
Manner Exception and recommends that ASTP/ONC provide clear communication to
ensure stakeholders understand that TEFCA remains a viable path for meeting
information sharing obligations.

                                                                                      8

Conclusion
The Sequoia Project appreciates ASTP/ONC’s leadership in advancing interoperability and
modernizing both the Health IT Certification Program and Information Blocking framework.
We support ASTP/ONC’s goals of reducing unnecessary burden and strengthening
exchange, while encouraging careful calibration of proposed changes to avoid unintended
ambiguity, disruption of widely relied-upon capabilities, or operational and security risks.
We respectfully urge ASTP/ONC to prioritize clear pathways, practical implementation
guidance, and alignment with broader federal and industry efforts. Thoughtful pacing and
targeted refinements will help sustain stakeholder confidence, support consistent
compliance, and continue progress toward a trusted and scalable nationwide health
information exchange ecosystem.

Most respectfully,

Mariann Yeager
CEO, The Sequoia Project

                                                                                          9

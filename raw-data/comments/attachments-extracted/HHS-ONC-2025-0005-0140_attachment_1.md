# HHS-ONC-2025-0005-0140 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0140/attachment_1.pdf

---

February 27, 2026

Thomas Keane, MD, MBA
Assistant Secretary for Technology Policy
National Coordinator for Health Information Technology
U.S. Department of Health and Human Services
330 C Street, SW, 7th Floor
Washington, DC 20024

Re: RIN 0955-AA09 – HTI-5 Proposed Rule
Submitted electronically via Regulations.gov

Dear Assistant Secretary Keane:

The Cooperative Exchange (CE), the National Clearinghouse Association, composed of
23 member organizations 1, representing over 90% of the clearinghouse industry that
supports over 1 million provider organizations, through more than 7,000 payer
connections and 1,000 Health Information Technology (HIT) Vendors, and processing
over 6 billion transactions annually, respectfully submits comments on the “Health Data,
Technology, and Interoperability: ASTP/ONC Deregulatory Actions to Unleash
Prosperity” (HTI-5) proposed rule.

Clearinghouses operate the HIPAA administrative electronic data exchange
infrastructure and serve as neutral intermediaries connecting providers, payers, and health
IT developers at national scale. Given that we sit at the center of data exchange, changes
to certification (45 C.F.R. Part 170) and information blocking policy (45 C.F.R. Part 171)
have immediate downstream operational and cybersecurity impacts.

1 The views expressed herein are a compilation of the views gathered from our member constituents and reflect the

directional feedback of the majority of its collective members. CE has synthesized member feedback and the views,
opinions, and positions should not be attributed to any single member and an individual member could disagree with all
or certain views, opinions, and positions expressed by CE.

                                                                                                                    1

CE supports modernization and appropriate burden reduction. However, deregulation
should not unintentionally:
(1) fragment baseline interoperability expectations,
(2) reallocate risk to intermediaries and providers without clear accountability, or
(3) weaken cybersecurity and trust in national infrastructure—especially as AI-
enabled automation expands.

The following are CE’s comments and recommendations for ONC consideration.

I. Certification Deregulation (45 C.F.R. Part 170): Risk Reallocation and
Fragmentation
HTI-5 proposes eliminating 34 certification criteria and revising 7 others within the ONC
Health IT Certification Program. Certification criteria historically served as minimum
baselines for consistent interoperability and certain security/operational capabilities.
Removing large portions of the baseline does not remove operational necessity; instead, it
may shift burden to providers and intermediaries through contracting, integration, and
remediation work.

Clearinghouses already normalize variability across payer/provider/vendor
implementations. Reduced certification baselines can increase inconsistency, driving
additional translation, validation, exception handling, and support costs at the provider
and intermediary layer.

CE Recommends:
• Retain or clearly articulate minimum baseline expectations for interoperability and
security, even where formal certification criteria are removed, to reduce ecosystem
fragmentation.
• Publish an impact analysis identifying which removed criteria are most relied upon
operationally by providers, payers, and intermediaries, and how ONC will mitigate
downstream burden shifts.

                                                                                            2

• Establish a post-final monitoring process to evaluate unintended consequences
(e.g., increased variability, reduced auditability, increased integration burden) and
enable course correction if fragmentation emerges.
• Coordinate deregulatory changes with other federal and state regulatory
frameworks, including CMS program requirements, HIPAA Security and Privacy
Rule obligations, NIST-aligned cybersecurity expectations, and applicable state
privacy and security laws — to avoid conflicting compliance signals, redundancy,
or regulatory gaps across the healthcare ecosystem.

II. AI-Enabled Access, Exchange, and Use of EHI (45 C.F.R. Part 171):
Accountability and Traceability
HTI-5 updates the interpretation of “access,” “exchange,” and “use” of electronic health
information (EHI) to include automated and AI-driven processes. CE supports enabling
innovation; however, expanded automation increases the need for clear governance—
particularly attribution of responsibility when AI agents initiate access, exceed scope, or
create downstream compliance impacts.

Clearinghouses facilitate secure routing and exchange but do not design, train, or govern
AI decision logic. Absent clarity, intermediaries may face disproportionate exposure for
AI-enabled behaviors outside their operational control.

CE Recommends:
• Explicitly assign responsibility for AI-initiated access and exchange to the entity
deploying, governing, and authorizing the AI system (not neutral intermediaries
providing transport).
• Clarify expectations for auditability and traceability of automated access (e.g.,
provenance, logging, authentication/authorization signals) so automated access can
be investigated and governed.
• Align information blocking interpretation with operational control: intermediaries
that provide neutral transport should not be treated as the decision-maker for AI-
enabled access decisions.

                                                                                              3

• Provide implementation guidance on how automated processes should demonstrate
authorized scope and appropriate access controls.

III. Information Blocking Revisions: Distinguishing Facilitation from Control (45
C.F.R. Part 171)
HTI-5 proposes narrowing or removing certain information blocking exceptions under 45
C.F.R. Part 171. Clearinghouses retain transaction data, including treatment and payment
information, consistent with HIPAA record retention requirements (e.g., 45 C.F.R.
§164.316(b)(2)) and operates as neutral intermediaries.

Clearinghouses execute routing, translation, validation, and connectivity functions based
on client direction, trading partner agreements, and established exchange protocols. We
do not independently determine whether a requester is entitled to access data; that
authority resides with the data holder (e.g., payer, provider, or certified health IT
developer).

As information blocking exceptions narrow, intermediaries that hold and transmit data—
but lack discretionary control over release decisions—may be placed in a structurally
conflicted position between requesters and authoritative data sources.

CE Recommends:
• Explicitly distinguish in regulatory text or sub-regulatory guidance between
entities that possess discretionary authority over release decisions and
intermediaries that maintain and transmit data under client direction.
• Clarify that retention of transaction data for operational and regulatory purposes
does not equate to decision-making authority under the Information Blocking
framework.
• Confirm that neutral transport, routing, translation, validation, and connectivity
services—when performed without independent discretion over release—do not
constitute information blocking.

                                                                                            4

• Align enforcement expectations with operational control and decision authority to
prevent misallocation of liability to infrastructure intermediaries.
• Provide illustrative examples involving clearinghouses and other intermediaries to
ensure consistent interpretation across the national data exchange ecosystem.

IV. FHIR-First Reset and Hybrid Interoperability Reality
CE supports a modern, API-oriented interoperability future, including FHIR-based
exchange. However, the healthcare ecosystem remains hybrid: FHIR APIs, HIPAA X12
administrative transactions, C-CDA, and state and payer specific workflows operate in
parallel. Clearinghouses function as translation layers enabling scalable interoperability
across these modalities.

CE Recommends:
• Recognize hybrid exchange as an operational reality during transition periods and
avoid assumptions that ‘FHIR-only’ exchange is sufficient for national-scale
workflows.
• Adopt phased transition expectations with measurable readiness benchmarks to
prevent disruption of mature, high-volume administrative exchange.
• Engage clearinghouses as infrastructure partners in implementation planning to
ensure real-world scalability, testing, and migration support.
• Encourage alignment between FHIR API expectations and existing administrative
transaction ecosystems to reduce duplicative integration burden.

V. Cybersecurity Baselines and Trust in a Deregulatory Environment
HTI-5 reduces or removes several certification-related requirements that have supported
baseline expectations. In a high-threat environment, trust and security cannot be assumed.
Clearinghouses process billions of transactions annually and operate under robust
security programs, but uneven maturity across ecosystem actors can create systemic risk
that concentrates in shared infrastructure.

                                                                                             5

CE Recommends:
• Maintain clear baseline cybersecurity expectations for health IT supporting
interoperability, even if ONC shifts away from prescriptive certification—e.g.,
referencing recognized frameworks (NIST CSF) and core safeguards (MFA,
logging, encryption).
• Coordinate across ASTP/ONC, CMS, and OCR to avoid fragmented or
conflicting cybersecurity requirements that increase compliance burden and
weaken interoperability.
• Acknowledge the national-infrastructure role of intermediaries and encourage
consistent trust signals across participants to support secure exchange at scale.
• Consider transitional guidance to ensure removal of certification criteria does not
create gaps in auditability, incident response, or identity/access practices.

Conclusion
CE supports modernization, interoperability, and responsible burden reduction. We urge
ASTP/ONC to ensure HTI-5 strengthens—rather than destabilizes—the national
exchange infrastructure by clarifying accountability for AI-enabled access, aligning
information blocking expectations with operational control, preserving security and trust
baselines, and avoiding fragmentation from large-scale certification removals.

The Cooperative Exchange stands ready to collaborate with ASTP/ONC, CMS, OCR,
and other stakeholders to support thoughtful implementation and to provide intermediary
and infrastructure-level expertise as these reforms advance.

                                                                                            6

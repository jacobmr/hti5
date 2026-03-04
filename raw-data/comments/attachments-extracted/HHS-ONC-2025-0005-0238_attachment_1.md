# HHS-ONC-2025-0005-0238 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0238/attachment_1.pdf

---

February 27, 2026

The Honorable Thomas Keane, MD, MBA
National Coordinator for Health Information Technology
Assistant Secretary of for Technology Policy
330 C St SW, Floor 7
Washington, DC 20201

RE: Health Data, Technology, and Interoperability: Certification Program
Updates, Algorithm Transparency, and Information Sharing (HTI-5)

Dear Assistant Secretary Keane,

Ann & Robert H. Lurie Children’s Hospital of Chicago appreciates the
opportunity to comment on the HTI-5 proposed rule. Lurie Children’s is a free-
standing pediatric academic medical center that serves children and families
across Illinois and beyond. Our mission is to build healthier futures for children,
and we view safe, secure, and accessible health information exchange as
foundational to that mission.

As a regional specialty hospital, Lurie Children’s has the privilege of caring for
critically ill and injured children who come to us from every corner of Illinois, 44
other states and 47 countries. Over 50 percent of our patients are insured by
Medicaid and the Children’s Health Insurance Program (CHIP), and over 60
percent of our beds are licensed as critical care.

We commend ASTP/ONC for the positive direction of HTI-5, particularly its
continued emphasis on standards-based interoperability, a stronger FHIR-first,
API-enabled foundation for access and exchange, and clarifications that
recognize how modern health information is increasingly accessed and used
through automated means, including analytics and AI-enabled tools. We also
appreciate ONC’s continued efforts to strengthen information blocking policy by
narrowing ambiguity that can be used to delay or restrict appropriate access to
electronic health information (EHI), including clarifying that “access” and “use”
include automated technologies. We share ONC’s goals of
enabling timely access to EHI, reducing unnecessary administrative friction, and
supporting responsible innovation.

At the same time, we urge ONC to ensure that progress does not come at
the expense of security, privacy, accessibility, and trust. Several elements
of HTI-5 would narrow the scope of certification requirements, particularly those

225 East Chicago Avenue, Chicago, Illinois 60611 | 312.227.4000 | luriechildrens.org
Ann & Robert H. Lurie Children’s Hospital of Chicago Foundation | Stanley Manne Children’s Research Institute
that have historically provided a practical assurance layer for healthcare
organizations and patients. If certification requirements are reduced without a
workable replacement, the burden of assurance will shift downstream to
hospitals, clinicians, and families through procurement, implementation, and
local governance. This shift may create variability, increase risk, and deepen
inequities, especially for pediatric populations and for adolescents seeking
confidential care.

I. Support for Interoperability and Patient Access

Lurie Children’s supports ONC’s continued prioritization of interoperable access
to EHI, including an API-first foundation that can scale across care settings and
enable patient and caregiver access, care coordination, research, and public
health reporting. We also support ONC’s focus on reducing barriers
to appropriate exchange and clarifying how information blocking policy applies
to real-world access and use of EHI, including automated access and use. At
the same time, we encourage ONC to provide practical safeguards so hospitals
are not inadvertently penalized when legacy systems lack the technical capacity
to support certain automated or AI-enabled requests, particularly during
transition periods. Clear expectations around technical feasibility, reasonable
implementation timelines, and good-faith efforts to comply will help accelerate
interoperability without creating unintended liability for provider organizations.

Recommendation 1: Finalize interoperability improvements that promote
reliable, standards-based exchange, with clear implementation expectations that
are feasible for provider organizations and safe for patients, including practical
safeguards so hospitals are not penalized when legacy systems cannot
reasonably support certain automated or AI-enabled requests.

II. Preserve a Minimum Assurance Layer for Security, Auditability, and
Safe Operations

Lurie Children’s is deeply committed to protecting patient privacy and
strengthening cybersecurity. As ONC advances interoperability and expands
digital access through standardized connections and third-party applications,
baseline security and auditability capabilities become more critical, not less. We
are concerned that narrowing certification requirements in privacy/security-
related domains could reduce uniformity across vendor products and shift risk to
hospitals. Hospitals will remain accountable for safeguarding EHI under HIPAA
and other applicable laws regardless of certification scope; however, removing a
federal test harness for core security capabilities increases variability,

225 East Chicago Avenue, Chicago, Illinois 60611 | 312.227.4000 | luriechildrens.org
Ann & Robert H. Lurie Children’s Hospital of Chicago Foundation | Stanley Manne Children’s Research Institute
procurement burden, and the likelihood that critical controls are treated as
optional “add-ons.” Where HTI-5 proposes removing certification criteria that
are also referenced (directly or indirectly) by CMS provider program
expectations or other federal operational mandates, ONC should consider
phasing the change or delaying the effective date until requirements are
harmonized. Hospitals should not be placed in the middle of conflicting federal
expectations.

Recommendation 2: Maintain (or replace) a minimum, practical assurance
baseline for certified health IT that supports secure and auditable
interoperability, including at least:

                  •   Strong authentication and authorization capabilities appropriate
                  to clinical and patient access contexts
                  • Audit logging that supports accountability across third-party
                  application workflows
                  • Safeguards that support confidentiality and integrity across
                  modern exchange pathways
                  • Support for multi-factor authentication where applicable

Recommendation 3: If ONC proceeds with removing specific security criteria
from certification, ONC should require a standardized, comparable vendor
“assurance disclosure” that clearly states which baseline safeguards are
supported (and which are not). A simple, consistent disclosure would reduce
one-off contracting friction and enable responsible purchasing decisions across
the market.

III. Pediatric Privacy, Adolescent Confidentiality, and Proxy Access
Require Explicit Attention in Information Blocking Policy

Information blocking policy has unique nuances in pediatrics. Children and
adolescents often have different legal rights and confidentiality protections
depending on age, care context, and state law. Caregivers may have proxy
access that is clinically appropriate in many situations, but not all. The correct
and lawful sharing of information may vary across:

                  •  Adolescent confidentiality rights and sensitive services
                  •  Caregiver proxy access, guardianship status, and family dynamics
                  •  State-by-state variation and evolving legal requirements
                  •  Safety considerations, including risk of harm from inappropriate
                  disclosure

225 East Chicago Avenue, Chicago, Illinois 60611 | 312.227.4000 | luriechildrens.org
Ann & Robert H. Lurie Children’s Hospital of Chicago Foundation | Stanley Manne Children’s Research Institute
In this context, “access” must be implemented with care. Lurie Children’s
supports strong patient access and appropriate caregiver engagement, but
pediatric privacy protections must remain compatible with compliance
expectations. Hospitals should not be placed in a position where lawful, privacy-
protective configurations are misconstrued as “blocking.”

For example, Under Illinois law, an adolescent can consent to certain
confidential services. In practice, that can create a segmentation challenge in
the EHR. An adolescent may receive a medication related to a confidential visit
that should not be disclosed through parent proxy access, even though the
parent appropriately retains proxy access to most other medications and results.
Without reliable, workflow-ready segmentation and proxy controls, hospitals face
a false choice between risking inappropriate disclosure and restricting broader
access in order to remain compliant.

Recommendation 4: In the final rule and associated guidance, ONC should
explicitly recognize pediatric consent and confidentiality realities
and provide practical examples illustrating how information blocking exceptions
apply for minors, adolescent confidentiality, and proxy access across varied
state contexts.
Recommendation 5: ONC should ensure enforcement and compliance
frameworks clearly distinguish between (a) privacy-protective controls that
reflect law and clinical safety, and (b) practices that inappropriately restrict
access for reasons unrelated to privacy, safety, or feasibility.

IV. Prevent “Access” From Becoming a Toll Booth for Patients and
Providers

HTI-5 appropriately clarifies that “access” and “use” of EHI include automated
means, reflecting how modern care delivery increasingly depends on services
that retrieve, transform, and deliver information on behalf of clinicians, patients,
and caregivers (including AI-enabled workflows). As these workflows become
mainstream, hospitals and patients should not face new friction simply because
a task is performed automatically rather than through a manual, user-interface-
based process. If access is conditioned on additional licensing, fees, or bespoke
contracting, the result can be delayed patient access, inconsistent availability
across organizations, and higher operational burden without a corresponding
safety benefit.

Recommendation 6: ONC should reinforce that reasonable access to EHI
should not be artificially restricted or monetized based solely on whether access
is automated, and should provide guidance to distinguish legitimate safety and

225 East Chicago Avenue, Chicago, Illinois 60611 | 312.227.4000 | luriechildrens.org
Ann & Robert H. Lurie Children’s Hospital of Chicago Foundation | Stanley Manne Children’s Research Institute
security controls from avoidable commercial or administrative barriers. We
encourage ONC to provide concrete examples of when limiting or conditioning
automated access (e.g., robotic process automation (RPA) or AI-enabled tools)
is permitted due to documented security, privacy, or performance risk, and to
acknowledge that reasonable cybersecurity controls (such as identity proofing
and risk-based authentication) can be consistent with information blocking
compliance

V. Data Segmentation and Sensitive Data Handling Should Not Be
Weakened in Practice

For pediatric providers, segmentation and sensitive data handling are essential
to protecting adolescent confidentiality and maintaining trust. If certification
requirements related to segmentation are reduced, vendors may deprioritize
capabilities that children’s hospitals rely on to share information safely and
lawfully. As interoperability expands and data flows become more automated,
gaps in segmentation can limit pediatric participation and slow adoption of the
very exchange models the rule aims to accelerate.

Recommendation 7: Preserve a workable expectation that certified health IT
supports practical approaches to sensitive data handling, including proxy-aware
access patterns. If specific segmentation criteria are removed, ONC
should require transparent disclosure of segmentation limitations so provider
organizations can implement appropriate safeguards.

VI. Keep Accessibility Expectations Clear and Measurable for Families

Children’s hospitals serve families with diverse language needs, varied health
literacy, disabilities, and different levels of digital access. Patient and caregiver
portals and applications are not optional conveniences; they are core pathways
to care navigation, care planning, test results, and communication. Ambiguous
accessibility expectations risk widening health gaps.

Recommendation 8: Ensure patient-facing access requirements remain clear
and measurable. If ONC removes specific standard references, ONC should
implement an alternative mechanism (such as a clear accessibility conformance
statement requirement) that preserves accountability and transparency.

VII. Responsible AI and Decision Support: Preserve Practical
Transparency and Safety Expectations

225 East Chicago Avenue, Chicago, Illinois 60611 | 312.227.4000 | luriechildrens.org
Ann & Robert H. Lurie Children’s Hospital of Chicago Foundation | Stanley Manne Children’s Research Institute
Lurie Children’s supports innovation, including responsible use of AI-enabled
tools that improve care quality and operational effectiveness. However, pediatric
care introduces unique challenges for predictive tools: smaller sample sizes,
developmental variability, and different risk tolerances. Pediatric populations are
frequently underrepresented in model development datasets, making clear
disclosure of intended populations and validation cohorts essential to prevent
inappropriate extrapolation from adult-focused tools. Hospitals need consistent
documentation to evaluate appropriateness, limitations, and safety, especially
where pediatric validation data may be limited. We are concerned that removing
or narrowing transparency artifacts could unintentionally reduce the consistency
of information hospitals receive when evaluating predictive tools integrated into
certified workflows. Without consistent transparency about data sources and
development or validation cohorts, hospitals will necessarily assume more
clinical and legal risk, which will slow adoption of embedded AI and predictive
decision support.

Recommendation 9: ONC should reconsider fully removing predictive DSI
transparency and risk-management elements; if ONC proceeds, we encourage
(and, where feasible, standardize) a minimum “AI documentation packet”
expectation for predictive tools used within certified health IT contexts,
addressing:

            •     Intended use and intended population(s), including pediatric
                  applicability where relevant
            •     Data sources and development or validation cohorts, including known
                  representativeness limitations for pediatric populations
            •     Known limitations and appropriate use constraints
            •     Model update/change control and versioning transparency
            •     Monitoring and escalation pathways for performance or safety
                  concerns

This approach can support responsible adoption without unnecessarily
constraining innovation.

VIII. Public Health Reporting: Preserve Standards and Reduce One-Off
Burden (IIS, eCR, AUR, Cancer Registries)

As a pediatric academic medical center, Lurie Children’s strongly supports
standards-based, automated public health reporting. This includes immunization
reporting (IIS), electronic case reporting (eCR), antimicrobial use and resistance
(AUR) reporting, and cancer registry reporting. These capabilities reduce

225 East Chicago Avenue, Chicago, Illinois 60611 | 312.227.4000 | luriechildrens.org
Ann & Robert H. Lurie Children’s Hospital of Chicago Foundation | Stanley Manne Children’s Research Institute
manual burden, improve consistency, and strengthen community health. We are
concerned that “functional-only” approaches or reduced measurement can lead
to uneven implementations, increased variability, and greater provider burden.
This could force hospitals into one-off integrations and contract-by-contract
negotiations to meet public health obligations.

Recommendation 10: Maintain clear, standards-based expectations for public
health reporting capabilities and avoid approaches that undermine consistency
across implementations. Where certification requirements are reduced, ONC
should preserve transparency and accountability mechanisms that prevent
these functions from becoming optional vendor add-ons and prevent shifting
disproportionate burden onto provider organizations.

IX. “Measurable Interoperability”: Retain a Minimum Set of National
Performance Measures That Show What Works in Practice
Lurie Children’s supports the goal of reducing unnecessary burden in the
certification program. At the same time, as ONC streamlines certification
requirements, the health system will benefit from retaining a minimal set of
performance measures that demonstrate whether interoperability is working
in real-world settings. These measures should focus on high-impact exchange
pathways and operational reliability, with emphasis on transparency and
comparability across vendors.

Recommendation 11: Preserve (or replace) a minimal, meaningful set of
monitoring/measurement expectations that allow providers, patients, and
policymakers to assess real-world interoperability performance. This
is particularly important for pathways that are critical to patient access and
public health reporting.

X. TEFCA and Exchange Pathways: Clarify Expectations for Timely
Access
HTI-5 proposes removing the TEFCA “Manner Exception” and related TEFCA-
specific provisions. Lurie Children’s supports policies that prevent any single
exchange framework from being used to delay or narrow otherwise appropriate
access to EHI. We encourage ONC to provide clear, practical guidance on what
constitutes a timely and reasonable approach to access when multiple
exchange pathways are available, particularly in complex environments such as
pediatrics.

Recommendation 12: Provide practical guidance that supports timely access
and reduces ambiguity about when an organization may rely on specific
exchange pathways as a justification for delaying or narrowing access.

225 East Chicago Avenue, Chicago, Illinois 60611 | 312.227.4000 | luriechildrens.org
Ann & Robert H. Lurie Children’s Hospital of Chicago Foundation | Stanley Manne Children’s Research Institute
Conclusion
Lurie Children’s strongly supports ONC’s direction toward more interoperable,
standards-based access to EHI and clarity in information blocking policy that
reflects modern digital health realities, including automated access and use. We
respectfully urge ONC to ensure that modernization does not erode baseline
assurances that protect children and families, maintain trust, and support safe
operations. This is particularly relevant in pediatric environments where privacy
and confidentiality requirements are complex and vary by state.

If HTI-5 is finalized with reduced certification requirements, hospitals should not
be expected to “absorb” the resulting assurance gap through ad hoc contracting
and local workarounds. To avoid fragmentation and increased risk, ONC should
preserve a minimum assurance layer (or require standardized disclosures),
strengthen guidance that supports pediatric privacy and proxy access realities,
and maintain clear standards-based expectations for public health reporting.
These steps will help ensure that interoperability accelerates in a way that is
reliable, equitable, and worthy of the trust that children and families place in the
healthcare system.

We would welcome the opportunity to engage further with ONC to provide
pediatric-specific implementation perspectives, including examples of proxy
access workflows, adolescent confidentiality configurations, and practical
safeguards that support both access and privacy.
Thank you for your leadership and for considering these comments.

Gratefully,

Juan Carlos Espinoza Salomon, MD Susan Goodson
Chief Research Informatics Officer Chief Digital Information Officer

225 East Chicago Avenue, Chicago, Illinois 60611 | 312.227.4000 | luriechildrens.org
Ann & Robert H. Lurie Children’s Hospital of Chicago Foundation | Stanley Manne Children’s Research Institute

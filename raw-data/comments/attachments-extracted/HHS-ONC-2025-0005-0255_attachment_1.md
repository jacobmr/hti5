# HHS-ONC-2025-0005-0255 - attachment text

1

MedInformatix, Inc.
5777 W Century Blvd #1700
Los Angeles, CA 90045
Date: February 27, 2026

To:
Assistant Secretary for Technology Policy (ASTP)
Office of the National Coordinator for Health Information Technology (ONC)
U.S. Department of Health and Human Services
Re: Comments on Health Data, Technology, and Interoperability: Deregulatory Actions to Unleash Prosperity
(HTI-5)
RIN: 0955-AA09
Docket ID: HHS-ONC-2025-0005

I. Introduction
MedInformatix, Inc. appreciates the opportunity to comment on the proposed HTI5 rule. As a longstanding EHR
developer serving ambulatory and specialty medical practices across the United States, we strongly support ONC’s
focus on modernizing, simplifying, and rightsizing the Health IT Certification Program. We welcome the
deregulatory direction of HTI5 and believe it represents an important course correction toward market driven
innovation. We believe the proposed changes will ultimately benefit both providers and patients by enabling
developers to redirect resources toward safer, more usable, and more innovative clinical capabilities.

II. General Support for Deregulation and Burden Reduction
MedInformatix strongly supports ASTP/ONC’s proposal to remove 34 outdated or duplicative certification criteria.
These legacy requirements—particularly those related to family health history, redundant audit reports, and
functionality rarely used in modern API driven environments—have become “checkbox” compliance items that do
not meaningfully advance interoperability.
Over recent certification cycles, a substantial portion of development hours have gone toward maintenance rather
than advancement, reinforcing the value of removal.
Impact on Innovation:
We estimate that the removal of these criteria will allow us to reallocate a significant portion of our R&D resources
away from maintaining obsolete standards and toward innovation, including AI enabled clinical workflows, real-
time practice analytics, and next generation patient engagement technologies.
We commend ONC for recognizing the need to modernize the program and reduce unnecessary regulatory friction
that diverts development time from functionality that providers and patients value.

2

III. AI & Decision Support Interventions (DSI)
Given rapid AI evolution, fixed regulatory artifacts often lag behind capabilities, whereas industry frameworks
iterate faster.
We support ONC’s proposal to remove the Model Card transparency requirement and the more prescriptive risk
management obligations for predictive DSI.
Position:
While well-intentioned, federally mandated transparency artifacts risk quickly becoming outdated in a rapidly
evolving AI landscape. Industry led frameworks—such as voluntary AI transparency profiles and specialty specific
good practice guidelines—are more adaptive and responsive to technological realities.
Recommendation:
We encourage ONC to avoid reintroducing rigid AI transparency requirements in future rules. Instead, ONC should
continue to monitor and recognize emerging industry standards while preserving the flexibility developers need to
innovate responsibly.

IV. Information Blocking Revisions
FHIR Write operations must still comply with rigorous business rules, provenance, and safety checks; technical
conformance alone is insufficient.
A. Concerns Regarding Removal of the “Third-party Seeking Modification” Exception
MedInformatix respectfully urges ONC to reconsider the proposed elimination of the exception related to third-
party applications seeking to modify (i.e., write to) EHR data.
Allowing external applications to write data into a certified EHR without EHR led validation, safety constraints, or
structured integration protocols poses material risks to:

1. Data Integrity
   Third-party applications—such as wellness apps, niche specialty tools, or low code platforms—may not follow the
   required validation rules necessary to maintain accurate, structured clinical data. This increases the risk of:
   • corrupted medication lists
   • mismatched lab values
   • overwritten or incomplete clinical documentation
   • invalid FHIR resource structures

3

2. Legal Health Record Accountability
   Providers depend on the EHR as the authoritative source of truth for clinical documentation. If any external app
   with API access can write data without consistent validation layers, the resulting record becomes a collage of
   unverified inputs. This increases liability exposure for providers and disrupts the clinical audit trail.
3. Security and Safety Risks
   Removing the exception could be interpreted as requiring EHR developers to open broad write access endpoints
   that bypass existing security audits. Developers must retain the right to require:
   • sandbox validation
   • technical conformance testing
   • adherence to FHIR profiles
   • data provenance tagging
   Recommendation: Maintain or Replace With a “Safety and Integrity Exception”
   If ONC removes the existing exception, we urge the agency to create an explicit Safety and Data Integrity Safe
   Harbor, allowing EHR developers to:
   • deny write access when necessary for security or data integrity
   • require technical validation prior to granting write permissions
   • implement guardrails that ensure data meets FHIR conformance rules
   ONC should also clarify that requiring a third-party application to complete sandbox or validation testing does
   not constitute information blocking.

B. Automated Access and Autonomous Systems
We support ONC’s clarification that “access” under the Information Blocking regulations applies equally to:
• human users
• automated systems
• AI agents
This clarification aligns the rule with real-world API usage patterns and helps ensure that the FHIR-based
interoperability economy remains futureproof.

4

V. FHIR First Interoperability Framework
MedInformatix fully supports ONC’s shift toward a FHIR first ecosystem.
We recommend ONC clarify whether CCDA retirement follows a sunset date, phased reduction, or end of updates.

1. De-emphasizing C-CDA
   Moving away from static document exchange (CCDA) and toward granular API based data exchange is essential for
   modern interoperability. The industry benefits from discrete, query-based data rather than monolithic document
   bundles.
2. Request for Timeline Clarity
   We respectfully request a clear roadmap for:
   • the long-term retirement of remaining non FHIR criteria
   • transitional expectations for C-CDA
   • any future certification modules tied to USCDI expansion
   This clarity is critical for our multi-year product planning and investment cycles.

VI. Privacy and Security Criteria
Security obligations already driven by HIPAA, SOC2, HITRUST, and contracts ensure protection without duplicative
certification.
We support ONC’s proposal to remove the 14 privacy and security criteria that have become duplicative of HIPAA,
market requirements, and industry best practices.
Removing these criteria reduces redundant certification testing without compromising actual security. As an EHR
vendor operating in a competitive market, maintaining strong security practices—including MFA, audit trails, and
encryption—is already essential for customer trust and contractual compliance.
We agree that certification should not be duplicated or conflict with HIPAA Security Rule obligations.

VII. Conclusion
MedInformatix appreciates ONC’s leadership in modernizing the Health IT Certification Program through HTI5. We
strongly support the deregulatory direction of this rule and believe it will meaningfully reduce burden, enhance
innovation, and promote a more flexible, future-oriented interoperability landscape.
We respectfully request ONC to:

5

• preserve (or replace) protections related to write access to safeguard patient safety and data integrity
• continue supporting industry driven AI transparency frameworks
• provide clear timing expectations for transitioning fully to a FHIR first environment
We welcome continued collaboration with ONC and would be pleased to provide additional technical details or
participate in stakeholder discussions.
Sincerely,
Betty Lengyel-Gomez
Regulatory Compliance
MedInformatix, Inc.

---

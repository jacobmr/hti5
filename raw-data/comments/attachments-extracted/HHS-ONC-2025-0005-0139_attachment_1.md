# HHS-ONC-2025-0005-0139 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0139/attachment_1.pdf

---

February 26, 2026

Department of Health and Human Services
Assistant Secretary for Technology Policy
Office of the National Coordinator for Health Information Technology
Attention: Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions to Unleash
Prosperity Proposed Rule
Mail Stop: 7033A
330 C Street SW
Washington, DC 20201

Reference: RIN 0955-AA09
Subject: Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions to Unleash
Prosperity Proposed Rule
Dear ASTP/ONC:

On behalf of Firely USA Inc., thank you for the opportunity to comment on the Health Data, Technology, and
Interoperability: ASTP/ONC Deregulatory Actions to Unleash Prosperity proposed rule. We support ASTP/ONC’s
efforts to streamline the ONC Health IT Certification Program, eliminate outdated or redundant certification
criteria, and reduce unnecessary regulatory burden while maintaining strong interoperability standards.
Firely has been deeply engaged in the development and promotion of HL7® Fast Healthcare Interoperability
Resources (FHIR®) since its inception. Our Chief Technology Officer, Ewout Kramer, has been a key contributor
to HL7 since 2011, helping shape the global FHIR community. Over the past 13 years, Firely has become a
leading international entity within the FHIR ecosystem, and proudly hosts HL7 FHIR DevDays, the world’s largest
FHIR-focused event. Our team is actively involved in HL7 FHIR boards and committees globally.
As a dedicated group of software engineers, support specialists, and FHIR® consultants, we focus exclusively on
advancing health interoperability. With offices in New York, NY, and Amsterdam, the Netherlands, and a
distributed workforce across the U.S., we serve a broad range of clients including payers, providers, state health
programs, and health tech vendors.

Our solutions include the Certified Health IT 170.315(g)(10) Firely Server, a FHIR SDK, a Clinical Quality Language
(CQL) SDK, authoring and publishing tools for FHIR Implementation Guides, and more. Many of our tools,
including all SDKs, are open source and freely available to the FHIR community, underscoring our commitment
to collaborative, interoperable, and standards-based health IT.

We encourage ASTP/ONC to continue aligning certification requirements with modern FHIR-based API standards
and to remove criteria that no longer advance interoperability outcomes. A streamlined, standards-focused
certification program will reduce compliance burden while enabling developers to invest in scalable, innovative
solutions that deliver measurable value to patients, providers, and public health programs.

Kind regards,

Richard Almeida
Vice President, Product Strategy & Compliance

Firely USA Inc. Firely B.V. +1 (857) 263-3112 IBAN NL85 ABNA 0626400198
228 East 45th Street, Suite 9E Westerdok 442 +31 20 2461 241 BICCODE: ABNANL2A
New York, NY 10017 1013 BH Amsterdam info@fire.ly VAT no NL855366151B01
USA The Netherlands www.fire.ly
Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions to Unleash Prosperity Proposed Rule

Reference: RIN 0955-AA09
Subject: Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions to Unleash
Prosperity Proposed Rule

Responses to RFI Questions:

III.A.3. Clinical Quality Measures Certification Criteria
We support retaining § 170.315(c)(3) but recommend revising it to ensure technology neutrality.

HTI-5 removes C-CDA requirements in § 170.315(b)(1) and § 170.315(g)(6) to accelerate the transition to FHIR-
based exchange. However, it retains mandatory QRDA creation under § 170.315(c)(3), despite QRDA sharing the
same document-based limitations that ASTP/ONC has identified as inconsistent with its FHIR-forward initiatives.

This creates architectural inconsistency: clinical exchange advances through FHIR, while quality reporting
remains bound to legacy document standards. Resolving this inconsistency is important to ensure that the
certification program advances interoperability holistically, not just in selected domains.

We recommend revising § 170.315(c)(3) to permit compliance through either QRDA or FHIR-based quality
reporting implementation guides, consistent with the technology-neutral framework in § 170.315(f)(5).

We further recommend establishing a near-term sunset for QRDA and a defined pathway to FHIR-only
certification for quality reporting. The HL7® FHIR® Data Exchange for Quality Measures (DEQM) Implementation
Guide provides equivalent functionality within a modern FHIR-based architecture.

This approach preserves QRDA as a transitional option while aligning certification with ASTP/ONC’s
modernization strategy. Absent this revision, HTI-5 advances FHIR in clinical exchange but leaves quality
reporting anchored to the legacy architecture the rule otherwise seeks to phase out.

III.D.3 Real World Testing
We support the reduction and revision of Real World Testing criteria. In its prior form, the requirements were
burdensome for developers and offered limited practical benefit. We support the newly focused criteria (§
170.315(g)(10,31–33)), the removal of test plans, and ASTP/ONC’s recognition that clearer guidance is needed
regarding the content of Real World Test Result submissions.

Regarding HTI-5 and § 170.315(g)(10,31–33), we recommend that ASTP/ONC collaborate with HL7 and
certified health IT developers to harmonize and define standardized metrics that will produce consistent,
meaningful, and actionable Real World Testing results.

February 26, 2026 2/3
Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions to Unleash Prosperity Proposed Rule

IV. Information Blocking Provisions

1. Remove the TEFCA Manner Exception (§ 171.403)
   We support removal of the TEFCA Manner Exception. The provision has enabled actors to restrict access under
   the guise of TEFCA participation, creating closed networks and limiting third-party innovation and quality
   measurement. Eliminating this exception will ensure TEFCA functions as a floor, not a ceiling, for
   interoperability.

2. Remove the Third-Party Seeking Modification Condition (§ 171.204(a)(3))
   We support removal of the third-party seeking modification condition within the Infeasibility Exception. The
   vague “modification” standard has been used to deny legitimate requests for data in formats necessary for
   quality reporting, population health, and care coordination. Its removal will reduce misuse of the Infeasibility
   Exception and strengthen appropriate data access.

3. Remove, not revise, the Manner Exception Exhausted Condition (§ 171.204(a)(4))
   We suggest complete removal of § 171.204(a)(4), rather than revision. Even as narrowed, the condition remains
   vulnerable to manipulation, including strategic service fragmentation to avoid “analogous” implementations.
   Existing exceptions sufficiently address true infeasibility. Retaining this provision risks continued obstruction of
   legitimate access requests.

   February 26, 2026 3/3

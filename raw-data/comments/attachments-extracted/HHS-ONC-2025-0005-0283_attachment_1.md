# HHS-ONC-2025-0005-0283 - attachment 1

**Source:** HHS-ONC-2025-0005-0283_attachment_1.pdf

---

1
February 27, 2026

Department of Health and Human Services
Assistant Secretary for Technology Policy
Office of the National Coordinator for Health Information Technology
Attention: 45 CFR Parts 170 and 171 | RIN 0955-AA09
Mary E. Switzer Building, 330 C Street SW
Washington, DC 20201

RE: Public Comments on Health Data, Technology, and Interoperability: ASTP/ONC
Deregulatory Actions to Unleash Prosperity (HTI-5 Proposed Rule)

Dear ASTP/ONC Team,

On behalf of EMI Advisors (EMI), thank you for the opportunity to comment on the proposed HTI-
5 rule. EMI works at the intersection of policy, governance, standards, and implementation. We
partner with federal and state agencies, health plans, providers, and community networks to
translate interoperability policy into programs and workflows that work in the real world. We have
had the honor of directly supporting ASTP/ONC interoperability initiatives, including those related
to standards-based whole-person care, since 2011.
We support the direction outlined in this proposal.
The current electronic health record (EHR) certification framework has played an important role in
establishing a national floor for interoperability. It created consistency at a time when the market
needed guardrails. But over time, certification has also become tightly coupled to product
architecture in ways that slow innovation, increase compliance burden, and unintentionally
reinforce legacy infrastructure.
The challenge today is not whether certified EHR technology will include privacy, security, Direct
messaging, or other core safeguards. Market demand already requires these capabilities.
Providers, payers, and patients expect them. In our direct conversations with state agencies,
provider networks, and vendors, we consistently hear that certification requirements function as a
baseline, not a ceiling. Vendors are not backing away from privacy or security. Market demand,
rising cyber threats, and enterprise expectations are pushing them to strengthen these controls.
The core policy issue now is different. If we want Trusted Exchange Framework and Common
Agreement™ (TEFCA), the Centers for Medicare and Medicaid Services (CMS) Health Tech
Ecosystem, value-based payment, and Artificial Intelligence (AI)-enabled workflows to succeed,
Application Programming Interface (API) performance and modernization must become the
primary regulatory focus. API certification and performance should be a central focus of
ASTP/ONC for the next decade.
Too often today, data owners face significant cost and technical barriers when attempting to
access their own patient data at scale. The architecture of many legacy systems makes bulk,
performant, standards-based exchange difficult. Even when Fast Healthcare Interoperability
Resources (FHIR) APIs exist, performance, consistency, and economic barriers limit practical

2
access. This constrains innovation, inhibits new payment models, and slows the adoption of AI
and cloud-based services that depend on reliable, secure data access.
Shifting certification emphasis from prescriptive internal product requirements to robust,
standards-based FHIR API performance is a pragmatic and necessary evolution. The goal should
be clear. Data must be accessible through secure, modern infrastructure in ways that are
consistent, scalable, and economically reasonable for providers and the patients they serve.
Adoption and market demand are not the same as certification checklists. The market already
demands stronger privacy controls, better security architecture, and AI transparency. Removing
overly prescriptive requirements for how functionality is built does not remove accountability.
Instead, it allows vendors to compete on quality, usability, performance, and innovation while
meeting clear API standards.
ASTP/ONC has an opportunity to leverage its authority to optimize for modern, secure, API-
driven infrastructure that supports nationwide interoperability and intelligent agents over the next
ten years, or continue to anchor policy to legacy system constructs designed for a different era.
We believe the proposed direction in HTI-5 moves the ecosystem toward the right long-term
outcome. We encourage ASTP/ONC to:

1. Prioritize rigorous, measurable API performance, reliability, and conformance testing as
   the center of certification.
2. Ensure that economic and technical barriers to data access are addressed so that data
   owners can access and exchange their data without undue burden.
3. Align API modernization with TEFCA, CMS interoperability initiatives, and value-based
   payment programs to create reinforcing incentives across federal policy.
   We would also like to bring to ASTP/ONC’s attention an implementation of the Health Level
   Seven (HL7) electronic Long-Term Services and Supports (eLTSS) FHIR Implementation Guide
   (IG)1 that we believe demonstrates the practical potential for FHIR-based interoperability
   envisioned in HTI-5 and may be applicable to the anticipated HTI-6 Proposed Rule. EMI supports
   the State of Missouri Department of Mental Health Division of Developmental Disabilities (DMH-
   DDD) in the design and implementation of a FHIR-based data exchange to share Person-
   Centered Service Plans (PCSP) for individuals with intellectual and developmental disabilities
   (IDD) receiving 1915(c) Home and Community-Based Services (HCBS) waivers. The flow is
   currently in final implementation stages with live data flowing anticipated in 2026, is as follows:
   • Missouri DMH-DDD generates eLTSS care plan data as structured FHIR resources,
   conformant to the HL7 eLTSS FHIR IG. The information mapped to the eLTSS care plan
   is based on the Person-Centered Service Plans required in the state’s HCBS waivers for
   individuals with IDD.
   • These FHIR resources are retrievable as a FHIR eLTSS care plan bundle via a live FHIR
   API, accessible to authorized participants in the exchange.
   o The state’s FHIR API connects to Missouri’s Health Information Exchange
   comprised of the four Health Information Network (HIN) organizations currently
   operating in the state of Missouri.

1 https://hl7.org/fhir/us/eltss/

3
o Provider organizations connected to the HINs, which include HCBS providers,
are able to retrieve a person’s eLTSS care plan FHIR bundle from the State
through the HIN intermediary using FHIR APIs and/or SMART apps to display in
their user interface.
To our knowledge, this represents one of the first, statewide production implementations of the
eLTSS FHIR IG in a state Medicaid program context. As ASTP/ONC designs and codifies the
“new foundation” for FHIR-based certification criteria described in HTI-5, we encourage the
agency to:
• Explicitly acknowledge that the FHIR ecosystem extends beyond actors who use
historically certified health IT modules and products, like HCBS providers and Targeted
Case Management (TCM) and Support Coordination agencies. These sources produce
high-quality person-centered information in accordance with Medicaid program, which is
valuable not just in HCBS settings but also in clinical acute and primary care settings.
• Consider how certification criteria or guidance could support clinical providers primarily
using EHR systems in having the ability to query and consume person-centered FHIR
information from these sources.
• Consider whether using existing HL7 FHIR IGs, such as the eLTSS FHIR IG or the
Gravity Social Determinants of Health (SDOH) Clinical Care (CC) FHIR IG, should serve
as reference standards for FHIR API certification in relevant care settings.
The original certification program catalyzed digitization. ASTP/ONC has a unique opportunity to
structure the next phase to catalyze true interoperability and modernization.
We appreciate ASTP/ONC’s leadership at this inflection point and stand ready to support
continued collaboration to ensure that interoperability policy translates into real-world impact for
patients, providers, and communities.

Sincerely,

Evelyn Gallego, MBA, MPH, CPHIMS  
CEO and Founder

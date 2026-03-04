# HHS-ONC-2025-0005-0041 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0041/attachment_1.pdf

---

SMART Health IT
Computational Health Informatics Program
Boston Children’s Hospital

February 10, 2026

Re: Comments on the HTI-5 Proposed Rule (RIN 0955-AA16)
Health IT Certification Program Deregulation, API Observability, and Information Sharing

Submitted on behalf of the SMART Health IT team (the creators and maintainers of the SMART on FHIR
ecosystem)

Dear ASTP/ONC Leadership,

Thank you for the opportunity to comment on the HTI-5 proposed rule. We share ASTP/ONC’s objective of
accelerating the nation’s transition to standards-based, API-driven interoperability—particularly the continued
evolution toward FHIR-based exchange and a durable, competitive app ecosystem built on SMART on FHIR.
We also appreciate the agency’s stated intent to reduce burden where requirements have become duplicative
or where the market has matured.

At the same time, we are concerned that several key deregulatory moves in HTI-5 risk introducing architectural
gaps that may slow real world interoperability and weaken the feedback loops that ASTP/ONC (and the
market) need to manage a successful transition.

Below we offer targeted recommendations grounded in the proposed changes described in the rule and in the
practical realities of implementing interoperability at scale.

PART 1. HTI-5 Comments

1. AI agents are acknowledged—now the rule should ensure they are not effectively priced or
   contracted out of access. We appreciate the proposed clarification that “access” and “use” include
   automated actors (e.g., robotic process automation and autonomous AI systems). This is an important step
   toward acknowledging the reality of automation in health data access.

However, we are concerned that the practical ability of automated agents to function “as users” could be
undermined if EHR vendors can treat interfaces and endpoints an agent uses as separately licensable
“interoperability elements,” potentially invoking the Information Blocking Licensing Exception to require
additional contracts, fees, or restrictive terms.

Recommendation. ASTP/ONC should clarify, through HTI-5’s final language, accompanying guidance, or
enforcement posture, that: when an authorized agent is acting on behalf of an authorized user (patient,
clinician, staff) through the same standard user interaction surface (e.g., standard UI flows, standard client-side
APIs, standard authentication/authorization pathways), the agent should be treated economically and
contractually like that user—i.e., “per seat” or equivalent (potentially with additional pricing to account for and
only for any additional market-based cloud compute costs incurred by the customer). Patient-authorized AI
should, like patients, have free access. The standard interface of a certified health IT product should not
become an artificial toll booth merely because the actor is automated.

2. ASTP/ONC should retain Real World Testing of EHI Export. HTI-5 risks leaving a critical gap between
   FHIR-based API access (often limited to the mapped surface area of US Core and other standardized FHIR
   profiles) and the full EHI scope that patients and authorized parties are entitled to obtain, including the "long
   tail" not mapped cleanly into FHIR resources.

EHI Export capabilities exist, but in practice they are frequently manual, inconsistent, and difficult or impossible
to access. This is inconsistent with the 21st Century Cures Act mandate to make all elements of a patient's
record accessible via API with no "special effort" and therefore is fundamentally incompatible with the "AI-
enabled interoperability" direction described in HTI-5's framing.

Previous Real World Testing results for EHI Export have provided important insight into the limitations of
current implementations—revealing gaps between what is theoretically available and what patients and
authorized parties can actually obtain in practice. Without continued Real World Testing, ASTP/ONC will lose
visibility into whether EHI Export is functioning as intended, or whether the gap between "full EHI" entitlement
and practical accessibility is widening. This observability is essential during a period when ASTP/ONC is
simultaneously promoting AI-enabled interoperability while potentially reducing other certification requirements.

Recommendation. ASTP/ONC should maintain Real World Testing of EHI Export to preserve insight into
implementation quality and to ensure that full EHI access does not become a paper entitlement that is
impractical to exercise.

3. Removing Insights metrics risks flying blind during the transition and Bulk Data observability is
   especially important. We recognize burden concerns and agree that reporting programs should be lean,
   meaningful, and carefully specified. Nonetheless, HTI-5’s proposed reduction of the Insights Condition of
   Certification—leaving only a generic “Use of FHIR in apps” counter—would significantly reduce ecosystem
   observability at precisely the moment ASTP/ONC is attempting a major transition in certification scope.

“API calls occurred” is not enough to understand whether interoperability is broadly succeeding or
concentrated in a few integrations. Without metrics that illuminate the shape of the ecosystem (e.g., number of
distinct apps, usage by user type, adoption across settings), the nation loses the ability to measure whether a
vibrant, competitive app economy is emerging—or whether the market is consolidating into a small number of
dominant integrations.

Bulk Data is not interchangeable with patient-level app traffic. Bulk FHIR (Flat FHIR / NDJSON export)
serves population-level analytics, value-based care, payer-provider exchange, and large-scale measurement.
A single Bulk Data export can represent tens of thousands of patients and massive downstream impact. If HTI-
5 removes Bulk Data reporting, ASTP/ONC loses visibility into whether this critical pipeline is working at
scale—especially for the use cases that matter most for system transformation. The existing reporting metrics
are already greatly reduced and weakened from what was recommended by HITAC.

Recommendation. If ASTP/ONC substantially reduces Insights measures, we strongly urge retaining a
minimal but high-value set that includes:

● Bulk Data usage observability (at least: number of exports initiated, completion rate, and a coarse
measure of volume).

● App ecosystem observability (at least: number of distinct apps or app identifiers interacting via certified
APIs).

● Stratification that preserves interpretability (e.g., patient vs clinician/other user type where appropriate).
If the goal is burden reduction, ASTP/ONC can simplify measure definitions and reduce frequency or
granularity—but eliminating the measures entirely creates a strategic blind spot. It will be difficult to
effectively steer an ecosystem transition while removing the instrumentation that tracks what is
happening.

4. We support removing TEFCA as a “manner” shield against direct API access. We support the
   proposed removal of the TEFCA Manner Exception as a mechanism that could have been used to deny or
   delay direct API-based access. This is consistent with architectural integrity and with ensuring that TEFCA
   participation does not become a justification for limiting other interoperable exchange pathways. We have
   advocated for this previously.

PART 2. Comments that may apply to HTI-5 or HTI-6
Following are recommendations that could be applicable to the HTI-5 Final Rule, but may be also appropriate
for the anticipated HTI-6 Proposed Rule. The proposed HTI-5 rule appropriately emphasizes functional
requirements and flexibility in implementation. Additional requirements should build on that foundation and
focus on completing the interoperability architecture by ensuring that foundational data access capabilities are
performant, reusable, and sufficiently complete to support many use cases including patient empowerment,
modern analytics, public health reporting, quality improvement, and AI-enabled health system intelligence.

1. Comprehensive Patient Access to Their Own Data. SMART on FHIR and the US Core Data for
   Interoperability establish a necessary foundation for patient access. We propose that this foundation be
   extended to provide access to the full scope of electronic health information through streamlined, modern, and
   automatable workflows, while preserving architectural integrity as access expands.

   ● Mandate support for portal-based single sign-on with remote identity proofing so patients can
   authenticate once and authorize access without repeated manual steps.

   ● Enable patients to retrieve their imaging data—including metadata and full diagnostic-quality image
   content— through the same OAuth-based authorization flows used for USCDI data, rather than through
   parallel portals, credentials, or bespoke workflows that fragment access.

   ● Enable patients to retrieve their full Electronic Health Information via an API that uses the same OAuth-
   based authorization flows used for USCDI data access. This requirement is necessary to preserve
   access to the “long tail” of clinical data not fully represented in standard FHIR profiles. The Argonaut
   Project has profiled this approach in the EHI Export API Implementation Guide and ASTP/ONC-funded
   prototypes have demonstrated its feasibility. Implementations should extend beyond vendor-specific
   data formats to also include an option for retrieving a complete, human and AI readable PDF version of
   the medical record, supporting direct use by patients, clinicians, and large language models.

   ● Support dynamic app registration outside of preconfigured trust networks. Absent this capability, the
   friction involved in app registration approaches that vary by vendor and site limits the app choices
   available to patients.

   ● Enable patient use of FHIR Subscriptions, as profiled by Argonaut in the US Core Patient Data Feed, to
   support proactive notification when new data become available and reduce the reliance on manual
   polling in patient-facing applications.

2. Comprehensive Provider Access to Their Patients’ Data. Bulk FHIR establishes a necessary foundation
   for provider access to population-level data that enables streamlined movement of data throughout the
   healthcare system. We propose that this foundation be preserved and strengthened by requiring that Bulk
   FHIR implementations are usable in practice, performant at scale, and functionally aligned with certified REST
   interfaces. As with comprehensive patient access, providers would benefit from integrated imaging access and
   support for FHIR subscriptions.
    ● Bulk export implementations should support \_since, \_type, and \_typeFilter parameters with behavior
   equivalent to certified REST interfaces, enabling minimum-necessary data extraction rather than forcing
   unnecessarily broad exports. Support for bulk exports that are organized by patient (a feature in v3 of
   the Bulk Export specification) would enable efficient quality measure calculation and downstream
   analytics.

   ● Enable providers to define cohorts for bulk export flexibly through standard APIs, automatically creating
   patient groups based on roster matching and clinical criteria rather than requiring users to specify sets
   of patients manually in each system’s interface.

   ● Clear and enforceable performance expectations are needed to prevent “checkbox” compliance, in
   which capabilities exist on paper but fail under real world conditions. A performance-parity approach—
   aligning Bulk FHIR expectations with those of proprietary data export APIs—would ensure that bulk
   access functions as an operational tool.

   ● Streamline provider workflows by endorsing FHIR Subscriptions, as profiled by Argonaut in the US
   Core Patient Data Feed, to notify apps for decision support, patient care, public health, research and
   other use cases when relevant new data become available.

   ● Imaging access, including metadata and full diagnostic-quality image content, should likewise be
   accessible through the same OAuth-based authorization flows used for USCDI data, preserving
   architectural coherence across access pathways.

3. Closed-Loop Performance Verification for FHIR Bulk Export. Bulk FHIR establishes a necessary
   foundation for population-level interoperability. Real world experience demonstrates that Bulk FHIR
   performance is frequently inadequate, with exports involving as few as a thousand patients taking days or even
   weeks to complete. Published evaluations document these limitations and indeed were cited in the HTI-2
   Proposed Rule. Health systems have reported desired Bulk FHIR use cases but also operational impacts of
   poor technical performance through case reports on the SMART Health IT Good Neighbor website.

   ● Require performance verification for Bulk FHIR using new, Inferno-based testing tools or existing open
   source ONC funded tools as a certification expectation.

   ● Real world performance metrics should be reported by each institution to ASTP on a quarterly basis
   rather than relying on one-time attestation. At a minimum, reported metrics would include completion-
   time distributions (P50 and P95) stratified by cohort-size bands; time to first byte or first file; throughput
   measured in resources per minute or patients per hour; failure rates, retry behavior, and cancellation
   behavior; and time to complete incremental exports covering the previous 24 hours or the last N days.

Together, these measures would enable ASTP/ONC to assess whether Bulk FHIR is functioning as a reliable,
scalable foundation for population-level data exchange and to identify architectural gaps before they impede
real world use.

Closing
HTI-5 should reduce burden without weakening interoperability guarantees. We understand the
argument that HTI-5 is deregulatory in intent and that certain new regulatory requirements may appropriately
be deferred to HTI-6 or subsequent rulemaking. Even within a deregulatory posture, however, HTI-5 can (and
should) preserve the critical “connective tissue” required for a stable transition. In particular, HTI-5 should
preserve a durable architectural floor by addressing the following core elements:

● Ensure that automation is not effectively blocked through licensing and contracting friction.

● Continue to evaluate “full EHI” export
 ● Retain a minimal set of high-value observability measures—especially for Bulk Data and the app
ecosystem.

Looking ahead, HTI-6 represents a critical opportunity to complete this transition. While HTI-5 appropriately
emphasizes functional requirements and flexibility, HTI-6 could focus on ensuring that foundational access
mechanisms—patient access, provider access, Bulk FHIR, and full EHI retrieval—are not only available in
principle, but usable at scale, performant under real world conditions, and coherent as an integrated
architecture. In this sense, HTI-6 should not reopen settled questions, but rather operationalize and verify
capabilities that HTI-5 appropriately preserves during its deregulatory phase.

Addressing interoperability and information blocking remains fundamental ASTP/ONC responsibilities in
supporting a health ecosystem increasingly shaped by automation and artificial intelligence. Accordingly, these
comments also address the ASTP Request for Information, Accelerating the Adoption and Use of Artificial
Intelligence as Part of Clinical Care.

We appreciate the opportunity to comment and would welcome continued engagement on practical
implementation approaches, including how to define a lightweight but meaningful set of Insights measures and
how to standardize an automatable, API-based EHI export retrieval mechanism.

Respectfully submitted,

Josh Mandel, Dan Gottlieb and Ken Mandl on behalf of the

SMART Health IT Team

Computational Health Informatics Program

Boston Children’s Hospital

Contact: contact “dot” chip “at” childrens.harvard.edu

Web: https://smarthealthit.org

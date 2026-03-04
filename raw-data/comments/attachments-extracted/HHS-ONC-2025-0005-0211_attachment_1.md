# HHS-ONC-2025-0005-0211 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0211/attachment_1.pdf

---

ASTP/ONC HTI-5 Proposed Rule Public Comments

Rising T1DE Alliance | www.risingT1DEalliance.org

Submitted to: Assistant Secretary for Technology Policy/Office of the National Coordinator for Health Information
Technology (ASTP/ONC)

RE: Public Comment on HTI-5 Proposed Rule - Advancing Safe, Scalable API-Based Interoperability for Diabetes Care

Docket ID: HHS-ONC-2025-0005
RIN: 0955-AA09
FR Doc. 2025-23896

Date: February 26th, 2026

Dear ASTP/ONC Leadership,

The Rising T1DE Alliance (RTA) appreciates the opportunity to comment on the HTI-5 Proposed Rule. RTA is a multi-
institution community focused on advancing data-driven diabetes care by improving the real-world usability of electronic
health information (EHI) and enabling safe, scalable integration of diabetes-related data into clinical workflows. We submit
this comment on behalf of the Alliance, separate from any single health system perspective.

Executive Summary
Rising T1DE Alliance (RTA) supports ONC’s HTI-5 Proposed Rule and its forward-looking direction to strengthen API-based
interoperability, which is essential for modern diabetes care. Diabetes device data (e.g., continuous glucose monitors,
insulin pumps, smart insulin pens, and blood glucose meters) too often remain difficult to integrate into EHR workflows in
ways that are reliable, timely, and clinically actionable. While we support reducing unnecessary burden, we are concerned
that deregulatory changes that weaken baseline certification assurances could shift security and operational risk onto
healthcare organizations as API-enabled exchange expands. We urge ONC to retain (or clearly replace) minimum baseline
expectations for auditability, authentication/authorization, encryption, and API performance transparency to ensure
interoperability scales safely and sustainably.

About the Rising T1DE Alliance
The Rising T1DE Alliance (RTA) is a multi-institution collaboration committed to revolutionizing diabetes care through data-
driven, patient-centered, scalable innovation. Co-led by Children's Mercy Kansas City and Ann & Robert H. Lurie Children's
Hospital of Chicago, RTA brings together clinicians, data scientists, implementation leaders, patient advocates, payors, and
industry experts to develop, test, and disseminate cutting-edge tools and models for diabetes population health. In addition
to its leaders, active participants in the Alliance include Cincinnati Children's, University of Kansas Medical Center, Montana
HIE Big Sky Care Connect, and activities cover both pediatric and adult patient populations. The RTA also works closely with
the Diabetes Technology Society, who created The Integration of Continuous Glucose Monitoring Data into the Electronic
Health Record (iCoDE) Project. The 2022 iCoDE Report: CGM-EHR Integration Standards and Recommendations serves as a
model for a collaborative, multi-stakeholder approach to advancing medical device data interoperability and integration.

I. Interoperability is essential to modern diabetes care
Diabetes care increasingly depends on patient-generated health data from a diverse and rapidly evolving ecosystem of
devices and applications: continuous glucose monitors (CGMs), insulin pumps and automated insulin delivery systems,
smart insulin pens, blood glucose monitors, and related software. Yet in many care settings, these data remain difficult to
integrate into the electronic health record (EHR) in ways that are timely, reliable, and clinically actionable. When device data
are fragmented across portals, apps, and stand-alone platforms, clinicians lack the full clinical context needed to interpret
data, coordinate care, and respond to safety issues. Patients and families also face inconsistent experiences in accessing
and sharing their data across providers and settings. For diabetes, where decisions are frequent, time-sensitive, and high-
stakes, interoperability is not an abstract policy goal; it is a prerequisite for safe and effective care.

II. RTA supports HTI-5’s API-forward interoperability direction
RTA strongly supports ONC’s forward-looking emphasis on a FHIR-based API foundation and related efforts to promote more
consistent access, exchange, and use of EHI in real-world conditions. We also appreciate ONC’s continued focus on
improving the practical implementation of interoperability policies, including modernizing concepts that affect how EHI is
accessed and used through software applications and automated workflows. We believe diabetes care represents a “stress
test” for interoperability: high-frequency physiologic data, a multi-vendor device ecosystem, care delivered across
inpatient/outpatient/community settings, and increasing reliance on digital tools to support patient self-management and
clinical decision-making. Policies that improve API-based interoperability have outsized potential to improve outcomes in
diabetes.

III. Key concern: deregulatory changes could shift safety and assurance burden onto
healthcare organizations
While RTA supports reducing unnecessary burden, we are concerned that certain deregulatory actions—particularly those
that reduce certification-related security and assurance expectations—could unintentionally shift risk and operational burden
onto healthcare organizations (HCOs) at the very moment that API-enabled exchange is expanding.
As access to EHI becomes more API-mediated and more dependent on third-party applications, HCOs must be able to rely on
consistent baseline expectations for security, auditability, and operational performance. If those assurances are weakened
at the certification level without a clear replacement, HCOs may be forced to recreate assurance through bespoke
contracting, local governance, additional reviews, and technical controls. This introduces variability across the market,
increases cost, slows adoption, and can create friction for patients and innovators, while also increasing the likelihood of
inconsistent security practices across implementations.
In diabetes, where device data are increasingly used to guide treatment decisions and population health efforts, inconsistent
assurance and traceability can also reduce clinician trust in integrated data and slow the adoption of interoperable
workflows.
IV. Specific recommendations: preserve baseline security & assurance for API
ecosystems
RTA urges ONC to either (a) retain key baseline security/audit capabilities within certification (preferred), or (b) if ONC
removes these certification requirements, publish a clearly defined “minimum assurance set” that HCOs and developers can
rely on as a consistent baseline for API-enabled exchange.
We recommend ONC focus that baseline on the following four areas:

1. Audit logs and traceability for API access (minimum baseline)
   ONC should ensure there is a consistent baseline for audit logging and traceability for API-mediated access to EHI,
   including:
   • Who accessed data (user/app identity)
   • What data was accessed (resource/data category)
   • When access occurred (timestamp)
   • Which patient record(s) were accessed
   • Which authorization scope(s)/permissions were used
   Why this matters: without standardized auditability, health systems must recreate assurance through bespoke contracting
   and local controls, slowing adoption and increasing operational burden while also limiting incident response and patient
   trust.

2. Authentication and authorization expectations for app ecosystems
   ONC should retain or specify baseline expectations for API ecosystem authentication and authorization, including:
   • A consistent baseline approach to app identification, user identity, and authorization scope management
   • Clear expectations for how authorization is granted, reviewed, and revoked
   • Practical expectations that support safe and scalable third-party access enablement without increasing information
   blocking risk
   Why this matters: HCOs need predictable controls to safely support patient- and provider-authorized apps without inventing
   unique governance frameworks for each integration.

3. Encryption expectations
   ONC should preserve or define minimum expectations for encryption that align with the realities of API-enabled exchange,
   including:
   • Encryption in transit for API traffic as a baseline
   • Clear minimum expectations for protecting EHI as it moves across systems, intermediaries, and authorized
   applications
   Why this matters: unclear or inconsistent encryption expectations can lead HCOs to impose additional screening and
   contracting requirements, increasing variability, delays, and cost.

4. API performance and availability transparency
   If ONC is advancing a FHIR-first interoperability direction, ONC should also ensure that API-based access is operationally
   real by promoting transparency around performance, including:
   • Basic uptime/availability reporting or transparency
   • Reasonable disclosure around latency, rate limiting, and planned downtime
   • Practical mechanisms for HCOs and app developers to assess whether API performance supports real-world clinical
   and patient-facing use cases
   Why this matters: “FHIR-first” will only scale if organizations can trust that APIs function reliably enough for care workflows,
   patient access, and responsible downstream use (including analytics and decision support).
   V. Why this matters for diabetes device data integration
   RTA’s experience across sites is that integrating diabetes device data into the EHR is rarely blocked by a single technical
   barrier; rather, it is constrained by inconsistent interfaces, variable assurance practices, incomplete traceability, and
   operational fragility when systems move from pilot deployments to durable, scalable implementation. These are precisely
   the areas where clear, consistent baseline expectations can reduce burden for HCOs and developers alike. In practice,
   healthcare teams need device data in clinical context (medications, labs, diagnoses, encounters, and care plans) to make the
   data actionable. When interoperability and assurance are inconsistent, organizations may limit integration or keep workflows
   outside the EHR, undermining the very outcomes the Proposed Rule seeks to advance.

VI. Closing
RTA supports ONC’s direction toward API-based interoperability and appreciates ONC’s efforts to modernize the framework
to better reflect real-world access and use of EHI. At the same time, we urge ONC to reconsider deregulatory changes that
reduce baseline security and assurance expectations without replacement, because doing so may shift burden onto
healthcare organizations and slow safe adoption—particularly for high-impact domains like diabetes device data integration.

We respectfully recommend that ONC retain baseline security and assurance capabilities within certification where possible,
and where not feasible, publish a clear minimum assurance set that reduces variability, limits burden-shifting, and supports
safe, scalable API-enabled interoperability. Thank you for your consideration.

Respectfully submitted,
Juan Espinoza, MD, on behalf of the Rising T1DE Alliance

Contact Information:
Juan Espinoza, MD
Co-Chair, Rising T1DE Alliance
Chief Research Informatics Officer, Ann & Robert H. Lurie Children's Hospital of Chicago
jespinozasalomon@luriechildrens.org
www.Luriechildrens.org | www.risingT1DEalliance.org

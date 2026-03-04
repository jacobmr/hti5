# HHS-ONC-2025-0005-0151 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0151/attachment_1.pdf

---

February 26, 2026

Department of Health and Human Services,
Assistant Secretary for Technology Policy/Office of the National Coordinator for Health
Information Technology,
Mary E. Switzer Building, Mail Stop: 7033A, 330 C Street SW, Washington, DC 20201

Submitted electronically via FederalRegister.gov

Subject: Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions To
Unleash Prosperity

Relevant Background

DirectTrust® appreciates the opportunity to submit comments on the Health Data, Technology,
and Interoperability: ASTP/ONC Deregulatory Actions to Unleash Prosperity (HTI-5) Proposed Rule.

DirectTrust is a non-profit, vendor-neutral, 501(c)(6) alliance of more than 100 member
organizations dedicated to establishing trust in a connected world. Our membership includes
EHR developers, health information networks, clinical organizations, certificate authorities,
health technology companies, and other trusted service providers across the interoperability
ecosystem. As a vendor-neutral alliance and American National Standards Institute (ANSI)
accredited Standards Developing Organization (SDO), DirectTrust does not develop or sell
health IT products; our sole interest is ensuring that trust, interoperability, and identity
assurance remain durable foundations of the national health data infrastructure.

Founded in 2009 as an initiative of the Office of the National Coordinator for Health Information
Technology (ONC) to advance secure, trusted, and identity-verified communication, DirectTrust
was transitioned in 2012 into an independent, self-sustaining trust framework organization to
continue that mission. Since that time, nearly 8 billion Direct Secure Messages have been
exchanged through the network we oversee, supporting real-time clinical workflows, transitions
of care, referrals, public health reporting like Electronic Case Reporting,
Admission/Discharge/Transfer and other event notifications, patient-directed exchange, and
many more use cases nationwide.

DirectTrust serves multiple roles in advancing interoperability and trust in health technology.
We are an ANSI-accredited SDO and an accreditation and certification body governed by the
Electronic Healthcare Network Accreditation Commission (EHNAC). We steward national trust
frameworks, certificate policy and trust bundle governance, a national provider directory, and

    Copyright 2026 by DirectTrust, All Rights Reserved | 1629 K Street NW, Suite 300 | Washington, DC 20006 | DirectTrust.org | Page 1

secure information exchange methods such as Direct Secure Messaging. We also support a
community of Certificate Authorities that issue digital certificates used across healthcare use
cases, including for implementers of the HL7® UDAP FAST Security for Scalable Registration,
Authentication, and Authorization Implementation Guide, as required for Facilitated FHIR®
exchange under TEFCA. DirectTrust actively supports FHIR-based interoperability advancement
and identity-enabled exchange at scale.

DirectTrust has worked alongside federal partners and industry stakeholders through multiple
iterations of the ONC Health IT Certification Program and related interoperability rulemaking,
translating policy requirements into operational, production-level exchange infrastructure. Our
perspective reflects both regulatory experience and practical implementation realities.

These comments are informed by extensive community engagement. To develop this response,
DirectTrust convened a member briefing dedicated to HTI-5, three structured member listening
sessions, and a community listening session with clinical end users. In addition, we conducted
more than 20 individual stakeholder conversations, and received written feedback from
members and partners. DirectTrust also participated in listening sessions and advisory
discussions convened by peer organizations to ensure alignment with broader ecosystem
perspectives. The feedback reflected both policy considerations and anticipated operational
impacts on certified health IT modules, trust frameworks, security posture, and production
exchange workflows.

Accordingly, this letter represents not only DirectTrust’s institutional perspective, but also the
experience of implementers and clinical users who rely on certified capabilities and trusted
exchange infrastructure every day.

General Comments

Following our General Comments, we address specific information within the proposed rule.

We support the stated goals of the proposed rule to reduce burden and costs, to advance
interoperable exchange, and modernize and simplify the ONC Health IT Certification Program.
We agree that the Certification Program should continue evolving from a primary focus on
feature-level functionality within Electronic Health Record (EHR) systems toward more targeted
certification of interoperability capabilities and modalities.

Efforts to reduce regulatory burden on health IT developers have broad industry support.
However, when burden and cost are evaluated across the full healthcare ecosystem, including

    Copyright 2026 by DirectTrust, All Rights Reserved | 1629 K Street NW, Suite 300 | Washington, DC 20006 | DirectTrust.org | Page 2

clinicians, health information networks, implementers, public health agencies, and end users,
certain proposed removals may shift, rather than reduce, compliance and operational burden.
In some cases, removal of certification requirements may increase overall costs associated
with interoperable information exchange by introducing variability, custom integration work,
and contractual complexity.

The diverse DirectTrust community reflects this ecosystem-wide perspective. Our membership
includes both developers of certified technology and those who benefit from its use. Many
technology developers we engaged expressed general support of deregulatory objectives, and in
some cases, specific HTI-5 proposals. However, healthcare organizations, clinical users, and
patient advocates expressed significant concern regarding the downstream operational and
clinical impacts of particular criteria removals.

Accordingly, our comments focus heavily on two primary areas:

● The proposed revision or removal of certification criteria that support Direct Secure
Messaging and other document-based exchange modalities that remain heavily relied
upon in real-world care delivery; and
● The proposed elimination of stand-alone privacy and security certification criteria that
may affect consistency of implementation and patient data protection, particularly in rural
and under-resourced environments.

We recognize and support the industry’s continued advancement toward standardized API-
based exchange and FHIR-based interoperability. However, a nationally deployed, standards-
based FHIR push messaging model for cross-organizational referrals and transitions of care does
not currently exist. FHIR is predominantly implemented as a query-based API framework. It does
not today function as an addressable, asynchronous, cross-organizational push transport in the
manner that Direct Secure Messaging supports. Until such push models are defined,
operationalized, and widely adopted, certification should continue to ensure reliable document-
based send and receive capabilities alongside API-based exchange. In this environment, where
cross-organizational FHIR push workflows are not yet operational at scale, Direct Secure
Messaging remains the only nationally deployed, standards-based push exchange mechanism.

Direct Secure Messaging

We appreciate the retention of the Direct Standard® and related Implementation Guides in §
170.202(a)(2), and the acknowledgement that the protocol remains widely deployed nationwide.
We support retaining the Applicability Statement for Secure Health Transport in § 170.202(a)(2)

Copyright 2026 by DirectTrust, All Rights Reserved | 1629 K Street NW, Suite 300 | Washington, DC 20006 | DirectTrust.org | Page 3
and aligning related criteria, including § 170.315(h)(1) and § 170.315(h)(2), to ensure consistent
implementation.

Preserving consistent Direct interface capabilities advances the rule’s stated goals of reducing
ecosystem burden, maintaining interoperability at scale, and supporting modernization without
disruption. Our comments are not intended to slow API-based innovation, but to ensure that
modernization occurs without destabilizing operational exchange workflows that are functioning
at scale today.

Maintaining certification requirements that support Direct Secure Messaging remains important
for the following reasons.

Direct Secure Messaging is an interoperability interface, not a product feature

Direct, like FHIR-based APIs, is an interface mechanism that enables secure, identity-verified
exchange across organizational boundaries. Certification has ensured that this interface
functions consistently across vendors, creating predictable connectivity throughout the market.

Retaining the standard alone is not equivalent to retaining certified implementation. Standards
achieve interoperability only when consistently implemented and tested. Removal of
certification criteria at the interface layer risks weakening implementation consistency, even if
the underlying standard remains referenced in regulation.

Direct Secure Messaging supports a broad and expanding set of use cases

Direct Secure Messaging supports clinical, public health, administrative, and app-enabled
exchange workflows across the healthcare ecosystem. These include:

● Transitions of care and discharge communication
● Referrals and consult exchange, including closed-loop referral initiatives such as 360x
● ADT-based event notifications, including emergency department and inpatient admission
alerts
● Post-acute coordination and communication to step-down settings
● Provider notifications and care coordination messaging
● Electronic Case Reporting and other public health reporting workflows
● Behavioral health and substance use disorder exchange requiring specialized consent
handling
● Social care coordination and communication with non-HIPAA Covered Entities where
appropriate consent exists
● Veterans Health Administration community care referrals under the Elizabeth Dole Act
● CMS model participation workflows, quality reporting, and care coordination initiatives

    Copyright 2026 by DirectTrust, All Rights Reserved | 1629 K Street NW, Suite 300 | Washington, DC 20006 | DirectTrust.org | Page 4

● Health Data Utility push workflows
● Long-term care, skilled nursing, home health, school-based health, and correctional health
coordination
● Rural and small ambulatory provider exchange where no alternative secure transport
exists
● App-to-EHR inbound data transmission

Direct is payload agnostic and capable of transporting structured documents, discrete data
collections, and FHIR-formatted resources. This flexibility allows Direct to complement API-
based interoperability approaches and provides a practical pathway for organizations at varying
levels of technical maturity to participate in evolving exchange models.

The value of these workflows depends on consistent implementation across vendors.
Certification and testing at the interface layer help ensure that these use cases function reliably
nationwide.

Direct Secure Messaging remains the only nationally deployed standards-based referral
transport across unaffiliated organizations

In practice today, Direct remains the only standards-based mechanism deployed at scale for
cross-organizational referrals and consult exchanges among independent entities.

Enhanced workflows, including 360x Closed-Loop Referrals, are advancing among major EHR
developers. Federal programs and legislation continue to reference Direct Exchange for referral-
related use cases, particularly in rural and community settings, reflecting its deployability and
cost-effectiveness.

These workflows support referral accountability, consult communication back to the referring
provider, continuity of care, and timely clinical decision-making. Certification ensures that the
underlying transport remains consistently available.

Direct supports consent-sensitive and curated exchange workflows

Push-based exchange places the discloser in control of transmission. This supports workflows
involving special consent requirements, including behavioral health information, substance use
disorder information, and communications with social services or other non-HIPAA Covered
Entities where appropriate consent exists.

Direct enables curated exchange, allowing providers to send only the information required in
specialty, step-down, or cross-sector contexts. These workflows are operational today and
depend on secure, identity-verified transport.

    Copyright 2026 by DirectTrust, All Rights Reserved | 1629 K Street NW, Suite 300 | Washington, DC 20006 | DirectTrust.org | Page 5

Recent public health investments rely on Direct transport

Significant investments have been made by health IT suppliers to support Electronic Case
Reporting using Direct as a transport mechanism. Utilization has increased substantially, with
some implementations using Direct as the primary pathway for transmitting case reports to
public health agencies.

Changes to certification requirements should account for these operational realities and recent
investments, particularly where Direct serves as the most practical and scalable mechanism for
public health reporting.

Certification of Direct preserves predictable, low-cost connectivity

Because certified technology can be expected to support Direct in a consistent manner,
organizations can connect without negotiating proprietary or connection-by-connection
arrangements. This predictability has supported low-cost exchange, particularly for post-acute
providers, rural organizations, small practices, and under-resourced entities.

Although Direct capabilities are broadly deployed due in part to certification requirements,
continued progress in utilization, usability, and workflow integration has also been influenced by
the expectation that these capabilities remain core certified functionality. Certification has
functioned not only as a technical requirement, but also as an adoption mechanism that
encourages sustained investment and active use.

Burden and cost should be evaluated across the full healthcare ecosystem, including developers,
providers, network operators, and end users. Reductions in certification requirements for one
segment may shift operational and validation responsibilities to others, resulting in burden
relocation rather than true system-level burden reduction. Interoperability infrastructure is not
merely administrative; it directly supports safe transitions of care, medication reconciliation, and
timely clinical decision-making.

Document-based exchange remains foundational to national exchange networks

National exchange frameworks, including TEFCA QHIN participants and the DirectTrust
network, rely on the ability of certified technology to generate and receive standards-
conformant C-CDA documents containing USCDI data. Billions of documents move annually
through this model.

Data quality and format inconsistencies continue to require attention, reinforcing the
importance of consistent certification and testing.

    Copyright 2026 by DirectTrust, All Rights Reserved | 1629 K Street NW, Suite 300 | Washington, DC 20006 | DirectTrust.org | Page 6

There is not currently a nationally deployed, standards-based FHIR push messaging model that
enables unaffiliated healthcare organizations to conduct referrals, transitions of care, or
Admission/Discharge/Transfer event notifications at scale. FHIR is predominantly implemented
today as a query-based API framework. Widely adopted implementation specifications for cross-
organizational asynchronous push workflows are still developing. During this transitional period,
certification should continue to ensure reliable document-based send and receive capabilities
alongside API-based exchange.

Certain legally significant or “whole record” document types, including risk adjustment
submissions and claims attachments with provider signatures, are not yet fully supported
through FHIR-based exchange models.

Federal program alignment reflects operational readiness

Congress and CMS continue to reference Direct Secure Messaging in federal initiatives,
including Veterans Health Administration community care referrals under the Elizabeth Dole Act
and CMS care coordination models. These references reflect Direct’s broad deployment,
operational readiness, and cost-effective accessibility across diverse provider settings, including
rural and under-resourced environments.

FHIR-based cross-organizational write exchange is still developing

FHIR-based write workflows are advancing. However, most current implementations occur
within contractual or Business Associate relationships. In practice today, a broadly adopted,
cross-organizational trust and write model that enables unaffiliated entities to push data directly
into EHR systems via FHIR is not yet operational at national scale. Moreover, incorporation of
externally generated information into an organization’s medical-legal record typically requires
review, reconciliation, and clinical judgement before integration into the patient chart. Cross-
organizational workflows will need to continue supporting that evaluative step, regardless of the
underlying transport or API model.

SMTP-based transport like Direct supports asynchronous communication, including queuing and
retry models that are important in intermittently connected environments. We support
continued development of robust FHIR-based trust frameworks that will enable secure write
capabilities across independent organizations. Until such cross-organizational FHIR write models
are clearly defined, tested, and widely adopted, maintaining reliable push-based transport
through Direct remains important for operational stability.

Direct can serve as a bridge to API-based write workflows

    Copyright 2026 by DirectTrust, All Rights Reserved | 1629 K Street NW, Suite 300 | Washington, DC 20006 | DirectTrust.org | Page 7

Direct can carry FHIR workflow requests, FHIR documents, and FHIR resource collections
because it functions as a secure, standards-based transport mechanism independent of the data
model being exchanged. Hybrid models allow receiving service providers to apply FHIR-based
writes within appropriate authentication and trust frameworks, particularly where contractual
or Business Associate relationships support customized or proprietary integration approaches.
In this way, Direct can serve as a practical bridge to API-based write workflows, supporting
modernization while preserving reliable cross-organizational transport during the transition to
more API-centric exchange models.

Cross-program impact considerations

We encourage ASTP/ONC to evaluate the potential impact of proposed certification changes on
congressionally mandated and federally administered programs that reference or operationalize
Certified Electronic Health Record Technology. A comprehensive cross-program assessment
may help ensure that deregulatory actions within the Certification Program do not
unintentionally create implementation challenges, misalignment with statutory requirements, or
burden redistribution across other federal initiatives.

Summary

For these reasons, certification criteria that ensure consistent send and receive capabilities for
standards-conformant documents via a secure edge protocol remain important during this
transitional period. Retaining core interoperability functions while allowing thoughtful
modernization will best advance the proposed rule’s objectives. The specific recommendations
that follow are intended to preserve these foundational capabilities while providing flexibility for
continued innovation.

Comments on Proposed Revisions to the ONC Health IT Certification Program
Proposed Removals and Revisions to Certification Criteria (§ 170.315)

§ 170.315(b)(1) – Transitions of Care (Proposed Revision)

DirectTrust agrees that § 170.315(b)(1) can and should be thoughtfully modernized to reflect the
evolving interoperability landscape and reduce unnecessary certification burden. We appreciate
ASTP/ONC’s efforts in HTI-5 to streamline requirements and create space for continued
innovation, particularly as the industry advances toward FHIR-based APIs. However, we
respectfully suggest that a calibrated revision to § 170.315(b)(1) would better preserve the
stability and coherence of national interoperability during this transition.

    Copyright 2026 by DirectTrust, All Rights Reserved | 1629 K Street NW, Suite 300 | Washington, DC 20006 | DirectTrust.org | Page 8

We recommend that this revision to (b)(1) retain the core interoperability functions that have
enabled consistent, production-scale document exchange across the healthcare ecosystem: the
ability to generate a standards-conformant summary document and to send and receive such
documents via a secure edge protocol. This approach modernizes the criterion without
eliminating the certified interface capabilities that remain foundational to current exchange.

These elements are not simply technical features; they constitute the certified interface layer
that allows health IT systems to communicate using a common, nationally recognized method of
exchange. Certification of secure document generation and transport has historically served as
the mechanism that transforms standards into reliably interoperable infrastructure across
vendors. It has provided a uniform implementation floor, supported multiple national exchange
networks, and enabled dependable transitions of care for nearly two decades. Consistent
implementation of these capabilities supports safe and reliable transitions of care, reduces
variability in clinical workflows, and promotes ease of use for clinicians who depend on
predictable exchange during time-sensitive treatment decisions. Maintaining this floor remains
particularly important as new entrants enter the marketplace and interoperability expectations
must remain consistent.

Document-based exchange remains widely utilized today, including in workflows aligned with
the Trusted Exchange Framework and Common Agreement (TEFCA), where C-CDA documents
are frequently the payload returned in query-based exchange. Beyond TEFCA, Congress and
federal agencies continue to rely on secure, standards-based document exchange to support
transitions of care and coordinated treatment, including statutory directives under the Elizabeth
Dole Veterans Benefits Act and CMS models such as the ACCESS Model. Maintaining certified
document generation and secure exchange capability therefore supports alignment between
the Certification Program and these federal statutory and programmatic expectations related
to secure transitions of care, reinforcing coherence across federal interoperability policy
during this period of interoperability evolution.

While FHIR-based APIs may represent the long-term trajectory of interoperability, there is not
yet a production-scale, functionally equivalent replacement for secure push document exchange
across all treatment, care coordination, public health, and other operational use cases. Broad,
market-wide adoption of cross-organizational FHIR-based write capabilities has not yet
occurred. Removing established exchange mechanisms before mature, demonstrably adopted
alternatives are operational may introduce unnecessary disruption and uncertainty across the
ecosystem. During this transitional period, maintaining a certified baseline for secure document
generation and transport provides continuity and predictability, particularly as new entrants
Copyright 2026 by DirectTrust, All Rights Reserved | 1629 K Street NW, Suite 300 | Washington, DC 20006 | DirectTrust.org | Page 9
enter the marketplace. Certification in this context functions as prudent infrastructure
governance, preserving a consistent interoperability floor while innovation advances.

Recommendation:

Accordingly, we recommend revising § 170.315(b)(1) to require certified health IT to
demonstrate the capability to:

● Generate a standards-conformant structured document (e.g., C-CDA); and
● Send and receive such documents via at least one nationally recognized secure edge
protocol.

Because these capabilities remain critical to patient care and widely relied upon across federal
and private-sector exchange frameworks, we believe they warrant continued demonstration
through testing and certification to ensure consistent implementation across vendors. If
ASTP/ONC determines that maintaining full conformance testing is not feasible, we recommend
at minimum requiring developer attestation and/or documentation of independent external
validation demonstrating support for standards-conformant document generation and secure
exchange.

This targeted revision advances HTI-5’s deregulatory goals by allowing flexibility in
implementation, avoiding duplicative or overly prescriptive requirements, and reducing testing
complexity, while also preserving the interoperability interface that remains foundational to
current exchange workflows and aligned with federal exchange policy.

By maintaining these core functions within a modernized § 170.315(b)(1), ASTP/ONC can
streamline the Certification Program, support continued innovation, and ensure that federal
interoperability policy remains stable, aligned, and predictable as the ecosystem continues to
evolve.

§ 170.315(b)(2) – Clinical Information Reconciliation and Incorporation (Proposed Removal)

DirectTrust supports ASTP’s goal of reducing unnecessary prescriptiveness within the
Certification Program and creating space for innovation. However, we respectfully recommend
that § 170.315(b)(2) be revised, not removed, to preserve the core functional expectation that
certified health IT be capable of reconciling and incorporating received clinical information.

Reconciliation and incorporation ensure that exchanged information is not merely transmitted,
but meaningfully integrated into clinical workflows. Without a functional capability to reconcile

Copyright 2026 by DirectTrust, All Rights Reserved | 1629 K Street NW, Suite 300 | Washington, DC 20006 | DirectTrust.org | Page 10
and incorporate structured data, received information may remain siloed, duplicative, or
inconsistently presented—introducing clinical risk, particularly during transitions of care where
medication discrepancies and documentation gaps are well documented patient safety concerns.

Rather than specifying how incorporation must occur or limiting it to particular data elements,
certification should articulate the functional capability to reconcile and incorporate clinically
relevant information, while allowing developers flexibility in how that capability is achieved. For
many external organizations, including laboratories, specialty providers, and other unaffiliated
entities, document-based exchange currently remains as one of the only broadly available
mechanisms to deliver structured clinical information directly into EHR workflows in a manner
that supports reconciliation and clinical use. Preserving a functional incorporation expectation
ensures that this pathway remains visible while the industry continues to mature other
capabilities. This approach maintains a national implementation floor that supports patient
safety and continuity of care, while advancing ASTP’s deregulatory objective of reducing
prescriptive design requirements.

Recommendation:

Accordingly, we recommend that § 170.315(b)(2) be retained as a functional requirement that
describes the capability to reconcile and incorporate received clinical information, while allowing
greater flexibility regarding the specific data elements incorporated and the methods by which
incorporation is accomplished.

§ 170.315 (f)(5) Transmission to Public Health Agencies – Electronic Case Reporting (Proposed
Revision)

We have heard from many of our stakeholders that they have made substantial investments in
Electronic Case Reporting (eCR) using C-CDA with Direct as the transport and interface into
public health systems. In many environments, particularly among smaller or resource-
constrained organizations, Direct remains the only practical pathway to accomplish eCR at scale.

At the same time, we recognize that eCR traffic now flows through multiple mechanisms,
including TEFCA and native XDR. Within the DirectTrust network specifically, eCR transactions
continue to grow and represent a meaningful driver of network activity. This demonstrates that
eCR adoption is expanding, not contracting, and that multiple transport methods are successfully
achieving the public health objective. What matters most for patient safety and public health
response is that reportable information is transmitted accurately and in a timely manner. Any
eCR that occurs is beneficial and strengthens surveillance and outbreak response.

Copyright 2026 by DirectTrust, All Rights Reserved | 1629 K Street NW, Suite 300 | Washington, DC 20006 | DirectTrust.org | Page 11
Given this landscape, it is reasonable to move from a prescriptive certification criterion to a more
flexible, functional expectation. Establishing a functional requirement for the capability to
transmit reportable information to public health agencies, without mandating a specific standard
or transport, aligns with the HTI-5 goal of reducing burden while preserving outcomes. Such an
approach allows organizations to continue leveraging existing, operational exchange tools in
which significant investments have already been made, thereby avoiding unnecessary transition
costs while maintaining effective public health reporting.

Recommendation:

DirectTrust supports revising § 170.315(f)(5) as proposed and encourages ASTP to focus on
functional capability rather than specific implementation pathways, so that eCR can continue to
expand across diverse operational settings.

§ 170.315(h) – Direct Project Transport Requirements (Proposed Removal of (h)(1) and (h)(2))

We recognize and support ASTP/ONC’s goals in HTI-5 to reduce regulatory burden, modernize
the Certification Program, and advance API-based interoperability. We also appreciate the
proposal to retain the Direct Standard in § 170.202(a)(2), acknowledging its continued
widespread use.

However, removing certification of § 170.315(h)(1) and (h)(2) while retaining the underlying
Standard would materially change the role Direct Secure Messaging plays in the interoperability
ecosystem. Certification has been the mechanism that ensures the Direct Standard functions
consistently as a national, production-scale interoperability interface supporting referrals,
transitions of care, and other document-based exchange relied upon across the ecosystem.

Perspectives within our community vary. Some developers support reduced certification criteria
to decrease compliance burden. Others have expressed concern that removing Direct-related
certification may erode competitive parity and reduce investment in interoperability capabilities
that remain widely relied upon. Healthcare organizations, clinical leaders, HIEs, and
implementers expressed even stronger concerns regarding downstream operational and patient
care impacts.

As described in our General Comments, Direct Secure Messaging supports a broad and
expanding set of clinical, public health, administrative, and app-enabled exchange use cases
across the healthcare ecosystem, including federally supported initiatives such as Veterans
Health Administration community care referrals under the Elizabeth Dole Act. Direct is widely
deployed and relied upon nationwide. Certification has helped promote consistent
implementation across certified systems. Maintaining consistent expectations for Direct

Copyright 2026 by DirectTrust, All Rights Reserved | 1629 K Street NW, Suite 300 | Washington, DC 20006 | DirectTrust.org | Page 12
capabilities within certified systems helps preserve alignment between federal program
requirements and the operational interoperability infrastructure those programs depend upon.

Direct Secure Messaging remains in active, production-scale use across diverse clinical and
community settings. For example, 88 Veterans Affairs Medical Centers currently rely on Direct
for referrals, transitions of care, requests for records, dental pre-treatment authorization,
specialty note exchange, device-generated reports, and coordination with State Veterans Homes
and county jails. Direct also supports Electronic Case Reporting, public health submissions, ADT-
based event notifications, and behavioral health coordination, including automated notifications
for high-risk patients. Health Information Exchanges and emerging Health Data Utilities use
Direct to securely receive, normalize, and redistribute PHI for CMS reporting and population
health programs. In many rural, behavioral health, long-term care, school health, and community
service environments, Direct remains the only secure, standards-based electronic transport
available. These active deployments demonstrate that Direct functions today as foundational
interoperability infrastructure supporting continuity of care and patient safety.

Removing § 170.315(h) would alter the incentive structure that supports uniform capability and
shared accountability at the interoperability interface layer. While Direct capabilities are broadly
deployed due to certification requirements, continued progress in utilization, usability, and
workflow integration has also been influenced by the expectation that these capabilities remain
core certified functionality. Changes to certification expectations may affect not only future
deployment decisions, but also the ongoing investment that supports active and effective use.
Although this change may reduce certification burden for certain developers, it likely will also
shift testing, validation, and integration responsibilities downstream to implementers, network
operators, and healthcare organizations. Such burden relocation risks increasing overall system
costs, introducing duplicative validation efforts, and contributing to greater variability in
implementation and fragmentation over time, with potential downstream effects on care
coordination reliability. These effects may divert limited IT and clinical informatics resources
away from patient care support and quality improvement activities and may not fully achieve
HTI-5’s goal of reducing burden across the healthcare ecosystem.

During this transitional period toward FHIR-based interoperability, document-based push
exchange remains foundational for referrals, consults, public health reporting, electronic case
reporting, and care coordination. National exchange networks, including TEFCA participants and
DirectTrust-affiliated organizations, continue to rely on consistent document production and
transport capabilities. Maintaining stable expectations at the interface layer remains important
while broad, cross-organizational FHIR-based exchange between independent entities has not
yet reached operational maturity in the market.

Copyright 2026 by DirectTrust, All Rights Reserved | 1629 K Street NW, Suite 300 | Washington, DC 20006 | DirectTrust.org | Page 13
Direct Secure Messaging is payload agnostic and capable of securely transporting structured
documents, discrete data collections, and FHIR resources. In practice, it is already being used to
carry structured data and workflow-related metadata in hybrid transport models. For many
application developers, Direct remains the only broadly available pathway to transmit structured
information into Certified Electronic Health Record Technology without requiring proprietary
integration, as cross-organizational FHIR-based write capability remains limited almost
exclusively to custom integrations by Business Associates. This flexibility allows Direct to
complement API-based interoperability efforts and provides a practical mechanism for under-
resourced and partially digitized organizations to participate in evolving exchange models
without requiring immediate FHIR server-to-server write capability.

Clinical and Operational Perspectives

The most consistent feedback from clinicians and implementers centered on predictability and
assurance.

Certification today provides a practical guarantee that any provider using Certified Electronic
Health Record Technology can send a Direct message to another certified system without
custom negotiation or proprietary integration.

Several stakeholders described this assurance in direct terms:

       “We will no longer have a guarantee that I can send a Direct message to every provider that I
       need to. I am concerned that over time EHRs may take away the non-required components that
       allow for exchange of data, proper clinical documentation and even some security features.”
        — Deborah Young, Signature Medical Group

Practicing clinicians emphasized daily reliance:

       “There’s not a day in my practice that goes by where I am not receiving or sending information
       via Direct messages.”

Health information exchange leaders underscored the importance of push in a landscape
increasingly focused on pull:

       “Data exchange needs to come in two forms: push and pull. We have many avenues for pull, but
       as far as I know the only broad trusted platform for push is Direct.”

State and regional exchange leaders echoed concerns that removing certification may shift
burden rather than reduce it:

Copyright 2026 by DirectTrust, All Rights Reserved | 1629 K Street NW, Suite 300 | Washington, DC 20006 | DirectTrust.org | Page 14
 “Industry standards drive innovation and efficiency; federal assistance is needed to support
adoption. If the intent is to reduce burden, removing standards and certifications will increase
burden rather than reduce it. Gaps in data quality and integrity due to minimal standards
guidance will undermine trust. The EHR is the engine of the organization. If an EHR vendor
changes standards or falls behind, the barrier to change is high for the practice or hospital. It is a
huge capital expenditure where organizations cannot easily rip and replace. Current
requirements set a minimal technology base that supports interoperability.”
— Katherine Lusk, Texas Health Services Authority

Similarly, exchange operators highlighted the operational clarity certification provides:

       “If the changes outlined in HTI-5 are made, the Mass HIway can no longer respond to the
       hundreds of inquiries per year from healthcare providers with, ‘If you have a Certified EHR, then
       you’re all set for health information exchange!’.”
       — Liz Reardon, Mass HIway

Implementation experts highlighted that certification has served not merely as a technical
requirement but as a catalyst for adoption:

       “Because Direct Secure Messaging is a required capability in certified EHR technology, it has
       consistently served as a practical lever to drive participation in health information exchange…
       Certification requirements are not merely technical specifications—they are adoption
       mechanisms.”
        — Dr. Lisa Moon, PhD, RN, LHIT

These perspectives reflect concern that removing certification expectations may weaken
consistency across certified systems, increase variation in exchange capabilities over time, and
prematurely reduce reliance on established push-based exchange mechanisms before mature,
market-wide alternatives are operational. They further suggest that conformance
responsibilities could shift from developers to providers and implementers, resulting in cost
redistribution rather than true burden reduction. Such shifts may increase fragmentation among
exchange partners and divert limited technical and clinical resources away from patient care
support and quality improvement.

§ 170.315(h)(1) – Direct Project

Section (h)(1) has ensured that Certified Electronic Health Record Technology supports the
Direct Standard and referenced Implementation Guides in a consistent manner. This has created
national interoperability expectations and lowered costs for providers, particularly those in
under-resourced and partially digitized environments.

Copyright 2026 by DirectTrust, All Rights Reserved | 1629 K Street NW, Suite 300 | Washington, DC 20006 | DirectTrust.org | Page 15
If this requirement is removed, potential consequences may include:

● Reduced incentives for new entrants to implement Direct as a standard capability.
● Increased variability in implementation depth and usability.
● Greater reliance on proprietary exchange mechanisms that increase costs and
fragmentation.
● Additional integration burden shifted to providers and network operators.

Certification has helped ensure that Direct functions as a predictable interface layer with shared
accountability across developers. Without this expectation, conformance assurance may
increasingly fall to providers and network operators, contributing to cost redistribution and
inconsistent implementation over time.

§ 170.315(h)(2) – Direct Project, Edge Protocol, and XDR/XDM

Section (h)(2) reinforces shared accountability by ensuring that transport requirements,
including Edge Protocol and XDR/XDM, are implemented consistently across participants in the
exchange ecosystem.

Removing this criterion may shift operational burden disproportionately to Health Information
Service Providers (HISPs) and healthcare organizations if EHR developers are no longer certified
to these transport expectations. The current framework distributes responsibility across the
interface.

In addition, the removal of all § 170.315(h) certification requirements may introduce uncertainty
regarding how certain network actors are categorized under existing regulatory and information
blocking frameworks.

Separately, certain accreditation and trust frameworks rely in part on certification artifacts and
testing evidence to support conformance assessment and ongoing accountability. The removal of
certification criteria may therefore require alternative mechanisms to maintain consistent
verification of transport conformance across the ecosystem.

Maintaining consistent transport expectations during this transitional period helps prevent
fragmentation across exchange partners and avoids shifting operational validation burdens to
healthcare organizations and intermediaries.

Recommendation:

DirectTrust strongly recommends retention of § 170.315(h)(1) and (h)(2) to preserve consistent,
shared accountability at the interoperability interface layer and to ensure that burden reduction,

Copyright 2026 by DirectTrust, All Rights Reserved | 1629 K Street NW, Suite 300 | Washington, DC 20006 | DirectTrust.org | Page 16
when evaluated across the full healthcare ecosystem, is achieved at the system level, not
redistributed across providers and network operators.

Certification has functioned as both a conformance mechanism and an adoption catalyst.
Maintaining these criteria during the transitional period towards more API-based
interoperability will help preserve consistency, patient safety, and cost-effective exchange.

If ASTP/ONC determines that full federal testing infrastructure cannot be sustained, we
encourage adoption of alternative accountability mechanisms that preserve uniform
implementation while reducing administrative overhead, which could include:

● Permit evidence of conformance through independent third-party testing programs.
● Allow structured attestation supported by documented external validation against the
Direct Standard and referenced Implementation Guides.
● Consider retaining Direct transport capabilities as a required or optional certified
pathway within interoperability-focused certification modules like (b)(1), rather than
eliminating them entirely.
● Consider recognition of Direct Secure Messaging as an optional, complementary
transport pathway within TEFCA-aligned exchange models during the transition to
mature FHIR-based write exchange.

These approaches would reduce federal operational burden while preserving accountability and
interoperability continuity.

Direct Secure Messaging remains a widely deployed and valuable interoperability mechanism.
Certification has played a significant role in promoting its uniform implementation, broad
accessibility, and cost-effective use across the ecosystem. As modernization efforts advance, a
deliberate and structured transition strategy that preserves consistent accountability at the
interface layer will best support innovation while maintaining interoperability stability and
avoiding unnecessary cost redistribution or fragmentation.

§ 170.315(d) – Privacy and Security Certification Criteria (Proposed Removal)

DirectTrust, and prior to its merger into DirectTrust, the Electronic Health Network
Accreditation Commission (EHNAC), have consistently engaged with the ASTP/ONC, the HHS
Office of Civil Rights (OCR), and the Centers for Medicare & Medicaid Services (CMS) on the
importance of maintaining clear, enforceable expectations for cybersecurity resilience across the
healthcare ecosystem. These expectations must apply not only to healthcare organizations and
their Business Associates, but also to suppliers of CEHRT, which serve as stewards of vast
volumes of Electronic Health Information.

Copyright 2026 by DirectTrust, All Rights Reserved | 1629 K Street NW, Suite 300 | Washington, DC 20006 | DirectTrust.org | Page 17
The health sector remains a primary target for cybersecurity attacks, including intrusion,
ransomware, data exfiltration, and nation-state activity. Threat actors, both domestic and
international, continue to exploit variability in security implementation across the industry. The
HIPAA Privacy and Security Rules provide the foundational regulatory framework for
safeguarding protected health information and are incorporated into independent assessments
under recognized cybersecurity frameworks, including those operated by DirectTrust/EHNAC
and HITRUST. However, HIPAA establishes a risk-based floor; it does not specify detailed,
product-level technical conformance requirements.

The proposed removal of all criteria from § 170.315(d) in the proposed rule, coupled with the
unfinalized HIPAA Security Rule update proposals in the “HIPAA Security Rule Notice of Proposed
Rulemaking to Strengthen Cybersecurity for Electronic Protected Health Information,” will create a
period during which certified health IT developers may no longer be subject to consistent,
product-level security expectations through the Certification Program. While HTI-5 suggests
that flexibility and deregulatory relief are warranted, eliminating these criteria in their entirety
risks weakening the baseline assurance currently embedded in certified health IT.

It may be true that some healthcare organizations will want more flexibility about how they will
deploy tools satisfying these criteria. However, in point of fact, the existing rule already provides
this flexibility. Under-resourced providers, particularly rural and small practices that rely entirely
on cloud-based EHR systems, depend heavily on certified functionality to deliver core security
capabilities. When certification no longer establishes these expectations, responsibility shifts
downstream to organizations least equipped to evaluate or negotiate for those protections. In
this context, burden reduction may become burden relocation. Certification criteria also
provide an objective baseline that purchasers, particularly small and rural providers, rely upon
when selecting and contracting for certified systems. Without this baseline, negotiating for
security protections becomes more complex and uneven.

Multi-factor authentication (MFA) illustrates this concern. While large health systems have
made progress in enterprise-wide deployment, industry data show that universal MFA
implementation across all systems remains limited. Retaining MFA within certification helps
close a real and measurable gap, particularly for organizations that lack sophisticated internal
security infrastructure.

HTI-5 also notes that some stakeholders have experienced confusion regarding overlapping
regulatory obligations, and what they will or will not inherit from the certifications CEHRT
suppliers obtain. However, the privacy and security criteria within CEHRT have historically
served an important complementary function: establishing product-level expectations that

Copyright 2026 by DirectTrust, All Rights Reserved | 1629 K Street NW, Suite 300 | Washington, DC 20006 | DirectTrust.org | Page 18
support consistent implementation of HIPAA obligations in practice. Together, these
frameworks create a meaningful floor for patient data protection.

The deregulatory goals of HTI-5 also need to take into account that while there is widespread
interest in modernizing the HIPAA Security Rule, any change to it would likely be an increase in
regulatory burden for Covered Entities and Business Associates. Removing CEHRT-related
expectations now, in advance of any finalized Security Rule changes, risks creating a regulatory
gap during a period of heightened cybersecurity threat. Requirements governing the handling of
EHI must exist in regulation somewhere and should appropriately apply to those entities that
design and control core clinical data systems.

Accordingly, DirectTrust does not recommend retaining all current § 170.315(d) criteria without
refinement. However, we believe a targeted approach is warranted.

Recommendation on Specific Proposals Related to Privacy and Security

DirectTrust recommends retaining the sub-set of requirements in § 170.315(d) that either:

1.  Are not explicitly requirements of the currently enforced HIPAA Security Rule or;
2.  Cannot be reasonably replaced by enterprise-level “bolt-on” security solutions.

Criteria Not Explicitly Mandated Under Current HIPAA Security Rule:

● § 170.315(d)(13) Multi-factor authentication
MFA is not explicitly named as a required control under the current HIPAA Security Rule.
Retaining it within certification closes a significant and persistent implementation gap.
● § 170.315(d)(12) Encrypt authentication credentials
Credential protection is not consistently enforced in practice absent product-level
conformance expectations.

Criteria That Require Native Application-Level Capabilities:

● § 170.315(d)(2) Auditable events and tamper-resistance
Requires generation and protection of audit logs within the certified module in ways that
cannot be fully substituted by downstream security information and event management
solutions.
● § 170.315(d)(3) Audit reports
Producing meaningful, user-accessible audit reports is application functionality, not
merely log collection.

Copyright 2026 by DirectTrust, All Rights Reserved | 1629 K Street NW, Suite 300 | Washington, DC 20006 | DirectTrust.org | Page 19
 ● § 170.315(d)(4) Amendments
Involves workflow and record-linkage functionality that cannot be externalized without
loss of integrity.
● § 170.315(d)(10) Auditing actions on health information
Requires domain-aware logging of actions taken within the health record.
● § 170.315(d)(11) Accounting of disclosures
Requires record-level tracking logic embedded in the application.

DirectTrust believes the remaining § 170.315(d) criteria (i.e. those criteria not mentioned above)
represent comparatively lower risk for removal and could be evaluated for deregulatory relief
consistent with HTI-5’s objectives.

Standards and Implementation Specifications (§ 170.202 and related sections)

We appreciate that ASTP/ONC does not propose to remove the Direct Project transport
standard at § 170.202(a)(2), even while proposing removal of related certification criteria.
Retaining this standard in regulation is important to preserve national alignment and continuity
across existing exchange networks.

However, we are concerned that retaining the Standard while removing associated certification
criteria may create market ambiguity. Standards alone do not ensure consistent implementation.
Certification and testing are the mechanisms that make standards interoperable in practice,
particularly for new market entrants.

Recommendation:

If ASTP/ONC finalizes removal of the Direct-related certification criteria, the agency should:

● Clearly articulate the ongoing role of the Direct transport standard in national
interoperability policy; and
● Consider establishing a functional certification expectation for secure transmission of
structured clinical documents, without being prescriptive as to transport, so that core
exchange capabilities remain demonstrable and reliable.

This approach would preserve flexibility while maintaining the stability of production-scale push-
based exchange relied upon by providers, public health agencies, and patients.

Copyright 2026 by DirectTrust, All Rights Reserved | 1629 K Street NW, Suite 300 | Washington, DC 20006 | DirectTrust.org | Page 20
Conditions and Maintenance of Certification (§ 170.400–170.406)

We recognize ASTP/ONC’s intent to reduce burden through conforming edits and by narrowing
certain Conditions and Maintenance of Certification requirements, including real world testing.

Recommendation:

To the extent that certification criteria for transitions of care, reconciliation, public health
reporting, and Direct-related capabilities are removed or revised, we recommend that
ASTP/ONC consider retaining scaled accountability mechanisms for high-impact exchange
functions. These could include:

● Targeted attestations of continued support for secure document exchange capabilities;
● Limited, risk-based real world testing for exchange functions that remain widely relied
upon; or
● Documentation of conformance to recognized standards or independent testing
programs.

Removing certification testing without an alternative accountability mechanism may reduce
consistency across implementations and create variability in capabilities that are foundational to
care coordination, public health response, and patient safety. These exchange functions are
currently operational and widely relied upon across the ecosystem. In the absence of a
demonstrated, market-wide alternative that ensures comparable consistency and reliability, a
calibrated approach can reduce burden while preserving confidence in critical exchange
infrastructure.

Comments on Proposed Revisions to Information Blocking Regulations

We support efforts to refine the information blocking regulations to promote electronic health
information access, exchange, and use, including clarifying that automated and AI-enabled access
and use are within scope.

However, as ASTP/ONC reduces certification requirements for certain exchange capabilities, it
is important to ensure alignment between what certified health IT is required to support and
what actors may be obligated to provide under the information blocking framework. Actors
should not face enforcement risk or effective regulatory obligation to support exchange
modalities that certification no longer requires developers to maintain.

Recommendation:

Copyright 2026 by DirectTrust, All Rights Reserved | 1629 K Street NW, Suite 300 | Washington, DC 20006 | DirectTrust.org | Page 21
We therefore recommend that ASTP/ONC:

● Ensure that revisions to the infeasibility and manner exceptions preserve appropriate
flexibility for actors operating in good faith within technical and security constraints; and
● Clarify how participation in nationally recognized exchange frameworks will be evaluated
in determining compliance with information blocking requirements.

Alignment between certification policy and information blocking enforcement will promote
consistency, reduce uncertainty, and better support the shared goal of improving electronic
health information access, exchange, and use.

Recommended Path Forward and Conclusion

The HTI-5 Proposed Rule reflects a significant moment in the evolution of national
interoperability policy. We support ASTP/ONC’s objective to modernize the Certification
Program, reduce unnecessary burden, and accelerate the transition toward API-based, FHIR-
enabled exchange.

At the same time, interoperability infrastructure functions as critical public health and clinical
safety infrastructure. Certified interface capabilities, secure document generation, reconciliation
functionality, and foundational privacy and security controls have served as the implementation
floor that transformed standards into reliable, production-scale exchange across vendors and
care settings. These capabilities are deeply embedded in federal programs, rural and community
provider workflows, public health reporting, and daily clinical operations.

Modernization does not require abrupt removal of that foundation. Rather, a calibrated
transition strategy can reduce prescriptiveness while preserving consistent, accountable
implementation of exchange mechanisms that remain widely relied upon. Burden reduction
should be evaluated at the ecosystem level. Removing certification requirements in one segment
should not result in redistributed operational, validation, or security burdens falling
disproportionately on providers, network operators, and public health agencies.

We therefore encourage ASTP/ONC to:

● Retain core send and receive capabilities for standards-conformant document exchange
within a modernized § 170.315(b)(1);
● Preserve a functional reconciliation and incorporation requirement under §
170.315(b)(2);

Copyright 2026 by DirectTrust, All Rights Reserved | 1629 K Street NW, Suite 300 | Washington, DC 20006 | DirectTrust.org | Page 22
 ● Maintain shared accountability for Direct transport capabilities during the transition to
mature cross-organizational FHIR write exchange;
● Adopt a targeted approach to privacy and security criteria that preserves high-impact,
application-level safeguards; and
● Ensure alignment between certification requirements and information blocking
obligations.

If federal conformance testing infrastructure is reduced, alternative accountability mechanisms
such as independent third-party validation, structured attestation, or modular certification
pathways can preserve consistent implementation while advancing deregulatory goals.

Direct Secure Messaging and document-based exchange remain operational, widely deployed,
and relied upon today. FHIR-based interoperability continues to advance and will play an
increasingly central role in the future. A deliberate transition that preserves stability while
enabling innovation will best support patients, clinicians, public health agencies, and technology
developers alike.

DirectTrust appreciates the opportunity to provide input informed by extensive community
engagement. We stand ready to work collaboratively with ASTP/ONC and ecosystem
stakeholders to ensure that modernization efforts strengthen, rather than destabilize, the trust
infrastructure that supports national health data exchange.

We appreciate your consideration of our feedback and recommendations.

Sincerely,

Scott Stuewe

President and CEO, DirectTrust

Copyright 2026 by DirectTrust, All Rights Reserved | 1629 K Street NW, Suite 300 | Washington, DC 20006 | DirectTrust.org | Page 23

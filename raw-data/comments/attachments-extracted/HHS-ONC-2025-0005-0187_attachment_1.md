# HHS-ONC-2025-0005-0187 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0187/attachment_1.pdf

---

February 27, 2026

The Honorable Thomas Keane, MD, MBA
Assistant Secretary for Technology Policy
National Coordinator for Health Information Technology
U.S. Department of Health and Human Services
Mary E. Switzer Building
330 C Street, SW
Washington, DC 20201

RE: Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions To Unleash
Prosperity (RIN 0955-AA09)

Dear Assistant Secretary Keane:

Amazon.com, Inc. (Amazon) appreciates the opportunity to comment on proposals from the Assistant
Secretary for Technology Policy/Office of the National Coordinator for Health Information Technology
(ASTP/ONC) to improve health data interoperability and accelerate the use of artificial intelligence (AI) in
patient care.

As a customer-obsessed company, we believe patients and providers benefit from healthcare that is
convenient, accessible, and affordable. Efforts that advance a seamless, secure, and patient-centered
digital health infrastructure will improve patients’ longitudinal engagement in their care journey,
resulting in improved health outcomes and reduced healthcare expenditures. We are dedicated to
making our customers’ and patients’ lives better while also establishing and implementing the necessary
safeguards to protect them. Amazon has a long-standing track record of protecting customer data. For
example, One Medical and Amazon Pharmacy protect health information with HIPAA-compliant privacy
and security practices to keep data safe and secure. Our services go through rigorous security testing,
and we maintain strict administrative, physical, and technical safeguards to protect our systems and
customer information, such as through encryption technology and controls over data access.

Across our comments below, we encourage ASTP/ONC to advance policies that help streamline
healthcare access and delivery, allow patients to control their care journey, maximize providers’ ability
to deliver superior care, and enable public- and private-sector innovation.

Revision to “access” and “use” definitions to promote agentic AI
We see the transformational value of AI coming from patient-centric agents that can integrate across
technology systems, healthcare organizations, life science companies, and payors. Clinical trials, chronic
condition management, and referrals all require bi-directional data sharing; with greater data
interoperability, AI agents could help patients and clinicians as a care management assistant to increase
satisfaction and outcomes while lowering costs.

Therefore, we support the proposal to amend the definitions of “access” and “use” to explicitly include
automation. This clarification will enhance the ability for patients and health organizations to use agents
and other autonomous technologies to securely access health data. To further accelerate use of agents,
we also encourage ASTP/ONC to similarly amend the definition of “exchange” to include autonomous
agents.

                                                Page 1 of 4

Removal of source attribute requirements for AI-enabled tools
We support the removal of requirements to make source attribute information (e.g., details on training
data sets) available for predictive Decision Support Interventions (DSIs). As ASTP/ONC notes in the
proposed rule, clinicians and end-users often lack the time and technical knowledge to evaluate the
relevance of source attribute information.

AI tools are already making it easier for clinicians to chart patient encounters and quickly consult
relevant medical journals, improving both efficiency and quality of care. While we believe in AI
transparency, the requirements to display source attributes within the EHR itself are burdensome and
not helpful to providers in their day-to-day use of these tools.

When fostering transparency, we caution against the disclosure of proprietary information, such
as training data, which is a confidential commercial secret with significant competitive value. If
regulators require model developers to disclose information about such data, it may foreclose the
developer’s ability to claim trade secret protection under the law. These concerns are only amplified if
organizations seek to use larger models, like foundation models, which are trained on a central corpus
of internet scale data and are intended to be used by many customers across many use cases. Training
data disclosure requirements are therefore impractical and not well suited to evaluating
appropriateness for use. Training datasets vary based on many factors, including size, demographic
makeup (the number and type of groups), quality (amount of confounding variation, fit for purpose), the
types and quality of labeling, and other factors. Simply because a model has been trained on certain
data does not mean it will perform as needed in a specific use case.

Especially for high-risk healthcare use cases, rather than focusing on training data, testing AI-based
tools in the intended environment with data reflecting the intended population is the
scientifically appropriate and industry-standard mechanism that provides the best indication of
performance. In lieu of the DSI requirements, ASTP/ONC should consider guidance to health systems on
how to evaluate the performance of technologies in their intended settings, much like how the agency
led the development of the Safety Assurance Factors for Electronic Health Record Resilience (SAFER)
Guides for evaluation of EHR performance in healthcare organizations.

We also encourage ASTP/ONC to learn from and disseminate industry-standard approaches to AI
transparency—such as the AI Service Cards released by AWS. These AI Service Cards provide AWS
customers with a single source to find information on intended use cases and limitations, responsible AI
design choices, and deployment and performance optimization best practices for our AI services. To
support our customers to responsibly deploy our AI services, we provide information across eight key
dimensions: Controllability, Veracity & Robustness, Explainability, Privacy & Security, Safety,
Transparency, Fairness, and Governance.

Elimination of privacy and security certification requirements
We support the removal of privacy and security certification criteria under 45 C.F.R. 170.315(d), rather
than the alternative proposal to retain certain requirements. EHR developers should be expected to
maintain the privacy and security of electronic health information in accordance with the Health
Insurance and Portability Accountability Act (HIPAA) Security Rule, which provides appropriate and
comprehensive standards. The current certification criteria, particularly those related to audit reports
and auditable events, are more prescriptive than HIPAA requirements and create unnecessary
development complexity without corresponding security benefits. We also caution against any potential

                                              Page 2 of 4

new regulations that would make the requirements for certified APIs more prescriptive as this would be
counterproductive to the goal of streamlining certification while maintaining robust security practices.

We encourage ASTP/ONC to provide guidance to health systems on how to best mitigate the increasing
cybercrime threats that target the healthcare industry.

Specifically, use of cloud services may help organizations better mitigate and respond to security
incidents than if they manage their own data centers. For example, the cloud can eliminate the risk of
orphan or hidden servers, and help organizations better monitor, detect, and shut down security
breaches—further protecting patient health information. We also support customers in detecting
security vulnerabilities and addressing them. The AWS Well-Architected Framework, offered at no-cost,
helps customers apply best practices and current recommendations in the design, delivery, and
maintenance of secure AWS workloads. The AWS Marketplace also offers thousands of security
solutions that help customers deploy a multilayered defense.

As health systems seek to reenforce their cyber defenses, awareness and visibility to the resources
offered by cloud service providers can help address future threats.

Simplification with a focus on FHIR
We appreciate ASTP/ONC’s continued focus on the use of standard application programming interfaces
(APIs)—specifically, Fast Healthcare Interoperability Resources—to promote interoperability. Amazon
has long supported and enabled interoperability, including as an early adopter in the administration’s
Health Technology Ecosystem.

We support ASTP/ONC’s retaining FHIR-based interoperability as part of certification as advances in
technology continue to increase the utility of data standardization. For example, AWS Healthlake
leverages FHIR to enable healthcare organizations to securely import large volumes of health data-
including medical reports or patient notes-into a queryable, standardized format at petabyte scale.

However, we have identified multiple opportunities for ASTP/ONC to further accelerate the benefits of
FHIR. First, key data elements relevant for patients and clinicians are often not shared in FHIR.
Specifically, FHIR certification currently lacks the ability for patients and clinicians to access links to
download medical images—including X-Rays and MRI scans. Absent this capability, patients must often
request a CD of their images and physically take them to another provider for a second opinion. And,
when trying to access their own images at home, patients may not have the necessary hardware in their
computer capable of inputting CDs. When patients and clinicians lack access to images, they may
unnecessarily repeat imaging procedures-increasing avoidable costs on patients and the healthcare
system writ large. While ASTP/ONC recently withdrew a 2024 proposed rule that would make images
available via an electronic link, we encourage the agency to consider alternative approaches to enabling
access to this data. We would welcome an opportunity to collaborate on spurring electronic access to
images for patients and clinicians.

Second, interoperability regulations currently lack support for standard, electronic prior authorization
for drugs. We encourage ASTP/ONC to collaborate with the Centers for Medicare & Medicaid Services to
identify and implement electronic standards that further improve the ease with which patients and
providers can access the true out-of-pocket costs for patients, see various pricing options (including drug
discount programs), and adjudicate prior authorization requirements. Implementing these capabilities
will address opaque cost and access requirements that, far too often, force patients to walk away

                                                Page 3 of 4

empty-handed from the pharmacy counter. Optimally, patient-and provider-facing real-time
prescription benefit checks would display all key coverage-specific details on a medication, such as
pricing, prior authorization requirements, or therapeutic equivalents.

Information blocking exceptions
Amazon supports ASTP's proposal to narrow the Manner Exception Exhausted Condition under 45 C.F.R.
171.204(a)(4) rather than eliminating it entirely. Retaining a modified version of this exception provides
necessary clarity for covered actors while preventing exploitation of ambiguities in the broader Manner
Exception. Regarding the proposed modifications to the Manner Exception, we recommend that ASTP
require any contract or agreement for access, exchange, or use of electronic health information to meet
the Fees and Licensing Exceptions rather than relying solely on the proposed conditions of market rate,
non-adhesion contracts, and absence of unconscionable terms. The latter conditions may be difficult to
enforce and interpret, as "market rate" is challenging to quantify and covered actors could present
boilerplate terms without technically creating contracts of adhesion. Requiring compliance with the Fees
or Licensing Exceptions would provide clearer guardrails and prevent covered actors from imposing
revenue-sharing requirements or other barriers that impede interoperability.

Thank you for your consideration of our recommendations, and we look forward to working with ASTP
on accelerating interoperability and the use of AI to improve patient care.

                                               Page 4 of 4

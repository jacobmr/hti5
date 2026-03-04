# HHS-ONC-2025-0005-0182 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0182/attachment_1.pdf

---

February 27, 2026

Submitted electronically via https://www.regulations.gov

Dr. Thomas Keane
Assistant Secretary for Technology Policy and National Coordinator for Health Information Technology
330 C St. SW, Floor 7
Washington, D.C. 20201

Re: Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions To Unleash Prosperity
(RIN 0955-AA09)

Dear Assistant Secretary Keane:

MRO Corporation (MRO) appreciates the opportunity to provide comments in response to the Health
Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions To Unleash Prosperity (HTI-5)
proposed rule. MRO is the single source for smarter data™. Creating a smarter, more connected network
where clinical data continuously learns, adapts, and accelerates performance. We unlock clinical data from
silos, mobilizing its full value through trusted, precise, and purposeful connections— empowering every
partner in the healthcare ecosystem to act with clarity, innovate with confidence, and deliver better care at
greater speed. MRO works on behalf of providers to provide secure compliant clinical data exchange to
payers and other healthcare data consumers while also unlocking its value through AI-enabled
abstraction, clinical expertise, and insights. KLAS Research has named MRO the #1 provider of ROI
services for twelve years, reflecting direct client feedback and reviews. We are connected to over 2,000
hospitals, 7,000 practices, 170,000 individual practitioners, 150+ health IT systems, and 200 payers.

MRO appreciates ASTP/ONC’s continued leadership in advancing interoperability through HTI-5. We
support the agency’s focus on advancing FHIR-based APIs, modernizing the ONC Health IT Certification
Program, and efforts to reduce unnecessary burden on the health care ecosystem. As a clinical data
management company, MRO performs an essential role for healthcare providers to facilitate the Health
Insurance Portability and Accountability Act (HIPAA)-compliant release of health information to patients
and authorized requesters, navigating the complex and expanding digital environment. MRO appreciates
ASTP/ONC leadership and shares the goals of the proposed rule.

MRO is committed to protecting the privacy and security of patient data and providing secure, compliant,
and efficient patient access to health information. We support efforts to improve care quality and patient
experience through innovation and enhanced interoperability. However, increased data sharing must not
compromise privacy. Patient, provider, and payer trust in the security and privacy of health information is
paramount to achieving enhanced data sharing and interoperability across the healthcare ecosystem.
Without strong oversight, APIs can expose data beyond patient intent or awareness. At the same time,
privacy and security concerns should not be used to unnecessarily block the flow of information. We
believe that APIs should be enabled with safeguards that enforce HIPAA protections.

Certification Program Proposals
America's FHIR-Forward Future
We strongly support ASTP/ONC’s increasing emphasis on FHIR-based interoperability and the three
goals outlined in the proposed rule to (1) enhance automation and API performance; (2) move beyond

                                  MRO ← Q-Centrix • MediCopy • FIGmd • Cobius
                                           mrocorp.com • (610) 994-7500

read-only interactions; and (3) expand the scope of data available to support clinical efficiency, patient-
centered care, and timely reporting use cases. As you advance the FHIR-forward future we would
encourage consideration of the following:

    •   Prioritize Bi-Directional Capabilities: Unlocking the full potential of a FHIR-enabled ecosystem
        requires prioritizing capabilities that advance bi-directional standards-based exchange between
        certified health IT modules and third-party systems, such as FHIR Subscriptions and CDS Hooks.
        Adopting these modern interoperability standards would provide better scalability and precision in
        interoperability by notifying third-party systems of important events for a patient, thus reducing the
        amount of repetitive polling that app developers must bake into their products and allowing the
        industry to accelerate its transition away from cumbersome HL7 v2 interfaces.
    •   Advance Bulk FHIR: The current Bulk FHIR capabilities available in the market are generally not
        meeting the mark. Bulk FHIR capabilities working at scale would open the door to key use cases
        like population health, data analytics, registries, and quality reporting. However, key technical
        limitations hinder the effectiveness of bulk FHIR including:
             o Today, Bulk FHIR must be associated with a static group of patients that is defined in
                  advance. There is little opportunity for managing a dynamic list of patients and pulling
                  data for it over time. Developers must contact the EHR or provider to establish or update
                  a group.
             o EHRs are often limited in the amount of data that their Bulk FHIR exports can support,
                  making scalability very poor and the usefulness of Bulk FHIR relatively weak. If the
                  amount of data that is allowed to be transmitted remains low, then the purpose of “bulk”
                  data transfers will not be realized.
             o To meet privacy and security requirements Bulk FHIR APIs must be developed with
                  robust options for filtering and precisely capturing only the minimum necessary
                  information.
    •   Lack of Consistency: Despite the certification requirements, we see a lack of consistency in the
        implementation of FHIR in the market. While a vendor has met the ONC Health IT Certification
        Program requirement trying to use their certified module in production often requires a significant
        amount of one-off work with the vendor. Even those vendors that pass the certification can often
        have persistent production-level challenges such time-outs, limitations on number of FHIR calls
        that can be supported, etc. All of these inconsistencies make certification a necessary but
        insufficient requirement for health IT vendors.
    •   Ensure Support for Legacy Standards During the Long Transition to FHIR: Noting that not
        all EHRs are created equal and health system IT departments are strapped, we support the
        continued support of legacy standards as the market moves to FHIR. For some data exchange,
        prevailing methods such as HL7 v2 or data formats such as C-CDA will remain the order of the
        day. As a result, we encourage continued support of these legacy standards even as health IT
        vendors are incentivized to adopt FHIR.

Program Changes
ASTP/ONC proposes a number of significant deregulatory actions to streamline and improve the ONC
Health IT Certification Program including: 1) removing 34 of the 60 criteria, and 2) making several
enforcement discretion policies announced in 2025 permanent, including reducing the scope of the Real
World Testing Requirements. We appreciate these deregulatory proposals and generally agree they will
reduce compliance and administrative burden on certified health IT developers and allowing them to
prioritize customer needs.

                                MRO ← Q-Centrix • MediCopy • FIGmd • Cobius
                                          mrocorp.com • (610) 994-7500

In particular, we are supportive of the reduction in scope of criteria covered by the Real World Testing
requirements so they only apply to FHIR-based API criteria. We believe this approach aligns well with the
FHIR Forward Future and will allow ASTP/ONC to increase the rigor of Real World Testing to reduce the
inconsistency we see in how certified health IT developers FHIR-based APIs work in production.

As you reset the baseline for the ONC Health IT Certification Program you should ensure any changes do
not reduce the privacy and security capabilities of Certified Health IT Modules. Without seeing future
proposals, it is difficult to gauge if the model shifting from stand-alone privacy and security criteria to
criteria with fit for purpose privacy and security functionality built in will strike the right balance.

Information Blocking
We support ASTP/ONC’s overall approach in HTI-5 to clarify the Information Blocking framework,
eliminate potential unintended loopholes, and remove unnecessary exceptions. These proposals reflect a
thoughtful effort to modernize the regulation in ways that improve clarity and workability for all actors
involved in health information exchange.

We concur with the revised definitions of “access” and “use” that clarify that automation technologies
including robotic process automation and autonomous AI systems are covered under Information
Blocking and appreciate the added clarity this provides the industry.

We agree with the proposal to remove the TEFCA Manner Exception. Similar to ASTP/ONC we have
seen in the market that the exception was creating stakeholder confusion and was not furthering its
intended purpose.

In addition, we appreciate ASTP/ONC’s maintenance of the Fees Exception, which allows a fee to be
based on all costs reasonably incurred to process a medical records release request provided that the fee
is not based in part on electronic access to the information. The Fees Exception thus allows a cost-based
fee plus a reasonable profit margin to fulfill a request for electronic health information. The definition of
electronic access specifically excludes access methods that require manual effort to fulfill a request. This
recognizes that despite the many advances made in health data exchange, including the availability of
patient portals, that medical records release continues to require significant manual effort. Release of
information is not a no-cost endeavor. The Fees Exception specifically allows for recovery of costs
associated with reviewing a request and searching for, segregating, retrieving, and organizing electronic
health information responsive to the request.

Conclusion
We appreciate ASTP/ONC’s efforts in HTI-5 to reduce burden, increase flexibility, unlock innovation, and
set the stage to refocus the ONC Health IT Certification Program on FHIR. We are supportive of this
direction. As reforms shift the ONC Health IT Certification Program, this is an opportunity to continue the
ongoing journey of ensuring the requirements of the program lead to interoperability in the real world not
just in white glove testing lab settings. Lasty, maintaining patient and provider trust in the privacy and
security of data sharing is essential to the success of ASTP/ONC’s various interoperability priorities. As
you continue to evolve, the ONC Health IT Certification Program and other initiatives ensuring patients
and providers do not lose faith in the system is essential to our shared success.

If you have any questions about our responses, or need any additional information, please do not hesitate
to contact me or Adrienne Morrell, Vice President, Government Affairs amorrell@mrocorp.com. We look
forward to continuing to partner with ASTP/ONC on these important efforts to improve interoperability,
patient access, and to ensure the privacy and security of health information.

                                MRO ← Q-Centrix • MediCopy • FIGmd • Cobius
                                          mrocorp.com • (610) 994-7500

Sincerely,

Anthony J. Murray, CISSP
Chief Interoperability Officer
MRO Corporation

                                 MRO ← Q-Centrix • MediCopy • FIGmd • Cobius
                                          mrocorp.com • (610) 994-7500

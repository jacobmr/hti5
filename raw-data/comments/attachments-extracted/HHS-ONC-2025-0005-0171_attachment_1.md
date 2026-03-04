# HHS-ONC-2025-0005-0171 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0171/attachment_1.pdf

---

February 27, 2026

Dr. Thomas Keane
Assistant Secretary for Technology Policy
Department of Health & Human Services
Mary E. Switzer Building, Mail Stop 7033A
330 C Street SW
Washington, DC 20201

        RE:      Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory
                 Actions to Unleash Prosperity, Proposed Rule

Dear Dr. Keane,

       The American Clinical Laboratory Association (ACLA) is pleased to submit these

comments to the Office of the National Coordinator (ONC) on the above-referenced proposed
rule.1 ACLA is the national trade association representing leading laboratories that deliver
essential diagnostic health information to patients and providers by advocating for policies that
expand access to the highest quality clinical laboratory services, improve patient outcomes, and
advance the next generation of personalized care.

        Our comments focus on the following areas:
             •   Move to FHIR-based APIs
             •   Manner exception at 45 CFR § 171.301
             •   Removals and revisions of certification criteria
             •   Electronic signatures on laboratory orders

        As the ONC noted in its report to Congress in late 2024, “there are many roadblocks today

to laboratory data interoperability. While there are federal and state policies related to laboratories
and their associated workflows, these do not currently cover all the components needed to solve
challenges and drive wider adoption of standards.”2 We are eager to continue working with the
ONC to update relevant standards and remove roadblocks to widespread integration of electronic
orders and results reporting for laboratory tests.

        A.       Move to FHIR-based APIs

       The ONC noted that the ASTP-ONC-related comments that were submitted in response

to a Request for Information on deregulation showed an “overwhelming demand to strengthen,
expand, and mandate the use of FHIR-based [application programming interfaces (APIs)].”3
While this is a laudable goal in some respects, we note that electronic health record (EHR)
systems used for placing orders for laboratory tests and receiving test results generally use HL7v2
messaging and content standards to interface with laboratory information systems (LISs).
Further, once EHRs transition to use of FHIR, the burden of converting existing interfaces to other
1 90 Fed. Reg. 60970 (Dec. 29, 2025).
2 Standards for Electronic Ordering and Reporting of Laboratory Test Results (Dec. 19, 2024), available at

https://www.govinfo.gov/content/pkg/CMR-HE1-00196380/pdf/CMR-HE1-00196380.pdf.
3 90 Fed. Reg. 60979.
ACLA Comments on HTI-5 Proposed Rule
page 2

standards like FHIR would be enormous, and as a practical matter, the burden will fall almost
exclusively on laboratories. HL7v2 is a “transactional” standard that is capable of handling the
data necessary to support high-volume clinical laboratory ordering and resulting. FHIR and C-
CDA currently are not designed for or capable of submitting orders for laboratory testing or
reporting test results. FHIR works for some types of transactions, but not for those that are core
to laboratory operations. C-CDA is not suitable for the high-volume transactional exchange
necessary for clinical laboratory orders and status changes, specimen details, “ask at order entry”
questions, and the like. ACLA would not support moving to FHIR-based laboratory data exchange
until the framework has matured to the point where it can meet the fundamental information-
sharing needs of laboratories, and until most EHR vendors and their users have adopted the
standard.

       B.      Manner exception

         The proposed revisions to the “manner exception” at 45 C.F.R. § 171.301 would state

explicitly that any contract or agreement related to the access, exchange, or use of electronic
health information (EHI): (1) must be at market rate; (2) must not be a contract of adhesion; and
(3) must not contain unconscionable terms. ACLA would like ONC to confirm that its proposed
revisions are not meant to override or negate longstanding policy articulated by the Department
of Health and Human Services Office of Inspector General (OIG) regarding laboratories bearing
the cost of interfacing LISs with EHR systems so that health care practitioners may place orders
for laboratory tests and receive test results from the laboratory.

        Laboratories typically bear the cost of establishing LIS interfaces to exchange laboratory

data electronically. When the OIG issued the final rule implementing the federal anti-kickback
statute EHR safe harbor, it said:

               We have long distinguished between free items and services that are
               integrally related to the offering provider’s or supplier’s services and those
               that are not…The donation of free access to an interface used only to
               transmit orders for the donor’s services and to receive the results of those
               services from the donor would be integrally related to the donor’s services.
               As such, the free access would have no independent value to the recipient
               apart from the services the donor provides and, therefore, would not
               implicate the anti-kickback statute.4

In reliance on this and other statements from the OIG, laboratories facilitate the electronic access
and exchange of laboratory information and bear the costs associated with creating and
maintaining LIS interfaces with EHR systems.

         ONC proposes to revise § 171.301(a)(2) to add a new subparagraph (iii) that would state,

in part, that any contract or agreement related to the access, exchange, or use of EHI “must be
at market rate,” meaning the value in an arm’s-length transaction, consistent with the general
market value of the subject transaction.5 While we understand that the purpose of the proposed
revision is to ensure that the “manner exception” is not abused by an actor who otherwise may
seek to charge excessive fees from a requestor of access, exchange, or use of EHI, as written,
there are other interpretations that could undermine laboratories’ course of conduct with respect
to providing LIS interfaces for health care providers at no charge. For example, a wellness app
4 78 Fed. Reg. 79202, 79210 (Dec. 27, 2013).
5 90 Fed. Reg. 61012.
ACLA Comments on HTI-5 Proposed Rule
page 3

developer that is not a covered entity may claim that the “market value” of an interface that
facilitates compiling an app user’s laboratory results is zero, since laboratories typically bear the
cost of creating interfaces for covered entity health care practitioners, and that charging a non-
covered entity any fee at all is excessive. Or, a regulatory body that is unfamiliar with the OIG’s
policy position could assume that a laboratory must charge a health care provider a fee for an LIS
interface.

          To clarify the intent of this proposed revision, ONC should amend the proposed language

for the new subparagraph (iii) at § 171.301(a)(2) to add the italicized text that follows: “Any
contract or agreement under which the actor and requestor agree to fulfill a request for access,
exchange, or use of EHI, and any license from the actor of interoperability elements used in
fulfilling the request in the manner requested: (A) must be at market rate, if a fee is charged;…”.

        C.        Removals and revisions of certification criteria

        ONC has identified certification criteria for removal or revision, in part because

stakeholders have voiced support for reducing administrative and financial burdens on providers
and technology developers.6 We urge ONC to be mindful of the unintended consequences of its
approach, such as reduced data quality or data completeness. Receiving less reliable patient data
will require laboratory staff to do more manual verification, phone calls to clarify orders, and delay
processing and reporting. If data must be “cleaned up” before it can be shared or exchanged,
then the deregulatory approach only would shift the administrative and financial burdens from
technology developers to laboratories and other health care entities, rather than mitigating those
burdens.

         As one example, ACLA is concerned that ONC proposes to remove the criterion for family

health history at § 170.315(a)(12).7 Currently certified EHR technology must enable a user to
record, change, and access a patient's family health history in accordance with the familial
concepts or expressions included in, at a minimum, the version of the standard in SNOMED CT®,
U.S. Edition. If the criterion is removed, laboratories may not receive important information that
they need to perform laboratory tests and return reliable results. Additionally, changes to EHR
certification may increase the cost of interface testing and certification that is required by
laboratory accreditation organization such as the College of American Pathologists (CAP). A
laboratory must perform and document verification of accurate data transmission before an
interface goes live. A system must maintain digital records that meet CAP's standards for
accuracy and traceability throughout all phases of testing. Without certification requirements
ensuring data and technology consistency across EHR vendors, we should expect to see an
increase in interface issues during certification. This effectively moves the cost maintenance from
EHR vendors to laboratories, since laboratories likely will need to update LISs to accommodate
deviations in interoperability standards. ACLA strongly encourages ONC to monitor data quality
and offer a pathway for new certification criteria in the event that data quality decreases.

      ACLA also is concerned that cancer case reporting has been removed from the criteria.

We urge ONC to restore it so that the burden of such reporting does not fall solely on laboratories.

        D.        Electronic signatures on laboratory orders

        An area that ONC should address is what constitutes an “electronic signature” on a

6 Id. at 60979.
7 Id. at 60982.
ACLA Comments on HTI-5 Proposed Rule
page 4

laboratory order. Per the Medicare Program Integrity Manual, a laboratory test order does not
have to be signed, but a laboratory does have to be able to show that the ordering clinician
intended to order a test.8 A laboratory cannot include a signature line on order in an X12 275
health care attachment because a clinical laboratory order does not contain a signature. To
support including an electronic signature as part of an electronic order, the HL7v2 standard would
have to be updated to enable it, as would the associated HL7 Version 2.5.1 Implementation
Guide9 and each LIS-EHR interface that currently exists.

         ONC and HHS should deem the submission of an electronic order through an EHR that

includes a password-protected log-in to be a signed laboratory order that provides relevant
evidence that the order was made by an authorized clinician. This also should be adequate to
demonstrate the clinician’s intent to order the test, such that further documentation is not required
to evidence intent to order. An HL7v2 message used to communicate a laboratory order includes
data that identifies the ordering practitioner, and it is possible to determine if that ordering
practitioner was authorized to place the order. This type of process has been in place for more
than a decade without concerns raised about the validity of such electronic orders or clinicians’
intent to submit such orders.

         Most laboratory test orders are transmitted electronically. ACLA, HL7, the Electronic

Health Record Association, and other stakeholders have made requests of ONC and CMS for
clarity on how an “electronic signature” on a test order could satisfy an auditor looking for a
clinician’s intent to order a test and the standards that would apply to an industry-developed
method for an electronic order to be signed. Various guidance documents state that signatures
may be “handwritten or electronic”. We urge the ONC and HHS to convene a meeting that
includes representatives of CMS, the CMS Clinical Laboratory Improvement Amendments (CLIA)
office, ACLA, HL7, the EHR Association, and other stakeholders to address standards for
electronic signatures on laboratory orders. A meeting would be a welcome start to resolving this
issue, but resolution will require a sustained effort and interest on the part of ONC and HHS.

                                           *   *   *   *    *

        We appreciate the opportunity to comment on the proposed rule.

                                               Sincerely,




                                               Joan Kegerize, Vice President
                                               Reimbursement and Scientific Affairs
                                               American Clinical Laboratory Association

8 Pub. No. 100-108, Ch. 3, Sec. 3.3.2.4.
9 Health Level Seven International (HL7). “HL7 Version 2.5.1 Implementation Guide: Laboratory Orders

from HER (LOI) Edition 5 - US Realm, available at
https://www.hl7.org/implement/standards/product_brief.cfm?product_id=152.

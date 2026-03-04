# HHS-ONC-2025-0005-0209 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0209/attachment_1.pdf

---

February 27, 2026

Assistant Secretary Thomas Keane, MD
Assistant Secretary for Technology Policy / Office of the National Coordinator for Health
Information Technology

Attention: Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions to
Unleash Prosperity

Mary E. Switzer Building, Mail Stop: 7033A,
330 C Street SW
Washington, DC 20201.

Cc: Michael Lipinski

Re: Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions to
Unleash Prosperity

Docket RIN 0955-AA09

Dear Assistant Secretary Keane,

This comment is by 1upHealth, a scalable serverless cloud data provider leveraging the power of
the FHIR data standard to combine claims and clinical data for analytics and APIs to change
behavior. We applaud the work of ASTP/ONC to enable modern APIs and power a digital health
economy giving patients apps of their choice. We appreciate the ongoing work of ASTP/ONC in
defining common data sets through the USCDI program potentially providing a stable base for
interoperability over many environments. We are encouraged by ASTP/ONCs work in reformoing
the certification rules to better allow for competition and innovation in electronic health records.
We are excited about the HTI5 proposed rule better aligning healthcare software with the APIs
powering the Internet and smart phones.

Certification Reform

EMR certification has likely led to significant consolidation and potential stagnation in the EMR
industry. While this is unlikely to be reversed in current EMR’s, deregulation can help with broader
digital innovation as it is likely future features of software used by patients and providers may be
quite different.

We support removal of areas such as family history, reconciliation, patient health information
capture and care plans which are either well-incorporated or did not meet clinician needs. Other

                       280 Summer St, Floor 7, Boston MA 02210 | 508-245-8558 | 1up.health

features such as audit support, “safety-enhanced” and “accessibility centered” design should be
decided by markets.

Security and privacy are critical in modern IT and ASTP should defer to the broader Internet where
industries such as defense and banking have far more technical security and privacy tools. We
support deferring to the Office of Civil Rights for security and privacy using somewhat more
functional requirements is a good approach. Removal of authentication, access controls,
disclosure audits and access audits will reduce conflict with overlapping regulations from OCR.

Quality measurement is also ripe for change. Bespoke EMR data fields should give way to FHIR-
based RESTful APIs. To encourage efficient API driven approaches to quality measurement,
ASTP should work with CMS to phase out HEDIS measure-based payments based on data
obtained from chart pulls or entirely hidden data streams such as non-public payer-provider
platforms with their anti-transparency designs. CMS could require any quality measurement data
to include metadata from the API used to count towards CMS payment programs. ASTP’s work
dismantling non-standard-based quality measurement is a solid starting point.

Overall, the most healthcare improvement within ASTP’s mandate is enablement of APIs to allow
the modern interconnected digital economy we have throughout the non-healthcare economy. A
functioning digital economy would allow continuous provision of health improvements rather than
relying on today's threadbare EMR-grounded episodic care. Major diseases such as hypertension,
diabetes, and obesity require continuous care and this requires highly functioning APIs. We
commend ASTP’s proposed removal of obsolete interoperability features such as VDT and
changes to public health electronic case reporting which is so inefficient there is not an adequate
technical specification for this requirement. We strongly support ASTP’s shift to encouraging
modern RESTful FHIR APIs.

Information Blocking Exceptions

1upHealth concurs with the proposal to remove the three targeted Information Blocking exceptions.
These generate confusion and each serve as an excuse to information block but without a clear
corresponding public benefit that would warrant preventing patients from moving their data to apps
of the patient’s choosing not that of the provider or their EHR vendor.

The “third party seeking modification use” is the notion that EHRs could limit write access. ASTP
will likely need more specific policy around write access. While there is substantial value to EHR
write capabilities – i.e. what the patient or their app wish to communicate into the provider system,
there are several policy considerations needed. First while “read” capabilities can be readily
externalized such as with ODBC database drivers, “write” capabilities potentially need more
software engineering because it is not clear a priori how “written” data fields would be used in the
EHR internals. ASTP should work with HL7 to standardize the first round of “write” data fields to let
EHR vendors buffer internal design considerations for the incoming data. Secondly, EHR systems
need to be designed to process incoming data to some volume of data. In the original ONC Cures
Act rule-making the issue of “Denial of Service” attacks was raised as a reason to not allow APIs.

                     280 Summer St, Floor 7, Boston MA 02210 | 508-245-8558 | 1up.health

ASTP should evaluate how to address this risk which will likely include measures to ensure
cryptographically authorized patient consent to write data into their medical record.

The second Information Blocking exception under consideration is the so-called “manner
exhausted” exception. This is where a party wants to get data but not use standard APIs. This is
simply confusing and this exception should be eliminated with the understanding that EHR vendors
will have to provide performant APIs.

The third exception is the “TEFCA exception” which states that if a vendor supports and offers
TEFCA then that EHR vendor cannot be considered an information blocker. This exception should
be eliminated because TEFCA is a major impediment to modern RESTful API driven
interoperability. The Cures Act defines Information Blocking as interfering with the “access,
exchange and use” of health data. TEFCA interferes with each of access, exchange and use.
TEFCA’s QHIN brokers interfere with “access”, TEFCA’s ancient protocols interfere with
“exchange” and TEFCA’s document centric inability to use modern FHIR interferes with “use”.

The advances of the modern Internet over the last two decades and the evolution from the
document centric page-view architecture of the 1990s have almost all been based on the
computability of individual data fields and RESTful approaches to interoperability. Every major
consumer app (Google, Facebook, Amazon) and almost every smartphone app use these
approaches. Current TEFCA however uses the 1990s IHE document protocol so this exemption
creates an island of document-only healthcare information which is effectively non-computable for
modern apps and requires human reading. While Sequoia states they will try to port the IHE
protocol to FHIR this misses the inextricable efficiency relationship between RESTful
communication protocols and the FHIR data representation. FHIR will be of limited value if it is
coupled with the cumbersome IHE communication protocol. JSON and FHIR have been available
for over a decade so before advancing any federal rules incentivizing TEFCA, TEFCA proponents
should provide a clear, public and readily computable implementation guide and real-world
examples from more than one EHR using FHIR. It is not clear that at the time of this proposed rule
that TEFCA has truly been able to fully do any interoperability directly using FHIR even though one
vendor has indirectly provided FHIR data using TEFCA and an additional proxy process.

There are additional concerns in giving TEFCA an exemption. First TEFCAs protocol is antiquated
so there are only a limited number of programmers who can program the IHE protocol today and it
is unlikely that new programmers would prioritize learning this. The overall nature of the program
largely limits it to incumbent participants in US healthcare and we need new approaches and
competition based on computing on the data not just sharing documents.

Having non-standard security and privacy approaches makes TEFCA more susceptible to
breaches than hardened applications in the broader economy such as banking apps. The Internet
at large works with an absolute minimum of brokering beyond broadband provisioning – adding
healthcare specific brokers and their costs is concerning especially when those brokers don’t
fundamentally solve the problem of discovering where the patient data lives. It should be noted
that anyone using TEFCA still has to do the work to formulate either directed queries or localizing
queries since every EHR cannot be searched for every patient.

                     280 Summer St, Floor 7, Boston MA 02210 | 508-245-8558 | 1up.health

Though medical record payloads can be encrypted using TEFCA the queries and record location
services themselves violate patient privacy especially when generated by providers such as
abortion clinics, drug treatment centers and behavioral health facilities where the very nature of the
provider discloses sensitive patient information. TEFCA fails basic modern zero trust privacy and
security principles as well and there have been multiple well-publicized wholesale breaches of
privacy by TEFCA participants. ASTP should get an independent non-healthcare security
assessment of TEFCA to evaluate TEFCA’s global reliance on “just trust me” “permitted uses”
security model.

ASTP, APIs and the Future

ASTP has a number of areas where it can help advance API adoption. As mentioned in the
proposed rule, ASTP intends for robotic process automation and agentic AI to be considered
legitimate tools for data access and hindrances to these as Information Blocking. While not
necessarily requiring regulation, ASTP technical guidance on performance and data access here
would be helpful.

ASTP can also advance Bulk FHIR by providing service level agreement standards to augment
Bulk FHIR.

Transparency will be critical for API use. Nowhere is the need greater for transparency than with
TEFCA. While ASTP reports massive numbers for TEFCA use we don’t know how these numbers
were generated, what data types were exchanged and by which QHINs and which counterparties
and whether those counterparties hinder competition as a business model. Given the intrinsically
anti-competitive and anti-modern API nature of TEFCA requiring this information on an ongoing
basis is critical to understand the scope of TEFCA’s regulatory capture. The comparator for
TEFCA’s “Individual Access Services” performance and IAS barriers to digital health apps should
be the number of RESTful API calls made each second by the non-healthcare part of the US
economy because that is what TEFCA has worked to prevent in healthcare.

Finally, the Cures Act requires that ALL data be made available. The 2020 ONC Cures Act rule
predated widespread use of LLMs and had as its only requirement that each data field had a
vocabulary tag of the vendor’s choice. ASTP should consider fleshing out the opportunities to
more richly enable AI with this Cures Act requirement.

Thank you for reviewing these comments offered in the hope of improving the patient experience.

Sincerely,

Donald W. Rucker, MD
Chief Strategy Officer, 1upHealth

                      280 Summer St, Floor 7, Boston MA 02210 | 508-245-8558 | 1up.health

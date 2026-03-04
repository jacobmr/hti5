# HHS-ONC-2025-0005-0068 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0068/attachment_1.pdf

---

February 23, 2026

U.S. Department of Health and Human Services
Assistant Secretary for Technology Policy Office of the National Coordinator for Health
Information Technology
200 Independence Ave SW
Washington, DC 20201

Re: Comments on Proposed Rule: "Health Data, Technology, and Interoperability:
ASTP/ONC Deregulatory Actions To Unleash Prosperity" (RIN 0955–AA09)

To the National Coordinator for Health Information Technology:

SNOMED International values the critical role of the Assistant Secretary for Technology
Policy/Office of the National Coordinator for Health Information Technology (ASTP/ONC) in
accelerating the adoption of Health IT and promoting nationwide, standards-based health
information exchange. The steps ASTP/ONC and other federal HHS agencies have taken over
the years continue to drive administrative and clinical data efficiency across the United States
health data ecosystem. As a founding Member of SNOMED International, the United States
continues to be an active and vital part of our 52 Member organization.

As the owners of SNOMED CT, the most comprehensive, multilingual clinical healthcare
terminology in the world, that is used in more than 70 countries, we appreciate this opportunity
to provide feedback on the Proposed Rule (RIN 0955–AA09) "Health Data, Technology, and
Interoperability: ASTP/ONC Deregulatory Actions To Unleash Prosperity” issued by ASTP/ONC.
As SNOMED CT is widely used in the United States in electronic clinical and dental systems,
research, and other domains, and is a recognized standard within the United States Core Data
for Interoperability (USCDI), we look forward to continued engagement on how SNOMED CT

                                               SNOMED International
                       Registered in England and Wales | Company Registration Number 9915820
           Reg. address: One Kingdom Street | Paddington Central | London W2 6BD | United Kingdom Tel:
                            +44 (0) 203 755 0974 | info@snomed.org | www.snomed.org

      SNOMED International is the trading name of the International Health Terminology Standards Development
                                Organisation a private company limited by guarantee

can meet U.S. needs in clinical, administrative, and public health contexts.

Regarding the Proposed Rule, SNOMED International appreciates the efforts to reduce burdens
on health IT developers. However, we caution the agency to ensure that patient safety, trust,
and semantic interoperability are not compromised by the removal of key guardrails.

1. Support for SNOMED CT as the Exclusive Standard for "Sex" with Recommendations
   for Inclusivity
   SNOMED International strongly supports the proposal to streamline the "Patient Demographics"
   criterion (§ 170.315(a)(5)) to rely exclusively on SNOMED CT U.S. Edition.

2. Protecting Data Quality Amidst Removal of "Family Health History" We acknowledge
   ASTP/ONC’s finding that the "Family Health History" functionality is now "embedded in certified
   health IT" and "widely adopted." However, we caution that removing the specific certification
   criterion (§ 170.315(a)(12)) may reduce the incentive for developers to update systems to the
   latest versions of SNOMED CT.

Recommendation: While the functional criterion is being removed, the underlying data quality
depends on the continued maintenance of the terminology. The widespread adoption cited by
ASTP/ONC proves that SNOMED CT implementation is feasible and stabilized. Therefore,
continuing to reference SNOMED CT in remaining and future criteria is the lowest-burden path
for developers because the heavy lifting of implementation has already been done. We urge
ASTP/ONC to ensure that future voluntary standards (such as future versions of USCDI)
continue to reference SNOMED CT for this domain.

3. Strongly supports ensuring semantic interoperability in the transition to FHIR
   SNOMED International strongly supports the transition to a "FHIR-Forward" future. As long-time
   collaboration partners, HL7 International and SNOMED International have worked together to
   ensure that FHIR and SNOMED CT are complementary, and will continue to do so into the
   future.

Critique: It is vital to recognize that FHIR provides the technical specifications for data transport,
but clinical data integrity is ensured only when that data is normalized by the SNOMED CT
standard, which provides the meaning (semantics). As the industry moves toward initiatives like
USCDI+ Cancer and the removal of CDA-based reporting criteria, SNOMED CT must remain
the referenced vocabulary standard within new FHIR Implementation Guides to ensure
longitudinal data integrity during the migration from CDA to FHIR. SNOMED International is
committed to continuing our partnership with HL7 International to ensure the standards continue
to be technically aligned and implementation guidance is provided to end users.

                                               SNOMED International
                       Registered in England and Wales | Company Registration Number 9915820
           Reg. address: One Kingdom Street | Paddington Central | London W2 6BD | United Kingdom Tel:
                            +44 (0) 203 755 0974 | info@snomed.org | www.snomed.org

      SNOMED International is the trading name of the International Health Terminology Standards Development
                                Organisation a private company limited by guarantee

4. Support for the Adoption of USCDI v3.1
   SNOMED International supports the adoption of USCDI v3.1. Because USCDI is a "hybrid
   standard" relying on voluntary consensus standards for vocabulary, we reiterate that SNOMED
   CT remains the critical backbone for multiple data classes within USCDI (e.g., Problems,
   Procedures, Allergies and many more). Its continued inclusion ensures that deregulatory actions
   do not result in semantic fragmentation or a regression to proprietary local codes.

5. Recommendation to Retain SNOMED CT as Preferred Terminology Given the continued
   success of SNOMED CT adoption in the U.S. we recommend that for any criteria being
   converted to "functional only" requirements (such as Antimicrobial Use and Resistance
   Reporting), ASTP/ONC explicitly list SNOMED CT as the preferred or recommended
   terminology. This will prevent a regression to non-standard local codes, which would increase
   the burden on Public Health Agencies attempting to aggregate data.

To further reduce burden by removing additional development, costs, and adoption of additional
code systems, we suggest using SNOMED CT as the preferred terminology in US healthIT data
needs. Because SNOMED CT is already adopted (and required in some cases) and
implemented in health data systems across the U.S., the use of SNOMED CT for more than just
data elements in the EHR, but for morbidity reporting in the U.S. would eliminate much of the
cost and time-consuming implementation of a wholly new terminology such as ICD-11, which
lacks the robust digital architecture and ontological framework of SNOMED CT. If required in the
future, SNOMED CT to ICD-11 mappings, reporting requirements for mortality would be
implementable and not cause a huge setback for regulators, vendors, implementers, and health
care providers with the introduction of a new terminology for morbidity.

6. Concerns Regarding the Removal of the Implantable Device List
   SNOMED International cautions ASTP/ONC regarding the removal of the certification criterion
   for the Implantable Device List (§ 170.315(a)(14)) and the removal of the definition of the Global
   Unique Device Identification Database (GUDID).

Critique: Currently, the GUDID utilizes SNOMED CT to encode critical device attributes, such as
MRI safety information. The removal of this criterion severs the specific functional requirement
for certified health IT to parse Unique Device Identifiers (UDIs) and retrieve these attributes.
While the UDI code itself remains in USCDI, the connection to the rich clinical context provided
by SNOMED CT within the GUDID may be lost or deprioritized by developers, potentially
impacting patient safety during MRI screenings and other clinical workflows.

                                               SNOMED International
                       Registered in England and Wales | Company Registration Number 9915820
           Reg. address: One Kingdom Street | Paddington Central | London W2 6BD | United Kingdom Tel:
                            +44 (0) 203 755 0974 | info@snomed.org | www.snomed.org

      SNOMED International is the trading name of the International Health Terminology Standards Development
                                Organisation a private company limited by guarantee

In Closing
All in all, we applaud the ASTP/ONC and federal HHS agencies' continued efforts to move
towards the capture and exchange of data that is efficient and safe within the health data
ecosystem. SNOMED International is committed to working with the ASTP/ONC and federal
HHS agencies on these and any new regulations. We appreciate the opportunity to provide
these comments. SNOMED International is committed to working with the United States on this
very important initiative and we would encourage you to reach out to us directly for any
assistance you may require. Please contact Suzy Roy (sro@snomed.org) for additional
information or questions.

Sincerely,

Don Sweete
Chief Executive Officer
SNOMED International

                                                 SNOMED International
                         Registered in England and Wales | Company Registration Number 9915820
             Reg. address: One Kingdom Street | Paddington Central | London W2 6BD | United Kingdom Tel:
                              +44 (0) 203 755 0974 | info@snomed.org | www.snomed.org

     SNOMED International is the trading name of the International Health Terminology Standards Development
                               Organisation a private company limited by guarantee

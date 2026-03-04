# HHS-ONC-2025-0005-0090 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0090/attachment_1.pdf

---

J Michael Consulting, LLC
885 Woodstock Road
Suite 430-151
Roswell, GA 30075

February 25, 2026

Dr. Thomas Keane, MD, MBA
Assistant Secretary for Technology Policy and National Coordinator for Health Information
Technology
U.S. Department of Health and Human Services
330 C Street SW, Floor 7
Washington, D.C. 20201

J Michael Consulting (JMC) is pleased to submit comments on the ASTP HTI-5 Proposed
Rule. JMC is a small business providing public health informatics consulting and support in
laboratory informatics, surveillance informatics, and interoperability. JMC team members
also work with HL7 and other industry partners and associations to develop and implement
interoperability standards in support of public health data needs. Our goal is to bring
science and technology together to benefit both patients and population health and are
submitting comments with this goal in mind.

We appreciate the extensive effort that ASTP has put into developing this document and
agree that elements of the existing Health Information Technology (HIT) certification
program may benefit from updates. However, we wish to ensure that critical HIT
functionality, particularly in the areas of data security and public health reporting, remain
paramount within certified systems. The content below contains our thoughts on the HTI-5
proposed rule. We thank you for your consideration of our comments and are available for
further discussion on any of these topics.

Sincerely,

Jon Lipsky

             J Michael Consulting | 885 Woodstock Road, Suite 430-151, Roswell, GA 30075 | phone: 770-309-3124
                                       website: www.jmichael-consulting.com

General Comments
Location Comment
Overall We strongly support the focus on a FHIR-enabled future for healthcare
data interoperability. We see FHIR as a key technology for enhancing
clinical efficiency, patient empowerment, and timely Public Health
reporting and follow up. We encourage ASTP to signal support for
standards-based FHIR-enabled systems and governance to support a
broad range of health care and public health data use cases.
Overall As part of a FHIR-forward future, the healthcare environment must fully
embrace the new interoperability paradigms offered by the FHIR
standard. Key among the new FHIR offerings is FHIR-based Subscription
functionality. The ability for data consumers to subscribe to subscription
topics that are clearly defined, granular and common across all data
providers will enable data consumers to access appropriate information
in an efficient and effective manner. The Patient Data Feed defined in the
latest US Core FHIR Implementation Guide represents an excellent
starting point for core interoperability expectations however the ability to
subscribe additional key data classes including Condition, Immunization
and ServiceRequest will be critical to robust data sharing with authorized
trading partners in the real-world.
Overall Another powerful FHIR paradigm is that of Bulk Data Access. We support
future requirements to promote the adoption of Bulk Data Access to
share data on populations of individuals with authorized data
consumers. While the existing Bulk Data Access FHIR Implementation
Guide provides a solid technical basis for bulk data exchange, it
presupposes the existence of a Group of individuals of interest (or at
least a shared understanding of the common attributes of the individuals
of interest). Exploratory work performed by the Helios FHIR Accelerator
has documented aspects of the complexity of patient identification and
cohort creation which may inhibit the adoption of this standard. The real-
world implementation of Bulk Data Access would be greatly accelerated
by functionality in certified HIT to create cohorts of individuals with
shared characteristics and expose those cohorts as FHIR Group
resources. We suggest requirements in certified HIT for a robust rules-
based engine capable of creating cohorts on key patient attributes,
including demographics (e.g., age, location of residence), clinical data

           J Michael Consulting | 885 Woodstock Road, Suite 430-151, Roswell, GA 30075 | phone: 770-309-3124
                                     website: www.jmichael-consulting.com

(e.g., confirmed diagnoses, specific laboratory test outcomes) and
administrative data (e.g., care relationship with a particular provider or
payor) as an implementation driver for Bulk Data Access.
Overall Despite the tremendous potential of a FHIR-forward future, we note
several proposals that move certification away from standards-based
interoperability in favor of functional requirements. These moves are
likely to impose a burden on both public health and the private sector as
HIT implementers will be left without clear direction on the realization of
data interoperability. History has shown that when HIT developers lack
common standards to guide interoperability product development,
variable solutions result which must be accommodated during real-
world implementation of data exchange. We strongly recommend that
Certification Criteria retain requirements that certified HIT adhere to
existing HL7 interoperability standards.
Overall We agree that many HIT Certification Criteria are well established in
existing certified HIT. However, as a competitive marketplace brings new
products to market, we feel that it is important that all certified HIT share
a common baseline for functionality and we have concerns that new
products may not include the core functionality currently available in
certified HIT products. Given that existing HIT vendors have invested
considerable organizational resources in developing and certifying HIT,
we urge ASTP to consider how to ensure a consistent baseline
functionality in certified products and a level playing field for both
existing and future participants in the marketplace. At a minimum, we
recommend a clear signal from ASTP that existing certified HIT vendors
are expected to maintain and support for any established functionality
that may be removed from the certification program.
Overall We would like to emphasize that the protection and security of patient
information is paramount. The economic value of this information
entices bad actors to acquire such information through inappropriate
and often illegal means. We encourage the retention of existing security
requirements as part of certification until such time as more consistent
and fit for purpose privacy and security requirements can be
incorporated into future versions of the HIT certification criteria. If
providers and individuals are to remain committed to data
interoperability, then they must be certain that their critical information is
securely protected from bad actors.

          J Michael Consulting | 885 Woodstock Road, Suite 430-151, Roswell, GA 30075 | phone: 770-309-3124
                                    website: www.jmichael-consulting.com

III.A.2.a & While we support a FHIR-forward approach to interoperability, we note
III.A.6 that the exchange of CDA-based documents is a significant contributor
to both patient care and public health reporting today. Where CDA-based
standards are widely implemented, as they are for transitions of care and
electronic case reporting, we recommend retention of these
requirements within HIT certification criteria. We strongly support the
application of FHIR-based standards for functionality such as case
reporting. However, we note that a significant investment of resources
within public health agencies will be required to both develop FHIR-
based case reporting capabilities as well as manage the transition from
the large number of existing CDA-based case reporting integrations in
place today. We would support the addition of an expiration date for
CDA-based exchanges as part of the transition to FHIR-based exchange
provided that such a transition is based on a realistic timeframe and is
accompanied by the allocation of necessary resources for public health
to develop and implement their FHIR-based capabilities.
III.A.2.e We remain supportive of the inclusion of transparency and risk
management capabilities with respect to Decision Support Interventions
(DSI). Clear and transparent information is critical to the informed and
fiscally effective selection and use of DSI products by healthcare
organizations. While we agree that clinicians in the midst of patient
encounters may not have the opportunity to reference documentation,
we believe it is vital for Chief Medical Informatics Officers, Chief
Risk/Privacy Officers and Chief Information Officers to have ready access
to this documentation to ensure the safe and efficient application of DSI
solutions for use by frontline staff.
III.A.6.a As one of the leading causes of death within the United States, cancer
reporting to public health is a critical factor in maintaining the long-term
health of citizens. We agree that the implementation of a FHIR-based
standard, such as the existing central cancer reporting FHIR
Implementation Guide, is critical to the goal of a healthy America.
However, the removal of the existing CDA-based requirement without
setting expectations and support for the implementation of FHIR-based
reporting is unlikely to be an effective approach for promoting the
adoption of FHIR-based reporting. We support the retention of the
Transmission to Cancer Registries certification requirement until such

            J Michael Consulting | 885 Woodstock Road, Suite 430-151, Roswell, GA 30075 | phone: 770-309-3124
                                      website: www.jmichael-consulting.com

time as a future rule introduces certification criteria for standardized
FHIR-based cancer reporting.
We also note that in this proposal ASTP states a reason for removal of the
criterion is that the FHIR IG for cancer can replace the current CDA
standard with reference to work performed by the Helios FHIR
Accelerator for Public Health. We have been actively engaged in this
initiative, and we believe there is a misunderstanding. The FHIR cancer
use case being explored by the Helios Accelerator is for a FHIR-based
query/response for additional data after the initial cancer report has
come in and this work is not a replacement for initial case reporting by
clinicians.
III.A.6.b Electronic case reporting has proven to be critical to the detection of and
effective response to communicable diseases impacting the population.
While the CDA-based case reporting standard has been widely adopted
and implemented, the utilization of FHIR-based standards for both initial
reporting as well as improved access to additional case-related data is of
significant interest to the public health community. We strongly support
the retention of standards-based criteria for case reporting. Furthermore,
as noted above, past experience has demonstrated that the lack of clear,
standards-based expectations breeds a large number of variant
approaches which become a burden on HIT vendors serving both public
health and healthcare providers. The use of standards-based solutions
provides both sides of the exchange with a common goal, simplifying the
long-term implementation and maintenance of electronic integrations
with the long-term resource savings outweighing the initial investment
required to support interoperability standards.
III.A.6.c We strongly support a move towards FHIR-based standards for reporting
antimicrobial use and resistance. The development of a FHIR-based
standard in combination with the provision of implementation resources
for public health systems to adopt a FHIR-based standard is a strong
vision for the future. However, until such time that a FHIR-based
standard has adequate testing and public feedback, we recommend the
retention of the existing CDA Implementation Guide as a standards-
based reporting requirement.
III.A.6.d We note the existence of a FHIR-based Health Care Surveys
implementation guide that should form the basis of future reporting.
Support for the adoption and implementation of this existing FHIR-based

            J Michael Consulting | 885 Woodstock Road, Suite 430-151, Roswell, GA 30075 | phone: 770-309-3124
                                      website: www.jmichael-consulting.com

standard would drive modernization of Health Care Surveys. We support
the retention of a functional requirement to support Health Care Surveys
until such time as a future rule introduces certification criteria for FHIR-
based reporting as part of the FHIR-forward approach to interoperability.
VII.E We are concerned that the deregulatory approach of this proposed rule
may impose unfunded mandates on State, local, and Tribal governments,
and as well as the private sector. As noted above, we have seen evidence
that the lack of clear standards-based interoperability expectations
leads to the proliferation of approaches and inhibits “out-of-box” data
exchange. Both governments and the private sector will need to allocate
additional resources as they develop and test products and other
solutions able to accommodate non-standard data exchange as part of
real-world implementation. As well, deregulation will shift the burden of
assessing HIT functionality and standards adoption away from ASTP to
the users of HIT. This imposes additional burden on individuals,
governments and healthcare organizations as they evaluate and select
HIT to purchase and implement. We strongly recommend that ASTP re-
evaluate the potential economic impact of this proposed rule with these
considerations in mind.

        J Michael Consulting | 885 Woodstock Road, Suite 430-151, Roswell, GA 30075 | phone: 770-309-3124
                                  website: www.jmichael-consulting.com

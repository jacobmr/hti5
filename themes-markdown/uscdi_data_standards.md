# USCDI Data Standards & Classes

**Key:** `uscdi_data_standards`
**Comments:** 13

## Position Breakdown

- strongly oppose deregulation: 6
- neutral mixed: 3
- support deregulation: 4

## Analysis

The public comments on the USCDI Data Standards & Classes theme in the ONC HTI-5 proposed rule reveal a nuanced landscape of stakeholder perspectives balancing deregulation with the need to maintain or enhance data standards critical to patient care and interoperability. Several advocacy groups emphasize the importance of preserving or expanding data classes that support vulnerable populations, such as LGBTQ+ patients and caregivers, highlighting that removing or reducing these requirements could undermine care quality and health equity. These groups argue that data elements related to sexual orientation, gender identity, caregiver information, and physical activity are essential for delivering comprehensive, patient-centered care and aligning with broader public health goals.

Professional associations like the American Medical Association take a more mixed stance, supporting deregulation efforts aimed at reducing unnecessary burdens to foster innovation, particularly in AI-driven decision support tools. However, they strongly advocate for retaining transparency, governance, and risk management requirements for high-risk AI applications to ensure patient safety and trust. They propose a risk-based, tiered framework that balances regulatory relief with necessary safeguards, preserving access to the full USCDI data set for high-risk tools while allowing narrower data scopes for lower-risk applications.

There is also a forward-looking push to adopt newer versions of the USCDI standard, such as USCDI v4, to incorporate emerging data classes like physical activity assessments, which align with CMS and CMMI policies promoting prevention and lifestyle-based care. Commenters urge ONC to leverage existing FHIR implementation guides to facilitate interoperability and support population health management. Overall, the comments reflect a tension between deregulation to reduce burden and the imperative to maintain or enhance data standards that support equitable, safe, and effective healthcare delivery through certified health IT.

## Top Arguments

### for preserving or expanding data standards

- Removing critical data fields, especially those relevant to LGBTQ+ patients, will regress interoperability and harm quality care.
- Standardized caregiver data elements are essential for caregiver-inclusive care coordination and align with Medicaid HCBS cost avoidance goals.
- Adopting USCDI v4 to include physical activity data supports chronic disease prevention, population health, and aligns with CMS and CMMI policies.
- Maintaining AI transparency and risk management requirements ensures patient safety and trust, particularly for high-risk predictive decision support tools.

### for deregulation or reduction

- Reducing unnecessary regulatory burden can foster innovation and reduce compliance costs for health IT developers.
- A risk-based, tiered approach to AI transparency and data scope can balance safety with flexibility, allowing lighter requirements for low-risk tools.
- Right-sizing and standardizing requirements is preferable to wholesale removal, addressing burden concerns without compromising essential safeguards.

## Top Recommendations

1. Maintain regulatory requirements for LGBTQ+ relevant data fields including sexual orientation, gender identity, and pronouns in electronic health records.
2. Retain AI model card transparency, governance, auditability, and change control requirements for high-risk predictive decision support interventions.
3. Adopt USCDI version 4 instead of 3.1 to include physical activity assessment data in certified health IT.
4. Include standardized caregiver data elements such as caregiver identification, strain assessments, and dyadic care planning explicitly in FHIR API scope and future USCDI versions.
5. Implement a two-tiered risk framework for AI tools with lighter requirements for low-risk applications and full USCDI data access for high-risk tools.

## Notable Voices

- Rocky Mountain Equality (advocacy group focused on LGBTQ+ health equity)
- American Medical Association (professional association representing physicians)
- Physical Activity Alliance (advocacy group promoting physical activity data inclusion)
- Family Caregiver Alliance (advocacy group emphasizing caregiver data infrastructure)

## Key Tensions

- Balancing deregulation to reduce developer burden with the need to maintain comprehensive data standards that support vulnerable populations and patient safety.
- Determining the appropriate scope and transparency requirements for AI decision support tools, especially high-risk predictive models.
- Choosing between adopting newer USCDI versions with expanded data classes versus maintaining existing standards to avoid implementation complexity.
- Integrating caregiver data elements into certified health IT as core infrastructure versus treating them as optional or secondary data.

## Dominant Position

The dominant sentiment among commenters is cautious opposition to broad deregulation of USCDI data standards and classes. While there is some support for reducing unnecessary regulatory burden, most commenters emphasize the critical importance of maintaining or expanding data elements that support vulnerable populations, patient safety, and interoperability. There is strong advocacy for preserving transparency and governance requirements for AI tools and for adopting updated USCDI versions to include emerging data classes.

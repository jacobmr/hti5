# HHS-ONC-2025-0005-0112 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0112/attachment_1.pdf

---

Public Comment – 45 CFR Parts 170 and 171
[RIN 0955-AA09]
Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions to Unleash
Prosperity

Overall Assessment of Certification Criteria Changes
We support ASTP/ONC’s overall direction in HTI-5 to streamline the certification program by reducing
unnecessary burden and sharpening focus on interoperability. We particularly welcome the move
toward a more modern, FHIR-based foundation and clearer expectations for automated access and
use of health information, including through AI-enabled systems. We agree that some certification
criteria are duplicative, outdated, or no longer the best lever to achieve the intended outcome, and
that thoughtfully executed deregulation can improve efficiency for developers and implementers.

However, we recommend a more targeted approach than the proposed removal of 34 of 60
certification criteria. From a testing and certification perspective, removing large clusters of criteria at
once risks unintended gaps in baseline assurance and increased variability in implementation across
health IT developers. We urge ASTP/ONC to reconsider removing foundational privacy and security
requirements and certain high-impact clinical workflow criteria (e.g., transitions of care and
reconciliation) without a clear replacement assurance mechanism.

We encourage ASTP/ONC to pair any removals with a detailed mapping of each retired criterion to
the policy, standard, or oversight mechanism that will provide comparable assurance going forward.
Where risk is greatest, ASTP/ONC should phase changes, either by retaining a smaller, outcome-
oriented baseline set of criteria or by consolidating requirements into fewer, clearer criteria supported
by updated test procedures.

Finally, certification streamlining should be coordinated with HTI-5’s other proposed changes,
including adjustments to information blocking policy and a narrower Real World Testing scope. The
goal should be to reduce burden without diminishing oversight, increasing variability across certified
products, or undermining safety and stakeholder confidence, while still advancing scalable
interoperability.

Clinical Decision Support and AI Model Cards (§ 170.315(a)(9), § 170.315(b)(11))
The proposed revisions to (b)(11) limit the requirements of this criterion to essentially two areas: (1)
the requirement to “support” a subset of USCDI data classes (effectively an API requirement for data
to be used by DSI applications), and (2) the requirement of a feedback mechanism for evidence-
based DSI only.

                               3622 Lyckan Parkway, Suite 3003, Durham, NC 27707
                                  www.drummondgroup.com • (877) 437-8666

Having worked with many developers on compliance with (b)(11), we believe the limitation of the DSI
API to a subset of USCDI data classes will be confusing, as many (possibly most) developers use the
(g)(10) FHIR API as their method to “support” the required data classes. In addition, (g)(10) also
currently includes the “EHR launch” requirement, which aligns with the select/activate requirement in
(b)(11). As such, we recommend that ASTP/ONC aligns the data “support” requirements for (b)(11)
with the (g)(10) FHIR API requirements and even consider eliminating the data support and
select/activate requirements altogether due to redundancy. While the current and proposed (b)(11)
rules do not require support for data classes via a specific type of API (e.g., FHIR), ONC/ASTP’s
newly proposed focus on FHIR as the primary required API for Health IT allows it to simplify DSI-
specific API requirements by establishing FHIR as a base minimum approach to support delivery of
USCDI data to decision support applications (a subset of all potential FHIR apps). This would also
simplify the overall compliance approach for Health IT developers who are focused on Base EHR
compliance. If the API requirement in § 170.315(b)(11) serves no distinct purpose beyond what is
already addressed in § 170.315(g)(10), the practical effect of this proposal would be to reduce the
DSI criterion to little more than the feedback mechanism requirement. ASTP/ONC could focus the
(b)(11) criterion on the feedback requirement and consider extending this functional requirement to all
type of DSI (evidence-based and predictive), rather than limiting it to evidence-based, which has been
another area of confusion in the rule.

We also have concerns about the removal of source attribute requirements but also understand that
this may be an area for future rulemaking after finalization of HTI-5. The removal of source attribute
requirements is premature given the current state of AI adoption in healthcare. Source attributes
provide essential transparency about predictive decision support interventions. These transparency
requirements are particularly critical during this early adoption phase of AI-enabled clinical decision
support, when healthcare providers, patients, and the broader clinical community are still developing
familiarity with these technologies and their appropriate use cases. The healthcare industry remains
in the early stages of integrating AI-based decision support interventions into clinical workflows.
During this critical period, transparency mechanisms such as source attributes serve vital functions:
they enable clinicians to make informed judgments about when and how to rely on AI-generated
recommendations, they facilitate the identification of potential biases or limitations, and they support
appropriate oversight and validation by healthcare organizations implementing these systems.
Removing these requirements at this stage eliminates important safeguards before the market has
matured sufficiently to ensure adequate transparency through other means.

We do agree, however, with removal of the requirement that source attributes/model cards be
embedded in the Health IT user interface, and that some modifications to the source attribute
requirements should be considered. Regarding the record/access/modify requirements, developers
can be given the flexibility to supply source attribute/model card information to their user base through
various methods of their choosing, such as normal product documentation channels. With respect to
the specific requirements included in source attributes for predictive DSI, (b)(11)(iv)(B), subsections
(1)-(3) present important explainability information that is directly relevant to practitioners’ decisions to
use of emerging predictive DSI capabilities. The remaining sections are also important but can
potentially be included in risk management documentation requirements that may be adopted in
future rulemaking.

                               3622 Lyckan Parkway, Suite 3003, Durham, NC 27707
                                  www.drummondgroup.com • (877) 437-8666

We therefore recommend retaining some of the source attribute requirements for predictive decision
support interventions within § 170.315(b)(11). These requirements provide necessary explainability
and transparency without imposing undue burden, and they serve important clinical decision-making
functions during this formative period of AI adoption in healthcare settings.

Privacy and Security Certification Criteria (§ 170.315(d)(1)-(13))
The removal of the privacy and security certification criteria raises concerns about the preparedness
of smaller healthcare organizations that have historically relied on the certification requirements as a
baseline assurance that their health IT systems incorporate essential security measures, particularly
for providers that have not adopted a best-of-breed approach using third-party security solutions.
Without these certification requirements, smaller providers may be left vulnerable or uncertain about
the adequacy of their systems' security posture.

While ASTP/ONC justifies the removal by citing widespread adoption and overlap with HIPAA
requirements, we believe it would be reasonable to require health IT developers to attest that they
have completed some form of recognized industry security controls framework. This attestation
becomes even more critical given that the health IT industry has largely transitioned to cloud-based
systems, which introduce different security considerations and shared responsibility models that may
not be fully addressed by HIPAA's security rule alone. An attestation requirement would provide
transparency and accountability without imposing the full compliance burden of detailed certification
testing.

ASTP/ONC should also consider retaining many of the (d) criteria for voluntary certification (i.e.,
without being formally tied to Base EHR criteria as dependent criteria), thereby allowing a path for
Health IT developers to show the inclusion of these security controls in their products. This would
offer flexibility to developers by allowing certification to accepted security control standards that can
be followed by new Health IT developers entering the market, and provide useful information to
smaller providers who need to know that their Health IT provides all of these security controls within a
single product.

Alternatively, ASTP could focus specifically on security measures that are integral to core clinical and
interoperability criteria rather than maintaining all the (d) criteria, as was suggested in ASTP’s
discussion of the proposed changes. Furthermore, these security requirements could be embedded in
the functional certification criteria directly. Most of the criteria that current specify (d) criteria as
dependencies need these security controls for HIPAA and industry-accepted security compliance,
and we believe the complete removal of ASTP guidance on security controls that are critical for
information sharing will be a detriment, particularly for many new developers entering the modular
Health IT market, particularly as new A.I.-driven development initiatives continue to accelerate. The
integration of (d) criteria requirements into the key interoperability criteria (e.g., (b)(1), (e)(1), (g)(10)),
would maintain necessary protection while supporting the proposed rule's deregulatory objectives.

                                3622 Lyckan Parkway, Suite 3003, Durham, NC 27707
                                   www.drummondgroup.com • (877) 437-8666

C-CDA and Document-Based Exchange (§ 170.315(b)(1), § 170.315(b)(2), §
170.315(g)(6))
Drummond applauds the shift toward FHIR-based APIs for interoperability. However, the proposed
deregulatory actions concerning the C-CDA direct messaging b1/b2 criteria create significant gaps in
the regulatory framework for transitions of care. While these removals appear designed to create
space for future rulemaking that would adopt more complex FHIR-based use cases, this approach
leaves critical questions unanswered about how the industry should handle transitions of care in the
interim period. The transition timeline presents immediate practical challenges that need to be
addressed before these criteria are eliminated.

Of particular concern is the January 1, 2027 implementation deadline for the (b)(1) send/receive
functionality using the Direct protocol. Given the proposed removal of these requirements and the
shift toward FHIR-based approaches, it seems counterproductive to require new developers to
implement (b)(1) criteria for potentially just one-half year before they would need to transition to a
FHIR-based alternative. We suggest that the final rule include a transitional pathway that would allow
developers who are actively developing CEHRT-compliant solutions to satisfy their obligations by
following the new proposed (b)(1) requirements, without the need to fully implement the current (b)(1)
criteria for such a short compliance period. This would prevent wasted development resources on
soon-to-be-obsolete standards while ensuring continuity of care during the transition. If both the
proposed and the current (b)(1) requirements can be permissible prior to January 1, 2027, this would
smooth the transition for developers bringing new products to market this year.

More fundamentally, the rule proposes to deregulate the b1 and b2 criteria without establishing a
clear FHIR-based replacement for transitions of care functionality. While HL7 has developed relevant
use cases such as CDEX (Clinical Data Exchange) that could address these workflows, the current
proposed rule does not name or adopt these standards, leaving a critical gap in how electronic health
information should be exchanged during care transitions. This absence is particularly problematic
given that transitions of care represent one of the highest-risk periods for patient safety and
information continuity.

Our recommendation is that ASTP/ONC should not immediately deregulate the b1/b2 criteria but
instead announce a future deregulation date contingent upon the adoption of mature FHIR-based
alternatives. This approach would signal the agency's commitment to standards modernization while
ensuring that essential transitions of care functionality remains certified and available until a robust
replacement is in place. We urge ASTP/ONC to explicitly identify and adopt the appropriate FHIR
standards for transitions of care—such as CDEX or other relevant implementation guides—before
retiring the document-based exchange requirements. This sequencing would ensure continuity of
patient care and prevent a regulatory gap that could compromise care coordination.

Design and Accessibility Requirements (§ 170.315(g)(3), § 170.315(g)(5))
We appreciate ASTP/ONC’s deregulatory goals and acknowledge that the current Safety-Enhanced
Design (SED) criterion at § 170.315(g)(3) can create meaningful administrative burden and contribute
to certification delays, given its evidence and reporting requirements.

                              3622 Lyckan Parkway, Suite 3003, Durham, NC 27707
                                 www.drummondgroup.com • (877) 437-8666

While streamlining the certification process is a legitimate objective, we do not support complete
removal of SED absent a replacement mechanism that preserves a baseline expectation for user-
centered design in higher-risk clinical workflows and maintains a standardized transparency signal for
end users and implementers.

Accordingly, we recommend that ASTP/ONC either retain SED in a “lean” form (narrowing scope to
the highest-risk capabilities and reducing prescriptive reporting), or replace it with a lighter-weight
model such as developer attestation with targeted audit. If ASTP/ONC proceeds with removal, we
urge explicit transition guidance for products currently certified to SED and clarification on how the
Certification Program will continue to incentivize usability and safety improvements, particularly in
light of concurrent proposals to remove other process-oriented criteria that, taken together, could
create an unintended gap between functional conformance and patient safety risk.

Real World Testing (RWT) Changes (§ 170.405)
We support ASTP/ONC’s proposal to eliminate the requirement to submit Real World Testing (RWT)
plans because the plan document has often operated primarily as a compliance artifact, with limited
additional insight relative to the time and cost required to produce, update, and review it. Removing
the plan submission requirement under 170.405(b)(1) would reduce administrative burden and help
streamline ongoing certification maintenance, while allowing ASTP/ONC to emphasize the more
substantive value of RWT through performance-oriented reporting.

We also understand ASTP/ONC’s proposal to limit RWT results reporting to API-focused certification
criteria, including 170.315(g)(10) and the prior authorization API criteria 170.315(g)(31)–(33), and to
rely on voluntary SVAP adoption with only minimal reporting for non-API criteria. However, narrowing
mandatory results reporting in this manner may diminish transparency and weaken the feedback loop
for certified capabilities outside the API scope. To mitigate these effects without reintroducing
significant burden, we recommend ASTP/ONC require a brief, standardized “methodology and scope”
section within API-focused results reports to improve consistency and comparability, and more clearly
define baseline expectations for non-API transparency beyond listing voluntary SVAP updates so
stakeholders can understand whether material interoperability issues were identified and addressed.

Implementation Timeline
If ASTP/ONC finalizes any of the proposed removals or revisions, we urge ASTP/ONC to revisit the
proposed implementation approach—which, as drafted, relies heavily on changes taking effect on the
effective date of the final rule for many criteria, while providing a January 1, 2027 transition date for a
subset of criteria and associated standards, and separately phasing certain Insights reporting
elements beginning July 2027 and July 2028. This staggered structure may reduce burden for some
developers, but it also risks creating near-term discontinuities for providers, implementers, and
market participants who depend on the existing certification baseline, particularly where “effective
date of the final rule” removals could occur on a relatively short runway and where criteria/standards
are proposed to be removed in tandem.

                               3622 Lyckan Parkway, Suite 3003, Durham, NC 27707
                                  www.drummondgroup.com • (877) 437-8666

Accordingly, if ASTP/ONC proceeds with finalizing removals, we recommend ASTP/ONC adopt a
more predictable and implementable transition framework that minimizes disruption while preserving
program stability: (1) apply a uniform, longer transition period for removals (e.g., a single “sunset”
date for all removed criteria that is at least 24 months after publication of the final rule and aligned to
January 1 of a calendar year); (2) grandfather existing certifications and allow sufficient time for
developers and customers to plan upgrades, contracting, and validation before any criteria are
retired; (3) where ASTP/ONC proposes to remove referenced standards on the same timeline as
criteria removals, ensure the standards remain available through the full transition to avoid a
premature compliance gap; and (4) provide clear, consolidated implementation guidance for ONC-
ACBs/ONC-ATLs and the marketplace addressing how CHPL listings, surveillance expectations, and
developer maintenance obligations will operate during the transition.

                               3622 Lyckan Parkway, Suite 3003, Durham, NC 27707
                                  www.drummondgroup.com • (877) 437-8666

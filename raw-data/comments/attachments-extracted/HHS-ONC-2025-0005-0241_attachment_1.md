# HHS-ONC-2025-0005-0241 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0241/attachment_1.pdf

---

February 27, 2026

Innovaccer, Inc.
201 Mission Street, Ste. 2900
San Francisco, CA 94105

Department of Health and Human Services
Office of the Secretary
Assistant Secretary for Technology Policy and Office of the National Coordinator for Health
Information Technology (ASTP/ONC)
200 Independence Avenue SW,
Washington, DC 20201

Submitted electronically via Regulations.gov

Re: RIN 0955-AA09 HTI-5 Proposed Rule

Dear Secretary Kennedy and Assistant Secretary Keane,

Innovaccer, Inc. (Innovaccer) is honored to contribute our public comments to the proposed rule
on Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions To Unleash
Prosperity, known as HTI-5. We would also like to refer you to our recent response to the HHS
Health Sector AI Request for Information (RIN 0955-AA13), submitted to Regulations.gov on
February 23, 2026.

Innovaccer, Inc. is an enterprise AI and data platform leader that serves as the healthcare
context layer for health systems, providers, accountable care organizations, payers, health
plans, and public sector agencies. Our Gravity platform and our AI-driven solutions integrate
with more than 100 electronic health record and operational systems, including the systems of
record where health data originates, and transform the fragmented information those systems
contain into high-quality, healthcare-contextualized data that powers AI automation across the
enterprise: population health, care management, quality, risk, revenue cycle, patient and
consumer access, contact center, and across the care continuum.

That position makes us direct witnesses to where health information flows freely and where it
does not, and to what that costs the organizations and patients we serve. Data liquidity, the
ability of health information to move in high-quality, standardized form to the applications and
organizations that need it, is the foundation on which effective healthcare AI is built. AI tools are
only as reliable as the data underlying them; fragmented, inaccessible, or poorly standardized
data produces unreliable outputs regardless of model sophistication. HTI-5 addresses three
dimensions of the regulatory environment that directly determine data liquidity for our
customers: it reduces certification burden on health IT developers, freeing capacity for
innovation rather than compliance; it strengthens and clarifies the information blocking
framework, addressing persistent gaps in how the 21st Century Cures Act's access mandate is
enforced in practice; and it resets the certification program around FHIR-based API standards
as the foundation for the next generation of interoperability. We submit these comments as a
company whose ability to serve its customers — and whose customers' ability to act on health
information on behalf of their patients — depends on each of these dimensions being addressed
well.

                                                                                                    1

Responses to selected proposals follow:

Information Blocking Revisions

1. "Access" and "Use" Definitions – Automated/AI Access Codification

Innovaccer strongly supports the proposed revisions to the definitions of “access” and “use” in
§171.102 to explicitly encompass automated means, including robotic process automation
(“RPA”) and autonomous artificial intelligence systems. This codification directly addresses a
source of friction that Innovaccer and similarly situated health data platforms have experienced
in the market.

These workflows, which include automated data extraction, normalization, and AI-powered
processing, have been subject to increasing friction from EHR developers who have argued that
automated access falls outside the scope of existing information blocking protections. This
proposed codification eliminates that ambiguity, and we commend ASTP/ONC for addressing it
directly.

We further urge ASTP/ONC to adopt the alternative proposal and revise the “exchange”
definition in parallel. As agentic AI systems increasingly mediate real-time data exchange
across institutional boundaries—for example, surfacing risk stratification alerts within EHR
workflows or transmitting updated care plans automatically—the ability to “exchange” EHI by
automated means will become as foundational as automated access and use. Limiting the
clarification to “access” and “use” alone leaves a gap that sophisticated actors may exploit
through creative arguments that their obstruction of AI-driven data exchange does not implicate
the information blocking rules. Revising all three definitions in concert provides a coherent and
future-proof framework consistent with the AI-enabled interoperability vision articulated in HTI-5.

2. Infeasibility Exception – Third Party Modification Use Condition REMOVAL

Innovaccer strongly supports the complete removal of the “third party seeking modification use”
condition from the Infeasibility Exception. This provision has functioned in practice as a
categorical veto that EHR developers have exercised to block bidirectional integration with third-
party platforms, including Innovaccer’s, even where the health system itself has requested and
contracted for such integration.

Write-back capability is not a peripheral feature. It is essential for making insights surfaced from
analytics and/or agentic AI solutions directly actionable. When Innovaccer’s solutions identify a
recommended order or potential new diagnosis, the clinical value of that insight depends heavily
on the clinician’s ability to act on the insight with minimal manual intervention or double data
entry. Bidirectional integration makes this possible; §171.204(a)(3) has allowed EHR developers
to refuse this integration on the grounds that supporting third-party write access is not required
under the information blocking rules, even when the health system explicitly wanted it.

We concur with ASTP/ONC’s assessment that this condition is unnecessary given the existing
Infeasibility Exception’s technical limitations defense, and that it has been misused to impede
competition. We request that ASTP/ONC issue contemporaneous guidance confirming that,
following removal, EHR developers who refuse technically feasible third-party write access
requested by their provider customers must demonstrate that one of the remaining Infeasibility
Exception conditions applies. This guidance will help ensure that removal translates into

                                                                                                   2

meaningful real-world access rather than a migration to alternative justifications for the same
obstructive conduct.

3. Infeasibility Exception – Manner Exception Exhausted Condition

Innovaccer supports revising the Manner Exception Exhausted Condition (§171.204(a)(4))
rather than removing it entirely. We agree with ASTP/ONC’s concern that the condition has
been misused but recognize that there may be genuine technical scenarios in which no
reasonable alternative manner exists. A targeted revision is the appropriate response.

The condition has been invoked in circumstances where actors have offered only a single,
nominally different alternative manner—often one that is more expensive, technically inferior, or
unavailable to the requesting party’s existing infrastructure—and then declared the exception
exhausted. This behavior deprives the Manner Exception of its protective function by allowing
actors to satisfy the “offer” requirement with a sham alternative before retreating to a claim of
exhaustion.

We recommend that the final rule or accompanying guidance clarify that the Exhausted
Condition cannot be claimed where the actor has offered alternative manners that: (1) are not
functionally equivalent to the requested manner (i.e., do not enable the same clinical or
operational outcomes); (2) are priced at rates materially above prevailing market rates; or (3)
cannot be implemented by the requesting party without disproportionate technical or financial
burden. Specifically, an EHR developer should not be able to claim exhaustion by pointing to a
proprietary integration toolkit or app marketplace that requires the requesting party to join on
non-negotiable terms. The revision should require a genuine, documented, good-faith effort to
accommodate the requested manner before exhaustion may be invoked.

4. Manner Exception – Unconscionable Contract Terms

Innovaccer strongly supports the proposed revision to §171.301(a) clarifying that the Manner
Exception cannot be satisfied through contracts that are not at market rate, are contracts of
adhesion, or contain unconscionable terms. This addresses a pattern of conduct that
Innovaccer and our provider customers have directly encountered in the market.

Data access contracts negotiated by EHR developers frequently exhibit precisely the
characteristics the proposed rule targets. Health systems seeking to share EHI with Innovaccer
via FHIR APIs have encountered contracts that impose non-negotiable fee schedules at rates
substantially above market, restrict data use in ways that prevent the analytics and population
health functions the health system specifically commissioned, and include unilateral termination
clauses allowing the EHR developer to revoke API access on short notice with no obligation to
provide a technically comparable alternative. These contracts are presented on a take-it-or-
leave-it basis to health systems that have no practical ability to switch EHR vendors and
therefore no meaningful negotiating leverage. The Manner Exception was not designed to
accommodate this dynamic, and the proposed revision appropriately closes this avenue of
abuse.

We recommend that ASTP/ONC additionally: (1) issue guidance or illustrative examples
defining what constitutes “market rate” for common EHI access mechanisms, such as FHIR bulk
data export and individual record API access, drawing on evidence from competitive market
segments; and (2) consider establishing a reporting or transparency mechanism through which
third-party actors may bring potentially unconscionable contract terms to ASTP/ONC’s attention

                                                                                                   3

even when uncertain whether a full information blocking violation has occurred. Transparency in
contracting practices would itself have a deterrent effect on the most abusive terms.

5. TEFCA Manner Exception – Complete Removal

Innovaccer supports the removal of the TEFCA-specific Manner Exception (Subpart D of Part
171, including §171.403 and the associated definitions in §171.401). As an organization that
has integrated TEFCA-based data exchange capabilities into its interoperability platform and
collaborates with Qualified Health Information Networks (QHINs), Innovaccer has a direct
interest in the integrity and coherence of the TEFCA ecosystem.

ASTP/ONC is correct that continued and growing QHIN participation demonstrates that TEFCA
does not require the incentive of an information blocking exception to attract participants. More
importantly, the exception creates a perverse dynamic: it permits actors to limit EHI access by
directing requestors to TEFCA as the sole approved exchange pathway, even where other
technically capable and mutually acceptable exchange mechanisms exist. This instrumentalizes
TEFCA as a gatekeeping mechanism rather than as one among many pathways for
interoperable exchange.

TEFCA’s value lies in its ability to enable nationwide, standardized, interoperable data
exchange, not in its use as a justification for restricting other forms of exchange. Removing the
exception reinforces that actors may not limit EHI access to TEFCA-only channels and ensures
that the information blocking framework applies uniformly regardless of an actor’s TEFCA
participation status. This is the right policy outcome.

Certification Criteria Changes

1. Decision Support Interventions – AI Model Card Removal

Innovaccer understands the administrative rationale for removing the source attribute (“model
card”) requirements and intervention risk management requirements for predictive DSIs under
§170.315(b)(11). Rigid, prescriptive, compliance-checkbox approaches to AI transparency can
produce documentation burden without producing meaningful clinical insight into AI behavior.
We do not oppose the removal of these specific requirements.

However, we urge ASTP/ONC not to treat deregulation of this certification criterion as a signal
that AI transparency in clinical decision support is a low priority. The removal of this requirement
eliminates the only federal verification mechanism for AI transparency in certified health IT, at
precisely the moment when AI-powered clinical tools are becoming pervasive. The question is
not whether AI transparency matters; it is whether mandatory certification is the right instrument.

We recommend that ASTP/ONC: (1) develop and publish voluntary standards for AI
transparency in health IT that can serve as a market expectation and reference framework,
even absent mandatory enforcement; and (2) incorporate thoughtfully designed AI
accountability expectations into any future FHIR-based certification criteria as the agency builds
its next-generation certification framework. The AI-enabled interoperability future that
ASTP/ONC envisions requires that clinicians, patients, and health systems can evaluate and
trust the AI-driven recommendations embedded in their workflows. Voluntary standards, actively
promoted and referenced by the agency, are the right mechanism to advance this goal without
imposing prescriptive compliance burdens.

                                                                                                    4

2. Privacy and Security Certification Criteria – Complete Removal

Innovaccer acknowledges the rationale for removing certification criteria that have achieved
widespread industry adoption after more than a decade of implementation, and we recognize
that HIPAA’s regulatory framework continues to impose substantive security obligations on
covered entities and business associates. We do not oppose the deregulatory direction of this
proposal. However, we have concerns about the complete and undifferentiated removal of all
privacy and security certification criteria.

Certification provided a proactive, independently verified assurance that EHR systems
implement core security controls (access controls, audit logging, encryption, and authentication
mechanisms) before deployment into clinical environments. The fact that these capabilities are
“widely adopted” does not mean they are uniformly implemented or equivalently effective across
the industry. Removing certification requirements eliminates the only independent pre-
deployment verification mechanism for these controls, leaving providers relying entirely on
complaint-driven HIPAA enforcement after a breach has already occurred. This is a meaningful
step backward for the security posture of the certified health IT ecosystem.

Innovaccer’s provider customers regularly evaluate the security posture of EHR systems and
third-party technology partners as a precondition for data sharing arrangements. The existence
of EHR certification requirements for security criteria provided a baseline assurance that
informed these evaluations. We recommend that ASTP/ONC consider retaining a core subset of
the most critical criteria—specifically those related to auditing (§170.315(d)(2)), access controls
(§170.315(d)(1)), and encryption of stored EHI (§170.315(d)(7))—while removing criteria that
have become genuinely redundant with standard industry practice. Alternatively, if full removal
proceeds, ASTP/ONC should consider whether a published self-attestation standard, combined
with clear HIPAA enforcement guidance, could provide comparable assurance to relying parties
at lower regulatory burden.

Thank you again for this opportunity to respond to the HTI-5 Proposed Rule. Our team is
available to discuss any of our comments in more detail.

Sincerely,

Abhinav Shashank
CEO and Co-Founder
Innovaccer

David Nace, MD
Chief Medical Officer

Dave Cassel
Senior Vice President, Interoperability

Lisa Bari
Vice President, Policy and Partnerships

                                                                                                  5

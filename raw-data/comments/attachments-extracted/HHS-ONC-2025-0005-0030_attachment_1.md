# HHS-ONC-2025-0005-0030 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0030/attachment_1.pdf

---

Re: RIN 0955-AA09; Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions to
Unleash Prosperity

I. Executive Summary While the Department’s intent to reduce regulatory friction through the proposed removal of
34 certification criteria aligns with Executive Order 14192, specific technical decouplings in this Proposed Rule risk
creating operational vacuums that undermine the statutory goals of the 21st Century Cures Act. Specifically, the
wholesale removal of privacy and security certification criteria (45 CFR 170.315(d)) creates a dangerous divergence
between technical capability and legal obligation. While HIPAA establishes the obligation for security, ONC
certification has historically ensured the mechanism exists to meet it. Removing the latter does not alleviate the
burden of the former; it merely shifts the verification cost from the developer to the provider, who lacks the
technical capacity to audit software architecture.

Furthermore, the proposed definitions regarding "market rate" and "contract of adhesion" within the Information
Blocking regulations invite immediate judicial scrutiny post-Loper Bright. By venturing into economic regulation
and contract law interpretation without explicit statutory delegation, the agency risks vacatur of the entire
Information Blocking framework. The recommendations below propose a functional middle ground: streamlining
certification to focus on interoperability "plumbing" while retaining essential technical baselines that ensure the
market can operate efficiently without inviting systemic risk or judicial intervention.

II. Procedural & Statutory Defects The proposal to define "market rate" and "unconscionable terms" within the
Manner Exception (45 CFR 171.301) constitutes an expansion of agency authority that likely exceeds statutory
intent. Under Loper Bright Enterprises v. Raimondo, courts will no longer defer to agency interpretations of
ambiguous statutes. The Cures Act authorizes ONC to define "reasonable and necessary activities" that do not
constitute information blocking; it does not explicitly grant the agency authority to regulate price controls or
adjudicate contract enforceability. Attempting to anchor "market rate" definitions to the Stark Law (42 CFR
411.351) conflates anti-kickback statutes with interoperability incentives, creating a "logical outgrowth" defect.

Additionally, the Regulatory Impact Analysis (RIA) fails to account for the shifted cost of security verification. By
removing § 170.315(d) (Privacy and Security), the agency posits a cost savings for developers. However, the agency
ignores the requisite increase in operational expenditure for providers, who must now independently validate that
uncertified software supports their HIPAA compliance (e.g., audit logging). This omission renders the Cost-Benefit
Analysis arbitrary and capricious, as it deletes a cost from one side of the ledger without acknowledging its
reappearance on the other.

III. Section-by-Section Technical Analysis

1.  Removal of Privacy and Security Criteria

    • Current Proposal: Remove § 170.315(d) entirely, relying on HIPAA compliance as the sole regulatory
    driver.

    • The Issue: This creates a "capability gap." HIPAA mandates that a provider maintain audit logs; it does not
    force a software vendor to build audit log functionality. If § 170.315(d)(2) (Auditable events) is removed, a
    developer can legally sell a "certified" EHR that lacks the technical capacity to record audit trails, leaving
    the provider legally exposed under HIPAA with no recourse.

    • Recommendation: Retain § 170.315(d)(1) (Authentication), (d)(2) (Auditable events), and (d)(12)
    (Encrypt credentials) as "Baseline Technical Dependencies." These should not require full attestation
    burdens but must remain as binary "presence/absence" checks to ensure the software is legally usable by a
    covered entity.

2.  AI Transparency and Source Attributes
     • Current Proposal: Remove § 170.315(b)(11)(iv) and (v) regarding source attribute transparency for
    Decision Support Interventions (DSI).

        •    The Issue: Deregulation relies on market forces to ensure quality. However, markets fail when information
             asymmetry exists. If providers cannot view "source attributes" (e.g., training data demographics), they
             cannot evaluate the efficacy or safety of an AI model. Removing transparency requirements does not
             unleash prosperity; it unleashes "lemons" into the clinical market, as buyers cannot distinguish high-quality
             models from biased ones.

        •    Recommendation: Retain § 170.315(b)(11)(iv) (Source Attributes) strictly as a "Transparency Labeling"
             requirement. Remove the risk management governance burdens (§ 170.315(b)(11)(vi)) to reduce overhead,
             but keep the "nutrition label" so the market can function efficiently.

3.  Information Blocking: Third Party Modification

    • Current Proposal: Remove § 171.204(a)(3) (Third Party Seeking Modification Use), effectively
    mandating that actors support "write" access from third parties.

    • The Issue: While intended to break data silos, unfettered write access poses severe data integrity risks. If a
    third-party app overwrites a patient’s allergy list with malformed data via an API, clinical safety is
    compromised. The current proposal lacks a mechanism for actors to reject write requests based on data
    integrity validation without triggering an Information Blocking claim.

    • Recommendation: Adopt a new specific condition within the Infeasibility Exception: "Data Integrity &
    Validation." An actor should be permitted to deny a modification request if the third party refuses to adhere
    to the actor's published, non-discriminatory schema validation rules or technical integrity safeguards.

4.  Manner Exception and Economic Definitions

    • Current Proposal: Define "market rate" and "contract of adhesion" in § 171.102 and § 171.301.

    • The Issue: As noted in Section II, this invites Loper Bright challenges. Furthermore, "market rate" is
    operationally indeterminate in software licensing, where value is often tied to volume, user count, or
    ancillary services.

    • Recommendation: Strike the definitions of "market rate" and "contract of adhesion." Replace with text
    grounded in the Cures Act: "Fees and terms must be non-discriminatory and consistent with rates charged
    to similarly situated customers." This language is defensible under statutory text and avoids positioning
    ONC as a price regulator.

IV. Operational Impact Assessment The proposed removal of the "Safety-Enhanced Design" (SED) criterion (§
170.315(g)(3)) will likely result in a degradation of clinical usability in the medium term. While SED documentation
was administratively burdensome, it forced a "user-centered" development cycle. Without this check, developers
may revert to engineering-centric interfaces that increase cognitive load on clinicians. To mitigate this without
regulation, ONC should prioritize "User Feedback" signals within the Insights Condition of Certification (which is
being retained/refined), using post-market data to identify usability failures rather than pre-market documentation to
predict them.

Additionally, regarding the removal of the TEFCA Manner Exception (§ 171.403): This is an operationally sound
decision. The exception artificially insulated TEFCA from market competition. By removing it, ONC forces TEFCA
to compete on merit and utility rather than regulatory preference. This aligns with the "Unleashing Prosperity"
directive by ensuring that the most efficient exchange modalities (whether TEFCA-based or direct FHIR
connections) win based on adoption, not exemption.
V. Conclusion The drive to deregulate is necessary to clear technical debt (like C-CDA reliance), but it must be
surgical. Removing the legal requirement for a feature (like audit logs) does not remove the market necessity or the
downstream legal reliance on that feature. The recommendations above preserve the deregulatory spirit while
installing the necessary technical floorboards to prevent market failure and legal exposure for providers.

Respectfully submitted,

Rohan Sharma
Aspen Institute Civic AI Leader
Member, U.S. Technical Advisory Group to ISO/IEC (AI)
Member, ACM Technology Policy Committee
Author, AI & the Boardroom (Springer)

Submitted in an individual expert capacity. All views expressed are my own and do not represent any institution or
organization

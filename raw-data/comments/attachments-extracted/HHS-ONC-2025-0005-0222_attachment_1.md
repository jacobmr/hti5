# HHS-ONC-2025-0005-0222 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0222/attachment_1.pdf

---

Department of Health and Human Services
Assistant Secretary for Technology Policy Office of the National Coordinator
Mary E. Switzer Building, 7033A, 330 C Street SW
Washington, DC 20201

Assistant Secretary Dr. Thomas Keane,
PointClickCare (PCC) appreciates the opportunity to comment on the ASTPONC Health Data,
Technology, and Interoperability: Deregulatory Actions to Unleash Prosperity (HTI-5) Proposed
Rule.
PCC is a leading health tech company with one simple mission: to help providers deliver
exceptional care. For over 20 years, we’ve been transforming how care is planned, delivered, and
paid for. PCC has two Certified EHR technology systems coupled with the largest long-term and
post-acute care (LTPAC) dataset. Those systems and data power intelligent care transitions and
improved clinical outcomes. We are also the only post-acute care organization participating in all
federal interoperability initiatives, thus setting a new standard in interoperability for the industry.
More than 27,000 LTPAC organizations, 3,600 ambulatory clinics, 2,800 hospitals, 350 risk-
bearing providers, 70 state and government agencies, and every major U.S. health plan trust us to
help them navigate a changing healthcare landscape. Our Marketplace of 400+ integration
partners helps organizations customize their suite of solutions to connect care, billing, and
operations—driving efficiency and better outcomes.

PCC generally supports ASTP/ONC’s deregulatory direction for the Health IT Certification
Program, including the proposal to streamline legacy certification criteria and reorient
certification around modern, FHIR-based interoperability. We agree that eliminating low value or
duplicative criteria can reduce administrative burden, lower maintenance costs, and allow
developers to reallocate resources toward innovation, performance, and usability.

However, PCC strongly opposes ASTP/ONC’s abrupt reversal of course on information-blocking.
HTI-5’s proposed changes to the information-blocking regulations are individually disruptive to
industry innovation, inconsistent with other statutory schemes, and dangerous to patient health
and privacy. For example, ASTP/ONC’s unexplained and statutorily questionable demand that
actors treat AI agents and screen-scraping bots as equivalent to human users will vastly multiply
demands on IT developers to build out and harden EHI repository and transmission infrastructure
while serving primarily to facilitate the kind of mass patient EHI exfiltration that HIPAA’s text and
best practices are designed to preclude. And its similarly unexplained and unreasonable removal
of restrictions on third-party modification of EHI will put patients’ health in danger.

pointclickcare.com Page 1 of 14
Those unreasoned changes are even more dangerous in combination than they are on their own.
It takes little imagination to conceive of the disastrous consequences for patients’ health of a
hallucinating third-party AI agent with ASTP/ONC–mandated instantaneous, 24/7 write access to
those patients’ records—especially given HTI-5’s separate weakening of audit-trail requirements.

Similarly, HTI-5’s proposed information-blocking changes are internally inconsistent. For
example, on the one hand, HTI-5 seeks to expand actors’ duties to provide equivalent access to
all comers. At the same time, it seeks to severely curtail actors’ ability to rely on standardized
contracts to ensure such equivalent access—a set of requirements that are incompatible on their
face.

We urge ASTP/ONC to reconsider in their entirety HTI-5’s proposed information-blocking changes,
which represent an unexplained about-face from prior regulations; are contrary to and in excess
of statutory authority; and are arbitrary, capricious, and an abuse of discretion not least because
they do not represent a rational choice based on facts found. We separately urge ASTP/ONC to
preserve a clear, predictable framework for information blocking and to maintain baseline
safeguards, particularly around audit trails, automation, and contractual certainty, so that
“deregulation” does not increase risk, reduce innovation, or—most importantly—compromise
patient safety.

Health Information Technology Standards, Implementation Specifications, and Certification
Criteria and Certification Programs for Health Information Technology

Fast Healthcare Interoperability Resources (FHIR). We support HTI 5’s overarching goal of
reducing certification burden and consolidating criteria, including many that have become
redundant as the industry moves to FHIR based APIs and more modular architectures. We believe
HTI-5’s proposed FHIR priority is positive, but we also urge ONC to balance deemphasis of CDA
with a roadmap for both CDA and HL7 v2, plus clear expectations for care-transition and public-
health workflows that are not yet ready to be fully FHIR native.

Certified Electronic Health Record Technology (CEHRT) privacy and security criteria. PCC
largely supports rationalizing certification requirements, but we are concerned that the proposed
removal and restructuring of criteria related to authentication, auditable events, and audit reports
may erode accountability and traceability across complex, multi actor and omni channel data
exchange. We understand that ASTP/ONC intends to lean more heavily on other statutory and
regulatory frameworks for security and privacy; however, given the heightened emphasis on
automation, third party apps, and agentic AI, auditable trails of access, exchange, and use are
more—not less—critical.

We are concerned that the proposed wholesale removal of all CEHRT privacy and security
criteria—including auditable events and tamper resistance, audit reports, emergency access,

pointclickcare.com Page 2 of 14
integrity, and multi factor authentication—eliminates important, technology-neutral anchors for
baseline security practices in healthcare and medicine at large.

Audit-trail capabilities, tamper-resistant logging, and related controls are foundational to
safeguarding electronic health information (EHI), supporting investigations of inappropriate
access, and enabling compliance with HIPAA, the Cures Act information-blocking provisions, and
other federal and state requirements. Accordingly, we respectfully request that ASTP/ONC take
the following actions:

    •    Clearly articulate how the removal of security-oriented certification criteria will interact
         with expectations under HIPAA, information-blocking enforcement, TEFCA, and other
         federal frameworks;
    •    Consider retaining, consolidating, or modernizing a set of security- and audit-related
         expectations (for example, a streamlined criterion that references widely adopted
         standards such as ASTM E2147 18 for audit and disclosure logs) as a floor for certified
         health IT; and
    •    clarify that actors remain expected to implement robust, risk-appropriate audit-trail and
         security controls, and that the absence of certain certification criteria does not weaken
         enforcement expectations under other authorities.

We respectfully ask ASTP/ONC to provide further clarification regarding the following topics:

    1. How the proposed changes to the relevant security/audit criteria, including any that
       concern use or relocation of the current functionality, will ensure that certified health IT
       continues to support comprehensive, tamper-resistant audit logs of EHI access, use, and
       modification across human and automated actors.
    2. Whether ASTP/ONC anticipates any minimum expectations for the scope, retention, and
       integrity of audit logs for certified products, given the increased reliance on automation
       technologies, TEFCA-enabled exchange, and third-party integrations.

USCDI 3.1
PCC supports ASTP/ONC’s continued use of the United States Core Data for Interoperability
(USCDI) as the baseline for standardized data exchange and recognizes the important advances
reflected in USCDI version 3 and the proposed adoption of USCDI v3.1. Our customers, including
long term and post-acute care providers across the country, depend on these data classes and
elements to support clinical care, quality reporting, public-health obligations, and other state
regulatory requirements.
To maximize the benefits of future USCDI iterations while maintaining stability for implementers,
we encourage ASTP/ONC to provide a minimum of two years between the finalization of a USCDI
iteration or full version change and the next such change.

pointclickcare.com Page 3 of 14
In parallel, we respectfully request that ASTP/ONC continue to allow enforcement discretion to
allow health IT developers and ONCACBs to certify and support any current USCDI v3–based
implementation (for example, v3 or v3.1) during this transition period, so long as the
implementation remains consistent and well documented.
This flexibility would enable our sector to timely deliver the value of USCDI v3 data elements while
avoiding unnecessary disruption for burdened providers and other end users whose existing
workflows and regulatory obligations are already tightly coupled to USCDI v3–aligned content.

Conditions and Maintenance of Certification Requirements for Health IT Developers

PCC supports ASTP/ONC’s use of Conditions and Maintenance of Certification to promote
interoperability, trust, and accountability, but urges that related requirements for assurances,
attestations, APIs, real-world testing (“RWT”), and insights should remain grounded in what
CEHRT developers can control and audit. Certification obligations should prioritize standards-
based APIs as the preferred access mechanism and should not require developers to attest to,
support, or absorb risk from ungoverned third-party automation, RPA, AI agents, or browser-
based tools operating through human credentials. PCC supports the ASTP’s proposal to
significantly reduce and simplify RWT requirements, scaling back mandatory RWT plans and
results as part of a broader deregulation and narrowing of the Health IT Certification Program’s
scope.

Information Blocking Changes

In HTI-5, ASTP/ONC proposes to modify the existing regulatory exceptions to the 21st Century
Cures Act’s broad definition of “information blocking,” under which most ordinary EHR activities
pose a significant source of litigation and compliance risks absent a clearly applicable exception.
The proposed modifications represent an unexplained wholesale reversal of course for ASTP/ONC
from the focus of previous HTI rules, which appropriately considered and sought to address the
“problematic level of uncertainty” actors experience in ensuring that they fall within a relevant
exception or are, to the contrary, engaged in prohibited information blocking. 89 Fed. Reg. 1381.
The proposed HTI-5 rule also exceeds ASTP/ONC’s statutory authority, as the modifications
ASTP/ONC seeks to make to the information-blocking regulations are neither “reasonable” nor
“necessary” to ensure safe and secure access, exchange, and use of EHI. See 42 U.S.C. § 300jj-
52(a)(3).

The structure of the Cures Act’s prohibition on information blocking means that deregulation in
this space is not the unmitigated boon it may represent in other areas. Instead, deregulation has
the paradoxical effects of increasing costs and suppressing innovation. Because the regulatory
exceptions to the statutory definition of “information blocking” function as necessary carveouts

pointclickcare.com Page 4 of 14
from the Cures Act’s expansive baseline prohibition, the practical reality is that health IT
developers and providers must operate entirely within those exceptions, and face material
enforcement and litigation risk whenever the regulations providing for those exceptions are
removed, narrowed, or made more ambiguous. Given those structural circumstances and the
rising cost of IT infrastructure investment, the health IT industry’s reliance interest in steady-state
regulation, marked by only predictable and incremental change, is increased.

The litigation risk for actors is compounded by recent Supreme Court precedent that places on
the defendant the onus of proving, as an affirmative defense, the applicability of a regulatory
exception to a statutorily delineated category, instead of requiring a plaintiff to plead facts
sufficient to show that the exception does not apply.1 The practical effect of this holding on actors
in the health IT space is that a requestor may currently all but guarantee that even an unfounded
complaint of information blocking will survive a motion to dismiss and expose actors to the
significant burden and expense of discovery practice, dramatically increasing settlement
pressure. Further, the relative dearth of Cures Act precedent interpreting these regulations leaves
both actors and courts without useful guideposts to prevent erroneous holdings or guide correct
ones.

This asymmetry of litigation risk means that it is actors, not requestors, who require the clearest
regulatory protection—a circumstance that previous HTI rules appeared to recognize. Yet in the
HTI-5 proposal, ASTP/ONC has instead changed course to safeguard primarily the interests of
requestors—even those pressing nonstandard, non-interoperable, non-scalable, and disruptive
access requests.

Constraining exceptions (for example, narrowing infeasibility pathways, weakening safe harbors
tied to TEFCA participation, or eroding contractual certainty) does not operate as deregulation for
actors. Instead, it shrinks the space in which developers and providers can safely operate,
increasing costs that would likely be passed downstream to providers, and litigation exposure and
diverting resources from innovation and interoperability to risk management.

PCC therefore urges ASTP/ONC to ensure that any changes to information blocking exceptions—
particularly those addressing manner, infeasibility, and TEFCA—enhance predictability for good
faith actors rather than expand liability traps.

Robotic Process Automation and AI Agent Access

We acknowledge ASTP/ONC’s aim to modify and extend information-blocking enforcement as
well as its intent to expand data sharing with various robotic process automation (RPA)
modalities. However, we note that HTI-5’s proposed changes do not fully account for existing

1
Cunningham v. Cornell Univ., 604 U.S. 693, 701 (2025).

pointclickcare.com Page 5 of 14
regulations, covered entity practices, technical and security realities, or the combined impact of
proposed rule changes to information blocking exceptions.

In proposing modifications to HTI-5, ASTP/ONC seeks to codify that “robotic process automation”
and “autonomous artificial intelligence” users are to be treated the same as human users. 90
Fed. Reg. at 61005. That dangerous change will operate as an innovation-killing unfunded
mandate, imposing significant new infrastructure and bandwidth costs on actors without any
commensurate benefit. Moreover, because access of the type ASTP/ONC seeks to mandate is in
many cases indistinguishable until after the fact from that of malicious threat actors, ASTP/ONC’s
new mandate puts at risk both patients’ privacy and their health outcomes.

ASTP/ONC has overlooked that automated processes, commonly known as “bots,” can and often
do rapidly overwhelm systems designed and scoped for human-speed interaction. That is how a
denial-of-service or DOS attack on a web service occurs: an attacker bombards a system with
rapid requests such that it is no longer able to respond to legitimate requests from legitimate
users. Using bot-prevention tools to reduce the deleterious effects of robotic process automation
on systems not scoped for and hardened against those effects is an IT best practice—indeed,
many federal-government systems employ CAPTCHAs and similar tools to prevent bot access
from overwhelming their servers.

Accordingly, distinguishing between permissible uses of robotic process automation (RPA) and AI agents and
activity associated with what are now routine cyberattacks targeting patient data is a nontrivial task. This
challenge is exacerbated by the sudden shift in ASTP/ONC’s position, which leaves regulated entities without
clear, prospective guidance. In the absence of such clarity, any mechanism to identify and distinguish
authorized automation from malicious activity is necessarily reactive, costly, and technically complex, relying
on after-the-fact investigation rather than predictable, real-time controls. This approach increases
compliance burden without a commensurate improvement in patient data security.

Complying with this mandate will immediately impose at least two unexpected costs on industry:
first, health IT developers will be required to develop and deploy new security protocols sufficient
to rapidly and accurately identify threat actors and to distinguish those actors from bot and AI
users that ASTP/ONC mandates have full patient EHI access. Whether such protocols are even
feasible is an open question. And, second, health IT developers must simultaneously make
massive new investments in infrastructure and bandwidth availability to ensure that access for
these newly authorized access types does not overwhelm systems designed, scoped, and
accordingly priced for human-speed access, rendering the critical data stored on those systems
inaccessible for the health-care providers and patients that rely on it and increasing costs for EHI
use, exchange, and access.

It is also important to consider that RPA and similar automated approaches do not have an
inherent obligation or technical capability to evaluate or honor integrated patient consent
mechanisms as captured by facilities, providers, or CEHRT end users. Rather than participating in

pointclickcare.com Page 6 of 14
consent-aware workflows, RPA typically operates by reusing existing user credentials and
replicating user actions, thereby circumventing consent controls instead of enforcing them. As a
result, automated extraction, or use of EHI may technically appear authorized at the system level
even though it lacks patient-directed consent, purpose limitation, or provider intent, creating
downstream compliance, trust, and patient safety concerns.

We are separately concerned that ASTP/ONC’s expansive new expectations around RPA and
other automation technologies, especially when framed as covered “without limitation,” will
undermine intellectual property protections and longstanding business models that rely on
controlled, contract-governed access. Constraining actors’ ability to limit or govern such
activity—even where it conflicts with or skirts license terms, poses security risks, or interferes
with system performance—could result in significant disruption of commercial relationships and
reduced incentives to invest in higher-value, standards-based, interoperable integration options.

In a related vein, the proposed rule providing that “access” and “use” of electronic health
information includes automated means “without limitation,” including autonomous AI systems
and RPA bots operating 24/7/365, risks being interpreted in practice as endorsing unfettered,
continuous ingestion of full-record data. Such mass data exfiltration is fundamentally misaligned
with the HIPAA Privacy and Security Rules, running afoul of the core requirements (1) that every
use and disclosure of protected health information (PHI) be tied to a permissible purpose or valid
authorization under 45 CFR §§ 164.502 and 164.508, and (2) that covered entities and business
associates make reasonable efforts to limit each use, disclosure, and request to the minimum
necessary PHI to accomplish the intended purpose, as required by 45 CFR § 164.502(b). “Always
on” AI agents and bots that routinely pull entire medical records across populations, purportedly
in the service of generating vaguely defined “insights,” or performing similarly vague
“optimization,” cannot be reconciled with the minimum-necessary standard or with the Notice of
Privacy Practices and patient expectations under 45 CFR 164.520.

We have further concern that granting expansive write/delete capabilities to automated agents
(as ASTP/ONC proposes to do via its elimination of the “third party seeking modification”
infeasibility prong) raises the likelihood of downstream liability exposure, such as malpractice
claims or False Claims Act allegations where erroneous modifications triggered by AI
hallucination or by negligently or maliciously programmed RPA bots affect treatment decisions or
billing. A clear, balanced framework is needed to ensure that innovation in AI-enabled workflows
does not compromise patient safety or create untenable legal risk for providers and developers.
As drafted, HTI-5 provides health IT developers with no ex ante safeguards against such
problematic usage, instead suggesting that health IT developers rely on existing regulatory
exceptions. As a legal matter, those exceptions are largely untested in courts of law and, in any
event, they operate only as affirmative defenses to accusations of information blocking and are
thus unavailable at the motion-to-dismiss stage in most cases.

pointclickcare.com Page 7 of 14
Contrary to ASTP/ONC’s assertion that it has always intended (and its apparent belief that
industry has always recognized) human and automated users to be interchangeable, HTI-5’s
proposed changes to the “access” and “use” definitions represent a fundamental and dangerous
change in the agency’s regulatory expectations of industry. The new dangers posed by
hallucinating AI agents cannot have been part of ASTP/ONC’s consideration when promulgating,
for example, the 2020 Cures Act rule, which pre-dates the development and widespread adoption
of large-language-model-based machine-learning systems. See 85 Fed. Reg. 25642. ASTP/ONC
appears not to have considered many of the risks to patient health and privacy or to settled
industry reliance interests this change will pose.
We ask that the final HTI-5 rule reconsider the proposed rule’s approaches on each of these
points. The final HTI-5 rule should make explicit that nothing in the definitions of “access” or
“use” nor in the requirement that APIs enable EHI to be accessed, exchanged, and used “without
special effort,” may be construed to require actors to permit automated or AI enabled processes.
In particular, actors should maintain the ability to reject automated processes that bypass or
defeat HIPAA required safeguards, including role based access, purpose of use limitations,
minimum necessary filtering, access controls, and audit logging under 45 CFR §§ 164.306–
164.312.
The rule should reaffirm that reasonable and appropriate technical and policy controls on
automated, bulk, or continuous queries, such as throttling, scoping tokens to specific treatment
or operations purposes, and prohibiting indiscriminate full-record scraping are permissible and
expected measures to comply with the HIPAA Privacy and Security Rules, and that such
measures, standing alone, do not constitute information blocking.
We urge ASTP/ONC to:

    •    Avoid “without limitation” and similar phrasing that could be read to require unfettered
         RPA and AI access at any scale, regardless of system design or resource constraints.
    •    Clarify that reasonable (and often industry-standard) technical and rate-limiting safeguards
         to protect against performance degradation and to safeguard system stability, clinical
         performance, and security (for example, concurrency caps, queueing, circuit breakers, or
         tiered SLAs) remain permissible and will qualify under the Security and Infeasibility
         exceptions when appropriately justified and documented.
    •    Make explicit that actors are not required to incur unlimited, unfunded infrastructure
         expansions (bandwidth, processor power, storage, logging, and audit) solely to satisfy
         automated-access demands from third-party tools, particularly where those demands
         would impair care delivery for existing users.
    •    Clarify that honoring reasonable contractual restrictions and IP protections, particularly
         where standards based and API options are available, does not by itself constitute
         information blocking.

pointclickcare.com Page 8 of 14
 • Encourage migration from brittle RPA/screen-scraping approaches toward robust, FHIR-
based APIs and other standardized interfaces, and encourage actors to prioritize those
secure, scalable channels.
• Provide examples illustrating when restricting or deprioritizing RPA is permissible (for
example, where it conflicts with security, performance degradation, IP, or safety
obligations) versus when it may raise information-blocking concerns.

Infeasibility Exception

The existing “manner exception exhausted” prong of the Infeasibility exception provides a critical
safety valve, allowing actors to decline to build special access methods for requestors that refuse
to pay reasonable, market-rate prices for access in their preferred manner. As ASTP/ONC
previously recognized, requiring actors to offer at least two recognized, federally endorsed
alternatives when agreement cannot be reached on an initial manner of access, exchange, or use
appropriately balances a requestor’s eccentric preference for bespoke access (for which it must
pay market rates) with Congress’s intention to promote interoperable, scalable, and federally
standardized EHI solutions. This structure supports interoperability and innovation by
encouraging scalable, standards-based approaches. It also prevents the proliferation of
bespoke, one-off access solutions that are costly to build and maintain, difficult to secure, and
largely non-interoperable.

HTI-5’s proposed tightening of the “manner exception exhausted” condition, without a
comparably clear alternative, will increase uncertainty about when actors may reasonably decline
idiosyncratic requests that fall outside supported, standards-based capabilities.

As drafted, HTI-5’s revision to the “manner exception exhausted” condition is likely to have the
following negative effects.

    •    Increase litigation risk and discovery burdens, because actors will have fewer predictable
         safe harbors when declining bespoke solutions.
    •    Require courts to inquire into the reasonableness of arm’s-length business negotiations
         that would ordinarily be outside the scope of litigation.
    •    Divert resources away from scalable, standards-based interoperability toward one-off
         builds driven by individual requestors.
    •    Inhibit innovation by consuming engineering, security, and operational capacity in
         maintaining customized pathways that do not generalize to the broader ecosystem.

PCC urges ASTP/ONC to make the “manner exception exhausted” prong of the Infeasibility
Exception a clear, operationally workable framework that protects actors who offer good-faith,
reasonable, standards-aligned alternatives.

pointclickcare.com Page 9 of 14
Third Party Seeking Modification

PCC is particularly concerned by the proposed removal of the “third party seeking modification”
infeasibility condition, especially when combined with HTI-5’s expanded emphasis on automated
and agentic AI access. Automated processes and AI agents with write or delete access to EHI can
change records much more quickly than those changes can be audited or clinically validated,
creating a non-trivial risk that clinicians will rely on erroneous or manipulated data in diagnosis
and treatment. Moreover, while a negligently or maliciously programmed automated process may
make mass changes that are comparatively easier to detect because of their repetitive nature,
erroneous edits or deletions that are triggered by, for example, AI agent hallucinations will be
much more likely to be one-off changes whose erroneous nature may be difficult to detect without
the intervention of a human physician. Health IT developers can have no guarantee that any third-
party LLM-driven agent was trained on appropriate materials and in an appropriate fashion to
render judgments about which information can be changed without injuring a particular patient.
And so, granting such agents carte blanche access to sensitive patient health and financial
records as a matter of regulatory fiat is—to be blunt—foolhardy.

This change poses significant risks for the EHR system, its clinical and operational end users, and
most importantly its patients. ASTP/ONC has not sufficiently explained the rationale for this
change and does not appear to have thoroughly investigated the risks it poses to patients’ privacy,
health, and safety.

In combination with the new requirement of human–automated user parity, the deletion of the
“third party seeking modification” infeasibility exception will result in patient deaths that are
avoidable by the simple expedient of not requiring actors to give write/delete access to third-party
automated agents.

ASTP/ONC points to the Security and Preventing Harm exceptions as mechanisms for actors to
seek to control dangerous modification access. But, again, those pathways are no answer—they
are resource intensive and, given the structure of the Cures Act’s information-blocking
prohibition, those pathways expose actors, including our providers, to enforcement and litigation
risk whenever they are invoked. To appropriately manage the risks generated by this change,
actors will be forced to deploy costly new monitoring, validation, and clinical-review processes to
oversee automated modification activity, diverting resources from product development and
interoperability enhancements. And to be clear, no such processes currently exist on which to
model or price such human-physician-intensive intervention. ASTP/ONC seeks, in effect, to hinge
patients’ lives and health on the efficacy of a wholly hypothetical Cures Act–exception-
enforcement system that no one has ever built or even fully conceived.

We recommend that ASTP/ONC:

pointclickcare.com Page 10 of 14
 • Reconsider eliminating the “third party seeking modification” infeasibility concept.
• Assess how the combination of audit trail and CEHRT security changes, potential RPA
allowances, technical practicalities/challenges, and write modifications without a human
end user impacts patient safety, clinical integrity, and record fidelity.
• Clarify that actors may require appropriate contractual, technical, and governance
controls (for example, change logging, provenance, roll back mechanisms, and clinical
oversight) as prerequisites for granting automated or AI driven modification rights.
• Provide clear, repeatable, generalizable examples of scenarios in which it is reasonable,
and not information blocking, for actors to deny or heavily constrain modification of access
by automated agents that lack adequate validation or oversight.

Manner Exception

PCC appreciates the goal of preventing unfair contractual practices that could undermine
equitable access, exchange, and use of EHI.

ASTP/ONC has overlooked that HTI-5’s proposed approach to “contracts of adhesion” and fee
expectations will destabilize the contracting landscape that underpins scalable,
nondiscriminatory access and will interfere with thousands of existing contracts on the
insufficient basis that those contracts are based on form agreements. Form agreements and
standardized pricing are widely used to manage legal costs, and—importantly for the information-
blocking regime that has heretofore applied to this industry—to support consistent compliance
with information-blocking requirements while ensuring impartial access among similarly situated
customers. They also enable health IT developers to operationalize, maintain, and update
complex technologies on a scalable basis by aligning technical, security, and support obligations
across a broad customer base, rather than fragmenting implementation and compliance
requirements through bespoke negotiations.

Requiring actors to avoid “contracts of adhesion” (defined in part as form contracts without a
“realistic opportunity to bargain”) while at the same time demanding that they provide similar
access to all comers will lengthen negotiation cycles, increase litigation risk, and breed
uncertainty about acceptable pricing models, scalability and operationalization of the technology.
Nor does the proposed HTI-5 rule explain how actors should marry ASTP/ONC’s new prohibition
on many types of form agreements with ASTP/ONC’s demands for increased uniformity among
requestors across requestor types, all in the very same proposed rule.

Similarly, efforts to align fees for nonstandard access with the notion of “market rates,” while
simultaneously requiring that fees be based on objective, verifiable, cost-related criteria under
the Fees exception, will likely lead to courts or regulators taking on the role of rate-setting
authorities. Under ASTP/ONC’s definition of “market rates,” courts would be required to imagine

pointclickcare.com Page 11 of 14
a notional value one party would agree to pay and another party would agree to accept for its
services, in equally hypothetical arm’s-length agreements that the parties were not themselves
able to reach.

Such officious and invasive interference in the basic nuts-and-bolts functioning of markets is the
very opposite of a deregulatory action. In practice, such interference is likely to discourage actors
from investing in innovative, specialized services if they cannot reliably recover development and
operational costs without fear of enforcement or other litigation based on private accusations of
information blocking.

We encourage ASTP/ONC to:

    •    Clarify that actors may continue to use standardized agreements and rate structures to
         deliver impartial, scalable access, and better explain the narrow, limited nature of the
         category of “contracts of adhesion” as those contracts to which a party with limited or no
         bargaining power must accept on a take-it-or-leave-it basis due to market unavailability of
         reasonable alternatives.
    •    Provide clarifying guidance on how to reconcile “market rate” concepts with the Fees
         exception cost-based requirements, clarifying that market-based price discovery may
         result in a significantly broader range of reasonable pricing structures than the Fees
         Exception, in a way that does not amount to de facto price regulation.
    •    Confirm that actors may differentiate fees and contractual terms based on objectively
         different service profiles (for example, volume, performance, support levels, or security
         requirements) without triggering information-blocking protections, provided that similarly
         situated parties are treated with reasonable relative consistency.

Removal of Subpart D Exception and Other Provisions Specific to TEFCA

PCC strongly supports TEFCA’s role in creating a scalable, national network for EHI exchange and
recognizes ASTP/ONC’s ongoing commitment to TEFCA as one important rail among many.
However, we are concerned that removing the TEFCA specific manner exception without a
tailored replacement could slow TEFCA’s momentum while increasing uncertainty for actors
seeking to use TEFCA as a primary interoperability channel.

We recommend that ASTP/ONC retain a TEFCA-oriented exception, with modifications, rather
than eliminating it outright.

We suggest:

    •    Preserving an exception that allows all actors with the exception of “small practices,” per
         CMS definitions, that choose to participate in TEFCA to rely on TEFCA as a preferred,

pointclickcare.com Page 12 of 14
 scalable modality, so long as they also maintain reasonable, standards based on non
TEFCA options where appropriate.
• Providing tailored flexibility for small practices (for example, those with fewer than 16
clinicians per TIN, consistent with CMS definitions) and small facilities that may not have
the resources to participate in TEFCA, ensuring they are not penalized for reasonable
nonparticipation.
• Emphasizing that TEFCA is an enabling framework, not a mandatory participation
requirement, and that the policy objective is to offer robust, scalable rails for those who
opt in while preserving practical alternatives for smaller or resource constrained actors.

In our view, an appropriately scoped TEFCA related exception can both support the growth of a
national network and avoid forcing actors—especially small practices and facilities—to maintain
multiple redundant interoperability workstreams, connections, and investments.

PCC appreciates ASTP/ONC’s efforts to modernize the Health IT Certification Program and to
ensure that information blocking protections keep pace with automation and AI enabled tools. We
support targeted deregulation that eliminates outdated requirements and refocuses on FHIR
based, scalable interoperability, provided it is accompanied by clear, predictable expectations
that preserve patient safety, EHI integrity, security, and contractual certainty.

We respectfully request that ASTP/ONC:

         (1) clarify how audit trail and security expectations will be maintained in the absence of
         explicit certification criteria;
         (2) refine automation related language to avoid unfettered “without limitation” obligations
         and to permit reasonable safeguards;
         (3) preserve or replace TEFCA related and manner/infeasibility protections in a way that
         supports scalable exchange, including for small entities; and
         (4) ensure that the information blocking framework does not unintentionally narrow the
         space for responsible innovation by increasing litigation and operational risk for good faith
         actors.

PCC would welcome the opportunity to engage further with ASTP/ONC on these issues and to
provide additional implementation-focused feedback from the perspective of developers serving
long term and post-acute care providers.

Sincerely,
Robin Roberts
Director of Health IT Regulatory Affairs

pointclickcare.com Page 13 of 14
robin.roberts@pointclickcare.com

pointclickcare.com Page 14 of 14

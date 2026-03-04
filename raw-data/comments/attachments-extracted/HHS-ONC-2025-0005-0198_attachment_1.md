# HHS-ONC-2025-0005-0198 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0198/attachment_1.pdf

---

​ ​ ​ ​ ​ ​ ​ February 27, 2026

Thomas Keane, MD, MBA
Assistant Secretary for Technology Policy /
National Coordinator for Health Information Technology (ASTP/ONC)
U.S. Department of Health and Human Services
330 C St SW
Floor 7
Washington, DC 20201

              Re: Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory
              Actions to Unleash Prosperity (HTI-5)

Dear National Coordinator Keane:

On behalf of the millions of patients and more than 250,000 providers who use Zocdoc, thank
you for the opportunity to comment on the HTI-5 Proposed Rule. We applaud the
Administration’s ongoing efforts to better support interoperability and patient choice.

About Zocdoc: America's Healthcare Access Infrastructure

America has an access crisis because healthcare breaks at the first step. We often talk about a
scarcity issue when it comes to U.S. healthcare—not enough doctors, not enough
appointments—and we could certainly use more. However, the reality is that we are also
systematically wasting the valuable care capacity that we have. Roughly 20% to 30% of available
healthcare appointments go to waste because they are trapped behind a gauntlet of barriers:
phone trees, dead ends, and inaccurate directories. At the same time, patients wait weeks to be
seen, overutilize the emergency room, and defer or delay care for important health issues.
Zocdoc is the healthcare access infrastructure that solves this problem. We have spent nearly
two decades doing the hard, slow work of unifying healthcare’s fragmentation to remove
patients’ barriers to care. By building more than 175 proprietary calendar integrations that
connect directly to EHRs and practice management systems, we aggregate real-time availability
across more than 250,000 providers, 200+ specialties, and 20,000+ insurance plans. We do not
want to own a single front door to care; we want to make sure all of them open.

By powering seamless scheduling across Zocdoc.com, payor directories, providers’ websites and
phone lines, and AI platforms, we move patients from being stuck to being seen. While the
national average wait time for a patient to receive care from a provider is 31 days, the typical
appointment booked through Zocdoc takes place within 24 to 72 hours. Furthermore, 43% of
our appointments are booked after hours, diverting patients from unnecessary and costly
emergency room visits.

The fact is, a patient’s care journey starts at the first step: when they are attempting to access
care. To continue improving both patients’ healthcare experience and the efficient and effective
delivery of care for our nation, the health IT ecosystem should prioritize the administrative
workflows that get a patient into the doctor's office in the first place. We urge ASTP/ONC to
ensure that deregulation does not inadvertently erode the infrastructure that patients and
providers rely on for access to care.

Summary of Recommendations:

●​ I. Elevate Administrative Data and Protect Third-Party Access (Information Blocking):
HTI-5 should explicitly clarify that prospective administrative data is fully subject to
information blocking rules. Furthermore, if APIs do not expose the full requirements to
book an appointment, developers should be permitted to use Robotic Process
Automation (RPA) or AI agents, and any restrictive contracts or other hurdles to these
methods should be discouraged.
●​ II. Preserve Strong API Baselines and Address Opaque Scheduling Rules: Deregulation
should not translate into weaker expectations for standards-based APIs. ASTP/ONC
should address the gap between APIs that are merely "compliant" and those that are
operationally usable, while advancing a clear FHIR-based roadmap for scheduling
interoperability.
●​ III. Support Patient Exchange and the Removal of the TEFCA Exception: Zocdoc strongly
supports the removal of the TEFCA exception to encourage better response rates for
patient access requests, aligning with our "Kill the Clipboard" initiative to reduce
administrative friction.

I. Elevate Administrative Data and Protect Third-Party Access (Information Blocking)
True interoperability should support the full patient journey—from provider discovery through
appointment scheduling and care coordination. HTI-5 should explicitly recognize that
administrative workflows are central to patient access and care.
●​ Extend Information Blocking to Administrative Workflows: Information blocking
provisions should extend beyond clinical records tied to a specific patient, once they are
in the care of a provider. They should move upstream to encompass administrative data
that makes it possible for them to access that care, including all available appointment
inventory and the specific requirements or restrictions needed to book those
appointments.
●​ Protect RPA and AI Agents as Legitimate Access Methods: Patients and providers
increasingly rely on third-party applications to navigate the healthcare system.
Information blocking protections are most effective when they apply consistently to
these applications and do not allow discrimination through contractual terms or
technical throttling. ASTP/ONC should clarify that patient and provider authorized
automation (including responsibly implemented RPA and AI agents) can be legitimate,
time-bounded means of access where no standards-based API exists. That said,
ASTP/ONC should clearly prefer standards-based API access as the durable solution. ONC
should also publish guidance on consent, authentication, and audit logging for
automated agents to minimize risks to security and safety.
●​ Void Restrictive Contracts: Any contractual clauses maintained by Certified Health IT
developers that explicitly prohibit third-party platforms from using RPA or AI agents to
facilitate patient scheduling should be voided and defined as Information Blocking.

II. Preserve Strong API Baselines and Address Opaque Scheduling Rules

While we support reducing unnecessary compliance burdens, deregulation should not translate
into weaker baseline expectations for standards-based APIs. We ask ASTP/ONC to clarify how
FHIR-based exchange remains the default expectation even as specific criteria are retired.
●​ Address the Gap Between "Compliant" APIs and Operational Usability: Currently, some
EHR vendors offer "FHIR scheduling APIs" that check the compliance box but are
operationally unusable for third-party platforms. Certification requirements should
evaluate real-world utility, and prevent vendors from achieving compliance without
demonstrating a functionally usable API.
 ●​ Real-World Example: Opaque Scheduling Rules: A pervasive issue in the current
landscape involves Certified Health IT developers exposing basic appointment availability
via API, but intentionally hiding the complex, underlying "decision trees" or prerequisite
questionnaires necessary to actually secure the booking. When a third-party application
attempts to book the slot, the API fails the request because the prerequisite metadata
was never shared. Simultaneously, the vendor’s Terms of Service explicitly prohibit third
parties from using RPA to navigate the patient portal to answer those exact questions.
This traps patient access in a dead end: the API is incomplete, and the technical
workaround is contractually banned. To ensure true interoperability, future standards
should require that all requirements, restrictions, and metadata needed to successfully
book an appointment be exposed programmatically.
●​ Adopt a FHIR-Based Technical Roadmap: To resolve these opaque rules, ASTP/ONC
should encourage standardization of a core administrative scheduling data set. We
recommend a technical roadmap utilizing FHIR schedule, slot, and appointment
resources as the long-term architectural solution for scheduling interoperability.

III. Support Patient Exchange and the Removal of the TEFCA Exception

Zocdoc strongly supports the proposed removal of the TEFCA exception to encourage better
response rates for patient access requests.
●​ Streamlined Intake: Zocdoc remains committed to the "Kill the Clipboard" initiative.
Patients are currently forced to fill out the exact same repetitive paper forms at every
single specialist visit. By fully leveraging TEFCA-enabled data exchange, we can eliminate
this manual friction, automatically porting their history to the point of care. We offer a
suite of tools to help providers and their patients manage this burdensome and
antiquated administrative need, including Intake and Reminder products. Aligning our
workflows with TEFCA-enabled data exchange reduces administrative friction for
patients and provides a seamless care experience. We favor any deregulation that
simplifies the ability for Certified Health IT to respond to these patient requests.

Conclusion

Zocdoc remains a constructive partner in achieving ASTP/ONC’s goals. We are fully committed
to expanding administrative interoperability and are proud to participate as a beta partner
providing availability signals and patient-verified addresses to the upcoming National Provider
Directory. We believe that interoperability is only successful when federal rules translate into
real-world patient care needs—ensuring that every patient can find, book, and receive care
without technological or administrative barriers. We look forward to continuing this dialogue.

       Respectfully,



       Oliver Kharraz, MD

       CEO & Founder, Zocdoc

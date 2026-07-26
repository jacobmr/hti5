import { Resend } from "resend";

// The Resend SDK returns { data, error } rather than throwing, so every call
// site checks `error` explicitly.

const SITE_URL = process.env.SITE_URL || "https://hti5.org";

let client = null;
function resend() {
  if (!client) {
    const key = process.env.RESEND_API_KEY;
    if (!key) {
      throw new Error("RESEND_API_KEY environment variable is not configured");
    }
    client = new Resend(key);
  }
  return client;
}

function from() {
  const value = process.env.ALERT_FROM;
  if (!value) {
    throw new Error("ALERT_FROM environment variable is not configured");
  }
  return value;
}

function segmentId() {
  const value = process.env.ALERT_SEGMENT_ID;
  if (!value) {
    throw new Error("ALERT_SEGMENT_ID environment variable is not configured");
  }
  return value;
}

const escapeHtml = text =>
  String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** CAN-SPAM requires a physical mailing address on list email. */
function postalFooterHtml() {
  const address = process.env.ALERT_POSTAL_ADDRESS;
  return address
    ? `<p style="color:#666;font-size:12px">${escapeHtml(address)}</p>`
    : "";
}

/**
 * Send the double opt-in confirmation. Transactional: goes to one unconfirmed
 * address and must not touch the subscriber segment.
 */
export async function sendConfirmationEmail(email, confirmUrl) {
  const { data, error } = await resend().emails.send(
    {
      from: from(),
      to: [email],
      subject: "Confirm your HTI-5 rule alert",
      text:
        `Confirm you want alerts about the HTI-5 rule (RIN 0955-AA09).\n\n` +
        `${confirmUrl}\n\n` +
        `You'll get at most two emails: one when the rule reaches OIRA review, ` +
        `and one when that review concludes.\n\n` +
        `If you didn't request this, ignore this email — nothing was subscribed.\n`,
      html:
        `<p>Confirm you want alerts about the <strong>HTI-5 rule</strong> (RIN 0955-AA09).</p>` +
        `<p><a href="${escapeHtml(confirmUrl)}">Confirm my subscription</a></p>` +
        `<p>You'll get at most two emails: one when the rule reaches OIRA review, ` +
        `and one when that review concludes.</p>` +
        `<p style="color:#666;font-size:12px">If you didn't request this, ignore this ` +
        `email — nothing was subscribed.</p>` +
        postalFooterHtml(),
    },
    // Retrying a failed submit must not send a second confirmation.
    { idempotencyKey: `hti5-confirm/${email}` }
  );

  if (error) {
    throw new Error(`Failed to send confirmation email: ${error.message}`);
  }
  return data;
}

/**
 * Add a confirmed subscriber to the alert segment.
 * Re-confirming an existing address is treated as success, not an error.
 */
export async function addSubscriber(email) {
  const { data, error } = await resend().contacts.create({
    email,
    unsubscribed: false,
    segments: [{ id: segmentId() }],
  });

  if (error) {
    if (/already exists/i.test(error.message ?? "")) {
      return { alreadySubscribed: true };
    }
    throw new Error(`Failed to add subscriber: ${error.message}`);
  }
  return { id: data?.id, alreadySubscribed: false };
}

function arrivedCopy(rule, days) {
  const clock =
    days === null
      ? ""
      : `<p>It has been under review for <strong>${days} day${days === 1 ? "" : "s"}</strong>.</p>`;

  return {
    subject: `HTI-5 has reached OIRA review (RIN 0955-AA09)`,
    html:
      `<p>The HTI-5 rule has arrived at OIRA for review — the final checkpoint before ` +
      `Federal Register publication.</p>` +
      `<table cellpadding="4" style="border-collapse:collapse">` +
      `<tr><td><strong>Title</strong></td><td>${escapeHtml(rule.title)}</td></tr>` +
      `<tr><td><strong>RIN</strong></td><td>${escapeHtml(rule.rin)}</td></tr>` +
      `<tr><td><strong>Stage</strong></td><td>${escapeHtml(rule.stage)}</td></tr>` +
      `<tr><td><strong>Received at OIRA</strong></td><td>${escapeHtml(rule.dateReceived)}</td></tr>` +
      `</table>` +
      clock +
      `<p>Executive Order 12866 sets a nominal 90-day review, but that period is ` +
      `routinely extended — treat this as the start of the clock, not a deadline. ` +
      `We'll email you once more when the review concludes.</p>` +
      `<p><a href="https://www.reginfo.gov/public/do/eoDetails?rrid=${encodeURIComponent(rule.rin)}">View on RegInfo.gov</a> · ` +
      `<a href="${SITE_URL}">HTI-5 comment analysis</a></p>` +
      `<p><a href="{{{RESEND_UNSUBSCRIBE_URL}}}">Unsubscribe</a></p>` +
      postalFooterHtml(),
  };
}

function concludedCopy(rule, days) {
  const spent =
    days === null
      ? "Review has concluded."
      : `Review concluded after <strong>${days} day${days === 1 ? "" : "s"}</strong>.`;

  return {
    subject: `OIRA review of HTI-5 has concluded — publication expected soon`,
    html:
      `<p>${spent} The HTI-5 rule (RIN 0955-AA09) has left OIRA's ` +
      `rules-under-review list, which means the review is finished and Federal ` +
      `Register publication typically follows within days to a few weeks.</p>` +
      `<p><strong>${escapeHtml(rule?.title || "HTI-5")}</strong></p>` +
      `<p>Note: leaving the list signals the review ended — it does not by itself ` +
      `distinguish an approved rule from one withdrawn by the agency. The ` +
      `RegInfo record below shows the disposition.</p>` +
      `<p><a href="https://www.reginfo.gov/public/do/eoDetails?rrid=${encodeURIComponent(rule?.rin || "0955-AA09")}">Check the RegInfo record</a> · ` +
      `<a href="https://www.federalregister.gov/documents/search?conditions%5Bterm%5D=0955-AA09">Search the Federal Register</a></p>` +
      `<p><a href="{{{RESEND_UNSUBSCRIBE_URL}}}">Unsubscribe</a></p>` +
      postalFooterHtml(),
  };
}

/**
 * Broadcast an alert to the subscriber segment.
 *
 * @param {"ARRIVED"|"CONCLUDED"} kind
 * @param {object} rule summarized REGACT record
 * @param {number|null} days days under review
 */
export async function sendAlertBroadcast(kind, rule, days) {
  const copy =
    kind === "ARRIVED" ? arrivedCopy(rule, days) : concludedCopy(rule, days);

  const { data, error } = await resend().broadcasts.create({
    // Name is the human-visible label in the Resend dashboard; the date keeps
    // repeated events distinguishable if this rule ever cycles twice.
    name: `HTI-5 ${kind} ${new Date().toISOString().slice(0, 10)}`,
    from: from(),
    subject: copy.subject,
    html: copy.html,
    segmentId: segmentId(),
    send: true,
  });

  if (error) {
    throw new Error(`Failed to send ${kind} broadcast: ${error.message}`);
  }
  return data;
}

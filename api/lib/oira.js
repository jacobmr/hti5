import axios from "axios";
import { XMLParser } from "fast-xml-parser";

export const DEFAULT_FEED_URL =
  "https://www.reginfo.gov/public/do/XMLViewFileAction?f=EO_RULES_UNDER_REVIEW.xml";

// RegInfo returns HTTP 200 with an HTML page for unknown feed names, so a
// successful status tells us nothing. We additionally require the payload to
// parse as OIRA XML and to carry a plausible number of records before we trust
// it — an absence read from a truncated or substituted feed would otherwise
// look identical to "OIRA finished reviewing the rule".
const MIN_PLAUSIBLE_RECORDS = 50;

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "",
  trimValues: true,
  // Every field in this feed is text. Left on, the parser coerces numeric-looking
  // values and silently drops leading zeros — AGENCY_CODE "0348" becomes 348, and
  // a future all-digit identifier could be mangled the same way.
  parseTagValue: false,
  parseAttributeValue: false,
});

/**
 * Fetch and parse the OIRA "rules under review" feed.
 *
 * @returns {Promise<{rundate: string, records: object[]}>}
 * @throws if the feed is unreachable, is not OIRA XML, or is implausibly short
 */
export async function fetchFeed(
  url = process.env.REGINFO_XML_URL || DEFAULT_FEED_URL,
  timeoutMs = Number(process.env.HTTP_TIMEOUT_MS) || 30000
) {
  let body;
  try {
    const response = await axios.get(url, {
      timeout: timeoutMs,
      responseType: "text",
      // Axios would otherwise try to JSON-parse the body.
      transformResponse: [data => data],
      headers: {
        "User-Agent": "hti5.org OIRA watcher (+https://hti5.org)",
        Accept: "application/xml,text/xml",
      },
    });
    body = response.data;
  } catch (error) {
    throw new Error(`Failed to fetch OIRA feed: ${error.message}`);
  }

  if (typeof body !== "string" || !body.trim()) {
    throw new Error("OIRA feed returned an empty body");
  }

  // Cheap guard before handing anything to the parser.
  if (!body.includes("<OIRA_DATA")) {
    const looksLikeHtml = /<html[\s>]/i.test(body);
    throw new Error(
      looksLikeHtml
        ? "OIRA feed returned an HTML page instead of XML (bad feed name?)"
        : "OIRA feed did not contain an OIRA_DATA element"
    );
  }

  let parsed;
  try {
    parsed = parser.parse(body);
  } catch (error) {
    throw new Error(`Failed to parse OIRA feed XML: ${error.message}`);
  }

  const root = parsed?.OIRA_DATA;
  if (!root) {
    throw new Error("OIRA feed XML has no OIRA_DATA root element");
  }

  // A single-record feed parses to an object rather than an array.
  const raw = root.REGACT;
  const records = Array.isArray(raw) ? raw : raw ? [raw] : [];

  if (records.length < MIN_PLAUSIBLE_RECORDS) {
    throw new Error(
      `OIRA feed returned only ${records.length} records (expected at least ` +
        `${MIN_PLAUSIBLE_RECORDS}); refusing to trust it`
    );
  }

  return { rundate: root.RUNDATE ?? null, records };
}

/**
 * Find a rule by exact RIN.
 *
 * The RIN is matched against the RIN field rather than searched for across the
 * whole record, so a RIN quoted inside some other rule's title cannot produce a
 * false hit.
 *
 * @returns {object|null} the matching REGACT record, or null
 */
export function findByRin(records, rin) {
  const target = String(rin).trim().toUpperCase();
  return (
    records.find(
      r =>
        String(r?.RIN ?? "")
          .trim()
          .toUpperCase() === target
    ) ?? null
  );
}

/** Normalise a REGACT record down to the fields the alerts actually use. */
export function summarize(record) {
  if (!record) return null;
  return {
    rin: String(record.RIN ?? "").trim(),
    title: String(record.TITLE ?? "").trim(),
    stage: String(record.STAGE ?? "").trim(),
    agencyCode: String(record.AGENCY_CODE ?? "").trim(),
    dateReceived: String(record.DATE_RECEIVED ?? "").trim(),
    economicallySignificant: String(
      record.ECONOMICALLY_SIGNIFICANT ?? ""
    ).trim(),
    legalDeadline: String(record.LEGAL_DEADLINE ?? "").trim(),
  };
}

/** Whole days between an ISO-ish yyyy-mm-dd date and now. Null if unparseable. */
export function daysSince(dateString, now = new Date()) {
  if (!dateString) return null;
  const then = new Date(`${dateString}T00:00:00Z`);
  if (Number.isNaN(then.getTime())) return null;
  return Math.floor((now.getTime() - then.getTime()) / 86400000);
}

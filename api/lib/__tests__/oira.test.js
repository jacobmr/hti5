import { describe, it, expect, vi, afterEach } from "vitest";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import axios from "axios";
import { fetchFeed, findByRin, summarize, daysSince } from "../oira.js";

const here = dirname(fileURLToPath(import.meta.url));
const fixture = name => readFileSync(join(here, "fixtures", name), "utf8");

const mockGet = body =>
  vi.spyOn(axios, "get").mockResolvedValue({ data: body, status: 200 });

afterEach(() => vi.restoreAllMocks());

describe("OIRA feed parsing", () => {
  it("parses the real feed and reports every record", async () => {
    mockGet(fixture("under-review.xml"));
    const { rundate, records } = await fetchFeed();
    expect(rundate).toBe("2026-07-25");
    expect(records).toHaveLength(127);
  });

  it("does not find 0955-AA09 in the 2026-07-25 snapshot", async () => {
    mockGet(fixture("under-review.xml"));
    const { records } = await fetchFeed();
    expect(findByRin(records, "0955-AA09")).toBeNull();
  });

  it("finds a RIN that is genuinely in the feed", async () => {
    mockGet(fixture("under-review.xml"));
    const { records } = await fetchFeed();
    const rule = summarize(findByRin(records, "0348-AB93"));
    expect(rule.stage).toBe("Interim Final Rule");
    expect(rule.dateReceived).toBe("2025-12-01");
  });

  it("preserves leading zeros rather than coercing to numbers", async () => {
    mockGet(fixture("under-review.xml"));
    const { records } = await fetchFeed();
    const rule = summarize(findByRin(records, "0348-AB93"));
    expect(rule.agencyCode).toBe("0348");
  });

  it("matches the RIN field exactly, not as a substring of other fields", async () => {
    // A rule whose *title* quotes the target RIN must not count as a match.
    const decoy = `<?xml version="1.0" encoding="UTF-8"?>
<OIRA_DATA RUNDATE="2026-07-25">
${Array.from({ length: 60 }, (_, i) => `<REGACT><RIN>1111-ZZ${String(i).padStart(2, "0")}</RIN><TITLE>Amends the rule at RIN 0955-AA09</TITLE><STAGE>Final Rule</STAGE><DATE_RECEIVED>2026-01-01</DATE_RECEIVED></REGACT>`).join("\n")}
</OIRA_DATA>`;
    mockGet(decoy);
    const { records } = await fetchFeed();
    expect(records).toHaveLength(60);
    expect(findByRin(records, "0955-AA09")).toBeNull();
  });

  it("rejects the HTML soft-404 RegInfo serves for unknown feed names", async () => {
    // RegInfo answers HTTP 200 with an HTML page, so status alone proves nothing.
    mockGet(fixture("soft-404.html"));
    await expect(fetchFeed()).rejects.toThrow(/HTML page instead of XML/);
  });

  it("refuses an implausibly short feed rather than reading it as an absence", async () => {
    const short = `<?xml version="1.0"?><OIRA_DATA RUNDATE="2026-07-25">
      <REGACT><RIN>1234-AB01</RIN><TITLE>Only rule</TITLE></REGACT></OIRA_DATA>`;
    mockGet(short);
    await expect(fetchFeed()).rejects.toThrow(/only 1 records/);
  });

  it("rejects an empty body", async () => {
    mockGet("");
    await expect(fetchFeed()).rejects.toThrow(/empty body/);
  });
});

describe("daysSince", () => {
  it("counts whole days", () => {
    expect(daysSince("2026-08-01", new Date("2026-10-01T00:00:00Z"))).toBe(61);
  });
  it("returns null for junk", () => {
    expect(daysSince("not-a-date")).toBeNull();
    expect(daysSince(null)).toBeNull();
  });
});

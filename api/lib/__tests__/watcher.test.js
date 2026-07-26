import { describe, it, expect } from "vitest";
import { evaluate } from "../watcher.js";
import { EMPTY_STATE } from "../state.js";

const RULE = {
  RIN: "0955-AA09",
  TITLE: "Health Data, Technology, and Interoperability (HTI-5)",
  STAGE: "Proposed Rule",
  AGENCY_CODE: "0955",
  DATE_RECEIVED: "2026-08-01",
  ECONOMICALLY_SIGNIFICANT: "Yes",
  LEGAL_DEADLINE: "None",
};

const AT = iso => new Date(iso);

describe("watcher state machine", () => {
  it("stays quiet when the rule is absent and has never been seen", () => {
    const { alerts, nextState } = evaluate(
      EMPTY_STATE,
      null,
      "2026-07-25",
      AT("2026-07-25T12:00:00Z")
    );
    expect(alerts).toEqual([]);
    expect(nextState.present).toBe(false);
    expect(nextState.lastChecked).toBe("2026-07-25T12:00:00.000Z");
  });

  it("fires ARRIVED the first time the rule appears", () => {
    const { alerts, nextState } = evaluate(
      EMPTY_STATE,
      RULE,
      "2026-08-02",
      AT("2026-08-02T12:00:00Z")
    );
    expect(alerts).toHaveLength(1);
    expect(alerts[0].kind).toBe("ARRIVED");
    expect(alerts[0].rule.stage).toBe("Proposed Rule");
    // DATE_RECEIVED 2026-08-01, polled 2026-08-02 => day 1
    expect(alerts[0].days).toBe(1);
    expect(nextState.present).toBe(true);
    expect(nextState.firstSeen).toBe("2026-08-02T12:00:00.000Z");
  });

  it("does not re-alert while the rule remains under review", () => {
    const first = evaluate(
      EMPTY_STATE,
      RULE,
      "2026-08-02",
      AT("2026-08-02T12:00:00Z")
    );
    const second = evaluate(
      first.nextState,
      RULE,
      "2026-08-03",
      AT("2026-08-03T12:00:00Z")
    );
    const third = evaluate(
      second.nextState,
      RULE,
      "2026-08-04",
      AT("2026-08-04T12:00:00Z")
    );

    expect(second.alerts).toEqual([]);
    expect(third.alerts).toEqual([]);
    // firstSeen must not drift on subsequent polls
    expect(third.nextState.firstSeen).toBe("2026-08-02T12:00:00.000Z");
    expect(third.nextState.lastSeen).toBe("2026-08-04T12:00:00.000Z");
  });

  it("fires CONCLUDED when the rule leaves the feed, counting from DATE_RECEIVED", () => {
    const arrived = evaluate(
      EMPTY_STATE,
      RULE,
      "2026-08-02",
      AT("2026-08-02T12:00:00Z")
    );
    const gone = evaluate(
      arrived.nextState,
      null,
      "2026-10-01",
      AT("2026-10-01T12:00:00Z")
    );

    expect(gone.alerts).toHaveLength(1);
    expect(gone.alerts[0].kind).toBe("CONCLUDED");
    // 2026-08-01 -> 2026-10-01 is 61 days
    expect(gone.alerts[0].days).toBe(61);
    expect(gone.nextState.present).toBe(false);
  });

  it("never repeats an alert once sent, even if the rule reappears", () => {
    const arrived = evaluate(
      EMPTY_STATE,
      RULE,
      "2026-08-02",
      AT("2026-08-02T12:00:00Z")
    );
    const gone = evaluate(
      arrived.nextState,
      null,
      "2026-10-01",
      AT("2026-10-01T12:00:00Z")
    );
    const back = evaluate(
      gone.nextState,
      RULE,
      "2026-10-05",
      AT("2026-10-05T12:00:00Z")
    );
    const goneAgain = evaluate(
      back.nextState,
      null,
      "2026-10-09",
      AT("2026-10-09T12:00:00Z")
    );

    expect(back.alerts).toEqual([]);
    expect(goneAgain.alerts).toEqual([]);
    expect(goneAgain.nextState.alertsSent).toEqual(["ARRIVED", "CONCLUDED"]);
  });

  it("treats a rule already present on the very first poll as ARRIVED", () => {
    // Deploying after the rule reached OIRA must still notify subscribers.
    const { alerts } = evaluate(
      undefined,
      RULE,
      "2026-08-10",
      AT("2026-08-10T12:00:00Z")
    );
    expect(alerts.map(a => a.kind)).toEqual(["ARRIVED"]);
  });

  it("retains rule details in state after the rule disappears", () => {
    const arrived = evaluate(
      EMPTY_STATE,
      RULE,
      "2026-08-02",
      AT("2026-08-02T12:00:00Z")
    );
    const gone = evaluate(
      arrived.nextState,
      null,
      "2026-10-01",
      AT("2026-10-01T12:00:00Z")
    );
    expect(gone.nextState.dateReceived).toBe("2026-08-01");
    expect(gone.nextState.title).toContain("HTI-5");
  });
});

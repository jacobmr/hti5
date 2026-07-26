import { EMPTY_STATE } from "./state.js";
import { summarize, daysSince } from "./oira.js";

/**
 * Decide what changed and what to alert on. Pure: no network, no email, no
 * clock of its own — so the whole state machine is testable directly.
 *
 * @param {object}      state    previous watcher state
 * @param {object|null} record   matching REGACT record from this poll, or null
 * @param {string|null} rundate  RUNDATE attribute of the feed
 * @param {Date}        now
 * @returns {{alerts: Array<{kind: string, rule: object|null, days: number|null}>, nextState: object}}
 */
export function evaluate(state, record, rundate, now = new Date()) {
  const prev = { ...EMPTY_STATE, ...(state ?? {}) };
  const present = record !== null && record !== undefined;
  const rule = present ? summarize(record) : null;
  const iso = now.toISOString();

  const alerts = [];
  const alertsSent = [...(prev.alertsSent ?? [])];

  if (present && !prev.present && !alertsSent.includes("ARRIVED")) {
    alerts.push({
      kind: "ARRIVED",
      rule,
      days: daysSince(rule.dateReceived, now),
    });
    alertsSent.push("ARRIVED");
  }

  if (!present && prev.present && !alertsSent.includes("CONCLUDED")) {
    // Days under review are counted from the date OIRA recorded receiving it,
    // which is more accurate than counting from when this watcher first saw it.
    alerts.push({
      kind: "CONCLUDED",
      rule: {
        rin: prev.rin ?? process.env.WATCH_RIN ?? "0955-AA09",
        title: prev.title ?? null,
      },
      days: daysSince(prev.dateReceived, now),
    });
    alertsSent.push("CONCLUDED");
  }

  const nextState = {
    ...prev,
    present,
    rin: present ? rule.rin : prev.rin,
    title: present ? rule.title : prev.title,
    stage: present ? rule.stage : prev.stage,
    dateReceived: present ? rule.dateReceived : prev.dateReceived,
    firstSeen: present ? (prev.firstSeen ?? iso) : prev.firstSeen,
    lastSeen: present ? iso : prev.lastSeen,
    lastChecked: iso,
    lastRundate: rundate ?? prev.lastRundate,
    alertsSent,
  };

  return { alerts, nextState };
}

import { withRedis, NS } from "./redis.js";

// The watcher needs exactly one durable record.
//
// Everything storage-specific lives in this file. Swapping backends means
// reimplementing getState/setState and touching nothing else.

const KEY = process.env.STATE_KEY || `${NS}oira_watch_state`;

export const EMPTY_STATE = {
  present: false,
  firstSeen: null,
  lastSeen: null,
  dateReceived: null,
  stage: null,
  lastChecked: null,
  lastRundate: null,
  alertsSent: [],
};

/** Read the watcher state, or EMPTY_STATE if nothing has been stored yet. */
export async function getState() {
  try {
    return await withRedis(async client => {
      const raw = await client.get(KEY);
      if (!raw) return { ...EMPTY_STATE };
      return { ...EMPTY_STATE, ...JSON.parse(raw) };
    });
  } catch (error) {
    throw new Error(`Failed to read watcher state: ${error.message}`);
  }
}

/** Persist the watcher state. */
export async function setState(state) {
  try {
    await withRedis(client => client.set(KEY, JSON.stringify(state)));
  } catch (error) {
    throw new Error(`Failed to persist watcher state: ${error.message}`);
  }
}

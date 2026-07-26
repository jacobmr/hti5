import { createClient } from "redis";

// The watcher needs exactly one durable record. It lives in Redis under a
// namespaced key because the instance is shared with other projects.
//
// Everything storage-specific lives in this file. Swapping backends means
// reimplementing getState/setState and touching nothing else.

const KEY = process.env.STATE_KEY || "hti5:oira_watch_state";

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

/**
 * Run a callback with a connected client, then always disconnect.
 *
 * A fresh connection per invocation is deliberate: serverless instances are
 * short-lived and freeze between requests, so a cached client tends to be found
 * dead on the next invocation rather than saving anything.
 */
async function withRedis(fn) {
  const url = process.env.REDIS_URL;
  if (!url) {
    throw new Error("REDIS_URL environment variable is not configured");
  }

  const client = createClient({
    url,
    socket: { connectTimeout: 10000, reconnectStrategy: false },
  });

  // Without a listener, a connection error is an unhandled 'error' event that
  // takes down the function rather than rejecting the await below.
  client.on("error", () => {});

  await client.connect();
  try {
    return await fn(client);
  } finally {
    await client.quit().catch(() => {});
  }
}

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

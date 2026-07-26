import axios from "axios";

// The watcher needs exactly one durable record. Vercel Edge Config backs it:
// durable, free, and writing to it does not trigger a redeploy the way
// committing to the repo would.
//
// Everything storage-specific lives in this file. Swapping to Redis or a gist
// means reimplementing getState/setState and touching nothing else.

const KEY = process.env.STATE_KEY || "oira_watch_state";

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

function readConnection() {
  const url = process.env.EDGE_CONFIG;
  if (!url)
    throw new Error("EDGE_CONFIG environment variable is not configured");
  return url;
}

function writeCredentials() {
  const id = process.env.EDGE_CONFIG_ID;
  const token = process.env.VERCEL_API_TOKEN;
  if (!id || !token) {
    throw new Error(
      "EDGE_CONFIG_ID and VERCEL_API_TOKEN must be configured to persist state"
    );
  }
  const teamId = process.env.VERCEL_TEAM_ID;
  return { id, token, teamId };
}

/** Read the watcher state, or EMPTY_STATE if nothing has been stored yet. */
export async function getState() {
  const base = readConnection();
  // The connection string is `https://edge-config.vercel.com/<id>?token=<t>`;
  // the item endpoint is that same URL with `/item/<key>` before the query.
  const [origin, query] = base.split("?");
  const url = `${origin}/item/${encodeURIComponent(KEY)}${query ? `?${query}` : ""}`;

  try {
    const { data } = await axios.get(url, { timeout: 10000 });
    return { ...EMPTY_STATE, ...(data ?? {}) };
  } catch (error) {
    // A missing key is the expected first-run condition, not a failure.
    if (error?.response?.status === 404) return { ...EMPTY_STATE };
    throw new Error(`Failed to read watcher state: ${error.message}`);
  }
}

/** Persist the watcher state. */
export async function setState(state) {
  const { id, token, teamId } = writeCredentials();
  const url =
    `https://api.vercel.com/v1/edge-config/${id}/items` +
    (teamId ? `?teamId=${encodeURIComponent(teamId)}` : "");

  try {
    await axios.patch(
      url,
      { items: [{ operation: "upsert", key: KEY, value: state }] },
      {
        timeout: 10000,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    const detail = error?.response?.data?.error?.message || error.message;
    throw new Error(`Failed to persist watcher state: ${detail}`);
  }
}

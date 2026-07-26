import { createClient } from "redis";

// Shared Redis access. The instance is shared with other projects, so every key
// this app writes is namespaced under `hti5:`.
export const NS = "hti5:";

/**
 * Run a callback with a connected client, then always disconnect.
 *
 * A fresh connection per invocation is deliberate: serverless instances are
 * short-lived and freeze between requests, so a cached client tends to be found
 * dead on the next invocation rather than saving anything.
 */
export async function withRedis(fn) {
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

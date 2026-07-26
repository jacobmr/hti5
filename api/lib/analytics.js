import crypto from "node:crypto";
import { withRedis, NS } from "./redis.js";

// Self-hosted pageview counters.
//
// Deliberately stores no IP addresses, no user agents, and no per-visitor rows.
// Uniques use a HyperLogLog keyed on a salted daily hash: the salt rotates every
// day, so yesterday's hashes cannot be correlated with today's, and nothing
// stored can be reversed to a person.

const DAY_MS = 86400000;
const RETAIN_DAYS = 90;

const key = (...parts) => NS + ["stats", ...parts].join(":");
const dayStamp = (d = new Date()) => d.toISOString().slice(0, 10);

/** Opaque per-day visitor fingerprint. Not reversible, not stable across days. */
function visitorHash(ip, userAgent, day) {
  const salt = process.env.CONFIRM_SECRET || "unsalted";
  return crypto
    .createHash("sha256")
    .update(`${day}|${salt}|${ip}|${userAgent}`)
    .digest("base64url")
    .slice(0, 22);
}

// Cheap, deliberately conservative bot filter. Anything self-identifying as a
// crawler is excluded rather than inflating the numbers.
const BOT_RE =
  /bot|crawl|spider|slurp|bingpreview|headless|lighthouse|pingdom|curl|wget|python-requests|axios|monitor|uptime|scrapy|facebookexternalhit|embedly|preview/i;

export function isBot(userAgent) {
  return !userAgent || BOT_RE.test(userAgent);
}

/** Normalise a client-supplied path so the cardinality stays bounded. */
export function normalizePath(input) {
  if (typeof input !== "string" || !input.startsWith("/")) return null;
  const path = input.split(/[?#]/)[0].replace(/\/+$/, "") || "/";
  if (path.length > 100) return null;
  if (!/^\/[A-Za-z0-9\-/_.]*$/.test(path)) return null;
  return path;
}

/**
 * Record one pageview.
 * @returns {Promise<boolean>} false if the hit was filtered as a bot
 */
export async function recordPageview({
  path,
  ip,
  userAgent,
  now = new Date(),
}) {
  if (isBot(userAgent)) return false;
  const clean = normalizePath(path);
  if (!clean) return false;

  const day = dayStamp(now);
  const visitor = visitorHash(ip, userAgent, day);

  await withRedis(async client => {
    const tx = client.multi();
    tx.incr(key("views", "total"));
    tx.incr(key("views", "day", day));
    tx.hIncrBy(key("views", "paths"), clean, 1);
    tx.pfAdd(key("uniq", "total"), visitor);
    tx.pfAdd(key("uniq", "day", day), visitor);
    // Daily keys are the only ones that grow without bound, so they expire.
    tx.expire(key("views", "day", day), RETAIN_DAYS * 24 * 3600);
    tx.expire(key("uniq", "day", day), RETAIN_DAYS * 24 * 3600);
    await tx.exec();
  });

  return true;
}

/**
 * Read aggregate stats for the dashboard.
 * @param {number} days how many days of daily history to return
 */
export async function getStats(days = 30, now = new Date()) {
  const stamps = Array.from({ length: days }, (_, i) =>
    dayStamp(new Date(now.getTime() - (days - 1 - i) * DAY_MS))
  );

  return withRedis(async client => {
    const [totalViews, totalUniques, pathCounts] = await Promise.all([
      client.get(key("views", "total")),
      client.pfCount(key("uniq", "total")),
      client.hGetAll(key("views", "paths")),
    ]);

    const dailyViews = await client.mGet(
      stamps.map(s => key("views", "day", s))
    );
    // pfCount over many keys must be issued per key to get per-day figures.
    const dailyUniques = await Promise.all(
      stamps.map(s => client.pfCount(key("uniq", "day", s)).catch(() => 0))
    );

    const daily = stamps.map((date, i) => ({
      date,
      views: Number(dailyViews[i] ?? 0),
      uniques: Number(dailyUniques[i] ?? 0),
    }));

    const topPaths = Object.entries(pathCounts ?? {})
      .map(([path, count]) => ({ path, views: Number(count) }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 15);

    return {
      totalViews: Number(totalViews ?? 0),
      totalUniques: Number(totalUniques ?? 0),
      daily,
      topPaths,
    };
  });
}

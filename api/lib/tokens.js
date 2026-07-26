import crypto from "node:crypto";

// Confirmation links carry the subscriber's address and an expiry, signed with a
// server-side secret. Nothing is persisted until the address is confirmed, so
// there is no pending-subscription table to store, expire, or leak.
const DEFAULT_TTL_MS = 48 * 60 * 60 * 1000;

function secret() {
  const value = process.env.CONFIRM_SECRET;
  if (!value) {
    throw new Error("CONFIRM_SECRET environment variable is not configured");
  }
  return value;
}

const b64url = buf => Buffer.from(buf).toString("base64url");

function sign(payloadB64) {
  return crypto
    .createHmac("sha256", secret())
    .update(payloadB64)
    .digest("base64url");
}

/**
 * Create an opt-in confirmation token for an email address.
 * @returns {string} `<payload>.<signature>`
 */
export function createConfirmToken(
  email,
  ttlMs = DEFAULT_TTL_MS,
  now = Date.now()
) {
  const payload = b64url(
    JSON.stringify({ e: String(email).trim().toLowerCase(), x: now + ttlMs })
  );
  return `${payload}.${sign(payload)}`;
}

/**
 * Verify a confirmation token.
 *
 * @returns {{ok: true, email: string} | {ok: false, reason: string}}
 */
export function verifyConfirmToken(token, now = Date.now()) {
  if (typeof token !== "string" || !token.includes(".")) {
    return { ok: false, reason: "malformed" };
  }

  const index = token.lastIndexOf(".");
  const payloadB64 = token.slice(0, index);
  const provided = token.slice(index + 1);

  let expected;
  try {
    expected = sign(payloadB64);
  } catch {
    return { ok: false, reason: "misconfigured" };
  }

  // Constant-time compare. timingSafeEqual throws on length mismatch, so the
  // lengths are checked first rather than letting it reject via exception.
  const a = Buffer.from(provided);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
    return { ok: false, reason: "bad_signature" };
  }

  let claims;
  try {
    claims = JSON.parse(Buffer.from(payloadB64, "base64url").toString("utf8"));
  } catch {
    return { ok: false, reason: "malformed" };
  }

  if (!claims?.e || typeof claims.x !== "number") {
    return { ok: false, reason: "malformed" };
  }
  if (now > claims.x) {
    return { ok: false, reason: "expired" };
  }

  return { ok: true, email: claims.e };
}

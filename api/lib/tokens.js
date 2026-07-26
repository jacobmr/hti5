import crypto from "node:crypto";

// Signed, stateless tokens. The payload carries a subject, an expiry, and a
// purpose, signed with a server-side secret.
//
// The purpose field is a security boundary, not decoration: without it a token
// minted for one flow could be presented to another. A subscribe-confirmation
// link must never be usable as an admin credential. Admin tokens additionally
// use a different secret, so the two cannot cross even if a purpose check were
// ever dropped.

const DEFAULT_TTL_MS = 48 * 60 * 60 * 1000;

export const PURPOSE = {
  SUBSCRIBE: "subscribe",
  ADMIN_LOGIN: "admin-login",
  ADMIN_SESSION: "admin-session",
};

function secretFor(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} environment variable is not configured`);
  }
  return value;
}

const b64url = buf => Buffer.from(buf).toString("base64url");

function sign(payloadB64, secret) {
  return crypto
    .createHmac("sha256", secret)
    .update(payloadB64)
    .digest("base64url");
}

/** Mint a signed token. */
export function createToken({
  purpose,
  subject,
  ttlMs = DEFAULT_TTL_MS,
  secretName = "CONFIRM_SECRET",
  now = Date.now(),
}) {
  const payload = b64url(
    JSON.stringify({
      p: purpose,
      s: String(subject).trim().toLowerCase(),
      x: now + ttlMs,
    })
  );
  return `${payload}.${sign(payload, secretFor(secretName))}`;
}

/**
 * Verify a signed token.
 * @returns {{ok: true, subject: string} | {ok: false, reason: string}}
 */
export function verifyToken({
  purpose,
  token,
  secretName = "CONFIRM_SECRET",
  now = Date.now(),
}) {
  if (typeof token !== "string" || !token.includes(".")) {
    return { ok: false, reason: "malformed" };
  }

  const index = token.lastIndexOf(".");
  const payloadB64 = token.slice(0, index);
  const provided = token.slice(index + 1);

  let expected;
  try {
    expected = sign(payloadB64, secretFor(secretName));
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

  if (!claims?.s || typeof claims.x !== "number" || !claims.p) {
    return { ok: false, reason: "malformed" };
  }
  if (claims.p !== purpose) {
    return { ok: false, reason: "wrong_purpose" };
  }
  if (now > claims.x) {
    return { ok: false, reason: "expired" };
  }

  return { ok: true, subject: claims.s };
}

// --- Subscribe confirmation ---

export function createConfirmToken(
  email,
  ttlMs = DEFAULT_TTL_MS,
  now = Date.now()
) {
  return createToken({
    purpose: PURPOSE.SUBSCRIBE,
    subject: email,
    ttlMs,
    now,
  });
}

export function verifyConfirmToken(token, now = Date.now()) {
  const result = verifyToken({ purpose: PURPOSE.SUBSCRIBE, token, now });
  return result.ok ? { ok: true, email: result.subject } : result;
}

// --- Admin magic link and session ---

const ADMIN_LOGIN_TTL_MS = 15 * 60 * 1000;
const ADMIN_SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000;

export function createAdminLoginToken(email, now = Date.now()) {
  return createToken({
    purpose: PURPOSE.ADMIN_LOGIN,
    subject: email,
    ttlMs: ADMIN_LOGIN_TTL_MS,
    secretName: "ADMIN_SECRET",
    now,
  });
}

export function verifyAdminLoginToken(token, now = Date.now()) {
  return verifyToken({
    purpose: PURPOSE.ADMIN_LOGIN,
    token,
    secretName: "ADMIN_SECRET",
    now,
  });
}

export function createAdminSessionToken(email, now = Date.now()) {
  return createToken({
    purpose: PURPOSE.ADMIN_SESSION,
    subject: email,
    ttlMs: ADMIN_SESSION_TTL_MS,
    secretName: "ADMIN_SECRET",
    now,
  });
}

export function verifyAdminSessionToken(token, now = Date.now()) {
  return verifyToken({
    purpose: PURPOSE.ADMIN_SESSION,
    token,
    secretName: "ADMIN_SECRET",
    now,
  });
}

/** Addresses permitted to sign in, from ADMIN_EMAILS (comma-separated). */
export function isAdminEmail(email) {
  const allow = (process.env.ADMIN_EMAILS || "")
    .split(",")
    .map(e => e.trim().toLowerCase())
    .filter(Boolean);
  return allow.includes(String(email).trim().toLowerCase());
}

export const ADMIN_SESSION_MAX_AGE_S = ADMIN_SESSION_TTL_MS / 1000;

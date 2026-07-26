import { describe, it, expect, beforeEach } from "vitest";
import {
  createConfirmToken,
  verifyConfirmToken,
  createAdminLoginToken,
  verifyAdminLoginToken,
  createAdminSessionToken,
  verifyAdminSessionToken,
  isAdminEmail,
} from "../tokens.js";

beforeEach(() => {
  process.env.CONFIRM_SECRET = "test-secret-do-not-use-in-production";
});

describe("opt-in tokens", () => {
  it("round-trips an address", () => {
    const token = createConfirmToken("Alice@Example.com ");
    const result = verifyConfirmToken(token);
    expect(result).toEqual({ ok: true, email: "alice@example.com" });
  });

  it("rejects a tampered payload", () => {
    const token = createConfirmToken("alice@example.com");
    const [payload, sig] = token.split(".");
    const forged = Buffer.from(
      JSON.stringify({ e: "attacker@evil.com", x: Date.now() + 10000 })
    ).toString("base64url");
    expect(verifyConfirmToken(`${forged}.${sig}`).ok).toBe(false);
  });

  it("rejects a token signed with a different secret", () => {
    const token = createConfirmToken("alice@example.com");
    process.env.CONFIRM_SECRET = "a-different-secret";
    expect(verifyConfirmToken(token)).toEqual({
      ok: false,
      reason: "bad_signature",
    });
  });

  it("rejects an expired token", () => {
    const token = createConfirmToken("alice@example.com", 1000, 0);
    expect(verifyConfirmToken(token, 60_000)).toEqual({
      ok: false,
      reason: "expired",
    });
  });

  it("accepts a token that has not yet expired", () => {
    const token = createConfirmToken("alice@example.com", 60_000, 0);
    expect(verifyConfirmToken(token, 30_000).ok).toBe(true);
  });

  it("rejects malformed input without throwing", () => {
    for (const bad of ["", "nodot", "a.b.c", null, undefined, 42]) {
      expect(verifyConfirmToken(bad).ok).toBe(false);
    }
  });

  it("rejects a signature of the wrong length without throwing", () => {
    // timingSafeEqual throws on length mismatch if lengths aren't pre-checked.
    const token = createConfirmToken("alice@example.com");
    const [payload] = token.split(".");
    expect(() => verifyConfirmToken(`${payload}.short`)).not.toThrow();
    expect(verifyConfirmToken(`${payload}.short`).ok).toBe(false);
  });
});

describe("admin tokens", () => {
  beforeEach(() => {
    process.env.ADMIN_SECRET = "admin-secret-distinct-from-confirm";
    process.env.ADMIN_EMAILS = "jacob@reider.us";
  });

  it("round-trips a login token", () => {
    const t = createAdminLoginToken("jacob@reider.us");
    expect(verifyAdminLoginToken(t)).toEqual({
      ok: true,
      subject: "jacob@reider.us",
    });
  });

  it("will not accept a login token as a session token", () => {
    // Purpose separation: a magic link must not double as a session credential.
    const login = createAdminLoginToken("jacob@reider.us");
    expect(verifyAdminSessionToken(login)).toEqual({
      ok: false,
      reason: "wrong_purpose",
    });
  });

  it("will not accept a subscribe token as an admin credential", () => {
    // The two flows use different secrets AND different purposes.
    process.env.CONFIRM_SECRET = "admin-secret-distinct-from-confirm";
    const sub = createConfirmToken("attacker@evil.com");
    expect(verifyAdminLoginToken(sub).ok).toBe(false);
    expect(verifyAdminSessionToken(sub).ok).toBe(false);
  });

  it("will not accept an admin token as a subscribe confirmation", () => {
    process.env.CONFIRM_SECRET = "admin-secret-distinct-from-confirm";
    const admin = createAdminSessionToken("jacob@reider.us");
    expect(verifyConfirmToken(admin).ok).toBe(false);
  });

  it("enforces the allowlist", () => {
    expect(isAdminEmail("jacob@reider.us")).toBe(true);
    expect(isAdminEmail("JACOB@REIDER.US")).toBe(true);
    expect(isAdminEmail("someone@else.com")).toBe(false);
    expect(isAdminEmail("")).toBe(false);
  });

  it("denies everyone when the allowlist is unset", () => {
    delete process.env.ADMIN_EMAILS;
    expect(isAdminEmail("jacob@reider.us")).toBe(false);
  });

  it("expires login links", () => {
    const t = createAdminLoginToken("jacob@reider.us", 0);
    expect(verifyAdminLoginToken(t, 16 * 60 * 1000)).toEqual({
      ok: false,
      reason: "expired",
    });
  });
});

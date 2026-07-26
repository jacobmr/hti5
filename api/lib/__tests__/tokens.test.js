import { describe, it, expect, beforeEach } from "vitest";
import { createConfirmToken, verifyConfirmToken } from "../tokens.js";

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

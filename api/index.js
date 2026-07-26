import express from "express";
import axios from "axios";

import { fetchFeed, findByRin } from "./lib/oira.js";
import { getState, setState } from "./lib/state.js";
import { evaluate } from "./lib/watcher.js";
import { createConfirmToken, verifyConfirmToken } from "./lib/tokens.js";
import {
  sendConfirmationEmail,
  addSubscriber,
  sendAlertBroadcast,
} from "./lib/notify.js";

const app = express();

// Middleware
app.use(express.json());

// --- Spam protection ---

// Rate limiting: 3 submissions per hour per IP (resets on cold start)
const rateLimitMap = new Map();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip, bucket = "comments") {
  const now = Date.now();
  // Bucketed per endpoint so submitting a comment doesn't consume the quota for
  // subscribing to alerts, and vice versa.
  const key = `${bucket}:${ip}`;
  const entry = rateLimitMap.get(key);

  // Prune stale entries every 100 checks to prevent unbounded growth
  if (rateLimitMap.size > 100) {
    for (const [key, val] of rateLimitMap) {
      if (now - val.windowStart > RATE_WINDOW_MS) rateLimitMap.delete(key);
    }
  }

  if (!entry || now - entry.windowStart > RATE_WINDOW_MS) {
    rateLimitMap.set(key, { windowStart: now, count: 1 });
    return false;
  }

  if (entry.count >= RATE_LIMIT) {
    return true;
  }

  entry.count++;
  return false;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Shared by the comment form and the alert signup form. */
function isValidEmail(email) {
  return typeof email === "string" && EMAIL_REGEX.test(email.trim());
}

/** Extract the client IP from proxy headers, falling back to the socket. */
function clientIpOf(req) {
  return (
    req.headers["x-forwarded-for"]?.toString().split(",")[0]?.trim() ||
    req.socket?.remoteAddress ||
    "unknown"
  );
}

/**
 * Validate comment submission data
 */
function validateCommentData(name, email, comment) {
  const errors = [];

  if (!name || !name.trim()) {
    errors.push("Name is required");
  }

  if (!email || !email.trim()) {
    errors.push("Email is required");
  }

  if (!comment || !comment.trim()) {
    errors.push("Comment is required");
  }

  if (comment && comment.length < 10) {
    errors.push("Comment must be at least 10 characters");
  }

  if (comment && comment.length > 5000) {
    errors.push("Comment must be less than 5000 characters");
  }

  if (email && email.trim() && !isValidEmail(email)) {
    errors.push("Invalid email format");
  }

  return errors;
}

/**
 * Escape Markdown special characters to prevent injection
 */
function escapeBracketsForGitHub(text) {
  return text
    .replace(/\[/g, "\\[")
    .replace(/\]/g, "\\]")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

/**
 * Create GitHub issue for comment
 */
async function createGitHubIssue(name, email, comment) {
  const githubToken = process.env.GITHUB_TOKEN;

  if (!githubToken) {
    throw new Error("GITHUB_TOKEN environment variable is not configured");
  }

  const escapedName = escapeBracketsForGitHub(name);
  const escapedEmail = escapeBracketsForGitHub(email);
  const escapedComment = escapeBracketsForGitHub(comment);

  const issueBody = `**Submitted by:** ${escapedName}\n**Email:** ${escapedEmail}\n\n---\n\n${escapedComment}`;

  try {
    const response = await axios.post(
      "https://api.github.com/repos/jacobmr/hti5/issues",
      {
        title: `Comment: ${escapedName}`,
        body: issueBody,
        labels: ["user-comment"],
      },
      {
        headers: {
          Authorization: `token ${githubToken}`,
          "Content-Type": "application/json",
          "User-Agent": "hti5-comment-system",
        },
        timeout: 10000,
      }
    );

    return {
      number: response.data.number,
      html_url: response.data.html_url,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const data = error.response?.data;

      if (status === 401 || status === 403) {
        throw new Error("GitHub authentication failed - invalid token");
      }

      if (status === 422) {
        throw new Error("Invalid request to GitHub API");
      }

      throw new Error(
        `GitHub API error (${status}): ${data?.message || "Unknown error"}`
      );
    }

    if (error instanceof Error) {
      throw new Error(`Failed to create GitHub issue: ${error.message}`);
    }

    throw new Error("Failed to create GitHub issue: Unknown error");
  }
}

/**
 * Format validation errors for API response
 */
function formatValidationError(errors) {
  if (errors.length === 1) {
    return errors[0];
  }
  return errors.join("; ");
}

// API endpoint for submitting comments via GitHub issues
app.post("/api/comments", async (req, res) => {
  console.log("[/api/comments] POST request received");

  try {
    const { name, email, comment, website } = req.body;

    // Honeypot: if "website" field is filled, it's a bot — return fake success
    if (website) {
      console.log("[/api/comments] Honeypot triggered, returning fake success");
      return res.json({
        success: true,
        message: "Comment submitted successfully!",
        issue_url: "https://github.com/jacobmr/hti5/issues",
        issue_number: 0,
      });
    }

    // Rate limiting
    const clientIp = clientIpOf(req);

    if (isRateLimited(clientIp, "comments")) {
      console.warn(`[/api/comments] Rate limited IP: ${clientIp}`);
      return res.status(429).json({
        success: false,
        error: "Too many submissions. Please try again later.",
        issue_url: null,
      });
    }

    console.log(
      `[/api/comments] Input - name: ${!!name}, email: ${!!email}, comment length: ${comment?.length || 0}`
    );

    // Validate input
    const validationErrors = validateCommentData(name, email, comment);
    if (validationErrors.length > 0) {
      console.warn(
        `[/api/comments] Validation failed: ${validationErrors.join(", ")}`
      );
      return res.status(400).json({
        success: false,
        error: formatValidationError(validationErrors),
        issue_url: null,
      });
    }

    console.log("[/api/comments] Validation passed, creating GitHub issue...");
    const issueData = await createGitHubIssue(name, email, comment);

    console.log(`[/api/comments] Success - issue #${issueData.number} created`);

    res.json({
      success: true,
      message: "Comment submitted successfully!",
      issue_url: issueData.html_url,
      issue_number: issueData.number,
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error(`[/api/comments] Error: ${errorMessage}`);

    // Don't expose internal error details to client
    const status = errorMessage.includes("not configured") ? 500 : 400;

    res.status(status).json({
      success: false,
      error: status === 500 ? "Failed to submit comment" : errorMessage,
      issue_url: null,
    });
  }
});

// --- HTI-5 OIRA review alerts ---

const SITE_URL = process.env.SITE_URL || "https://hti5.org";
const WATCH_RIN = process.env.WATCH_RIN || "0955-AA09";

/**
 * Step 1 of double opt-in: accept an address and email it a signed confirmation
 * link. Nothing is stored until that link is clicked, so submitting someone
 * else's address here subscribes nobody.
 */
app.post("/api/alerts/subscribe", async (req, res) => {
  try {
    const { email, website } = req.body ?? {};

    // Honeypot, matching the comment form's behaviour: bots get a fake success.
    if (website) {
      console.log("[/api/alerts/subscribe] Honeypot triggered");
      return res.json({
        success: true,
        message: "Check your email to confirm.",
      });
    }

    // Validate before rate limiting so a mistyped address doesn't consume the
    // hourly quota. The limit exists to cap outbound email, and a rejected
    // address never sends any.
    if (!isValidEmail(email)) {
      return res
        .status(400)
        .json({ success: false, error: "Please enter a valid email address." });
    }

    if (isRateLimited(clientIpOf(req), "alerts")) {
      return res.status(429).json({
        success: false,
        error: "Too many requests. Please try again later.",
      });
    }

    const normalized = email.trim().toLowerCase();
    const token = createConfirmToken(normalized);
    const confirmUrl = `${SITE_URL}/alerts/confirm?token=${encodeURIComponent(token)}`;

    await sendConfirmationEmail(normalized, confirmUrl);
    console.log("[/api/alerts/subscribe] Confirmation sent");

    res.json({
      success: true,
      message: "Almost done — check your email to confirm.",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error(`[/api/alerts/subscribe] Error: ${message}`);
    // Configuration problems are ours; anything else is treated as a bad request.
    const status = /not configured/.test(message) ? 500 : 400;
    res.status(status).json({
      success: false,
      error:
        status === 500
          ? "Subscription is temporarily unavailable."
          : "Could not process that subscription.",
    });
  }
});

/**
 * Step 2 of double opt-in: verify the signed token and add the contact.
 * Idempotent — clicking the link twice is a success, not an error.
 */
app.get("/api/alerts/confirm", async (req, res) => {
  try {
    const result = verifyConfirmToken(req.query.token);

    if (!result.ok) {
      const expired = result.reason === "expired";
      return res.status(expired ? 410 : 400).json({
        success: false,
        error: expired
          ? "That confirmation link has expired. Please sign up again."
          : "That confirmation link is not valid.",
      });
    }

    const { alreadySubscribed } = await addSubscriber(result.email);
    console.log(
      `[/api/alerts/confirm] Confirmed (already subscribed: ${alreadySubscribed})`
    );

    res.json({
      success: true,
      alreadySubscribed,
      message: alreadySubscribed
        ? "You were already signed up — nothing further to do."
        : "You're subscribed. We'll email you when the rule moves.",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error(`[/api/alerts/confirm] Error: ${message}`);
    res
      .status(500)
      .json({ success: false, error: "Could not confirm that subscription." });
  }
});

/**
 * Scheduled poll of the OIRA feed. Invoked by Vercel Cron.
 *
 * State is only written after alerts send successfully, so a failed send is
 * retried on the next run rather than being silently marked as delivered.
 */
app.get("/api/cron/check-oira", async (req, res) => {
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.authorization !== `Bearer ${secret}`) {
    return res.status(401).json({ success: false, error: "Unauthorized" });
  }

  try {
    const { rundate, records } = await fetchFeed();
    const record = findByRin(records, WATCH_RIN);
    const state = await getState();
    const { alerts, nextState } = evaluate(state, record, rundate);

    for (const alert of alerts) {
      await sendAlertBroadcast(alert.kind, alert.rule, alert.days);
      console.log(`[/api/cron/check-oira] Sent ${alert.kind} broadcast`);
    }

    await setState(nextState);

    console.log(
      `[/api/cron/check-oira] rundate=${rundate} records=${records.length} ` +
        `present=${nextState.present} alerts=${alerts.length}`
    );

    res.json({
      success: true,
      rundate,
      recordCount: records.length,
      watching: WATCH_RIN,
      present: nextState.present,
      alertsSent: alerts.map(a => a.kind),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error(`[/api/cron/check-oira] Error: ${message}`);
    // 200 so a transient upstream failure doesn't mark the cron job as failing;
    // the error is explicit in the body and the logs.
    res.status(200).json({ success: false, error: message });
  }
});

export default app;

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import axios from "axios";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(express.json());

// Set CSP header to allow unsafe-eval for production libraries
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://api.github.com https://fonts.googleapis.com"
  );
  next();
});

// Serve static files from the dist/public directory
// On Vercel, files are in .vercel/output/static/ or we use dist/public/
const staticPath = path.resolve(__dirname, "..", "dist", "public");

console.log(`Serving static files from: ${staticPath}`);
app.use(express.static(staticPath));

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

  if (email && email.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push("Invalid email format");
    }
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
    const { name, email, comment } = req.body;
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

// Handle client-side routing - serve index.html for all non-static routes
app.get("*", (req, res, next) => {
  // Skip for static asset requests (they should be handled by express.static above)
  if (req.path.startsWith("/assets/")) {
    return next();
  }

  const indexPath = path.join(staticPath, "index.html");
  console.log(`Serving index.html for route: ${req.path}`);
  res.sendFile(indexPath, err => {
    if (err) {
      console.error(`Error serving index.html: ${err.message}`);
      res.status(500).send("Error: Could not serve index.html");
    }
  });
});

export default app;

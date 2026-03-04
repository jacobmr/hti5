import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import axios from "axios";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(express.json());

// Serve static files from the dist/public directory
// On Vercel, files are in .vercel/output/static/ or we use dist/public/
const staticPath = path.resolve(__dirname, "..", "dist", "public");

console.log(`Serving static files from: ${staticPath}`);
app.use(express.static(staticPath));

// API endpoint for submitting comments via GitHub issues
app.post("/api/comments", async (req, res) => {
  console.log("[/api/comments] POST request received");

  try {
    const { name, email, comment } = req.body;
    console.log(
      `[/api/comments] Input validation - name: ${!!name}, email: ${!!email}, comment: ${!!comment}`
    );

    // Validate input
    if (!name || !email || !comment) {
      console.warn(
        "[/api/comments] Validation failed: missing required fields"
      );
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (comment.length < 10) {
      console.warn(
        `[/api/comments] Validation failed: comment too short (${comment.length} chars)`
      );
      return res
        .status(400)
        .json({ error: "Comment must be at least 10 characters" });
    }

    if (comment.length > 5000) {
      console.warn(
        `[/api/comments] Validation failed: comment too long (${comment.length} chars)`
      );
      return res
        .status(400)
        .json({ error: "Comment must be less than 5000 characters" });
    }

    console.log("[/api/comments] Input validation passed");

    // Check GitHub token
    const githubToken = process.env.GITHUB_TOKEN;
    if (!githubToken) {
      console.error(
        "[/api/comments] GITHUB_TOKEN not configured in environment"
      );
      return res.status(500).json({
        error: "GitHub token not configured",
        issue_url: null,
      });
    }
    console.log("[/api/comments] GitHub token found in environment");

    const issueBody = `**Submitted by:** ${name}\n**Email:** ${email}\n\n---\n\n${comment}`;

    console.log("[/api/comments] Calling GitHub API to create issue...");
    const response = await axios.post(
      "https://api.github.com/repos/jacobmr/hti5/issues",
      {
        title: `Comment: ${name}`,
        body: issueBody,
        labels: ["user-comment"],
      },
      {
        headers: {
          Authorization: `token ${githubToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(
      `[/api/comments] GitHub API success - issue #${response.data.number} created`
    );
    console.log(`[/api/comments] Issue URL: ${response.data.html_url}`);

    res.json({
      success: true,
      message: "Comment submitted successfully!",
      issue_url: response.data.html_url,
      issue_number: response.data.number,
    });
  } catch (error) {
    console.error(
      "[/api/comments] ERROR:",
      error instanceof Error ? error.message : String(error)
    );
    if (axios.isAxiosError(error)) {
      console.error("[/api/comments] GitHub API error details:", {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
      });
    }
    res.status(500).json({
      error: "Failed to submit comment",
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

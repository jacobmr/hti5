import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import {
  validateCommentData,
  createGitHubIssue,
  formatValidationError,
} from "../server/github-service.js";

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
  try {
    const { name, email, comment } = req.body;

    // Validate input (centralized validation logic)
    const validationErrors = validateCommentData(name, email, comment);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        error: formatValidationError(validationErrors),
        issue_url: null,
      });
    }

    // Create GitHub issue (centralized GitHub API logic)
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

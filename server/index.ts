// Local development server only. Production uses api/index.js on Vercel.
import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import {
  validateCommentData,
  createGitHubIssue,
  formatValidationError,
} from "./github-service.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Determine static file path based on environment
  let staticPath: string;

  if (process.env.NODE_ENV === "production") {
    // In production on Vercel, __dirname is /var/task/dist
    // and public files are in /var/task/dist/public
    staticPath = path.resolve(__dirname, "public");
  } else {
    // In development, __dirname would be .
    // and public files are in ./dist/public
    staticPath = path.resolve(__dirname, "..", "dist", "public");
  }

  console.log(`Environment: ${process.env.NODE_ENV}`);
  console.log(`__dirname: ${__dirname}`);
  console.log(`Serving static files from: ${staticPath}`);

  app.use(express.json());

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

      console.log(
        `[/api/comments] Success - issue #${issueData.number} created`
      );

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

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    const indexPath = path.join(staticPath, "index.html");
    console.log(`Attempting to serve index.html from: ${indexPath}`);
    res.sendFile(indexPath, err => {
      if (err) {
        console.error(`Error serving file: ${err.message}`);
        res.status(500).send("Server Error: Could not serve index.html");
      }
    });
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);

import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import axios from "axios";

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

      // Validate input
      if (!name || !email || !comment) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      if (comment.length < 10) {
        return res
          .status(400)
          .json({ error: "Comment must be at least 10 characters" });
      }

      if (comment.length > 5000) {
        return res
          .status(400)
          .json({ error: "Comment must be less than 5000 characters" });
      }

      // Create GitHub issue
      const githubToken = process.env.GITHUB_TOKEN;
      if (!githubToken) {
        return res.status(500).json({
          error: "GitHub token not configured",
          issue_url: null,
        });
      }

      const issueBody = `**Submitted by:** ${name}\n**Email:** ${email}\n\n---\n\n${comment}`;

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

      res.json({
        success: true,
        message: "Comment submitted successfully!",
        issue_url: response.data.html_url,
        issue_number: response.data.number,
      });
    } catch (error) {
      console.error("Error submitting comment:", error);
      res.status(500).json({
        error: "Failed to submit comment",
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

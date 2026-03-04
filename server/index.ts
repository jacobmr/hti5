import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

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

  app.use(express.static(staticPath));

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

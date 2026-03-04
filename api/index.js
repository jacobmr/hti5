import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the dist/public directory
// On Vercel, files are in .vercel/output/static/ or we use dist/public/
const staticPath = path.resolve(__dirname, "..", "dist", "public");

console.log(`Serving static files from: ${staticPath}`);
app.use(express.static(staticPath));

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

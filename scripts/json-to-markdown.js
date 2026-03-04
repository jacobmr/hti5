#!/usr/bin/env node

/**
 * Convert themes.json to individual Markdown files for easy editing
 * Usage: node scripts/json-to-markdown.js
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const themesPath = path.join(__dirname, "../client/src/data/themes.json");
const outputDir = path.join(__dirname, "../themes-markdown");

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Read themes.json
const themes = JSON.parse(fs.readFileSync(themesPath, "utf8"));

// Generate markdown for each theme
themes.forEach(theme => {
  let md = `# ${theme.label}\n\n`;

  md += `**Key:** \`${theme.key}\`\n`;
  md += `**Comments:** ${theme.comment_count}\n\n`;

  // Position breakdown
  md += `## Position Breakdown\n\n`;
  Object.entries(theme.position_breakdown || {}).forEach(([pos, count]) => {
    const label = pos.replace(/_/g, " ");
    md += `- ${label}: ${count}\n`;
  });
  md += "\n";

  // Analysis
  if (theme.analysis) {
    md += `## Analysis\n\n${theme.analysis}\n\n`;
  }

  // Top arguments
  if (theme.top_arguments && Object.keys(theme.top_arguments).length > 0) {
    md += `## Top Arguments\n\n`;
    Object.entries(theme.top_arguments).forEach(([side, args]) => {
      md += `### ${side.replace(/_/g, " ")}\n\n`;
      args.forEach(arg => {
        md += `- ${arg}\n`;
      });
      md += "\n";
    });
  }

  // Top recommendations
  if (theme.top_recommendations && theme.top_recommendations.length > 0) {
    md += `## Top Recommendations\n\n`;
    theme.top_recommendations.forEach((rec, i) => {
      md += `${i + 1}. ${rec}\n`;
    });
    md += "\n";
  }

  // Notable voices
  if (theme.notable_voices && theme.notable_voices.length > 0) {
    md += `## Notable Voices\n\n`;
    theme.notable_voices.forEach(voice => {
      if (typeof voice === "string") {
        md += `- ${voice}\n`;
      } else {
        md += `- **${voice.commenter}** (${voice.org || "Unknown org"})`;
        if (voice.id) {
          md += ` - [${voice.id.split("-").pop()}](https://www.regulations.gov/comment/${voice.id})`;
        }
        md += "\n";
        if (voice.quote) {
          md += `  > "${voice.quote}"\n`;
        }
      }
    });
    md += "\n";
  }

  // Key tensions
  if (theme.key_tensions && theme.key_tensions.length > 0) {
    md += `## Key Tensions\n\n`;
    theme.key_tensions.forEach(tension => {
      md += `- ${tension}\n`;
    });
    md += "\n";
  }

  // Dominant position
  if (theme.dominant_position) {
    md += `## Dominant Position\n\n${theme.dominant_position}\n`;
  }

  // Write to file
  const filename = `${theme.key}.md`;
  const filepath = path.join(outputDir, filename);
  fs.writeFileSync(filepath, md);
  console.log(`✓ Generated ${filename}`);
});

// Also generate a master index
let index = `# HTI-5 Themes Analysis - Editable Markdown\n\n`;
index += `This directory contains editable Markdown versions of all themes from themes.json.\n\n`;
index += `## Themes\n\n`;

themes.forEach(theme => {
  index += `- [${theme.label}](./${theme.key}.md) (${theme.comment_count} comments)\n`;
});

fs.writeFileSync(path.join(outputDir, "README.md"), index);
console.log(`✓ Generated README.md with index`);
console.log(`\nAll themes exported to: ${outputDir}`);

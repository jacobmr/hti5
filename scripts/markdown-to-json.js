#!/usr/bin/env node

/**
 * Convert edited Markdown files back to themes.json
 * Usage: node scripts/markdown-to-json.js
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const markdownDir = path.join(__dirname, "../themes-markdown");
const themesPath = path.join(__dirname, "../client/src/data/themes.json");

// Read existing themes.json to preserve structure and order
const existingThemes = JSON.parse(fs.readFileSync(themesPath, "utf8"));

// Parse markdown file
function parseMarkdownFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const lines = content.split("\n");

  const theme = {};
  let currentSection = null;
  let currentContent = [];
  let inBlockquote = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Parse title (# Theme Name)
    if (line.startsWith("# ")) {
      theme.label = line.replace(/^# /, "").trim();
      continue;
    }

    // Parse Key and Comments
    if (line.includes("**Key:**")) {
      const match = line.match(/`([^`]+)`/);
      if (match) theme.key = match[1];
      continue;
    }

    if (line.includes("**Comments:**")) {
      const match = line.match(/:\s*(\d+)/);
      if (match) theme.comment_count = parseInt(match[1]);
      continue;
    }

    // Parse section headers
    if (line.startsWith("## ")) {
      // Save previous section
      if (currentSection && currentContent.length > 0) {
        const content = currentContent.join("\n").trim();
        if (currentSection === "Position Breakdown") {
          theme.position_breakdown = parsePositionBreakdown(content);
        } else if (currentSection === "Analysis") {
          theme.analysis = content;
        } else if (currentSection === "Top Arguments") {
          theme.top_arguments = parseTopArguments(content);
        } else if (currentSection === "Top Recommendations") {
          theme.top_recommendations = parseTopRecommendations(content);
        } else if (currentSection === "Notable Voices") {
          theme.notable_voices = parseNotableVoices(content);
        } else if (currentSection === "Key Tensions") {
          theme.key_tensions = parseKeyTensions(content);
        } else if (currentSection === "Dominant Position") {
          theme.dominant_position = content;
        }
      }

      currentSection = line.replace(/^## /, "").trim();
      currentContent = [];
      continue;
    }

    // Accumulate content for current section
    if (currentSection) {
      currentContent.push(line);
    }
  }

  // Save final section
  if (currentSection && currentContent.length > 0) {
    const content = currentContent.join("\n").trim();
    if (currentSection === "Position Breakdown") {
      theme.position_breakdown = parsePositionBreakdown(content);
    } else if (currentSection === "Analysis") {
      theme.analysis = content;
    } else if (currentSection === "Top Arguments") {
      theme.top_arguments = parseTopArguments(content);
    } else if (currentSection === "Top Recommendations") {
      theme.top_recommendations = parseTopRecommendations(content);
    } else if (currentSection === "Notable Voices") {
      theme.notable_voices = parseNotableVoices(content);
    } else if (currentSection === "Key Tensions") {
      theme.key_tensions = parseKeyTensions(content);
    } else if (currentSection === "Dominant Position") {
      theme.dominant_position = content;
    }
  }

  return theme;
}

function parsePositionBreakdown(content) {
  const breakdown = {};
  const lines = content.split("\n");

  for (const line of lines) {
    if (line.startsWith("- ")) {
      const match = line.match(/^- ([^:]+):\s*(\d+)/);
      if (match) {
        const key = match[1].toLowerCase().replace(/ /g, "_");
        breakdown[key] = parseInt(match[2]);
      }
    }
  }

  return breakdown;
}

function parseTopArguments(content) {
  const arguments_ = {};
  let currentSide = null;
  const args = [];

  const lines = content.split("\n");

  for (const line of lines) {
    if (line.startsWith("### ")) {
      if (currentSide && args.length > 0) {
        arguments_[currentSide] = args.slice();
        args.length = 0;
      }
      currentSide = line
        .replace(/^### /, "")
        .trim()
        .toLowerCase()
        .replace(/ /g, "_");
      continue;
    }

    if (line.startsWith("- ") && currentSide) {
      const arg = line.replace(/^- /, "").trim();
      args.push(arg);
    }
  }

  if (currentSide && args.length > 0) {
    arguments_[currentSide] = args;
  }

  return arguments_;
}

function parseTopRecommendations(content) {
  const recommendations = [];
  const lines = content.split("\n");

  for (const line of lines) {
    if (line.match(/^\d+\.\s/)) {
      const rec = line.replace(/^\d+\.\s/, "").trim();
      recommendations.push(rec);
    }
  }

  return recommendations;
}

function parseNotableVoices(content) {
  const voices = [];
  const lines = content.split("\n").filter(l => l.trim());

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("- ")) {
      const rest = line.substring(2).trim();

      // Check if this is a simple string or structured voice
      if (rest.includes("(") && rest.includes(")")) {
        // Structured voice: - **Name** (org) - [link](url)
        const nameMatch = rest.match(/^\*\*([^*]+)\*\*\s*\(([^)]+)\)/);
        if (nameMatch) {
          const voice = {
            commenter: nameMatch[1],
            org: nameMatch[2],
          };

          // Extract link/ID if present
          const linkMatch = rest.match(
            /\[([^\]]+)\]\(https:\/\/www\.regulations\.gov\/comment\/([^)]+)\)/
          );
          if (linkMatch) {
            voice.id = linkMatch[2];
          }

          // Check next line for quote
          if (i + 1 < lines.length && lines[i + 1].startsWith("  > ")) {
            voice.quote = lines[i + 1]
              .replace(/^  > /, "")
              .replace(/^"/, "")
              .replace(/"$/, "")
              .trim();
            i++;
          }

          voices.push(voice);
        }
      } else {
        // Simple string voice
        voices.push(rest);
      }
    }

    i++;
  }

  return voices;
}

function parseKeyTensions(content) {
  const tensions = [];
  const lines = content.split("\n");

  for (const line of lines) {
    if (line.startsWith("- ")) {
      const tension = line.replace(/^- /, "").trim();
      tensions.push(tension);
    }
  }

  return tensions;
}

// Process all markdown files
const files = fs
  .readdirSync(markdownDir)
  .filter(f => f.endsWith(".md") && f !== "README.md")
  .sort();

const updatedThemes = [];

for (const file of files) {
  const filePath = path.join(markdownDir, file);
  const parsedTheme = parseMarkdownFile(filePath);

  // Find existing theme to preserve any fields not in markdown
  const existing = existingThemes.find(t => t.key === parsedTheme.key);
  if (existing) {
    // Merge: use parsed values, fall back to existing for unset fields
    const merged = {
      ...existing,
      ...parsedTheme,
    };
    updatedThemes.push(merged);
  } else {
    updatedThemes.push(parsedTheme);
  }

  console.log(`✓ Parsed ${file}`);
}

// Preserve original order
const finalThemes = existingThemes.map(
  existing => updatedThemes.find(t => t.key === existing.key) || existing
);

// Write back to themes.json
fs.writeFileSync(themesPath, JSON.stringify(finalThemes, null, 2) + "\n");
console.log(`\n✓ Updated ${themesPath}`);
console.log(`✓ All ${files.length} themes merged back to JSON`);

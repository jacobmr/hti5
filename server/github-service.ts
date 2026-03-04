/**
 * GitHub Service
 * Centralizes GitHub API integration for comment submission
 * Used by both server/index.ts and api/index.js
 */

import axios from "axios";

export interface GitHubIssueResponse {
  number: number;
  html_url: string;
}

export interface CommentSubmissionError {
  code: string;
  message: string;
}

/**
 * Validate comment submission data
 * Returns validation errors if any
 */
export function validateCommentData(
  name: string,
  email: string,
  comment: string
): string[] {
  const errors: string[] = [];

  // Required fields
  if (!name || !name.trim()) {
    errors.push("Name is required");
  }

  if (!email || !email.trim()) {
    errors.push("Email is required");
  }

  if (!comment || !comment.trim()) {
    errors.push("Comment is required");
  }

  // Comment length validation
  if (comment && comment.length < 10) {
    errors.push("Comment must be at least 10 characters");
  }

  if (comment && comment.length > 5000) {
    errors.push("Comment must be less than 5000 characters");
  }

  // Email format validation
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
function escapeBracketsForGitHub(text: string): string {
  // Escape brackets and parentheses that could be used for links
  // Keep newlines and basic formatting intact
  return text
    .replace(/\[/g, "\\[")
    .replace(/\]/g, "\\]")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

/**
 * Create a GitHub issue for a submitted comment
 * This centralizes the GitHub API logic used by both handlers
 */
export async function createGitHubIssue(
  name: string,
  email: string,
  comment: string
): Promise<GitHubIssueResponse> {
  const githubToken = process.env.GITHUB_TOKEN;

  if (!githubToken) {
    throw new Error("GITHUB_TOKEN environment variable is not configured");
  }

  // Escape user input to prevent Markdown injection
  const escapedName = escapeBracketsForGitHub(name);
  const escapedEmail = escapeBracketsForGitHub(email);
  const escapedComment = escapeBracketsForGitHub(comment);

  const issueBody = `**Submitted by:** ${escapedName}\n**Email:** ${escapedEmail}\n\n---\n\n${escapedComment}`;

  try {
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
          "User-Agent": "hti5-comment-system",
        },
        timeout: 10000, // 10 second timeout for GitHub API
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
export function formatValidationError(errors: string[]): string {
  if (errors.length === 1) {
    return errors[0];
  }
  return errors.join("; ");
}

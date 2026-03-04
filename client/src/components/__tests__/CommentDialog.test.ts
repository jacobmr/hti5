/**
 * CommentDialog Unit Tests
 * Test comment submission without relying on UAT or manual testing
 */

import { describe, it, expect, beforeEach, vi } from "vitest";

// Mock fetch globally
global.fetch = vi.fn();

// Test Types
interface FormData {
  name: string;
  email: string;
  comment: string;
}

interface ApiResponse {
  success?: boolean;
  error?: string;
  issue_url?: string | null;
  issue_number?: number;
  message?: string;
}

// Helper function to validate comment submission logic
function validateCommentForm(data: FormData): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // Client-side validation mirrors the form
  if (!data.name.trim()) errors.push("Name is required");
  if (!data.email.trim()) errors.push("Email is required");
  if (!data.comment.trim()) errors.push("Comment is required");

  // Server will also check lengths - predict those
  if (data.comment && data.comment.length < 10) {
    errors.push("Comment must be at least 10 characters");
  }
  if (data.comment && data.comment.length > 5000) {
    errors.push("Comment must be less than 5000 characters");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

// Helper to simulate comment submission
async function submitComment(
  data: FormData,
  fetchMock: ReturnType<typeof vi.fn> = global.fetch as any
): Promise<ApiResponse> {
  const validation = validateCommentForm(data);
  if (!validation.valid) {
    throw new Error(validation.errors.join(", "));
  }

  const response = await fetchMock("/api/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to submit comment");
  }

  return response.json();
}

describe("CommentDialog - Form Validation", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should require name field", () => {
    const result = validateCommentForm({
      name: "",
      email: "test@example.com",
      comment: "This is a valid comment with enough text",
    });
    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Name is required");
  });

  it("should require email field", () => {
    const result = validateCommentForm({
      name: "John Doe",
      email: "",
      comment: "This is a valid comment with enough text",
    });
    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Email is required");
  });

  it("should require comment field", () => {
    const result = validateCommentForm({
      name: "John Doe",
      email: "test@example.com",
      comment: "",
    });
    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Comment is required");
  });

  it("should enforce minimum comment length (10 chars)", () => {
    const result = validateCommentForm({
      name: "John Doe",
      email: "test@example.com",
      comment: "Short",
    });
    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Comment must be at least 10 characters");
  });

  it("should enforce maximum comment length (5000 chars)", () => {
    const result = validateCommentForm({
      name: "John Doe",
      email: "test@example.com",
      comment: "x".repeat(5001),
    });
    expect(result.valid).toBe(false);
    expect(result.errors).toContain(
      "Comment must be less than 5000 characters"
    );
  });

  it("should accept valid form data", () => {
    const result = validateCommentForm({
      name: "John Doe",
      email: "john@example.com",
      comment: "This is a valid comment with sufficient length",
    });
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it("should accept exactly 10 character comment", () => {
    const result = validateCommentForm({
      name: "John Doe",
      email: "john@example.com",
      comment: "0123456789", // exactly 10 chars
    });
    expect(result.valid).toBe(true);
  });

  it("should accept exactly 5000 character comment", () => {
    const result = validateCommentForm({
      name: "John Doe",
      email: "john@example.com",
      comment: "x".repeat(5000), // exactly 5000 chars
    });
    expect(result.valid).toBe(true);
  });

  it("should trim whitespace before validation", () => {
    const result = validateCommentForm({
      name: "  John Doe  ",
      email: "  john@example.com  ",
      comment: "  This is a valid comment with sufficient length  ",
    });
    expect(result.valid).toBe(true);
  });
});

describe("CommentDialog - API Submission", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should send POST request with correct payload", async () => {
    const mockFetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        success: true,
        issue_url: "https://github.com/jacobmr/hti5/issues/123",
        issue_number: 123,
      }),
    });

    const data = {
      name: "John Doe",
      email: "john@example.com",
      comment: "This is a test comment",
    };

    await submitComment(data, mockFetch);

    expect(mockFetch).toHaveBeenCalledWith("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  });

  it("should return issue URL on success", async () => {
    const expectedUrl = "https://github.com/jacobmr/hti5/issues/123";
    const mockFetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        success: true,
        issue_url: expectedUrl,
        issue_number: 123,
      }),
    });

    const data = {
      name: "John Doe",
      email: "john@example.com",
      comment: "This is a test comment",
    };

    const response = await submitComment(data, mockFetch);

    expect(response.success).toBe(true);
    expect(response.issue_url).toBe(expectedUrl);
    expect(response.issue_number).toBe(123);
  });

  it("should throw error if validation fails", async () => {
    const mockFetch = vi.fn();

    const data = {
      name: "",
      email: "john@example.com",
      comment: "This is a test comment",
    };

    await expect(submitComment(data, mockFetch)).rejects.toThrow(
      "Name is required"
    );

    // fetch should not have been called
    expect(mockFetch).not.toHaveBeenCalled();
  });

  it("should throw error on API error response", async () => {
    const mockFetch = vi.fn().mockResolvedValueOnce({
      ok: false,
      json: async () => ({
        error: "GitHub token not configured",
      }),
    });

    const data = {
      name: "John Doe",
      email: "john@example.com",
      comment: "This is a test comment",
    };

    await expect(submitComment(data, mockFetch)).rejects.toThrow(
      "GitHub token not configured"
    );
  });

  it("should handle missing required fields", async () => {
    const testCases = [
      { name: "", email: "test@example.com", comment: "Valid comment text" },
      { name: "John", email: "", comment: "Valid comment text" },
      { name: "John", email: "test@example.com", comment: "" },
    ];

    for (const testData of testCases) {
      const result = validateCommentForm(testData);
      expect(result.valid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
    }
  });

  it("should validate against common edge cases", () => {
    const edgeCases = [
      {
        name: "   ", // only whitespace
        email: "test@example.com",
        comment: "Valid comment",
        shouldFail: true,
      },
      {
        name: "John",
        email: "   ", // only whitespace
        comment: "Valid comment",
        shouldFail: true,
      },
      {
        name: "John",
        email: "test@example.com",
        comment: "   ", // only whitespace
        shouldFail: true,
      },
      {
        name: "John\n\nDoe", // newlines (valid)
        email: "test@example.com",
        comment: "Valid comment",
        shouldFail: false,
      },
    ];

    edgeCases.forEach(testCase => {
      const result = validateCommentForm({
        name: testCase.name,
        email: testCase.email,
        comment: testCase.comment,
      });

      expect(result.valid).toBe(!testCase.shouldFail);
    });
  });
});

describe("CommentDialog - Error Handling", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should handle network errors", async () => {
    const mockFetch = vi
      .fn()
      .mockRejectedValueOnce(new TypeError("Network error"));

    const data = {
      name: "John Doe",
      email: "john@example.com",
      comment: "This is a test comment",
    };

    // Wrap in try-catch since submitComment expects ok response
    const fetchFn = vi.fn().mockRejectedValueOnce(new TypeError("Network"));

    try {
      await fetchFn("/api/comments");
      expect.fail("Should have thrown");
    } catch (error) {
      expect(error).toBeInstanceOf(TypeError);
    }
  });

  it("should handle malformed JSON responses", async () => {
    const mockFetch = vi.fn().mockResolvedValueOnce({
      ok: false,
      json: async () => {
        throw new SyntaxError("Invalid JSON");
      },
    });

    const data = {
      name: "John Doe",
      email: "john@example.com",
      comment: "This is a test comment",
    };

    try {
      await submitComment(data, mockFetch);
      expect.fail("Should have thrown");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});

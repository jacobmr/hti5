/**
 * CommentDialog — Submit feedback and comments
 * Creates a GitHub issue for each comment submission
 * Ironic: a comments section on a comments analysis site
 */

import { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare } from "lucide-react";
import { toast } from "sonner";

interface CommentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Email validation regex (matches server-side validation)
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const COMMENT_TIMEOUT = 15000; // 15 seconds

export default function CommentDialog({
  open,
  onOpenChange,
}: CommentDialogProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const validateForm = (
    name: string,
    email: string,
    comment: string
  ): string | null => {
    if (!name.trim()) return "Name is required";
    if (!email.trim()) return "Email is required";
    if (!EMAIL_REGEX.test(email)) return "Invalid email format";
    if (!comment.trim()) return "Comment is required";
    if (comment.length < 10) return "Comment must be at least 10 characters";
    if (comment.length > 5000)
      return "Comment must be less than 5000 characters";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    const validationError = validateForm(name, email, comment);
    if (validationError) {
      toast.error(validationError);
      return;
    }

    // Prevent duplicate submissions
    if (loading) {
      return;
    }

    setLoading(true);

    // Cancel previous request if still pending
    abortControllerRef.current?.abort();
    abortControllerRef.current = new AbortController();

    try {
      const timeoutId = setTimeout(
        () => abortControllerRef.current?.abort(),
        COMMENT_TIMEOUT
      );

      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, comment }),
        signal: abortControllerRef.current.signal,
      });

      clearTimeout(timeoutId);

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || "Failed to submit comment");
        return;
      }

      toast.success("Comment submitted! 🎉", {
        description: (
          <a
            href={data.issue_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            View on GitHub
          </a>
        ),
      });

      // Reset form
      setName("");
      setEmail("");
      setComment("");
      onOpenChange(false);
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        toast.error("Request timed out. Please try again.");
      } else {
        console.error("Error submitting comment:", error);
        toast.error(
          error instanceof Error
            ? error.message
            : "Network error. Please try again."
        );
      }
    } finally {
      setLoading(false);
      abortControllerRef.current = null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageSquare size={20} />
            Comments About Comments
          </DialogTitle>
          <DialogDescription>
            Yes, there's irony in adding a comment section to a website
            analyzing comments. We embrace it. 📝
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground">
              Your Name
            </label>
            <Input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Jane Doe"
              disabled={loading}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground">Email</label>
            <Input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="jane@example.com"
              disabled={loading}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground">
              Your Comment ({comment.length}/5000)
            </label>
            <Textarea
              value={comment}
              onChange={e => setComment(e.target.value)}
              placeholder="Share your thoughts on this analysis..."
              rows={5}
              disabled={loading}
              maxLength={5000}
            />
          </div>

          <p className="text-xs text-muted-foreground">
            Comments are posted as GitHub issues in our public repository so
            everyone can see them and discuss.
          </p>

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit Comment"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

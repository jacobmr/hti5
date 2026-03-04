/**
 * CommentDialog — Submit feedback and comments
 * Creates a GitHub issue for each comment submission
 * Ironic: a comments section on a comments analysis site
 */

import { useState } from "react";
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

export default function CommentDialog({
  open,
  onOpenChange,
}: CommentDialogProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !comment.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, comment }),
      });

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
      console.error("Error submitting comment:", error);
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
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

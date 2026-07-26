/**
 * AlertMeForm — subscribe to alerts about the HTI-5 rule's OIRA review
 *
 * Double opt-in: this only triggers a confirmation email. The address is not
 * stored anywhere until that link is clicked.
 */

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BellRing } from "lucide-react";
import { toast } from "sonner";

// Matches server-side validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SUBSCRIBE_TIMEOUT = 15000;

export default function AlertMeForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!EMAIL_REGEX.test(email.trim())) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (loading) return;

    setLoading(true);
    abortControllerRef.current?.abort();
    abortControllerRef.current = new AbortController();

    try {
      const timeoutId = setTimeout(
        () => abortControllerRef.current?.abort(),
        SUBSCRIBE_TIMEOUT
      );

      const response = await fetch("/api/alerts/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), website }),
        signal: abortControllerRef.current.signal,
      });

      clearTimeout(timeoutId);
      const data = await response.json();

      if (!response.ok || !data.success) {
        toast.error(data.error || "Could not sign you up. Please try again.");
        return;
      }

      setDone(true);
      toast.success("Check your email to confirm.");
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        toast.error("Request timed out. Please try again.");
      } else {
        toast.error("Could not sign you up. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className={className}>
        <p className="text-sm text-muted-foreground">
          Almost there — we sent a confirmation link to{" "}
          <span className="font-medium text-foreground">{email.trim()}</span>.
          Click it and you're set.
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="mb-2 flex items-center gap-2">
        <BellRing className="h-4 w-4" aria-hidden="true" />
        <h3 className="font-semibold">Alert me when HTI-5 moves</h3>
      </div>
      <p className="mb-3 text-sm text-muted-foreground">
        We watch OIRA's public review list for RIN 0955-AA09 and email you when
        the rule reaches review, and again when that review concludes. At most
        two emails. Unsubscribe any time.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="alert-email" className="sr-only">
          Email address
        </label>
        <Input
          id="alert-email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={loading}
          required
          className="sm:flex-1"
        />

        {/* Honeypot — hidden from humans, catches naive bots */}
        <input
          type="text"
          name="website"
          value={website}
          onChange={e => setWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <Button type="submit" disabled={loading}>
          {loading ? "Signing up…" : "Alert me"}
        </Button>
      </form>
    </div>
  );
}

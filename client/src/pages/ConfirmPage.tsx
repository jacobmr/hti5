/**
 * ConfirmPage — landing page for the double opt-in confirmation link.
 * Reads the signed token from the query string and posts it to the API.
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";

type Status = "loading" | "confirmed" | "already" | "error";

export default function ConfirmPage() {
  const [status, setStatus] = useState<Status>("loading");
  const [message, setMessage] = useState("");
  // React 18 StrictMode double-invokes effects in dev; without this the confirm
  // request fires twice.
  const ranRef = useRef(false);

  useEffect(() => {
    if (ranRef.current) return;
    ranRef.current = true;

    const token = new URLSearchParams(window.location.search).get("token");
    if (!token) {
      setStatus("error");
      setMessage("This link is missing its confirmation token.");
      return;
    }

    (async () => {
      try {
        const response = await fetch(
          `/api/alerts/confirm?token=${encodeURIComponent(token)}`
        );
        const data = await response.json();

        if (!response.ok || !data.success) {
          setStatus("error");
          setMessage(data.error || "We couldn't confirm that subscription.");
          return;
        }

        setStatus(data.alreadySubscribed ? "already" : "confirmed");
        setMessage(data.message ?? "");
      } catch {
        setStatus("error");
        setMessage("We couldn't reach the server. Please try the link again.");
      }
    })();
  }, []);

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-20 text-center">
      {status === "loading" && (
        <>
          <Loader2 className="mb-4 h-8 w-8 animate-spin text-muted-foreground" />
          <p className="text-muted-foreground">Confirming your subscription…</p>
        </>
      )}

      {(status === "confirmed" || status === "already") && (
        <>
          <CheckCircle2 className="mb-4 h-10 w-10 text-green-600" />
          <h1 className="mb-2 text-2xl font-semibold">
            {status === "already" ? "Already subscribed" : "You're subscribed"}
          </h1>
          <p className="mb-6 text-muted-foreground">{message}</p>
          <p className="mb-6 text-sm text-muted-foreground">
            We'll email you when RIN 0955-AA09 reaches OIRA review, and again
            when that review concludes.
          </p>
        </>
      )}

      {status === "error" && (
        <>
          <XCircle className="mb-4 h-10 w-10 text-destructive" />
          <h1 className="mb-2 text-2xl font-semibold">
            Couldn't confirm that link
          </h1>
          <p className="mb-6 text-muted-foreground">{message}</p>
        </>
      )}

      {status !== "loading" && (
        <Button asChild variant="outline">
          <Link href="/">Back to the analysis</Link>
        </Button>
      )}
    </div>
  );
}

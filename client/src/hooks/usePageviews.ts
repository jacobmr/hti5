import { useEffect, useRef } from "react";
import { useLocation } from "wouter";

/**
 * Report a pageview whenever the route changes.
 *
 * Fire-and-forget: failures are swallowed, because a counting problem must
 * never affect the reader's experience. Uses sendBeacon where available so the
 * request survives the page being closed.
 */
export function usePageviews() {
  const [location] = useLocation();
  const lastReported = useRef<string | null>(null);

  useEffect(() => {
    // React StrictMode double-invokes effects in development; without this the
    // same path is counted twice on every navigation.
    if (lastReported.current === location) return;
    lastReported.current = location;

    const body = JSON.stringify({ path: location });

    try {
      if (navigator.sendBeacon) {
        navigator.sendBeacon(
          "/api/track",
          new Blob([body], { type: "application/json" })
        );
        return;
      }
      void fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
      }).catch(() => {});
    } catch {
      // Counting is best-effort by design.
    }
  }, [location]);
}

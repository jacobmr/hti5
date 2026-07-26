/**
 * AdminPage — private dashboard for site traffic, alert subscribers, and
 * OIRA watcher status. Access is by magic link to an allowlisted address.
 */

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, RefreshCw, LogOut } from "lucide-react";
import { toast } from "sonner";

type Panel<T> = { ok: true; data: T } | { ok: false; error: string };

interface Stats {
  success: boolean;
  email: string;
  watching: string;
  traffic: Panel<{
    totalViews: number;
    totalUniques: number;
    daily: { date: string; views: number; uniques: number }[];
    topPaths: { path: string; views: number }[];
  }>;
  subscribers: Panel<{
    total: number;
    active: number;
    unsubscribed: number;
    recent: { createdAt: string }[];
  }>;
  watcher: Panel<{
    present: boolean;
    dateReceived: string | null;
    stage: string | null;
    lastChecked: string | null;
    lastRundate: string | null;
    alertsSent: string[];
  }>;
  broadcasts: Panel<{ name: string; status: string; sentAt: string | null }[]>;
}

const fmt = (n: number) => n.toLocaleString();
const fmtDate = (s: string | null) =>
  s
    ? new Date(s).toLocaleString(undefined, {
        dateStyle: "medium",
        timeStyle: "short",
      })
    : "—";

function PanelError({ error }: { error: string }) {
  return <p className="text-sm text-destructive">Unavailable — {error}</p>;
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border bg-muted/30 p-4">
      <div className="font-display text-3xl font-bold">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

/** Inline bar chart. Avoids pulling a chart library onto a private page. */
function Sparkline({ daily }: { daily: { date: string; views: number }[] }) {
  const max = Math.max(1, ...daily.map(d => d.views));
  return (
    <div className="flex h-24 items-end gap-[2px]">
      {daily.map(d => (
        <div
          key={d.date}
          className="flex-1 rounded-sm bg-primary/70 transition-colors hover:bg-primary"
          style={{ height: `${Math.max(2, (d.views / max) * 100)}%` }}
          title={`${d.date}: ${d.views} views`}
        />
      ))}
    </div>
  );
}

export default function AdminPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [linkSent, setLinkSent] = useState(false);
  const exchanged = useRef(false);

  const load = async () => {
    try {
      const r = await fetch("/api/admin/stats");
      if (r.status === 401) {
        setStats(null);
        return;
      }
      setStats(await r.json());
    } catch {
      toast.error("Could not load dashboard");
    } finally {
      setLoading(false);
    }
  };

  // Exchange a magic-link token for a session, then clean it out of the URL so
  // it is not left in history or copied out of the address bar.
  useEffect(() => {
    const run = async () => {
      const token = new URLSearchParams(window.location.search).get("token");
      if (token && !exchanged.current) {
        exchanged.current = true;
        const r = await fetch(
          `/api/admin/session?token=${encodeURIComponent(token)}`
        );
        const data = await r.json().catch(() => ({}));
        if (!r.ok) toast.error(data.error ?? "Sign-in failed");
        window.history.replaceState({}, "", "/admin");
      }
      await load();
    };
    void run();
  }, []);

  const requestLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      const r = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await r.json();
      if (!r.ok) {
        toast.error(data.error ?? "Could not send link");
        return;
      }
      setLinkSent(true);
    } finally {
      setSending(false);
    }
  };

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setStats(null);
    setLinkSent(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="mx-auto max-w-sm px-4 py-24">
        <h1 className="font-display mb-2 text-2xl font-bold">Dashboard</h1>
        {linkSent ? (
          <p className="text-sm text-muted-foreground">
            If that address can sign in, a link is on its way. It expires in 15
            minutes.
          </p>
        ) : (
          <>
            <p className="mb-4 text-sm text-muted-foreground">
              Enter your email and we'll send a sign-in link.
            </p>
            <form onSubmit={requestLink} className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
              <Button type="submit" disabled={sending}>
                {sending ? "Sending…" : "Send sign-in link"}
              </Button>
            </form>
          </>
        )}
      </div>
    );
  }

  const t = stats.traffic;
  const s = stats.subscribers;
  const w = stats.watcher;
  const b = stats.broadcasts;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold">Dashboard</h1>
          <p className="text-xs text-muted-foreground">
            Signed in as {stats.email}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={load}>
            <RefreshCw className="mr-1 h-3 w-3" /> Refresh
          </Button>
          <Button variant="ghost" size="sm" onClick={logout}>
            <LogOut className="mr-1 h-3 w-3" /> Sign out
          </Button>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="font-display mb-3 text-lg font-bold">Traffic</h2>
        {t.ok ? (
          <>
            <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Stat
                label="Pageviews (all time)"
                value={fmt(t.data.totalViews)}
              />
              <Stat label="Unique visitors" value={fmt(t.data.totalUniques)} />
              <Stat
                label="Views, last 30 days"
                value={fmt(t.data.daily.reduce((a, d) => a + d.views, 0))}
              />
              <Stat
                label="Uniques, last 30 days"
                value={fmt(t.data.daily.reduce((a, d) => a + d.uniques, 0))}
              />
            </div>
            <Sparkline daily={t.data.daily} />
            <p className="mt-1 text-xs text-muted-foreground">
              Daily pageviews, last 30 days
            </p>

            {t.data.topPaths.length > 0 && (
              <table className="mt-6 w-full text-sm">
                <thead>
                  <tr className="border-b text-left text-xs text-muted-foreground">
                    <th className="py-1 font-medium">Page</th>
                    <th className="py-1 text-right font-medium">Views</th>
                  </tr>
                </thead>
                <tbody>
                  {t.data.topPaths.map(p => (
                    <tr key={p.path} className="border-b border-border/50">
                      <td className="py-1 font-mono text-xs">{p.path}</td>
                      <td className="py-1 text-right">{fmt(p.views)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        ) : (
          <PanelError error={t.error} />
        )}
      </section>

      <section className="mb-10">
        <h2 className="font-display mb-3 text-lg font-bold">
          Alert subscribers
        </h2>
        {s.ok ? (
          <>
            <div className="grid grid-cols-3 gap-3">
              <Stat label="Confirmed" value={fmt(s.data.active)} />
              <Stat label="Unsubscribed" value={fmt(s.data.unsubscribed)} />
              <Stat label="Total ever" value={fmt(s.data.total)} />
            </div>
            {s.data.recent.length > 0 && (
              <p className="mt-3 text-xs text-muted-foreground">
                Most recent signup: {fmtDate(s.data.recent[0].createdAt)}
              </p>
            )}
          </>
        ) : (
          <PanelError error={s.error} />
        )}
      </section>

      <section className="mb-10">
        <h2 className="font-display mb-3 text-lg font-bold">
          OIRA watcher — {stats.watching}
        </h2>
        {w.ok ? (
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-1 text-muted-foreground">
                  Currently at OIRA
                </td>
                <td className="py-1 text-right font-medium">
                  {w.data.present ? "Yes" : "No"}
                </td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-1 text-muted-foreground">Received at OIRA</td>
                <td className="py-1 text-right">
                  {w.data.dateReceived ?? "—"}
                </td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-1 text-muted-foreground">Stage</td>
                <td className="py-1 text-right">{w.data.stage ?? "—"}</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-1 text-muted-foreground">Alerts sent</td>
                <td className="py-1 text-right">
                  {w.data.alertsSent.length
                    ? w.data.alertsSent.join(", ")
                    : "none"}
                </td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-1 text-muted-foreground">Last checked</td>
                <td className="py-1 text-right">
                  {fmtDate(w.data.lastChecked)}
                </td>
              </tr>
              <tr>
                <td className="py-1 text-muted-foreground">Feed run date</td>
                <td className="py-1 text-right">{w.data.lastRundate ?? "—"}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <PanelError error={w.error} />
        )}
      </section>

      <section>
        <h2 className="font-display mb-3 text-lg font-bold">Broadcasts</h2>
        {b.ok ? (
          b.data.length ? (
            <table className="w-full text-sm">
              <tbody>
                {b.data.map(x => (
                  <tr key={x.name} className="border-b border-border/50">
                    <td className="py-1">{x.name}</td>
                    <td className="py-1 text-right text-muted-foreground">
                      {x.status} · {fmtDate(x.sentAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-sm text-muted-foreground">
              None sent yet — expected until the rule reaches OIRA.
            </p>
          )
        ) : (
          <PanelError error={b.error} />
        )}
      </section>
    </div>
  );
}

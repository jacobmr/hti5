/**
 * Layout — HTI-5 Analysis Site
 * Design: Federal Register Meets Data Journalism
 * Dark navy sidebar + warm off-white main content area
 */
import { Link, useLocation } from "wouter";
import {
  BarChart2,
  FileText,
  MessageSquare,
  Lightbulb,
  Network,
  ExternalLink,
  Menu,
  X,
  Github,
  Copy,
} from "lucide-react";
import { useState } from "react";
import CommentDialog from "./CommentDialog";

const navItems = [
  { path: "/", label: "Overview", icon: BarChart2 },
  { path: "/themes", label: "Themes", icon: FileText },
  { path: "/comments", label: "Comments", icon: MessageSquare },
  { path: "/coordination", label: "Coordination", icon: Network },
  { path: "/recommendations", label: "Recommendations", icon: Lightbulb },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [commentDialogOpen, setCommentDialogOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Mobile header */}
      <header className="lg:hidden flex items-center justify-between px-4 py-3 bg-sidebar text-sidebar-foreground border-b border-sidebar-border">
        <div>
          <div className="text-xs font-mono text-sidebar-primary tracking-widest uppercase">
            HHS-ONC-2025-0005
          </div>
          <div className="font-display text-base font-bold text-white leading-tight">
            HTI-5 Comment Analysis
          </div>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-1 text-sidebar-foreground hover:text-white"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-sidebar text-sidebar-foreground pt-16 px-6">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-4 right-4 p-1 text-sidebar-foreground hover:text-white"
          >
            <X size={22} />
          </button>
          <nav className="space-y-1 mt-4">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                href={path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded text-sm font-medium transition-colors ${
                  location === path
                    ? "bg-sidebar-accent text-white"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-white"
                }`}
              >
                <Icon size={16} />
                {label}
              </Link>
            ))}
            <Link
              href="/duplicates"
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded text-sm font-medium transition-colors ${
                location === "/duplicates"
                  ? "bg-sidebar-accent text-white"
                  : "text-sidebar-foreground/60 hover:bg-sidebar-accent/50 hover:text-white"
              }`}
            >
              <Copy size={16} />
              Duplicates (7)
            </Link>
          </nav>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:flex-col w-56 xl:w-64 bg-sidebar text-sidebar-foreground flex-shrink-0 sticky top-0 h-screen overflow-y-auto">
        {/* Site identity */}
        <div className="px-6 pt-8 pb-6 border-b border-sidebar-border">
          <div className="text-xs font-mono text-sidebar-primary tracking-widest uppercase mb-2">
            HHS-ONC-2025-0005
          </div>
          <h1 className="font-display text-lg font-bold text-white leading-tight">
            HTI-5 Comment
            <br />
            Analysis
          </h1>
          <p className="text-xs text-sidebar-foreground/60 mt-2 leading-relaxed">
            298 public comments on ONC's proposed deregulatory actions
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-0.5">
          {navItems.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              href={path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded text-sm transition-colors ${
                location === path
                  ? "bg-sidebar-accent text-white font-semibold"
                  : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-white"
              }`}
            >
              <Icon size={15} />
              {label}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-6 py-5 border-t border-sidebar-border space-y-3">
          <button
            onClick={() => setCommentDialogOpen(true)}
            className="w-full flex items-center gap-2 px-3 py-2 text-xs text-sidebar-foreground/80 hover:text-white hover:bg-sidebar-accent/50 rounded transition-colors"
          >
            <MessageSquare size={14} />
            Add a comment
          </button>

          <Link
            href="/duplicates"
            className="flex items-center gap-2 text-xs text-sidebar-foreground/60 hover:text-sidebar-primary transition-colors"
          >
            <Copy size={12} />
            Duplicates (7)
          </Link>

          <a
            href="https://github.com/jacobmr/hti5"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-sidebar-foreground/60 hover:text-sidebar-primary transition-colors"
          >
            <Github size={12} />
            GitHub
          </a>

          <a
            href="https://www.regulations.gov/document/HHS-ONC-2025-0005-0001/comment"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-sidebar-foreground/60 hover:text-sidebar-primary transition-colors"
          >
            <ExternalLink size={12} />
            regulations.gov
          </a>

          <div className="text-xs text-sidebar-foreground/40 pt-3 border-t border-sidebar-border/50">
            <div className="font-mono">
              {typeof __COMMIT_HASH__ !== "undefined"
                ? __COMMIT_HASH__
                : "build"}
            </div>
            <div className="mt-2 text-sidebar-foreground/30">
              Comment period closed
              <br />
              Feb 27, 2026
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0 bg-background">{children}</main>

      {/* Comment Dialog */}
      <CommentDialog
        open={commentDialogOpen}
        onOpenChange={setCommentDialogOpen}
      />
    </div>
  );
}

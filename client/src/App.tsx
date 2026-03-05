import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import CommentsPage from "./pages/CommentsPage";
import ThemesPage from "./pages/ThemesPage";
import RecommendationsPage from "./pages/RecommendationsPage";
import CoordinationPage from "./pages/CoordinationPage";
import AssessmentPage from "./pages/AssessmentPage";
import DuplicatesPage from "./pages/DuplicatesPage";
import Layout from "./components/Layout";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/comments" component={CommentsPage} />
        <Route path="/themes" component={ThemesPage} />
        <Route path="/recommendations" component={RecommendationsPage} />
        <Route path="/coordination" component={CoordinationPage} />
        <Route path="/assessment" component={AssessmentPage} />
        <Route path="/duplicates" component={DuplicatesPage} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Analytics />
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

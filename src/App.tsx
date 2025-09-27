
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { HeadManager } from "./components/head/HeadManager";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ScrollToTop } from "./components/ScrollToTop";
import { PageLoader } from "./components/PageLoader";

// Critical route - load immediately for homepage
import Index from "./pages/Index";

// Lazy load all other routes for better performance
const Cases = lazy(() => import("./pages/Cases"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const AIToolingReport = lazy(() => import("./pages/ai-report"));
const TenXExecutive = lazy(() => import("./pages/10xExecutive"));
const AIActionWorkshop = lazy(() => import("./pages/AIActionWorkshop"));
const AIAutomationIntegration = lazy(() => import("./pages/AIAutomationIntegration"));
const TripleATransformation = lazy(() => import("./pages/TripleATransformation"));
const NotFound = lazy(() => import("./pages/NotFound"));
const StrategySessionConfirmed = lazy(() => import("./pages/StrategySessionConfirmed"));
const BlogPage = lazy(() => import("./pages/blog"));
const BlogPostPage = lazy(() => import("./pages/blog/[id]"));
const AILegalWorkshop = lazy(() => import("./pages/AILegalWorkshop"));
const AssociateCallConfirmed = lazy(() => import("./pages/AssociateCallConfirmed"));
const AIOracleSession = lazy(() => import("./pages/AIOracleSession"));
const EnterpriseAICookingShow = lazy(() => import("./pages/EnterpriseAICookingShow"));
const HireScope = lazy(() => import("./pages/HireScope"));
const Methodology = lazy(() => import("./pages/methodology"));
const TripleAFramework = lazy(() => import("./pages/methodology/TripleAFramework"));
const SalesDiscovery = lazy(() => import("./pages/methodology/SalesDiscovery"));
const ActionWorkshop = lazy(() => import("./pages/methodology/ActionWorkshop"));
const AIOracle = lazy(() => import("./pages/methodology/AIOracle"));
const AssociateProgram = lazy(() => import("./pages/AssociateProgram"));
const Ledger = lazy(() => import("./pages/Ledger"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ErrorBoundary>
          <HeadManager />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={<PageLoader />}>
              <Routes>
              {/* Critical route - no lazy loading for homepage */}
              <Route path="/" element={<Index />} />
              
              {/* All other routes lazy loaded */}
              <Route path="/cases" element={<Cases />} />
              <Route path="/cases/:id" element={<CaseStudy />} />
              <Route path="/ai-tooling-report" element={<AIToolingReport />} />
              <Route path="/hirescope" element={<HireScope />} />
              <Route path="/methodology" element={<Methodology />} />
              <Route path="/methodology/triple-a-framework" element={<TripleAFramework />} />
              <Route path="/methodology/sales-discovery" element={<SalesDiscovery />} />
              <Route path="/methodology/action-workshop" element={<ActionWorkshop />} />
              <Route path="/methodology/ai-oracle" element={<AIOracle />} />
              <Route path="/associate-program" element={<AssociateProgram />} />
              <Route path="/10x-executive" element={<TenXExecutive />} />
              <Route path="/ai-action-workshop" element={<AIActionWorkshop />} />
              <Route path="/ai-legal-workshop" element={<AILegalWorkshop />} />
              <Route path="/ai-oracle-session" element={<AIOracleSession />} />
              <Route path="/enterprise-ai-cooking-show" element={<EnterpriseAICookingShow />} />
              <Route path="/ai-automation-integration" element={<AIAutomationIntegration />} />
              <Route path="/triple-a-transformation" element={<TripleATransformation />} />
              <Route path="/strategy-session-confirmed" element={<StrategySessionConfirmed />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogPostPage />} />
              <Route path="/not-found" element={<NotFound />} />
              <Route path="/associate-call-confirmed" element={<AssociateCallConfirmed />} />
              <Route path="/ledger" element={<Ledger />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ErrorBoundary>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Index = lazy(() => import("./pages/Index"));
const StackStudio = lazy(() => import("./pages/StackStudio"));
const C4Studio = lazy(() => import("./pages/C4Studio"));
const WebKnot = lazy(() => import("./pages/WebKnot"));
const Aldebate = lazy(() => import("./pages/Aldebate"));
const Unbuilt = lazy(() => import("./pages/Unbuilt"));
const VentureCloneAI = lazy(() => import("./pages/VentureCloneAI"));
const RepoRadar = lazy(() => import("./pages/RepoRadar"));
const StackFast = lazy(() => import("./pages/StackFast"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading...</p>
            </div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/stackstudio" element={<StackStudio />} />
            <Route path="/c4-studio" element={<C4Studio />} />
            <Route path="/webknot" element={<WebKnot />} />
            <Route path="/aldebate" element={<Aldebate />} />
            <Route path="/unbuilt" element={<Unbuilt />} />
            <Route path="/ventureclone-ai" element={<VentureCloneAI />} />
            <Route path="/reporadar" element={<RepoRadar />} />
            <Route path="/stackfast" element={<StackFast />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

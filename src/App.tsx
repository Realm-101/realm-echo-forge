import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StackStudio from "./pages/StackStudio";
import Unbuilt from "./pages/Unbuilt";
import VentureCloneAI from "./pages/VentureCloneAI";
import RepoRadar from "./pages/RepoRadar";
import StackFast from "./pages/StackFast";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/stackstudio" element={<StackStudio />} />
          <Route path="/unbuilt" element={<Unbuilt />} />
          <Route path="/ventureclone-ai" element={<VentureCloneAI />} />
          <Route path="/reporadar" element={<RepoRadar />} />
          <Route path="/stackfast" element={<StackFast />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

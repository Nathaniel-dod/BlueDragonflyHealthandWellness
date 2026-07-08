import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

import WolfeNonSurgical from "@/pages/services/Wolfe";
import PerfectDay from "@/pages/services/PerfectDay";
import CardioMedBed from "@/pages/services/CardioMedbed";
import CellSonic from "@/pages/services/CellSonic";
import BoneDensity from "@/pages/services/BoneDensity";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      
      {/* Services */}
      <Route path="/services/wolfe-non-surgical" component={WolfeNonSurgical} />
      <Route path="/services/perfect-day-consultations" component={PerfectDay} />
      <Route path="/services/cardio-medbed-eecp" component={CardioMedBed} />
      <Route path="/services/cellsonic-regeneration" component={CellSonic} />
      <Route path="/services/bone-density-scanning" component={BoneDensity} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollToTop />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

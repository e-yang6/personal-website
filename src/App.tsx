import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { cn } from "@/lib/utils";
import { Favicon } from "./components/Favicon";
import { IntroScreen } from "./components/IntroScreen";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = ({ showIntro, setShowIntro }: { showIntro: boolean; setShowIntro: (value: boolean) => void }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState<"entering" | "entered">("entered");

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage("entering");
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage("entered");
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  return (
    <>
      <Favicon />
      <AuroraBackground className="min-h-screen overflow-y-auto">
        <div
          className={cn(
            "transition-opacity duration-300 ease-in-out",
            transitionStage === "entering" ? "opacity-0" : "opacity-100"
          )}
        >
          <Routes location={displayLocation}>
            <Route path="/" element={<Index showIntro={showIntro} />} />
            <Route path="/blog" element={<Blog />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </AuroraBackground>
      {showIntro && <IntroScreen onComplete={() => setShowIntro(false)} />}
    </>
  );
};

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppContent showIntro={showIntro} setShowIntro={setShowIntro} />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;

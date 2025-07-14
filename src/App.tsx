import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import { ComponentLayout } from "@/components/layout/ComponentLayout";
import Home from "./pages/Home";
import ButtonDemo from "./pages/components/ButtonDemo";
import TypographyDemo from "./pages/components/TypographyDemo";
import BodyDemo from "./pages/components/BodyDemo";
import TabsDemo from "./pages/components/TabsDemo";
import GridDemo from "./pages/components/GridDemo";
import CardDemo from "./pages/components/CardDemo";
import ExtendedCardDemo from "./pages/components/ExtendedCardDemo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider defaultTheme="light" storageKey="sparkui-theme">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <ComponentLayout>
                <Home />
              </ComponentLayout>
            } />
            <Route path="/components/button" element={
              <ComponentLayout>
                <ButtonDemo />
              </ComponentLayout>
            } />
            <Route path="/components/typography" element={
              <ComponentLayout>
                <TypographyDemo />
              </ComponentLayout>
            } />
            <Route path="/components/body" element={
              <ComponentLayout>
                <BodyDemo />
              </ComponentLayout>
            } />
            <Route path="/components/tabs" element={
              <ComponentLayout>
                <TabsDemo />
              </ComponentLayout>
            } />
            <Route path="/components/card" element={
              <ComponentLayout>
                <CardDemo />
              </ComponentLayout>
            } />
            <Route path="/components/grid" element={
              <ComponentLayout>
                <GridDemo />
              </ComponentLayout>
            } />
            <Route path="/components/extended-cards" element={
              <ComponentLayout>
                <ExtendedCardDemo />
              </ComponentLayout>
            } />
            {/* Placeholder routes for other composite components */}
            <Route path="/components/forms" element={
              <ComponentLayout>
                <div className="p-8">
                  <h1 className="text-3xl font-bold">Form Components</h1>
                  <p className="text-muted-foreground mt-2">Coming soon...</p>
                </div>
              </ComponentLayout>
            } />
            <Route path="/components/navigation" element={
              <ComponentLayout>
                <div className="p-8">
                  <h1 className="text-3xl font-bold">Navigation Components</h1>
                  <p className="text-muted-foreground mt-2">Coming soon...</p>
                </div>
              </ComponentLayout>
            } />
            <Route path="/components/data-display" element={
              <ComponentLayout>
                <div className="p-8">
                  <h1 className="text-3xl font-bold">Data Display Components</h1>
                  <p className="text-muted-foreground mt-2">Coming soon...</p>
                </div>
              </ComponentLayout>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

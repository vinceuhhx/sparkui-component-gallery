
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ComponentLayout } from "@/components/layout/ComponentLayout";
import { ThemeProvider } from "@/hooks/useTheme";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";

// Component Pages
import ButtonDemo from "@/pages/components/ButtonDemo";
import TypographyDemo from "@/pages/components/TypographyDemo";
import BodyDemo from "@/pages/components/BodyDemo";
import CardDemo from "@/pages/components/CardDemo";
import GridDemo from "@/pages/components/GridDemo";
import TabsDemo from "@/pages/components/TabsDemo";
import ExtendedCardDemo from "@/pages/components/ExtendedCardDemo";
import HomeComponentDemo from "@/pages/components/HomeComponentDemo";
import ContentCardDemo from "@/pages/components/ContentCardDemo";

import "@/index.css";
import "@/styles/impressive.css";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="sparkui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components/*" element={
            <ComponentLayout>
              <Routes>
                <Route path="button" element={<ButtonDemo />} />
                <Route path="typography" element={<TypographyDemo />} />
                <Route path="body" element={<BodyDemo />} />
                <Route path="card" element={<CardDemo />} />
                <Route path="grid" element={<GridDemo />} />
                <Route path="tabs" element={<TabsDemo />} />
                <Route path="extended-cards" element={<ExtendedCardDemo />} />
                <Route path="home-components" element={<HomeComponentDemo />} />
                <Route path="content-cards" element={<ContentCardDemo />} />
                <Route path="forms" element={
                  <div className="p-8">
                    <h1 style={{ 
                      font: 'var(--ig-typography-heading-large-bold)', 
                      color: 'var(--ig-text-bold)',
                      marginBottom: '8px'
                    }}>Form Components</h1>
                    <p style={{ 
                      font: 'var(--ig-typography-body-large-regular)', 
                      color: 'var(--ig-text-medium)'
                    }}>Coming soon...</p>
                  </div>
                } />
                <Route path="navigation" element={
                  <div className="p-8">
                    <h1 style={{ 
                      font: 'var(--ig-typography-heading-large-bold)', 
                      color: 'var(--ig-text-bold)',
                      marginBottom: '8px'
                    }}>Navigation Components</h1>
                    <p style={{ 
                      font: 'var(--ig-typography-body-large-regular)', 
                      color: 'var(--ig-text-medium)'
                    }}>Coming soon...</p>
                  </div>
                } />
                <Route path="data-display" element={
                  <div className="p-8">
                    <h1 style={{ 
                      font: 'var(--ig-typography-heading-large-bold)', 
                      color: 'var(--ig-text-bold)',
                      marginBottom: '8px'
                    }}>Data Display Components</h1>
                    <p style={{ 
                      font: 'var(--ig-typography-body-large-regular)', 
                      color: 'var(--ig-text-medium)'
                    }}>Coming soon...</p>
                  </div>
                } />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </ComponentLayout>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

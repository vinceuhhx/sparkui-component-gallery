
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
import ContentCardDemo from "@/pages/components/ContentCardDemo";

// Documentation Pages
import GettingStarted from "@/pages/docs/GettingStarted";
import APIReference from "@/pages/docs/APIReference";
import DesignTokens from "@/pages/docs/DesignTokens";
import Examples from "@/pages/docs/Examples";

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
                <Route path="content-cards" element={<ContentCardDemo />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </ComponentLayout>
          } />
          <Route path="/docs/*" element={
            <ComponentLayout>
              <Routes>
                <Route path="getting-started" element={<GettingStarted />} />
                <Route path="api-reference" element={<APIReference />} />
                <Route path="design-tokens" element={<DesignTokens />} />
                <Route path="examples" element={<Examples />} />
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

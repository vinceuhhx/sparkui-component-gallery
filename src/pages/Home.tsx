
import { Link } from "react-router-dom"
import { Typography, Body, Button } from "@/components/sparkui"
import { ArrowRight, Palette, Zap, Heart, Sparkles } from "lucide-react"

const Home = () => {
  return (
    <div className="content-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '32px' }}>
          <div style={{ 
            width: '64px', 
            height: '64px', 
            background: 'var(--ig-text-primary)', 
            borderRadius: 'var(--ig-border-radius-large)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <Sparkles style={{ width: '32px', height: '32px', color: 'var(--ig-background-page-clear)' }} />
          </div>
        </div>
        
        <h1 className="hero-title">SparkUI</h1>
        <h2 className="hero-subtitle">Modern Component Library</h2>
        
        <p className="hero-description">
          A comprehensive showcase of SparkUI components with all variants, states, and configurations. 
          Built with modern design principles and accessibility in mind using clean, minimalistic design tokens.
        </p>

        <div className="hero-actions">
          <Link to="/components/button">
            <Button variant="filled" color="primary" size="lg">
              Explore Components
              <ArrowRight style={{ width: '16px', height: '16px', marginLeft: '8px' }} />
            </Button>
          </Link>
          <Button variant="outlined" color="primary" size="lg">
            Documentation
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="content-section">
        <div className="content-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Zap style={{ width: '24px', height: '24px', color: 'var(--ig-text-primary)' }} />
            </div>
            <h3 className="feature-title">Fast & Modern</h3>
            <p className="feature-description">
              Built with performance and modern design patterns in mind
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Palette style={{ width: '24px', height: '24px', color: 'var(--ig-text-primary)' }} />
            </div>
            <h3 className="feature-title">Themeable</h3>
            <p className="feature-description">
              Full light and dark mode support with customizable design tokens
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Heart style={{ width: '24px', height: '24px', color: 'var(--ig-text-primary)' }} />
            </div>
            <h3 className="feature-title">Developer Friendly</h3>
            <p className="feature-description">
              Clean APIs, TypeScript support, and comprehensive documentation
            </p>
          </div>
        </div>
      </div>

      {/* Component Categories */}
      <div className="content-section">
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: 'var(--ig-text-bold)', marginBottom: '16px' }}>
            Component Categories
          </h2>
        </div>

        <div className="content-grid">
          {/* Basic Components */}
          <div className="demo-card">
            <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'var(--ig-text-primary)', marginBottom: '16px' }}>
              Basic Components
            </h3>
            <p style={{ color: 'var(--ig-text-medium)', marginBottom: '16px' }}>
              Essential building blocks for any application interface.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link to="/components/button" style={{ color: 'var(--ig-text-primary)', textDecoration: 'none', fontSize: '14px' }}>
                • Button - Interactive actions with multiple variants
              </Link>
              <Link to="/components/typography" style={{ color: 'var(--ig-text-primary)', textDecoration: 'none', fontSize: '14px' }}>
                • Typography - Flexible heading component
              </Link>
              <Link to="/components/body" style={{ color: 'var(--ig-text-primary)', textDecoration: 'none', fontSize: '14px' }}>
                • Body - Versatile text content component
              </Link>
              <Link to="/components/tabs" style={{ color: 'var(--ig-text-primary)', textDecoration: 'none', fontSize: '14px' }}>
                • Tabs - Navigation and content organization
              </Link>
            </div>
          </div>

          {/* Composite Components */}
          <div className="demo-card">
            <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'var(--ig-text-primary)', marginBottom: '16px' }}>
              Composite Components
            </h3>
            <p style={{ color: 'var(--ig-text-medium)', marginBottom: '16px' }}>
              Complex components built from basic elements.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link to="/components/extended-cards" style={{ color: 'var(--ig-text-primary)', textDecoration: 'none', fontSize: '14px' }}>
                • Extended Cards - Advanced card layouts
              </Link>
              <Link to="/components/forms" style={{ color: 'var(--ig-text-primary)', textDecoration: 'none', fontSize: '14px' }}>
                • Form Components - Complete form solutions
              </Link>
              <Link to="/components/navigation" style={{ color: 'var(--ig-text-primary)', textDecoration: 'none', fontSize: '14px' }}>
                • Navigation - Advanced navigation patterns
              </Link>
              <Link to="/components/data-display" style={{ color: 'var(--ig-text-primary)', textDecoration: 'none', fontSize: '14px' }}>
                • Data Display - Tables, lists, and data visualization
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="content-section">
        <div className="demo-card" style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '24px', fontWeight: '600', color: 'var(--ig-text-bold)', marginBottom: '16px' }}>
            Getting Started
          </h3>
          <p style={{ color: 'var(--ig-text-medium)', marginBottom: '24px' }}>
            Start exploring the components using the sidebar navigation or jump directly to a specific component below.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/components/button">
              <Button variant="soft" color="primary">
                View Buttons
              </Button>
            </Link>
            <Link to="/components/typography">
              <Button variant="soft" color="primary">
                View Typography
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

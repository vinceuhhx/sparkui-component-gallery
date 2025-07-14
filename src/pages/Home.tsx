import { Link } from "react-router-dom"
import { Typography, Body, Button } from "@/components/sparkui"
import { ArrowRight, Palette, Zap, Heart } from "lucide-react"

const Home = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
            <Palette className="h-6 w-6 text-primary-foreground" />
          </div>
          <Typography level={1} color="primary">SparkUI</Typography>
        </div>
        
        <Typography level={2} weight="medium" color="soft" align="center">
          Modern Component Library
        </Typography>
        
        <Body size="large" color="medium" align="center" className="mt-4 max-w-2xl mx-auto">
          A comprehensive showcase of SparkUI components with all variants, states, and configurations. 
          Built with modern design principles and accessibility in mind.
        </Body>

        <div className="mt-8 flex justify-center gap-4">
          <Link to="/components/button">
            <Button variant="filled" color="primary" size="lg">
              Explore Components
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Button variant="outlined" color="primary" size="lg">
            View on GitHub
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="text-center p-6 bg-card rounded-xl border border-border">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Zap className="h-6 w-6 text-primary" />
          </div>
          <Typography level={4} weight="medium" align="center">
            Fast & Modern
          </Typography>
          <Body size="small" color="soft" align="center" className="mt-2">
            Built with performance and modern design patterns in mind
          </Body>
        </div>

        <div className="text-center p-6 bg-card rounded-xl border border-border">
          <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Palette className="h-6 w-6 text-success" />
          </div>
          <Typography level={4} weight="medium" align="center">
            Themeable
          </Typography>
          <Body size="small" color="soft" align="center" className="mt-2">
            Full light and dark mode support with customizable tokens
          </Body>
        </div>

        <div className="text-center p-6 bg-card rounded-xl border border-border">
          <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Heart className="h-6 w-6 text-pink-600" />
          </div>
          <Typography level={4} weight="medium" align="center">
            Developer Friendly
          </Typography>
          <Body size="small" color="soft" align="center" className="mt-2">
            Clean APIs, TypeScript support, and comprehensive documentation
          </Body>
        </div>
      </div>

      {/* Component Categories */}
      <div className="space-y-8">
        <Typography level={2} weight="bold" align="center">
          Component Categories
        </Typography>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Basic Components */}
          <div className="p-6 bg-card rounded-xl border border-border">
            <Typography level={3} weight="medium" color="primary" className="mb-4">
              Basic Components
            </Typography>
            <Body color="medium" className="mb-4">
              Essential building blocks for any application interface.
            </Body>
            <div className="space-y-2">
              <Link to="/components/button" className="block">
                <Body size="small" color="primary" className="hover:underline">
                  • Button - Interactive actions with multiple variants
                </Body>
              </Link>
              <Link to="/components/typography" className="block">
                <Body size="small" color="primary" className="hover:underline">
                  • Typography - Flexible heading component
                </Body>
              </Link>
              <Link to="/components/body" className="block">
                <Body size="small" color="primary" className="hover:underline">
                  • Body - Versatile text content component
                </Body>
              </Link>
              <Link to="/components/tabs" className="block">
                <Body size="small" color="primary" className="hover:underline">
                  • Tabs - Navigation and content organization
                </Body>
              </Link>
            </div>
          </div>

          {/* Composite Components */}
          <div className="p-6 bg-card rounded-xl border border-border">
            <Typography level={3} weight="medium" color="success" className="mb-4">
              Composite Components
            </Typography>
            <Body color="medium" className="mb-4">
              Complex components built from basic elements.
            </Body>
            <div className="space-y-2">
              <Link to="/components/card-layouts" className="block">
                <Body size="small" color="success" className="hover:underline">
                  • Card Layouts - Structured content containers
                </Body>
              </Link>
              <Link to="/components/forms" className="block">
                <Body size="small" color="success" className="hover:underline">
                  • Form Components - Complete form solutions
                </Body>
              </Link>
              <Link to="/components/navigation" className="block">
                <Body size="small" color="success" className="hover:underline">
                  • Navigation - Advanced navigation patterns
                </Body>
              </Link>
              <Link to="/components/data-display" className="block">
                <Body size="small" color="success" className="hover:underline">
                  • Data Display - Tables, lists, and data visualization
                </Body>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="mt-12 p-8 bg-muted/20 rounded-xl border border-border">
        <Typography level={3} weight="medium" align="center" className="mb-4">
          Getting Started
        </Typography>
        <Body align="center" color="medium" className="mb-6">
          Start exploring the components using the sidebar navigation or jump directly to a specific component below.
        </Body>
        <div className="flex justify-center gap-4">
          <Link to="/components/button">
            <Button variant="soft" color="primary">
              View Buttons
            </Button>
          </Link>
          <Link to="/components/typography">
            <Button variant="soft" color="success">
              View Typography
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
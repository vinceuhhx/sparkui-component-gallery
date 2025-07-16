import { Typography, Button, Card, CardHeader, CardTitle, CardBody } from "@/components/sparkui"
import { ComponentDemo } from "@/components/demo/ComponentDemo"

const Examples = () => {
  const loginFormCode = `import { Button, Card, CardHeader, CardTitle, CardBody, Typography } from '@sdworx/sparkui'

function LoginForm() {
  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
            </CardHeader>
        <CardBody className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Email</label>
            <input 
              type="email" 
              className="w-full px-3 py-2 border border-border rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your email"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Password</label>
            <input 
              type="password" 
              className="w-full px-3 py-2 border border-border rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your password"
            />
          </div>
          <Button variant="filled" className="w-full">
            Sign In
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}`

  const dashboardCode = `import { Card, CardHeader, CardTitle, CardBody, Typography } from '@sdworx/sparkui'

function Dashboard() {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      <Typography level={1} weight="bold" className="text-2xl lg:text-3xl">
        Dashboard
      </Typography>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Users
            </CardTitle>
          </CardHeader>
          <CardBody className="pt-0">
            <div className="flex items-baseline space-x-2">
              <Typography level={2} weight="bold" className="text-2xl">
                1,234
              </Typography>
              <span className="text-sm text-green-600 font-medium">
                +12%
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              from last month
            </p>
          </CardBody>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Revenue
            </CardTitle>
          </CardHeader>
          <CardBody className="pt-0">
            <div className="flex items-baseline space-x-2">
              <Typography level={2} weight="bold" className="text-2xl">
                $12,345
              </Typography>
              <span className="text-sm text-green-600 font-medium">
                +8%
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              from last month
            </p>
          </CardBody>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Orders
            </CardTitle>
          </CardHeader>
          <CardBody className="pt-0">
            <div className="flex items-baseline space-x-2">
              <Typography level={2} weight="bold" className="text-2xl">
                567
              </Typography>
              <span className="text-sm text-red-600 font-medium">
                -3%
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              from last month
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}`

  const sidebarLayoutCode = `import { useState } from 'react'
import { Menu, X, Home, Settings, Users } from 'lucide-react'

function SidebarLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={\`
        fixed top-0 left-0 h-full w-64 bg-card border-r z-50 
        transform transition-transform duration-300
        lg:translate-x-0 lg:static
        \${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      \`}>
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Navigation</h2>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 hover:bg-accent rounded"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        <nav className="p-4 space-y-2">
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-accent rounded">
            <Home className="w-4 h-4" />
            Home
          </a>
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-accent rounded">
            <Users className="w-4 h-4" />
            Users
          </a>
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-accent rounded">
            <Settings className="w-4 h-4" />
            Settings
          </a>
        </nav>
      </div>

      {/* Main content */}
      <div className="lg:ml-64">
        <header className="lg:hidden p-4 border-b">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-accent rounded"
          >
            <Menu className="w-5 h-5" />
          </button>
        </header>
        <main className="p-4">
          <h1 className="text-2xl font-bold mb-4">Main Content</h1>
          <p>Your content goes here...</p>
        </main>
      </div>
    </div>
  )
}`

  return (
    <div className="w-full">
      <div className="space-y-8 lg:space-y-12">
        {/* Header Section */}
        <div className="space-y-4">
          <Typography level={1} weight="bold" className="text-3xl lg:text-4xl">
            Examples
          </Typography>
          <Typography className="text-lg text-muted-foreground max-w-3xl">
            Real-world examples showing how to combine SparkUI components to build common UI patterns.
            Each example includes responsive design and follows modern best practices.
          </Typography>
        </div>

        {/* Examples Grid */}
        <div className="space-y-12 lg:space-y-16">
          <ComponentDemo
            title="Login Form"
            description="A complete, responsive login form using Cards, Typography, and Buttons with proper form validation styling"
            code={loginFormCode}
          >
            <div className="w-full flex justify-center py-8">
              <div className="w-full max-w-md">
                <Card>
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
        </CardHeader>
                  <CardBody className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-3 py-2 border border-border rounded-md 
                                   focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Password</label>
                      <input 
                        type="password" 
                        className="w-full px-3 py-2 border border-border rounded-md 
                                   focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                        placeholder="Enter your password"
                      />
                    </div>
                    <Button variant="filled" className="w-full">
                      Sign In
                    </Button>
                  </CardBody>
                </Card>
              </div>
            </div>
          </ComponentDemo>

          <ComponentDemo
            title="Dashboard Metrics"
            description="A responsive dashboard with metric cards using CSS Grid for perfect alignment across all screen sizes"
            code={dashboardCode}
          >
            <div className="w-full space-y-6">
              <Typography level={2} weight="bold" className="text-xl lg:text-2xl">
                Dashboard
              </Typography>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Total Users
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="pt-0">
                    <div className="flex items-baseline space-x-2">
                      <Typography level={3} weight="bold" className="text-2xl">
                        1,234
                      </Typography>
                      <span className="text-sm text-green-600 font-medium">
                        +12%
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      from last month
                    </p>
                  </CardBody>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Revenue
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="pt-0">
                    <div className="flex items-baseline space-x-2">
                      <Typography level={3} weight="bold" className="text-2xl">
                        $12,345
                      </Typography>
                      <span className="text-sm text-green-600 font-medium">
                        +8%
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      from last month
                    </p>
                  </CardBody>
                </Card>
                
                <Card className="md:col-span-2 lg:col-span-1">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Orders
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="pt-0">
                    <div className="flex items-baseline space-x-2">
                      <Typography level={3} weight="bold" className="text-2xl">
                        567
                      </Typography>
                      <span className="text-sm text-red-600 font-medium">
                        -3%
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      from last month
                    </p>
                  </CardBody>
                </Card>
              </div>
            </div>
          </ComponentDemo>

          <ComponentDemo
            title="Responsive Sidebar Layout"
            description="A fully responsive sidebar layout that collapses on mobile with smooth animations and proper accessibility"
            code={sidebarLayoutCode}
          >
            <div className="w-full border border-border rounded-lg overflow-hidden bg-background">
              <div className="h-64 lg:h-80 relative">
                <div className="absolute inset-0 bg-muted/30 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <Typography level={3} weight="medium">Interactive Demo</Typography>
                    <Typography className="text-sm text-muted-foreground">
                      Click "Show Code" to see the complete implementation
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </ComponentDemo>
        </div>
      </div>
    </div>
  )
}

export default Examples
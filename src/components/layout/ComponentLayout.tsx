import { useState } from "react"
import { ComponentLibrarySidebar } from "./ComponentLibrarySidebar"
import { Menu, X } from "lucide-react"

interface ComponentLayoutProps {
  children: React.ReactNode
}

export const ComponentLayout = ({ children }: ComponentLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="inline-flex items-center justify-center p-2 rounded-md text-foreground 
                       hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Menu className="w-5 h-5" />
            <span className="sr-only">Open sidebar</span>
          </button>
          <h1 className="text-lg font-semibold">SparkUI</h1>
          <div className="w-9"></div> {/* Spacer for centering */}
        </div>
      </header>

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-80 bg-card border-r border-border z-50 
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:z-auto
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:block
      `}>
        <ComponentLibrarySidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Main Content Area */}
      <div className="lg:ml-80 min-h-screen">
        <main className="w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
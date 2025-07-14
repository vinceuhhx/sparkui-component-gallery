import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { ChevronDown, Package, Palette, Sun, Moon } from "lucide-react"
import { useTheme } from "@/hooks/useTheme"

interface SidebarItemProps {
  title: string
  to: string
  icon?: React.ComponentType<{ className?: string }>
}

interface SidebarGroupProps {
  title: string
  items: SidebarItemProps[]
  defaultOpen?: boolean
}

const SidebarItem = ({ title, to, icon: Icon }: SidebarItemProps) => {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <NavLink
      to={to}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all hover:bg-background/80 ${
        isActive 
          ? "bg-primary/10 text-primary font-medium border-l-2 border-primary" 
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {Icon && <Icon className="h-4 w-4" />}
      {title}
    </NavLink>
  )
}

const SidebarGroup = ({ title, items, defaultOpen = false }: SidebarGroupProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="space-y-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-foreground hover:bg-background/50 rounded-lg transition-colors"
      >
        <span className="flex items-center gap-2">
          <Package className="h-4 w-4" />
          {title}
        </span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="ml-4 space-y-1 border-l border-border/40 pl-4">
          {items.map((item) => (
            <SidebarItem key={item.to} {...item} />
          ))}
        </div>
      )}
    </div>
  )
}

export const ComponentLibrarySidebar = () => {
  const { theme, setTheme } = useTheme()

  const basicComponents = [
    { title: "Button", to: "/components/button" },
    { title: "Typography", to: "/components/typography" },
    { title: "Body", to: "/components/body" },
    { title: "Card", to: "/components/card" },
    { title: "Grid", to: "/components/grid" },
    { title: "Tabs", to: "/components/tabs" },
  ]

  const compositeComponents = [
    { title: "Extended Cards", to: "/components/extended-cards" },
    { title: "Form Components", to: "/components/forms" },
    { title: "Navigation", to: "/components/navigation" },
    { title: "Data Display", to: "/components/data-display" },
  ]

  return (
    <div className="w-64 h-screen bg-card border-r border-border flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Palette className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-foreground">SparkUI</span>
          </NavLink>
          
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-lg hover:bg-background transition-colors"
          >
            {theme === "light" ? (
              <Moon className="h-4 w-4 text-muted-foreground" />
            ) : (
              <Sun className="h-4 w-4 text-muted-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        <SidebarGroup 
          title="Basic Components" 
          items={basicComponents}
          defaultOpen={true}
        />
        
        <SidebarGroup 
          title="Composite Components" 
          items={compositeComponents}
        />
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="text-xs text-muted-foreground text-center">
          SparkUI Component Library<br />
          Built with ❤️ using Lovable
        </div>
      </div>
    </div>
  )
}
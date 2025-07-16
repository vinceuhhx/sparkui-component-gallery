import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { 
  ChevronDown, 
  Package, 
  Palette, 
  Sun, 
  Moon, 
  MousePointer, 
  Type, 
  AlignLeft, 
  Square, 
  Grid3X3, 
  Layers, 
  CreditCard, 
  FileText, 
  BookOpen, 
  Code, 
  Lightbulb,
  X
} from "lucide-react"
import { useTheme } from "@/hooks/useTheme"

interface SidebarItemProps {
  title: string
  to: string
  icon?: React.ComponentType<{ className?: string }>
  onClick?: () => void
}

interface SidebarGroupProps {
  title: string
  items: SidebarItemProps[]
  defaultOpen?: boolean
}

interface ComponentLibrarySidebarProps {
  onClose?: () => void
}

const SidebarItem = ({ title, to, icon: Icon, onClick }: SidebarItemProps) => {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={`
        flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all duration-200
        ${isActive 
          ? 'bg-primary text-primary-foreground font-medium shadow-sm' 
          : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
        }
      `}
    >
      {Icon && <Icon className="w-4 h-4 flex-shrink-0" />}
      <span className="truncate">{title}</span>
    </NavLink>
  )
}

const SidebarGroup = ({ title, items, defaultOpen = false }: SidebarGroupProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const location = useLocation()
  
  // Keep group open if any item is active
  const hasActiveItem = items.some(item => location.pathname === item.to)
  const shouldBeOpen = isOpen || hasActiveItem

  return (
    <div className="space-y-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium
                   text-foreground hover:bg-accent/50 rounded-md transition-colors duration-200"
      >
        <div className="flex items-center gap-2">
          <Package className="w-4 h-4" />
          <span>{title}</span>
        </div>
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${
            shouldBeOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      
      <div className={`
        space-y-1 overflow-hidden transition-all duration-300 ease-in-out
        ${shouldBeOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="ml-6 space-y-1 border-l border-border pl-3">
          {items.map((item) => (
            <SidebarItem key={item.to} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export const ComponentLibrarySidebar = ({ onClose }: ComponentLibrarySidebarProps) => {
  const { theme, setTheme } = useTheme()

  const basicComponents = [
    { title: "Button", to: "/components/button", icon: MousePointer, onClick: onClose },
    { title: "Typography", to: "/components/typography", icon: Type, onClick: onClose },
    { title: "Body", to: "/components/body", icon: AlignLeft, onClick: onClose },
    { title: "Card", to: "/components/card", icon: Square, onClick: onClose },
    { title: "Grid", to: "/components/grid", icon: Grid3X3, onClick: onClose },
    { title: "Tabs", to: "/components/tabs", icon: Layers, onClick: onClose },
  ]

  const compositeComponents = [
    { title: "Extended Cards", to: "/components/extended-cards", icon: CreditCard, onClick: onClose },
    { title: "Content Cards", to: "/components/content-cards", icon: FileText, onClick: onClose },
  ]

  const documentation = [
    { title: "Getting Started", to: "/docs/getting-started", icon: BookOpen, onClick: onClose },
    { title: "API Reference", to: "/docs/api-reference", icon: Code, onClick: onClose },
    { title: "Design Tokens", to: "/docs/design-tokens", icon: Palette, onClick: onClose },
    { title: "Examples", to: "/docs/examples", icon: Lightbulb, onClick: onClose },
  ]

  return (
    <div className="flex flex-col h-full bg-card">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-border">
        <NavLink 
          to="/" 
          onClick={onClose}
          className="flex items-center gap-3 text-decoration-none group"
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:bg-primary/90 transition-colors">
            <Palette className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">SparkUI</span>
        </NavLink>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
          
          {onClose && (
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <SidebarGroup 
          title="Components" 
          items={basicComponents}
          defaultOpen={true}
        />
        
        <SidebarGroup 
          title="Composite" 
          items={compositeComponents}
          defaultOpen={true}
        />

        <SidebarGroup 
          title="Documentation" 
          items={documentation}
          defaultOpen={true}
        />
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-border">
        <div className="text-xs text-muted-foreground text-center space-y-1">
          <div className="font-medium">SparkUI Component Library</div>
          <div>Built with ❤️ using Lovable</div>
        </div>
      </div>
    </div>
  )
}

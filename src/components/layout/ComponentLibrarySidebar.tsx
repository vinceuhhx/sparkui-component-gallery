import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { ChevronDown, Package, Palette, Sun, Moon, MousePointer, Type, AlignLeft, Square, Grid3X3, Layers, CreditCard, FileText, BookOpen, Code, Lightbulb } from "lucide-react"
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
      className={`sidebar-item ${isActive ? 'active' : ''}`}
    >
      {Icon && <Icon className="icon" />}
      <span>{title}</span>
    </NavLink>
  )
}

const SidebarGroup = ({ title, items, defaultOpen = false }: SidebarGroupProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div style={{ marginBottom: '16px' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="interactive-highlight"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          padding: '12px 16px',
          fontSize: '14px',
          fontWeight: '600',
          color: 'var(--ig-text-bold)',
          background: 'var(--ig-background-surface-on-clear-soft)',
          border: 'none',
          borderRadius: 'var(--ig-border-radius)',
          cursor: 'pointer'
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Package className="icon" />
          {title}
        </span>
        <ChevronDown style={{ 
          width: '16px', 
          height: '16px', 
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform var(--ig-transition-duration) ease'
        }} />
      </button>
      
      {isOpen && (
        <div style={{ 
          marginLeft: '16px', 
          paddingLeft: '16px', 
          borderLeft: '2px solid var(--ig-border-soft)',
          marginTop: '8px'
        }}>
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
    { title: "Button", to: "/components/button", icon: MousePointer },
    { title: "Typography", to: "/components/typography", icon: Type },
    { title: "Body", to: "/components/body", icon: AlignLeft },
    { title: "Card", to: "/components/card", icon: Square },
    { title: "Grid", to: "/components/grid", icon: Grid3X3 },
    { title: "Tabs", to: "/components/tabs", icon: Layers },
  ]

  const compositeComponents = [
    { title: "Extended Cards", to: "/components/extended-cards", icon: CreditCard },
    { title: "Content Cards", to: "/components/content-cards", icon: FileText },
  ]

  const documentation = [
    { title: "Getting Started", to: "/docs/getting-started", icon: BookOpen },
    { title: "API Reference", to: "/docs/api-reference", icon: Code },
    { title: "Design Tokens", to: "/docs/design-tokens", icon: Palette },
    { title: "Examples", to: "/docs/examples", icon: Lightbulb },
  ]

  return (
    <div className="sparkui-sidebar">
      {/* Header */}
      <div style={{ padding: '20px', borderBottom: '1px solid var(--ig-border-soft)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <div style={{ 
              width: '32px', 
              height: '32px', 
              background: 'var(--ig-text-primary)', 
              borderRadius: 'var(--ig-border-radius-large)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <Palette style={{ width: '18px', height: '18px', color: 'var(--ig-background-page-clear)' }} />
            </div>
            <span style={{ 
              fontWeight: '700', 
              fontSize: '18px', 
              color: 'var(--ig-text-primary)'
            }}>SparkUI</span>
          </NavLink>
          
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="theme-toggle"
          >
            {theme === "light" ? (
              <Moon className="icon" />
            ) : (
              <Sun className="icon" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
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
      <div style={{ padding: '20px', borderTop: '1px solid var(--ig-border-soft)' }}>
        <div style={{ 
          fontSize: '12px', 
          color: 'var(--ig-text-soft)', 
          textAlign: 'center',
          lineHeight: '1.5'
        }}>
          <div>SparkUI Component Library</div>
          <div style={{ marginTop: '4px' }}>Built with ❤️ using Lovable</div>
        </div>
      </div>
    </div>
  )
}
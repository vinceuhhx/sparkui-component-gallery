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
      className={`sidebar-item ${isActive ? 'active' : ''}`}
      style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}
    >
      {Icon && <Icon className="icon" />}
      <span style={{ fontSize: '14px', fontWeight: isActive ? '600' : '500' }}>{title}</span>
    </NavLink>
  )
}

const SidebarGroup = ({ title, items, defaultOpen = false }: SidebarGroupProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
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
          color: 'rgba(255, 255, 255, 0.9)',
          background: 'rgba(255, 255, 255, 0.1)',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Package style={{ width: '16px', height: '16px' }} />
          {title}
        </span>
        <ChevronDown style={{ 
          width: '16px', 
          height: '16px', 
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease'
        }} />
      </button>
      
      {isOpen && (
        <div style={{ 
          marginLeft: '16px', 
          paddingLeft: '16px', 
          borderLeft: '2px solid rgba(103, 126, 234, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px'
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
    <div className="impressive-sidebar" style={{ width: '280px', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ padding: '20px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <div className="float-animation glow-primary" style={{ 
              width: '40px', 
              height: '40px', 
              background: 'linear-gradient(135deg, #667eea, #764ba2)', 
              borderRadius: '12px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <Palette style={{ width: '20px', height: '20px', color: 'white' }} />
            </div>
            <span className="text-glow" style={{ 
              fontWeight: '800', 
              fontSize: '20px', 
              color: 'white',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>SparkUI</span>
          </NavLink>
          
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="theme-toggle"
          >
            {theme === "light" ? (
              <Moon style={{ width: '20px', height: '20px' }} />
            ) : (
              <Sun style={{ width: '20px', height: '20px' }} />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px', overflowY: 'auto' }}>
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
      <div style={{ padding: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div style={{ 
          fontSize: '12px', 
          color: 'rgba(255, 255, 255, 0.7)', 
          textAlign: 'center',
          lineHeight: '1.5'
        }}>
          <div className="sparkle-effect">SparkUI Component Library</div>
          <div style={{ marginTop: '4px' }}>Built with ❤️ using Lovable</div>
        </div>
      </div>
    </div>
  )
}
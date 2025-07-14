import { ComponentLibrarySidebar } from "./ComponentLibrarySidebar"

interface ComponentLayoutProps {
  children: React.ReactNode
}

export const ComponentLayout = ({ children }: ComponentLayoutProps) => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <ComponentLibrarySidebar />
      <main className="impressive-content" style={{ flex: 1, position: 'relative' }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      </main>
    </div>
  )
}
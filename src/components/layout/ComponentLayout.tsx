
import { ComponentLibrarySidebar } from "./ComponentLibrarySidebar"

interface ComponentLayoutProps {
  children: React.ReactNode
}

export const ComponentLayout = ({ children }: ComponentLayoutProps) => {
  return (
    <div className="sparkui-layout">
      <ComponentLibrarySidebar />
      <main className="sparkui-content">
        {children}
      </main>
    </div>
  )
}

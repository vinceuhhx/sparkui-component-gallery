import { ComponentLibrarySidebar } from "./ComponentLibrarySidebar"

interface ComponentLayoutProps {
  children: React.ReactNode
}

export const ComponentLayout = ({ children }: ComponentLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-background">
      <ComponentLibrarySidebar />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
import { useState, useRef, useEffect } from "react"
import { Code } from "lucide-react"

interface ComponentDemoProps {
  title: string
  description: string
  children?: React.ReactNode
  code?: string
  hidePreview?: boolean
}

export const ComponentDemo = ({ title, description, children, code, hidePreview = false }: ComponentDemoProps) => {
  const [showCode, setShowCode] = useState(false)
  const codeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (showCode && codeRef.current) {
      // Smooth scroll to code section with offset
      const rect = codeRef.current.getBoundingClientRect()
      const offset = window.pageYOffset + rect.top - 80 // 80px offset from top
      
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      })
    }
  }, [showCode])

  return (
    <div className="w-full max-w-none">
      <div className="grid grid-cols-1 gap-6 lg:gap-8">
        {/* Header Section */}
        <div className="space-y-3">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
            {title}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">
            {description}
          </p>
        </div>

        {/* Interactive Demo Section */}
        {!hidePreview && children && (
          <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
            <div className="border-b border-border bg-muted/50 px-4 md:px-6 py-3">
              <h3 className="text-sm font-semibold text-foreground">
                Interactive Demo
              </h3>
            </div>
            <div className="p-4 md:p-6 lg:p-8">
              <div className="w-full">
                {children}
              </div>
            </div>
          </div>
        )}

        {/* Code Section */}
        {code && (
          <div className="space-y-4">
            <button
              onClick={() => setShowCode(!showCode)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground 
                         rounded-md text-sm font-medium transition-all duration-200 
                         hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <Code className="w-4 h-4" />
              {showCode ? 'Hide Code' : 'Show Code'}
            </button>

            <div 
              ref={codeRef}
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                showCode 
                  ? 'max-h-screen opacity-100 transform translate-y-0' 
                  : 'max-h-0 opacity-0 transform -translate-y-2'
              }`}
            >
              <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
                <div className="border-b border-border bg-muted/50 px-4 md:px-6 py-3">
                  <h3 className="text-sm font-semibold text-foreground">
                    Code Example
                  </h3>
                </div>
                <div className="relative">
                  <pre className="p-4 md:p-6 bg-muted/20 text-sm overflow-x-auto">
                    <code className="text-foreground font-mono">
                      {code}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
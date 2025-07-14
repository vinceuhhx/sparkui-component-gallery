import { useState } from "react"
import { Code } from "lucide-react"

interface ComponentDemoProps {
  title: string
  description: string
  children: React.ReactNode
  code?: string
}

export const ComponentDemo = ({ title, description, children, code }: ComponentDemoProps) => {
  const [showCode, setShowCode] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h1 className="text-glow" style={{ 
          fontSize: '2.5rem', 
          fontWeight: '800', 
          color: 'white',
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '8px'
        }}>{title}</h1>
        <p style={{ 
          fontSize: '1.125rem', 
          color: 'rgba(255, 255, 255, 0.8)',
          lineHeight: '1.6'
        }}>{description}</p>
      </div>

      <div className="demo-card">
        <h3 style={{ 
          fontSize: '1.25rem', 
          fontWeight: '600', 
          color: '#1f2937',
          marginBottom: '16px'
        }}>Interactive Demo</h3>
        <div style={{ 
          padding: '24px', 
          background: 'rgba(103, 126, 234, 0.05)', 
          borderRadius: '12px',
          border: '1px solid rgba(103, 126, 234, 0.2)'
        }}>
          {children}
        </div>
      </div>

      {code && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <button
            onClick={() => setShowCode(!showCode)}
            className="glow-primary"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              borderRadius: '12px',
              border: 'none',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              alignSelf: 'flex-start'
            }}
          >
            <Code style={{ width: '16px', height: '16px' }} />
            {showCode ? 'Hide Code' : 'Show Code'}
          </button>

          {showCode && (
            <div className="demo-card">
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: '600', 
                color: '#1f2937',
                marginBottom: '16px'
              }}>Code Example</h3>
              <pre style={{ 
                background: 'rgba(0, 0, 0, 0.8)',
                padding: '20px',
                borderRadius: '12px',
                overflowX: 'auto',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                margin: 0
              }}>
                <code style={{ 
                  fontSize: '14px',
                  color: '#e2e8f0',
                  fontFamily: 'Monaco, Consolas, "Courier New", monospace'
                }}>{code}</code>
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
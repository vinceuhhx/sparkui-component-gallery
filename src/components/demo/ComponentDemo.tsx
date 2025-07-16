import { useState } from "react"
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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h1 style={{ 
          font: 'var(--ig-typography-heading-large-bold)', 
          color: 'var(--ig-text-primary)',
          marginBottom: '8px'
        }}>{title}</h1>
        <p style={{ 
          font: 'var(--ig-typography-body-large-regular)', 
          color: 'var(--ig-text-medium)',
          lineHeight: '1.6'
        }}>{description}</p>
      </div>

      {!hidePreview && children && (
        <div className="demo-card">
          <h3 style={{ 
            font: 'var(--ig-typography-heading-xsmall-bold)', 
            color: 'var(--ig-text-bold)',
            marginBottom: '16px'
          }}>Interactive Demo</h3>
          <div style={{ 
            padding: '24px', 
            borderRadius: 'var(--ig-border-radius-large)',
          }}>
            {children}
          </div>
        </div>
      )}

      {code && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <button
            onClick={() => setShowCode(!showCode)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              background: 'var(--ig-background-primary-bold)',
              color: 'var(--ig-text-on-strong-bold)',
              borderRadius: 'var(--ig-border-radius-large)',
              border: 'none',
              font: 'var(--ig-typography-body-medium-medium)',
              cursor: 'pointer',
              transition: 'all var(--ig-transition-duration) ease',
              alignSelf: 'flex-start'
            }}
          >
            <Code style={{ width: '16px', height: '16px' }} />
            {showCode ? 'Hide Code' : 'Show Code'}
          </button>

          {showCode && (
            <div className="demo-card">
              <h3 style={{ 
                font: 'var(--ig-typography-heading-xsmall-bold)', 
                color: 'var(--ig-text-bold)',
                marginBottom: '16px'
              }}>Code Example</h3>
              <pre style={{ 
                background: 'var(--ig-background-strong)',
                padding: '20px',
                borderRadius: 'var(--ig-border-radius-large)',
                overflowX: 'auto',
                border: '1px solid var(--ig-border-medium)',
                margin: 0
              }}>
                <code style={{ 
                  font: 'var(--ig-typography-body-small-regular)',
                  color: 'var(--ig-text-on-strong-medium)',
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
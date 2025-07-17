import { Typography } from "@/components/sparkui"

const DesignTokens = () => {
  const colorTokens = [
    { name: "--ig-text-bold", value: "#1d2830", description: "Primary text color for headings and emphasis" },
    { name: "--ig-text-medium", value: "#54636d", description: "Secondary text color for body content" },
    { name: "--ig-text-soft", value: "#6f7c86", description: "Tertiary text color for subtle content" },
    { name: "--ig-text-primary", value: "#c42600", description: "Primary brand color for CTAs and links" },
    { name: "--ig-text-secondary", value: "#1272ab", description: "Secondary brand color" },
    { name: "--ig-text-tertiary", value: "#880a5d", description: "Tertiary brand color" },
    { name: "--ig-text-success", value: "#007900", description: "Success state color" },
    { name: "--ig-text-warning", value: "#835600", description: "Warning state color" },
    { name: "--ig-text-danger", value: "#ba0032", description: "Error/danger state color" },
  ]

  const backgroundTokens = [
    { name: "--ig-background-page-clear", value: "#fff", description: "Main page background" },
    { name: "--ig-background-surface-on-clear-subtle", value: "#f6f9fb", description: "Subtle surface background" },
    { name: "--ig-background-surface-on-clear-soft", value: "#e9f0f5", description: "Soft surface background" },
  ]

  const borderTokens = [
    { name: "--ig-border-soft", value: "#e9f0f5", description: "Soft border color" },
    { name: "--ig-border-medium", value: "#b7c3cc", description: "Medium border color" },
  ]

  const typographyTokens = [
    { name: "--ig-typography-heading-xxlarge-bold", description: "Extra extra large heading (4rem/4.5rem)" },
    { name: "--ig-typography-heading-xlarge-bold", description: "Extra large heading (3.5rem/4rem)" },
    { name: "--ig-typography-heading-large-bold", description: "Large heading (3rem/3.25rem)" },
    { name: "--ig-typography-heading-medium-bold", description: "Medium heading (2.5rem/2.75rem)" },
    { name: "--ig-typography-heading-small-bold", description: "Small heading (2rem/2.25rem)" },
    { name: "--ig-typography-heading-xsmall-bold", description: "Extra small heading (1.5rem/2rem)" },
    { name: "--ig-typography-heading-xxsmall-bold", description: "Extra extra small heading (1.125rem/1.5rem)" },
  ]

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <Typography level={2} weight="bold" color="bold" className="mb-6">
        Design Tokens
      </Typography>
      
      <Typography level={5} weight="regular" color="medium" className="mb-8">
        SparkUI uses the IG CDN design token system for consistent theming across components.
      </Typography>

      <div className="space-y-12">
        <section>
          <Typography level={3} weight="bold" color="bold" className="mb-6">
            Text Color Tokens
          </Typography>
          
          <div className="grid gap-4">
            {colorTokens.map((token) => (
              <div key={token.name} className="flex items-center p-4 border rounded-lg" style={{ backgroundColor: 'var(--ig-background-surface-on-clear-subtle)' }}>
                <div 
                  className="w-16 h-16 rounded-lg border flex items-center justify-center mr-4"
                  style={{ 
                    backgroundColor: token.value,
                    border: '1px solid var(--ig-border-medium)'
                  }}
                >
                  <span style={{ color: token.value === '#fff' ? '#000' : '#fff', fontSize: '12px', fontWeight: 'bold' }}>Aa</span>
                </div>
                <div className="flex-1">
                  <div className="font-mono text-sm font-medium" style={{ color: 'var(--ig-text-bold)' }}>{token.name}</div>
                  <div className="text-sm" style={{ color: 'var(--ig-text-medium)' }}>{token.description}</div>
                  <div className="font-mono text-xs" style={{ color: 'var(--ig-text-soft)' }}>{token.value}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <Typography level={3} weight="bold" color="bold" className="mb-6">
            Background Tokens
          </Typography>
          
          <div className="grid gap-4">
            {backgroundTokens.map((token) => (
              <div key={token.name} className="flex items-center p-4 border rounded-lg" style={{ backgroundColor: 'var(--ig-background-surface-on-clear-subtle)' }}>
                <div 
                  className="w-16 h-16 rounded-lg border mr-4"
                  style={{ 
                    backgroundColor: token.value,
                    border: '1px solid var(--ig-border-medium)'
                  }}
                />
                <div className="flex-1">
                  <div className="font-mono text-sm font-medium" style={{ color: 'var(--ig-text-bold)' }}>{token.name}</div>
                  <div className="text-sm" style={{ color: 'var(--ig-text-medium)' }}>{token.description}</div>
                  <div className="font-mono text-xs" style={{ color: 'var(--ig-text-soft)' }}>{token.value}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <Typography level={3} weight="bold" color="bold" className="mb-6">
            Border Tokens
          </Typography>
          
          <div className="grid gap-4">
            {borderTokens.map((token) => (
              <div key={token.name} className="flex items-center p-4 border rounded-lg" style={{ backgroundColor: 'var(--ig-background-surface-on-clear-subtle)' }}>
                <div 
                  className="w-16 h-16 rounded-lg flex items-center justify-center mr-4"
                  style={{ 
                    backgroundColor: 'var(--ig-background-page-clear)',
                    border: `2px solid ${token.value}`
                  }}
                />
                <div className="flex-1">
                  <div className="font-mono text-sm font-medium" style={{ color: 'var(--ig-text-bold)' }}>{token.name}</div>
                  <div className="text-sm" style={{ color: 'var(--ig-text-medium)' }}>{token.description}</div>
                  <div className="font-mono text-xs" style={{ color: 'var(--ig-text-soft)' }}>{token.value}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <Typography level={3} weight="bold" color="bold" className="mb-6">
            Typography Tokens
          </Typography>
          
          <div className="grid gap-4">
            {typographyTokens.map((token) => (
              <div key={token.name} className="p-4 border rounded-lg" style={{ backgroundColor: 'var(--ig-background-surface-on-clear-subtle)' }}>
                <div className="font-mono text-sm font-medium mb-2" style={{ color: 'var(--ig-text-bold)' }}>{token.name}</div>
                <div className="text-sm mb-3" style={{ color: 'var(--ig-text-medium)' }}>{token.description}</div>
                <div 
                  style={{ 
                    font: `var(${token.name})`,
                    color: 'var(--ig-text-bold)'
                  }}
                >
                  Example heading text
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <Typography level={3} weight="bold" color="bold" className="mb-6">
            Using Design Tokens
          </Typography>
          
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--ig-background-surface-on-clear-soft)' }}>
            <pre className="text-sm overflow-x-auto" style={{ color: 'var(--ig-text-bold)' }}>
              <code>{`/* In your CSS */
.custom-component {
  background: var(--ig-background-page-clear);
  color: var(--ig-text-bold);
  font: var(--ig-typography-heading-medium-bold);
  border: 1px solid var(--ig-border-soft);
}

/* In React Components */
<Typography level={2} weight="bold" color="primary">
  Heading Text
</Typography>

/* Available Typography Levels */
level={1} // xxlarge (4rem)
level={2} // xlarge (3.5rem)  
level={3} // large (3rem)
level={4} // medium (2.5rem)
level={5} // small (2rem)
level={6} // xsmall (1.5rem)`}</code>
            </pre>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DesignTokens
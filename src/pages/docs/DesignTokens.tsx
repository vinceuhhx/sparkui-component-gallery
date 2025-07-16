import { Typography } from "@/components/sparkui"

const DesignTokens = () => {
  const colorTokens = [
    { name: "--background", value: "0 0% 100%", description: "Main background color" },
    { name: "--foreground", value: "222.2 84% 4.9%", description: "Main text color" },
    { name: "--primary", value: "222.2 47.4% 11.2%", description: "Primary brand color" },
    { name: "--secondary", value: "210 40% 96%", description: "Secondary color" },
    { name: "--muted", value: "210 40% 96%", description: "Muted backgrounds" },
    { name: "--accent", value: "210 40% 96%", description: "Accent color" },
  ]

  const typographyTokens = [
    { name: "--ig-typography-heading-large-bold", description: "Large heading, bold weight" },
    { name: "--ig-typography-heading-medium-bold", description: "Medium heading, bold weight" },
    { name: "--ig-typography-body-large-regular", description: "Large body text, regular weight" },
    { name: "--ig-typography-body-medium-regular", description: "Medium body text, regular weight" },
  ]

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <Typography level={1} weight="bold" className="mb-6">
        Design Tokens
      </Typography>
      
      <Typography className="mb-8 text-muted-foreground">
        SparkUI uses a comprehensive design token system for consistent theming across components.
      </Typography>

      <div className="space-y-12">
        <section>
          <Typography level={2} weight="bold" className="mb-6">
            Color Tokens
          </Typography>
          
          <div className="grid gap-4">
            {colorTokens.map((token) => (
              <div key={token.name} className="flex items-center p-4 border rounded-lg">
                <div 
                  className="w-12 h-12 rounded-lg border mr-4"
                  style={{ backgroundColor: `hsl(${token.value})` }}
                />
                <div className="flex-1">
                  <div className="font-mono text-sm font-medium">{token.name}</div>
                  <div className="text-sm text-muted-foreground">{token.description}</div>
                  <div className="font-mono text-xs text-muted-foreground">hsl({token.value})</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <Typography level={2} weight="bold" className="mb-6">
            Typography Tokens
          </Typography>
          
          <div className="grid gap-4">
            {typographyTokens.map((token) => (
              <div key={token.name} className="p-4 border rounded-lg">
                <div className="font-mono text-sm font-medium mb-2">{token.name}</div>
                <div className="text-sm text-muted-foreground">{token.description}</div>
                <div 
                  className="mt-3 text-foreground"
                  style={{ font: `var(${token.name})` }}
                >
                  Example text using this token
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <Typography level={2} weight="bold" className="mb-6">
            Using Design Tokens
          </Typography>
          
          <div className="bg-muted p-6 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code>{`/* In your CSS */
.custom-component {
  background: hsl(var(--background));
  color: hsl(var(--foreground));
  font: var(--ig-typography-body-medium-regular);
}

/* In Tailwind classes */
<div className="bg-background text-foreground">
  Content
</div>`}</code>
            </pre>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DesignTokens
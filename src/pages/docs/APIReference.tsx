import { Typography } from "@/components/sparkui"

const APIReference = () => {
  const components = [
    {
      name: "Button",
      props: [
        { name: "variant", type: "'primary' | 'secondary' | 'outline' | 'ghost'", default: "'primary'" },
        { name: "size", type: "'small' | 'medium' | 'large'", default: "'medium'" },
        { name: "loading", type: "boolean", default: "false" },
        { name: "disabled", type: "boolean", default: "false" },
      ]
    },
    {
      name: "Typography",
      props: [
        { name: "level", type: "1 | 2 | 3 | 4 | 5 | 6", default: "1" },
        { name: "weight", type: "'regular' | 'medium' | 'bold'", default: "'regular'" },
        { name: "color", type: "'primary' | 'secondary' | 'muted' | 'accent'", default: "'primary'" },
      ]
    },
    {
      name: "Card",
      props: [
        { name: "variant", type: "'default' | 'outlined' | 'elevated'", default: "'default'" },
        { name: "padding", type: "'none' | 'small' | 'medium' | 'large'", default: "'medium'" },
      ]
    }
  ]

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <Typography level={2} weight="bold" color="bold" className="mb-6">
        API Reference
      </Typography>
      
      <Typography level={5} weight="regular" color="medium" className="mb-8">
        Complete reference for all SparkUI components and their properties.
      </Typography>

      <div className="space-y-12">
        {components.map((component) => (
          <div key={component.name} className="rounded-lg overflow-hidden" style={{ backgroundColor: 'var(--ig-background-surface-on-clear-subtle)', border: '1px solid var(--ig-border-soft)' }}>
            <div className="p-6" style={{ backgroundColor: 'var(--ig-background-page-clear)', borderBottom: '1px solid var(--ig-border-soft)' }}>
              <Typography level={3} weight="bold" color="bold">
                {component.name}
              </Typography>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--ig-background-surface-on-clear-soft)' }}>
                    <th 
                      className="text-left py-4 px-6" 
                      style={{ 
                        color: 'var(--ig-text-bold)',
                        font: 'var(--ig-typography-heading-xxsmall-bold)',
                        borderBottom: '1px solid var(--ig-border-medium)'
                      }}
                    >
                      Property
                    </th>
                    <th 
                      className="text-left py-4 px-6" 
                      style={{ 
                        color: 'var(--ig-text-bold)',
                        font: 'var(--ig-typography-heading-xxsmall-bold)',
                        borderBottom: '1px solid var(--ig-border-medium)'
                      }}
                    >
                      Type
                    </th>
                    <th 
                      className="text-left py-4 px-6" 
                      style={{ 
                        color: 'var(--ig-text-bold)',
                        font: 'var(--ig-typography-heading-xxsmall-bold)',
                        borderBottom: '1px solid var(--ig-border-medium)'
                      }}
                    >
                      Default Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {component.props.map((prop, index) => (
                    <tr 
                      key={prop.name} 
                      style={{ 
                        backgroundColor: index % 2 === 0 ? 'var(--ig-background-page-clear)' : 'var(--ig-background-surface-on-clear-subtle)',
                        borderBottom: '1px solid var(--ig-border-soft)'
                      }}
                    >
                      <td className="py-4 px-6">
                        <code 
                          className="px-3 py-1 rounded text-sm"
                          style={{ 
                            backgroundColor: 'var(--ig-background-surface-on-clear-soft)',
                            color: 'var(--ig-text-primary)',
                            border: '1px solid var(--ig-border-soft)',
                            fontFamily: 'monospace'
                          }}
                        >
                          {prop.name}
                        </code>
                      </td>
                      <td className="py-4 px-6">
                        <code 
                          className="px-3 py-1 rounded text-sm"
                          style={{ 
                            backgroundColor: 'var(--ig-background-surface-on-clear-soft)',
                            color: 'var(--ig-text-secondary)',
                            border: '1px solid var(--ig-border-soft)',
                            fontFamily: 'monospace'
                          }}
                        >
                          {prop.type}
                        </code>
                      </td>
                      <td className="py-4 px-6">
                        <code 
                          className="px-3 py-1 rounded text-sm"
                          style={{ 
                            backgroundColor: 'var(--ig-background-surface-on-clear-soft)',
                            color: 'var(--ig-text-tertiary)',
                            border: '1px solid var(--ig-border-soft)',
                            fontFamily: 'monospace'
                          }}
                        >
                          {prop.default}
                        </code>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default APIReference
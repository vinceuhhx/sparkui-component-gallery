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
      <Typography level={1} weight="bold" className="mb-6">
        API Reference
      </Typography>
      
      <Typography className="mb-8 text-muted-foreground">
        Complete reference for all SparkUI components and their properties.
      </Typography>

      <div className="space-y-12">
        {components.map((component) => (
          <div key={component.name} className="border rounded-lg p-6">
            <Typography level={2} weight="bold" className="mb-4">
              {component.name}
            </Typography>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Prop</th>
                    <th className="text-left py-3 px-4 font-medium">Type</th>
                    <th className="text-left py-3 px-4 font-medium">Default</th>
                  </tr>
                </thead>
                <tbody>
                  {component.props.map((prop) => (
                    <tr key={prop.name} className="border-b">
                      <td className="py-3 px-4">
                        <code className="bg-muted px-2 py-1 rounded text-sm">
                          {prop.name}
                        </code>
                      </td>
                      <td className="py-3 px-4">
                        <code className="bg-muted px-2 py-1 rounded text-sm">
                          {prop.type}
                        </code>
                      </td>
                      <td className="py-3 px-4">
                        <code className="bg-muted px-2 py-1 rounded text-sm">
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
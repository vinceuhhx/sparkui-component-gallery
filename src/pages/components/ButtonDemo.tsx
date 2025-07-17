import { ComponentDemo } from "@/components/demo/ComponentDemo"
import { Button, Typography } from "@/components/sparkui"
import { Download, Heart, ArrowRight } from "lucide-react"

const ButtonDemo = () => {
  const codeExample = `import { Button } from "@/components/sparkui"

// Basic usage
<Button variant="filled" color="primary">
  Click me
</Button>

// With different variants
<Button variant="outlined" color="danger">
  Delete
</Button>

// With loading state
<Button loading loadingText="Saving...">
  Save
</Button>

// With icon
<Button variant="soft" color="success">
  <Heart className="w-4 h-4 mr-2" />
  Like
</Button>`

  return (
    <div className="p-8">
      <ComponentDemo
        title="Button"
        description="A versatile button component with multiple variants, colors, and sizes. Supports loading states and custom icons."
        code={codeExample}
      >
        <div className="space-y-8">
          {/* Variants Section */}
          <div>
            <Typography level={4} weight="bold" color="bold" className="mb-4">Button Variants</Typography>
            <div className="space-y-4">
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Button variant="filled" color="primary">Filled Primary</Button>
                <Button variant="outlined" color="primary">Outlined Primary</Button>
                <Button variant="plain" color="primary">Plain Primary</Button>
                <Button variant="soft" color="primary">Soft Primary</Button>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Button variant="filled" color="success">Filled Secondary</Button>
                <Button variant="outlined" color="success">Outlined Secondary</Button>
                <Button variant="plain" color="success">Plain Secondary</Button>
                <Button variant="soft" color="success">Soft Secondary</Button>
              </div>
            </div>
          </div>

          {/* Colors Section */}
          <div>
            <Typography level={4} weight="bold" color="bold" className="mb-4">Button Colors</Typography>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Button color="primary">Primary</Button>
              <Button color="success">Success</Button>
              <Button color="danger">Danger</Button>
            </div>
          </div>

          {/* Sizes Section */}
          <div>
            <Typography level={4} weight="bold" color="bold" className="mb-4">Button Sizes</Typography>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          {/* States Section */}
          <div>
            <Typography level={4} weight="bold" color="bold" className="mb-4">Button States</Typography>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
              <Button loading>Loading</Button>
              <Button loading loadingText="Saving...">
                Custom Loading
              </Button>
            </div>
          </div>

          {/* With Icons Section */}
          <div>
            <Typography level={4} weight="bold" color="bold" className="mb-4">With Icons</Typography>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Button variant="filled" color="primary">
                <Download style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                Download
              </Button>
              <Button variant="outlined" color="success">
                <Heart style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                Favorite
              </Button>
              <Button variant="soft" color="primary">
                Continue
                <ArrowRight style={{ width: '16px', height: '16px', marginLeft: '8px' }} />
              </Button>
            </div>
          </div>
        </div>
      </ComponentDemo>
    </div>
  )
}

export default ButtonDemo
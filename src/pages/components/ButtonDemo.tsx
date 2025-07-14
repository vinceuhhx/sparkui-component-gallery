import { ComponentDemo } from "@/components/demo/ComponentDemo"
import { Button } from "@/components/sparkui"
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
            <h3 className="text-lg font-semibold mb-4 text-foreground">Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="filled" color="primary">Filled</Button>
              <Button variant="outlined" color="primary">Outlined</Button>
              <Button variant="soft" color="primary">Soft</Button>
              <Button variant="plain" color="primary">Plain</Button>
            </div>
          </div>

          {/* Colors Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Colors</h3>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-4">
                <span className="text-sm text-muted-foreground w-20">Primary:</span>
                <Button variant="filled" color="primary">Filled</Button>
                <Button variant="outlined" color="primary">Outlined</Button>
                <Button variant="soft" color="primary">Soft</Button>
                <Button variant="plain" color="primary">Plain</Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <span className="text-sm text-muted-foreground w-20">Danger:</span>
                <Button variant="filled" color="danger">Filled</Button>
                <Button variant="outlined" color="danger">Outlined</Button>
                <Button variant="soft" color="danger">Soft</Button>
                <Button variant="plain" color="danger">Plain</Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <span className="text-sm text-muted-foreground w-20">Success:</span>
                <Button variant="filled" color="success">Filled</Button>
                <Button variant="outlined" color="success">Outlined</Button>
                <Button variant="soft" color="success">Soft</Button>
                <Button variant="plain" color="success">Plain</Button>
              </div>
            </div>
          </div>

          {/* Sizes Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="filled" color="primary" size="sm">Small</Button>
              <Button variant="filled" color="primary" size="md">Medium</Button>
              <Button variant="filled" color="primary" size="lg">Large</Button>
              <Button variant="filled" color="primary" size="icon">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* States Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">States</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="filled" color="primary">Normal</Button>
              <Button variant="filled" color="primary" disabled>Disabled</Button>
              <Button variant="filled" color="primary" loading>Loading</Button>
              <Button variant="filled" color="primary" loading loadingText="Saving...">
                Custom Loading
              </Button>
            </div>
          </div>

          {/* With Icons Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">With Icons</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="filled" color="primary">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
              <Button variant="outlined" color="success">
                <Heart className="w-4 h-4 mr-2" />
                Favorite
              </Button>
              <Button variant="soft" color="primary">
                Continue
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="filled" color="danger" size="icon">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </ComponentDemo>
    </div>
  )
}

export default ButtonDemo
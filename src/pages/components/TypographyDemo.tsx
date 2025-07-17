import { ComponentDemo } from "@/components/demo/ComponentDemo"
import { Typography } from "@/components/sparkui"

const TypographyDemo = () => {
  const codeExample = `import { Typography } from "@/components/sparkui"

// Different levels
<Typography level={1} weight="bold">
  Heading 1
</Typography>

<Typography level={3} color="primary">
  Primary Heading
</Typography>

// With custom styling
<Typography 
  level={2} 
  weight="medium" 
  color="success" 
  align="center"
>
  Centered Success Text
</Typography>`

  return (
    <div className="p-8">
      <ComponentDemo
        title="Typography"
        description="A flexible typography component for headings with multiple levels, weights, colors, and alignment options."
        code={codeExample}
      >
        <div className="space-y-8">
          {/* Levels Section */}
          <div>
            <Typography level={4} weight="bold" color="bold" className="mb-4">Heading Levels</Typography>
            <div className="space-y-4">
              <Typography level={1} weight="bold">Heading 1 - XXLarge Bold</Typography>
              <Typography level={2} weight="bold">Heading 2 - XLarge Bold</Typography>
              <Typography level={3} weight="bold">Heading 3 - Large Bold</Typography>
              <Typography level={4} weight="bold">Heading 4 - Medium Bold</Typography>
              <Typography level={5} weight="bold">Heading 5 - Small Bold</Typography>
              <Typography level={6} weight="bold">Heading 6 - XSmall Bold</Typography>
            </div>
          </div>

          {/* Weights Section */}
          <div>
            <Typography level={4} weight="bold" color="bold" className="mb-4">Font Weights</Typography>
            <div className="space-y-2">
              <Typography level={3} weight="bold">Bold Weight</Typography>
              <Typography level={3} weight="medium">Medium Weight</Typography>
              <Typography level={3} weight="regular">Regular Weight</Typography>
            </div>
          </div>

          {/* Colors Section */}
          <div>
            <Typography level={4} weight="bold" color="bold" className="mb-4">Colors</Typography>
            <div className="space-y-2">
              <Typography level={4} color="default">Default Color</Typography>
              <Typography level={4} color="bold">Bold Color</Typography>
              <Typography level={4} color="medium">Medium Color</Typography>
              <Typography level={4} color="soft">Soft Color</Typography>
              <Typography level={4} color="primary">Primary Color</Typography>
              <Typography level={4} color="secondary">Secondary Color</Typography>
              <Typography level={4} color="tertiary">Tertiary Color</Typography>
              <Typography level={4} color="success">Success Color</Typography>
              <Typography level={4} color="warning">Warning Color</Typography>
              <Typography level={4} color="danger">Danger Color</Typography>
            </div>
          </div>

          {/* Alignment Section */}
          <div>
            <Typography level={4} weight="bold" color="bold" className="mb-4">Text Alignment</Typography>
            <div className="space-y-4 border rounded-lg p-4">
              <Typography level={4} align="left">Left Aligned Text</Typography>
              <Typography level={4} align="center">Center Aligned Text</Typography>
              <Typography level={4} align="right">Right Aligned Text</Typography>
            </div>
          </div>

          {/* Truncate Section */}
          <div>
            <Typography level={4} weight="bold" color="bold" className="mb-4">Text Truncation</Typography>
            <div className="max-w-xs border rounded-lg p-4">
              <Typography level={4} truncate>
                This is a very long heading that will be truncated when it exceeds the container width
              </Typography>
            </div>
          </div>

          {/* Combined Examples */}
          <div>
            <Typography level={4} weight="bold" color="bold" className="mb-4">Combined Examples</Typography>
            <div className="space-y-4">
              <Typography level={1} weight="bold" color="primary" align="center">
                Main Page Title
              </Typography>
              <Typography level={3} weight="medium" color="success">
                Success Message Header
              </Typography>
              <Typography level={5} weight="regular" color="soft" align="right">
                Subtle Right-Aligned Subheading
              </Typography>
            </div>
          </div>
        </div>
      </ComponentDemo>
    </div>
  )
}

export default TypographyDemo
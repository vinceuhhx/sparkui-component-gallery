import { ComponentDemo } from "@/components/demo/ComponentDemo"
import { Body } from "@/components/sparkui"

const BodyDemo = () => {
  const codeExample = `import { Body } from "@/components/sparkui"

// Different sizes
<Body size="large" weight="medium">
  Large body text with medium weight
</Body>

<Body size="small" color="soft">
  Small, subtle body text
</Body>

// With line clamping
<Body lines={2}>
  This text will be clamped to 2 lines and show ellipsis...
</Body>

// As different HTML elements
<Body as="span" color="primary">
  Inline primary text
</Body>`

  return (
    <div className="p-8">
      <ComponentDemo
        title="Body"
        description="A flexible body text component with multiple sizes, weights, colors, and formatting options. Perfect for paragraphs, descriptions, and content text."
        code={codeExample}
      >
        <div className="space-y-8">
          {/* Sizes Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Text Sizes</h3>
            <div className="space-y-3">
              <Body size="large">Large body text - perfect for introductory paragraphs and important content</Body>
              <Body size="medium">Medium body text - the default size for most content and descriptions</Body>
              <Body size="small">Small body text - ideal for captions, footnotes, and secondary information</Body>
            </div>
          </div>

          {/* Weights Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Font Weights</h3>
            <div className="space-y-2">
              <Body weight="bold">Bold body text - for emphasis and important information</Body>
              <Body weight="medium">Medium body text - for subtle emphasis</Body>
              <Body weight="regular">Regular body text - for standard content</Body>
            </div>
          </div>

          {/* Colors Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Colors</h3>
            <div className="space-y-2">
              <Body color="default">Default color text</Body>
              <Body color="bold">Bold color text</Body>
              <Body color="medium">Medium color text</Body>
              <Body color="soft">Soft color text</Body>
              <Body color="primary">Primary color text</Body>
              <Body color="secondary">Secondary color text</Body>
              <Body color="tertiary">Tertiary color text</Body>
              <Body color="success">Success color text</Body>
              <Body color="warning">Warning color text</Body>
              <Body color="danger">Danger color text</Body>
            </div>
          </div>

          {/* Alignment Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Text Alignment</h3>
            <div className="space-y-4 border border-border rounded-lg p-4">
              <Body align="left">This text is aligned to the left side of the container</Body>
              <Body align="center">This text is centered within the container</Body>
              <Body align="right">This text is aligned to the right side of the container</Body>
              <Body align="justify">This text is justified, which means it spreads across the full width of the container with equal spacing between words to create clean edges on both sides.</Body>
            </div>
          </div>

          {/* Line Clamping Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Line Clamping</h3>
            <div className="space-y-4 max-w-md">
              <Body lines={1}>This is a very long text that will be clamped to exactly one line and show ellipsis when it overflows the container width</Body>
              <Body lines={2}>This is a longer text that will be clamped to exactly two lines. You can see how it wraps to the second line and then gets cut off with ellipsis if the content continues beyond that point.</Body>
              <Body lines={3}>This is an even longer piece of text that demonstrates three-line clamping. It will wrap to fill three complete lines and then be truncated with ellipsis if there's additional content that would extend beyond the third line. This is useful for preview text in cards or lists.</Body>
            </div>
          </div>

          {/* Truncation Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Single Line Truncation</h3>
            <div className="max-w-xs border border-border rounded-lg p-4">
              <Body truncate>This is a very long single line of text that will be truncated with ellipsis when it exceeds the container width</Body>
            </div>
          </div>

          {/* HTML Elements Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Different HTML Elements</h3>
            <div className="space-y-2">
              <Body as="p">Paragraph element (default)</Body>
              <Body as="span" color="primary">Span element with primary color</Body>
              <Body as="div" weight="medium">Div element with medium weight</Body>
            </div>
          </div>

          {/* Combined Examples */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Combined Examples</h3>
            <div className="space-y-4">
              <Body size="large" weight="medium" color="primary">
                This is a large, medium-weight primary colored introduction paragraph that could be used to introduce a section or article.
              </Body>
              <Body size="medium" align="justify">
                This is a standard paragraph with justified alignment. It demonstrates how regular body text might appear in a blog post or article, with text that flows naturally and maintains consistent margins on both sides.
              </Body>
              <Body size="small" color="soft" align="right">
                Small, subtle text aligned to the right - perfect for timestamps or attribution.
              </Body>
            </div>
          </div>
        </div>
      </ComponentDemo>
    </div>
  )
}

export default BodyDemo
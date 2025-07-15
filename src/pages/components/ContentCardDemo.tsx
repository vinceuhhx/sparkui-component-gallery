
import { ComponentDemo } from "@/components/demo/ComponentDemo"
import { ContentBlockCard, ContentBlockCardContainer, Button } from "@/components/sparkui"

export default function ContentCardDemo() {
  return (
    <div className="p-8 space-y-8">
      <ComponentDemo
        title="Content Block Cards"
        description="Flexible card components for content blocks with customizable media and actions"
      >
        <ContentBlockCardContainer title="Featured Content">
          <ContentBlockCard
            title="Design Systems Workshop"
            description="Learn how to build and maintain scalable design systems that work across teams and products. This comprehensive workshop covers everything from design tokens to component libraries."
            mediaSlot={
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop" 
                alt="Workshop"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            }
            buttonSlot={
              <Button variant="outlined" color="primary">
                Learn More
              </Button>
            }
          />

          <ContentBlockCard
            title="Building React Components"
            description="Master the art of creating reusable React components with modern patterns and best practices. Perfect for developers looking to improve their component architecture skills."
            mediaSlot={
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop" 
                alt="React Development"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            }
            buttonSlot={
              <Button variant="filled" color="primary">
                Get Started
              </Button>
            }
          />

          <ContentBlockCard
            title="Advanced TypeScript Patterns"
            description="Dive deep into TypeScript's advanced features and learn how to create type-safe applications with confidence. Explore utility types, conditional types, and more."
            mediaSlot={
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop" 
                alt="TypeScript"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            }
            buttonSlot={
              <Button variant="soft" color="primary">
                View Course
              </Button>
            }
          />
        </ContentBlockCardContainer>

        {/* Example with custom content */}
        <div className="space-y-4">
          <h3 style={{ 
            font: 'var(--ig-typography-heading-xsmall-bold)', 
            color: 'var(--ig-text-bold)' 
          }}>
            Custom Content Example
          </h3>
          
          <ContentBlockCard
            mediaSlot={
              <div style={{ 
                width: '100%', 
                height: '100%', 
                background: 'var(--ig-background-surface-on-clear-soft)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 'var(--ig-border-radius)'
              }}>
                <span style={{ color: 'var(--ig-text-medium)' }}>Custom Media Slot</span>
              </div>
            }
          >
            <h3 className="content-block-card__title">Custom Content Card</h3>
            <p className="content-block-card__description">
              This card demonstrates how you can pass custom content as children. 
              You have full control over the content structure.
            </p>
            <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
              <Button size="sm" variant="filled">Primary Action</Button>
              <Button size="sm" variant="outlined">Secondary</Button>
            </div>
          </ContentBlockCard>
        </div>
      </ComponentDemo>
    </div>
  )
}

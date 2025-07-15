import { ComponentDemo } from "@/components/demo/ComponentDemo"
import { ContentBlockCard, ContentBlockCardContainer, Button } from "@/components/sparkui"
import { useState } from "react"
import { Heart, Star, ArrowRight, Play, Download } from "lucide-react"

export default function ContentCardDemo() {
  const [showCode, setShowCode] = useState<string | null>(null)

  const codeExamples = {
    basic: `<ContentBlockCard
  title="Basic Content Card"
  description="Simple card with title and description only"
/>`,

    withImage: `<ContentBlockCard
  title="Card with Image"
  description="Card featuring an image in the media slot"
  mediaSlot={
    <img 
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop"
      alt="Workshop"
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  }
/>`,

    withButton: `<ContentBlockCard
  title="Card with Button"
  description="Card with a custom button component"
  buttonSlot={
    <Button variant="filled" color="primary">
      Get Started
    </Button>
  }
/>`,

    withBuiltInButton: `<ContentBlockCard
  title="Card with Built-in Button"
  description="Using the built-in button with text and action"
  buttonText="Learn More"
  buttonHref="https://example.com"
/>`,

    greyBackground: `<ContentBlockCard
  title="Grey Background Card"
  description="Card with grey background variant"
  background="grey"
  buttonText="View Details"
/>`,

    customContent: `<ContentBlockCard
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
      <Play size={32} />
    </div>
  }
>
  <h3 className="content-block-card__title">Custom Content</h3>
  <p className="content-block-card__description">
    This card uses custom children instead of the title/description props.
  </p>
  <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
    <Button size="sm" variant="filled">Play</Button>
    <Button size="sm" variant="outlined">Download</Button>
  </div>
</ContentBlockCard>`,

    container: `<ContentBlockCardContainer title="Card Collection">
  <ContentBlockCard
    title="First Card"
    description="First card in the container"
  />
  <ContentBlockCard
    title="Second Card"
    description="Second card in the container"
  />
  <ContentBlockCard
    title="Third Card"
    description="Third card in the container"
  />
</ContentBlockCardContainer>`,

    complete: `<ContentBlockCard
  title="Complete Example"
  description="Card showcasing all available props and features"
  background="white"
  className="custom-card"
  imageClassName="custom-image"
  mediaSlot={
    <img 
      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop"
      alt="Complete example"
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  }
  buttonSlot={
    <Button variant="soft" color="primary">
      <Star size={16} style={{ marginRight: '8px' }} />
      Save to Favorites
    </Button>
  }
  onClick={() => console.log('Card clicked')}
/>`
  }

  return (
    <div className="p-8 space-y-8">
      <ComponentDemo
        title="Content Block Cards"
        description="Flexible card components for content blocks with customizable media and actions"
      >
        
        {/* Basic Card */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 style={{ 
              font: 'var(--ig-typography-heading-xsmall-bold)', 
              color: 'var(--ig-text-bold)' 
            }}>
              Basic Card
            </h3>
            <Button 
              variant="outlined" 
              size="sm"
              onClick={() => setShowCode(showCode === 'basic' ? null : 'basic')}
            >
              {showCode === 'basic' ? 'Hide Code' : 'Show Code'}
            </Button>
          </div>
          
          <ContentBlockCard
            title="Basic Content Card"
            description="A simple card with just title and description. Perfect for minimal content presentation."
          />
          
          {showCode === 'basic' && (
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{codeExamples.basic}</code>
            </pre>
          )}
        </div>

        {/* Card with Image */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 style={{ 
              font: 'var(--ig-typography-heading-xsmall-bold)', 
              color: 'var(--ig-text-bold)' 
            }}>
              Card with Image
            </h3>
            <Button 
              variant="outlined" 
              size="sm"
              onClick={() => setShowCode(showCode === 'withImage' ? null : 'withImage')}
            >
              {showCode === 'withImage' ? 'Hide Code' : 'Show Code'}
            </Button>
          </div>
          
          <ContentBlockCard
            title="Design Systems Workshop"
            description="Learn how to build and maintain scalable design systems that work across teams and products."
            mediaSlot={
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop" 
                alt="Workshop"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            }
          />
          
          {showCode === 'withImage' && (
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{codeExamples.withImage}</code>
            </pre>
          )}
        </div>

        {/* Card with Custom Button */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 style={{ 
              font: 'var(--ig-typography-heading-xsmall-bold)', 
              color: 'var(--ig-text-bold)' 
            }}>
              Card with Custom Button
            </h3>
            <Button 
              variant="outlined" 
              size="sm"
              onClick={() => setShowCode(showCode === 'withButton' ? null : 'withButton')}
            >
              {showCode === 'withButton' ? 'Hide Code' : 'Show Code'}
            </Button>
          </div>
          
          <ContentBlockCard
            title="Building React Components"
            description="Master the art of creating reusable React components with modern patterns and best practices."
            mediaSlot={
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop" 
                alt="React Development"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            }
            buttonSlot={
              <Button variant="filled" color="primary">
                <Star size={16} style={{ marginRight: '8px' }} />
                Get Started
              </Button>
            }
          />
          
          {showCode === 'withButton' && (
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{codeExamples.withButton}</code>
            </pre>
          )}
        </div>

        {/* Card with Built-in Button */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 style={{ 
              font: 'var(--ig-typography-heading-xsmall-bold)', 
              color: 'var(--ig-text-bold)' 
            }}>
              Card with Built-in Button
            </h3>
            <Button 
              variant="outlined" 
              size="sm"
              onClick={() => setShowCode(showCode === 'withBuiltInButton' ? null : 'withBuiltInButton')}
            >
              {showCode === 'withBuiltInButton' ? 'Hide Code' : 'Show Code'}
            </Button>
          </div>
          
          <ContentBlockCard
            title="Advanced TypeScript Patterns"
            description="Dive deep into TypeScript's advanced features and learn how to create type-safe applications."
            buttonText="Learn More"
            buttonHref="https://example.com"
          />
          
          {showCode === 'withBuiltInButton' && (
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{codeExamples.withBuiltInButton}</code>
            </pre>
          )}
        </div>

        {/* Grey Background Card */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 style={{ 
              font: 'var(--ig-typography-heading-xsmall-bold)', 
              color: 'var(--ig-text-bold)' 
            }}>
              Grey Background Variant
            </h3>
            <Button 
              variant="outlined" 
              size="sm"
              onClick={() => setShowCode(showCode === 'greyBackground' ? null : 'greyBackground')}
            >
              {showCode === 'greyBackground' ? 'Hide Code' : 'Show Code'}
            </Button>
          </div>
          
          <ContentBlockCard
            title="Alternative Styling"
            description="This card uses the grey background variant for different visual emphasis."
            background="grey"
            buttonText="View Details"
            onButtonClick={() => alert('Grey card clicked!')}
          />
          
          {showCode === 'greyBackground' && (
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{codeExamples.greyBackground}</code>
            </pre>
          )}
        </div>

        {/* Custom Content Card */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 style={{ 
              font: 'var(--ig-typography-heading-xsmall-bold)', 
              color: 'var(--ig-text-bold)' 
            }}>
              Custom Content Card
            </h3>
            <Button 
              variant="outlined" 
              size="sm"
              onClick={() => setShowCode(showCode === 'customContent' ? null : 'customContent')}
            >
              {showCode === 'customContent' ? 'Hide Code' : 'Show Code'}
            </Button>
          </div>
          
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
                <Play size={32} style={{ color: 'var(--ig-text-medium)' }} />
              </div>
            }
          >
            <h3 className="content-block-card__title">Video Tutorial</h3>
            <p className="content-block-card__description">
              This card demonstrates custom content with multiple action buttons and custom media.
            </p>
            <div style={{ marginTop: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Button size="sm" variant="filled">
                <Play size={16} style={{ marginRight: '8px' }} />
                Play
              </Button>
              <Button size="sm" variant="outlined">
                <Download size={16} style={{ marginRight: '8px' }} />
                Download
              </Button>
              <Button size="sm" variant="soft">
                <Heart size={16} style={{ marginRight: '8px' }} />
                Like
              </Button>
            </div>
          </ContentBlockCard>
          
          {showCode === 'customContent' && (
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{codeExamples.customContent}</code>
            </pre>
          )}
        </div>

        {/* Card Container Example */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 style={{ 
              font: 'var(--ig-typography-heading-xsmall-bold)', 
              color: 'var(--ig-text-bold)' 
            }}>
              Card Container
            </h3>
            <Button 
              variant="outlined" 
              size="sm"
              onClick={() => setShowCode(showCode === 'container' ? null : 'container')}
            >
              {showCode === 'container' ? 'Hide Code' : 'Show Code'}
            </Button>
          </div>
          
          <ContentBlockCardContainer title="Featured Courses">
            <ContentBlockCard
              title="React Fundamentals"
              description="Learn the basics of React development"
              buttonText="Start Course"
            />
            <ContentBlockCard
              title="Advanced Patterns"
              description="Master advanced React patterns and techniques"
              buttonText="Continue Learning"
            />
            <ContentBlockCard
              title="Testing Strategies"
              description="Comprehensive testing for React applications"
              buttonText="View Content"
            />
          </ContentBlockCardContainer>
          
          {showCode === 'container' && (
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{codeExamples.container}</code>
            </pre>
          )}
        </div>

        {/* Complete Example */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 style={{ 
              font: 'var(--ig-typography-heading-xsmall-bold)', 
              color: 'var(--ig-text-bold)' 
            }}>
              Complete Example
            </h3>
            <Button 
              variant="outlined" 
              size="sm"
              onClick={() => setShowCode(showCode === 'complete' ? null : 'complete')}
            >
              {showCode === 'complete' ? 'Hide Code' : 'Show Code'}
            </Button>
          </div>
          
          <ContentBlockCard
            title="Complete Feature Example"
            description="This card showcases all available props and features including custom styling and click handlers."
            background="white"
            className="border-2 border-primary/20"
            imageClassName="border-b border-border"
            mediaSlot={
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop"
                alt="Complete example"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            }
            buttonSlot={
              <Button variant="soft" color="primary">
                <Star size={16} style={{ marginRight: '8px' }} />
                Save to Favorites
              </Button>
            }
            onClick={() => console.log('Card clicked')}
          />
          
          {showCode === 'complete' && (
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{codeExamples.complete}</code>
            </pre>
          )}
        </div>

        {/* Props Documentation */}
        <div className="space-y-4">
          <h3 style={{ 
            font: 'var(--ig-typography-heading-xsmall-bold)', 
            color: 'var(--ig-text-bold)' 
          }}>
            Available Props
          </h3>
          
          <div className="bg-muted p-4 rounded-lg">
            <h4 style={{ marginBottom: '12px', fontWeight: 'bold' }}>ContentCard Props:</h4>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.6' }}>
              <li><code>title?: string</code> - Card title text</li>
              <li><code>description?: string</code> - Card description text</li>
              <li><code>mediaSlot?: React.ReactNode</code> - Custom media content (images, videos, etc.)</li>
              <li><code>buttonSlot?: React.ReactNode</code> - Custom button component</li>
              <li><code>buttonText?: string</code> - Built-in button text</li>
              <li><code>buttonHref?: string</code> - Built-in button link URL</li>
              <li><code>onButtonClick?: () =&gt; void</code> - Built-in button click handler</li>
              <li><code>background?: "white" | "grey"</code> - Background color variant</li>
              <li><code>className?: string</code> - Additional CSS classes</li>
              <li><code>imageClassName?: string</code> - CSS classes for media container</li>
              <li><code>children?: React.ReactNode</code> - Custom content (overrides title/description)</li>
            </ul>
            
            <h4 style={{ marginTop: '16px', marginBottom: '12px', fontWeight: 'bold' }}>ContentCardContainer Props:</h4>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.6' }}>
              <li><code>title?: string</code> - Container title</li>
              <li><code>className?: string</code> - Additional CSS classes for grid</li>
              <li><code>children: React.ReactNode</code> - ContentCard components</li>
            </ul>
          </div>
        </div>

      </ComponentDemo>
    </div>
  )
}
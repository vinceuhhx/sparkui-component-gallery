# ContentCard Component Documentation

The `ContentCard` component is a flexible card component designed for displaying content with images, text, and call-to-action buttons. It follows the IG CDN design system and provides responsive behavior with special layout variants.

## Overview

The ContentCard component consists of two main parts:
- `ContentCard` - Individual card component
- `ContentCardContainer` - Container component that handles grid layout and responsive behavior

## Key Features

- **Responsive Layout**: Automatically adapts to different screen sizes
- **Automatic Variants**: Cards automatically get different layouts based on their position:
  - Odd-numbered cards (1st, 3rd, 5th, etc.) display in reverse order (image below text)
  - Even-numbered cards display normally (image above text)
  - The last odd card becomes a wide horizontal layout
- **Custom Button**: Includes a specialized button component with arrow icon and hover effects
- **Image Support**: Built-in image container with proper aspect ratio (1.64:1)

## Basic Usage

```tsx
import { ContentCard, ContentCardContainer } from '@/components/sparkui';

function MyComponent() {
  return (
    <ContentCardContainer title="Our Services">
      <ContentCard
        title="Digital Solutions"
        description="Transform your business with our digital solutions."
        buttonText="Learn More"
        buttonHref="/digital-solutions"
        mediaSlot={
          <img 
            src="/path-to-image.jpg" 
            alt="Digital Solutions" 
          />
        }
      />
      
      <ContentCard
        title="Consulting Services"
        description="Expert consulting to grow your business."
        buttonText="Get Started"
        onButtonClick={() => console.log('Button clicked')}
        mediaSlot={
          <img 
            src="/path-to-image.jpg" 
            alt="Consulting Services" 
          />
        }
      />
    </ContentCardContainer>
  );
}
```

## Component Props

### ContentCard Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Card title text |
| `description` | `string` | - | Card description text |
| `mediaSlot` | `React.ReactNode` | - | Content for the image area (usually an img element) |
| `buttonSlot` | `React.ReactNode` | - | Custom button content (overrides buttonText) |
| `buttonText` | `string` | - | Text for the default button |
| `buttonHref` | `string` | - | URL for button link (creates anchor tag) |
| `onButtonClick` | `() => void` | - | Click handler for button (creates button element) |
| `imageClassName` | `string` | - | Additional CSS class for image container |
| `children` | `React.ReactNode` | - | Additional content between description and button |
| `className` | `string` | - | Additional CSS class for the card |

### ContentCardContainer Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Container title (displays above all cards) |
| `children` | `React.ReactNode` | - | ContentCard components |
| `className` | `string` | - | Additional CSS class for the grid container |

## Layout Behavior

The ContentCard component has intelligent responsive behavior:

### Mobile (< 768px)
- All cards display in a single column
- Images appear above text
- Full width cards

### Tablet/Desktop (≥ 768px)
- Cards display in a 2-column grid
- **Odd cards** (1st, 3rd, 5th): Image appears **below** text (reverse layout)
- **Even cards** (2nd, 4th, 6th): Image appears **above** text (normal layout)
- **Last odd card**: Becomes a wide horizontal card spanning full width

### Large Screens (≥ 1024px)
- Enhanced spacing and typography
- Larger minimum widths for better proportions

## Examples

### Basic Content Cards

```tsx
<ContentCardContainer title="Our Services">
  {/* This will be card #1 - odd, so image below text */}
  <ContentCard
    title="Digital Transformation"
    description="Modernize your business processes."
    buttonText="Learn More"
    buttonHref="/digital"
    mediaSlot={<img src="/digital.jpg" alt="Digital" />}
  />
  
  {/* This will be card #2 - even, so image above text */}
  <ContentCard
    title="Cloud Solutions"
    description="Scalable cloud infrastructure."
    buttonText="Get Started"
    buttonHref="/cloud"
    mediaSlot={<img src="/cloud.jpg" alt="Cloud" />}
  />
  
  {/* This will be card #3 - odd, so image below text */}
  <ContentCard
    title="Consulting"
    description="Expert business consulting."
    buttonText="Contact Us"
    buttonHref="/consulting"
    mediaSlot={<img src="/consulting.jpg" alt="Consulting" />}
  />
  
  {/* This will be card #4 - even, so image above text */}
  <ContentCard
    title="Support Services"
    description="24/7 technical support."
    buttonText="Get Help"
    buttonHref="/support"
    mediaSlot={<img src="/support.jpg" alt="Support" />}
  />
  
  {/* This will be card #5 - last odd card, becomes wide horizontal */}
  <ContentCard
    title="Training Programs"
    description="Comprehensive training for your team to maximize productivity."
    buttonText="View Programs"
    buttonHref="/training"
    mediaSlot={<img src="/training.jpg" alt="Training" />}
  />
</ContentCardContainer>
```

### Custom Button with Click Handler

```tsx
<ContentCard
  title="Contact Sales"
  description="Get in touch with our sales team."
  buttonText="Call Now"
  onButtonClick={() => {
    // Custom logic here
    window.open('tel:+1234567890');
  }}
  mediaSlot={<img src="/contact.jpg" alt="Contact" />}
/>
```

### Custom Button Slot

```tsx
<ContentCard
  title="Download Resources"
  description="Access our latest whitepapers and guides."
  mediaSlot={<img src="/resources.jpg" alt="Resources" />}
  buttonSlot={
    <div style={{ display: 'flex', gap: '12px' }}>
      <button className="content-card-button">
        Download PDF
        <ArrowRight size={16} />
      </button>
      <button className="content-card-button">
        View Online
        <ExternalLink size={16} />
      </button>
    </div>
  }
/>
```

### With Additional Content

```tsx
<ContentCard
  title="Premium Service"
  description="Our premium offering includes everything you need."
  buttonText="Subscribe"
  buttonHref="/premium"
  mediaSlot={<img src="/premium.jpg" alt="Premium" />}
>
  {/* Additional content between description and button */}
  <ul style={{ margin: '16px 0', paddingLeft: '20px' }}>
    <li>24/7 Support</li>
    <li>Priority Access</li>
    <li>Advanced Features</li>
  </ul>
</ContentCard>
```

## Styling

The component uses the IG CDN design system tokens and includes:

- **Responsive Typography**: Scales from small to large screens
- **Design System Colors**: Uses semantic color tokens
- **Shadow Effects**: Subtle shadows with hover enhancements
- **Smooth Animations**: Button hover and focus transitions
- **Aspect Ratio**: Images maintain 1.64:1 ratio for consistency

### Custom Styling

You can add custom styles using the `className` props:

```tsx
<ContentCard
  className="my-custom-card"
  imageClassName="my-custom-image"
  // ... other props
/>
```

```css
.my-custom-card {
  border: 2px solid var(--ig-border-primary);
}

.my-custom-image {
  border-radius: 12px;
}
```

## Accessibility

The component follows accessibility best practices:

- **Semantic HTML**: Uses proper heading levels and structure
- **Alt Text**: Images should include descriptive alt attributes
- **Keyboard Navigation**: Buttons are keyboard accessible
- **Focus Indicators**: Clear focus states for interactive elements
- **Screen Reader Support**: Proper ARIA attributes and semantic markup

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## Dependencies

- React 18+
- lucide-react (for arrow icons)
- IG CDN Design System

## Related Components

- **Button** - For additional button variants
- **Typography** - For text styling
- **Card** - Basic card component
- **ExtendedCard** - Advanced card variants

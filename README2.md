# SparkUI Component Library

A modern, accessible React component library built on the IG CDN design system. SparkUI provides a comprehensive set of components for building beautiful and consistent user interfaces.

## 🚀 Quick Start

### Installation

Install SparkUI CLI globally:

```bash
npm install -g @sdworx/sparkui
```

### Initialize Your Project

```bash
# Navigate to your React project
cd my-react-app

# Initialize SparkUI
sparkui init
```

This will:
- Set up the component structure
- Install required CDN integration
- Create configuration files
- Set up the IG design system

### Add Your First Component

```bash
# Add a button component
sparkui add button

# Add multiple components
sparkui add card typography
```

### Import and Use

```tsx
import { Button, Card } from '@/components/sparkui';

function App() {
  return (
    <Card>
      <Button variant="filled" color="primary">
        Hello SparkUI!
      </Button>
    </Card>
  );
}
```

## 📋 Available Commands

### `sparkui init`
Initialize SparkUI in your project
```bash
sparkui init [options]

Options:
  -y, --yes    Skip prompts and use defaults
```

### `sparkui add <component>`
Add a component to your project
```bash
sparkui add button
sparkui add card --path custom/path
```

### `sparkui list`
List all available components
```bash
sparkui list
```

### `sparkui update`
Update all installed components
```bash
sparkui update
```

### `sparkui remove <component>`
Remove a component from your project
```bash
sparkui remove button
```

## 🧩 Available Components

### Basic Components
- **Button** - Interactive button with multiple variants
- **Typography** - Text styling with semantic levels
- **Body** - Body text with size variants
- **Card** - Flexible card container

### Layout Components
- **Grid** - Responsive grid layout system
- **Tabs** - Tabbed interface component

### Extended Components
- **ExtendedCard** - Advanced card variants (Profile, Feature, Metric, Content)
- **ContentCard** - Specialized content display cards

### Composite Components
- **Marquee** - Animated scrolling content
- **AccreditationBar** - Certification display
- **WidgetHome** - Home page widgets

## 🎨 Design System Integration

SparkUI is built on the **IG CDN Design System**, which provides:

- **Consistent Typography** - Semantic font scales and weights
- **Color Tokens** - Accessible color palette with dark/light modes
- **Spacing System** - Consistent spacing and sizing
- **Interactive States** - Hover, focus, and active states
- **Responsive Design** - Mobile-first responsive components

### Automatic CDN Setup

When you run `sparkui init`, the CLI automatically:

1. **Downloads CDN Integration Script** - Loads IG design system CSS
2. **Sets up Base Styles** - Creates index.css with design tokens
3. **Configures Auto-loading** - CDN loads automatically in your app

### Manual CDN Setup (if needed)

If you need to manually set up the CDN:

```tsx
// In your main App.tsx or index.tsx
import { setupSparkUICDN } from '@/styles/sparkui-cdn';

// Call this before rendering your app
setupSparkUICDN().then(() => {
  // Your app initialization
});
```

Or add the CSS directly to your HTML:

```html
<link 
  rel="stylesheet" 
  href="https://cdn.ig.com/design-system/latest/css/index.css"
>
```

## ⚙️ Configuration

SparkUI creates a `sparkui.config.json` file in your project root:

```json
{
  "componentsPath": "src/components/sparkui",
  "cssPath": "src/styles", 
  "typescript": true,
  "cdn": {
    "enabled": true,
    "version": "latest"
  }
}
```

### Configuration Options

- **componentsPath** - Where components are installed
- **cssPath** - Where CSS files are placed  
- **typescript** - Enable TypeScript support
- **cdn.enabled** - Enable IG CDN integration
- **cdn.version** - CDN version to use

## 🔧 Development Setup

### Prerequisites

- Node.js 16+
- React 18+
- TypeScript (recommended)

### Project Structure

After initialization, your project will have:

```
src/
├── components/
│   └── sparkui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── index.ts
│       └── ...
├── styles/
│   ├── index.css
│   ├── sparkui-cdn.js
│   └── impressive.css
└── lib/
    └── utils.ts
```

### Custom Styling

Components use CSS classes with IG design system tokens:

```css
/* Custom component styles */
.my-custom-button {
  background: var(--ig-background-primary);
  color: var(--ig-text-on-primary);
  padding: var(--ig-spacing-100) var(--ig-spacing-200);
  border-radius: var(--ig-border-radius);
}
```

## 📱 Responsive Design

All SparkUI components are responsive by default:

```tsx
// Grid automatically adapts to screen size
<Grid>
  <GridCol span={12} md={6} lg={4}>
    <Card>Content</Card>
  </GridCol>
</Grid>
```

## 🎯 Component Usage Examples

### Button Component

```tsx
import { Button } from '@/components/sparkui';

// Basic button
<Button>Click me</Button>

// Primary filled button
<Button variant="filled" color="primary">
  Primary Action
</Button>

// Outlined secondary button
<Button variant="outlined" color="secondary">
  Secondary Action
</Button>

// Different sizes
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
```

### Card Component

```tsx
import { Card, CardHeader, CardTitle, CardBody, CardFooter } from '@/components/sparkui';

<Card variant="subtle" shadow>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardBody>
    <p>Card content goes here</p>
  </CardBody>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Typography Component

```tsx
import { Typography } from '@/components/sparkui';

// Semantic heading levels
<Typography level={1}>Main Heading</Typography>
<Typography level={2} weight="medium">Subheading</Typography>
<Typography level={5} color="secondary">Body text</Typography>
```

### Extended Cards

```tsx
import { ProfileCard, FeatureCard, MetricCard } from '@/components/sparkui';

// Profile card
<ProfileCard
  name="John Doe"
  title="Senior Developer"
  description="Building amazing user experiences"
  avatar="/avatar.jpg"
  stats={[
    { label: "Projects", value: "12" },
    { label: "Years", value: "5" }
  ]}
/>

// Feature card
<FeatureCard
  icon={<Star />}
  title="Premium Features"
  description="Unlock advanced functionality"
  features={[
    "Advanced analytics",
    "Priority support", 
    "Custom integrations"
  ]}
  primaryAction={{ 
    label: "Upgrade", 
    onClick: () => console.log('Upgrade') 
  }}
/>

// Metric card
<MetricCard
  title="Revenue"
  value="$12,345"
  change={{ value: "+12%", direction: "up" }}
  description="vs last month"
/>
```

## 🌙 Dark Mode Support

SparkUI automatically supports dark mode through the IG CDN:

```tsx
// Dark mode is handled automatically by the design system
// Components adapt their colors based on the system preference
```

## 🔍 Troubleshooting

### CDN Not Loading

If styles aren't applying correctly:

1. Check browser console for CDN loading errors
2. Verify CDN URL is accessible
3. Manually call `setupSparkUICDN()` if needed

```tsx
import { setupSparkUICDN } from '@/styles/sparkui-cdn';

// Debug CDN loading
setupSparkUICDN()
  .then(() => console.log('CDN loaded'))
  .catch(err => console.error('CDN failed:', err));
```

### Component Not Found

If a component isn't found:

```bash
# Check available components
sparkui list

# Make sure you're using the correct name
sparkui add button  # ✅ Correct
sparkui add Button  # ❌ Case sensitive
```

### Import Errors

If imports fail:

1. Check your `sparkui.config.json` paths
2. Verify components are in the correct directory
3. Rebuild your project

```bash
# Reinstall a component
sparkui remove button
sparkui add button
```

## 📚 API Reference

### Component Props

#### Button
```tsx
interface ButtonProps {
  variant?: 'filled' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}
```

#### Card
```tsx
interface CardProps {
  variant?: 'clear' | 'subtle' | 'strong';
  shadow?: boolean;
  children: React.ReactNode;
}
```

#### Typography
```tsx
interface TypographyProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  weight?: 'regular' | 'medium' | 'bold';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  children: React.ReactNode;
}
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build components
npm run build

# Run tests
npm test

# Lint code
npm run lint
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Documentation**: https://docs.sparkui.com
- **Component Gallery**: https://sparkui.com/components
- **GitHub**: https://github.com/sdworx/sparkui
- **NPM Package**: https://npmjs.com/package/@sdworx/sparkui
- **IG Design System**: https://design.ig.com

## 💬 Support

- **Discord**: [Join our community](https://discord.gg/sparkui)
- **GitHub Issues**: [Report bugs](https://github.com/sdworx/sparkui/issues)
- **Email**: sparkui@sdworx.com

---

**SparkUI** - Building beautiful interfaces with confidence 🚀
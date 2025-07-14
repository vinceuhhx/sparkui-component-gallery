import { ComponentDemo } from "@/components/demo/ComponentDemo"
import { Marquee, WidgetHome, Button } from "@/components/sparkui"
import { Star, Users, Zap, Heart, TrendingUp, Shield, Award, Clock } from "lucide-react"

const HomeComponentDemo = () => {
  const codeExample = `import { Marquee, WidgetHome } from "@/components/sparkui"

// Marquee Component
<Marquee variant="default" speed="normal" pauseOnHover={true}>
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>

// Widget Home Component
<WidgetHome 
  variant="stats"
  title="Total Users" 
  value="95,000+"
  icon={<Users />}
/>

<WidgetHome 
  variant="feature"
  title="Fast Performance" 
  description="Lightning fast processing with optimized algorithms"
  icon={<Zap />}
  action={<Button size="sm">Learn More</Button>}
/>`

  const companies = [
    { name: "Traffico", logo: "🚛" },
    { name: "Belcotec", logo: "🔧" },
    { name: "Aquafin", logo: "💧" },
    { name: "Biocartis", logo: "🧬" },
    { name: "SAP", logo: "📊" },
    { name: "BDP", logo: "🏢" },
  ]

  return (
    <div className="p-8">
      <ComponentDemo
        title="Home Components"
        description="Versatile marquee and widget components for building engaging home pages with various layouts and animations."
        code={codeExample}
      >
        <div className="space-y-8">
          {/* Marquee Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--ig-text-bold)' }}>Marquee Variants</h3>
            
            <div className="space-y-6">
              <div>
                <h4 style={{ 
                  font: 'var(--ig-typography-body-medium-medium)', 
                  color: 'var(--ig-text-medium)',
                  marginBottom: '12px'
                }}>Default Marquee</h4>
                <Marquee variant="default" speed="normal" pauseOnHover={true}>
                  {companies.map((company, index) => (
                    <div 
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '16px 24px',
                        background: 'var(--ig-background-surface-on-clear-soft)',
                        borderRadius: 'var(--ig-border-radius)',
                        border: '1px solid var(--ig-border-soft)',
                        minWidth: '200px',
                        margin: '0 8px'
                      }}
                    >
                      <span style={{ fontSize: '24px' }}>{company.logo}</span>
                      <span style={{ 
                        font: 'var(--ig-typography-body-medium-medium)',
                        color: 'var(--ig-text-bold)'
                      }}>{company.name}</span>
                    </div>
                  ))}
                </Marquee>
              </div>

              <div>
                <h4 style={{ 
                  font: 'var(--ig-typography-body-medium-medium)', 
                  color: 'var(--ig-text-medium)',
                  marginBottom: '12px'
                }}>Reverse Marquee</h4>
                <Marquee variant="reverse" speed="fast" gradient={true}>
                  {['🌟 Premium Service', '⚡ Fast Support', '🔒 Secure Platform', '💎 Quality Assured'].map((text, index) => (
                    <div 
                      key={index}
                      style={{
                        padding: '12px 20px',
                        background: 'var(--ig-background-primary-soft)',
                        color: 'var(--ig-text-primary)',
                        borderRadius: 'var(--ig-border-radius)',
                        font: 'var(--ig-typography-body-small-medium)',
                        whiteSpace: 'nowrap',
                        margin: '0 12px'
                      }}
                    >
                      {text}
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>

          {/* Widget Home Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--ig-text-bold)' }}>Widget Home Variants</h3>
            
            <div className="space-y-6">
              {/* Stats Widgets */}
              <div>
                <h4 style={{ 
                  font: 'var(--ig-typography-body-medium-medium)', 
                  color: 'var(--ig-text-medium)',
                  marginBottom: '12px'
                }}>Stats Widgets</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <WidgetHome 
                    variant="stats"
                    title="Total Users" 
                    value="95,000+"
                    icon={<Users size={32} />}
                    description="Active monthly users"
                  />
                  <WidgetHome 
                    variant="stats"
                    title="Growth Rate" 
                    value="23%"
                    icon={<TrendingUp size={32} />}
                    description="Year over year"
                  />
                  <WidgetHome 
                    variant="stats"
                    title="Uptime" 
                    value="99.9%"
                    icon={<Shield size={32} />}
                    description="System reliability"
                  />
                </div>
              </div>

              {/* Feature Widgets */}
              <div>
                <h4 style={{ 
                  font: 'var(--ig-typography-body-medium-medium)', 
                  color: 'var(--ig-text-medium)',
                  marginBottom: '12px'
                }}>Feature Widgets</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                  <WidgetHome 
                    variant="feature"
                    title="Lightning Fast" 
                    description="Experience blazing fast performance with our optimized infrastructure and smart caching."
                    icon={<Zap size={24} />}
                    action={<Button size="sm" variant="soft" color="primary">Learn More</Button>}
                  />
                  <WidgetHome 
                    variant="feature"
                    title="Award Winning" 
                    description="Recognized by industry leaders for innovation and excellence in design and functionality."
                    icon={<Award size={24} />}
                    action={<Button size="sm" variant="soft" color="primary">See Awards</Button>}
                  />
                </div>
              </div>

              {/* Testimonial Widget */}
              <div>
                <h4 style={{ 
                  font: 'var(--ig-typography-body-medium-medium)', 
                  color: 'var(--ig-text-medium)',
                  marginBottom: '12px'
                }}>Testimonial Widget</h4>
                <WidgetHome 
                  variant="testimonial"
                  title="Sarah Johnson, CEO at TechCorp"
                  description="This platform has transformed how we manage our business operations. The interface is intuitive and the performance is outstanding."
                />
              </div>

              {/* Pricing Widget */}
              <div>
                <h4 style={{ 
                  font: 'var(--ig-typography-body-medium-medium)', 
                  color: 'var(--ig-text-medium)',
                  marginBottom: '12px'
                }}>Pricing Widget</h4>
                <div style={{ maxWidth: '300px' }}>
                  <WidgetHome 
                    variant="pricing"
                    title="Pro Plan"
                    value="$29/month"
                    description="Perfect for growing teams with advanced features and priority support."
                    action={<Button variant="filled" color="success" style={{ width: '100%' }}>Get Started</Button>}
                  />
                </div>
              </div>

              {/* Mixed Size Examples */}
              <div>
                <h4 style={{ 
                  font: 'var(--ig-typography-body-medium-medium)', 
                  color: 'var(--ig-text-medium)',
                  marginBottom: '12px'
                }}>Different Sizes</h4>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                  <WidgetHome 
                    variant="card"
                    size="sm"
                    title="Small Widget"
                    description="Compact design"
                    icon={<Heart size={20} />}
                  />
                  <WidgetHome 
                    variant="card"
                    size="md"
                    title="Medium Widget"
                    description="Standard size with balanced content"
                    icon={<Clock size={24} />}
                  />
                  <WidgetHome 
                    variant="card"
                    size="lg"
                    title="Large Widget"
                    description="Spacious layout perfect for detailed content and multiple elements"
                    icon={<Star size={28} />}
                    action={<Button size="sm">Action</Button>}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ComponentDemo>
    </div>
  )
}

export default HomeComponentDemo
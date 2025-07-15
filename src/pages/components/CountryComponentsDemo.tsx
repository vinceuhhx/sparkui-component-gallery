import { ComponentDemo } from "@/components/demo/ComponentDemo"
import { ContentBlockCard, ContentBlockCardContainer, Button } from "@/components/sparkui"

export default function CountryComponentsDemo() {
  return (
    <div className="p-8 space-y-8">
      <ComponentDemo
        title="Country Components"
        description="Showcase of content cards designed for country-specific solutions and services"
      >
        <ContentBlockCardContainer title="Our Solutions">
          <ContentBlockCard
            title="Personnel administration"
            description="SD Worx offers various solutions to streamline your administrative HR processes."
            mediaSlot={
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=200&fit=crop" 
                alt="Personnel administration"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            }
            buttonSlot={
              <Button variant="outlined" color="primary">
                Find out more →
              </Button>
            }
          />

          <ContentBlockCard
            title="Payroll services"
            description="Comprehensive payroll solutions that ensure accuracy and compliance with local regulations."
            mediaSlot={
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop" 
                alt="Payroll services"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            }
            buttonSlot={
              <Button variant="outlined" color="primary">
                Find out more →
              </Button>
            }
          />

          <ContentBlockCard
            title="Talent management"
            description="End-to-end talent management solutions to help you attract, develop, and retain top talent."
            mediaSlot={
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop" 
                alt="Talent management"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            }
            buttonSlot={
              <Button variant="outlined" color="primary">
                Find out more →
              </Button>
            }
          />

          <ContentBlockCard
            title="HR consulting"
            description="Expert HR consulting services to help optimize your human resources strategies and processes."
            mediaSlot={
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop" 
                alt="HR consulting"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            }
            buttonSlot={
              <Button variant="outlined" color="primary">
                Find out more →
              </Button>
            }
          />

          <ContentBlockCard
            title="Digital solutions"
            description="Modern digital HR solutions that integrate seamlessly with your existing systems and workflows."
            mediaSlot={
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop" 
                alt="Digital solutions"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            }
            buttonSlot={
              <Button variant="outlined" color="primary">
                Find out more →
              </Button>
            }
          />

          <ContentBlockCard
            title="Compliance management"
            description="Stay compliant with ever-changing regulations through our comprehensive compliance management solutions."
            mediaSlot={
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop" 
                alt="Compliance management"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            }
            buttonSlot={
              <Button variant="outlined" color="primary">
                Find out more →
              </Button>
            }
          />
        </ContentBlockCardContainer>
      </ComponentDemo>
    </div>
  )
}
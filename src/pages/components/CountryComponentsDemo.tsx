import { ComponentDemo } from "@/components/demo/ComponentDemo"
import { ContentCard, ContentCardContainer } from "@/components/sparkui"

export default function CountryComponentsDemo() {
  return (
    <div className="p-8 space-y-8">
      <ComponentDemo
        title="Country Components"
        description="Showcase of content cards designed for country-specific solutions and services"
      >
        <ContentCardContainer title="Our Solutions">
          <ContentCard
            title="Digital signatures"
            description="Are you looking for an efficient solution for digital signatures? Our experts are at your fingertips to support you."
            buttonText="Find out more"
            mediaSlot={
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=244&fit=crop" 
                alt="Digital signatures" 
              />
            }
          />
          
          <ContentCard
            title="Interim & recruitment"
            description="Are you looking for temporary or permanent reinforcement, or do you need specific expertise? Our experts are completely at home in interim, recruitment and project sourcing for your company."
            buttonText="Find out more"
            mediaSlot={
              <img 
                src="/lovable-uploads/00551a12-b942-4bc9-85e3-e24b90f28263.png" 
                alt="Interim & recruitment" 
              />
            }
          />
          
          <ContentCard
            title="Sustainable work"
            description="Is your job taking too much of a toll, or do you feel like you're not at the right place? We help you find sustainable work that fits your life."
            buttonText="Find out more"
            mediaSlot={
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=244&fit=crop" 
                alt="Sustainable work" 
              />
            }
          />
          
          <ContentCard
            title="Technology solutions"
            description="From cutting-edge software to innovative platforms, discover technology solutions that transform your business operations and drive growth."
            buttonText="Find out more"
            mediaSlot={
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=244&fit=crop" 
                alt="Technology solutions" 
              />
            }
          />
          
          <ContentCard
            title="Data insights"
            description="Unlock the power of your data with advanced analytics and insights that help you make informed decisions and optimize performance."
            buttonText="Find out more"
            mediaSlot={
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=244&fit=crop" 
                alt="Data insights" 
              />
            }
          />
        </ContentCardContainer>
      </ComponentDemo>
    </div>
  )
}
import React from "react";
import { ComponentDemo } from "@/components/demo/ComponentDemo";
import { ProfileCard, FeatureCard, MetricCard, ContentCard } from "@/components/sparkui";
import { Button } from "@/components/sparkui";
import { Heart, Star, TrendingUp, Users, Award, Shield } from "lucide-react";

const ExtendedCardDemo = () => {
  return (
    <ComponentDemo 
      title="Extended Cards" 
      description="Composite card components built on the base card system with various layouts and use cases."
    >
      <div className="ig-grid ig-grid--responsive" style={{ gap: "var(--ig-size-300)" }}>
        
        {/* Profile Cards */}
        <div className="ig-demo-section">
          <h3 className="ig-demo-section-title">Profile Cards</h3>
          <div className="ig-grid ig-grid--responsive" style={{ gap: "var(--ig-size-200)" }}>
            <ProfileCard
              name="Sarah Johnson"
              title="Senior UX Designer"
              description="Passionate about creating user-centered design solutions with over 5 years of experience in digital product design."
              avatar="https://images.unsplash.com/photo-1494790108755-2616b612b4b0?w=400&h=400&fit=crop&crop=face"
              actions={
                <Button variant="outlined" color="primary" size="sm">
                  Connect
                </Button>
              }
              stats={[
                { label: "Projects", value: "24" },
                { label: "Followers", value: "1.2K" },
                { label: "Rating", value: "4.9" }
              ]}
              variant="clear"
              shadow={true}
            />
            
            <ProfileCard
              name="Alex Chen"
              title="Full Stack Developer"
              description="Building scalable web applications with modern technologies. Love solving complex problems."
              avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              actions={
                <div style={{ display: "flex", gap: "var(--ig-size-100)" }}>
                  <Button variant="filled" color="primary" size="sm">
                    Follow
                  </Button>
                  <Button variant="outlined" color="primary" size="sm">
                    Message
                  </Button>
                </div>
              }
              stats={[
                { label: "Repos", value: "48" },
                { label: "Stars", value: "892" },
                { label: "Years", value: "7" }
              ]}
              variant="subtle"
              shadow={true}
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="ig-demo-section">
          <h3 className="ig-demo-section-title">Feature Cards</h3>
          <div className="ig-grid ig-grid--responsive" style={{ gap: "var(--ig-size-200)" }}>
            <FeatureCard
              icon={<Shield style={{ width: "var(--ig-size-500)", height: "var(--ig-size-500)", color: "var(--ig-text-primary)" }} />}
              title="Premium Plan"
              description="Advanced features for professional teams"
              features={[
                "Unlimited projects",
                "Advanced analytics",
                "Priority support", 
                "Custom integrations",
                "Team collaboration tools"
              ]}
              primaryAction={{
                label: "Upgrade Now",
                onClick: () => console.log("Upgrade clicked")
              }}
              secondaryAction={{
                label: "Learn More", 
                onClick: () => console.log("Learn more clicked")
              }}
              variant="clear"
              shadow={true}
            />

            <FeatureCard
              icon={<Award style={{ width: "var(--ig-size-500)", height: "var(--ig-size-500)", color: "var(--ig-text-secondary)" }} />}
              title="Enterprise"
              description="Complete solution for large organizations"
              features={[
                "Everything in Premium",
                "Advanced security",
                "Dedicated support",
                "Custom onboarding",
                "SLA guarantee"
              ]}
              primaryAction={{
                label: "Contact Sales",
                onClick: () => console.log("Contact sales clicked")
              }}
              variant="strong"
              shadow={true}
            />
          </div>
        </div>

        {/* Metric Cards */}
        <div className="ig-demo-section">
          <h3 className="ig-demo-section-title">Metric Cards</h3>
          <div className="ig-grid ig-grid--auto-fit" style={{ gap: "var(--ig-size-200)", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
            <MetricCard
              title="Total Users"
              value="12,847"
              change={{ value: "+12%", direction: "up" }}
              description="vs last month"
              trend={<Users style={{ width: "var(--ig-size-300)", height: "var(--ig-size-300)", color: "var(--ig-text-soft)" }} />}
              variant="clear"
              shadow={true}
            />

            <MetricCard
              title="Revenue"
              value="$54,290"
              change={{ value: "+8.2%", direction: "up" }}
              description="Monthly recurring revenue"
              trend={<TrendingUp style={{ width: "var(--ig-size-300)", height: "var(--ig-size-300)", color: "var(--ig-text-success)" }} />}
              variant="subtle"
              shadow={true}
            />

            <MetricCard
              title="Conversion Rate"
              value="3.24%"
              change={{ value: "-0.3%", direction: "down" }}
              description="Weekly average"
              variant="clear"
              shadow={true}
            />

            <MetricCard
              title="Active Sessions"
              value="1,429"
              change={{ value: "0%", direction: "neutral" }}
              description="Currently online"
              variant="clear"
              shadow={true}
            />
          </div>
        </div>

        {/* Content Cards */}
        <div className="ig-demo-section">
          <h3 className="ig-demo-section-title">Content Cards</h3>
          <div className="ig-grid ig-grid--responsive" style={{ gap: "var(--ig-size-200)" }}>
            <ContentCard
              image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop"
              category="Technology"
              title="The Future of Web Development"
              excerpt="Exploring the latest trends and technologies shaping the future of web development, from AI integration to progressive web apps."
              author="Jane Smith"
              date="Mar 15, 2024"
              readTime="5 min read"
              tags={["React", "AI", "WebDev", "Future"]}
              actions={
                <Button variant="soft" color="primary" size="sm">
                  <Heart style={{ width: "var(--ig-size-150)", height: "var(--ig-size-150)" }} />
                </Button>
              }
              variant="clear"
              shadow={true}
            />

            <ContentCard
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
              category="Design"
              title="Creating Better User Experiences"
              excerpt="A comprehensive guide to UX design principles that can transform your digital products and delight your users."
              author="Michael Brown"
              date="Mar 12, 2024"
              readTime="8 min read"
              tags={["UX", "Design", "User Research"]}
              actions={
                <div style={{ display: "flex", gap: "var(--ig-size-050)" }}>
                  <Button variant="soft" color="primary" size="sm">
                    <Heart style={{ width: "var(--ig-size-150)", height: "var(--ig-size-150)" }} />
                  </Button>
                  <Button variant="soft" color="primary" size="sm">
                    <Star style={{ width: "var(--ig-size-150)", height: "var(--ig-size-150)" }} />
                  </Button>
                </div>
              }
              variant="clear"
              shadow={true}
            />

            <ContentCard
              category="Business"
              title="Building Scalable Teams"
              excerpt="Strategies for building and managing remote development teams that can scale with your growing business needs."
              author="David Wilson"
              date="Mar 10, 2024"
              readTime="6 min read"
              tags={["Team", "Management", "Remote"]}
              actions={
                <Button variant="outlined" color="primary" size="sm">
                  Read More
                </Button>
              }
              variant="subtle"
              shadow={true}
            />
          </div>
        </div>
      </div>
    </ComponentDemo>
  );
};

export default ExtendedCardDemo;
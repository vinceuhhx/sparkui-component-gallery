import { ComponentDemo } from "@/components/demo/ComponentDemo"
import { ProfileCard, FeatureCard, MetricCard, ContentCard, Grid, GridCol } from "@/components/sparkui"
import { Button } from "@/components/sparkui"
import { Star, Users, TrendingUp, Calendar, MapPin, Globe, Award } from "lucide-react"

export default function ExtendedCardDemo() {
  return (
    <div className="p-8 space-y-8">
      <ComponentDemo
        title="Extended Cards"
        description="Composite card components built on top of the basic card system"
      >
        {/* Profile Cards */}
        <div className="space-y-4">
          <h3 className="ig-typography-heading-xxsmall-bold">Profile Cards</h3>
          <Grid>
            <GridCol span={12} spanMd={4}>
              <ProfileCard
                name="Sarah Chen"
                title="Senior Designer"
                description="Passionate about creating intuitive user experiences and design systems."
                avatar="https://images.unsplash.com/photo-1494790108755-2616b612c9cf?w=150&h=150&fit=crop&crop=face"
                stats={[
                  { label: "Projects", value: "24" },
                  { label: "Reviews", value: "4.9" },
                ]}
                actions={
                  <Button size="sm" variant="filled">
                    View Profile
                  </Button>
                }
              />
            </GridCol>

            <GridCol span={12} spanMd={4}>
              <ProfileCard
                name="Alex Rodriguez"
                title="Full Stack Developer"
                description="Building scalable applications with modern web technologies."
                stats={[
                  { label: "Commits", value: "1.2k" },
                  { label: "Stars", value: "156" },
                ]}
                actions={
                  <Button size="sm" variant="outlined">
                    Connect
                  </Button>
                }
              />
            </GridCol>

            <GridCol span={12} spanMd={4}>
              <ProfileCard
                name="Maya Patel"
                title="Product Manager"
                description="Leading product strategy and cross-functional teams."
                avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
                stats={[
                  { label: "Products", value: "8" },
                  { label: "Team Size", value: "12" },
                ]}
                actions={
                  <>
                    <Button size="sm" variant="filled">Message</Button>
                    <Button size="sm" variant="outlined">Follow</Button>
                  </>
                }
              />
            </GridCol>
          </Grid>
        </div>

        {/* Feature Cards */}
        <div className="space-y-4">
          <h3 className="ig-typography-heading-xxsmall-bold">Feature Cards</h3>
          <Grid>
            <GridCol span={12} spanMd={6} spanLg={4}>
              <FeatureCard
                icon={<Star className="h-6 w-6" />}
                title="Premium Quality"
                description="Hand-crafted components built with attention to detail and modern design principles."
                primaryAction={{ label: "Learn More", onClick: () => {} }}
              />
            </GridCol>

            <GridCol span={12} spanMd={6} spanLg={4}>
              <FeatureCard
                icon={<Users className="h-6 w-6" />}
                title="Team Collaboration"
                description="Built-in collaboration tools to help your team work together more effectively."
                primaryAction={{ label: "Get Started", onClick: () => {} }}
              />
            </GridCol>

            <GridCol span={12} spanMd={6} spanLg={4}>
              <FeatureCard
                icon={<TrendingUp className="h-6 w-6" />}
                title="Analytics & Insights"
                description="Comprehensive analytics to help you understand your users and improve your product."
                primaryAction={{ label: "View Demo", onClick: () => {} }}
              />
            </GridCol>
          </Grid>
        </div>

        {/* Metric Cards */}
        <div className="space-y-4">
          <h3 className="ig-typography-heading-xxsmall-bold">Metric Cards</h3>
          <Grid>
            <GridCol span={12} spanSm={6} spanLg={3}>
              <MetricCard
                title="Total Users"
                value="12,458"
                change={{ value: "+12.5%", direction: "up" }}
                trend={<Users className="h-5 w-5" />}
              />
            </GridCol>

            <GridCol span={12} spanSm={6} spanLg={3}>
              <MetricCard
                title="Revenue"
                value="$48,392"
                change={{ value: "+8.2%", direction: "up" }}
                trend={<TrendingUp className="h-5 w-5" />}
              />
            </GridCol>

            <GridCol span={12} spanSm={6} spanLg={3}>
              <MetricCard
                title="Active Sessions"
                value="3,421"
                change={{ value: "-2.1%", direction: "down" }}
                trend={<Globe className="h-5 w-5" />}
              />
            </GridCol>

            <GridCol span={12} spanSm={6} spanLg={3}>
              <MetricCard
                title="Conversion Rate"
                value="3.45%"
                change={{ value: "+0.8%", direction: "up" }}
                trend={<Award className="h-5 w-5" />}
              />
            </GridCol>
          </Grid>
        </div>

        {/* Content Cards */}
        <div className="space-y-4">
          <h3 className="ig-typography-heading-xxsmall-bold">Content Cards</h3>
          <Grid>
            <GridCol span={12} spanMd={6}>
              <ContentCard
                title="Design System Workshop"
                excerpt="Join us for a comprehensive workshop on building and maintaining design systems for modern web applications."
                image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop"
                date="March 15, 2024"
                author="Design Team"
                actions={
                  <>
                    <Button size="md" variant="filled">Register Now</Button>
                    <Button size="md" variant="outlined">Learn More</Button>
                  </>
                }
              />
            </GridCol>

            <GridCol span={12} spanMd={6}>
              <ContentCard
                title="Building Scalable React Applications"
                excerpt="Learn the best practices and patterns for building React applications that can scale with your team and user base."
                date="March 22, 2024"
                readTime="45 min"
                author="Engineering Team"
                actions={
                  <Button size="md" variant="filled">Join Webinar</Button>
                }
              />
            </GridCol>
          </Grid>
        </div>

      </ComponentDemo>
    </div>
  )
}
import { ComponentDemo } from "@/components/demo/ComponentDemo"
import { ProfileCard, FeatureCard, MetricCard, ContentCard, Grid, GridCol } from "@/components/sparkui"
import { Button } from "@/components/sparkui"
import { Star, Users, TrendingUp, Calendar, MapPin, Mail, Globe, Award } from "lucide-react"

export default function ExtendedCardDemo() {
  return (
       <div className="p-8">
    <ComponentDemo
      title="Extended Cards"
      description="Composite card components built on top of the basic card system using the ig-grid layout system"
    >
      <div className="space-y-8">
        {/* Profile Cards */}
        <div>
          <h3 className="ig-typography-heading-xxsmall-bold mb-4">Profile Cards</h3>
          <Grid>
            <GridCol span={12} spanMd={4}>
              <ProfileCard
                name="Sarah Chen"
                role="Senior Designer"
                avatar="https://images.unsplash.com/photo-1494790108755-2616b612c9cf?w=150&h=150&fit=crop&crop=face"
                stats={[
                  { label: "Projects", value: "24" },
                  { label: "Reviews", value: "4.9" },
                ]}
                actions={
                  <Button size="small" variant="primary">
                    View Profile
                  </Button>
                }
              />
            </GridCol>

            <GridCol span={12} spanMd={4}>
              <ProfileCard
                name="Alex Rodriguez"
                role="Full Stack Developer"
                stats={[
                  { label: "Commits", value: "1.2k" },
                  { label: "Stars", value: "156" },
                ]}
                actions={
                  <Button size="small" variant="outline">
                    Connect
                  </Button>
                }
              />
            </GridCol>

            <GridCol span={12} spanMd={4}>
              <ProfileCard
                name="Maya Patel"
                role="Product Manager"
                avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
                stats={[
                  { label: "Products", value: "8" },
                  { label: "Team Size", value: "12" },
                ]}
                actions={
                  <>
                    <Button size="small" variant="primary">Message</Button>
                    <Button size="small" variant="outline">Follow</Button>
                  </>
                }
              />
            </GridCol>
          </Grid>
        </div>

        {/* Feature Cards */}
        <div>
          <h3 className="ig-typography-heading-xxsmall-bold mb-4">Feature Cards</h3>
          <Grid>
            <GridCol span={12} spanMd={6} spanLg={4}>
              <FeatureCard
                icon={<Star className="h-6 w-6" />}
                title="Premium Quality"
                description="Hand-crafted components built with attention to detail and modern design principles."
                actions={
                  <Button size="small" variant="outline">
                    Learn More
                  </Button>
                }
              />
            </GridCol>

            <GridCol span={12} spanMd={6} spanLg={4}>
              <FeatureCard
                icon={<Users className="h-6 w-6" />}
                title="Team Collaboration"
                description="Built-in collaboration tools to help your team work together more effectively."
                actions={
                  <Button size="small" variant="outline">
                    Get Started
                  </Button>
                }
              />
            </GridCol>

            <GridCol span={12} spanMd={6} spanLg={4}>
              <FeatureCard
                icon={<TrendingUp className="h-6 w-6" />}
                title="Analytics & Insights"
                description="Comprehensive analytics to help you understand your users and improve your product."
                actions={
                  <Button size="small" variant="outline">
                    View Demo
                  </Button>
                }
              />
            </GridCol>
          </Grid>
        </div>

        {/* Metric Cards */}
        <div>
          <h3 className="ig-typography-heading-xxsmall-bold mb-4">Metric Cards</h3>
          <Grid>
            <GridCol span={12} spanSm={6} spanLg={3}>
              <MetricCard
                title="Total Users"
                value="12,458"
                change="+12.5%"
                trend="up"
                icon={<Users className="h-5 w-5" />}
              />
            </GridCol>

            <GridCol span={12} spanSm={6} spanLg={3}>
              <MetricCard
                title="Revenue"
                value="$48,392"
                change="+8.2%"
                trend="up"
                icon={<TrendingUp className="h-5 w-5" />}
              />
            </GridCol>

            <GridCol span={12} spanSm={6} spanLg={3}>
              <MetricCard
                title="Active Sessions"
                value="3,421"
                change="-2.1%"
                trend="down"
                icon={<Globe className="h-5 w-5" />}
              />
            </GridCol>

            <GridCol span={12} spanSm={6} spanLg={3}>
              <MetricCard
                title="Conversion Rate"
                value="3.45%"
                change="+0.8%"
                trend="up"
                icon={<Award className="h-5 w-5" />}
              />
            </GridCol>
          </Grid>
        </div>

        {/* Content Cards */}
        <div>
          <h3 className="ig-typography-heading-xxsmall-bold mb-4">Content Cards</h3>
          <Grid>
            <GridCol span={12} spanMd={6}>
              <ContentCard
                title="Design System Workshop"
                description="Join us for a comprehensive workshop on building and maintaining design systems for modern web applications."
                image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop"
                metadata={[
                  { icon: <Calendar className="h-4 w-4" />, text: "March 15, 2024" },
                  { icon: <MapPin className="h-4 w-4" />, text: "San Francisco, CA" },
                ]}
                actions={
                  <>
                    <Button size="medium" variant="primary">Register Now</Button>
                    <Button size="medium" variant="outline">Learn More</Button>
                  </>
                }
              />
            </GridCol>

            <GridCol span={12} spanMd={6}>
              <ContentCard
                title="Building Scalable React Applications"
                description="Learn the best practices and patterns for building React applications that can scale with your team and user base."
                metadata={[
                  { icon: <Calendar className="h-4 w-4" />, text: "March 22, 2024" },
                  { icon: <Globe className="h-4 w-4" />, text: "Online Event" },
                  { icon: <Users className="h-4 w-4" />, text: "500+ attendees" },
                ]}
                actions={
                  <Button size="medium" variant="primary">Join Webinar</Button>
                }
              />
            </GridCol>
          </Grid>
        </div>

        {/* Code Example */}
        <div>
          <h3 className="ig-typography-heading-xxsmall-bold mb-4">Usage with Grid System</h3>
          <Grid>
            <GridCol span={12}>
              <div className="ig-card ig-card--clear">
                <div className="ig-card__body">
                  <pre className="ig-typography-body-small-regular overflow-x-auto">
{`<Grid>
  <GridCol span={12} spanMd={6} spanLg={4}>
    <ProfileCard
      name="John Doe"
      role="Developer"
      stats={[
        { label: "Projects", value: "12" },
        { label: "Rating", value: "4.8" }
      ]}
      actions={
        <Button variant="primary">View Profile</Button>
      }
    />
  </GridCol>
  
  <GridCol span={12} spanMd={6} spanLg={8}>
    <ContentCard
      title="Featured Article"
      description="Latest insights and best practices..."
      actions={
        <Button variant="outline">Read More</Button>
      }
    />
  </GridCol>
</Grid>`}
                  </pre>
                </div>
              </div>
            </GridCol>
          </Grid>
        </div>
      </div>
    </ComponentDemo>
    </div>
  )
}
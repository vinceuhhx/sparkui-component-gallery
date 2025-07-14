import { ComponentDemo } from "@/components/demo/ComponentDemo"
import { Typography, Body, Button } from "@/components/sparkui"
import { Heart, MessageCircle, Share, User, Calendar, Star } from "lucide-react"

const CardLayoutsDemo = () => {
  const codeExample = `import { Typography, Body, Button } from "@/components/sparkui"

// Product Card
<div className="bg-card rounded-xl border border-border p-6">
  <Typography level={4} weight="medium">
    Product Title
  </Typography>
  <Body size="small" color="soft" className="mt-2">
    Product description goes here
  </Body>
  <div className="mt-4 flex gap-2">
    <Button variant="filled" size="sm">Buy Now</Button>
    <Button variant="outlined" size="sm">Learn More</Button>
  </div>
</div>`

  return (
    <div className="p-8">
      <ComponentDemo
        title="Card Layouts"
        description="Composite card components built using SparkUI basic components. These demonstrate how to combine Typography, Body, and Button components to create rich content layouts."
        code={codeExample}
      >
        <div className="space-y-8">
          {/* Product Cards */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Product Cards</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted/30 rounded-lg mb-4 flex items-center justify-center">
                  <Body size="small" color="soft">Product Image</Body>
                </div>
                <Typography level={4} weight="medium">
                  Premium Headphones
                </Typography>
                <Body size="small" color="soft" className="mt-2">
                  High-quality wireless headphones with noise cancellation
                </Body>
                <Typography level={5} weight="bold" color="primary" className="mt-3">
                  $299.99
                </Typography>
                <div className="mt-4 flex gap-2">
                  <Button variant="filled" color="primary" size="sm">
                    Add to Cart
                  </Button>
                  <Button variant="outlined" color="primary" size="sm">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted/30 rounded-lg mb-4 flex items-center justify-center">
                  <Body size="small" color="soft">Product Image</Body>
                </div>
                <Typography level={4} weight="medium">
                  Smart Watch Pro
                </Typography>
                <Body size="small" color="soft" className="mt-2">
                  Advanced fitness tracking with heart rate monitoring
                </Body>
                <Typography level={5} weight="bold" color="success" className="mt-3">
                  $399.99
                </Typography>
                <div className="mt-4 flex gap-2">
                  <Button variant="filled" color="success" size="sm">
                    Buy Now
                  </Button>
                  <Button variant="soft" color="success" size="sm">
                    Compare
                  </Button>
                </div>
              </div>

              <div className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted/30 rounded-lg mb-4 flex items-center justify-center">
                  <Body size="small" color="soft">Product Image</Body>
                </div>
                <Typography level={4} weight="medium">
                  Laptop Stand
                </Typography>
                <Body size="small" color="soft" className="mt-2">
                  Ergonomic aluminum stand for better posture
                </Body>
                <Typography level={5} weight="bold" color="primary" className="mt-3">
                  $79.99
                </Typography>
                <div className="mt-4 flex gap-2">
                  <Button variant="soft" color="primary" size="sm">
                    View Details
                  </Button>
                  <Button variant="plain" color="primary" size="sm">
                    <Share className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Cards */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Profile Cards</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <Typography level={4} weight="medium">
                      Sarah Johnson
                    </Typography>
                    <Body size="small" color="soft">
                      Senior Product Designer
                    </Body>
                    <Body size="small" color="medium" className="mt-2">
                      Passionate about creating user-centered designs that solve real problems. 5+ years in UX/UI design.
                    </Body>
                    <div className="mt-4 flex gap-2">
                      <Button variant="filled" color="primary" size="sm">
                        Connect
                      </Button>
                      <Button variant="outlined" color="primary" size="sm">
                        Message
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-success" />
                  </div>
                  <div className="flex-1">
                    <Typography level={4} weight="medium">
                      Alex Chen
                    </Typography>
                    <Body size="small" color="soft">
                      Full Stack Developer
                    </Body>
                    <Body size="small" color="medium" className="mt-2">
                      Building scalable web applications with modern technologies. Expert in React, Node.js, and cloud architecture.
                    </Body>
                    <div className="mt-4 flex gap-2">
                      <Button variant="soft" color="success" size="sm">
                        View Profile
                      </Button>
                      <Button variant="plain" color="success" size="sm">
                        Follow
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Article Cards */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Article Cards</h3>
            <div className="space-y-6">
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="aspect-[2/1] bg-muted/30 flex items-center justify-center">
                  <Body size="small" color="soft">Article Image</Body>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Body size="small" color="primary" weight="medium">Technology</Body>
                    <Body size="small" color="soft">•</Body>
                    <Body size="small" color="soft">5 min read</Body>
                  </div>
                  <Typography level={3} weight="medium">
                    The Future of Web Development: Trends to Watch in 2024
                  </Typography>
                  <Body color="medium" className="mt-3">
                    Explore the latest trends shaping web development, from AI integration to new frameworks 
                    that are revolutionizing how we build applications.
                  </Body>
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-muted/50 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <Body size="small" weight="medium">John Doe</Body>
                        <Body size="small" color="soft">Dec 15, 2023</Body>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="plain" color="primary" size="sm">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button variant="plain" color="primary" size="sm">
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                      <Button variant="plain" color="primary" size="sm">
                        <Share className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex gap-6">
                  <div className="w-32 h-20 bg-muted/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Body size="small" color="soft">Image</Body>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Body size="small" color="success" weight="medium">Design</Body>
                      <Body size="small" color="soft">•</Body>
                      <Body size="small" color="soft">
                        <Calendar className="w-3 h-3 inline mr-1" />
                        Dec 12, 2023
                      </Body>
                    </div>
                    <Typography level={4} weight="medium">
                      Creating Accessible Design Systems
                    </Typography>
                    <Body size="small" color="medium" className="mt-2">
                      Learn how to build design systems that prioritize accessibility and inclusive user experiences.
                    </Body>
                    <div className="flex items-center gap-4 mt-3">
                      <Button variant="plain" color="primary" size="sm">
                        Read More
                      </Button>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <Body size="small" color="soft">4.8</Body>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Statistics Cards</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-card rounded-xl border border-border p-6 text-center">
                <Typography level={2} weight="bold" color="primary">
                  12.5K
                </Typography>
                <Body size="small" color="soft" className="mt-1">
                  Total Users
                </Body>
                <Body size="small" color="success" className="mt-2">
                  +12% from last month
                </Body>
              </div>

              <div className="bg-card rounded-xl border border-border p-6 text-center">
                <Typography level={2} weight="bold" color="success">
                  $45.2K
                </Typography>
                <Body size="small" color="soft" className="mt-1">
                  Revenue
                </Body>
                <Body size="small" color="success" className="mt-2">
                  +8% from last month
                </Body>
              </div>

              <div className="bg-card rounded-xl border border-border p-6 text-center">
                <Typography level={2} weight="bold" color="primary">
                  98.5%
                </Typography>
                <Body size="small" color="soft" className="mt-1">
                  Uptime
                </Body>
                <Body size="small" color="soft" className="mt-2">
                  All systems operational
                </Body>
              </div>

              <div className="bg-card rounded-xl border border-border p-6 text-center">
                <Typography level={2} weight="bold" color="danger">
                  2.1%
                </Typography>
                <Body size="small" color="soft" className="mt-1">
                  Bounce Rate
                </Body>
                <Body size="small" color="danger" className="mt-2">
                  -0.3% from last month
                </Body>
              </div>
            </div>
          </div>
        </div>
      </ComponentDemo>
    </div>
  )
}

export default CardLayoutsDemo
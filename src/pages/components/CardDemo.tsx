import React from "react";
import { ComponentDemo } from "@/components/demo/ComponentDemo";
import { Card, CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter } from "@/components/sparkui";
import { Button } from "@/components/sparkui";
import { Typography, Body } from "@/components/sparkui";
import { Settings, Heart, Share, User } from "lucide-react";

const CardDemo = () => {
  const codeExample = `import { Card, CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter } from "@/components/sparkui";

// Basic Card
<Card variant="clear" shadow={true}>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardSubtitle>Card subtitle or description</CardSubtitle>
  </CardHeader>
  <CardBody>
    <p>Card content goes here...</p>
  </CardBody>
  <CardFooter>
    <Button variant="filled" color="primary">
      Action
    </Button>
  </CardFooter>
</Card>`;

  return (
    <ComponentDemo 
      title="Card" 
      description="Basic card component with header, body, and footer sections. Foundation for building more complex card layouts."
      code={codeExample}
    >
      <div className="space-y-8">
        
        {/* Card Variants */}
        <div>
          <Typography level={4} weight="medium" className="mb-4">Card Variants</Typography>
          <div className="grid md:grid-cols-3 gap-6">
            <Card variant="clear" shadow={false}>
              <CardHeader>
                <CardTitle>Clear Variant</CardTitle>
                <CardSubtitle>Basic clear card without shadow</CardSubtitle>
              </CardHeader>
              <CardBody>
                <Body size="medium">
                  This is a clear card variant with minimal styling.
                </Body>
              </CardBody>
              <CardFooter>
                <Button variant="outlined" color="primary" size="sm">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            <Card variant="subtle" shadow={true}>
              <CardHeader>
                <CardTitle>Subtle Variant</CardTitle>
                <CardSubtitle>Subtle background with shadow</CardSubtitle>
              </CardHeader>
              <CardBody>
                <Body size="medium">
                  This is a subtle card variant with background and shadow.
                </Body>
              </CardBody>
              <CardFooter>
                <Button variant="filled" color="primary" size="sm">
                  Get Started
                </Button>
              </CardFooter>
            </Card>

            <Card variant="strong" shadow={true}>
              <CardHeader>
                <CardTitle>Strong Variant</CardTitle>
                <CardSubtitle>Strong contrast with shadow</CardSubtitle>
              </CardHeader>
              <CardBody>
                <Body size="medium">
                  This is a strong card variant with high contrast styling.
                </Body>
              </CardBody>
              <CardFooter>
                <Button variant="soft" color="primary" size="sm">
                  Explore
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Card with Shadow Options */}
        <div>
          <Typography level={4} weight="medium" className="mb-4">Shadow Options</Typography>
          <div className="grid md:grid-cols-2 gap-6">
            <Card variant="clear" shadow={false}>
              <CardHeader>
                <CardTitle>No Shadow</CardTitle>
                <CardSubtitle>Card without shadow styling</CardSubtitle>
              </CardHeader>
              <CardBody>
                <Body size="medium">
                  This card has no shadow applied, creating a flat appearance.
                </Body>
              </CardBody>
            </Card>

            <Card variant="clear" shadow={true}>
              <CardHeader>
                <CardTitle>With Shadow</CardTitle>
                <CardSubtitle>Card with shadow styling</CardSubtitle>
              </CardHeader>
              <CardBody>
                <Body size="medium">
                  This card has shadow applied, creating depth and elevation.
                </Body>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Card Structure Examples */}
        <div>
          <Typography level={4} weight="medium" className="mb-4">Card Structure Examples</Typography>
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Header Only */}
            <Card variant="subtle" shadow={true}>
              <CardHeader>
                <CardTitle>Header Only Card</CardTitle>
                <CardSubtitle>Simple card with just header content</CardSubtitle>
              </CardHeader>
            </Card>

            {/* Body Only */}
            <Card variant="subtle" shadow={true}>
              <CardBody>
                <Typography level={5} weight="medium" className="mb-2">Body Only Card</Typography>
                <Body size="medium">
                  This card contains only body content without separate header or footer sections.
                </Body>
              </CardBody>
            </Card>

            {/* Header + Body */}
            <Card variant="clear" shadow={true}>
              <CardHeader>
                <CardTitle>Header + Body</CardTitle>
                <CardSubtitle>Card with header and body sections</CardSubtitle>
              </CardHeader>
              <CardBody>
                <Body size="medium">
                  This demonstrates a card with both header and body content sections.
                </Body>
              </CardBody>
            </Card>

            {/* Full Structure */}
            <Card variant="clear" shadow={true}>
              <CardHeader>
                <CardTitle>Complete Card</CardTitle>
                <CardSubtitle>All sections included</CardSubtitle>
              </CardHeader>
              <CardBody>
                <Body size="medium">
                  This card demonstrates all available sections: header, body, and footer.
                </Body>
              </CardBody>
              <CardFooter>
                <div style={{ display: "flex", gap: "var(--ig-size-100)" }}>
                  <Button variant="filled" color="primary" size="sm">
                    Primary
                  </Button>
                  <Button variant="outlined" color="primary" size="sm">
                    Secondary
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Interactive Cards */}
        <div>
          <Typography level={4} weight="medium" className="mb-4">Interactive Examples</Typography>
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Settings Card */}
            <Card variant="clear" shadow={true}>
              <CardHeader>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--ig-size-150)" }}>
                  <Settings style={{ width: "var(--ig-size-300)", height: "var(--ig-size-300)", color: "var(--ig-text-primary)" }} />
                  <div>
                    <CardTitle>Account Settings</CardTitle>
                    <CardSubtitle>Manage your account preferences</CardSubtitle>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <Body size="medium">
                  Update your profile information, notification settings, and privacy preferences.
                </Body>
              </CardBody>
              <CardFooter>
                <Button variant="filled" color="primary" size="sm">
                  Open Settings
                </Button>
              </CardFooter>
            </Card>

            {/* Social Card */}
            <Card variant="subtle" shadow={true}>
              <CardHeader>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--ig-size-150)" }}>
                  <User style={{ width: "var(--ig-size-300)", height: "var(--ig-size-300)", color: "var(--ig-text-medium)" }} />
                  <div>
                    <CardTitle>Social Post</CardTitle>
                    <CardSubtitle>2 hours ago</CardSubtitle>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <Body size="medium">
                  Just finished building an amazing component library! The flexibility of the card system is incredible.
                </Body>
              </CardBody>
              <CardFooter>
                <div style={{ display: "flex", gap: "var(--ig-size-150)" }}>
                  <Button variant="soft" color="primary" size="sm">
                    <Heart style={{ width: "var(--ig-size-150)", height: "var(--ig-size-150)" }} />
                    Like
                  </Button>
                  <Button variant="soft" color="primary" size="sm">
                    <Share style={{ width: "var(--ig-size-150)", height: "var(--ig-size-150)" }} />
                    Share
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </ComponentDemo>
  );
};

export default CardDemo;
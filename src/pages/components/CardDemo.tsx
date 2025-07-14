import { ComponentDemo } from "@/components/demo/ComponentDemo"
import { Card, CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter, Grid, GridCol } from "@/components/sparkui"
import { Button } from "@/components/sparkui"

export default function CardDemo() {
  return (
    <ComponentDemo
      title="Card Components"
      description="Basic card components with different variants and composition patterns using the ig-grid system"
    >
      <div className="space-y-8">
        {/* Card Variants */}
        <div>
          <h3 className="ig-typography-heading-xxsmall-bold mb-4">Card Variants</h3>
          <Grid>
            <GridCol span={12} spanMd={4}>
              <Card variant="clear">
                <CardHeader>
                  <CardTitle>Clear Card</CardTitle>
                  <CardSubtitle>Minimal styling with transparent background</CardSubtitle>
                </CardHeader>
                <CardBody>
                  This is a clear card with minimal background styling. Perfect for overlays or when you want minimal visual weight.
                </CardBody>
                <CardFooter>
                  <Button size="sm" variant="outlined">Action</Button>
                </CardFooter>
              </Card>
            </GridCol>

            <GridCol span={12} spanMd={4}>
              <Card variant="subtle">
                <CardHeader>
                  <CardTitle>Subtle Card</CardTitle>
                  <CardSubtitle>Light background for gentle contrast</CardSubtitle>
                </CardHeader>
                <CardBody>
                  This is a subtle card with light background styling. Great for content that needs gentle separation from the background.
                </CardBody>
                <CardFooter>
                  <Button size="sm" variant="outlined">Action</Button>
                </CardFooter>
              </Card>
            </GridCol>

            <GridCol span={12} spanMd={4}>
              <Card variant="strong">
                <CardHeader>
                  <CardTitle>Strong Card</CardTitle>
                  <CardSubtitle>Bold styling for emphasis</CardSubtitle>
                </CardHeader>
                <CardBody>
                  This is a strong card with bold background styling. Use this when you need the card to stand out prominently.
                </CardBody>
                <CardFooter>
                  <Button size="sm" variant="outlined">Action</Button>
                </CardFooter>
              </Card>
            </GridCol>
          </Grid>
        </div>

        {/* Cards with Shadow */}
        <div>
          <h3 className="ig-typography-heading-xxsmall-bold mb-4">Cards with Shadow</h3>
          <Grid>
            <GridCol span={12} spanMd={4}>
              <Card variant="clear" shadow>
                <CardHeader>
                  <CardTitle>Clear + Shadow</CardTitle>
                  <CardSubtitle>Elevation effect</CardSubtitle>
                </CardHeader>
                <CardBody>
                  Clear card with shadow effect for floating appearance.
                </CardBody>
                <CardFooter>
                  <Button size="sm" variant="filled" color="primary">Learn More</Button>
                </CardFooter>
              </Card>
            </GridCol>

            <GridCol span={12} spanMd={4}>
              <Card variant="subtle" shadow>
                <CardHeader>
                  <CardTitle>Subtle + Shadow</CardTitle>
                  <CardSubtitle>Gentle elevation</CardSubtitle>
                </CardHeader>
                <CardBody>
                  Subtle card with shadow effect for refined depth.
                </CardBody>
                <CardFooter>
                  <Button size="sm" variant="filled" color="primary">Learn More</Button>
                </CardFooter>
              </Card>
            </GridCol>

            <GridCol span={12} spanMd={4}>
              <Card variant="strong" shadow>
                <CardHeader>
                  <CardTitle>Strong + Shadow</CardTitle>
                  <CardSubtitle>Maximum impact</CardSubtitle>
                </CardHeader>
                <CardBody>
                  Strong card with shadow effect for maximum visual impact.
                </CardBody>
                <CardFooter>
                  <Button size="sm" variant="filled" color="primary">Learn More</Button>
                </CardFooter>
              </Card>
            </GridCol>
          </Grid>
        </div>

        {/* Flexible Layouts */}
        <div>
          <h3 className="ig-typography-heading-xxsmall-bold mb-4">Flexible Layouts</h3>
          <Grid>
            <GridCol span={12} spanMd={8}>
              <Card variant="subtle" shadow>
                <CardHeader>
                  <CardTitle>Main Content Area</CardTitle>
                  <CardSubtitle>8 columns on medium+ screens</CardSubtitle>
                </CardHeader>
                <CardBody>
                  This card takes up 8 columns on medium and larger screens, making it perfect for main content areas. On smaller screens, it spans the full width for optimal mobile experience.
                </CardBody>
                <CardFooter>
                  <Button size="md" variant="filled" color="primary">Primary Action</Button>
                  <Button size="md" variant="outlined">Secondary</Button>
                </CardFooter>
              </Card>
            </GridCol>

            <GridCol span={12} spanMd={4}>
              <Card variant="clear" shadow>
                <CardHeader>
                  <CardTitle>Sidebar</CardTitle>
                  <CardSubtitle>4 columns complement</CardSubtitle>
                </CardHeader>
                <CardBody>
                  This card complements the main content area with 4 columns on medium+ screens.
                </CardBody>
                <CardFooter>
                  <Button size="sm" variant="outlined">View All</Button>
                </CardFooter>
              </Card>
            </GridCol>
          </Grid>
        </div>

        {/* Minimal Cards */}
        <div>
          <h3 className="ig-typography-heading-xxsmall-bold mb-4">Minimal Compositions</h3>
          <Grid>
            <GridCol span={12} spanMd={6}>
              <Card variant="subtle">
                <CardBody>
                  Simple card with just body content. Perfect for when you need minimal structure but still want the card styling benefits.
                </CardBody>
              </Card>
            </GridCol>

            <GridCol span={12} spanMd={6}>
              <Card variant="clear" shadow>
                <CardHeader>
                  <CardTitle>Header + Body Only</CardTitle>
                </CardHeader>
                <CardBody>
                  Card with header and body, no footer. Great for informational content that doesn't require actions.
                </CardBody>
              </Card>
            </GridCol>
          </Grid>
        </div>

        {/* Code Examples */}
        <div>
          <h3 className="ig-typography-heading-xxsmall-bold mb-4">Usage Examples</h3>
          <Grid>
            <GridCol span={12}>
              <Card variant="clear">
                <CardHeader>
                  <CardTitle>Basic Card Usage</CardTitle>
                </CardHeader>
                <CardBody>
                  <pre className="ig-typography-body-small-regular overflow-x-auto">
{`<Card variant="subtle" shadow>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardSubtitle>Optional subtitle</CardSubtitle>
  </CardHeader>
  <CardBody>
    Your content goes here...
  </CardBody>
  <CardFooter>
    <Button variant="primary">Action</Button>
  </CardFooter>
</Card>`}
                  </pre>
                </CardBody>
              </Card>
            </GridCol>
          </Grid>
        </div>
      </div>
    </ComponentDemo>
  )
}
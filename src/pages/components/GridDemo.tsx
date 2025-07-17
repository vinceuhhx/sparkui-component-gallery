import { ComponentDemo } from "@/components/demo/ComponentDemo"
import { Grid, GridCol, Card, CardHeader, CardTitle, CardBody, Typography } from "@/components/sparkui"

export default function GridDemo() {
  return (
       <div className="p-8">
    <ComponentDemo
      title="Grid System"
      description="A responsive grid system using the ig-grid classes from your CDN"
    >
      <div className="space-y-8">
        {/* Basic Grid */}
        <div>
          <Typography level={4} weight="bold" color="bold" className="mb-4">Basic Grid Layout</Typography>
          <Grid>
            <GridCol span={12}>
              <Card variant="subtle">
                <CardHeader>
                  <CardTitle>12 Columns</CardTitle>
                </CardHeader>
                <CardBody>
                  Full width content
                </CardBody>
              </Card>
            </GridCol>
          </Grid>
        </div>

        {/* Two Columns */}
        <div>
          <Typography level={4} weight="bold" color="bold" className="mb-4">Two Columns</Typography>
          <Grid>
            <GridCol span={6}>
              <Card variant="subtle">
                <CardHeader>
                  <CardTitle>6 Columns</CardTitle>
                </CardHeader>
                <CardBody>
                  Half width content
                </CardBody>
              </Card>
            </GridCol>
            <GridCol span={6}>
              <Card variant="subtle">
                <CardHeader>
                  <CardTitle>6 Columns</CardTitle>
                </CardHeader>
                <CardBody>
                  Half width content
                </CardBody>
              </Card>
            </GridCol>
          </Grid>
        </div>

        {/* Three Columns */}
        <div>
          <Typography level={4} weight="bold" color="bold" className="mb-4">Three Columns</Typography>
          <Grid>
            <GridCol span={4}>
              <Card variant="subtle">
                <CardHeader>
                  <CardTitle>4 Columns</CardTitle>
                </CardHeader>
                <CardBody>
                  One third width
                </CardBody>
              </Card>
            </GridCol>
            <GridCol span={4}>
              <Card variant="subtle">
                <CardHeader>
                  <CardTitle>4 Columns</CardTitle>
                </CardHeader>
                <CardBody>
                  One third width
                </CardBody>
              </Card>
            </GridCol>
            <GridCol span={4}>
              <Card variant="subtle">
                <CardHeader>
                  <CardTitle>4 Columns</CardTitle>
                </CardHeader>
                <CardBody>
                  One third width
                </CardBody>
              </Card>
            </GridCol>
          </Grid>
        </div>

        {/* Responsive Grid */}
        <div>
          <Typography level={4} weight="bold" color="bold" className="mb-4">Responsive Grid</Typography>
          <Grid>
            <GridCol span={12} spanMd={6} spanLg={4}>
              <Card variant="subtle">
                <CardHeader>
                  <CardTitle>Responsive</CardTitle>
                </CardHeader>
                <CardBody>
                  12 cols on mobile, 6 on tablet, 4 on desktop
                </CardBody>
              </Card>
            </GridCol>
            <GridCol span={12} spanMd={6} spanLg={4}>
              <Card variant="subtle">
                <CardHeader>
                  <CardTitle>Responsive</CardTitle>
                </CardHeader>
                <CardBody>
                  12 cols on mobile, 6 on tablet, 4 on desktop
                </CardBody>
              </Card>
            </GridCol>
            <GridCol span={12} spanMd={6} spanLg={4}>
              <Card variant="subtle">
                <CardHeader>
                  <CardTitle>Responsive</CardTitle>
                </CardHeader>
                <CardBody>
                  12 cols on mobile, 6 on tablet, 4 on desktop
                </CardBody>
              </Card>
            </GridCol>
          </Grid>
        </div>

        {/* Complex Layout */}
        <div>
          <Typography level={4} weight="bold" color="bold" className="mb-4">Complex Layout</Typography>
          <Grid>
            <GridCol span={8}>
              <Card variant="subtle">
                <CardHeader>
                  <CardTitle>Main Content</CardTitle>
                </CardHeader>
                <CardBody>
                  8 columns for main content area
                </CardBody>
              </Card>
            </GridCol>
            <GridCol span={4}>
              <Card variant="subtle">
                <CardHeader>
                  <CardTitle>Sidebar</CardTitle>
                </CardHeader>
                <CardBody>
                  4 columns for sidebar
                </CardBody>
              </Card>
            </GridCol>
            <GridCol span={3}>
              <Card variant="subtle">
                <CardHeader>
                  <CardTitle>Quarter</CardTitle>
                </CardHeader>
                <CardBody>
                  3 columns
                </CardBody>
              </Card>
            </GridCol>
            <GridCol span={3}>
              <Card variant="subtle">
                <CardHeader>
                  <CardTitle>Quarter</CardTitle>
                </CardHeader>
                <CardBody>
                  3 columns
                </CardBody>
              </Card>
            </GridCol>
            <GridCol span={3}>
              <Card variant="subtle">
                <CardHeader>
                  <CardTitle>Quarter</CardTitle>
                </CardHeader>
                <CardBody>
                  3 columns
                </CardBody>
              </Card>
            </GridCol>
            <GridCol span={3}>
              <Card variant="subtle">
                <CardHeader>
                  <CardTitle>Quarter</CardTitle>
                </CardHeader>
                <CardBody>
                  3 columns
                </CardBody>
              </Card>
            </GridCol>
          </Grid>
        </div>

        {/* Code Example */}
        <div>
          <Typography level={4} weight="bold" color="bold" className="mb-4">Usage Example</Typography>
          <Card variant="clear">
            <CardBody>
              <pre className="ig-typography-body-small-regular overflow-x-auto">
{`<Grid>
  <GridCol span={12} spanMd={6} spanLg={4}>
    <Card variant="subtle">
      <CardHeader>
        <CardTitle>Responsive Card</CardTitle>
      </CardHeader>
      <CardBody>
        Content that adapts to screen size
      </CardBody>
    </Card>
  </GridCol>
  <GridCol span={12} spanMd={6} spanLg={8}>
    <Card variant="subtle">
      <CardHeader>
        <CardTitle>Main Content</CardTitle>
      </CardHeader>
      <CardBody>
        Larger content area on desktop
      </CardBody>
    </Card>
  </GridCol>
</Grid>`}
              </pre>
            </CardBody>
          </Card>
        </div>
      </div>
    </ComponentDemo>
       </div>
  )
}
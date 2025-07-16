import { Typography, Button, Card, CardHeader, CardTitle, CardBody } from "@/components/sparkui"
import { ComponentDemo } from "@/components/demo/ComponentDemo"

const Examples = () => {
  const loginFormCode = `import { Button, Card, CardHeader, CardTitle, CardBody, Typography } from '@sdworx/sparkui'

function LoginForm() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>
          <Typography level={2} weight="bold">Sign In</Typography>
        </CardTitle>
      </CardHeader>
      <CardBody className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input 
            type="email" 
            className="w-full p-2 border rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Password</label>
          <input 
            type="password" 
            className="w-full p-2 border rounded-md"
            placeholder="Enter your password"
          />
        </div>
        <Button variant="primary" className="w-full">
          Sign In
        </Button>
      </CardBody>
    </Card>
  )
}`

  const dashboardCode = `import { Grid, GridCol, Card, CardHeader, CardTitle, CardBody, Typography } from '@sdworx/sparkui'

function Dashboard() {
  return (
    <div className="p-6">
      <Typography level={1} weight="bold" className="mb-6">
        Dashboard
      </Typography>
      
      <Grid className="gap-6">
        <GridCol span={4}>
          <Card>
            <CardHeader>
              <CardTitle>Total Users</CardTitle>
            </CardHeader>
            <CardBody>
              <Typography level={2} weight="bold">1,234</Typography>
              <Typography className="text-green-600">+12% from last month</Typography>
            </CardBody>
          </Card>
        </GridCol>
        
        <GridCol span={4}>
          <Card>
            <CardHeader>
              <CardTitle>Revenue</CardTitle>
            </CardHeader>
            <CardBody>
              <Typography level={2} weight="bold">$12,345</Typography>
              <Typography className="text-green-600">+8% from last month</Typography>
            </CardBody>
          </Card>
        </GridCol>
        
        <GridCol span={4}>
          <Card>
            <CardHeader>
              <CardTitle>Orders</CardTitle>
            </CardHeader>
            <CardBody>
              <Typography level={2} weight="bold">567</Typography>
              <Typography className="text-red-600">-3% from last month</Typography>
            </CardBody>
          </Card>
        </GridCol>
      </Grid>
    </div>
  )
}`

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <Typography level={1} weight="bold" className="mb-6">
        Examples
      </Typography>
      
      <Typography className="mb-8 text-muted-foreground">
        Real-world examples showing how to combine SparkUI components to build common UI patterns.
      </Typography>

      <div className="space-y-12">
        <ComponentDemo
          title="Login Form"
          description="A complete login form using Cards, Typography, and Buttons"
          code={loginFormCode}
        >
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle>
                <Typography level={2} weight="bold">Sign In</Typography>
              </CardTitle>
            </CardHeader>
            <CardBody className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <input 
                  type="password" 
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your password"
                />
              </div>
              <Button variant="filled" className="w-full">
                Sign In
              </Button>
            </CardBody>
          </Card>
        </ComponentDemo>

        <ComponentDemo
          title="Dashboard Layout"
          description="A dashboard with grid layout and metric cards"
          code={dashboardCode}
        >
          <div className="p-6 bg-background border rounded-lg">
            <Typography level={2} weight="bold" className="mb-6">
              Dashboard
            </Typography>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Total Users</CardTitle>
                </CardHeader>
                <CardBody>
                  <Typography level={3} weight="bold">1,234</Typography>
                  <Typography className="text-green-600 text-sm">+12% from last month</Typography>
                </CardBody>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Revenue</CardTitle>
                </CardHeader>
                <CardBody>
                  <Typography level={3} weight="bold">$12,345</Typography>
                  <Typography className="text-green-600 text-sm">+8% from last month</Typography>
                </CardBody>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Orders</CardTitle>
                </CardHeader>
                <CardBody>
                  <Typography level={3} weight="bold">567</Typography>
                  <Typography className="text-red-600 text-sm">-3% from last month</Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </ComponentDemo>
      </div>
    </div>
  )
}

export default Examples
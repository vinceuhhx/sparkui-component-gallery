import { ComponentDemo } from "@/components/demo/ComponentDemo"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/sparkui"
import { Body } from "@/components/sparkui"

const TabsDemo = () => {
  const codeExample = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/sparkui"

// Basic horizontal tabs
<Tabs defaultValue="tab1" orientation="horizontal" size="md">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    Content for Tab 1
  </TabsContent>
  <TabsContent value="tab2">
    Content for Tab 2
  </TabsContent>
</Tabs>

// Vertical tabs with validation
<Tabs orientation="vertical" size="lg">
  <TabsList>
    <TabsTrigger value="settings">Settings</TabsTrigger>
    <TabsTrigger value="billing" validation="warning">Billing</TabsTrigger>
    <TabsTrigger value="danger" validation="danger" disabled>Danger Zone</TabsTrigger>
  </TabsList>
</Tabs>`

  return (
    <div className="p-8">
      <ComponentDemo
        title="Tabs"
        description="A flexible tabs component with horizontal and vertical orientations, different sizes, and validation states."
        code={codeExample}
      >
        <div className="space-y-8">
          {/* Basic Horizontal Tabs */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Horizontal Tabs (Medium Size)</h3>
            <Tabs defaultValue="overview" orientation="horizontal" size="md">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                  <Body>This is the overview tab content. Here you would see a summary of your dashboard with key metrics and recent activity.</Body>
                </div>
              </TabsContent>
              <TabsContent value="analytics">
                <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                  <Body>Analytics tab content with charts, graphs, and detailed performance metrics would be displayed here.</Body>
                </div>
              </TabsContent>
              <TabsContent value="reports">
                <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                  <Body>Reports section containing downloadable reports, historical data, and export options.</Body>
                </div>
              </TabsContent>
              <TabsContent value="notifications">
                <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                  <Body>Notification settings and preferences, recent alerts, and communication options.</Body>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Large Horizontal Tabs */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Horizontal Tabs (Large Size)</h3>
            <Tabs defaultValue="products" orientation="horizontal" size="lg">
              <TabsList>
                <TabsTrigger value="products">Products</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
              </TabsList>
              <TabsContent value="products">
                <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                  <Body size="large">Our product catalog featuring the latest innovations and solutions.</Body>
                </div>
              </TabsContent>
              <TabsContent value="services">
                <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                  <Body size="large">Professional services including consulting, support, and custom development.</Body>
                </div>
              </TabsContent>
              <TabsContent value="about">
                <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                  <Body size="large">Learn more about our company, mission, and team members.</Body>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Vertical Tabs */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Vertical Tabs</h3>
            <Tabs defaultValue="profile" orientation="vertical" size="md">
              <div className="flex gap-6">
                <TabsList>
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="billing">Billing</TabsTrigger>
                  <TabsTrigger value="team">Team</TabsTrigger>
                </TabsList>
                <div className="flex-1">
                  <TabsContent value="profile">
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <Body>Profile settings including personal information, avatar, and public details.</Body>
                    </div>
                  </TabsContent>
                  <TabsContent value="account">
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <Body>Account security settings, password management, and login preferences.</Body>
                    </div>
                  </TabsContent>
                  <TabsContent value="billing">
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <Body>Billing information, payment methods, and subscription management.</Body>
                    </div>
                  </TabsContent>
                  <TabsContent value="team">
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <Body>Team management, member invitations, and role assignments.</Body>
                    </div>
                  </TabsContent>
                </div>
              </div>
            </Tabs>
          </div>

          {/* Tabs with States */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Tabs with Different States</h3>
            <Tabs defaultValue="general" orientation="horizontal" size="md">
              <TabsList>
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="warnings" validation="warning">Warnings</TabsTrigger>
                <TabsTrigger value="errors" validation="danger">Critical Issues</TabsTrigger>
                <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
              </TabsList>
              <TabsContent value="general">
                <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                  <Body>General settings and configuration options for your application.</Body>
                </div>
              </TabsContent>
              <TabsContent value="security">
                <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                  <Body>Security settings, access controls, and authentication options.</Body>
                </div>
              </TabsContent>
              <TabsContent value="warnings">
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <Body color="warning">Warning: Some settings require attention but are not critical.</Body>
                </div>
              </TabsContent>
              <TabsContent value="errors">
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <Body color="danger">Critical issues that need immediate attention to prevent system problems.</Body>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Large Vertical Tabs */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Large Vertical Tabs</h3>
            <Tabs defaultValue="dashboard" orientation="vertical" size="lg">
              <div className="flex gap-6">
                <TabsList>
                  <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                  <TabsTrigger value="tasks">Tasks</TabsTrigger>
                  <TabsTrigger value="calendar">Calendar</TabsTrigger>
                </TabsList>
                <div className="flex-1">
                  <TabsContent value="dashboard">
                    <div className="p-6 bg-muted/30 rounded-lg">
                      <Body size="large">Main dashboard with overview of all activities, metrics, and quick actions.</Body>
                    </div>
                  </TabsContent>
                  <TabsContent value="projects">
                    <div className="p-6 bg-muted/30 rounded-lg">
                      <Body size="large">Project management interface with active projects, progress tracking, and team collaboration.</Body>
                    </div>
                  </TabsContent>
                  <TabsContent value="tasks">
                    <div className="p-6 bg-muted/30 rounded-lg">
                      <Body size="large">Task management system with to-do lists, assignments, and deadline tracking.</Body>
                    </div>
                  </TabsContent>
                  <TabsContent value="calendar">
                    <div className="p-6 bg-muted/30 rounded-lg">
                      <Body size="large">Calendar view with scheduled events, meetings, and important dates.</Body>
                    </div>
                  </TabsContent>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </ComponentDemo>
    </div>
  )
}

export default TabsDemo
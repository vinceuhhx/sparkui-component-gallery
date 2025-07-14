import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface ComponentDemoProps {
  title: string
  description: string
  children: React.ReactNode
  code?: string
}

export const ComponentDemo = ({ title, description, children, code }: ComponentDemoProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">{title}</h1>
        <p className="text-muted-foreground mt-2">{description}</p>
      </div>
      
      <Separator />
      
      <Card>
        <CardHeader>
          <CardTitle>Demo</CardTitle>
          <CardDescription>Interactive examples of the {title} component</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-6 bg-muted/20 rounded-lg border border-border">
            {children}
          </div>
        </CardContent>
      </Card>
      
      {code && (
        <Card>
          <CardHeader>
            <CardTitle>Code Example</CardTitle>
            <CardDescription>Usage example</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{code}</code>
            </pre>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
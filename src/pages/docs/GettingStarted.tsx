import { Typography } from "@/components/sparkui"
import { ComponentDemo } from "@/components/demo/ComponentDemo"

const GettingStarted = () => {
  const installationCode = `npm install @sdworx/sparkui`
  
  const usageCode = `import { Button, Typography, Card } from '@sdworx/sparkui'
import '@sdworx/sparkui/dist/style.css'

function App() {
  return (
    <div>
      <Typography level={1} weight="bold">
        Welcome to SparkUI
      </Typography>
      <Button variant="primary">
        Get Started
      </Button>
    </div>
  )
}`

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Typography level={1} weight="bold" className="mb-6">
        Getting Started
      </Typography>
      
      <Typography level={2} weight="medium" className="mb-4">
        Installation
      </Typography>
      
      <ComponentDemo
        title="Install SparkUI"
        description="Add SparkUI to your React project using npm or yarn"
        code={installationCode}
        hidePreview
      />
      
      <Typography level={2} weight="medium" className="mb-4 mt-8">
        Basic Usage
      </Typography>
      
      <ComponentDemo
        title="Import and Use Components"
        description="Import the components you need and don't forget to include the CSS"
        code={usageCode}
        hidePreview
      />

      <div className="mt-8 p-6 bg-muted rounded-lg">
        <Typography level={3} weight="medium" className="mb-4">
          Requirements
        </Typography>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
            React 18.0 or higher
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
            TypeScript support included
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
            Tailwind CSS for styling
          </li>
        </ul>
      </div>
    </div>
  )
}

export default GettingStarted
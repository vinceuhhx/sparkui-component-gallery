# Publishing SparkUI to Azure Artifacts

## Setup Instructions

### 1. Azure DevOps Configuration

1. **Create Azure Artifacts Feed:**
   - Go to Azure DevOps → Artifacts
   - Create a new feed named `sparkui`
   - Set visibility to your organization

2. **Create Service Connection:**
   - Go to Project Settings → Service connections
   - Create new service connection for npm registry
   - Use the Azure Artifacts feed URL: `https://pkgs.dev.azure.com/sdworx/_packaging/sparkui/npm/registry/`
   - Name it `Azure Artifacts - SparkUI`

3. **Configure Pipeline:**
   - The `azure-pipelines.yml` file is already configured
   - Create a new pipeline using this YAML file
   - The pipeline will automatically build and publish on pushes to `main` or `develop` branches

### 2. Local Development Setup

For developers who want to install from Azure Artifacts:

1. **Configure npm registry:**
   ```bash
   npm config set registry https://pkgs.dev.azure.com/sdworx/_packaging/sparkui/npm/registry/
   npm config set always-auth true
   npm config set @sdworx:registry https://pkgs.dev.azure.com/sdworx/_packaging/sparkui/npm/registry/
   ```

2. **Authenticate:**
   ```bash
   npx vsts-npm-auth -config .npmrc
   ```

3. **Install the package:**
   ```bash
   npm install @sdworx/sparkui
   ```

### 3. Publishing Process

The publishing is automated through Azure Pipelines:

1. **Automatic Publishing:**
   - Push to `main` or `develop` branch
   - Pipeline will build, test, and publish automatically

2. **Manual Version Bump:**
   ```bash
   npm version patch|minor|major
   git push origin main --tags
   ```

### 4. Using the Package

```tsx
import { Button, Card, Typography } from '@sdworx/sparkui'
import '@sdworx/sparkui/style.css'

function App() {
  return (
    <Card>
      <Typography level={2}>Hello SparkUI</Typography>
      <Button variant="filled" color="primary">
        Click me
      </Button>
    </Card>
  )
}
```

### 5. Troubleshooting

**Authentication Issues:**
- Ensure you have proper permissions to the Azure Artifacts feed
- Re-run `npx vsts-npm-auth -config .npmrc`
- Check that the service connection is properly configured

**Build Issues:**
- Verify all dependencies are properly listed in `peerDependencies`
- Check that the build output in `dist/` is correct
- Ensure TypeScript declarations are generated

**Publishing Issues:**
- Check Azure Pipeline logs for detailed error messages
- Verify package version is incremented
- Ensure all required files are included in the `files` array
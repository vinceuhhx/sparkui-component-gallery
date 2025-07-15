#!/usr/bin/env node

const { Command } = require('commander');
const inquirer = require('inquirer');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const ora = require('ora');
const axios = require('axios');

const program = new Command();
const packageJson = require('./package.json');

// CLI Configuration
program
  .name('sparkui')
  .description('SparkUI Component Library CLI')
  .version(packageJson.version);

// Commands
program
  .command('init')
  .description('Initialize SparkUI in your project')
  .option('-y, --yes', 'Skip prompts and use defaults')
  .action(async (options) => {
    await initProject(options);
  });

program
  .command('add <component>')
  .description('Add a component to your project')
  .option('-p, --path <path>', 'Custom installation path', 'src/components/sparkui')
  .action(async (component, options) => {
    await addComponent(component, options);
  });

program
  .command('list')
  .description('List all available components')
  .action(async () => {
    await listComponents();
  });

program
  .command('update')
  .description('Update SparkUI components')
  .action(async () => {
    await updateComponents();
  });

program
  .command('remove <component>')
  .description('Remove a component from your project')
  .action(async (component) => {
    await removeComponent(component);
  });

// Initialize Project
async function initProject(options) {
  const spinner = ora('Initializing SparkUI...').start();
  
  try {
    // Check if already initialized
    const configPath = path.join(process.cwd(), 'sparkui.config.json');
    if (fs.existsSync(configPath)) {
      spinner.stop();
      console.log(chalk.yellow('SparkUI is already initialized in this project.'));
      return;
    }

    let config = {
      componentsPath: 'src/components/sparkui',
      cssPath: 'src/styles',
      typescript: true,
      cdn: {
        enabled: true,
        version: 'latest'
      }
    };

    if (!options.yes) {
      spinner.stop();
      const answers = await inquirer.prompt([
        {
          type: 'input',
          name: 'componentsPath',
          message: 'Where would you like to install components?',
          default: 'src/components/sparkui'
        },
        {
          type: 'input',
          name: 'cssPath',
          message: 'Where would you like to install CSS files?',
          default: 'src/styles'
        },
        {
          type: 'confirm',
          name: 'typescript',
          message: 'Are you using TypeScript?',
          default: true
        },
        {
          type: 'confirm',
          name: 'cdnEnabled',
          message: 'Enable IG CDN integration? (Required for proper styling)',
          default: true
        }
      ]);

      config = {
        componentsPath: answers.componentsPath,
        cssPath: answers.cssPath,
        typescript: answers.typescript,
        cdn: {
          enabled: answers.cdnEnabled,
          version: 'latest'
        }
      };
      
      spinner.start('Setting up SparkUI...');
    }

    // Create directories
    await fs.ensureDir(config.componentsPath);
    await fs.ensureDir(config.cssPath);
    await fs.ensureDir(path.join(config.componentsPath, 'composites'));

    // Setup CDN and base styles
    if (config.cdn.enabled) {
      await setupCDN(config);
    }

    // Create base configuration files
    await createBaseFiles(config);

    // Save configuration
    await fs.writeJson(configPath, config, { spaces: 2 });

    spinner.succeed('SparkUI initialized successfully!');
    
    console.log(chalk.green('\n✨ SparkUI is ready to use!'));
    console.log(chalk.blue('\nNext steps:'));
    console.log('1. Run ' + chalk.cyan('sparkui add button') + ' to add your first component');
    console.log('2. Run ' + chalk.cyan('sparkui list') + ' to see all available components');
    console.log('3. Import components in your React app');
    console.log('\n' + chalk.yellow('💡 Pro tip: Use aliases like ') + chalk.cyan('sparkui add btn') + chalk.yellow(' for faster installation'));
    
  } catch (error) {
    spinner.fail('Failed to initialize SparkUI');
    console.error(chalk.red(error.message));
  }
}

// Setup CDN Integration
async function setupCDN(config) {
  const cdnSetupScript = `
// SparkUI CDN Setup
// This function automatically loads the IG CDN required for SparkUI components

export function setupSparkUICDN() {
  // Check if CDN is already loaded
  if (document.querySelector('#ig-cdn-css')) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    // Create CSS link element
    const cssLink = document.createElement('link');
    cssLink.id = 'ig-cdn-css';
    cssLink.rel = 'stylesheet';
    cssLink.href = 'https://cdn.ig.com/design-system/latest/css/index.css';
    
    cssLink.onload = () => {
      console.log('✅ IG CDN loaded successfully');
      resolve();
    };
    
    cssLink.onerror = () => {
      console.error('❌ Failed to load IG CDN');
      reject(new Error('Failed to load IG CDN'));
    };

    // Add to document head
    document.head.appendChild(cssLink);
  });
}

// Auto-setup CDN when this module is imported
if (typeof window !== 'undefined') {
  setupSparkUICDN().catch(console.error);
}
`;

  const cdnPath = path.join(config.cssPath, 'sparkui-cdn.js');
  await fs.writeFile(cdnPath, cdnSetupScript);

  // Create index.css with SparkUI variables
  const indexCSS = `
/* SparkUI Base Styles */
/* Import this file in your main CSS file */

/* IG CDN Design System Variables */
/* These are automatically loaded from the CDN */

/* SparkUI Component Styles */
@import './impressive.css';

/* Ensure IG CDN is loaded */
:root {
  --sparkui-cdn-loaded: false;
}

/* Component-specific imports will be added here automatically */
`;

  const indexCSSPath = path.join(config.cssPath, 'index.css');
  await fs.writeFile(indexCSSPath, indexCSS);
}

// Add Component
async function addComponent(componentName, options) {
  const spinner = ora(`Adding ${componentName}...`).start();
  
  try {
    // Load config
    const config = await loadConfig();
    const registry = await loadRegistry();
    
    // Find component in registry
    const component = registry.components.find(c => 
      c.name.toLowerCase() === componentName.toLowerCase() || 
      c.aliases?.includes(componentName.toLowerCase())
    );

    if (!component) {
      spinner.fail(`Component "${componentName}" not found`);
      console.log(chalk.yellow('\nAvailable components:'));
      registry.components.forEach(c => {
        console.log(chalk.cyan(`  ${c.name}`) + (c.aliases ? chalk.gray(` (${c.aliases.join(', ')})`) : ''));
        console.log(chalk.gray(`    ${c.description}`));
      });
      return;
    }

    // Check dependencies
    if (component.dependencies?.length > 0) {
      console.log(chalk.blue(`\n${component.name} requires:`));
      for (const dep of component.dependencies) {
        console.log(chalk.gray(`  - ${dep}`));
      }
      
      const { installDeps } = await inquirer.prompt([{
        type: 'confirm',
        name: 'installDeps',
        message: 'Install dependencies automatically?',
        default: true
      }]);

      if (installDeps) {
        for (const dep of component.dependencies) {
          await addComponent(dep, options);
        }
      }
    }

    // Install component files
    const componentPath = options.path || config.componentsPath;
    await fs.ensureDir(componentPath);

    // Handle composite components directory
    if (component.category === 'composite') {
      await fs.ensureDir(path.join(componentPath, 'composites'));
    }

    // Download/create component files
    await createComponentFiles(component, componentPath, config);

    // Update imports in index file
    await updateIndex(componentPath, component);

    spinner.succeed(`Added ${component.name} successfully!`);
    
    console.log(chalk.green(`\n✨ ${component.name} is ready to use!`));
    console.log(chalk.blue('Import with:'));
    if (component.category === 'composite') {
      console.log(chalk.cyan(`import { ${component.name} } from '${componentPath.replace('src/', '@/')}/composites'`));
    } else {
      console.log(chalk.cyan(`import { ${component.name} } from '${componentPath.replace('src/', '@/')}'`));
    }
    
    if (component.examples?.length > 0) {
      console.log(chalk.blue('\nExample usage:'));
      console.log(chalk.gray(component.examples[0].code));
    }
    
  } catch (error) {
    spinner.fail(`Failed to add ${componentName}`);
    console.error(chalk.red(error.message));
  }
}

// Create Component Files
async function createComponentFiles(component, componentPath, config) {
  for (const file of component.files) {
    let filePath;
    
    if (component.category === 'composite' && file.name.endsWith('.tsx')) {
      filePath = path.join(componentPath, 'composites', file.name);
    } else {
      filePath = path.join(componentPath, file.name);
    }

    // In a real implementation, this would fetch from the registry URL
    // For now, we'll create placeholder content based on the component
    const content = await generateComponentContent(component, file, config);
    await fs.writeFile(filePath, content);
  }
}

// Generate Component Content (placeholder for actual registry fetching)
async function generateComponentContent(component, file, config) {
  if (file.type === 'component') {
    return `import React from 'react';
import { cn } from '../lib/utils';

// ${component.description}
// Generated by SparkUI CLI

export interface ${component.name}Props {
  children?: React.ReactNode;
  className?: string;
}

export const ${component.name}: React.FC<${component.name}Props> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div 
      className={cn("sparkui-${component.name.toLowerCase()}", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default ${component.name};
`;
  } else if (file.type === 'styles') {
    return `/* ${component.name} Styles */
/* Generated by SparkUI CLI */

.sparkui-${component.name.toLowerCase()} {
  /* Component styles will be implemented here */
}
`;
  }
  
  return '// Component content will be fetched from registry';
}

// List Components
async function listComponents() {
  try {
    const registry = await loadRegistry();
    
    console.log(chalk.blue('\n📦 Available SparkUI Components:\n'));
    
    registry.categories.forEach(category => {
      console.log(chalk.yellow(`${category.name}:`));
      console.log(chalk.gray(`  ${category.description}`));
      
      const categoryComponents = registry.components.filter(c => c.category === category.id);
      
      categoryComponents.forEach(component => {
        console.log(`  ${chalk.cyan(component.name)} - ${chalk.gray(component.description)}`);
        if (component.aliases?.length > 0) {
          console.log(`    ${chalk.dim('Aliases: ' + component.aliases.join(', '))}`);
        }
        if (component.dependencies?.length > 0) {
          console.log(`    ${chalk.dim('Requires: ' + component.dependencies.join(', '))}`);
        }
      });
      console.log();
    });
    
    console.log(chalk.green(`Total: ${registry.components.length} components`));
    console.log(chalk.blue('\nUsage: ') + chalk.cyan('sparkui add <component-name>'));
    console.log(chalk.blue('Examples: ') + chalk.cyan('sparkui add button') + chalk.gray(' or ') + chalk.cyan('sparkui add btn'));
    
  } catch (error) {
    console.error(chalk.red('Failed to load component registry'));
    console.error(chalk.red(error.message));
  }
}

// Update Components
async function updateComponents() {
  const spinner = ora('Checking for updates...').start();
  
  try {
    const config = await loadConfig();
    const installedComponents = await getInstalledComponents(config);
    
    if (installedComponents.length === 0) {
      spinner.info('No components installed');
      return;
    }

    const registry = await loadRegistry();
    const updates = [];
    
    for (const installed of installedComponents) {
      const latest = registry.components.find(c => c.name === installed.name);
      if (latest && latest.version !== installed.version) {
        updates.push({ installed, latest });
      }
    }

    if (updates.length === 0) {
      spinner.succeed('All components are up to date!');
      return;
    }

    spinner.stop();
    console.log(chalk.blue(`\n📋 Available Updates (${updates.length}):\n`));
    
    updates.forEach(({ installed, latest }) => {
      console.log(`  ${chalk.cyan(installed.name)}: ${chalk.gray(installed.version)} → ${chalk.green(latest.version)}`);
    });

    const { updateAll } = await inquirer.prompt([{
      type: 'confirm',
      name: 'updateAll',
      message: 'Update all components?',
      default: true
    }]);

    if (updateAll) {
      const updateSpinner = ora('Updating components...').start();
      
      for (const { latest } of updates) {
        await addComponent(latest.name, { path: config.componentsPath });
      }
      
      updateSpinner.succeed('All components updated successfully!');
    }
    
  } catch (error) {
    spinner.fail('Failed to check for updates');
    console.error(chalk.red(error.message));
  }
}

// Remove Component
async function removeComponent(componentName) {
  const spinner = ora(`Removing ${componentName}...`).start();
  
  try {
    const config = await loadConfig();
    
    // Check both main and composites directories
    const possiblePaths = [
      path.join(config.componentsPath, `${componentName}.tsx`),
      path.join(config.componentsPath, 'composites', `${componentName}.tsx`)
    ];
    
    let componentPath = null;
    let cssPath = null;
    
    for (const testPath of possiblePaths) {
      if (fs.existsSync(testPath)) {
        componentPath = testPath;
        cssPath = testPath.replace('.tsx', '.css');
        break;
      }
    }
    
    if (!componentPath) {
      spinner.fail(`Component "${componentName}" not found`);
      return;
    }

    // Remove files
    await fs.remove(componentPath);
    if (fs.existsSync(cssPath)) {
      await fs.remove(cssPath);
    }

    // Update index file
    await removeFromIndex(config.componentsPath, componentName);

    spinner.succeed(`Removed ${componentName} successfully!`);
    
  } catch (error) {
    spinner.fail(`Failed to remove ${componentName}`);
    console.error(chalk.red(error.message));
  }
}

// Utility Functions
async function loadConfig() {
  const configPath = path.join(process.cwd(), 'sparkui.config.json');
  if (!fs.existsSync(configPath)) {
    throw new Error('SparkUI not initialized. Run "sparkui init" first.');
  }
  return await fs.readJson(configPath);
}

async function loadRegistry() {
  try {
    // Try to load from local registry file first
    const registryPath = path.join(__dirname, 'registry', 'components.json');
    if (fs.existsSync(registryPath)) {
      return await fs.readJson(registryPath);
    }
    
    // Fallback to remote registry (in production this would be the primary method)
    // For now, return the embedded registry
    throw new Error('Registry file not found. Please ensure SparkUI CLI is properly installed.');
    
  } catch (error) {
    console.error(chalk.red('Failed to load component registry'));
    throw error;
  }
}

async function createBaseFiles(config) {
  // Create utils file
  const utilsContent = `import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
`;

  const utilsPath = path.join(config.componentsPath, '../lib/utils.ts');
  await fs.ensureDir(path.dirname(utilsPath));
  await fs.writeFile(utilsPath, utilsContent);

  // Create main index file
  const indexContent = `// SparkUI Components
// This file is automatically managed by the SparkUI CLI

export * from './lib/utils';

// Basic Components
// Extended Components  
// Layout Components
// Composite Components
export * from './composites';
`;

  const indexPath = path.join(config.componentsPath, 'index.ts');
  await fs.writeFile(indexPath, indexContent);

  // Create composites index file
  const compositesIndexContent = `// SparkUI Composite Components
// This file is automatically managed by the SparkUI CLI

`;

  const compositesIndexPath = path.join(config.componentsPath, 'composites', 'index.ts');
  await fs.ensureDir(path.dirname(compositesIndexPath));
  await fs.writeFile(compositesIndexPath, compositesIndexContent);
}

async function updateIndex(componentPath, component) {
  if (component.category === 'composite') {
    // Update composites index
    const compositesIndexPath = path.join(componentPath, 'composites', 'index.ts');
    let indexContent = '';
    
    if (fs.existsSync(compositesIndexPath)) {
      indexContent = await fs.readFile(compositesIndexPath, 'utf8');
    }

    const exportLine = `export { ${component.name} } from './${component.name}';`;
    
    if (!indexContent.includes(exportLine)) {
      indexContent += `\n${exportLine}`;
      await fs.writeFile(compositesIndexPath, indexContent);
    }
  } else {
    // Update main index
    const indexPath = path.join(componentPath, 'index.ts');
    let indexContent = '';
    
    if (fs.existsSync(indexPath)) {
      indexContent = await fs.readFile(indexPath, 'utf8');
    }

    const exportLine = `export { ${component.name} } from './${component.name}';`;
    
    if (!indexContent.includes(exportLine)) {
      indexContent += `\n${exportLine}`;
      await fs.writeFile(indexPath, indexContent);
    }
  }
}

async function removeFromIndex(componentPath, componentName) {
  // Check both main index and composites index
  const indexPaths = [
    path.join(componentPath, 'index.ts'),
    path.join(componentPath, 'composites', 'index.ts')
  ];
  
  for (const indexPath of indexPaths) {
    if (fs.existsSync(indexPath)) {
      let indexContent = await fs.readFile(indexPath, 'utf8');
      const lines = indexContent.split('\n');
      const filteredLines = lines.filter(line => !line.includes(`${componentName}`));
      await fs.writeFile(indexPath, filteredLines.join('\n'));
    }
  }
}

async function getInstalledComponents(config) {
  const componentPath = config.componentsPath;
  const components = [];
  
  // Get main components
  if (fs.existsSync(componentPath)) {
    const files = await fs.readdir(componentPath);
    const mainComponents = files
      .filter(file => file.endsWith('.tsx') && file !== 'index.tsx')
      .map(file => ({
        name: path.basename(file, '.tsx'),
        version: '1.0.0',
        category: 'main'
      }));
    components.push(...mainComponents);
  }
  
  // Get composite components
  const compositesPath = path.join(componentPath, 'composites');
  if (fs.existsSync(compositesPath)) {
    const files = await fs.readdir(compositesPath);
    const compositeComponents = files
      .filter(file => file.endsWith('.tsx') && file !== 'index.tsx')
      .map(file => ({
        name: path.basename(file, '.tsx'),
        version: '1.0.0',
        category: 'composite'
      }));
    components.push(...compositeComponents);
  }
  
  return components;
}

// Error handling
process.on('uncaughtException', (error) => {
  console.error(chalk.red('An unexpected error occurred:'));
  console.error(error.message);
  process.exit(1);
});

program.parse();

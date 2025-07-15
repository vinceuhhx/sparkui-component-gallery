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

    // Download component files
    for (const file of component.files) {
      const filePath = path.join(componentPath, file.name);
      await fs.writeFile(filePath, file.content);
      
      // Update imports in index file
      await updateIndex(componentPath, component);
    }

    spinner.succeed(`Added ${component.name} successfully!`);
    
    console.log(chalk.green(`\n✨ ${component.name} is ready to use!`));
    console.log(chalk.blue('Import with:'));
    console.log(chalk.cyan(`import { ${component.name} } from '${componentPath.replace('src/', '@/')}'`));
    
  } catch (error) {
    spinner.fail(`Failed to add ${componentName}`);
    console.error(chalk.red(error.message));
  }
}

// List Components
async function listComponents() {
  try {
    const registry = await loadRegistry();
    
    console.log(chalk.blue('\n📦 Available SparkUI Components:\n'));
    
    registry.categories.forEach(category => {
      console.log(chalk.yellow(`${category.name}:`));
      const categoryComponents = registry.components.filter(c => c.category === category.id);
      
      categoryComponents.forEach(component => {
        console.log(`  ${chalk.cyan(component.name)} - ${chalk.gray(component.description)}`);
        if (component.aliases) {
          console.log(`    ${chalk.dim('Aliases: ' + component.aliases.join(', '))}`);
        }
      });
      console.log();
    });
    
    console.log(chalk.green(`Total: ${registry.components.length} components`));
    console.log(chalk.blue('\nUsage: ') + chalk.cyan('sparkui add <component-name>'));
    
  } catch (error) {
    console.error(chalk.red('Failed to load component registry'));
    console.error(chalk.red(error.message));
  }
}

// Update Components
async function updateComponents() {
  const spinner = ora('Checking for updates...').start();
  
  try {
    // Load current config and installed components
    const config = await loadConfig();
    const installedComponents = await getInstalledComponents(config);
    
    if (installedComponents.length === 0) {
      spinner.info('No components installed');
      return;
    }

    // Check for updates
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
    const componentPath = path.join(config.componentsPath, `${componentName}.tsx`);
    const cssPath = path.join(config.componentsPath, `${componentName}.css`);
    
    if (!fs.existsSync(componentPath)) {
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
  // In a real implementation, this would fetch from a remote registry
  // For now, we'll use a local registry
  return {
    version: '1.0.0',
    categories: [
      { id: 'basic', name: 'Basic Components' },
      { id: 'layout', name: 'Layout Components' },
      { id: 'extended', name: 'Extended Components' },
      { id: 'composite', name: 'Composite Components' }
    ],
    components: [
      {
        name: 'Button',
        category: 'basic',
        description: 'Interactive button component',
        version: '1.0.0',
        aliases: ['btn'],
        dependencies: [],
        files: [
          {
            name: 'Button.tsx',
            content: '// Button component content will be fetched from registry'
          }
        ]
      },
      {
        name: 'Card',
        category: 'basic',
        description: 'Flexible card container',
        version: '1.0.0',
        dependencies: [],
        files: [
          {
            name: 'Card.tsx',
            content: '// Card component content'
          }
        ]
      },
      {
        name: 'Typography',
        category: 'basic',
        description: 'Text styling component',
        version: '1.0.0',
        dependencies: [],
        files: [
          {
            name: 'Typography.tsx',
            content: '// Typography component content'
          }
        ]
      },
      {
        name: 'ContentCard',
        category: 'extended',
        description: 'Content display cards',
        version: '1.0.0',
        aliases: ['content-card', 'contentcard'],
        dependencies: ['Card', 'Typography'],
        files: [
          {
            name: 'ContentCard.tsx',
            content: '// ContentCard component content'
          },
          {
            name: 'ContentCard.css',
            content: '// ContentCard styles'
          }
        ]
      }
    ]
  };
}

async function createBaseFiles(config) {
  // Create utils file
  const utilsContent = `
import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
`;

  const utilsPath = path.join(config.componentsPath, '../lib/utils.ts');
  await fs.ensureDir(path.dirname(utilsPath));
  await fs.writeFile(utilsPath, utilsContent);

  // Create index file
  const indexContent = `
// SparkUI Components
// This file is automatically managed by the SparkUI CLI

export * from './lib/utils';
`;

  const indexPath = path.join(config.componentsPath, 'index.ts');
  await fs.writeFile(indexPath, indexContent);
}

async function updateIndex(componentPath, component) {
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

async function removeFromIndex(componentPath, componentName) {
  const indexPath = path.join(componentPath, 'index.ts');
  
  if (fs.existsSync(indexPath)) {
    let indexContent = await fs.readFile(indexPath, 'utf8');
    const lines = indexContent.split('\n');
    const filteredLines = lines.filter(line => !line.includes(`${componentName}`));
    await fs.writeFile(indexPath, filteredLines.join('\n'));
  }
}

async function getInstalledComponents(config) {
  const componentPath = config.componentsPath;
  const files = await fs.readdir(componentPath);
  const components = files
    .filter(file => file.endsWith('.tsx') && file !== 'index.tsx')
    .map(file => ({
      name: path.basename(file, '.tsx'),
      version: '1.0.0' // In real implementation, this would be read from component metadata
    }));
  
  return components;
}

// Error handling
process.on('uncaughtException', (error) => {
  console.error(chalk.red('An unexpected error occurred:'));
  console.error(error.message);
  process.exit(1);
});

program.parse();
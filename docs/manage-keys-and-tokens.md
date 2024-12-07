# Securely Managing API Keys and Access Tokens in a React Nx Monorepo

Managing sensitive information, such as API keys and access tokens, in a React application within an Nx monorepo requires careful handling to maintain security. Here's a comprehensive guide to managing secrets securely:

## Table of Contents

1. [Use Environment Variables](#1-use-environment-variables)
2. [Create Environment-Specific .env Files](#2-create-environment-specific-env-files)
3. [Add .env Files to .gitignore](#3-add-env-files-to-gitignore)
4. [Load Environment Variables in Your Application](#4-load-environment-variables-in-your-application)
5. [Configure Environment Variables in Deployment Platforms](#5-configure-environment-variables-in-deployment-platforms)
6. [Use Nx for Environment Management](#6-use-nx-for-environment-management)
7. [Use GitHub Secrets for Actions](#7-use-github-secrets-for-actions)
8. [Regularly Rotate Secrets](#8-regularly-rotate-secrets)
9. [Educate Collaborators](#9-educate-collaborators)

## 1. Use Environment Variables

Storing sensitive data in environment variables keeps them separate from your codebase, enhancing security and flexibility. This approach allows you to configure your application for different environments without altering the code.

## 2. Create Environment-Specific .env Files

In the root directory of your Nx workspace, create environment-specific .env files to store your environment variables:

```env
# .env.development
REACT_APP_API_KEY=your_development_api_key
```

```env
# .env.production
REACT_APP_API_KEY=your_production_api_key
```

Replace your_development_api_key and your_production_api_key with your actual credentials.

## 3. Add .env Files to .gitignore

To prevent the .env files from being tracked by Git and exposed in your repository, add them to your .gitignore file:

```bash
# Environment variables
.env*
```

This ensures that sensitive information remains local and isn't pushed to version control.

## 4. Load Environment Variables in Your Application

Ensure your application is configured to load variables from the .env files. Nx, when used with React, typically leverages tools like Webpack, which can be configured to use environment variables. You can use packages like dotenv to load these variables:

```javascript
require('dotenv').config();
```

In your React components, access the environment variables using process.env:

```javascript
const apiKey = process.env.REACT_APP_API_KEY;
```

## 5. Configure Environment Variables in Deployment Platforms

For production deployments, set environment variables directly in your hosting platform's settings (e.g., Vercel, Netlify) to avoid including sensitive data in your codebase.

## 6. Use Nx for Environment Management

Nx provides capabilities to manage different environments. You can define environment-specific configurations in your workspace.json or project.json files and use file replacements to include environment-specific settings during the build process.

## 7. Use GitHub Secrets for Actions

If you're using GitHub Actions for CI/CD pipelines, store sensitive information as encrypted secrets:

Navigate to your repository on GitHub.
Go to Settings > Secrets and variables > Actions.
Click New repository secret and add your credentials.
In your workflow file, reference these secrets:

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Build project
        env:
          REACT_APP_API_KEY: ${{ secrets.REACT_APP_API_KEY }}
        run: |
          # Your build commands here
```

This approach keeps your credentials secure during automated processes.

## 8. Regularly Rotate Secrets

Periodically update and rotate your API keys and access tokens to minimize the risk of unauthorized access.

## 9. Educate Collaborators

Ensure all team members understand the importance of keeping environment variables and sensitive information out of the codebase and public repositories.

By following these practices, you can securely manage sensitive information in your React application within an Nx monorepo, maintaining both security and flexibility across different environments.

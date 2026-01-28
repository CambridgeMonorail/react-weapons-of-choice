# Integrating Shared and Custom Tailwind CSS Themes in a New Nx Monorepo Application

This guide outlines the steps to incorporate a shared Tailwind CSS configuration and Shadcn theme into a new application within your Nx monorepo. Additionally, it explains how to customize the theme for individual application requirements.

**Note:** The current theme was generated using the Ready.js [Shadcn UI Theme Generator](https://www.readyjs.dev/tools/shadcn-ui-theme-generator).

## Table of Contents
1. [Generate the New Application](#1-generate-the-new-application)
2. [Set Up Tailwind CSS in the New Application](#2-set-up-tailwind-css-in-the-new-application)
3. [Extend the Shared Tailwind Configuration](#3-extend-the-shared-tailwind-configuration)
4. [Import the Shared Preflight and Shadcn Theme Styles](#4-import-the-shared-preflight-and-shadcn-theme-styles)
5. [Customize the Application's Theme](#5-customize-the-applications-theme)
6. [Verify the Integration](#6-verify-the-integration)

## 1. Generate the New Application

Use the Nx CLI to create a new React application:

```bash
nx generate @nrwl/react:application new-app
```

## 2. Set Up Tailwind CSS in the New Application

Initialize Tailwind CSS for your new application:

```bash
nx generate @nrwl/react:setup-tailwind --project=new-app
```

This command configures Tailwind CSS by creating a tailwind.config.js file and adding the necessary styles to your application's stylesheet.

## 3. Extend the Shared Tailwind Configuration

Modify the tailwind.config.js in your new application to extend the shared configuration:

```javascript
// apps/new-app/tailwind.config.js
const { join } = require('path');

module.exports = {
  presets: [require('../../libs/common-tailwind/tailwind.config.js')],
  content: [
    join(__dirname, 'src/**/*.{js,jsx,ts,tsx,html}'),
    // Automatically include content from dependencies
    ...require('@nrwl/react/tailwind').createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      // Application-specific theme extensions
    },
  },
  plugins: [
    // Application-specific plugins
  ],
};
```

This setup ensures that your application inherits the base Tailwind CSS settings from the shared common-tailwind library.

## 4. Import the Shared Preflight and Shadcn Theme Styles

In your application's main stylesheet (e.g., styles.css), import the shared Preflight and Shadcn theme styles:

```css
/* apps/new-app/src/styles.css */

/* Include Tailwind's base layer to apply Preflight styles */
@import 'libs/shared/common-tailwind/src/lib/preflight.css';

/* Include Tailwind's components and utilities layers */
@tailwind components;
@tailwind utilities;

/* Include the custom Shadcn theme styles */
@import 'libs/shared/common-tailwind/src/lib/shadcn-theme.css';

/* Additional application-specific styles */
```

Additionally, configure the Vite CSS preprocessor options to ensure proper handling of the imported styles:

```javascript
// apps/new-app/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `
          @import 'libs/shared/common-tailwind/src/lib/preflight.css';
          @import 'libs/shared/common-tailwind/src/lib/shadcn-theme.css';
        `,
      },
    },
  },
});
```

This structure allows you to include both the Preflight styles and the custom Shadcn theme. If you prefer to exclude either, simply omit the corresponding @import statement.

## 5. Customize the Application's Theme

To tailor the theme to your application's specific needs, modify the theme.extend section in your application's tailwind.config.js:

```javascript
// apps/new-app/tailwind.config.js
module.exports = {
  // ...existing configuration
  theme: {
    extend: {
      colors: {
        // Custom color definitions
      },
      spacing: {
        // Custom spacing values
      },
      // Additional customizations
    },
  },
  // ...existing configuration
};
```

These extensions will override or add to the shared theme settings, allowing for application-specific theming.

## 6. Verify the Integration

Run the Application: Start your new application to ensure that both the shared and custom Tailwind CSS configurations are applied correctly.
Test Components: Check that Shadcn components render with the expected styles, confirming successful integration and customization.
By following these steps, you can seamlessly integrate a shared Tailwind CSS configuration and Shadcn theme into any new application within your Nx monorepo. This approach promotes consistency across projects while allowing for individual customization to meet specific application requirements.

## 7. Update Documentation

Update the documentation to reflect any theming changes related to the `shell` library components.

```markdown
- The `Layout` component and all related components are now moved to the `shell` library.
  - The `Layout` component is now located in `libs/shell/src/lib/Layout.tsx`.
  - The `AppSidebar` component is now located in `libs/shell/src/lib/AppSidebar.tsx`.
  - The `SidebarProvider`, `SidebarInset`, and `SidebarTrigger` components are now located in `libs/shell/src/lib/sidebar`.
  - The `Breadcrumb` components remain in `libs/shadcnui/src/components/ui/breadcrumb.tsx`.
  - The `Separator` component remains in `libs/shadcnui/src/components/ui/separator.tsx`.
- The imports in the `Layout` component are updated to reference components from the `shell` library.
```

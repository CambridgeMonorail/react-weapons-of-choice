# Understanding the Project Structure

This document provides an overview of the project structure for the React Weapons of Choice (RWOC) monorepo. The project is organized using the Nrwl Nx monorepo structure, which allows for efficient management of multiple applications and libraries within a single repository.

## Project Structure

The project is organized into several key directories:

### `apps`

The `apps` directory contains the main applications within the monorepo. Each application is organized into its own subdirectory. For example:

- `client`: The main client application showcasing the features of the RWOC monorepo.

### `libs`

The `libs` directory contains reusable libraries that can be shared across multiple applications. Each library is organized into its own subdirectory. For example:

- `component-library`: A collection of reusable UI components.
- `shadcnui`: UI components styled with Shadcn UI.
- `common-tailwind`: Common Tailwind CSS configurations and utility classes.
- `landing`: Components and sections for landing pages.
- `shell`: Layout components and utilities for the overall structure of the application.

### `tools`

The `tools` directory contains custom scripts and tools used for managing the monorepo.

### Key Files

- `workspace.json`: The main configuration file for the Nx workspace.
- `nx.json`: Contains Nx-specific configuration options.
- `tsconfig.base.json`: The base TypeScript configuration file shared across the monorepo.
- `package.json`: The main package file for managing dependencies and scripts.

## Example Directory Structure

```
/apps
  /client
    /src
      /app
        /components
        /pages
      /assets
      index.html
      main.tsx
/libs
  /component-library
    /src
      /components
  /shadcnui
    /src
      /components
  /common-tailwind
    /src
      preflight.css
      shadcn-theme.css
  /landing
    /src
      /sections
  /shell
    /src
      /layout
/tools
  custom-script.js
/workspace.json
nx.json
tsconfig.base.json
package.json
```

## Conclusion

The RWOC monorepo is organized using the Nrwl Nx structure, which allows for efficient management of multiple applications and libraries. By understanding the project structure, you can navigate the codebase more effectively and contribute to the project with ease.

# GitHub Actions Workflows Documentation

## CI Workflow

### Purpose

This workflow is set up for **Continuous Integration (CI)**, automatically running tests and validations on code changes pushed to the main branch. It ensures code quality and functionality before merging.

### Triggers

- **Push** events on the `main` branch.
- **Pull requests** targeting the `main` branch.
- **Manual trigger** via `workflow_dispatch`.

### Key Steps

1. **Setup**:
   - Checks out the repository.
   - Sets up Node.js v22 and installs `pnpm` (version 9.12.2).
2. **Dependencies**:
   - Installs all dependencies and additional testing tools (Cypress and Playwright).
3. **Nx Tasks**:
   - Executes `pnpm exec nx affected` commands for `lint`, `test`, `build`, and `e2e` to validate affected files.

### Usage

This workflow runs on every push and pull request to `main`, helping developers catch issues early in the development process.

---

## Deploy to GitHub Pages Workflow

### Purpose

This workflow automates the **deployment** of the built application to **GitHub Pages**, updating the hosted application on every relevant change.

### Triggers

- **Push** events on the `main` branch.
- **Manual trigger** via `workflow_dispatch`.

### Key Steps

1. **Setup**:
   - Checks out the repository.
   - Sets up Node.js v22 and installs `pnpm`.
2. **Build**:
   - Runs `pnpm exec nx build riffroll --prod` to generate production-ready files.
3. **Deploy**:
   - Publishes the build output to GitHub Pages using the `actions/deploy-pages@v3` action.

### Usage

This workflow keeps the public site updated by deploying the latest build to GitHub Pages each time changes are pushed to `main`.

---

## Refactoring Impact on CI/CD Workflows

### Purpose

This section documents the impact of refactoring the `Layout` component and related components to the `shell` library on the CI/CD workflows.

### Key Changes

1. **Component Relocation**:
   - The `Layout` component and all related components are now moved to the `shell` library.
     - The `Layout` component is now located in `libs/shell/src/lib/Layout.tsx`.
     - The `AppSidebar` component is now located in `libs/shell/src/lib/AppSidebar.tsx`.
     - The `SidebarProvider`, `SidebarInset`, and `SidebarTrigger` components are now located in `libs/shell/src/lib/sidebar`.
     - The `Breadcrumb` components remain in `libs/shadcnui/src/components/ui/breadcrumb.tsx`.
     - The `Separator` component remains in `libs/shadcnui/src/components/ui/separator.tsx`.
   - The imports in the `Layout` component are updated to reference components from the `shell` library.

2. **CI Workflow**:
   - Ensure that the CI workflow includes the new `shell` library in the affected tasks.
   - Update the `pnpm exec nx affected` commands to include the `shell` library.

3. **Deploy Workflow**:
   - Verify that the build process includes the `shell` library components.
   - Ensure that the deployment to GitHub Pages reflects the changes in the `shell` library.

### Usage

These changes ensure that the CI/CD workflows are updated to accommodate the refactoring of the `Layout` component and related components to the `shell` library, maintaining code quality and automated publishing to GitHub Pages.

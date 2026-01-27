# React Weapons of Choice

Modern React development showcase and boilerplate. Nx + pnpm monorepo demonstrating best practices with React 19, Tailwind v4, shadcn/ui, and Vite.

## Project Purpose

This repository serves as:
- **Educational resource** - Demonstrating modern React development patterns
- **Boilerplate template** - Starting point for new React projects
- **Component library** - Reusable shadcn/ui components organized by category
- **Living documentation** - Real-world examples of best practices

## Global TypeScript Conventions

- Use strict TypeScript with no `any` (use `unknown` with type guards)
- Prefer `type` for object shapes, unions, intersections
- Use `interface` only when extending or merging definitions
- Named exports only (no default exports)
- Colocate types with usage or in adjacent `*.types.ts` files

## Global React Conventions

- Use functional components exclusively
- Import hooks directly: `import { FC, useState } from 'react'` not `React.FC`
- Use hooks for state management: `useState`, `useMemo`, `useEffect`, `useCallback`
- Write JSDoc comments for public component APIs
- Ensure ARIA attributes, keyboard navigation, and focus management

## Global Testing Expectations

- Write tests for all new features and bug fixes
- Vitest for unit and component tests
- Use `@testing-library/react` for component tests
- Colocate tests with implementation: `Component.tsx` + `Component.test.tsx`
- Minimum 80% coverage for new code
- Playwright E2E tests for critical user flows in `apps/client`

## Global Accessibility Baseline

- All interactive elements must be keyboard accessible
- Form inputs require associated labels
- Use semantic HTML elements (button, nav, main, etc.)
- Maintain logical focus order
- Provide text alternatives for non-text content
- Ensure sufficient color contrast (WCAG AA minimum)

## Nx and Monorepo Guidance

- **Use Nx affected commands to determine impacted scope** - do not guess which apps are affected
  - Commands: `pnpm run build:affected`, `pnpm run test:affected`, `pnpm run lint:affected`
- Prefer existing pnpm scripts defined in `package.json` - do not invent new scripts
- Avoid broad refactors unless explicitly requested
- Use workspace imports for cross-project: `@rwoc/shadcnui`, `@rwoc/shell`, `@rwoc/landing`
- Use relative imports within same project: `../../components/Button`
- Apps import from libs; libs never import from apps
- Path mappings in `tsconfig.base.json`

## Library Structure

- **shadcnui** - Core shadcn/ui components organized by category
  - Data Display (avatar, badge, calendar, card, carousel, chart, progress, skeleton, table)
  - Feedback (alert, alert-dialog, dialog, drawer, hover-card, popover, toast, tooltip)
  - Input Controls (button, checkbox, input, radio, select, slider, switch, textarea, toggle)
  - Layout (aspect-ratio, collapsible, resizable, scroll-area, separator, sheet, sidebar)
  - Navigation (accordion, breadcrumb, command, context-menu, dropdown-menu, menubar, navigation-menu, pagination, tabs)
  - Utilities (form, label, sonner)
  
- **shadcnui-blocks** - Higher-level composed components (action-buttons, charts, features, hero, pricing, stats, etc.)
- **shell** - Application shell components (layouts, navigation, sidebar)
- **landing** - Landing page sections (hero, features, CTA, footer, etc.)
- **common-tailwind** - Shared Tailwind v4 configuration and theme

## Technology Stack

- **React** 19.0.0 - Latest stable
- **TypeScript** 5.9.3 - Strict mode
- **Nx** 22.4.1 - Monorepo management
- **Vite** 7.1.3 - Build tool
- **Vitest** 4.0.0 - Unit testing
- **Playwright** 1.55.1 - E2E testing
- **Tailwind CSS** 4.1.18 - Utility-first CSS (v4 with CSS-first config)
- **shadcn/ui** - Latest component library
- **Storybook** 10.2.0 - Component documentation
- **pnpm** 10.27.2 - Package manager

## App-Specific Rules

App-specific conventions, patterns, and tooling guidance are in `.github/instructions/*.instructions.md` with `applyTo` scoping.

Currently available:
- Testing and quality workflows (`testing-and-quality.instructions.md`)
- UI and accessibility patterns (`ui-and-accessibility.instructions.md`)

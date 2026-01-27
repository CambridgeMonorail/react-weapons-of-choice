---
name: 'Repository Basics'
description: 'Fundamental monorepo conventions and contribution guidelines'
applyTo: 'apps/**/*.{ts,tsx,js,jsx}, libs/**/*.{ts,tsx,js,jsx}'
---

# Repository Basics

## Shared Code Location

- **shadcnui** - Core shadcn/ui components organized by category (data-display, feedback, input-controls, layout, navigation, utilities)
- **shadcnui-blocks** - Higher-level composed components (charts, features, pricing, stats, etc.)
- **shell** - Application shell components (layouts, navigation, sidebar, nav-user, team-switcher)
- **landing** - Landing page sections (hero, features, CTA, about, footer, header, steps)
- **common-tailwind** - Shared Tailwind v4 configuration, theme, and CSS utilities
- **storybook-host** - Storybook configuration and documentation

## Naming and Folder Conventions

- Component files: `ComponentName.tsx` + `ComponentName.test.tsx` colocated
- Type files: `feature.types.ts` adjacent to usage
- Hooks: `useFeatureName.ts` in `hooks/` folder
- Utils: `featureUtils.ts` in `utils/` folder
- Constants: `constants.ts` or `feature.constants.ts`
- Named exports only - no default exports
- Story files: `ComponentName.stories.tsx` colocated

## Component Organization in shadcnui

Components are organized by category in subdirectories:
- `data-display/` - Visual presentation of data (avatar, badge, calendar, card, chart, etc.)
- `feedback/` - User feedback mechanisms (alert, dialog, toast, tooltip, etc.)
- `input-controls/` - Form elements and inputs (button, checkbox, input, select, etc.)
- `layout/` - Layout and structural components (aspect-ratio, resizable, scroll-area, etc.)
- `navigation/` - Navigation elements (breadcrumb, command, dropdown-menu, tabs, etc.)
- `utilities/` - Helper components (form, label, sonner)

## What Makes a Good PR

- **Scope:** One logical change per PR (avoid mixing features, refactors, and fixes)
- **Size:** Keep PRs reviewable (< 500 lines changed when possible)
- **Tests:** Include tests for new features and bug fixes
- **Validation:** Run `typecheck`, `lint`, and `test` commands before pushing
- **Description:** Explain what changed and why
- **Conventional Commits:** Use conventional commit format (feat:, fix:, docs:, etc.)
- **No breaking builds:** Never commit code that fails validation
- **Affected projects:** Use Nx affected commands to validate only changed projects

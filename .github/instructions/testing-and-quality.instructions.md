---
name: 'Testing and Quality Standards'
description: 'Test frameworks, patterns, and validation workflows'
applyTo: '**/*.test.{ts,tsx}, **/*.spec.{ts,tsx}, **/playwright/**/*.{ts,tsx}'
---

# Testing and Quality Standards

## Test Frameworks by Project

- **Vitest:** All projects except `control-panel-ui`
  - Configuration: `vitest.workspace.ts`
  - Run: `pnpm -w run test:<project>`
- **Jest:** Only `control-panel-ui`
  - Configuration: `apps/control-panel-ui/jest.config.ts`
  - Run: `pnpm -w run test:control-panel-ui`
- **Playwright:** E2E tests for `client` app
  - Tests in `apps/client-e2e/`
  - Run: `pnpm -w run test:mc-ui:e2e`
- **Storybook:** Component visual testing
  - Stories in `libs/storybook-host/`
  - Run: `pnpm -w run start:storybook`

## Preferred Testing Patterns

- **Unit tests:** Test individual functions and components in isolation
- **Integration tests:** Test component interactions and data flow
- **E2E tests:** Test critical user flows end-to-end
- Use `@testing-library/react` for component tests
- Use `@testing-library/user-event` for simulating user interactions
- Mock external dependencies (APIs, services)
- Keep tests fast and focused

## Running Smallest Useful Checks First

**For a single file change:**

1. Run TypeScript check: `pnpm -w run typecheck:<project>`
2. Run linter: `pnpm -w run lint:<project>`
3. Run tests: `pnpm -w run test:<project>`

**For multiple project changes:**

1. Use Nx affected: `pnpm -w run typecheck:affected`
2. Then: `pnpm -w run lint:affected`
3. Then: `pnpm -w run test:affected`

**Before commit:**

```bash
pnpm -w run commit-checks  # Runs build, test, lint, typecheck on affected
```

## Existing package.json Scripts

Use existing scripts - do not invent new ones:

- `pnpm -w run validate:control-panel-ui` - Full validation (test, lint, typecheck, build)
- `pnpm -w run validate:player-cloud-control` - Full validation for mobile
- Individual project scripts: `typecheck:<project>`, `lint:<project>`, `test:<project>`
- Affected scripts: `build:affected`, `test:affected`, `lint:affected`, `typecheck:affected`

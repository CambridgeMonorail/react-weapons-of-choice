---
name: 'Testing and Quality Standards'
description: 'Test frameworks, patterns, and validation workflows'
applyTo: '**/*.test.{ts,tsx}, **/*.spec.{ts,tsx}, **/playwright/**/*.{ts,tsx}'
---

# Testing and Quality Standards

## Test Frameworks by Project

- **Vitest:** All projects
  - Configuration: `vitest.workspace.ts`
  - Run: `pnpm test:<project>`
- **Playwright:** E2E tests for `client` app
  - Tests in `apps/client-e2e/`
  - Run: `pnpm test:client:e2e`
- **Storybook:** Component visual testing
  - Stories in `libs/storybook-host/`
  - Run: `pnpm serve:storybook`

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
type-check:<project>`
2. Run linter: `pnpm lint:<project>`
3. Run tests: `pnpm test:<project>`

**For multiple project changes:**

1. Use Nx affected: `pnpm type-check:affected`
2. Then: `pnpm lint:affected`
3. Then: `pnpm test:affected`

**Before commit:**

```bash
pnpm run validate  # Runs format, lint, type-check, test, build
```

## Existing package.json Scripts

Use existing scripts - do not invent new ones:

- `pnpm run validate` - Full validation pipeline (format, lint, type-check, test, build)
- `pnpm validate:client` - Validate client app only
- Individual project scripts: `type-check:<project>`, `lint:<project>`, `test:<project>`
- Affected scripts: `build:affected`, `test:affected`, `lint:affected`, `type-
````prompt
---
name: Validate Client App
description: Run full validation pipeline for the client React SPA
scope: 'apps/client'
---

# Validate Client App

Run the full validation pipeline for the client React SPA app.

## Steps

1. **Lint**: Check for code quality issues
   ```bash
   pnpm nx lint client
   ```

2. **Type Check**: Verify TypeScript types are correct
   ```bash
   pnpm nx type-check client
   ```

3. **Test**: Run unit and component tests
   ```bash
   pnpm nx test client
   ```

4. **Build**: Ensure production build succeeds
   ```bash
   pnpm nx build client
   ```

## Success Criteria

All four steps must pass with:
- Zero lint errors or warnings
- Zero TypeScript errors
- All tests passing
- Successful production build

If any step fails, report the specific errors and suggest fixes.

## Performance Expectations

- Build time: < 30 seconds
- Test suite: < 10 seconds
- Bundle size: < 500KB (gzipped)

````

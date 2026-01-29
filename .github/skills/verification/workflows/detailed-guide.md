# Verification Skill

This skill defines what evidence we expect in pull requests to demonstrate that changes work correctly and meet quality standards.

## Core Principle

**Prove your changes work before asking for review.**

Verification evidence gives reviewers confidence that:
- The code works as intended
- Nothing broke
- Quality standards are met
- The change is ready to merge

## Required Verification

Every PR must include evidence that the following checks passed:

### 1. Format Check

**Command:**
```bash
pnpm format:check
# or
pnpm format  # Auto-fixes formatting issues
```

**Purpose:** Ensures consistent code formatting

**Expected Result:**
```
✓ All files are formatted correctly
```

### 2. Lint Check

**Command:**
```bash
pnpm lint:affected  # Faster, lints only changed projects
# or
pnpm lint:all       # Comprehensive, lints everything
```

**Purpose:** Catches code quality issues, potential bugs, and style violations

**Expected Result:**
```
✓ Lint passed for all affected projects
  - client
  - shadcnui
```

### 3. Type Check

**Command:**
```bash
pnpm type-check:affected  # Faster, checks only changed projects
# or
pnpm type-check:all       # Comprehensive, checks everything
```

**Purpose:** Validates TypeScript types, catches type errors

**Expected Result:**
```
✓ Type check passed for all affected projects
  - client
  - shadcnui
```

### 4. Unit Tests

**Command:**
```bash
pnpm test:affected  # Faster, tests only changed projects
# or
pnpm test:all       # Comprehensive, runs all tests
```

**Purpose:** Validates functionality, catches regressions

**Expected Result:**
```
✓ Tests passed for all affected projects
  - client: 127 tests (23 suites)
  - shadcnui: 89 tests (15 suites)

Coverage:
  - Statements: 85.2%
  - Branches: 82.7%
  - Functions: 88.1%
  - Lines: 84.9%
```

### 5. Build Check (Recommended)

**Command:**
```bash
pnpm build:affected  # Build only changed projects
# or
pnpm build:all       # Build everything
```

**Purpose:** Ensures code compiles and bundles correctly

**Expected Result:**
```
✓ Build succeeded for all affected projects
  - client: 2.3 MB (min+gzip: 156 KB)
  - shadcnui: 487 KB (min+gzip: 89 KB)
```

## The Verification Command

Instead of running each command separately, use the unified verification command:

```bash
pnpm verify
```

This command runs all standard checks in sequence:
1. Format check
2. Lint (affected)
3. Type check (affected)
4. Tests (affected)

**Note:** The exact implementation of `pnpm verify` may vary. Check `package.json` for the current definition.

## PR Verification Evidence Template

Copy this template into your PR description:

```markdown
## Verification

```bash
pnpm verify
```

**Output:**
```
✓ Format check passed
✓ Lint passed (affected: client, shadcnui)
✓ Type check passed (affected: client, shadcnui)
✓ Tests passed (affected: client, shadcnui)
  - 216 tests passed
  - Coverage: 84.3% statements
```

**Manual Testing:**
- [Describe what you tested manually]
- [Include any edge cases tested]

**Environment:**
- Node: v20.11.0
- pnpm: 10.27.2
- OS: Windows 11 / macOS 14 / Ubuntu 22.04
```

## Additional Evidence Requirements

### For UI Changes

Include:

**1. Screenshots**
```markdown
## Visual Changes

### Before
![Before state](./screenshots/before.png)

### After
![After state with new feature](./screenshots/after.png)
```

**2. Interaction Videos (if applicable)**
```markdown
### Interaction Demo

[Link to video or GIF showing the interaction]
```

**3. Accessibility Testing**
```markdown
## Accessibility Verification

Manual testing completed:
- ✅ Keyboard navigation (Tab, Shift+Tab, Enter, Escape, Arrow keys)
- ✅ Focus indicators visible and clear
- ✅ Screen reader tested (NVDA/JAWS/VoiceOver)
- ✅ Color contrast verified (WCAG AA minimum)
- ✅ Semantic HTML used (button, nav, main, etc.)
- ✅ ARIA labels where needed

Storybook accessibility panel:
- ✅ No violations detected
```

**4. Responsive Testing (if layout changes)**
```markdown
## Responsive Testing

Tested at breakpoints:
- ✅ Mobile (375px)
- ✅ Tablet (768px)
- ✅ Desktop (1024px)
- ✅ Large desktop (1920px)

[Screenshots at each breakpoint]
```

### For Performance Changes

Include:

**Lighthouse Scores (if applicable):**
```markdown
## Performance Impact

### Before
- Performance: 87
- Accessibility: 100
- Best Practices: 92
- SEO: 100

### After
- Performance: 94 (+7)
- Accessibility: 100
- Best Practices: 92
- SEO: 100
```

**Bundle Size Impact:**
```markdown
## Bundle Size

| File | Before | After | Delta |
|------|--------|-------|-------|
| main.js | 423 KB | 418 KB | -5 KB ✅ |
| vendor.js | 1.2 MB | 1.2 MB | No change |
| Total | 1.6 MB | 1.6 MB | -5 KB |
```

### For Bug Fixes

Include:

**1. Reproduction Steps**
```markdown
## Bug Reproduction

Steps to reproduce original bug:
1. Navigate to Contact Form
2. Fill in all fields correctly
3. Click Submit button
4. ❌ Form fails to submit (bug)

With fix:
1. Navigate to Contact Form
2. Fill in all fields correctly
3. Click Submit button
4. ✅ Form submits successfully
```

**2. Root Cause Explanation**
```markdown
## Root Cause

The validation state was not updating when form data changed due to a
stale closure in the validation logic that captured the initial formData 
value.

See [Systematic Debugging](../../systematic-debugging/workflows/detailed-guide.md) 
for the full investigation process.
```

**3. Test Coverage**
```markdown
## Test Added

Added regression test that would have caught this bug:

```typescript
it('should update validation state when form data changes', () => {
  const { result } = renderHook(() => useFormValidation(initialData));
  
  act(() => {
    result.current.updateField('email', 'test@example.com');
  });
  
  expect(result.current.isValid).toBe(true); // Previously failed
});
```
```

### For Refactoring

Include:

**1. Behavior Unchanged**
```markdown
## Refactoring Verification

- ✅ All existing tests pass (no changes needed)
- ✅ Behavior is unchanged (black-box testing)
- ✅ API surface unchanged
- ✅ No breaking changes
```

**2. Improvement Metrics**
```markdown
## Improvements

### Code Quality
- Reduced cyclomatic complexity from 15 to 8
- Eliminated code duplication (3 instances consolidated)
- Improved type safety (added generic constraints)

### Performance
- Reduced render count from 4 to 2 per update
- Memoized expensive calculations

### Maintainability  
- Extracted 3 reusable hooks
- Added JSDoc comments to public APIs
- Improved error messages
```

## Verification Workflow

### Step-by-Step Process

1. **Make your changes**
   ```bash
   # Edit files
   ```

2. **Run tests locally**
   ```bash
   pnpm test:affected
   ```

3. **Fix any failures**
   ```bash
   # Address test failures
   # Update tests if behavior intentionally changed
   ```

4. **Run full verification**
   ```bash
   pnpm verify
   ```

5. **Manual testing**
   ```bash
   # For client changes
   pnpm serve:client
   
   # Test in browser
   # Check console for errors
   # Test edge cases
   ```

6. **Capture evidence**
   ```bash
   # Take screenshots
   # Record videos if needed
   # Copy verification output
   ```

7. **Include in PR description**
   ```markdown
   ## Verification
   [Paste evidence here]
   ```

## Common Verification Failures

### ❌ "Tests pass on my machine"

**Problem:** Doesn't prove tests pass in CI

**Solution:** Include actual verification output
```markdown
## Verification

```bash
pnpm verify
```

Output:
```
✓ All checks passed
```
```

### ❌ "I tested it manually"

**Problem:** No evidence, not reproducible

**Solution:** Describe what you tested and results
```markdown
## Manual Testing

Tested scenarios:
1. Empty form → Shows validation errors ✅
2. Partial form → Submit disabled ✅
3. Complete form → Submits successfully ✅
4. Network error → Shows error message ✅
```

### ❌ "Looks good to me"

**Problem:** No verification at all

**Solution:** Actually run the checks and provide evidence

### ❌ "I'll fix that later"

**Problem:** PR not ready for review

**Solution:** Fix issues before requesting review

## Edge Cases to Test

Depending on the change, consider testing:

### For Form Components
- Empty/initial state
- Partially filled
- Fully valid
- Invalid inputs
- Disabled state
- Required fields
- Max length limits
- Special characters
- Copy/paste behavior

### For Data Loading
- Loading state
- Success state
- Error state
- Empty data
- Retry behavior
- Concurrent requests

### For Navigation
- Direct URL access
- Back button
- Forward button
- Refresh
- Deep linking

### For Authentication
- Logged in
- Logged out
- Session expired
- Invalid credentials
- Token refresh

## Tools for Evidence Collection

### Screenshots
- **Windows:** Windows + Shift + S
- **macOS:** Cmd + Shift + 4
- **Linux:** Spectacle, Flameshot
- **Browser:** DevTools screenshot feature

### Videos/GIFs
- **ScreenToGif** (Windows)
- **Kap** (macOS)
- **Peek** (Linux)
- **Loom** (Cross-platform)

### Browser DevTools
- Network tab for API calls
- Console for errors/warnings
- Performance tab for profiling
- Lighthouse for scores
- Accessibility audit

## Verification in CI

While local verification is required for PRs, CI will also run:

- All checks that `pnpm verify` runs
- Additional E2E tests (Playwright)
- Build verification
- Deployment preview

**Your local verification should match CI results.**

If CI fails but local passes:
1. Pull latest from main
2. Rebase your changes
3. Run verification again
4. Check for environment differences

## Quick Reference

### Minimal Evidence (All PRs)

```markdown
## Verification

```bash
pnpm verify
```

✓ All checks passed
```

### With Manual Testing

```markdown
## Verification

```bash
pnpm verify
```

✓ All checks passed

## Manual Testing

Tested:
- [Scenario 1] ✅
- [Scenario 2] ✅
- [Edge case] ✅
```

### With UI Changes

```markdown
## Verification

```bash
pnpm verify
```

✓ All checks passed

## Visual Changes

### Before
![Before](./screenshots/before.png)

### After
![After](./screenshots/after.png)

## Accessibility
- ✅ Keyboard navigation
- ✅ Screen reader tested
- ✅ Color contrast verified
```

## Integration with Other Skills

- **[Planning](planning.md)** - Plans include verification steps
- **[Code Review Ready](code-review-ready.md)** - Verification evidence required
- **[Systematic Debugging](systematic-debugging.md)** - Verification proves bugs are fixed

## Remember

**No verification = No confidence = Slow review = Delayed merge**

Invest 5-10 minutes to provide solid evidence, and your PR will:
- Be reviewed faster
- Have fewer questions
- Get merged sooner
- Have fewer bugs

**Make verification a habit, not an afterthought.**

**Last Updated:** 2026-01-28

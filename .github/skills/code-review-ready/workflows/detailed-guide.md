# Code Review Ready Skill

This skill defines how to make your changes easy to review, increasing the likelihood of quick approval and reducing back-and-forth iterations.

## Core Principle

**Make it easy for reviewers to understand and validate your changes.**

A reviewable PR is:
- Focused on one logical change
- Small enough to review in one sitting (< 30 minutes)
- Well-documented with context and reasoning
- Easy to validate with clear testing notes

## The Reviewable PR Checklist

### ✅ 1. Keep PRs Small

**Target:** < 500 lines changed (additions + deletions)

**Why:**
- Easier to review thoroughly
- Faster to get feedback
- Less likely to have bugs slip through
- Easier to revert if needed

**How:**
- Break large features into multiple PRs
- Create PRs for incremental progress
- Separate refactoring from feature work
- Use feature flags for incomplete work

**Example:**

❌ **Too Large:**
```
feat: add complete e-commerce checkout flow

Files changed: 47 files
+2,341 −856 lines

- New cart component
- Payment integration
- Order confirmation
- Email notifications
- Database migrations
- Admin dashboard updates
```

✅ **Better (Split into 4 PRs):**
```
PR #1: feat(client): add cart component and state management
Files changed: 8 files, +342 −12

PR #2: feat(client): integrate Stripe payment processing
Files changed: 6 files, +198 −8

PR #3: feat(server): add order confirmation and email
Files changed: 5 files, +156 −22

PR #4: feat(admin): add order management dashboard
Files changed: 12 files, +287 −45
```

### ✅ 2. One Logical Change Per PR

**Principle:** Each PR should solve one problem or add one feature.

**Why:**
- Clear purpose and scope
- Easier to review the logic
- Easier to test specific functionality
- Simpler to revert if needed

❌ **Anti-pattern (Mixed concerns):**
```
feat: add Select component, fix Button bug, update docs, refactor utils

- Add new Select component
- Fix Button disabled state bug  
- Update README
- Refactor form utilities
- Update dependencies
```

✅ **Good (Focused):**
```
feat(shadcnui): add Select component

- Add Select component with Radix UI
- Include comprehensive tests (>80% coverage)
- Add Storybook stories for all variants
- Export from shadcnui index
```

### ✅ 3. No Drive-By Refactoring

**Rule:** Don't refactor code that's unrelated to your change.

**Why:**
- Mixes concerns and confuses reviewers
- Makes it hard to identify the actual change
- Increases risk of introducing bugs
- Dilutes the PR's purpose

❌ **Drive-by refactoring:**
```diff
// Adding a new feature but also...

- function handleSubmit() {  // Renamed for "consistency"
+ function handleFormSubmit() {
    // ... 200 lines of unrelated changes
  }

- const isReady = checkValidation(); // "Simplified" while here
+ const isValid = validate();
```

✅ **Stay focused:**
```diff
// Only change what's necessary for the feature

  function handleSubmit() {
+   // New feature: Add form analytics
+   trackFormSubmission(formData);
    submitForm(formData);
  }
```

**Exception:** If refactoring is needed, create a separate PR:
1. PR #1: `refactor: improve form validation utility`
2. PR #2: `feat: add form analytics tracking` (depends on #1)

### ✅ 4. Write a Clear PR Description

**Structure:**

```markdown
## Summary

[One paragraph: What changed and why]

## Changes

### Added
- New feature X
- New utility Y

### Changed
- Updated component Z to support...

### Fixed
- Bug in form submission

## Motivation

[Why is this change needed? What problem does it solve?]

## Implementation Details

[Any non-obvious decisions or trade-offs]

## Testing

[How to verify the changes work]

## Screenshots (if UI changes)

[Before/after images]

## Verification

[Evidence that validation passed]
```

### ✅ 5. Include Visual Evidence for UI Changes

**For all UI changes, include:**

**Before/After Screenshots:**
```markdown
## Visual Changes

### Before
![Before](./screenshots/before.png)

### After
![After](./screenshots/after.png)
```

**Videos for Interactions:**
- Animations
- Complex interactions
- Multi-step flows

**Accessibility Testing Notes:**
```markdown
## Accessibility Testing

- ✅ Keyboard navigation tested (Tab, Enter, Escape, Arrows)
- ✅ Screen reader tested with NVDA
- ✅ Color contrast verified (WCAG AA)
- ✅ Focus indicators visible
```

### ✅ 6. Explain Trade-offs

**When there are multiple solutions, explain your choice:**

```markdown
## Implementation Decision

Considered three approaches:

1. **Client-side validation only**
   - Pros: Faster UX, no server round-trip
   - Cons: Can be bypassed, not secure

2. **Server-side validation only**
   - Pros: Secure, single source of truth
   - Cons: Slow feedback, poor UX

3. **Both client and server validation** (chosen)
   - Pros: Fast UX + secure
   - Cons: Duplication of logic
   
Chose #3 because security is critical for payment forms, but we want
good UX. Used Zod schema sharing to minimize duplication.
```

### ✅ 7. Self-Review Before Requesting Review

**Review your own PR first:**

- [ ] Read through the entire diff
- [ ] Check for console.logs or debug code
- [ ] Verify all tests pass
- [ ] Run `pnpm verify`
- [ ] Test manually
- [ ] Check for typos in comments and docs
- [ ] Ensure commit messages follow conventions
- [ ] Verify all acceptance criteria are met

**GitHub Tip:** Review your own PR in the GitHub UI before requesting others to review.

### ✅ 8. Respond to Feedback Constructively

**When receiving feedback:**

- **Thank the reviewer** - They're helping improve the code
- **Address every comment** - Either make the change or explain why not
- **Don't take it personally** - Code review is about the code, not you
- **Mark resolved** - Once addressed, resolve the conversation

**Example responses:**

✅ **Good:**
```
"Good catch! I've updated the validation to handle that edge case.
See commit abc123."
```

```
"Great question. I considered that approach but went with this one 
because [reason]. Open to changing if you feel strongly."
```

❌ **Bad:**
```
"That's how I always do it"
```

```
"Works for me 🤷"
```

## PR Description Template

Copy and customize this template:

```markdown
# [Feature/Fix Name]

## Summary

[1-2 sentences describing what changed and why]

## Changes

### Added
- [New feature]
- [New file]

### Changed
- [Modified behavior]
- [Updated component]

### Removed
- [Deprecated code]

### Fixed
- [Bug description]

## Motivation

[Why is this change needed? What problem does it solve? Link to issue if applicable]

## Implementation Details

[Explain any non-obvious decisions, trade-offs, or technical details that reviewers should know]

### Alternatives Considered

1. [Option 1] - [Why not chosen]
2. [Option 2] - [Why not chosen]
3. [Chosen option] - [Why chosen]

## Testing

### Automated Tests

- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] All tests passing

### Manual Testing

Tested the following scenarios:
1. [Scenario 1] - ✅ Works as expected
2. [Scenario 2] - ✅ Works as expected
3. [Edge case] - ✅ Handled correctly

## Screenshots / Videos

[For UI changes only]

### Before
![Before Screenshot](url)

### After
![After Screenshot](url)

[Video of interaction if applicable]

## Accessibility

[For UI changes only]

- [ ] Keyboard navigation tested
- [ ] Screen reader tested
- [ ] Color contrast verified
- [ ] Focus management correct

## Verification

```bash
pnpm verify
```

Output:
```
✓ Format check passed
✓ Lint passed (affected: client, shadcnui)
✓ Type check passed (affected: client, shadcnui)
✓ Tests passed (affected: client, shadcnui)
✓ Build passed (affected: client, shadcnui)
```

## Checklist

- [ ] Code follows existing patterns and conventions
- [ ] Tests added/updated and passing
- [ ] Documentation updated (if needed)
- [ ] No console.logs or debug code
- [ ] Commit messages follow conventional commits
- [ ] Self-reviewed the diff
- [ ] `pnpm verify` passes

## Related Issues

Closes #123
Relates to #456
```

## Common Anti-Patterns

### ❌ The "Everything" PR

```
feat: complete rewrite of application

Files changed: 312 files
+12,456 −8,234 lines

- Migrated to new framework
- Updated all components
- Refactored entire state management
- New design system
- Updated tests
- New build system
```

**Problem:** Impossible to review effectively

**Solution:** Break into multiple PRs with incremental migration

### ❌ The "Mystery" PR

```
feat: updates

- Made some changes
- Fixed stuff
- Improved performance
```

**Problem:** No context, no specifics, no way to validate

**Solution:** Write detailed description with specifics

### ❌ The "Trust Me" PR

```
PR description: "Works on my machine ✅"

No tests, no screenshots, no verification evidence.
```

**Problem:** Reviewer can't verify, no confidence in changes

**Solution:** Provide evidence (tests, verification output, screenshots)

### ❌ The "While I'm Here" PR

```
feat(shadcnui): add Select component

- Add Select component ← Good
- Fix Button component bug ← Unrelated
- Refactor Input component ← Unrelated
- Update 15 other components "for consistency" ← Scope creep
- Upgrade dependencies ← Risky
```

**Problem:** Mixed concerns, scope creep, high risk

**Solution:** Separate into focused PRs

## Tips for Complex PRs

When a change is legitimately complex:

### 1. Provide Extra Context

```markdown
## Background

This PR implements the new authentication flow discussed in #789.

Key architectural decisions:
1. Using JWT tokens instead of sessions
2. Implementing refresh token rotation
3. Adding rate limiting

See [RFC document](link) for full discussion.
```

### 2. Guide the Reviewer

```markdown
## Review Guide

Recommended review order:

1. Start with `types.ts` - New type definitions
2. Then `auth.service.ts` - Core logic
3. Then `auth.hook.ts` - React integration
4. Finally components - UI layer

Key files to focus on:
- `auth.service.ts` (lines 45-120) - Token refresh logic
- `auth.hook.ts` (lines 23-67) - State management
```

### 3. Break Into Commits

```
feat: add auth service foundation
feat: implement token refresh logic
feat: add React auth hook
feat: integrate auth into components
test: add comprehensive auth tests
```

Each commit should be reviewable independently.

### 4. Create a Testing Plan

```markdown
## Testing Plan

### Scenarios Tested

1. **Happy Path**
   - Login → Access protected route → Works ✅

2. **Token Expiry**
   - Wait for token expiry → Auto-refresh → Works ✅

3. **Refresh Token Expiry**
   - Wait for refresh token expiry → Redirect to login ✅

4. **Network Failure**
   - Disconnect network → Appropriate error shown ✅

5. **Concurrent Requests**
   - Multiple API calls during refresh → Queued correctly ✅
```

## Integration with Other Skills

- **[Planning](planning.md)** - Plans help structure reviewable PRs
- **[Verification](verification.md)** - Verification evidence required
- **[Systematic Debugging](systematic-debugging.md)** - Explain debugging process for bug fixes

## Quick Review Checklist

Before requesting review:

- [ ] **Size:** < 500 lines (or justified if larger)
- [ ] **Focus:** One logical change
- [ ] **Clean:** No drive-by refactoring
- [ ] **Described:** Clear PR description
- [ ] **Visual:** Screenshots if UI changes
- [ ] **Tested:** Verification evidence included
- [ ] **Self-reviewed:** Read your own diff
- [ ] **Complete:** All acceptance criteria met

## Review Time Estimates

Help reviewers plan:

- 🟢 **< 100 lines:** "Quick review (5-10 min)"
- 🟡 **100-300 lines:** "Medium review (15-20 min)"
- 🟠 **300-500 lines:** "Thorough review (30-45 min)"
- 🔴 **> 500 lines:** "Should be split" or "Complex review (1+ hour)"

Add to PR description:
```markdown
**Estimated review time:** 15-20 minutes
```

## Remember

A reviewable PR:
- Respects the reviewer's time
- Makes validation easy
- Reduces back-and-forth
- Gets merged faster
- Has fewer bugs

**Invest time in making your PR easy to review, and it will pay off in faster approvals and better feedback.**

**Last Updated:** 2026-01-28

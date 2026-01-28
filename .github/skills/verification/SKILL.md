---
name: verification
description: Defines verification requirements and evidence expectations for pull requests. Use when preparing PR descriptions to include proper validation evidence. Covers the pnpm verify command, manual testing requirements, and evidence templates for different types of changes.
---

# Verification Skill

This skill defines what evidence we expect in PRs to prove changes work correctly.

## When to Use This Skill

Use this skill when you need to:
- Prepare verification evidence for a PR
- Check what validation is required
- Format PR verification sections
- Understand manual testing expectations
- Provide evidence for UI, performance, or bug fixes

## Core Principle

**Prove your changes work before asking for review.**

## Required Verification

Every PR must show:

1. **Format check** - Code is formatted correctly
2. **Lint** - No code quality issues
3. **Type check** - No TypeScript errors
4. **Tests** - All tests pass

### The Verification Command

```bash
pnpm verify
```

This runs: `format:check && lint:affected && type-check:affected && test:affected`

## PR Evidence Template

```markdown
## Verification

\`\`\`bash
pnpm verify
\`\`\`

**Output:**
\`\`\`
✓ Format check passed
✓ Lint passed (affected: client, shadcnui)
✓ Type check passed (affected: client, shadcnui)
✓ Tests passed (affected: client, shadcnui)
  - 216 tests passed
  - Coverage: 84.3% statements
\`\`\`

**Manual Testing:**
- [Describe what you tested]
- [Include edge cases]
```

## Additional Evidence

### For UI Changes

**Required:**
- Screenshots (before/after)
- Accessibility testing notes
- Manual interaction testing

**Template:**
```markdown
## Visual Changes

### Before
![Before](./screenshots/before.png)

### After  
![After](./screenshots/after.png)

## Accessibility
- ✅ Keyboard navigation tested
- ✅ Screen reader compatible
- ✅ Color contrast verified (WCAG AA)
```

### For Performance Changes

**Required:**
- Lighthouse scores (before/after)
- Bundle size impact

### For Bug Fixes

**Required:**
- Reproduction steps
- Root cause explanation
- Verification that fix works

## Integration

- Referenced from [AGENTS.md](../../AGENTS.md) PR requirements
- Use with [code-review-ready skill](../code-review-ready/SKILL.md)
- See [detailed verification guide](workflows/detailed-guide.md) for complete templates

For complete verification requirements and templates, see the [detailed verification guide](workflows/detailed-guide.md).

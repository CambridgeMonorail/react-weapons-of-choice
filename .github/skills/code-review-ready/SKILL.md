---
name: code-review-ready
description: Guidelines for creating reviewable pull requests that get merged quickly. Use when preparing PRs to ensure they're focused, well-documented, and easy to review. Covers size limits, avoiding drive-by refactors, PR descriptions, and visual evidence requirements.
---

# Code Review Ready Skill

This skill helps you create PRs that are easy to review and get merged quickly.

## When to Use This Skill

Use this skill when you need to:
- Prepare a pull request for review
- Check if your changes are reviewable
- Write a clear PR description
- Provide appropriate evidence for your changes
- Break down large changes into reviewable chunks

## Core Principle

**Make it easy for reviewers.** Small, focused, well-documented PRs get reviewed faster and have fewer issues.

## Reviewable PR Checklist

✅ **Keep it small** - Target < 500 lines changed  
✅ **One logical change** - Single feature, bug fix, or refactoring  
✅ **No drive-by refactors** - Don't mix cleanup with features  
✅ **Clear description** - What, why, and how  
✅ **Visual evidence** - Screenshots for UI changes  
✅ **Explain trade-offs** - Document decisions made  
✅ **Self-review** - Review your own diff first  
✅ **Verification passed** - Include `pnpm verify` output

## PR Description Template

```markdown
## What Changed

[Brief summary of the change]

## Why

[Context: what problem does this solve?]

## How

[Implementation approach, key decisions]

## Verification

\`\`\`bash
pnpm verify
\`\`\`

[Paste verification output]

## Visual Changes (if applicable)

[Screenshots before/after]

## Testing

- [x] Tested scenario 1
- [x] Tested scenario 2
- [x] Edge cases considered
```

## Size Guidelines

**Ideal:** < 200 lines  
**Good:** 200-500 lines  
**Large:** 500-1000 lines (needs justification)  
**Too large:** > 1000 lines (break it down)

## Anti-Patterns

❌ **"Everything PR"** - Mixing features, refactors, and fixes  
❌ **"Mystery PR"** - No description, reviewers guess intent  
❌ **"Trust Me PR"** - No verification evidence  
❌ **"While I'm Here PR"** - Drive-by refactors

## Integration

- Referenced from [AGENTS.md](../../AGENTS.md) PR requirements
- Use with [verification skill](../verification/SKILL.md) for evidence
- See [detailed code review guide](workflows/detailed-guide.md) for complete examples

For complete examples and tips for breaking down large PRs, see the [detailed code review guide](workflows/detailed-guide.md).

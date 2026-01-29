---
name: code-review-ready
description: Guidelines for creating reviewable pull requests that get merged quickly.
---

# Code Review Ready Skill

This skill helps you create PRs that are easy to review and get merged quickly.

## When to Use This Skill

Use this skill when you need to:
- Prepare a pull request for review
- Check if your changes are reviewable
- Write a clear PR description
- Break down large changes into reviewable chunks

## Core Principle

**Make it easy for reviewers.** Small, focused, well-documented PRs get reviewed faster and have fewer issues.

## Reviewable PR Checklist

✅ **Keep it small** - Target < 500 lines changed
✅ **One logical change** - Single feature, bug fix, or refactoring
✅ **Clear description** - What, why, and how
✅ **Visual evidence** - Screenshots for UI changes
✅ **Verification passed** - Include `pnpm verify` output

## Integration

- Referenced from [AGENTS.md](../../../AGENTS.md) PR requirements
- See [detailed code review guide](workflows/detailed-guide.md) for complete examples

For complete examples and tips for breaking down large PRs, see the [detailed code review guide](workflows/detailed-guide.md).

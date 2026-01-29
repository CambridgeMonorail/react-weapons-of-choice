---
name: verification
description: Defines verification requirements and evidence expectations for pull requests.
---

# Verification Skill

This skill defines what evidence we expect in PRs to prove changes work correctly.

## When to Use This Skill

Use this skill when you need to:
- Prepare verification evidence for a PR
- Format PR verification sections
- Understand manual testing expectations

## Core Principle

**Prove your changes work before asking for review.**

## Required Verification

1. **Format check**
2. **Lint**
3. **Type check**
4. **Tests**

### The Verification Command

```bash
pnpm verify
```

## Integration

- Referenced from [AGENTS.md](../../../AGENTS.md) PR requirements
- See [detailed verification guide](workflows/detailed-guide.md) for complete templates

For complete verification requirements and templates, see the [detailed verification guide](workflows/detailed-guide.md).

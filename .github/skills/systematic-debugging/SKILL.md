---
name: systematic-debugging
description: Provides a structured 6-step root cause analysis workflow for debugging complex issues. Use when investigating bugs, performance problems, or unexpected behavior. Helps find actual root causes instead of treating symptoms. Includes debugging techniques and verification steps.
---

# Systematic Debugging Skill

This skill provides a structured approach to debugging that finds root causes instead of treating symptoms.

## When to Use This Skill

Use this skill when you need to:
- Debug complex or non-obvious issues
- Investigate performance problems
- Find the root cause of unexpected behavior
- Verify a bug fix actually works
- Document debugging process for future reference

## The 6-Step Process

### 1. Understand the Problem
- Reproduce the bug reliably
- Gather evidence (error messages, stack traces, logs)
- Define expected vs actual behavior
- Identify affected scope

### 2. Reproduce Reliably
- Create minimal reproduction case
- Document exact steps to trigger
- Note any environmental factors
- Capture state before/after

### 3. Find Root Cause
**Use debugging techniques:**
- Binary search (comment out code sections)
- Console logging / breakpoints
- Git bisect for regressions
- Check recent changes
- Review related code paths

**Don't guess - investigate:**
- Follow the data flow
- Check assumptions
- Look for similar issues
- Test hypotheses

### 4. Fix the Root Cause
- Address the underlying issue, not symptoms
- Consider edge cases
- Avoid "quick fixes" that mask problems
- Ensure fix is minimal and targeted

### 5. Verify the Fix
- Original reproduction case now passes
- No new test failures (run full suite)
- Manual testing of related functionality
- Consider adding regression test

### 6. Document
**In commit message:**
- What was wrong
- Why it happened
- How the fix addresses it

**In PR description:**
- Reproduction steps
- Root cause explanation
- How you verified the fix

## Common Pitfalls

❌ **Fixing symptoms** - Masking the real problem  
✅ **Fix root cause** - Solve the underlying issue

❌ **Guessing** - Making random changes hoping it works  
✅ **Investigate** - Follow evidence to root cause

❌ **No verification** - Assuming it's fixed  
✅ **Verify thoroughly** - Prove it's fixed

## Integration

- Referenced from [AGENTS.md](../../AGENTS.md) debugging section
- See [detailed debugging guide](workflows/detailed-guide.md) for complete examples
- Use with [verification skill](../verification/SKILL.md) for PR evidence

For complete examples and debugging techniques, see the [detailed debugging guide](workflows/detailed-guide.md).

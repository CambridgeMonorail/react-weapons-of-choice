# Implementation Plans

This directory contains structured implementation plans created by GitHub Copilot agents when working on non-trivial tasks.

## Purpose

Plans serve several critical purposes:

1. **Clarity** - Forces clear thinking about what needs to be done
2. **Review** - Allows review of approach before implementation
3. **Tracking** - Provides checkpoints to verify progress
4. **Context** - Documents decisions and trade-offs for future reference
5. **Collaboration** - Makes it easy for others to understand and continue work

## When to Create a Plan

See [Planning Skill](../../.github/skills/planning/workflows/detailed-guide.md) for detailed guidance.

**Required:**
- New features with multiple components
- Non-trivial refactorings that touch multiple files
- Architectural changes
- Migrations (dependencies, patterns, etc.)
- Complex bug fixes with multiple root causes

**Optional but Recommended:**
- Medium-complexity features
- Moderate refactorings
- API changes

**Not Needed:**
- Trivial changes (typos, formatting, simple prop additions)
- Single-line bug fixes with obvious cause
- Documentation updates

## Plan File Naming Convention

Plans are named using the following format:

```
YYYY-MM-DD-<descriptive-slug>.md
```

**Examples:**
- `2026-01-28-add-user-authentication.md`
- `2026-01-29-refactor-form-validation.md`
- `2026-02-01-fix-memory-leak-in-chart.md`
- `2026-02-03-migrate-to-react-19.md`

**Why date prefix?**
- Chronological ordering
- Easy to find recent plans
- Context about when work was done

**Slug guidelines:**
- Use lowercase with hyphens
- Be descriptive but concise (3-6 words)
- Describe the outcome, not the process
  - ✅ `add-user-authentication`
  - ❌ `work-on-auth-stuff`

## Plan Template

Every plan should follow this structure:

```markdown
# [Feature/Fix/Refactoring Name]

**Date:** YYYY-MM-DD
**Author:** [Your name or "GitHub Copilot"]
**Status:** [Planning | In Progress | Complete | Abandoned]

## Context

[Why are we doing this? What problem does it solve?]

## Goals

[What will be achieved when this is complete?]

- Goal 1
- Goal 2
- Goal 3

## Non-Goals

[What is explicitly out of scope?]

- Non-goal 1
- Non-goal 2

## Approach

[High-level strategy for accomplishing the goals]

## Tasks

- [ ] Task 1: [Description]
  - Acceptance criteria
  - Files affected: `path/to/file.ts`
  
- [ ] Task 2: [Description]
  - Acceptance criteria
  - Files affected: `path/to/file.ts`, `path/to/other.ts`

## Testing Strategy

[How will we verify this works?]

- Unit tests
- Integration tests
- Manual testing steps
- E2E scenarios

## Risks and Trade-offs

[What could go wrong? What are we choosing not to do?]

## Dependencies

[What needs to exist first? What might block progress?]

## Open Questions

[What don't we know yet?]

## Rollback Plan

[If this breaks production, how do we revert?]
```

## Plan Lifecycle

### 1. Planning Phase

**Status:** `Planning`

- Create the plan file
- Fill in Context, Goals, Non-Goals, Approach
- Identify major tasks
- Call out risks and dependencies
- Get feedback if needed

**Commit message:**
```
docs(planning): add plan for [feature/fix/refactoring]
```

### 2. Implementation Phase

**Status:** `In Progress`

- Check off tasks as you complete them
- Update with new discoveries or changes
- Document decisions made during implementation
- Add notes about what worked or didn't

**Commit as you go:**
```
feat: implement [task] (plan: 2026-01-28-feature-name)
```

Reference the plan in commit messages so it's easy to trace.

### 3. Completion Phase

**Status:** `Complete`

- Update status to Complete
- Add "Completion Notes" section
- Document any deviations from original plan
- Note lessons learned

**Final commit:**
```
docs(planning): mark [feature] plan as complete
```

### 4. Abandonment (if applicable)

**Status:** `Abandoned`

- Update status to Abandoned
- Add "Abandonment Reason" section
- Document why work was stopped
- Note what was learned

## Plan Storage

- **All plans:** `docs/plans/YYYY-MM-DD-<slug>.md`
- **No subdirectories:** Keep flat for simplicity
- **Keep completed plans:** They're valuable documentation
- **Don't delete:** Plans provide historical context

## Finding Plans

### By Date
```bash
ls docs/plans/2026-01-*
```

### By Keyword
```bash
grep -l "authentication" docs/plans/*.md
```

### By Status
```bash
grep -l "Status.*In Progress" docs/plans/*.md
```

### Most Recent
```bash
ls -t docs/plans/*.md | head -5
```

## Integration with AGENTS.md

Plans are referenced in [AGENTS.md](../../AGENTS.md) as part of the workflow:

1. **Before starting non-trivial work:**
   - Create a plan
   - Get it reviewed (if complex)
   - Commit the plan

2. **During implementation:**
   - Reference the plan in commits
   - Update the plan if approach changes

3. **When complete:**
   - Mark plan as complete
   - Reference in PR description

## Examples

See [Planning Skill](../ai/skills/planning.md) for detailed examples of:
- Feature addition plan
- Refactoring plan
- Bug fix plan (complex)
- Migration plan

## Tips

### Good Plans
- Are specific and actionable
- Break work into reviewable chunks
- Identify risks early
- Make it easy to pick up where you left off

### Bad Plans
- Are too vague ("do the thing")
- Lack acceptance criteria
- Don't consider edge cases
- Ignore testing and verification

### When in Doubt
- Over-plan rather than under-plan
- It's easier to simplify a detailed plan than to rescue an abandoned task
- Plans take 10-20 minutes but save hours of confusion

## Quick Reference

**Create new plan:**
```bash
# Copy template from planning.md or create from scratch
touch docs/plans/$(date +%Y-%m-%d)-your-feature-name.md
```

**Update status:**
```markdown
**Status:** In Progress
```

**Check off task:**
```markdown
- [x] Task 1: Implement authentication service
```

**Link to plan in PR:**
```markdown
## Implementation

This PR follows the plan outlined in 
[docs/plans/2026-01-28-add-authentication.md](../plans/2026-01-28-add-authentication.md).

Completed tasks:
- [x] Task 1
- [x] Task 2
- [x] Task 3
```

## Remember

**Plans are living documents.** They should evolve as you learn more during implementation. Don't treat them as rigid contracts—treat them as tools to keep you organized and focused.

**Last Updated:** 2026-01-28

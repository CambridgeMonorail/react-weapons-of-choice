---
name: planning
description: Creates structured implementation plans for non-trivial development work. Use when adding features, refactoring multiple files, making architectural changes, or fixing complex bugs. Provides plan template, task breakdown structure, and guidance on when planning is required vs optional.
---

# Planning Skill

This skill helps create structured implementation plans for non-trivial work.

## When to Use This Skill

Use this skill when you need to:
- Plan new features with multiple components
- Structure refactoring work across multiple files  
- Break down complex bug fixes
- Make architectural decisions
- Plan work that affects multiple projects

## When to Create a Plan

### Required ✅
- New features (components, pages, functionality)
- Refactoring across multiple files
- Architectural changes
- Complex bug fixes requiring investigation
- Breaking changes

### Optional ⚠️
- Medium-sized single components
- Performance improvements  
- Major dependency upgrades

### Not Needed ❌
- Typos/formatting fixes
- Documentation updates
- Single-line bug fixes
- Simple renaming

## Plan Location

Create plans in: `docs/plans/YYYY-MM-DD-<slug>.md`

Examples:
- `docs/plans/2026-01-28-add-select-component.md`
- `docs/plans/2026-01-29-fix-routing-state-loss.md`

## Plan Template

See [detailed plan template](../../docs/ai/skills/planning.md) for complete structure with examples.

## Key Elements

Every plan must include:
1. **Goal** - What you're trying to achieve
2. **Context** - Why this is needed
3. **Task breakdown** - Specific, actionable steps
4. **For each task:**
   - Files to change
   - Commands to run
   - Expected result  
   - Acceptance criteria

## Integration

- Reference from [AGENTS.md](../../AGENTS.md) workflow guidance
- Plans live in `docs/plans/` directory
- Update plan status as work progresses

For complete examples and detailed guidance, see the [full planning documentation](../../docs/ai/skills/planning.md).

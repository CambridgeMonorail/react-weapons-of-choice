# Planning Skill

This skill defines how to create structured implementation plans for non-trivial work in this repository.

## The Dual Role of Plans

In this repository, a "Plan" (`docs/plans/*.md`) serves two simultaneous purposes:

1.  **Specification (The "What")**:
    *   It records the "Durable Intent" of the feature.
    *   It defines architectural decisions, constraints, and scope.
    *   It serves as the source of truth for *what* is being built, preventing AI hallucination.

2.  **Task Tracker (The "How")**:
    *   It acts as a dynamic checklist to manage AI context.
    *   It breaks large features into "context-safe" chunks (1-5 files).
    *   It tracks progress state (`[ ]` to `[x]`) to support the `/implement-next` workflow.

## When to Create a Plan

### Plan Required ✅

Create a plan for:
- **New features** - Adding new components, pages, or functionality
- **Refactoring** - Restructuring code across multiple files
- **Multi-file changes** - Work spanning multiple projects or libraries
- **Architectural decisions** - Changes affecting system design
- **Complex bug fixes** - Issues requiring investigation and multiple fixes
- **Breaking changes** - Changes that affect existing APIs or behavior

### Plan Optional ⚠️

Consider a plan for:
- **Medium-sized features** - Single new component with tests
- **Performance improvements** - Optimization work
- **Dependency upgrades** - Updating major versions

### No Plan Needed ❌

Skip planning for:
- **Typos and formatting** - Simple text fixes
- **Documentation updates** - README changes, comment updates
- **Single-line bug fixes** - Obvious, isolated fixes
- **Renaming** - Variable or function name changes

## Plan Format

### Location

`docs/plans/YYYY-MM-DD-<slug>.md`

**Examples:**
- `docs/plans/2026-01-28-add-select-component.md`
- `docs/plans/2026-01-28-refactor-button-variants.md`
- `docs/plans/2026-01-29-fix-routing-state-loss.md`

### Template

```markdown
# [Feature/Fix Name]

**Date:** YYYY-MM-DD  
**Status:** 🔄 In Progress | ✅ Complete | ⏸️ Paused  
**Author:** [Your name or "Copilot Agent"]

## Progress Checklist

- [ ] Task 1: [Task Name]
- [ ] Task 2: [Task Name]
- [ ] Task 3: [Task Name]

## Goal

[One or two sentences describing what you're trying to achieve]

## Context

[Background information: Why is this needed? What problem does it solve?]

## Scope

**In scope:**
- [What will be changed]
- [What will be added]

**Out of scope:**
- [What will NOT be changed]
- [Related work for later]

## Task Breakdown

### Task 1: [Task Name]

**Files to change:**
- `path/to/file1.ts`
- `path/to/file2.tsx`

**Changes:**
- [Specific change 1]
- [Specific change 2]

**Commands to run:**
```bash
pnpm test:affected
pnpm lint:shadcnui
```

**Expected result:**
[What should happen when this task is complete]

**Acceptance criteria:**
- [ ] Tests pass
- [ ] Type-check passes
- [ ] Specific behavior works

### Task 2: [Task Name]

[Same structure as Task 1]

## Dependencies

- [Any external dependencies or prerequisite work]
- [Any coordination needed with other developers]

## Risks and Mitigations

**Risk 1:** [Describe potential issue]  
**Mitigation:** [How to handle it]

## Testing Strategy

- [ ] Unit tests for [specific functionality]
- [ ] Integration tests for [specific flow]
- [ ] Manual testing: [specific scenarios]
- [ ] Accessibility testing (if UI changes)

## Documentation Updates

- [ ] README updates
- [ ] Code comments
- [ ] Storybook stories (if component work)
- [ ] API documentation (if public API changes)

## Verification

- [ ] `pnpm verify` passes
- [ ] All acceptance criteria met
- [ ] PR created with evidence

## Progress Tracking

- [x] Task 1 complete
- [ ] Task 2 in progress
- [ ] Task 3 not started

**Last Updated:** YYYY-MM-DD
```

## Good Plan Example

### docs/plans/2026-01-28-add-select-component.md

```markdown
# Add Select Component to shadcn/ui Library

**Date:** 2026-01-28  
**Status:** 🔄 In Progress  
**Author:** Copilot Agent

## Goal

Add a fully-accessible Select component to the shadcnui library, based on Radix UI's Select primitive.

## Context

Users need a form select/dropdown component. We have Button, Input, Checkbox but no Select. This is a commonly requested component for forms.

## Scope

**In scope:**
- New Select component in shadcnui library
- Full TypeScript types
- Comprehensive tests (>80% coverage)
- Storybook stories showing variants
- Accessibility compliance (WCAG AA)

**Out of scope:**
- Multi-select functionality (future enhancement)
- Custom styling beyond theme variants
- Server-side rendering optimization

## Task Breakdown

### Task 1: Create Component Structure

**Files to change:**
- `libs/shadcnui/src/lib/input-controls/select/Select.tsx` (new)
- `libs/shadcnui/src/lib/input-controls/select/index.ts` (new)
- `libs/shadcnui/src/index.ts` (update)

**Changes:**
- Create Select.tsx using @radix-ui/react-select
- Implement Select, SelectTrigger, SelectContent, SelectItem components
- Add proper TypeScript types
- Export from index files

**Commands to run:**
```bash
pnpm test:shadcnui
pnpm type-check:shadcnui
```

**Expected result:**
Component compiles without errors, basic structure in place

**Acceptance criteria:**
- [ ] Component uses Radix UI Select primitive
- [ ] All subcomponents exported
- [ ] Type-check passes
- [ ] No lint errors

### Task 2: Add Tests

**Files to change:**
- `libs/shadcnui/src/lib/input-controls/select/Select.test.tsx` (new)

**Changes:**
- Test rendering
- Test keyboard navigation (Tab, Enter, Escape, Arrow keys)
- Test selection behavior
- Test disabled state
- Test required validation
- Test with form integration

**Commands to run:**
```bash
pnpm test:shadcnui --coverage
```

**Expected result:**
All tests pass, >80% coverage

**Acceptance criteria:**
- [ ] >80% code coverage
- [ ] Keyboard navigation tested
- [ ] Accessibility tested
- [ ] All tests pass

### Task 3: Add Storybook Stories

**Files to change:**
- `libs/shadcnui/src/lib/input-controls/select/Select.stories.tsx` (new)

**Changes:**
- Default story
- With label and helper text
- Disabled state
- Required field
- With validation error
- Different sizes (if applicable)

**Commands to run:**
```bash
pnpm serve:storybook
```

**Expected result:**
Stories visible in Storybook, all variants displayed

**Acceptance criteria:**
- [ ] All variants shown
- [ ] Interactive controls work
- [ ] Accessibility panel shows no violations

### Task 4: Update Documentation

**Files to change:**
- `libs/shadcnui/README.md` (update)

**Changes:**
- Add Select to component list
- Add usage example
- Link to Storybook

**Expected result:**
Documentation reflects new component

**Acceptance criteria:**
- [ ] README updated
- [ ] Usage example included

## Dependencies

- @radix-ui/react-select (already installed)
- @testing-library/react (already available)

## Risks and Mitigations

**Risk 1:** Complex keyboard navigation might have accessibility issues  
**Mitigation:** Use Radix UI primitive (already accessible), test with screen reader

**Risk 2:** Styling might not match existing components  
**Mitigation:** Follow existing Button and Input patterns, use consistent Tailwind classes

## Testing Strategy

- [ ] Unit tests with @testing-library/react
- [ ] Keyboard navigation: Tab, Enter, Escape, Arrow Up/Down
- [ ] Screen reader testing with NVDA or JAWS
- [ ] Manual testing in Storybook
- [ ] Form integration testing

## Documentation Updates

- [ ] README.md - Add Select to component list
- [ ] Code comments - JSDoc for props
- [ ] Storybook - Interactive examples

## Verification

- [ ] `pnpm verify` passes
- [ ] Storybook builds successfully
- [ ] All acceptance criteria met
- [ ] PR includes screenshots

## Progress Tracking

- [x] Task 1: Create component structure - ✅ Complete
- [x] Task 2: Add tests - ✅ Complete
- [ ] Task 3: Add Storybook stories - 🔄 In progress
- [ ] Task 4: Update documentation - ⏸️ Not started

**Last Updated:** 2026-01-28
```

## Bad Plan Example (Anti-pattern)

❌ **Too Vague:**

```markdown
# Fix the button

- Make the button work better
- Update styles
- Test it
```

**Problems:**
- No context or goal
- No specific files or changes
- No acceptance criteria
- No way to verify completion

## Planning Process

### 1. Understand the Requirement

- Read the issue or request carefully
- Ask clarifying questions
- Identify dependencies
- Check for related existing code

### 2. Break Down the Work

- Identify all files that need changes
- Group related changes into tasks
- Order tasks logically
- Estimate complexity

### 3. Define Success

- Write specific acceptance criteria
- Identify verification steps
- Plan testing strategy
- Consider edge cases

### 4. Write the Plan

- Use the template above
- Be specific about changes
- Include commands to run
- Add progress tracking

### 5. Execute Incrementally

- Complete one task at a time
- Update progress in the plan
- Commit after each task
- Adjust plan if needed

## Tips for Good Plans

### ✅ Do This

- **Be specific** - Name exact files and changes
- **Be measurable** - Define clear acceptance criteria
- **Be realistic** - Break large work into small tasks
- **Be thorough** - Include testing and documentation
- **Update progress** - Keep the plan current

### ❌ Avoid This

- **Vague goals** - "Make it better" isn't actionable
- **Missing details** - No files or commands specified
- **Too ambitious** - Trying to do too much at once
- **No verification** - No way to know when done
- **Abandoned plans** - Not updating progress

## Plan Maintenance

### During Implementation

- Update task status as you complete them
- Add notes about decisions or changes
- Document any blockers or issues
- Keep "Last Updated" date current

### After Completion

- Mark status as ✅ Complete
- Summarize what was delivered
- Note any deviations from plan
- Link to the merged PR

### If Plan Changes

- Document why the plan changed
- Update affected tasks
- Revise acceptance criteria if needed
- Keep history of major changes

## Integration with AGENTS.md

This skill is referenced from the root [AGENTS.md](../../../AGENTS.md) as part of the standard workflow for non-trivial changes.

When an agent is asked to implement a feature, it should:
1. Assess if a plan is needed (use guidance above)
2. If yes, create a plan using this template
3. Work through tasks incrementally
4. Update progress in the plan
5. Reference the plan in the PR

## Examples by Type

### Feature Plan

See the "Good Plan Example" above for adding a Select component.

### Refactoring Plan

```markdown
# Refactor Button Component Variants

**Goal:** Consolidate button variant logic using class-variance-authority

**Task 1:** Extract variant definitions to CVA
**Task 2:** Update Button component to use CVA
**Task 3:** Update tests for new implementation
**Task 4:** Verify all existing stories still work
```

### Bug Fix Plan

```markdown
# Fix Routing State Loss on Page Refresh

**Goal:** Prevent loss of application state when user refreshes page

**Task 1:** Reproduce the issue reliably
**Task 2:** Identify root cause (state not persisted)
**Task 3:** Implement sessionStorage persistence
**Task 4:** Add tests for persistence behavior
**Task 5:** Verify fix doesn't break existing flows
```

## Questions?

If you're unsure whether to create a plan, err on the side of planning. It's better to have a plan for a medium-sized task than to miss important details on a complex one.

For more guidance, see:
- [AGENTS.md](../../../AGENTS.md) - Overall workflow guidance
- [Systematic Debugging](systematic-debugging.md) - For bug fix planning
- [Verification](verification.md) - For completion criteria

**Last Updated:** 2026-01-28

# Target Operating Model for AI-Assisted Development

This document explains the three-layer model for Copilot-first development in this repository, showing how coding conventions, workflow guidance, and task-specific skills work together.

## Overview

This repository uses a structured approach to guide both human developers and AI agents:

1. **Copilot Instructions** - What code should look like (coding conventions)
2. **AGENTS.md Files** - How to work (workflow and behavioral guidance)
3. **Workflow Skills** - Detailed processes for common tasks

These layers complement each other to provide comprehensive guidance without duplication.

## The Three-Layer Model

### Layer 1: Copilot Instructions (Code Conventions)

**Purpose:** Define coding patterns, conventions, and standards

**Files:**
- `.github/copilot-instructions.md` - Repo-wide coding conventions
- `.github/instructions/*.instructions.md` - Path-scoped rules with `applyTo` targeting

**What they contain:**
- TypeScript conventions (types vs interfaces, no `any`, named exports)
- React patterns (functional components, hooks, JSDoc)
- Testing expectations (coverage, colocation, frameworks)
- Accessibility baseline (WCAG, keyboard navigation, ARIA)
- Library structure and import patterns
- Technology stack versions

**When they apply:**
- Code generation in Copilot chat
- Inline completions
- File creation and editing

**Example from copilot-instructions.md:**
```markdown
## Global TypeScript Conventions

- Use strict TypeScript with no `any` (use `unknown` with type guards)
- Prefer `type` for object shapes, unions, intersections
- Use `interface` only when extending or merging definitions
- Named exports only (no default exports)
```

### Layer 2: AGENTS.md Files (Workflow Guidance)

**Purpose:** Define how agents should behave and approach work

**Files:**
- `AGENTS.md` (root) - Repo-wide workflow and behavioral guidance
- `apps/client/AGENTS.md` (optional) - App-specific workflows
- `libs/shadcnui/AGENTS.md` (optional) - Lib-specific workflows

**What they contain:**
- Core principles (plan, work incrementally, verify, document)
- Task complexity assessment (trivial vs non-trivial)
- Planning requirements and when to create plans
- Commit discipline and message formats
- Testing workflow for features and bugs
- PR requirements and evidence expectations
- Debugging approach
- What NOT to do (scope creep, breaking builds, poor communication)

**When they apply:**
- Working on issues or tasks
- Creating PRs
- Debugging problems
- Making architectural decisions

**Example from AGENTS.md:**
```markdown
## Core Principles

When working as an agent in this repository:

1. **Plan before acting** - For non-trivial changes, create a plan first
2. **Work incrementally** - Make small, reviewable commits
3. **Verify your work** - Run validation before declaring completion
4. **Document your decisions** - Explain trade-offs and reasoning
5. **Respect existing patterns** - Follow established conventions
```

### Layer 3: Workflow Skills (Detailed Processes)

**Purpose:** Provide step-by-step guidance for common development tasks

**Files:**
- `docs/ai/skills/planning.md` - How to create implementation plans
- `docs/ai/skills/systematic-debugging.md` - Root cause analysis process
- `docs/ai/skills/code-review-ready.md` - Making PRs reviewable
- `docs/ai/skills/verification.md` - PR evidence expectations

**What they contain:**
- Detailed step-by-step processes
- Templates and checklists
- Good vs bad examples
- Common pitfalls and solutions
- Real-world examples with walkthroughs
- Integration with other skills

**When they're referenced:**
- From AGENTS.md for detailed guidance
- When planning non-trivial changes
- When debugging complex issues
- When preparing PRs
- When unsure how to approach a task

**Example from planning.md:**
```markdown
## When to Create a Plan

### Required (Must Create)
- New features with multiple components
- Non-trivial refactorings (multiple files)
- Architectural changes
- Migrations (dependencies, patterns)

### Optional (Recommended)
- Medium-complexity features
- Moderate refactorings
- API changes

### Not Needed
- Trivial changes (typos, formatting)
- Single-line bug fixes
- Documentation updates
```

## How the Layers Work Together

### Scenario 1: Adding a New Component

**Layer 1 (Copilot Instructions)** guides the code:
- Use functional components
- TypeScript strict mode
- Colocate tests
- Ensure accessibility

**Layer 2 (AGENTS.md)** guides the workflow:
- Assess complexity → Medium (optional plan)
- Create plan in `docs/plans/`
- Work incrementally
- Run `pnpm verify` before PR

**Layer 3 (Planning Skill)** provides the process:
- Plan template
- Task breakdown structure
- Acceptance criteria format
- Example plans to reference

**Result:** Code follows conventions, work is planned and incremental, and the approach is documented.

### Scenario 2: Debugging a Bug

**Layer 1 (Copilot Instructions)** guides the fix:
- Write test that reproduces the bug
- Follow testing conventions
- Maintain 80% coverage

**Layer 2 (AGENTS.md)** guides the approach:
- Understand → Find root cause → Write test → Fix → Verify → Document
- Reference systematic debugging skill
- Include evidence in PR

**Layer 3 (Systematic Debugging Skill)** provides the process:
- 6-step debugging workflow
- Debugging techniques
- Root cause analysis methods
- Verification steps
- Documentation requirements

**Result:** Bug is fixed correctly (not just symptoms), approach is systematic, and solution is well-documented.

### Scenario 3: Creating a Pull Request

**Layer 1 (Copilot Instructions)** ensures the code quality:
- Lint passes
- Types are correct
- Tests exist and pass

**Layer 2 (AGENTS.md)** defines requirements:
- Clear description
- Verification evidence
- Visual evidence for UI changes
- Testing notes

**Layer 3 (Code Review Ready + Verification Skills)** provide templates:
- Reviewable PR checklist
- PR description template
- Verification evidence template
- Visual evidence requirements

**Result:** PR is well-documented, easy to review, and includes all necessary evidence.

## Key Distinctions

### Instructions vs AGENTS.md

| Aspect | Copilot Instructions | AGENTS.md |
|--------|---------------------|-----------|
| **Focus** | What code looks like | How to work |
| **Content** | Coding conventions, patterns | Workflow, process, behavior |
| **Applies to** | Code generation | Task execution |
| **Examples** | "Use functional components" | "Create a plan for non-trivial changes" |
| **Audience** | Copilot (code generation) | Agents (task execution) |
| **Scope** | Code quality | Work quality |

### When to Use Each

**Use Copilot Instructions when:**
- Defining how code should be written
- Setting conventions for imports, exports, types
- Establishing testing patterns
- Defining accessibility requirements
- Specifying technology stack

**Use AGENTS.md when:**
- Defining how to approach tasks
- Establishing commit discipline
- Setting PR requirements
- Defining debugging workflows
- Explaining what NOT to do

**Use Workflow Skills when:**
- Providing detailed step-by-step processes
- Offering templates and checklists
- Showing examples of good/bad approaches
- Explaining common pitfalls
- Integrating multiple workflows

## Practical Examples

### Example 1: Testing Requirements

**In Copilot Instructions:**
```markdown
## Global Testing Expectations

- Write tests for all new features and bug fixes
- Vitest for unit and component tests
- Use `@testing-library/react` for component tests
- Colocate tests with implementation: `Component.tsx` + `Component.test.tsx`
- Minimum 80% coverage for new code
```

**In AGENTS.md:**
```markdown
## Testing Workflow

### For New Features
1. Identify the smallest testable unit
2. Write tests colocated with implementation
3. Run affected tests: `pnpm test:affected`
4. Verify coverage meets 80% threshold
5. Include test results in PR description
```

**In Verification Skill:**
```markdown
### 4. Unit Tests

**Command:**
```bash
pnpm test:affected
```

**Expected Result:**
```
✓ Tests passed for all affected projects
  - client: 127 tests (23 suites)
  - shadcnui: 89 tests (15 suites)

Coverage:
  - Statements: 85.2%
```
```

### Example 2: Accessibility Requirements

**In Copilot Instructions:**
```markdown
## Global Accessibility Baseline

- All interactive elements must be keyboard accessible
- Form inputs require associated labels
- Use semantic HTML elements (button, nav, main, etc.)
- Maintain logical focus order
- Provide text alternatives for non-text content
- Ensure sufficient color contrast (WCAG AA minimum)
```

**In AGENTS.md:**
```markdown
## PR Requirements

### 3. Visual Evidence (for UI changes)

- Screenshots of before/after
- Video of interaction if applicable
- Accessibility testing notes
```

**In Verification Skill:**
```markdown
### For UI Changes

**3. Accessibility Testing**
```markdown
## Accessibility Verification

Manual testing completed:
- ✅ Keyboard navigation (Tab, Shift+Tab, Enter, Escape)
- ✅ Focus indicators visible and clear
- ✅ Screen reader tested (NVDA/JAWS/VoiceOver)
- ✅ Color contrast verified (WCAG AA minimum)
```
```

## Benefits of This Model

### 1. No Duplication

Each layer serves a distinct purpose:
- Instructions → Code patterns
- AGENTS.md → Workflow guidance
- Skills → Detailed processes

Content is not repeated; layers reference each other.

### 2. Clear Separation of Concerns

- **Code quality** is defined in instructions
- **Work quality** is defined in AGENTS.md
- **Process details** are in skills

### 3. Scalable

- Instructions can be scoped to specific paths
- AGENTS.md can be nested for app/lib-specific workflows
- Skills can be added for new processes

### 4. Easy to Maintain

- Update code conventions → Edit instructions
- Update workflow → Edit AGENTS.md
- Update process → Edit specific skill
- Changes are localized and targeted

### 5. Developer-Friendly

- Instructions guide inline coding
- AGENTS.md provides high-level workflow
- Skills offer deep-dive guidance when needed

## Integration Points

### From Copilot Instructions → AGENTS.md

```markdown
## Agent Expectations

When working as an agent in this repository:
- **Plan before acting** - For non-trivial changes, create a plan in `docs/plans/`
- **Verify your work** - Run `pnpm verify` before creating PRs

Refer to [AGENTS.md](../AGENTS.md) for complete behavioral guidance.
```

### From AGENTS.md → Workflow Skills

```markdown
## Workflow Skills

Reference these for detailed process guidance:

- **[Planning](docs/ai/skills/planning.md)** - How to create structured task plans
- **[Systematic Debugging](docs/ai/skills/systematic-debugging.md)** - Root cause analysis workflow
- **[Code Review Ready](docs/ai/skills/code-review-ready.md)** - Making changes easy to review
- **[Verification](docs/ai/skills/verification.md)** - PR evidence expectations
```

### From Skills → Other Skills

```markdown
## Integration with Other Skills

- **[Planning](planning.md)** - Plans include verification steps
- **[Code Review Ready](code-review-ready.md)** - Verification evidence required
- **[Systematic Debugging](systematic-debugging.md)** - Verification proves bugs are fixed
```

## Finding the Right Information

### "How should I write this code?"
→ Check `.github/copilot-instructions.md`

### "How should I approach this task?"
→ Check `AGENTS.md`

### "What's the detailed process for X?"
→ Check `docs/ai/skills/`

### "When should I create a plan?"
→ Check `AGENTS.md` → See planning skill for details

### "What goes in a PR description?"
→ Check `AGENTS.md` → See verification and code review skills for templates

## Evolution and Maintenance

### When to Update Copilot Instructions

- New coding conventions adopted
- Technology stack changes
- New path-scoped rules needed
- Testing framework updates

### When to Update AGENTS.md

- New workflow requirements
- Changed PR expectations
- Updated commit discipline
- New verification requirements

### When to Add/Update Skills

- New common process emerges
- Existing process needs more detail
- Common mistakes identified
- New templates or checklists needed

## Conclusion

This three-layer model provides:

1. **Copilot Instructions** - Code conventions and patterns
2. **AGENTS.md** - Workflow and behavioral guidance
3. **Workflow Skills** - Detailed process documentation

Together, they create a comprehensive guide for both AI agents and human developers, ensuring consistent code quality, systematic workflows, and well-documented processes.

**Key Takeaway:** Instructions tell you *what* code to write, AGENTS.md tells you *how* to work, and Skills tell you *how to execute* common processes.

**Last Updated:** 2026-01-28

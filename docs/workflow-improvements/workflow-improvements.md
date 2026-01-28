# Spec: Copilot-first Agent Workflow Improvements for `react-weapons-of-choice`

## Table of Contents

1. [Understanding the Two Mechanisms: Instructions vs. AGENTS.md](#understanding-the-two-mechanisms-instructions-vs-agentsmd)
2. [Repository Assessment Summary](#-repository-assessment-summary)
3. [Practical Examples: Instructions vs. AGENTS.md](#practical-examples-instructions-vs-agentsmd)
4. [Context and Goals](#context)
5. [Proposed Work (Phase Analysis)](#proposed-work)
6. [Acceptance Criteria](#acceptance-criteria)
7. [Suggested Repo Structure](#suggested-repo-structure-target)
8. [Implementation Notes and Caveats](#implementation-notes-and-caveats)
9. [Deliverable Plan (PR Sequence)](#deliverable-plan-pr-sequence)
10. [Quick Reference: When to Use What](#quick-reference-when-to-use-what)
11. [Summary](#summary-strong-foundation-minor-gaps)

---

## Understanding the Two Mechanisms: Instructions vs. AGENTS.md

Before diving into the assessment, it's critical to understand the difference between two complementary but distinct mechanisms in GitHub Copilot:

### 1. Copilot Instruction Files (Code Rules)

**Purpose:** Tell Copilot **what the code should look like**

**Files:**
- `.github/copilot-instructions.md` (repo-wide)
- `.github/instructions/*.instructions.md` (path-scoped with `applyTo`)

**Used For:**
- Coding conventions (TypeScript rules, React patterns, exports)
- Architectural constraints (import patterns, file organization)
- Library and framework usage (shadcn/ui, Tailwind, testing frameworks)
- Static, structural rules that apply during code generation

**Scope:**
- Always active during code generation and edits
- Automatically scoped by path using `applyTo` globs
- Stack additively (child instructions layer on top of parent)

**Think of these as:** The **constitution** of the repo - rules about code shape.

**Example Content:**
- "Use shadcn/ui components where possible"
- "Prefer named exports, no default exports"
- "Use Tailwind for all styling"
- "Ensure ARIA attributes on interactive elements"

### 2. AGENTS.md Files (Workflow and Behavior)

**Purpose:** Tell Copilot **how to behave while working**

**Files:**
- `AGENTS.md` (root-level, repo-wide agent behavior)
- `apps/<app>/AGENTS.md` (app-specific agent behavior)
- `libs/<lib>/AGENTS.md` (library-specific agent behavior)

**Used For:**
- Workflow and process expectations (planning, commits, verification)
- Sequencing of work (what to do first, validation steps)
- Domain-specific context (known issues, area-specific trade-offs)
- How to approach tasks and think before acting

**Scope:**
- Only affects agent mode (not inline completions)
- Nearest file wins (precedence-based, not additive)
- Behavioral and procedural guidance

**Think of these as:** **Team playbooks** - how we work here.

**Example Content:**
- "For non-trivial changes, create a plan in docs/plans/"
- "Prefer small, reviewable commits"
- "Run `pnpm verify` before declaring work complete"
- "In this lib, always run tests with `pnpm test:shadcnui`"

### The Critical Difference in One Sentence

> **Instruction files** tell Copilot *what the code should look like*.  
> **AGENTS.md files** tell Copilot *how to behave while working*.

### How They Work Together

When Copilot agent works on a file like `libs/shadcnui/src/lib/button/Button.tsx`, it sees:

1. ✅ `.github/copilot-instructions.md` (repo-wide code rules)
2. ✅ `.github/instructions/ui-and-accessibility.instructions.md` (matches `**/*.tsx`)
3. ❌ `AGENTS.md` (not yet created - workflow rules)
4. ❌ `libs/shadcnui/AGENTS.md` (not yet created - lib-specific behavior)

The agent knows **how to write the code correctly** (from instructions), but doesn't yet have clear **workflow discipline** (needs AGENTS.md).

### Rule of Thumb

**Use instruction files when:**
- The rule is about code shape or structure
- It should be enforced automatically during edits
- It rarely changes
- It's path-specific but static

**Use AGENTS.md when:**
- The rule is about workflow or process
- You want planning or verification discipline
- Behavior varies by area of the codebase
- It includes steps like "First do X, then check Y, then verify Z"

---

## ✅ Repository Assessment Summary

**Status:** We already have a strong foundation for Copilot-first workflows. Many of the architect's proposed features are already implemented or partially implemented. This document has been updated to reflect the current state and identify only the remaining gaps.

### What We Already Have

✅ **Copilot Instructions (Fully Implemented)**
- `.github/copilot-instructions.md` - Comprehensive repo-wide guidance
- `.github/instructions/*.instructions.md` - Four scoped instruction files with `applyTo`:
  - `00-repo-basics.instructions.md` - Monorepo conventions (apps & libs)
  - `react-spa-router.instructions.md` - Client app patterns
  - `testing-and-quality.instructions.md` - Test framework patterns
  - `ui-and-accessibility.instructions.md` - UI component conventions

✅ **Agent Support (Fully Implemented)**
- `.github/agents/` - Eight custom agents already defined:
  - `common-ui-component-reviewer.agent.md`
  - `custom-agent-foundry.agent.md`
  - `git-commit-helper.agent.md`
  - `mcp-preflight.agent.md`
  - `pr-description-helper.agent.md`
  - `requirements-planner.agent.md`
  - `ui-designer.agent.md`
  - `webapp-debugger.agent.md`

✅ **Skills Framework (Partially Implemented)**
- `.github/skills/` - Two existing skill categories:
  - `chrome-devtools-webapp-debug/` - Debugging workflows
  - `shadcnui-component-review/` - Component review patterns

✅ **Validation Scripts (Partially Implemented)**
- `pnpm precommit` - Runs lint, type-check, build, and test on all projects
- Nx affected commands for scoped validation
- Individual project-level scripts (lint, test, type-check, build)

✅ **Documentation Structure**
- Comprehensive docs in `docs/` covering:
  - `contributing/` - CONTRIBUTING.md and README
  - `getting-started/` - Project goals, structure, why SPA
  - `guides/` - Component pages, navigation, theming, CTAs
  - `tooling/` - GitHub Copilot tooling, productivity, workflows
  - `integration/` - Contentful integration, key management
  - `maintenance/` - Branch status, modernization, security, upgrades

### What's Missing (Gaps to Address)

❌ **Root AGENTS.md** - No root-level AGENTS.md file (workflow/behavioral guidance)
   - Purpose: Define how agents should approach work repo-wide
   - Content: Planning expectations, commit discipline, verification steps
   - Impact: Agents currently lack procedural guidance

❌ **Nested AGENTS.md** - No app/lib-specific AGENTS.md files
   - Purpose: Area-specific workflow guidance (e.g., how to test specific libs)
   - Examples: `apps/client/AGENTS.md`, `libs/shadcnui/AGENTS.md`
   - Impact: Agents don't know domain-specific validation or build steps

❌ **Dedicated Workflow Skills** - Missing formal skill docs in `docs/ai/skills/`
   - Planning skill (how to create structured plans)
   - Systematic debugging skill (root cause analysis workflow)
   - Code review readiness skill (making changes reviewable)
   - Verification skill (evidence expectations)

❌ **Plans Directory** - No `docs/plans/` for tracking implementation plans
   - Format: `YYYY-MM-DD-<slug>.md`
   - Purpose: Track non-trivial changes with structured plans

❌ **Single `pnpm verify` Command** - Have `precommit` but not a lighter-weight `verify`
   - Current: `precommit` runs everything (slow for iteration)
   - Need: Lighter `verify` for quick pre-PR checks

❌ **AI Directory** - No centralized `docs/ai/` for AI-specific documentation
   - Target model documentation
   - Skill definitions
   - Workflow guides

❌ **Definition of Done** - Not explicitly documented in instructions
   - Should be in `.github/copilot-instructions.md`
   - Needs to reference plans, commits, verification

## Practical Examples: Instructions vs. AGENTS.md

To make the distinction concrete, here are examples of the same concern handled correctly in each mechanism:

### Example 1: Testing Expectations

**❌ Wrong - Testing workflow in instruction file:**
```markdown
<!-- .github/instructions/testing.instructions.md -->
When adding a new feature:
1. First write the test
2. Then implement the feature
3. Run pnpm test:all
4. Verify all tests pass
```

**✅ Right - Testing rules in instruction file, workflow in AGENTS.md:**

**Instruction file** (code rules):
```markdown
<!-- .github/instructions/testing-and-quality.instructions.md -->
- Write tests for all new features and bug fixes
- Use Vitest and @testing-library/react
- Colocate tests: Component.tsx + Component.test.tsx
- Minimum 80% coverage for new code
```

**AGENTS.md** (workflow):
```markdown
<!-- AGENTS.md -->
## Testing Workflow

For new features:
1. Identify the smallest testable unit
2. Write tests colocated with implementation
3. Run affected tests: `pnpm test:affected`
4. Verify coverage meets 80% threshold
5. Include test results in PR description
```

### Example 2: Component Accessibility

**❌ Wrong - Accessibility process in instruction file:**
```markdown
<!-- .github/instructions/ui.instructions.md -->
Before committing a component:
1. Test keyboard navigation
2. Verify focus management
3. Check with screen reader
4. Run axe DevTools
```

**✅ Right - Accessibility rules in instruction file, validation in AGENTS.md:**

**Instruction file** (code rules):
```markdown
<!-- .github/instructions/ui-and-accessibility.instructions.md -->
- All interactive elements must be keyboard accessible
- Form inputs require associated labels
- Use semantic HTML (button, nav, main)
- Ensure WCAG AA color contrast
- Provide ARIA labels where needed
```

**AGENTS.md** (validation workflow):
```markdown
<!-- libs/shadcnui/AGENTS.md -->
## Component Validation

Before marking a component complete:
1. Manual keyboard navigation test (Tab, Enter, Escape, Arrows)
2. Verify focus indicators are visible
3. Check Storybook accessibility panel for violations
4. Test with at least one screen reader if new pattern
5. Document any known accessibility limitations
```

### Key Insight

Notice how:
- **Instructions** say "what" (rules, patterns, constraints)
- **AGENTS.md** says "how" and "when" (workflow, sequence, validation steps)

If your guidance includes words like "first", "then", "before", "after", it probably belongs in AGENTS.md, not an instruction file.

## Context

We want to learn from the workflow ideas in `obra/superpowers` while remaining GitHub Copilot compliant, and apply them to our React SPA boilerplate `CambridgeMonorail/react-weapons-of-choice`. ([GitHub][1])

We are explicitly not adopting TDD as a required practice, but we do want the rest of the workflow structure: planning, systematic debugging, code review discipline, and verification evidence. ([GitHub][2])

## Goals

1. Improve developer experience and delivery speed by making Copilot agent work more reliable and repeatable.
2. Reduce context bloat by scoping instructions to the right folders and workflows.
3. Ensure every agent-driven change results in:

   * a clear plan
   * small, reviewable commits
   * verifiable evidence (lint, tests, build, and basic smoke checks)
4. Keep everything compatible with GitHub Copilot instructions and agent instruction mechanisms.

## Non goals

* Mandating TDD or rewriting the repo to be test-first.
* Introducing Claude Code specific tooling or assuming Claude-only workflows.
* Building a complex bespoke agent framework.

## Background references (for the developer)

Use these sources as the baseline for what Copilot supports today:

* Custom instructions in GitHub Copilot (repo-wide, path-specific, AGENTS.md)
  #fetch [https://docs.github.com/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot](https://docs.github.com/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot) ([GitHub Docs][3])

* Copilot tutorial: your first custom instructions and `applyTo` for path-specific rules
  #fetch [https://docs.github.com/en/copilot/tutorials/customization-library/custom-instructions/your-first-custom-instructions](https://docs.github.com/en/copilot/tutorials/customization-library/custom-instructions/your-first-custom-instructions) ([GitHub Docs][4])

* VS Code Copilot custom instructions (including the setting to enable instruction files)
  #fetch [https://code.visualstudio.com/docs/copilot/customization/custom-instructions](https://code.visualstudio.com/docs/copilot/customization/custom-instructions) ([Visual Studio Code][5])

* Agent Skills (open standard)
  #fetch [https://code.visualstudio.com/docs/copilot/customization/agent-skills](https://code.visualstudio.com/docs/copilot/customization/agent-skills) ([Visual Studio Code][6])
  #fetch [https://docs.github.com/copilot/concepts/agents/about-agent-skills](https://docs.github.com/copilot/concepts/agents/about-agent-skills) ([GitHub Docs][7])
  #fetch [https://github.blog/changelog/2025-12-18-github-copilot-now-supports-agent-skills/](https://github.blog/changelog/2025-12-18-github-copilot-now-supports-agent-skills/) ([The GitHub Blog][8])

* AGENTS.md format and precedence concept
  #fetch [https://agents.md/](https://agents.md/) ([agents.md][9])
  (Note: be aware of VS Code issues around nested AGENTS.md behaviour in some contexts)
  #fetch [https://github.com/microsoft/vscode/issues/271489](https://github.com/microsoft/vscode/issues/271489) ([GitHub][10])

* Inspiration: `obra/superpowers` workflow and systematic debugging skill
  #fetch [https://github.com/obra/superpowers](https://github.com/obra/superpowers) ([GitHub][1])
  #fetch [https://github.com/obra/superpowers/blob/main/skills/systematic-debugging/SKILL.md](https://github.com/obra/superpowers/blob/main/skills/systematic-debugging/SKILL.md) ([GitHub][2])

## Proposed work

### Phase 1: Audit what we have today

**Objective:** establish a baseline of current repo guidance, scripts, and typical workflows, then identify gaps.

**Tasks:**

1. Review repository documentation and developer entry points:

   * README, contribution guide, scripts, Nx targets, CI workflows.
   * Identify the “happy path” to run, test, and build locally. ([GitHub][11])

2. Audit current AI guidance:

   * Do we have `.github/copilot-instructions.md` today?
   * Do we have any `.github/instructions/*.instructions.md` with `applyTo`?
   * Do we have any `AGENTS.md` files?
   * If we have guidance elsewhere (docs folder), note what is duplicated or conflicting.

3. Produce an “as-is” inventory doc:

   * `docs/ai/as-is-inventory.md`
   * Include file paths and a short description of what each thing does.
   * Include a list of current scripts and their intended usage (`pnpm` commands, `nx` targets).

**Deliverable:** PR with the inventory doc only, no behaviour changes.
### ✅ Assessment: Phase 1 Complete - Strong Foundation Exists

**What We Found:**

1. **Repository documentation:**
   - ✅ Comprehensive README with setup, goals, and usage
   - ✅ CONTRIBUTING.md in docs/contributing/
   - ✅ Well-documented scripts in package.json
   - ✅ Nx targets configured in project.json files
   - ✅ CI workflows (ci.yml, deploy.yml, lighthouse-audit.yml)

2. **AI guidance audit:**
   - ✅ `.github/copilot-instructions.md` - Yes, comprehensive and well-structured
   - ✅ `.github/instructions/*.instructions.md` - Yes, 4 files with proper `applyTo` scoping
   - ❌ `AGENTS.md` files - No root or nested AGENTS.md files yet
   - ✅ `.github/agents/` - 8 custom agent definitions already exist
   - ✅ `.github/skills/` - 2 skill categories already defined

3. **Current scripts inventory:**
   - **Build:** `build:affected`, `build:all`, `build:client`, `build:shadcnui`, `build:storybook`
   - **Test:** `test:affected`, `test:all`, `test:client`, `test:shadcnui`
   - **Lint:** `lint:affected`, `lint:all`, `lint:client`, `lint:shadcnui`
   - **Type-check:** `type-check:affected`, `type-check:all`, `type-check:client`, `type-check:shadcnui`
   - **Format:** `format`, `format:check`
   - **Validation:** `precommit` (lint + type-check + build + test all)
   - **Serve:** `serve:client`, `serve:storybook`
### Phase 2: Define the target operating model for Copilot in this repo

**Objective:** agree how Copilot should behave by default, and how we scope and compose instructions.

We will adopt a three-layer model:

1. **Repo-wide baseline:** `.github/copilot-instructions.md`
   Keep it short and stable. It should cover:

   * stack summary (Nx, Vite React SPA, Tailwind, shadcn/ui)
   * coding conventions and file organisation expectations
   * “definition of done” for agent work (plan, small PR, verification evidence)
   * how to run `pnpm verify` (to be added)
     Ref: GitHub docs on repository-wide instructions. ([GitHub Docs][4])

2. **Path-specific rules:** `.github/instructions/*.instructions.md` using `applyTo`
   Examples:

   * `ui.instructions.md` applies to `libs/**/ui/**` and `apps/**/ui/**`
   * `testing.instructions.md` applies to test folders
   * `tooling.instructions.md` applies to Nx config, scripts, CI
     Ref: GitHub docs for path-specific instructions. ([GitHub Docs][4])

3. **Agent instructions:** `AGENTS.md` near complex subprojects

   * Root `AGENTS.md` plus optional nested ones in `apps/` and `libs/`.
   * Keep these practical: how to build, test, validate, and what not to do.
     Ref: AGENTS.md precedence in GitHub docs. ([GitHub Docs][3])

**Deliverable:** `docs/ai/target-operating-model.md` describing the above, with concrete file layout.

### ✅ Assessment: Phase 2 Mostly Complete

**Current State:**

1. **Repo-wide baseline:** `.github/copilot-instructions.md` ✅
   - ✅ Stack summary (Nx, Vite, React 19, Tailwind v4, shadcn/ui)
   - ✅ Coding conventions and file organization
   - ✅ Library structure documented
   - ❌ "Definition of done" not explicitly stated
   - ❌ `pnpm verify` command not yet created

2. **Path-specific rules:** `.github/instructions/*.instructions.md` ✅
   - ✅ `00-repo-basics.instructions.md` - applies to apps & libs
   - ✅ `react-spa-router.instructions.md` - applies to apps/client
   - ✅ `testing-and-quality.instructions.md` - applies to test files
   - ✅ `ui-and-accessibility.instructions.md` - applies to all TSX files

3. **Agent instructions:** `AGENTS.md` ❌
   - ❌ No root `AGENTS.md` yet
   - ❌ No nested `AGENTS.md` in apps/ or libs/
   - ✅ We do have `.github/agents/*.agent.md` files (8 custom agents)

**Remaining Work:**
- Add root `AGENTS.md` file
- Consider adding nested `AGENTS.md` in apps/ and libs/ if needed
- Add "definition of done" to copilot-instructions.md
- Create `pnpm verify` command

### Phase 3: Introduce “workflow skills” without TDD

**Objective:** steal the good bits from superpowers, but implement them as Copilot-friendly checklists, templates, and scripts.

Create a folder:

* `docs/ai/skills/`

Add these skills (each a short markdown file, designed to be referenced from instructions and used by humans too):

1. `planning.md`

   * How to produce a plan with small tasks
   * Required format for tasks:

     * files to change
     * command(s) to run
     * expected observable result
     * acceptance checks

2. `systematic-debugging.md`

   * Root cause first, reproduce, minimise, fix, verify
   * Include “write down what changed” and “how do we know it is fixed”
   * Inspired by superpowers systematic debugging shape. ([GitHub][2])

3. `code-review-ready.md`

   * “Make it easy to review” rules:

     * small diffs
     * no drive-by refactors
     * explain trade-offs
     * include screenshots for UI changes

4. `verification.md`

   * What evidence we expect in PR descriptions:

     * lint pass
     * unit tests pass (if present)
     * build pass
     * minimal smoke steps
   * Link to `pnpm verify` which we will add.

**Deliverable:** PR adding these docs plus references from the instructions files.

### Phase 4: Add a single verification entry point

**Status:** ⚠️ PARTIALLY COMPLETE - We have `precommit` but need lighter `verify`.

**Current State:**
- ✅ `pnpm precommit` exists - runs lint, type-check, build, test on all projects
- ✅ Individual validation scripts exist (`lint:*`, `test:*`, `type-check:*`, `build:*`)
- ✅ Nx affected commands work (`lint:affected`, `test:affected`, etc.)
- ❌ No dedicated `pnpm verify` command (lighter than precommit)

**Remaining Work:**

Add a top-level script:

* `pnpm verify`

It should run the common checks in a sensible order, likely:

* formatting (if configured)
* lint
* unit tests
* build
* optional Playwright smoke if already present

If Playwright is not currently in the repo, do not add it in this phase. Instead, define an extension point such as `pnpm verify:ui` to be implemented later.

**Deliverables:**

* `package.json` script(s)
* `docs/ai/verification.md` updated to reference them
* Update README “Development” section to point to `pnpm verify` as the default pre-PR command. ([GitHub][11])

### Phase 5: Tighten instructions to enforce artefacts and evidence

**Objective:** make Copilot agent mode behave like a reliable teammate.

Update the repo instruction files so that when Copilot is asked to implement a change, it must:

1. Create or update a plan file for non-trivial changes:

   * `docs/plans/YYYY-MM-DD-<slug>.md`
2. Make changes in small, reviewable commits.
3. Include verification evidence in the PR description, referencing the `pnpm verify` output.
4. For bugfixes, follow `docs/ai/skills/systematic-debugging.md`.

Also ensure the repo documents how to enable instruction files in VS Code:

* mention `github.copilot.chat.codeGeneration.useInstructionFiles` in the setup docs. ([Visual Studio Code][5])

**Deliverable:** PR adjusting instruction files and adding a short “Copilot setup” section in docs.

## Acceptance criteria

### ✅ Already Met

* ✅ We have repo-wide and path-scoped instruction files with minimal duplication.
* ✅ Documentation exists for local run steps, structure, and workflows.
* ✅ No TDD mandate is introduced.

### ⚠️ Partially Met

* ⚠️ We have skill docs (2 categories in `.github/skills/`) but need the 4 specific workflow skills.
* ⚠️ We have validation scripts (`precommit`) but need dedicated `pnpm verify`.

### ❌ Not Yet Met

* ❌ No explicit "definition of done" documented in instructions.
* ❌ No `docs/plans/` directory for implementation plans.
* ❌ No root or nested `AGENTS.md` files.
* ❌ No VS Code setup guidance for enabling instruction files.
* ❌ No `docs/ai/` directory with inventory and target model docs.

## Suggested repo structure (target)

### ✅ Already Implemented

* `.github/`
  * ✅ `copilot-instructions.md`
  * ✅ `instructions/`
    * ✅ `00-repo-basics.instructions.md`
    * ✅ `react-spa-router.instructions.md`
    * ✅ `testing-and-quality.instructions.md`
    * ✅ `ui-and-accessibility.instructions.md`
  * ✅ `agents/` (8 custom agents)
  * ✅ `skills/` (2 skill categories)

### ❌ To Be Added

#### AGENTS.md Files (Workflow/Behavioral Guidance)

* ❌ `AGENTS.md` (root level)
  - **Purpose:** Define how agents should behave repo-wide
  - **Content:** Planning process, commit discipline, verification workflow
  - **Example:** "For non-trivial changes, create a plan in docs/plans/"
  
* ❌ `apps/<app>/AGENTS.md` (optional, as needed)
  - **Purpose:** App-specific workflow guidance
  - **Example:** `apps/client/AGENTS.md` for client-specific testing or deployment steps
  
* ❌ `libs/<lib>/AGENTS.md` (optional, as needed)
  - **Purpose:** Library-specific workflow guidance  
  - **Example:** `libs/shadcnui/AGENTS.md` for component validation workflows

#### Workflow Skills and Documentation

* ❌ `docs/ai/`
  * ❌ `target-operating-model.md` - Document the three-layer model
  * ❌ `skills/`
    * ❌ `planning.md` - How to create structured task plans
    * ❌ `systematic-debugging.md` - Root cause analysis workflow
    * ❌ `code-review-ready.md` - Making changes reviewable
    * ❌ `verification.md` - Evidence expectations for PRs
* ❌ `docs/plans/`
  * ❌ `README.md` - Explain plan format and purpose
  * ❌ `YYYY-MM-DD-<slug>.md` (created as needed for non-trivial work)

## Implementation notes and caveats

### Critical Distinction to Maintain

When implementing, maintain clear separation:

- **Instruction files** (`.github/copilot-instructions.md` and `.github/instructions/*.instructions.md`)
  - ✅ Code rules, patterns, constraints
  - ✅ "What the code should look like"
  - ❌ NOT for workflow steps or process

- **AGENTS.md files** (root and nested)
  - ✅ Workflow, process, behavioral guidance
  - ✅ "How to approach work in this area"
  - ❌ NOT for code shape or patterns

### Technical Considerations

* Nested `AGENTS.md` precedence is the intended model, but there have been VS Code reports where nested files were not applied in some scenarios. Validate behaviour in our actual toolchain (VS Code stable, VS Code Insiders, Copilot coding agent) and document any constraints we observe. ([GitHub][10])
* Keep the repo-wide instruction file intentionally short to avoid instruction bloat, and push specifics into scoped instruction files and nearby `AGENTS.md`.
* AGENTS.md files use **nearest file wins** (precedence), not additive stacking like instruction files.
* Instruction files use **additive stacking** - child instructions layer on top of parent.

## Deliverable plan (PR sequence)

### ✅ Already Complete

1. ~~PR 1: `docs/ai/as-is-inventory.md`~~ - This document serves as the assessment
2. ~~PR 2: `docs/ai/target-operating-model.md` and proposed file layout~~ - Covered in this assessment
3. ~~PR 3: Add `.github/copilot-instructions.md`, initial `.github/instructions/*.instructions.md`~~ - Already exists (4 instruction files)

### 🔄 Remaining Work

4. **PR 1 (Next):** Add root `AGENTS.md` and workflow skill docs
   - **Root `AGENTS.md` file** - Workflow/behavioral guidance (NOT code rules)
     - How to approach tasks
     - Planning expectations
     - Commit discipline
     - Verification workflow
   - **Workflow skills in `docs/ai/skills/`:**
     - `planning.md` - Structured task planning format
     - `systematic-debugging.md` - Root cause analysis process
     - `code-review-ready.md` - Making changes reviewable
     - `verification.md` - PR evidence expectations
   - **Create `docs/plans/`** directory with README explaining format

5. **PR 2:** Add `pnpm verify` command and update documentation
   - Add `verify` script to package.json (lighter than `precommit`)
   - Update README with verification steps
   - Add VS Code setup guidance for enabling instruction files
   - Document "definition of done" in `.github/copilot-instructions.md`

6. **PR 3 (Optional):** Add nested `AGENTS.md` files as needed
   - `apps/client/AGENTS.md` - If app-specific workflows needed
   - `libs/shadcnui/AGENTS.md` - If component-specific validation needed
   - `libs/*/AGENTS.md` - For any lib with unique workflows
   - **Remember:** These are for workflows, not code patterns

## Quick Reference: When to Use What

### Use Instruction Files When You're Saying:

- ✅ "Use TypeScript strict mode"
- ✅ "Import shadcn/ui components from @rwoc/shadcnui"
- ✅ "Use named exports, not default exports"
- ✅ "Ensure ARIA labels on interactive elements"
- ✅ "Colocate tests with implementation files"

### Use AGENTS.md When You're Saying:

- ✅ "Before starting work, create a plan in docs/plans/"
- ✅ "Run `pnpm test:shadcnui` to validate changes in this lib"
- ✅ "For UI changes, include screenshots in PR description"
- ✅ "Make commits small and reviewable"
- ✅ "Run `pnpm verify` before declaring work complete"

### Red Flags (Probably in Wrong File):

- ❌ Sequential steps in instruction file ("First do X, then Y, then Z")
- ❌ Code patterns in AGENTS.md ("Use this import style")
- ❌ Build commands in instruction file (belongs in AGENTS.md)
- ❌ Library choices in AGENTS.md (belongs in instruction file)

## Summary: Strong Foundation, Minor Gaps

**Key Takeaway:** The architect's proposed improvements are largely already implemented in this repository. We have:

- ✅ Comprehensive Copilot instructions (repo-wide and path-scoped)
- ✅ Custom agents defined (8 agents)
- ✅ Skill framework started (2 skill categories)
- ✅ Validation scripts (`precommit`)
- ✅ Well-documented codebase

**What's Missing:**

- Root and nested `AGENTS.md` files
- Four specific workflow skill docs (planning, systematic debugging, code review, verification)
- Dedicated `pnpm verify` command
- `docs/plans/` directory structure
- Explicit "definition of done" in instructions
- VS Code setup guidance

**Effort Estimate:** 2-3 PRs to complete the remaining items, mostly documentation work.

[1]: https://github.com/obra/superpowers/blob/main/README.md?utm_source=chatgpt.com "README.md - obra/superpowers"
[2]: https://github.com/obra/superpowers/blob/main/skills/systematic-debugging/SKILL.md?utm_source=chatgpt.com "superpowers/skills/systematic-debugging/SKILL.md at main"
[3]: https://docs.github.com/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot?utm_source=chatgpt.com "Adding repository custom instructions for GitHub Copilot"
[4]: https://docs.github.com/en/copilot/tutorials/customization-library/custom-instructions/your-first-custom-instructions?utm_source=chatgpt.com "Your first custom instructions"
[5]: https://code.visualstudio.com/docs/copilot/customization/custom-instructions?utm_source=chatgpt.com "Use custom instructions in VS Code"
[6]: https://code.visualstudio.com/docs/copilot/customization/agent-skills?utm_source=chatgpt.com "Use Agent Skills in VS Code"
[7]: https://docs.github.com/copilot/concepts/agents/about-agent-skills?utm_source=chatgpt.com "About Agent Skills"
[8]: https://github.blog/changelog/2025-12-18-github-copilot-now-supports-agent-skills/?utm_source=chatgpt.com "GitHub Copilot now supports Agent Skills"
[9]: https://agents.md/?utm_source=chatgpt.com "AGENTS.md"
[10]: https://github.com/microsoft/vscode/issues/271489?utm_source=chatgpt.com "GitHub Copilot ignores nested AGENTS.md files but ..."
[11]: https://github.com/CambridgeMonorail/react-weapons-of-choice?utm_source=chatgpt.com "CambridgeMonorail/react-weapons-of-choice"

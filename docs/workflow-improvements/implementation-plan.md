# Copilot-First Agent Workflow - Implementation Plan

**Status:** 🔄 In Progress  
**Branch:** `copilot-first-agent-workflow-improvements`  
**Start Date:** 2026-01-28

## Overview

This document tracks the incremental implementation of Copilot-first agent workflow improvements. Each phase is broken down into specific, trackable tasks.

## Progress Summary

- **Phase 0 (Setup):** ✅ Complete
- **Phase 1 (AGENTS.md and Skills):** ⬜ Not Started (0/12 tasks)
- **Phase 2 (Verification Command):** ⬜ Not Started (0/5 tasks)
- **Phase 3 (Documentation Updates):** ⬜ Not Started (0/4 tasks)
- **Phase 4 (Optional Nested AGENTS.md):** ⬜ Not Started (0/3 tasks)

**Overall Progress:** 1/5 phases complete

---

## Phase 0: Setup and Assessment ✅

**Goal:** Create branch and assess current state  
**Status:** ✅ Complete

### Tasks

- [x] Create branch `copilot-first-agent-workflow-improvements`
- [x] Review architect's requirements
- [x] Audit existing Copilot instructions
- [x] Audit existing agent definitions
- [x] Document current state in `workflow-improvements.md`
- [x] Identify gaps and create implementation plan

**Deliverables:**
- ✅ Branch created
- ✅ `docs/workflow-improvements/workflow-improvements.md` (assessment)
- ✅ `docs/workflow-improvements/implementation-plan.md` (this file)

---

## Phase 1: Root AGENTS.md and Workflow Skills 🔄

**Goal:** Add root-level behavioral guidance and formal workflow skills  
**Status:** ⬜ Not Started  
**Estimated Effort:** 3-4 hours  
**Dependencies:** None

### 1.1 Create Root AGENTS.md

**File:** `AGENTS.md` (root level)

- [ ] **Task 1.1.1:** Create root `AGENTS.md` file
  - Purpose: Define how agents behave repo-wide
  - Include: Planning expectations, commit discipline, verification workflow
  - Structure:
    - Introduction to agent workflows in this repo
    - Planning process (when to create plans)
    - Commit discipline (small, reviewable commits)
    - Verification expectations (run `pnpm verify`)
    - Debugging approach (reference systematic-debugging skill)
    - PR requirements (evidence, screenshots for UI)
  
- [ ] **Task 1.1.2:** Add section on "How to Approach Tasks"
  - Read issue/request carefully
  - Break down into small steps
  - Create plan if non-trivial
  - Make incremental progress
  
- [ ] **Task 1.1.3:** Add section on "Definition of Done"
  - Code follows instructions (linting, type-checking pass)
  - Tests written and passing
  - Documentation updated if needed
  - `pnpm verify` runs successfully
  - PR description includes evidence
  
- [ ] **Task 1.1.4:** Add section on "What NOT to Do"
  - Don't make broad refactors without explicit request
  - Don't mix unrelated changes in one PR
  - Don't skip verification steps
  - Don't invent new scripts without discussion

**Acceptance Criteria:**
- [ ] Root `AGENTS.md` exists and is well-structured
- [ ] File is focused on workflow/behavior (not code patterns)
- [ ] File references workflow skills (to be created next)
- [ ] File includes practical examples

**Reference:** See `obra/superpowers` AGENTS.md for inspiration

---

### 1.2 Create docs/ai Directory Structure

- [ ] **Task 1.2.1:** Create `docs/ai/` directory
- [ ] **Task 1.2.2:** Create `docs/ai/skills/` subdirectory
- [ ] **Task 1.2.3:** Create `docs/ai/README.md` explaining the directory purpose

**Acceptance Criteria:**
- [ ] Directory structure exists
- [ ] README explains what goes in `docs/ai/`

---

### 1.3 Create Planning Skill

**File:** `docs/ai/skills/planning.md`

- [ ] **Task 1.3.1:** Create `planning.md` file
  - Purpose: How to create structured task plans
  - Required format for plans:
    - Title and date
    - Goal/objective
    - Context/background
    - Task breakdown with:
      - Files to change
      - Command(s) to run
      - Expected observable result
      - Acceptance checks
  - When to create plans (non-trivial changes)
  - Where plans live (`docs/plans/`)

**Acceptance Criteria:**
- [ ] File exists with clear planning template
- [ ] Includes examples of good vs. bad plans
- [ ] Explains when planning is required vs. optional

---

### 1.4 Create Systematic Debugging Skill

**File:** `docs/ai/skills/systematic-debugging.md`

- [ ] **Task 1.4.1:** Create `systematic-debugging.md` file
  - Purpose: Root cause analysis workflow
  - Process:
    1. Understand the problem (reproduce reliably)
    2. Find root cause (don't just fix symptoms)
    3. Minimize the reproduction case
    4. Fix the root cause
    5. Verify the fix
    6. Document what changed and why
  - Include: "How do we know it's fixed?"
  - Reference: Inspired by `obra/superpowers` systematic debugging

**Acceptance Criteria:**
- [ ] File exists with clear debugging process
- [ ] Includes practical examples
- [ ] Emphasizes verification and documentation

---

### 1.5 Create Code Review Readiness Skill

**File:** `docs/ai/skills/code-review-ready.md`

- [ ] **Task 1.5.1:** Create `code-review-ready.md` file
  - Purpose: Making changes easy to review
  - Rules:
    - Keep diffs small (< 500 lines when possible)
    - No drive-by refactors
    - One logical change per PR
    - Explain trade-offs in PR description
    - Include screenshots for UI changes
    - Include before/after examples where applicable
  - Self-review checklist

**Acceptance Criteria:**
- [ ] File exists with clear review readiness checklist
- [ ] Includes examples of reviewable vs. hard-to-review PRs
- [ ] Includes self-review checklist

---

### 1.6 Create Verification Skill

**File:** `docs/ai/skills/verification.md`

- [ ] **Task 1.6.1:** Create `verification.md` file
  - Purpose: What evidence we expect in PRs
  - Evidence requirements:
    - Lint pass (`pnpm lint:affected`)
    - Type-check pass (`pnpm type-check:affected`)
    - Unit tests pass (`pnpm test:affected`)
    - Build pass (`pnpm build:affected`)
    - Manual testing notes (for UI/UX changes)
  - Link to `pnpm verify` command (to be added in Phase 2)
  - Template for PR description evidence section

**Acceptance Criteria:**
- [ ] File exists with clear verification expectations
- [ ] Includes evidence template for PR descriptions
- [ ] References `pnpm verify` (note it will be added in Phase 2)

---

### 1.7 Create docs/plans Directory

- [ ] **Task 1.7.1:** Create `docs/plans/` directory
- [ ] **Task 1.7.2:** Create `docs/plans/README.md`
  - Explain plan format: `YYYY-MM-DD-<slug>.md`
  - Explain when to create plans
  - Reference the planning skill
  - Include plan template
  - Include example plan

**Acceptance Criteria:**
- [ ] Directory exists
- [ ] README explains plan format and purpose
- [ ] Includes a template or example plan

---

### 1.8 Update Root AGENTS.md to Reference Skills

- [ ] **Task 1.8.1:** Add references to workflow skills in root AGENTS.md
  - Link to `docs/ai/skills/planning.md`
  - Link to `docs/ai/skills/systematic-debugging.md`
  - Link to `docs/ai/skills/code-review-ready.md`
  - Link to `docs/ai/skills/verification.md`

**Acceptance Criteria:**
- [ ] Root AGENTS.md links to all skill documents
- [ ] Links use relative paths and work correctly

---

### Phase 1 Completion Checklist

- [ ] All 12 tasks above completed
- [ ] Root `AGENTS.md` exists and is well-structured
- [ ] All 4 workflow skills exist and are comprehensive
- [ ] `docs/plans/` directory exists with README and template
- [ ] Skills are referenced from root AGENTS.md
- [ ] Commit all changes with conventional commit message
- [ ] Self-review against acceptance criteria

**Commit Message:**
```
docs(copilot): add root AGENTS.md and workflow skills

- Add root AGENTS.md with workflow/behavioral guidance
- Create docs/ai/skills/ with 4 workflow skills:
  - planning.md: Structured task planning
  - systematic-debugging.md: Root cause analysis
  - code-review-ready.md: Reviewable changes
  - verification.md: PR evidence expectations
- Create docs/plans/ directory for implementation plans
- Reference skills from root AGENTS.md

Ref: #<issue-number> (if applicable)
```

---

## Phase 2: Verification Command 🔄

**Goal:** Add lightweight `pnpm verify` command for pre-PR checks  
**Status:** ⬜ Not Started  
**Estimated Effort:** 1-2 hours  
**Dependencies:** Phase 1 complete

### 2.1 Add pnpm verify Script

**File:** `package.json`

- [ ] **Task 2.1.1:** Add `verify` script to package.json
  - Options to consider:
    - **Option A:** Lightweight (format + lint + test, skip build)
    - **Option B:** Same as `precommit` (alias)
    - **Option C:** Use affected commands (faster iteration)
  - Recommended: Option A or C for faster feedback
  - Script should run:
    1. `pnpm format:check` (or `pnpm format`)
    2. `pnpm lint:affected`
    3. `pnpm type-check:affected`
    4. `pnpm test:affected`
    5. Optionally: `pnpm build:affected` (if Option C)

- [ ] **Task 2.1.2:** Test `pnpm verify` on clean checkout
- [ ] **Task 2.1.3:** Test `pnpm verify` with intentional lint error
- [ ] **Task 2.1.4:** Test `pnpm verify` with intentional type error
- [ ] **Task 2.1.5:** Ensure script exits with error code on failure

**Acceptance Criteria:**
- [ ] `pnpm verify` script exists in package.json
- [ ] Script runs successfully on clean checkout
- [ ] Script fails appropriately with errors
- [ ] Script is faster than `precommit` (if that was the goal)

**Example Implementation (Option A - Lightweight):**
```json
{
  "scripts": {
    "verify": "pnpm format:check && pnpm lint:affected && pnpm type-check:affected && pnpm test:affected"
  }
}
```

**Example Implementation (Option C - Affected):**
```json
{
  "scripts": {
    "verify": "pnpm format:check && pnpm lint:affected && pnpm type-check:affected && pnpm test:affected && pnpm build:affected"
  }
}
```

---

### 2.2 Update Verification Skill

**File:** `docs/ai/skills/verification.md`

- [ ] **Task 2.2.1:** Update verification.md to reference `pnpm verify`
- [ ] **Task 2.2.2:** Add usage examples
- [ ] **Task 2.2.3:** Update PR evidence template to mention `pnpm verify` output

**Acceptance Criteria:**
- [ ] verification.md references the new command
- [ ] Includes clear usage instructions

---

### Phase 2 Completion Checklist

- [ ] All 7 tasks above completed
- [ ] `pnpm verify` script exists and works
- [ ] Script tested with both success and failure cases
- [ ] verification.md updated to reference new command
- [ ] Commit changes

**Commit Message:**
```
feat(tooling): add pnpm verify command for pre-PR checks

- Add lightweight verify script (format, lint, type-check, test)
- Uses affected commands for faster iteration
- Update verification.md skill to reference new command

Ref: #<issue-number> (if applicable)
```

---

## Phase 3: Documentation Updates 🔄

**Goal:** Update existing documentation to reference new workflows  
**Status:** ⬜ Not Started  
**Estimated Effort:** 1-2 hours  
**Dependencies:** Phase 2 complete

### 3.1 Update Root Copilot Instructions

**File:** `.github/copilot-instructions.md`

- [ ] **Task 3.1.1:** Add "Definition of Done" section
  - Reference root AGENTS.md for workflow details
  - Reference workflow skills
  - Mention `pnpm verify` requirement
  - Mention plan creation for non-trivial changes

- [ ] **Task 3.1.2:** Add section on "Agent Expectations"
  - Small, reviewable commits
  - Verification evidence in PRs
  - Reference to AGENTS.md for detailed workflow

**Acceptance Criteria:**
- [ ] "Definition of Done" section exists
- [ ] References AGENTS.md and workflow skills
- [ ] Doesn't duplicate content (links instead)

---

### 3.2 Update README

**File:** `README.md`

- [ ] **Task 3.2.1:** Add "Verification" section to Development workflow
  - Explain `pnpm verify` command
  - Position it as the default pre-PR command
  - Show usage example

- [ ] **Task 3.2.2:** Add "Copilot Setup" section (or update existing)
  - Mention enabling instruction files in VS Code
  - Setting: `github.copilot.chat.codeGeneration.useInstructionFiles`
  - Link to VS Code docs on custom instructions

- [ ] **Task 3.2.3:** Add reference to AGENTS.md in "For Contributors" section
  - Link to root AGENTS.md
  - Mention workflow skills in docs/ai/skills/

**Acceptance Criteria:**
- [ ] README includes verification steps
- [ ] README includes Copilot setup guidance
- [ ] README references AGENTS.md and workflow skills

---

### 3.3 Update CONTRIBUTING.md

**File:** `docs/contributing/CONTRIBUTING.md`

- [ ] **Task 3.3.1:** Add reference to workflow skills
- [ ] **Task 3.3.2:** Add reference to root AGENTS.md
- [ ] **Task 3.3.3:** Update PR guidelines to mention verification evidence
- [ ] **Task 3.3.4:** Add section on when to create plans

**Acceptance Criteria:**
- [ ] CONTRIBUTING.md references AGENTS.md and skills
- [ ] PR guidelines updated

---

### 3.4 Create docs/ai/target-operating-model.md

**File:** `docs/ai/target-operating-model.md`

- [ ] **Task 3.4.1:** Create target-operating-model.md
  - Document the three-layer model:
    1. Repo-wide copilot-instructions.md
    2. Path-scoped *.instructions.md files
    3. AGENTS.md files (root and nested)
  - Explain the distinction between instructions and AGENTS.md
  - Show how they work together
  - Include practical examples
  - Reference the workflow-improvements.md assessment

**Acceptance Criteria:**
- [ ] File exists and is comprehensive
- [ ] Clearly explains the three-layer model
- [ ] Includes practical examples

---

### Phase 3 Completion Checklist

- [ ] All 11 tasks above completed
- [ ] copilot-instructions.md updated with "Definition of Done"
- [ ] README updated with verification and Copilot setup
- [ ] CONTRIBUTING.md updated with references to new workflows
- [ ] target-operating-model.md created
- [ ] Commit changes

**Commit Message:**
```
docs(copilot): update documentation with new workflows

- Add "Definition of Done" to copilot-instructions.md
- Update README with verification steps and Copilot setup
- Update CONTRIBUTING.md with workflow references
- Create target-operating-model.md explaining three-layer model

Ref: #<issue-number> (if applicable)
```

---

## Phase 4: Optional Nested AGENTS.md Files 🔄

**Goal:** Add app/lib-specific workflow guidance as needed  
**Status:** ⬜ Not Started  
**Estimated Effort:** 1-3 hours (varies by need)  
**Dependencies:** Phase 3 complete  
**Note:** This phase is optional and should be done only where domain-specific workflows exist

### 4.1 Evaluate Need for Nested AGENTS.md

- [ ] **Task 4.1.1:** Review apps/client for app-specific workflows
  - Does it have unique testing requirements?
  - Does it have unique deployment steps?
  - Does it have unique validation needs?

- [ ] **Task 4.1.2:** Review libs/shadcnui for lib-specific workflows
  - Component validation process?
  - Accessibility testing workflow?
  - Storybook requirements?

- [ ] **Task 4.1.3:** Review other libs for specific needs
  - libs/shell
  - libs/landing
  - libs/shadcnui-blocks
  - libs/common-tailwind

**Decision Criteria:**
- Only create nested AGENTS.md if there are **workflow differences**
- Don't create nested AGENTS.md for code pattern differences (use instructions instead)

---

### 4.2 Create apps/client/AGENTS.md (If Needed)

**File:** `apps/client/AGENTS.md`

- [ ] **Task 4.2.1:** Create apps/client/AGENTS.md
  - Build commands specific to client app
  - E2E testing workflow (Playwright)
  - Local development validation
  - Deployment considerations

**Acceptance Criteria:**
- [ ] File exists only if needed
- [ ] Focuses on workflow, not code patterns
- [ ] References relevant skills from docs/ai/skills/

---

### 4.3 Create libs/shadcnui/AGENTS.md (If Needed)

**File:** `libs/shadcnui/AGENTS.md`

- [ ] **Task 4.3.1:** Create libs/shadcnui/AGENTS.md
  - Component validation workflow
  - Accessibility testing checklist
  - Storybook story requirements
  - Testing approach for UI components

**Acceptance Criteria:**
- [ ] File exists only if needed
- [ ] Includes specific validation steps for components
- [ ] References accessibility requirements from instructions

---

### Phase 4 Completion Checklist

- [ ] Evaluated need for nested AGENTS.md files
- [ ] Created nested AGENTS.md only where needed
- [ ] Each nested file focuses on workflow/process
- [ ] Files complement (not duplicate) root AGENTS.md
- [ ] Commit changes

**Commit Message:**
```
docs(copilot): add nested AGENTS.md for domain-specific workflows

- Add apps/client/AGENTS.md for client-specific workflows
- Add libs/shadcnui/AGENTS.md for component validation
- Each file provides area-specific behavioral guidance

Ref: #<issue-number> (if applicable)
```

---

## Phase 5: Validation and Testing 🔄

**Goal:** Validate that all changes work correctly  
**Status:** ⬜ Not Started  
**Estimated Effort:** 1-2 hours  
**Dependencies:** Phases 1-4 complete

### 5.1 Validate Root AGENTS.md

- [ ] **Task 5.1.1:** Read through root AGENTS.md
  - Ensure it's clear and actionable
  - Check all links work
  - Verify examples are practical

- [ ] **Task 5.1.2:** Test with Copilot agent
  - Start a chat and ask Copilot to explain the workflow
  - Verify Copilot references AGENTS.md
  - Check if guidance is followed

**Acceptance Criteria:**
- [ ] Root AGENTS.md is clear and comprehensive
- [ ] Copilot agent acknowledges and follows guidance

---

### 5.2 Validate Workflow Skills

- [ ] **Task 5.2.1:** Review each skill document
  - planning.md is clear and has examples
  - systematic-debugging.md has actionable steps
  - code-review-ready.md has practical checklist
  - verification.md has clear evidence template

- [ ] **Task 5.2.2:** Test skills with Copilot agent
  - Ask Copilot to create a plan (test planning skill)
  - Ask Copilot about debugging approach
  - Ask Copilot about PR requirements

**Acceptance Criteria:**
- [ ] All skill documents are comprehensive
- [ ] Copilot can reference and use skills

---

### 5.3 Validate Verification Command

- [ ] **Task 5.3.1:** Run `pnpm verify` on clean main branch
- [ ] **Task 5.3.2:** Introduce lint error and verify command fails
- [ ] **Task 5.3.3:** Fix error and verify command passes
- [ ] **Task 5.3.4:** Time the command (should be reasonable)

**Acceptance Criteria:**
- [ ] `pnpm verify` runs successfully on clean checkout
- [ ] Command fails appropriately with errors
- [ ] Command runtime is acceptable (< 5 minutes on affected)

---

### 5.4 Validate Documentation Updates

- [ ] **Task 5.4.1:** Review all updated documentation
  - README verification section
  - README Copilot setup section
  - copilot-instructions.md definition of done
  - CONTRIBUTING.md references

- [ ] **Task 5.4.2:** Check all links
  - Links to AGENTS.md work
  - Links to skills work
  - Links to external docs work

**Acceptance Criteria:**
- [ ] All documentation is accurate and complete
- [ ] All links work correctly
- [ ] Documentation is consistent

---

### 5.5 Test Nested AGENTS.md (If Created)

- [ ] **Task 5.5.1:** Validate nested AGENTS.md files
- [ ] **Task 5.5.2:** Test precedence (nested overrides root)
- [ ] **Task 5.5.3:** Verify VS Code picks up nested files

**Note:** There are known issues with nested AGENTS.md in some VS Code versions. Document any issues found.

**Acceptance Criteria:**
- [ ] Nested AGENTS.md files work as expected
- [ ] Any limitations documented

---

### Phase 5 Completion Checklist

- [ ] All validation tasks completed
- [ ] All files reviewed and working
- [ ] All links verified
- [ ] Copilot agent tested with new guidance
- [ ] Any issues documented

---

## Final Review and PR Preparation 🔄

**Status:** ⬜ Not Started  
**Estimated Effort:** 1 hour  
**Dependencies:** All phases complete

### Final Checklist

- [ ] **Review all changes**
  - [ ] Root AGENTS.md exists and is comprehensive
  - [ ] All 4 workflow skills exist
  - [ ] docs/plans/ directory exists with README
  - [ ] `pnpm verify` command works
  - [ ] All documentation updated
  - [ ] Optional nested AGENTS.md created if needed

- [ ] **Run full validation**
  - [ ] `pnpm verify` passes
  - [ ] `pnpm precommit` passes
  - [ ] All tests pass
  - [ ] All builds succeed

- [ ] **Prepare PR**
  - [ ] Write comprehensive PR description
  - [ ] Include before/after comparison
  - [ ] Include verification evidence
  - [ ] Include screenshots if applicable
  - [ ] Reference workflow-improvements.md

- [ ] **Self-review**
  - [ ] Check diff for any unintended changes
  - [ ] Verify all files use consistent formatting
  - [ ] Check for typos and grammar
  - [ ] Ensure no sensitive information committed

---

## PR Description Template

```markdown
# Copilot-First Agent Workflow Improvements

## Summary

This PR implements the remaining items from the Copilot-first agent workflow improvements spec. We already had a strong foundation with copilot instructions and custom agents. This PR adds the missing pieces:

- Root AGENTS.md for workflow/behavioral guidance
- Four workflow skills (planning, systematic debugging, code review, verification)
- `pnpm verify` command for pre-PR checks
- Documentation updates

## Changes

### Added
- ✅ Root `AGENTS.md` - Workflow and behavioral guidance for agents
- ✅ `docs/ai/skills/planning.md` - How to create structured plans
- ✅ `docs/ai/skills/systematic-debugging.md` - Root cause analysis workflow
- ✅ `docs/ai/skills/code-review-ready.md` - Making changes reviewable
- ✅ `docs/ai/skills/verification.md` - PR evidence expectations
- ✅ `docs/plans/` directory with README and template
- ✅ `pnpm verify` command for lightweight pre-PR validation
- ✅ `docs/ai/target-operating-model.md` - Documents the three-layer model

### Updated
- ✅ `.github/copilot-instructions.md` - Added "Definition of Done"
- ✅ `README.md` - Added verification steps and Copilot setup guidance
- ✅ `docs/contributing/CONTRIBUTING.md` - References to new workflows

### Optional (if applicable)
- ✅ `apps/client/AGENTS.md` - Client-specific workflows
- ✅ `libs/shadcnui/AGENTS.md` - Component validation workflows

## Key Distinction: Instructions vs. AGENTS.md

**Instruction files** (`.github/copilot-instructions.md` and `.github/instructions/*.instructions.md`):
- Tell Copilot **what the code should look like**
- Code rules, patterns, constraints
- Always active during code generation

**AGENTS.md files** (root and nested):
- Tell Copilot **how to behave while working**
- Workflow, process, behavioral guidance
- Only affects agent mode

## Verification

```bash
# Run verification command
pnpm verify

# Output:
✓ Format check passed
✓ Lint passed (affected projects)
✓ Type check passed (affected projects)
✓ Tests passed (affected projects)
```

## Testing Done

- [x] Verified `pnpm verify` runs successfully
- [x] Tested with intentional lint error (fails correctly)
- [x] Reviewed all documentation for accuracy
- [x] Checked all links work
- [x] Tested with Copilot agent (references AGENTS.md)

## References

- Related spec: `docs/workflow-improvements/workflow-improvements.md`
- Implementation plan: `docs/workflow-improvements/implementation-plan.md`
- Inspired by: [obra/superpowers](https://github.com/obra/superpowers)

## Checklist

- [ ] All phases complete
- [ ] All acceptance criteria met
- [ ] Documentation reviewed
- [ ] Verification command works
- [ ] Self-review complete
```

---

## Tracking Progress

**How to use this plan:**

1. Work through phases sequentially (Phase 1 → 2 → 3 → 4 → 5)
2. Check off tasks as you complete them
3. Complete all tasks in a phase before moving to the next
4. Review acceptance criteria for each task
5. Commit after each phase with appropriate commit message
6. Update progress summary at top of document as you go

**Updating progress:**

- Update phase status emojis: ⬜ → 🔄 → ✅
- Check off individual tasks: `- [ ]` → `- [x]`
- Update overall progress summary
- Commit this file along with your changes to track progress

---

## Questions or Blockers

Document any questions or blockers here:

- None yet

---

## Notes and Learnings

Document any important notes or learnings during implementation:

- None yet

---

**Last Updated:** 2026-01-28  
**Next Review:** After Phase 1 completion

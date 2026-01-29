# AI-Assisted Feature Workflow

This guide walks you through implementing a new feature in this repository using our specialized AI tooling. It demonstrates how to leverage the **6 Pillars of AI Tooling** to work faster and with higher quality.

## The Workflow at a Glance

1.  **Plan**: create a solid specification (`@requirements-planner`)
2.  **Implement**: Write code with context-aware assistance (Copilot)
3.  **Refine**: Verify UI and code quality (`@ui-designer`, Skills)
4.  **Verify**: Prove it works (`pnpm verify`)
5.  **Ship**: Commit and PR with standard formats (Prompts)

---

## Step 1: Define & Plan
**Tool**: `@requirements-planner` Agent
**Artifact**: A Plan file in `docs/plans/`

Don't start coding yet. In this repo, we treat plans as "Durable Intent".

1.  Open the GitHub Copilot Chat.
2.  Invoke the planner agent:
    ```
    @requirements-planner I want to add a new "Waitlist" component to the landing page. 
    It should take an email, validate it, and show a success state. 
    It needs to match the existing shadcn/ui style.
    ```
3.   The agent will interview you to clarify details (responsive behavior, specific validations, etc.).
4.  It will generate a markdown plan. Save this to `docs/plans/YYYY-MM-DD-waitlist-feature.md`.

**Why?** This gives Copilot a "spec" to refer to later, preventing hallucination and scope creep.

## Step 2: Implement with Context
**Tool**: `/implement-next` Prompt
**Artifact**: Code components

Now, start coding. Copilot automatically reads the "Constitution" (`copilot-instructions.md`) and path-specific rules (`instructions/*.md`).

1.  **Iterative Implementation**:
    *   Type `/implement-next` in Chat.
    *   The prompt will read your plan, find the first unchecked task, and implement it.
    *   This ensures the AI **only focuses on one task at a time**, preventing context loss.

2.  **Manual Scaffold (Optional)**:
    > "Using the plan in @2026-01-29-waitlist-feature.md, scaffold the file structure for the Waitlist component in libs/landing."

## Step 3: Refine & Review
**Tool**: `@ui-designer`, `@shadcnui-component-review`, Skills

Before you verify, use AI to self-review.

### For UI Components
If you built a UI component, get a design critique:
1.  Take a screenshot or run the dev server.
2.  Ask the designer:
    ```
    @ui-designer Review the spacing and hierarchy of this Waitlist form. does it match our comprehensive design system?
    ```

### For Logic/Bugs
If something breaks, don't guess. Use the **Systematic Debugging Skill**:
> "I'm getting a hydation error. user the systematic-debugging skill to help me find the root cause."

## Step 4: Verification as Truth
**Tool**: Terminal `pnpm verify`

The AI might say the code is good, but the **Verification Script** is the source of truth.

1.  Run the verification command:
    ```bash
    pnpm verify
    ```
2.  This runs linting, type-checking, and tests for *specifically affected projects* (thanks to Nx).
3.  If it fails, paste the error into Chat:
    > "@workspace fix these type errors."

**Rule**: You do not proceed to commit until `pnpm verify` passes.

## Step 5: Ship It
**Tool**: Prompts (`/commit`, `/pr-desc`)

Finally, package your work using the repository standards.

1.  **Stage & Commit**:
    *   Click the "Sparkle" icon in the Source Control view, OR
    *   Type `/commit` in Chat.
    *   It will generate a message like: `feat(landing): add Waitlist component with validation`.

2.  **Create Pull Request**:
    *   After pushing, type `/pr-desc` in Chat.
    *   It will read your changes and the original Plan to write a structured PR description listing what changed and why.

---

## Summary

| Phase | Developer Action | AI Tool | Pillar |
| :--- | :--- | :--- | :--- |
| **1. Plan** | "I want X..." | `@requirements-planner` | Agents |
| **2. Code** | "Implement X..." | Copilot + Instructions | Instructions |
| **3. Review** | "Critique X..." | `@ui-designer` | Agents |
| **4. Verify** | `pnpm verify` | Verification Script | Verification |
| **5. Ship** | "Commit X..." | `/commit` | Prompts |

# AI Tooling Architecture

This repository uses a structured AI tooling architecture designed to provide a modern, disciplined development experience.

## The 6 Pillars of AI Tooling

### 1. Copilot for Execution
**File**: [`copilot-instructions.md`](copilot-instructions.md)
The "Constitution" of the repository. Provides the raw execution capability for code generation, ensuring all output adheres to global static coding standards (TypeScript, React, Testing).

### 2. Agents for Role Separation
**Location**: [`.github/agents/`](agents/)
Distinct roles for complex phases of the lifecycle that require a specific mindset, not just code generation.
*   `@ui-designer`: Visual / UX checks.
*   `@requirements-planner`: Technical analysis and breakdown.

### 3. Workflow Discipline
**File**: [`AGENTS.md`](../AGENTS.md)
Defines the "How". It establishes the behavioral rules: Plan first, work iteratively, verify often. It binds the tools together into a coherent process.

### 4. Instruction Files for Code Shape
**Location**: [`.github/instructions/`](instructions/)
Defines the "What". Scoped rules that define the shape of the code for specific domains (Routes, UI, Testing) applied automatically to relevant files.

### 5. Specs as Durable Intent
**Location**: [`docs/plans/`](../docs/plans/)
We treat plans as code. Complex tasks, specs, and architectural decisions are written to Markdown files before code is written, preserving "Durable Intent" across sessions.

### 6. Verification as Truth
**Command**: `pnpm verify`
The Definition of Done. Scripts that provide the objective truth of ecosystem health. The AI is trained to respect the verification script as the final arbiter of success.

---

## Model Recommendations

While GitHub Copilot works with various models, we typically use **Claude Sonnet** (for complex work) and **Claude Haiku** (for mechanical tasks) because they behave more like disciplined engineers than enthusiastic interns.

Claude models tend to:
- Follow instructions and constraints with less creative wandering
- Provide stronger long-form reasoning for planning and debugging
- Degrade more gracefully under complexity (fewer hallucinations)
- Deliver consistent quality across multiple prompts
- Stick to the requested job rather than "improving" unrequested things

**In short**: Claude is not always the most creative model, but it is often the most reliable collaborator. For day-to-day engineering, reliability beats brilliance.

See [AI-Assisted Feature Workflow](../docs/getting-started/ai-assisted-feature-workflow.md#model-selection) for detailed model guidance.

---

## Directory Structure

```
.github/
├── README.md                     # This file
├── copilot-instructions.md       # Root instructions (Constitution)
├── agents/                       # Specialized Persona Agents
├── prompts/                      # Task Automation Prompts
├── skills/                       # Auto-loading Workflow Skills
└── instructions/                 # Path-scoped coding rules
```

## Tooling Inventory

### Prompts (`/prompts`)
**Use for**: Specific, repeatable tasks.

*   `help.prompt.md`: "Show this guide" - `/help`
*   `commit.prompt.md`: "Commit these changes" - `/commit`
*   `pr-desc.prompt.md`: "Generate PR description" - `/pr-desc`
*   `implement-next.prompt.md`: "Implement next task from plan" - `/implement-next`
*   `mcp-check.prompt.md`: "Check MCP setup" - `/mcp-check`
*   `validate-client.prompt.md`: "Validate my work" (Runs checks)

**How to use**: Type `/` in Chat or select from the prompt menu.

> **New to the tooling?** Start with `/help` for a quick reference guide.

### Skills (`/skills`)
**Use for**: Specialized workflows available to the default agent.

*   `planning`: Structured implementation planning.
*   `systematic-debugging`: 6-step root cause analysis.
*   `code-review-ready`: PR preparation guidelines.
*   `verification`: Validation requirements.
*   `chrome-devtools-webapp-debug`: Browser debugging via MCP.
*   `shadcnui-component-review`: UI component auditing.

**How to use**: Just ask Copilot! "Create a plan for...", "Debug this...", "Review this component...".

### Agents (`/agents`)
**Use for**: Persistent personas for complex phases.

*   `requirements-planner`: Dedicated Technical Analyst persona.
*   `ui-designer`: UI/UX specialist.

**How to use**: Mention `@agent-name` in Chat.

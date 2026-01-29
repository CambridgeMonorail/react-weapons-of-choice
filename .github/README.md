# .github Directory Structure

This directory contains GitHub Copilot configuration files organized by purpose.

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

## 1. Copilot Instructions
**File**: `copilot-instructions.md`, `instructions/*.md`

The "Constitution" of the repository. Defines **static coding standards** (TypeScript, React, Testing) that Copilot must always follow.

## 2. Prompts (`/prompts`)
**Use for**: Specific, repeatable tasks.

*   `commit.prompt.md`: "Commit these changes" (Stages, conventional commit, pushes)
*   `pr-desc.prompt.md`: "Generate PR description" (Analyzes diff, writes markdown)
*   `mcp-check.prompt.md`: "Check MCP setup" (Verifies environment)

**How to use**: Type `/` in Chat or select from the prompt menu.

## 3. Skills (`/skills`)
**Use for**: Specialized workflows available to the default agent.

*   `planning`: Structured implementation planning.
*   `systematic-debugging`: 6-step root cause analysis.
*   `code-review-ready`: PR preparation guidelines.
*   `verification`: Validation requirements.
*   `chrome-devtools-webapp-debug`: Browser debugging via MCP.
*   `shadcnui-component-review`: UI component auditing.

**How to use**: Just ask Copilot! "Create a plan for...", "Debug this...", "Review this component...".

## 4. Agents (`/agents`)
**Use for**: Persistent personas for complex phases.

*   `requirements-planner`: Dedicated Technical Analyst persona.
*   `ui-designer`: UI/UX specialist.

**How to use**: Mention `@agent-name` in Chat.

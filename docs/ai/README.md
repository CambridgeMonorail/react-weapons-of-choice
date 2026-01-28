# AI-Specific Documentation

This directory contains documentation specifically for AI agents and copilots working in this repository.

## Purpose

This documentation helps AI agents understand:
- How to approach work in this repository
- Workflow expectations and processes
- When and how to create plans
- Debugging methodologies
- Code review standards
- Verification requirements

## Contents

### Workflow Skills (`skills/`)

Detailed process guides for common workflows:

- **[planning.md](skills/planning.md)** - How to create structured implementation plans
- **[systematic-debugging.md](skills/systematic-debugging.md)** - Root cause analysis and debugging workflow
- **[code-review-ready.md](skills/code-review-ready.md)** - Making changes easy to review
- **[verification.md](skills/verification.md)** - Evidence expectations for pull requests

### Architecture Documentation

- **[target-operating-model.md](target-operating-model.md)** - The three-layer instruction model (coming soon)

## Relationship to Other Documentation

### AGENTS.md Files (Workflow Guidance)

- **Root [`AGENTS.md`](../../AGENTS.md)** - Repository-wide agent behavior
- **Nested AGENTS.md** - Area-specific workflows (apps/libs)
- **Focus:** How to behave, when to plan, verification steps

### Copilot Instructions (Code Rules)

- **[`.github/copilot-instructions.md`](../../.github/copilot-instructions.md)** - Repository-wide code rules
- **[`.github/instructions/*.instructions.md`](../../.github/instructions/)** - Path-specific code patterns
- **Focus:** What the code should look like, coding conventions

## Key Distinction

**This directory (`docs/ai/`):** Process, workflow, and behavioral guidance  
**Copilot instructions (`.github/`):** Code rules, patterns, and conventions

Think of it this way:
- **Copilot instructions** tell you what valid code looks like
- **AGENTS.md and skills** tell you how to create that code effectively

## For Human Developers

While this documentation is optimized for AI agents, human developers will also find it useful for:
- Understanding expected workflows
- Creating better plans
- Writing reviewable code
- Debugging systematically

## Contributing

When adding new skills or guidance:

1. Focus on **process and workflow** (not code patterns)
2. Be specific and actionable
3. Include examples
4. Link to related skills
5. Keep it concise but comprehensive

## Last Updated

2026-01-28

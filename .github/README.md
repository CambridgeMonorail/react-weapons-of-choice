# .github Directory Structure

This directory contains GitHub Copilot configuration files organized by purpose. Each subdirectory serves a specific role in guiding Copilot's behavior.

## Directory Structure

```
.github/
├── README.md                     # This file
├── copilot-instructions.md       # Root instructions (always active)
├── agents/                       # Custom agent definitions
├── chatmodes/                    # Chat mode configurations
├── instructions/                 # Path-scoped instruction files
├── prompts/                      # Reusable prompt templates
├── skills/                       # Auto-loading workflow skills
└── workflows/                    # GitHub Actions CI/CD
```

## File Types and Purpose

### copilot-instructions.md
**Always active** - Root-level coding conventions, technology stack, and global patterns.

**Use for:**
- TypeScript and React conventions
- Monorepo structure and imports
- Technology versions
- Global do's and don'ts

**Do not use for:**
- Path-specific rules (use `instructions/` instead)
- Workflow guidance (use `skills/` instead)
- Task automation (use `agents/` instead)

### instructions/ Directory
**Path-scoped** - Conventions that apply to specific file patterns.

**Current files:**
- `00-repo-basics.instructions.md` - Fundamental monorepo conventions
- `react-spa-router.instructions.md` - Client SPA patterns (apps/client)
- `testing-and-quality.instructions.md` - Test frameworks and validation
- `ui-and-accessibility.instructions.md` - Tailwind and a11y requirements

**Format:**
```markdown
# Title

Content with `applyTo` in frontmatter defining glob patterns
```

### skills/ Directory
**Auto-loading** - Workflow skills that Copilot discovers when relevant.

**Current skills:**
- `planning/` - Implementation plan creation
- `systematic-debugging/` - 6-step root cause analysis
- `code-review-ready/` - Reviewable PR guidelines
- `verification/` - PR evidence requirements
- `chrome-devtools-webapp-debug/` - Browser debugging workflows
- `shadcnui-component-review/` - Component review workflows

**Format:**
```markdown
---
name: skill-name
description: Brief description for discovery
---

# Skill: Title

## Purpose
## When to use
## Inputs required
## Output format
```

**Structure:**
- `SKILL.md` - Main skill definition (required)
- `workflows/` - Supporting workflow files (optional)
- `templates/` - Code templates (optional)

### agents/ Directory
**Manual invocation** - Custom agents for specialized tasks.

**Current agents:**
- `common-ui-component-reviewer.agent.md` - UI component review
- `custom-agent-foundry.agent.md` - Agent creation workflow
- `git-commit-helper.agent.md` - Commit message assistance
- `mcp-preflight.agent.md` - MCP server setup check
- `pr-description-helper.agent.md` - PR description generation
- `requirements-planner.agent.md` - Requirements to implementation plans
- `ui-designer.agent.md` - UI/UX design guidance
- `webapp-debugger.agent.md` - Web app debugging

**Format:**
```markdown
# Agent Name

## Identity and mission
## Operating rules
## What you must do
## What you must not do
```

### chatmodes/ Directory
**Experimental** - Custom chat mode configurations.

**Current modes:**
- `enhanced-gpt4.1.chatmode.md` - Autonomous research mode with specific tool access

**Format:**
```yaml
---
description: 'Mode description'
model: GPT-4.1
title: 'Mode Title'
tools: [list of allowed tools]
---
```

### prompts/ Directory
**Reusable templates** - Pre-defined prompt templates for common tasks.

**Current prompts:**
- `validate-client.prompt.md` - Full validation pipeline for client app

**Format:**
```markdown
---
name: Prompt Name
description: What it does
scope: 'apps/client'
---

# Prompt content
```

### workflows/ Directory
**GitHub Actions** - CI/CD automation (not Copilot-related).

**Current workflows:**
- `ci.yml` - Continuous integration
- `deploy.yml` - Deployment
- `lighthouse-audit.yml` - Performance testing

## Usage Guidelines

### When to Add New Files

**Instructions file** - When you need path-scoped coding patterns:
- New project-specific conventions
- Technology-specific patterns (e.g., GraphQL, Prisma)
- Framework-specific rules (e.g., Next.js, Remix)

**Skill** - When you need repeatable workflow guidance:
- Multi-step processes
- Debugging workflows
- Review checklists
- Verification procedures

**Agent** - When you need specialized task automation:
- Complex multi-step tasks
- Domain-specific workflows
- Tasks requiring research/planning

**Prompt** - When you need reusable command templates:
- Repetitive validation tasks
- Standard checklists
- Quick commands

**Chatmode** - For experimental chat configurations:
- Custom tool combinations
- Specialized assistant modes
- Research-heavy workflows

### Naming Conventions

**Instructions:** `<priority>-<topic>.instructions.md`
- Priority: `00` (foundational), `10` (core), `20` (specialized)
- Example: `00-repo-basics.instructions.md`

**Skills:** `<kebab-case>/SKILL.md`
- Directory per skill with `SKILL.md` as main file
- Example: `systematic-debugging/SKILL.md`

**Agents:** `<kebab-case>.agent.md`
- Single file per agent
- Example: `requirements-planner.agent.md`

**Prompts:** `<action>-<target>.prompt.md`
- Action-focused naming
- Example: `validate-client.prompt.md`

**Chatmodes:** `<name>.chatmode.md`
- Descriptive mode name
- Example: `enhanced-gpt4.1.chatmode.md`

## Consistency Guidelines

### All Files

- Use Markdown format
- Include clear purpose/description
- Define when to use
- Provide examples where helpful

### Skills (SKILL.md)

**Required sections:**
- YAML frontmatter (name, description)
- Purpose
- When to use
- Inputs required (if any)
- Output format

**Optional sections:**
- Workflows subdirectory
- Templates subdirectory
- Integration notes
- Examples

### Agents

**Required sections:**
- Identity and mission
- Operating rules
- What you must do
- What you must not do

**Optional sections:**
- Required tools/MCPs
- Examples
- Output format

### Instructions

**Required:**
- Clear `applyTo` patterns in metadata
- Focused scope (not too broad)
- Concrete examples

**Avoid:**
- Duplicating copilot-instructions.md
- Overlapping with other instruction files

## Maintenance

### Regular Reviews

- Quarterly review for outdated content
- Update when tech stack changes
- Remove unused files
- Consolidate duplicates

### Version Control

- Use meaningful commit messages
- Document breaking changes
- Link to relevant PRs/issues

## Related Documentation

- [AGENTS.md](../AGENTS.md) - Agent workflow guide
- [docs/ai/](../docs/ai/) - Detailed workflow documentation
- [.github/copilot-instructions.md](./copilot-instructions.md) - Root instructions

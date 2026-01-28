# GitHub Copilot Tooling Guide

This project includes comprehensive GitHub Copilot customization to accelerate development, maintain quality, and enforce project conventions. This guide documents the custom agents, skills, instructions, and workflows that enhance your Copilot experience.

---

## Table of Contents

1. [Overview](#overview)
2. [Directory Structure](#directory-structure)
3. [Copilot Instructions](#copilot-instructions)
4. [Custom Agents](#custom-agents)
5. [Skills](#skills)
6. [Chat Modes](#chat-modes)
7. [Prompts](#prompts)
8. [How to Use Custom Agents](#how-to-use-custom-agents)
9. [Creating Your Own Agents](#creating-your-own-agents)
10. [Best Practices](#best-practices)

---

## Overview

The `.github` directory contains a rich ecosystem of Copilot customizations designed specifically for this monorepo:

- **Custom Instructions** - Global and scoped rules for code generation
- **Agents** - Specialized AI assistants for specific tasks
- **Skills** - Reusable workflows and procedures
- **Chat Modes** - Enhanced conversation modes
- **Prompts** - Validation and quality check templates

These tools work together to ensure code quality, consistency, and adherence to project conventions while maximizing developer productivity.

---

## Directory Structure

```
.github/
├── copilot-instructions.md          # Main Copilot instructions file
├── instructions/                     # Scoped instruction files
│   ├── 00-repo-basics.instructions.md
│   ├── react-spa-router.instructions.md
│   ├── testing-and-quality.instructions.md
│   └── ui-and-accessibility.instructions.md
├── agents/                           # Custom Copilot agents
│   ├── common-ui-component-reviewer.agent.md
│   ├── custom-agent-foundry.agent.md
│   ├── git-commit-helper.agent.md
│   ├── mcp-preflight.agent.md
│   ├── pr-description-helper.agent.md
│   ├── requirements-planner.agent.md
│   ├── ui-designer.agent.md
│   └── webapp-debugger.agent.md
├── skills/                           # Reusable skill workflows
│   ├── shadcnui-component-review/
│   │   ├── SKILL.md
│   │   └── workflows/
│   │       ├── a11y-and-focus.md
│   │       ├── performance-and-bundle.md
│   │       ├── review-and-fix.md
│   │       ├── taxonomy-and-exports.md
│   │       └── tests-and-storybook.md
│   └── chrome-devtools-webapp-debug/
│       ├── SKILL.md
│       └── workflows/
├── chatmodes/                        # Custom chat modes
│   └── enhanced-gpt4.1.chatmode.md
├── prompts/                          # Validation prompts
│   └── validate-client.prompt.md
└── workflows/                        # GitHub Actions workflows
    ├── ci.yml
    ├── deploy.yml
    └── lighthouse-audit.yml
```

---

## Copilot Instructions

### Main Instructions File

**Location**: `.github/copilot-instructions.md`

This file contains global conventions that apply to all Copilot interactions:

- **Project Purpose** - Educational resource, boilerplate template, component library
- **TypeScript Conventions** - Strict types, prefer `type` over `interface`, named exports only
- **React Conventions** - Functional components, direct hook imports, JSDoc comments
- **Testing Expectations** - Vitest + Testing Library, 80% coverage minimum
- **Accessibility Baseline** - WCAG AA compliance, keyboard navigation, semantic HTML
- **Nx and Monorepo Guidance** - Affected commands, workspace imports, library structure

### Scoped Instructions

Located in `.github/instructions/`, these files apply to specific file patterns:

#### 00-repo-basics.instructions.md
- **Applies to**: `apps/**/*.{ts,tsx,js,jsx}`, `libs/**/*.{ts,tsx,js,jsx}`
- **Purpose**: Fundamental monorepo conventions and contribution guidelines

#### react-spa-router.instructions.md
- **Applies to**: `apps/client/**/*.{ts,tsx}`
- **Purpose**: Conventions for the React SPA client app

#### testing-and-quality.instructions.md
- **Applies to**: `**/*.test.{ts,tsx}`, `**/*.spec.{ts,tsx}`, `**/playwright/**/*.{ts,tsx}`
- **Purpose**: Test frameworks, patterns, and validation workflows

#### ui-and-accessibility.instructions.md
- **Applies to**: `**/*.tsx`
- **Purpose**: Tailwind v4, component conventions, and WCAG AA accessibility requirements

---

## Custom Agents

Agents are specialized AI assistants that handle specific development tasks. Invoke them via the Copilot chat using `@agent-name`.

### shadcnui Component Reviewer

**File**: `.github/agents/common-ui-component-reviewer.agent.md`

**Purpose**: End-to-end review of shadcn/ui components for standards, accessibility, exports, tests, and Storybook coverage

**When to use**:
- After adding a new shadcn/ui component to `libs/shadcnui/src/lib`
- After modifying an existing component
- When you need component taxonomy validation

**Usage**:
```
@shadcnui-component-reviewer data-display/badge
```

**Capabilities**:
- Standards compliance review
- Accessibility audit (ARIA, keyboard nav, focus management)
- Export validation
- Test coverage check
- Storybook story validation
- Component categorization

**Handoffs**:
- 🔧 Implement recommended fixes

---

### UI Design Reviewer

**File**: `.github/agents/ui-designer.agent.md`

**Purpose**: Expert UI/UX design review providing actionable, evidence-based recommendations for modern, professional enterprise interfaces

**When to use**:
- Reviewing page layouts or component designs
- Identifying visual hierarchy issues
- Improving perceived quality and clarity
- Validating against modern B2B SaaS patterns

**Usage**:
```
@ui-designer http://localhost:4200/react-weapons-of-choice/
```

**Capabilities**:
- Evidence-based design audits using Chrome DevTools screenshots
- Prioritized recommendations (Critical, Moderate, Minor)
- Tailwind-first code examples
- Spacing, typography, and color contrast analysis
- Task efficiency improvements

**Requirements**:
- Chrome DevTools MCP for screenshots OR user-provided screenshots

**Handoffs**:
- 🎨 Implement Design Changes

---

### Git Commit Helper

**File**: `.github/agents/git-commit-helper.agent.md`

**Purpose**: Safely stages, commits, and pushes changes using conventional commits with multi-line support

**When to use**:
- Ready to commit and push changes
- Want conventional commit message formatting
- Need multi-line commit messages with bullet points

**Usage**:
```
@git-commit-helper feat add MCP tools - also include commit body
```

**Capabilities**:
- Conventional commit formatting (`type(scope): description`)
- Multi-line commit bodies with bullet points
- Safe staging and pushing workflow
- Git status verification

**Commit format**:
```
<type>(<scope>): <short, present-tense description>

Optional body with bullet points:
- Detail 1
- Detail 2
```

---

### Requirements Planner

**File**: `.github/agents/requirements-planner.agent.md`

**Purpose**: Transforms user requirements into actionable implementation plans respecting project structure and conventions

**When to use**:
- Starting a new feature
- Planning complex refactors
- Breaking down large requirements into tasks
- Creating GitHub issues for team execution

**Usage**:
```
@requirements-planner [provide requirements document or description]
```

**Capabilities**:
- Requirement clarification and gap analysis
- Project structure research
- Discrete task breakdown (1-5 files per task)
- Dependency identification
- Validation checkpoints
- Complexity/sizing indicators

**Output**:
- Actionable implementation plan
- Clear acceptance criteria
- Validation commands
- Concrete file paths and component names

---

### WebApp Debugger

**File**: `.github/agents/webapp-debugger.agent.md`

**Purpose**: Evidence-driven web app debugging using Chrome DevTools MCP (console, network, screenshots, performance traces)

**When to use**:
- Debugging runtime issues
- Investigating console errors
- Network request problems
- Performance bottlenecks
- Visual rendering issues

**Usage**:
```
@webapp-debugger [URL, repro steps, expected vs actual behavior]
```

**Capabilities**:
- Browser-based issue reproduction
- Console message collection
- Network request analysis
- Screenshot capture of failing state
- Performance trace recording
- Evidence-driven hypothesis testing

**Requirements**:
- Chrome DevTools MCP server enabled
- URL (local or deployed)
- Clear repro steps

**Debugging loop**:
1. Confirm inputs
2. Reproduce using Chrome DevTools MCP
3. Capture evidence (screenshots, console, network)
4. Form hypothesis
5. Propose fix
6. Verification plan

---

### PR Description Helper

**File**: `.github/agents/pr-description-helper.agent.md`

**Purpose**: Generates pull request descriptions using the repository template with GitHub issue link and list of changes

**When to use**:
- Creating a pull request
- Need structured PR description
- Want automatic change list generation

**Usage**:
```
@pr-description-helper adds MCP debugging tools
```

**Capabilities**:
- Extracts GitHub issue number from branch name
- Generates structured PR description
- Lists substantive changes
- Follows repository template format

**Template format**:
```markdown
## 📝 Description

[A few sentences describing changes made in PR]

**Issue**: [Link to GitHub issue if applicable]

## 📋 List of Changes

- [Main change 1]
- [Main change 2]
- [Main change 3]
```

---

### MCP Preflight

**File**: `.github/agents/mcp-preflight.agent.md`

**Purpose**: Validates MCP (Model Context Protocol) server availability and configuration

**When to use**:
- Before using Chrome DevTools-dependent agents
- Troubleshooting MCP server issues
- Validating MCP configuration

---

### Custom Agent Foundry

**File**: `.github/agents/custom-agent-foundry.agent.md`

**Purpose**: Helps create new custom Copilot agents following project conventions

**When to use**:
- Creating a new custom agent
- Learning agent file format and best practices
- Extending Copilot capabilities for project-specific needs

---

## Skills

Skills are reusable workflows and procedures that can be referenced by agents or used directly in Copilot chat.

### shadcnui Component Review Skill

**Location**: `.github/skills/shadcnui-component-review/`

**Purpose**: End-to-end component review workflow for shadcn/ui components

**When to use**:
- New component added to `libs/shadcnui/src/lib`
- Existing component modified
- Standards review needed
- Categorization validation

**Workflows**:

#### a11y-and-focus.md
- ARIA attributes validation
- Keyboard navigation testing
- Focus management review
- Screen reader compatibility

#### performance-and-bundle.md
- Bundle size analysis
- Render performance checks
- Memoization opportunities
- Lazy loading considerations

#### review-and-fix.md
- General standards review
- Code quality checks
- Convention adherence
- Quick fixes

#### taxonomy-and-exports.md
- Component categorization validation
- Export structure review
- Index file verification
- Category placement

#### tests-and-storybook.md
- Unit test coverage
- Component test completeness
- Storybook story validation
- Visual regression testing setup

**Inputs required**:
- Component path relative to `libs/shadcnui/src/lib` (e.g., `data-display/badge`)
- Optional: Special concerns (accessibility, API design, variants, performance)

**Output contract**:
1. Actions taken
2. Issues found and fixes applied (with file paths)
3. Summary and next steps
4. Definition of done status

---

### Chrome DevTools WebApp Debug Skill

**Location**: `.github/skills/chrome-devtools-webapp-debug/`

**Purpose**: Structured debugging workflow using Chrome DevTools MCP

**When to use**:
- Web application runtime debugging
- Browser-specific issues
- Performance investigations
- Network troubleshooting

---

## Chat Modes

### Enhanced GPT-4.1

**File**: `.github/chatmodes/enhanced-gpt4.1.chatmode.md`

**Purpose**: Enhanced conversation mode with specific configurations

**When to use**: General Copilot interactions requiring enhanced capabilities

---

## Prompts

### Validate Client

**File**: `.github/prompts/validate-client.prompt.md`

**Purpose**: Validation prompt for client application quality checks

**When to use**:
- Pre-commit validation
- Quality gate checks
- CI/CD integration

---

## How to Use Custom Agents

### Invoking Agents

In GitHub Copilot Chat, use the `@` symbol followed by the agent name:

```
@shadcnui-component-reviewer data-display/badge
```

### Providing Context

Agents work best with clear, specific context:

**Good**:
```
@ui-designer http://localhost:4200/dashboard
Review the spacing and hierarchy on the dashboard page
```

**Better**:
```
@webapp-debugger 
URL: http://localhost:4200/dashboard
Repro: 1. Click login button 2. Enter credentials 3. Click submit
Expected: Redirect to dashboard
Actual: Error message "Cannot read property 'user' of undefined"
Environment: Dev server, Chrome 120
```

### Using Handoffs

Many agents provide handoffs to other agents or workflows:

1. Run the initial agent (e.g., `@shadcnui-component-reviewer`)
2. Review the findings
3. Click the handoff button (e.g., "🔧 Implement recommended fixes")
4. The handoff agent receives the context and executes the next phase

---

## Creating Your Own Agents

### Agent File Format

Custom agents use YAML frontmatter + Markdown:

```markdown
---
name: My Custom Agent
description: Brief description of what this agent does
argument-hint: Example usage hint shown to users
model: Claude Sonnet 4.5
tools: ['read', 'edit', 'execute', 'search']
handoffs:
  - label: 🔧 Next Step
    agent: agent
    prompt: Instructions for the next agent
    send: false
---

# My Custom Agent

Agent instructions and behavior specification...

## Rules

- Rule 1
- Rule 2

## Workflow

1. Step 1
2. Step 2
```

### Agent Development Guidelines

1. **Single Responsibility**: Each agent should have one clear purpose
2. **Clear Inputs**: Specify exactly what information the agent needs
3. **Deterministic**: Agent should produce consistent results with same inputs
4. **Safe**: Never run destructive operations without confirmation
5. **Evidence-Based**: Use tools to gather facts before making changes
6. **Handoffs**: Provide clear transitions to related workflows

### Using the Custom Agent Foundry

For help creating agents:

```
@custom-agent-foundry
I need an agent that validates TypeScript types across the monorepo
```

---

## Best Practices

### When to Use Agents vs Regular Copilot Chat

**Use Agents When**:
- You need specialized domain knowledge (UI design, component review)
- The task requires multi-step workflows
- You want consistent, repeatable processes
- Evidence gathering is required (debugging, audits)

**Use Regular Copilot Chat When**:
- Simple code generation
- Quick questions about syntax or APIs
- Exploratory conversations
- One-off tasks

### Effective Agent Usage

1. **Provide Complete Context**: Give agents all required information upfront
2. **Use Argument Hints**: Follow the suggested format in `argument-hint`
3. **Review Before Acting**: Agents propose changes; you approve them
4. **Use Handoffs**: Chain agents together for complex workflows
5. **Verify Results**: Always validate agent output with tests and linting

### Combining Agents with Skills

Agents can reference skills for detailed procedures:

```
@shadcnui-component-reviewer data-display/avatar
Focus on accessibility using the a11y-and-focus workflow
```

### Integration with Development Workflow

1. **Pre-Development**: `@requirements-planner` for feature planning
2. **Development**: Regular Copilot for code generation
3. **Component Review**: `@shadcnui-component-reviewer` for quality checks
4. **UI Review**: `@ui-designer` for design validation
5. **Debugging**: `@webapp-debugger` for runtime issues
6. **Pre-Commit**: `@git-commit-helper` for conventional commits
7. **PR Creation**: `@pr-description-helper` for PR descriptions

---

## Additional Resources

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Customizing GitHub Copilot](https://docs.github.com/en/copilot/customizing-copilot)
- [Model Context Protocol (MCP)](https://modelcontextprotocol.io/)
- [Productivity Tooling Guide](./productivity-tooling.md)
- [Project Contributing Guide](./CONTRIBUTING.md)

---

## Need Help?

- Review agent-specific documentation in `.github/agents/`
- Check skill workflows in `.github/skills/`
- Ask in GitHub Discussions
- Open an issue with the `copilot-tooling` label

---

*This document is maintained as part of the React Weapons of Choice project. For updates or corrections, please submit a pull request.*

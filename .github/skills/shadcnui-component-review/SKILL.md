---
name: shadcnui-component-review
description: End-to-end review of shadcn/ui components in libs/shadcnui/src/lib.
---

# Shadcn UI Component Review Skill

## Purpose

This skill performs an end-to-end review of a newly added or modified component under:

`libs/shadcnui/src/lib`

It will identify issues, apply straightforward fixes, and leave clear recommendations for anything that requires design decisions or larger refactors.

## When to use

Use this skill when:

- A new component has been added to shadcnui
- An existing component has been modified and needs standards review
- A component needs to be categorized correctly in the components taxonomy
- We want confidence in accessibility, exports, tests, and Storybook coverage

## Inputs required

The user should provide:

- Component path relative to `libs/shadcnui/src/lib` (example: `data-display/badge`)
- Optional: special concerns (for example, accessibility, API design, variants, performance)

If the component path is missing, infer it from recent changes where possible. If you cannot infer it, ask once and stop.

## Output contract

The agent must output:

1. Actions taken
2. Issues found and fixes applied (with file paths)
3. Summary and next steps
4. Definition of done status

Do not paste full files unless necessary.

## Evidence and verification

After changes, the agent must run the minimum necessary checks to confirm health:

- lint
- typecheck
- tests
- build where relevant

Avoid redundant runs.

## Privacy and safety

Do not output secrets or sensitive data.
If a screenshot or browser tooling is involved elsewhere, use test accounts.

## Definition of done

A component review is “done” when:

- Category placement is correct
- No default exports exist
- Public API is clean (props, naming, variants)
- Accessibility expectations are met for the component type
- Barrel exports are correct
- Tests exist and pass
- Storybook story exists and renders key variants
- Lint and typecheck pass for the affected scope

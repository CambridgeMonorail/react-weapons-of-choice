---
name: chrome-devtools-webapp-debug
description: Repeatable workflows for debugging web application issues using Chrome DevTools MCP.
---

# Chrome DevTools WebApp Debugging Skill

## Purpose

This skill provides repeatable workflows for debugging web application issues using Chrome DevTools MCP, including console inspection, network analysis, screenshots, and performance traces.

## Requirement

This skill requires the `chrome-devtools` MCP server to be available in VS Code Copilot Agent mode.

If MCP tools are unavailable:

- Do not guess
- Do not propose fixes
- Ask the user to run the MCP Preflight agent or enable the MCP server

## When to use

Use this skill when the user reports:

- A page is broken or rendering incorrectly
- A user journey fails
- Network requests fail (4xx, 5xx, CORS, timeouts)
- Console errors or unhandled promise rejections
- Performance regressions (slow load, poor LCP, jank)

## Inputs to request

- Target URL (local or deployed)
- Repro steps
- Expected behaviour versus actual behaviour
- Environment (dev, stage, prod)
- Any error text or screenshots (optional)

## Evidence first

The agent must gather evidence before suggesting changes:

- Screenshot of the failing state
- Console output (errors and warnings)
- Network requests relevant to the failure
- Performance trace for slowness or jank

## Output format

1. Summary of repro and findings
2. Evidence (console and network summaries, screenshots, trace notes)
3. Root cause hypothesis and confidence level
4. Minimal fix proposal
5. Verification plan
6. Regression checklist

## Privacy and safety

Chrome DevTools MCP can access and modify the connected browser session.

- Use test accounts where possible
- Avoid real customer data
- Avoid pasting secrets into prompts or logs

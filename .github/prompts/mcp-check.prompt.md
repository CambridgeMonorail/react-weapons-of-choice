---
name: Check MCP Setup
description: Verifies if the workspace is ready for MCP-powered tools (Chrome DevTools).
---

# Check MCP Setup

Your goal is to verify if the environment is ready for MCP agents.

## Checklist

1. **Configuration**: Check if `.vscode/mcp.json` exists and features `chrome-devtools/*`.
2. **Node.js**: Verify `npx -v` runs successfully.
3. **Tool Availability**: Ask the user to check if `chrome-devtools` tools are visible in the specific Chat/Agent context.
4. **Trust**: Ensure workspace is Trusted.

## Output

Report **READY** or **NOT READY** with a list of missing items and fix instructions.

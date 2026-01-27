# Workflow: Console error and unhandled rejection

## Goal

Identify the source of a console error and trace it to a specific code path and triggering user action.

## Steps

1. Reproduce the error while capturing console output.
2. Record:
   - the exact error message
   - stack trace frames
   - route and user action that triggered it
3. Check for common causes:
   - undefined access due to missing data or race condition
   - hydration mismatch and client-only code
   - failed dynamic import or chunk load error
4. Use network inspection to confirm any upstream request failures.
5. Propose a minimal fix:
   - guard condition, error boundary, retry, or data handling
6. Provide a verification plan:
   - reproduce again and confirm error is gone
   - confirm expected UI state
   - confirm no new console errors introduced

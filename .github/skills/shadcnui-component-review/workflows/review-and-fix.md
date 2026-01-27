# Workflow: Review and fix (end-to-end)

## Goal

Perform a standards review of a shadcnui component and apply safe, straightforward fixes.

## Steps

1. Identify the target component path.

   - If missing, attempt to infer from recent changes.
   - If still unknown, ask once for the path and stop.

2. Inspect files:

   - Component implementation
   - Category barrel export
   - Root components barrel export

3. Run checks in this order, capturing errors:

   - lint
   - typecheck
   - tests
   - build only if needed

4. Fix issues using this priority:

   1. Type errors
   2. Lint errors (correctness and accessibility)
   3. Missing or incorrect exports
   4. Missing tests and stories
   5. Style and polish

5. For each issue:

   - Quote the file path
   - Summarise the issue
   - Apply the minimal safe fix

6. Re-run the smallest relevant checks until green.
   - Max 3 fix attempts per file, then escalate with a recommendation.

## Commands guidance

Choose minimal commands that validate the affected scope, for example:

- `nx lint shadcnui`
- `nx test shadcnui`
- `nx build shadcnui`
- `nx typecheck shadcnui`

If your repo uses `pnpm` scripts for affected targets, use those instead, but keep runs minimal.

## Output format

- Actions taken
- Issues found and fixes
- Summary and next steps
- Definition of done checklist

# Workflow: Bug triage (general)

## Goal

Reproduce the issue and identify the most likely root cause based on browser evidence.

## Steps

1. Confirm inputs:
   - URL
   - numbered repro steps
   - expected versus actual
2. Reproduce in the browser using Chrome DevTools MCP.
3. Capture evidence:
   - screenshot of failing state
   - console errors and warnings
   - relevant network requests (failed calls, slow calls, unexpected payloads)
4. Summarise findings:
   - what failed first
   - what is a symptom versus root cause candidate
5. Create 1 to 3 hypotheses and gather confirming evidence.
6. Propose the minimal fix and a verification plan.

## Verification plan template

- Open URL: ...
- Perform steps: ...
- Confirm fixed behaviour: ...
- Confirm no regression on: ...

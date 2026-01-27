# Workflow: Performance triage (LCP focus)

## Goal

Identify why the page feels slow, focusing on LCP and blocking work.

## Steps

1. Confirm:
   - URL and route
   - what "slow" means to the user (first load, route transition, interaction)
2. Reproduce and record a performance trace.
3. Extract:
   - LCP timing
   - LCP element (what rendered last for LCP)
   - main thread long tasks
   - render blocking resources (CSS, fonts, scripts)
   - image download and decode issues
4. Provide:
   - one quick win (low risk)
   - one structural improvement (higher effort)
5. Verification plan:
   - rerun trace
   - compare LCP before and after
   - confirm no layout shift regressions

## Common quick wins

- defer non-critical scripts
- reduce image size, use modern formats, set explicit dimensions
- reduce blocking CSS
- remove expensive synchronous work on initial render

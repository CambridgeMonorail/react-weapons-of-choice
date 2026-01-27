# Workflow: Performance and bundle hygiene

## Goal

Avoid needless re-renders and keep bundle impact low.

## Checklist

- Move large constants outside the component.
- Avoid creating large objects inline on each render.
- Avoid heavy dependencies unless necessary.
- Only introduce memoization when it is justified by evidence or likely hot paths.
- Keep variant logic simple and predictable.

## Output

- Potential performance issues
- Fixes applied (only if low risk)
- Recommendations for later improvements

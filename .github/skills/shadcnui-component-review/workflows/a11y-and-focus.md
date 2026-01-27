# Workflow: Accessibility and focus

## Goal

Confirm accessible semantics, keyboard behaviour, and visible focus.

## Checklist

- Use native elements where possible (button, input, link).
- Only use ARIA roles when native semantics are insufficient.
- Ensure non-text controls have accessible names (aria-label or aria-labelledby).
- Ensure interactive elements have visible focus states (focus-visible).
- Confirm keyboard interaction for the component type:
  - Buttons: Enter and Space activate
  - Toggles: correct aria-pressed or role where appropriate
  - Tabs, menus, dialogs: follow expected patterns if applicable

## Testing expectations

Add at least one accessibility-flavoured assertion, for example:

- element is discoverable by role and name
- aria attributes reflect state
- disabled state is applied correctly

If axe is available in the repo, include it for a smoke check. If not, keep it simple and reliable.

## Output

- Accessibility issues found
- Fixes applied
- Anything requiring design input

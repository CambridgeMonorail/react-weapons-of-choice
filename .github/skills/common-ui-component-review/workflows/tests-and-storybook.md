# Workflow: Tests and Storybook

## Goal

Ensure minimal, valuable test coverage and a useful Storybook story.

## Unit tests

Minimum expectations:

- Component renders without crashing
- At least one meaningful DOM assertion
- One state or variant edge case (disabled, loading, error, selected)
- One accessibility-oriented assertion (role and name, aria state, label)

Preferred tooling:

- @testing-library/react

## Storybook

Minimum expectations:

- Default story
- Key variants showcased
- Args reflect public props
- Controls enabled for interactive props
- Short docs description including any accessibility notes

## Templates

Use the templates under `templates/` when creating new tests or stories.

## Output

- Tests added or updated
- Stories added or updated
- Commands run and outcomes

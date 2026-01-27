# Workflow: Taxonomy, exports, and file placement

## Goal

Ensure the component lives in the correct category and is exported correctly.

## Taxonomy rules

Use the existing taxonomy:

- data-visualization: charts, gauges, status pipelines
- feedback: dialogs, spinners, progress, transient system responses
- information-display: passive identity, status, content framing (badge, card, tooltip, avatar)
- input-controls: user input and action triggers (button, checkbox, select, form fields)
- layout: structural and spatial wrappers (stack, sidebar, simple-layout)
- navigation: context, route, or panel switching (tabs, breadcrumb, pagination)
- table: tabular data presentation plus tightly coupled helpers
- user-interaction: composite disclosure and overlay patterns (accordion, drawer, sheet) not purely navigational nor ephemeral feedback

If ambiguous, choose the primary mental model. Do not duplicate across folders.

## Exports rules

- All exports must be named. No default exports.
- Multi-part components should export related subcomponents together from the main entry point.
- Prefer a single entry file for the public API.

## Barrel rules

- The category `index.ts` must re-export the component folder.
- The root `components/index.ts` should only change if a new category is introduced.

## Expected file structure (ideal)

<category>/<component>/
index.tsx
<component>.stories.tsx
<component>.spec.tsx
README.md (optional)
types.ts (optional)

## Output

Report:

- Chosen category and why
- Export changes
- Barrel export changes

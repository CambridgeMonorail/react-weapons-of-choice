---
name: 'UI and Accessibility Standards'
description: 'Tailwind, component conventions, and accessibility requirements'
applyTo: '**/*.tsx'
---

# UI and Accessibility Standards

## Tailwind and Component Conventions

- Use Tailwind CSS utility classes for all styling
- Import shadcn/ui components from `@rwoc/shadcnui`
- Use `cn()` utility for conditional classes (from `@rwoc/shadcnui`)
- Mobile-first responsive design with breakpoints: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Dark mode support where applicable using `dark:` variant
- Avoid custom CSS unless absolutely necessary

## Shadcn/ui Usage

- All shadcn/ui components live in `libs/shadcnui/src/lib/`
- Import from workspace: `import { Button, Card } from '@rwoc/shadcnui'`
- Follow shadcn/ui component API and prop patterns
- Extend shadcn components rather than creating new primitives
- Common components: Button, Card, Input, Select, Dialog, Dropdown, Table, Badge, etc.

## Accessibility Baseline Requirements

### Labels and Inputs

- All form inputs must have associated `<label>` or `aria-label`
- Use `htmlFor` on labels to connect to input `id`
- Provide helpful error messages and validation feedback
- Mark required fields clearly

### Focus Management

- Maintain logical tab order
- Visible focus indicators on all interactive elements
- Trap focus in modals and dialogs
- Return focus appropriately when closing overlays

### Keyboard Navigation

- All interactive elements accessible via keyboard
- Support standard keyboard patterns (Tab, Enter, Escape, Arrow keys)
- Don't override browser keyboard shortcuts without good reason

### ARIA Hygiene

- Use semantic HTML first (`<button>`, `<nav>`, `<main>`, etc.)
- Add ARIA attributes when semantic HTML is insufficient
- Use `aria-label`, `aria-labelledby`, `aria-describedby` for context
- Set `aria-hidden="true"` on decorative elements
- Manage `aria-expanded`, `aria-selected` states correctly

### Color and Contrast

- Ensure WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text)
- Don't rely on color alone to convey information
- Test with color blindness simulators

### Screen Reader Support

- Announce dynamic content changes with ARIA live regions
- Provide text alternatives for images and icons
- Ensure proper heading hierarchy (h1, h2, h3, etc.)
- Use skip links for keyboard navigation to main content

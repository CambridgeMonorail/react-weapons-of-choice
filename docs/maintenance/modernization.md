# Modernization Guide: Tailwind v4 & shadcn/ui Upgrade

A practical upgrade plan for bringing Tailwind and shadcn component libraries up to date in an Nx monorepo.

## 0) Prep and guardrails

### Create an upgrade branch

Do not attempt this on main.

### Lock down current behaviour

```bash
pnpm install
nx test <key-app>
nx lint <key-app>
nx build <key-app>
```

Run a quick manual UI smoke test in the main consuming app(s).

Capture a few "golden" screenshots of core screens and components for visual comparison.

### Confirm browser support expectations

Tailwind v4 targets modern browsers (Safari 16.4+, Chrome 111+, Firefox 128+). If you must support older browsers, you may need to stay on Tailwind v3.4 for now.

---

## 1) Update the platform first (Node, pnpm, Nx)

**Do this before touching Tailwind or shadcn**, otherwise you risk chasing phantom issues.

### Steps:

1. Update Node.js to a modern LTS that matches your Nx and React stack
2. Update pnpm (and ensure the monorepo uses a single package manager consistently)
3. Update Nx and core plugins (for React/Vite/etc. as applicable), then re-run:

```bash
pnpm install
nx graph  # Sanity check
nx build <key-app>
nx test <key-app>
nx lint <key-app>
```

This step is intentionally "boring" but it reduces risk massively.

---

## 2) Tailwind upgrade plan (v3 → v4)

### 2.1 Use the official Tailwind v4 upgrade path

Tailwind provides an official upgrade guide and an automated upgrade tool for migrating v3 → v4. **Use that rather than doing it manually.**

Typical flow:

1. Run the upgrade tool (follow the official guide's recommended command and steps)
2. Review the resulting diff carefully (the v4 shift is "CSS first" and can affect config shape and how content scanning works)
3. Fix build and styling issues, then run a UI smoke test again

### 2.2 Monorepo-specific Tailwind v4: fix scanning and CSS bloat risks

Tailwind v4's scanning model can behave differently in workspaces. Nx has specific guidance for configuring Tailwind sources in Nx workspaces (including v4). **Follow Nx's recommended monorepo configuration, not generic single-app docs.**

Concrete tasks for the developer:

- Ensure Tailwind is scanning all libraries that contain class usage, not just the consuming app
- If you have a dedicated `libs/tailwind` (or similar) shared config, verify all consuming apps reference it correctly
- If Tailwind output CSS becomes unexpectedly large, apply the Nx-recommended approach for controlling sources

### 2.3 Acceptance criteria for Tailwind

✅ All apps build successfully  
✅ No missing utility classes in shared libraries  
✅ No unexpected CSS explosion (bundle sizes roughly in the expected range)  
✅ Visual regressions are either fixed or explicitly accepted

---

## 3) shadcn/ui upgrade plan (components library)

### **Important:** What "updating shadcn" actually means

To "update to the latest shadcn" you are really doing **three things:**

1. **Update the CLI workflow and config** (components.json)
2. **Update the dependencies** shadcn components rely on (Radix, class-variance-authority, tailwind-merge, lucide, etc.)
3. **Selectively re-sync the component source files** you copied in two years ago

Because shadcn is **"you own the code"**, it does **NOT auto-upgrade like a normal npm component library.**

---

### 3.1 Make sure your workspace is on the current CLI and config

In an Nx monorepo, each workspace that uses shadcn should have its own `components.json`, with correct aliases.

#### What your developer should do:

- Go to each app or package that has shadcn components (or that you want the CLI to target) and ensure there is a `components.json`
- Verify aliases are correct for your repo layout, especially the `ui`, `lib`, `utils`, `hooks` paths used by the CLI to place and import generated code
- If you are migrating from an older shadcn setup, follow the "Update Your Project" notes in the shadcn changelog for the newer CLI expectations

#### Why this matters:

If aliases are wrong in a monorepo, the CLI will install files into the wrong place or generate broken imports.

---

### 3.2 Update the shadcn CLI usage (pnpm + monorepo)

Use the documented CLI commands (with pnpm) from the official docs:

```bash
# Initialize or re-initialize the shadcn setup for a workspace
# (installs dependencies and CSS variable setup)
pnpm dlx shadcn@latest init

# Add a component at the latest version
pnpm dlx shadcn@latest add <component>
```

**In Nx repos:** If the CLI struggles to find the right tsconfig, you may need to point it at the correct TS config (there are known workarounds discussed in the shadcn repo).

---

### 3.3 Update dependencies in one go

Before you re-sync component source files, **update the underlying dependencies first** (Radix packages, lucide-react, class-variance-authority, tailwind-merge, etc.). Then:

```bash
pnpm install
nx build <key-app>  # Run a quick UI smoke test
```

This reduces the chance you "update components" but still have old dependency behaviour underneath.

---

### 3.4 Re-sync components safely (the bit that actually updates the code)

**There is NO single "update everything" command** that upgrades every previously added component automatically. People typically re-add components one by one, then merge changes if they had custom edits.

#### A safe workflow your developer can follow:

**Step 1: Inventory what you have today**

- List all component files you maintain in the shadcn library and which apps consume them

**Step 2: Classify each component**

- **Unmodified or lightly modified:** You can usually re-add it with the CLI and accept the diff
- **Heavily modified:** Re-add the latest version into a temporary folder, then manually merge your custom changes

**Step 3: Re-add components from the registry using the CLI**

- Run `pnpm dlx shadcn@latest add <component>` for each component you want updated
- Review the diffs carefully before accepting

**Step 4: Check changelog-driven behaviour changes**

- For example, shadcn has shipped styling updates for Base UI components in January 2026 (inline-start and inline-end support) across common primitives
- Expect diffs in components like Dropdown Menu, Popover, Tooltip, Select, etc.

---

### 3.5 Monorepo specifics to watch

#### Configuration:

- **One `components.json` per workspace** you want the CLI to target
- Ensure TypeScript path aliases match how the code is actually consumed across packages (monorepo aliasing issues are a common source of confusion)

#### Architectural decision:

If your shadcn components live in a shared library, decide whether you want:

- shadcn files generated **directly into that library**, then imported by apps, **OR**
- shadcn files generated **per app**

Both are valid, but your `aliases.ui` needs to match the choice.

#### This project structure:

- shadcn components live in `libs/shadcnui/src/components/ui/*`
- Components are imported as `@rwoc/shadcnui` across the monorepo
- The `components.json` at root targets the `libs/shadcnui` library

---

### 3.6 Make sure Tailwind v4 and shadcn play nicely together

shadcn components are tightly coupled to Tailwind conventions. After Tailwind v4, confirm:

- Tokens and CSS variables are still present and applied as expected (especially if your styling lives in a shared library)
- Consuming apps correctly import the global styles from the component library (a common monorepo gotcha)
- CSS variable names match between Tailwind v4 config and shadcn theme expectations

---

### 3.7 Acceptance criteria for shadcn

**"Done" checklist:**

✅ `nx build` and `nx test` are green  
✅ Key shadcn primitives behave correctly (Dialog, Popover, Dropdown, Tooltip, Select, etc.)  
✅ No broken imports caused by alias changes  
✅ Component library builds and typechecks  
✅ Consuming apps render components with correct styles  
✅ Quick before/after screenshots for high-traffic UI  
✅ Visual regression screenshots match within an acceptable threshold

---

## 4) Suggested PR structure (keeps review sane)

- **PR 1:** Platform upgrades (Node/pnpm/Nx and framework deps)
- **PR 2:** Tailwind v4 migration (with monorepo scanning fixes)
- **PR 3:** shadcn CLI + config updates
- **PR 4:** Component re-sync and merges (small batches, not one monster PR)

---

## 5) Deliverables

A short `UPGRADE_NOTES.md` including:

- Final versions of Tailwind and shadcn CLI
- Any breaking changes encountered and how they were handled
- Any components that were deliberately left as-is (and why)
- Before/after screenshots for key pages
- A list of follow-up tidy-ups (optional but useful)

---

## Project-Specific Details

**Stack:** React SPA with Vite in Nx monorepo

**Tailwind config location:**

- Shared preset: `libs/common-tailwind/tailwind.config.js`
- Extended by apps: `apps/client/tailwind.config.js`
- Extended by Storybook: `libs/storybook-host/tailwind.config.js`

**shadcn component location:**

- Library: `libs/shadcnui/src/components/ui/*`
- Imported as: `@rwoc/shadcnui`
- Configuration: `components.json` at workspace root

**Component inventory:**
Components are maintained in the shadcnui library and consumed by:

- `apps/client` (main SPA)
- `libs/shell` (layout components)
- `libs/landing` (landing page components)
- `libs/shadcnui-blocks` (higher-level component blocks)

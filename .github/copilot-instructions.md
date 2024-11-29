- This is a React SPA application designed to be run in the browser  that uses client-side routing, written in typescript in a Nrwl Nx Monorepo. Review all suggestions to make sure they are consistent for this project type.
- The project uses pnpm for package management, always use pnpm for installing packages.
- Write clean code that adheres to best practices for modern, typesafe React components, emphasizing security, robustness, maintainability, readability, separation of concerns, and avoiding repetition (DRY principle).
- Use React functional components exclusively.
- Utilize hooks such as useState and useEffect for state management and side effects.
- Apply Tailwind CSS classes for styling components.
- Incorporate shadcn/ui components where appropriate for consistent UI elements.
- Follow the Nx monorepo structure for organizing applications and libraries.
- Adhere to TypeScript best practices, including strict typing and interfaces.
- Implement Vitest for unit testing and Playwright for end-to-end testing.
- Ensure all components are accessible and responsive.
- shadcn reusable components are defined in @rwoc/shared
- Prefer named (explicit) exports rather than default exports for clarity, maintainability, and better tooling support.
- Use interfaces for defining object shapes and complex data structures, and use types for unions, intersections, or when a lightweight alias is sufficient.
- Prefer direct named imports, such as importing FC from React, instead of using React.FC.
- Projects should use relative imports to import from other files within the same project.
- Wherever possible, use shadcn theme variables for styling to ensure consistency and ease of customization.
- Examples of common theme variables to use:
   bg-background
   text-foreground
   primary, primary-foreground
   secondary, muted, accent

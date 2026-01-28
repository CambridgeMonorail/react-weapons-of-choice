# Adding a New Component Page to the Routing in Your React SPA

To integrate a new component page into your React Single Page Application (SPA) with a centralized routing architecture, follow these steps:

## 1. Define the Path in `paths.ts`

Add a new key-value pair to the `paths` object in the `constants/paths.ts` file. This centralizes path definitions, ensuring consistency and simplifying future updates.

```typescript
// constants/paths.ts
export const paths = {
  // ...existing paths
  newComponent: '/new-component',
};
```

## 2. Update the Routes

Incorporate the new route into the routes array located in the data/routes.ts file. Reference the path using the paths object to maintain consistency.

```typescript
// data/routes.ts
import { paths } from '../constants/paths';
import NewComponentPage from '../components/NewComponentPage';

export const routes = [
  // ...existing routes
  {
    path: paths.newComponent,
    element: <NewComponentPage />,
  },
];
```

## 3. Modify the Sidebar Navigation (If Applicable)

If the new component page should appear in the sidebar navigation, update the sidebarData object in the data/sidebarData.ts file accordingly.

```typescript
 
// data/sidebarData.ts
import { paths } from '../constants/paths';

export const sidebarData = [
  // ...existing navigation items
  {
    title: 'New Component',
    path: paths.newComponent,
    // ...additional properties like icon
  },
];
```

## 4. Test the New Route

Start your development server and navigate to the new route to ensure it functions correctly.

```bash

npm start
```

Then, in your browser, visit <http://localhost:4200/new-component> to view the new component page.

## 5. Update Documentation

Update the documentation to reflect the new `shell` library and its components.

```markdown
- The `Layout` component and all related components are now moved to the `shell` library.
  - The `Layout` component is now located in `libs/shell/src/lib/Layout.tsx`.
  - The `AppSidebar` component is now located in `libs/shell/src/lib/AppSidebar.tsx`.
  - The `SidebarProvider`, `SidebarInset`, and `SidebarTrigger` components are now located in `libs/shell/src/lib/sidebar`.
  - The `Breadcrumb` components remain in `libs/shadcnui/src/components/ui/breadcrumb.tsx`.
  - The `Separator` component remains in `libs/shadcnui/src/components/ui/separator.tsx`.
- The imports in the `Layout` component are updated to reference components from the `shell` library.
```

## Summary

By following these steps, you can seamlessly add a new component page to your React SPA's routing system. This methodology promotes consistency and maintainability by centralizing path definitions and systematically updating routes and sidebar navigation.

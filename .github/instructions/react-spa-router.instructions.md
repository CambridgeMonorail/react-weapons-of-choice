---
name: 'React SPA Router Patterns'
description: 'Conventions for client React SPA'
applyTo: 'apps/client/**/*.{ts,tsx}'
---

# React SPA Router Patterns

## React Router Conventions

- Use `createBrowserRouter` with route-based code splitting
- Define routes in `app/app.tsx` using `createRoutesFromElements`
- Protected routes wrapped with `<ProtectedRoute>` component
- Error boundaries at route level with `errorElement={<ErrorBoundary />}`
- Nested routes for layouts with `<Outlet />`

## Route Structure

```tsx
<Route element={<BaseLayout />}>
  <Route errorElement={<ErrorBoundary />}>
    <Route path="/" element={<LandingPage />} />
    <Route element={<ProtectedRoute />}>
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
  </Route>
</Route>
```

## Error Boundary Patterns

- Use `<ErrorBoundary />` component from `app/shared`
- Catch errors at route level to prevent full app crashes
- Display user-friendly error messages with recovery options

## State Management

- React Context for authentication state (`AuthProvider`)
- React Query for server state and data fetching
- URL state for filters and pagination
- Local component state with `useState` for UI-only state
- Avoid global state for data that can be fetched on demand

## Feature Module Integration

- Shared components from libs: `@rwoc/shadcnui`, `@rwoc/shadcnui-blocks`, `@rwoc/shell`, `@rwoc/landing`
- Each module exports components with consistent API
- Use workspace imports for cross-library dependencies

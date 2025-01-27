# Best Practices for Building Reusable React Components

## Table of Contents

1. [Principles of Reusable Component Design](#principles-of-reusable-component-design)
2. [Best Practices](#best-practices)
   1. [Extend Native HTML Elements Where Possible](#1-extend-native-html-elements-where-possible)
   2. [Embrace Component Composition for Flexibility](#2-embrace-component-composition-for-flexibility)
   3. [Provide Customizability via Slots or Props](#3-provide-customizability-via-slots-or-props)
   4. [Keep State Management Minimal](#4-keep-state-management-minimal)
   5. [Leverage Default and Named Exports Strategically](#5-leverage-default-and-named-exports-strategically)
   6. [Ensure Accessibility](#6-ensure-accessibility)
   7. [Abstract Styles for Reuse](#7-abstract-styles-for-reuse)
3. [Summary Checklist](#summary-checklist)
4. [StatItem Component](#statitem-component)
5. [StatsBlock Component](#statsblock-component)

## Principles of Reusable Component Design

1. Single Responsibility Principle
   Each component should do one thing well. This makes it easier to understand, maintain, and reuse.
2. Favor Composition Over Inheritance
   Build components by combining smaller, reusable parts rather than relying on inheritance. This enables flexibility and customizability.

## Best Practices

### 1. Extend Native HTML Elements Where Possible

When creating components that wrap standard HTML elements like `<button>`, `<input>`, or `<select>`, extend their props to inherit all native attributes. This ensures your component behaves like the original while adding custom functionality.

```tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...rest }) => {
  const className = `btn-${variant}`;
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
```

**Why?**

- Retains native HTML behaviors (e.g., disabled, type).
- Provides type safety with TypeScript.
- Simplifies usage for developers familiar with native elements.

### 2. Embrace Component Composition for Flexibility

Compose complex components using smaller, reusable building blocks. Allow consumers to replace or rearrange parts of the component as needed.

Example: Hero Component with Composition

```tsx
const Hero = ({ children }: { children: React.ReactNode }) => <section className="hero">{children}</section>;

Hero.Title = ({ children }: { children: React.ReactNode }) => <h1 className="hero-title">{children}</h1>;

Hero.Subtitle = ({ children }: { children: React.ReactNode }) => <h2 className="hero-subtitle">{children}</h2>;

Hero.Image = ({ src, alt }: { src: string; alt: string }) => <img className="hero-image" src={src} alt={alt} />;

Hero.CTA = ({ children }: { children: React.ReactNode }) => <div className="hero-cta">{children}</div>;

// Usage
const App = () => (
  <Hero>
    <Hero.Image src="image.jpg" alt="Hero" />
    <Hero.Title>Welcome to Our App</Hero.Title>
    <Hero.Subtitle>Make the most of your experience</Hero.Subtitle>
    <Hero.CTA>
      <button>Get Started</button>
    </Hero.CTA>
  </Hero>
);
```

**Why?**

- Users can customize layout and content without altering the core component.
- Promotes modularity by separating concerns into smaller, testable components.

### 3. Provide Customizability via Slots or Props

Design components to allow users to supply their own content or child components. Use the children prop or named props for "slots" to achieve this.

Example: Component Slots

```tsx
const Card = ({ header, content, footer }: { header: React.ReactNode; content: React.ReactNode; footer: React.ReactNode }) => (
  <div className="card">
    <div className="card-header">{header}</div>
    <div className="card-content">{content}</div>
    <div className="card-footer">{footer}</div>
  </div>
);

// Usage
<Card header={<h1>Card Title</h1>} content={<p>Card details here.</p>} footer={<button>Click Me</button>} />;
```

**Why?**

- Enables complex customization without modifying the component.
- Supports diverse layouts and content for different use cases.

### 4. Keep State Management Minimal

Avoid embedding too much state in reusable components. Instead:

- Use props to receive data and onChange callbacks to notify parents of updates.
  -Rely on React Context for shared state across multiple components.

**Example: Controlled Input**

```tsx
const TextInput = ({ value, onChange, ...rest }: React.InputHTMLAttributes<HTMLInputElement>) => <input value={value} onChange={onChange} {...rest} />;

// Usage
<TextInput value={inputValue} onChange={(e) => setInputValue(e.target.value)} />;
```

**Why?**

- Keeps components stateless and reusable.
- Empowers parent components to manage state.

### 5. Leverage Default and Named Exports Strategically

For shared, reusable components:

- Use named exports to enable tree-shaking and better tooling.
- Use default exports for components intended as single entities.

```tsx
// Good practice
export const Button = ({ ...props }) => <button {...props} />;
export const Input = ({ ...props }) => <input {...props} />;
```

### 6. Ensure Accessibility

Use semantic HTML and ARIA attributes to make your components accessible to all users.

Example: Accessible Button

```tsx
const AccessibleButton = ({ children, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button {...rest} aria-label={children?.toString()}>
    {children}
  </button>
);
```

**Why?**

- Complies with accessibility standards (WCAG).
- Enhances usability for screen readers and assistive technologies.

### 7. Abstract Styles for Reuse

Use utility-first CSS (e.g., TailwindCSS) or CSS-in-JS solutions (e.g., styled-components) to keep styles encapsulated and reusable.

**Example: TailwindCSS Button**

```tsx
const Button = ({ children, variant = 'primary', ...rest }: ButtonProps) => (
  <button className={`btn ${variant === 'primary' ? 'btn-primary' : 'btn-secondary'}`} {...rest}>
    {children}
  </button>
);
```

## Summary Checklist

- [ ] Extend native HTML element props for consistency and flexibility.
- [ ] Use composition to break down complex components into reusable parts.
- [ ] Allow customization with props, slots, or children.
- [ ] Avoid tightly coupling state to components; prefer stateless designs.
- [ ] Follow accessibility best practices.
- [ ] Write concise, modular, and DRY components.
- [ ] Use named exports for reusable component libraries.

## Best Practices for Using the New `shell` Library Components

### 1. Organize Components Logically

Ensure that components within the `shell` library are organized logically. For example, group related components like `SidebarProvider`, `SidebarInset`, and `SidebarTrigger` together.

### 2. Update Imports Consistently

When using components from the `shell` library, update imports consistently across your application. This helps maintain a clean and understandable codebase.

```tsx
import { Layout, AppSidebar, SidebarProvider, SidebarInset, SidebarTrigger } from '@erisfy/shell';
```

### 3. Decompose Components for Reusability

Decompose complex components into smaller, reusable parts. For example, the `Layout` component can be broken down into `Header`, `Breadcrumb`, and `ThemeToggle` components.

### 4. Use Context for Shared State

Utilize React Context to manage shared state across components. For example, the `SidebarProvider` can be used to provide the sidebar state to all child components without passing props down the component tree.

### 5. Follow Accessibility and Responsiveness Best Practices

Ensure that all components are accessible and responsive. Use semantic HTML and ARIA attributes to enhance usability for all users.

### 6. Apply Tailwind CSS for Consistent Styling

Use Tailwind CSS classes for component styling and prefer shadcn/ui components for consistent UI elements. This ensures a cohesive design language across your application.

### 7. Write Clean, Modern, Type-Safe Code

Adhere to TypeScript best practices, including strict typing and the use of interfaces. Write clean, modern, type-safe React functional components that emphasize security, robustness, maintainability, readability, separation of concerns, and the DRY principle.

### 8. Implement Testing

Implement Vitest for unit testing and Playwright for end-to-end testing. Ensure that all components are thoroughly tested to maintain code quality and reliability.

### 9. Document Components

Provide comprehensive documentation for each component in the `shell` library. This helps other developers understand how to use the components effectively and promotes consistency across the codebase.

### 10. Use Named Exports

Prefer named (explicit) exports over default exports for clarity and better tooling support. This makes it easier to identify and import specific components from the `shell` library.

```tsx
// Good practice
export const Layout = ({ ...props }) => <div {...props} />;
export const AppSidebar = ({ ...props }) => <div {...props} />;
```

By following these best practices, you can effectively use the new `shell` library components to build a maintainable, scalable, and high-quality React application.

## StatItem Component

The `StatItem` component is designed to encapsulate individual statistic elements, including an icon, value, title, and description. It is flexible and reusable across different parts of the application.

### Props

- `icon`: ReactNode - The icon to display.
- `value`: string | number - The value of the statistic.
- `title`: string - The title of the statistic.
- `description`: string - A brief description of the statistic.

### Usage

```tsx
import { StatItem } from '@erisfy/shadcnui-blocks';
import { FaUser } from 'react-icons/fa';

const Example = () => (
  <StatItem
    icon={<FaUser className="text-primary" />}
    value="1,234"
    title="Users"
    description="Number of active users"
  />
);
```

## StatsBlock Component

The `StatsBlock` component aggregates multiple `StatItem` components into a cohesive block. It uses a flexbox layout with wrapping for responsiveness and includes accessibility features.

### Props

- `stats`: StatItemProps[] - An array of statistic data to dynamically generate `StatItem` components.

### Usage

```tsx
import { StatsBlock } from '@erisfy/shadcnui-blocks';
import { FaUser, FaChartLine, FaDollarSign } from 'react-icons/fa';

const stats = [
  {
    icon: <FaUser className="text-primary" />,
    value: '1,234',
    title: 'Users',
    description: 'Number of active users',
  },
  {
    icon: <FaChartLine className="text-primary" />,
    value: '567',
    title: 'Sessions',
    description: 'Number of sessions today',
  },
  {
    icon: <FaDollarSign className="text-primary" />,
    value: '$12,345',
    title: 'Revenue',
    description: 'Total revenue this month',
  },
];

const Example = () => <StatsBlock stats={stats} />;
```

### Empty State

The `StatsBlock` component displays a placeholder message or icon when there is no data to display.

```tsx
const ExampleEmptyState = () => <StatsBlock stats={[]} />;
```

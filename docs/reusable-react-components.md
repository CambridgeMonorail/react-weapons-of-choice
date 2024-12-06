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

## Principles of Reusable Component Design

1. Single Responsibility Principle
Each component should do one thing well. This makes it easier to understand, maintain, and reuse.
2. Favor Composition Over Inheritance
Build components by combining smaller, reusable parts rather than relying on inheritance. This enables flexibility and customizability.

## Best Practices

### 1. Extend Native HTML Elements Where Possible

   When creating components that wrap standard HTML elements like ```<button>```, ```<input>```, or ```<select>```, extend their props to inherit all native attributes. This ensures your component behaves like the original while adding custom functionality.

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
const Hero = ({ children }: { children: React.ReactNode }) => (

  <section className="hero">{children}</section>
);

Hero.Title = ({ children }: { children: React.ReactNode }) => (

  <h1 className="hero-title">{children}</h1>
);

Hero.Subtitle = ({ children }: { children: React.ReactNode }) => (

  <h2 className="hero-subtitle">{children}</h2>
);

Hero.Image = ({ src, alt }: { src: string; alt: string }) => (
<img className="hero-image" src={src} alt={alt} />
);

Hero.CTA = ({ children }: { children: React.ReactNode }) => (

  <div className="hero-cta">{children}</div>
);

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
const Card = ({ header, content, footer }: {
header: React.ReactNode;
content: React.ReactNode;
footer: React.ReactNode;
}) => (

  <div className="card">
    <div className="card-header">{header}</div>
    <div className="card-content">{content}</div>
    <div className="card-footer">{footer}</div>
  </div>
);

// Usage
<Card
header={<h1>Card Title</h1>}
content={<p>Card details here.</p>}
footer={<button>Click Me</button>}
/>
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
const TextInput = ({ value, onChange, ...rest }: React.InputHTMLAttributes<HTMLInputElement>) => (
<input value={value} onChange={onChange} {...rest} />
);

// Usage
<TextInput value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
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
<button
className={`btn ${variant === 'primary' ? 'btn-primary' : 'btn-secondary'}`}
{...rest}
>
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

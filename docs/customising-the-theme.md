# Customising the Theme in Your React SPA with shadcn UI

This guide is for consumers of a React SPA project that uses **shadcn UI** and **Tailwind CSS**, with a robust theming setup defined in `styles.css` and `tailwind.config.js`. It explains how to customise the theme to ensure it is both aesthetically pleasing and accessible.

## Understanding the Theme Setup

### Key Files

- **`apps/demo/src/styles.css`**:
  Contains CSS variables that define the theme for light and dark modes.
  
- **`apps/demo/tailwind.config.js`**:
  Extends Tailwind CSS with these variables for consistent usage across the application.

### CSS Variables

The theme uses CSS variables like `--background`, `--foreground`, `--primary`, and more. These variables are defined for light and dark modes, allowing for seamless transitions and customisation.

Example from `styles.css`:

```css
:root {
  --background: 249 100% 95%;
  --foreground: 249 5% 10%;
  --primary: 249 69% 8%;
  --primary-foreground: 0 0% 100%;
  --border: 249 30% 50%;
}
```

## Customising the Theme

### Step 1: Update the CSS Variables

Modify the values in styles.css to customise the theme. Use HSL values to maintain a consistent look and feel while making adjustments.

Example:

```css
:root {
  --background: 240 60% 96%; /* Light blue background */
  --foreground: 240 10% 20%; /* Darker blue text */
  --primary: 200 70% 40%;    /* Vibrant blue for primary actions */
  --primary-foreground: 0 0% 100%; /* White text for primary buttons */
}
``````

### Step 2: Extend Tailwind Configuration (Optional)

If you want to use these variables in Tailwind classes, ensure they are mapped in tailwind.config.js under the extend.colors section.

```javascript
// apps/demo/tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
      },
    },
  },
};
```

### Step 3: Preview Changes

Run your development server and preview the changes in real time:

```bash
npm run start
```

Use browser developer tools to inspect elements and confirm that the changes are applied.

## Ensuring Accessibility

### 1. Check Color Contrast

Use tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) to ensure the foreground and background colors meet WCAG guidelines:

- 4.5:1 for normal text.
- 3:1 for large text.

### 2. Provide Alternatives for Color-Only Indicators

Avoid relying solely on color to convey meaning. Use icons, text, or patterns for additional clarity.
Example:

```html
<button class="bg-primary text-primary-foreground">
  Save Changes
  <span class="sr-only">(This button saves your changes)</span>
</button>
```

### 3. Test Light and Dark Modes

Verify that both light and dark modes are accessible. Adjust the dark mode variables as needed in styles.css.
Example:

```css
.dark {
  --background: 240 40% 10%;  /*Dark blue background */
  --foreground: 240 5% 90%;   /* Light text for contrast*/
}
```

### 4. Involve Real Users

Perform usability testing with a diverse group of users to gather feedback on aesthetics and accessibility.

## Additional Resources

- [shadcn UI Theming Documentation](https://ui.shadcn.com/docs/theming)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Web Docs: CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [WCAG Guidelines for Accessible Colors](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=143#contrast-minimum)

By following this guide, you can create a theme that not only looks great but is also accessible to all users, ensuring inclusivity and compliance with accessibility standards.

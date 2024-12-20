# shadcnui

`shadcnui` is a React component library within our monorepo, built using `shadcn/ui` components and managed with Nx. It provides a collection of accessible, customizable, and reusable UI components styled with Tailwind CSS and written in TypeScript.

## Background

`shadcn/ui` is a modern React component library that has gained significant popularity among developers for several reasons:

- **Customization and Flexibility**: Unlike traditional component libraries, `shadcn/ui` allows developers to copy and paste components directly into their codebase. This approach provides full control over the components, enabling easy customization to match specific design requirements without being constrained by predefined styles.
- **Integration with Tailwind CSS**: Built on top of Tailwind CSS, `shadcn/ui` leverages a utility-first approach to styling, facilitating rapid UI development and consistent design patterns.
- **Accessibility**: By utilizing Radix UI primitives, `shadcn/ui` ensures that all components are accessible by default, promoting inclusivity and adherence to web accessibility standards.
- **Modularity**: Developers can select and include only the components they need, reducing unnecessary bloat and improving application performance. This modularity is particularly beneficial in projects where specific functionality is required without the overhead of a full component library.
- **Active Community and Support**: Since its launch in March 2023, `shadcn/ui` has rapidly gained traction, with its GitHub repository amassing over 30,000 stars. This growth reflects a strong and active community that contributes to continuous improvements and support.

These features make `shadcn/ui` a compelling choice for developers seeking a flexible, customizable, and accessible component library for their React applications.

## Features

- **Pre-built Components**: Utilizes a collection of accessible and customizable UI components from `shadcn/ui`.
- **Tailwind CSS Integration**: Styled with Tailwind CSS for rapid UI development.
- **TypeScript Support**: Written in TypeScript for type safety and IntelliSense support.
- **Unit Testing**: Tested with Vitest to ensure component reliability.

## Available Components

Our library includes the following components:

- **Button**: A versatile button component with support for different variants and sizes.
- **Input**: A customizable input field for user text entry.
- **Select**: A dropdown select component for choosing options from a list.
- **Modal**: A dialog component for displaying content in an overlay.
- **Card**: A flexible content container with various styling options.
- **Form**: Components to build accessible and validated forms, including labels, inputs, checkboxes, and more.
- **Table**: A responsive table component for displaying tabular data.
- **Tabs**: A tabbed navigation component for organizing content into sections.
- **Tooltip**: A hover-activated tooltip for providing additional information.
- **Alert**: A component for displaying important messages to users.

For detailed documentation and examples of each component, please refer to the [`shadcn/ui` documentation](https://ui.shadcn.com/).

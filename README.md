<p align="center">
  <img src="docs/images/logos/rwoc-logo.svg" alt="RWOC Logo" width="25%" height="25%">
</p>

# react-weapons-of-choice

![Project Status](https://img.shields.io/badge/status-alpha-orange?style=for-the-badge)
![Version](https://img.shields.io/github/package-json/v/CambridgeMonorail/react-weapons-of-choice?style=for-the-badge)
![Build Status](https://img.shields.io/github/actions/workflow/status/CambridgeMonorail/react-weapons-of-choice/ci.yml?style=for-the-badge)
![License](https://img.shields.io/github/license/CambridgeMonorail/react-weapons-of-choice?style=for-the-badge)
![Last Commit](https://img.shields.io/github/last-commit/CambridgeMonorail/react-weapons-of-choice?style=for-the-badge)

**NOTE: This project is currently in alpha. In fact, it's very alpha. This means it is still under active development and may undergo significant changes. Features may be incomplete or unstable. Got suggestions on what you would like to see or how to make it better? Add an issue and let us know!**

## Table of Contents

- [Overview](#overview)
- [Project Goals](#project-goals)
- [Features](#features)
- [Why This Project Was Built](#why-this-project-was-built)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Run tasks](#run-tasks)
- [Install Nx Console](#install-nx-console)
- [Make This Your Own](#make-this-your-own)
- [Add new projects](#add-new-projects)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Useful links](#useful-links)
- [FAQs](#faqs)

## Overview

An open-source boilerplate designed to simplify the development of single-page React applications (SPAs). By leveraging Nx, Tailwind CSS, and Shadcn UI, this project offers developers a seamless and efficient starting point for building modern front-end applications. It is ideal for those who prefer not to use Next.js or cannot use it but still want the benefits of this powerful toolset.

Inspired by and based upon [joshuarobs/nx-shadcn-ui-monorepo](https://github.com/joshuarobs/nx-shadcn-ui-monorepo).

Thanks to the help from this tutorial here: <https://medium.com/readytowork-org/monorepo-setup-with-nx-nextjs-and-shadcn-ui-3b72c3599470>

## Project Goals

- **Simplified Setup**: Provide a ready-to-use boilerplate for developers looking to build SPAs using modern tools without SSR or Next.js.
- **Seamless Integration**: Combine Nx for monorepo management, Tailwind CSS for utility-first styling, and Shadcn UI for cohesive, customizable UI components.
- **Scalability and Modularity**: Offer a scalable architecture with reusable libraries and clear boundaries between projects.
- **Enhanced Developer Experience**: Deliver a well-documented, intuitive, and maintainable codebase to boost productivity and reduce onboarding time.
- **Community Collaboration**: Foster an open-source community to innovate, improve, and expand the project.

For a detailed breakdown of the project goals, see [Project Goals](./docs/project-goals.md).

## Features

- 🏗 **Nx Monorepo**: Modular and scalable workspace for managing multiple projects and libraries.
- 🎨 **Tailwind CSS**: Utility-first CSS framework for rapid and responsive UI development.
- 🖌 **Shadcn UI**: A customizable component library for consistent and reusable design patterns.
- ⚡ **Vite**: Fast and efficient development server and build tool.
- 🚀 **CI/CD Integration**: Preconfigured workflows for automated builds and testing.

## Why This Project Was Built

While tools like Nx, Tailwind CSS, and Shadcn UI are incredibly powerful and offer numerous benefits for modern front-end development, the process of configuring them can still be time-consuming, error-prone, and frustrating, even for experienced developers. This is because setting up such architectures from scratch is an infrequent task, and each setup can have its own unique challenges and nuances.

This project was built to address these challenges by providing a pre-configured, ready-to-use boilerplate that simplifies the initial setup process. By leveraging this boilerplate, developers can quickly start building their applications without worrying about the complexities of configuration, allowing them to focus on writing code and delivering features.

For more details on why a React SPA boilerplate may still have some value in a Next.js world, see [Why a React SPA Boilerplate in a Next.js World?](./docs/why-spa-why.md)

## Technologies Used

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Nx](https://img.shields.io/badge/Nx-143055?style=for-the-badge&logo=nx&logoColor=white)](https://nx.dev/)
[![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)](https://www.markdownguide.org/)
[![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)](https://pnpm.io/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcn&logoColor=white)](https://ui.shadcn.dev/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)
[![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)](https://playwright.dev/)
[![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![GitHub Copilot](https://img.shields.io/badge/GitHub_Copilot-000000?style=for-the-badge&logo=github-copilot&logoColor=white)](https://github.com/features/copilot)

- **React**: [A JavaScript library for building user interfaces.](https://reactjs.org/)
- **TypeScript**: [A typed superset of JavaScript that compiles to plain JavaScript.](https://www.typescriptlang.org/)
- **Node.js**: [A JavaScript runtime built on Chrome's V8 JavaScript engine.](https://nodejs.org/)
- **Nx**: [A set of extensible dev tools for monorepos, which helps in managing and scaling the project.](https://nx.dev/)
- **Markdown**: [A lightweight markup language for creating formatted text using a plain-text editor.](https://www.markdownguide.org/)
- **pnpm**: [A fast, disk space-efficient package manager.](https://pnpm.io/)
- **Vite**: [A build tool that provides a faster and leaner development experience for modern web projects.](https://vitejs.dev/)
- **GitHub**: [A platform for version control and collaboration.](https://github.com/)
- **GitHub Actions**: [A CI/CD service that allows you to automate your build, test, and deployment pipeline.](https://github.com/features/actions)
- **Tailwind CSS**: [A utility-first CSS framework for styling the components.](https://tailwindcss.com/)
- **shadcn/ui**: [A set of reusable UI components for consistent design.](https://ui.shadcn.dev/)
- **React Router**: [A library for routing in React applications.](https://reactrouter.com/)
- **Vitest**: [A Vite-native unit testing framework.](https://vitest.dev/)
- **Playwright**: [An end-to-end testing framework.](https://playwright.dev/)
- **Visual Studio Code**: [A source-code editor made by Microsoft for Windows, Linux, and macOS.](https://code.visualstudio.com/)
- **GitHub Copilot**: [An AI pair programmer that helps you write code faster and with less work.](https://github.com/features/copilot)

## Installation

To install the project, follow these steps:

1. Clone the repository:

    ```sh
    git clone https://github.com/CambridgeMonorail/react-weapons-of-choice.git
    ```

2. Navigate to the project directory:

    ```sh
    cd react-weapons-of-choice
    ```

3. Install dependencies:

    ```sh
    pnpm install
    ```

## Usage

To run the dev server for your app, use:

```sh
npx nx serve demo
```

To create a production bundle:

```sh
npx nx build demo
```

To see all available targets to run for a project, run:

```sh
npx nx show project demo
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Run Tasks

The following scripts are available to manage and build the project:

- **Build**
  - `pnpm run build:affected`: Build only the affected projects.
  - `pnpm run build:all`: Build all projects.
  - `pnpm run build:demo`: Build the demo application.
  - `pnpm run build:shadcnui`: Build the shadcnui library.

- **Clean**
  - `pnpm run clean`: Clean all projects.

- **Format**
  - `pnpm run format:check`: Check the formatting of the code.
  - `pnpm run format`: Format the code.

- **Lint**
  - `pnpm run lint:affected`: Lint only the affected projects.
  - `pnpm run lint:all`: Lint all projects.
  - `pnpm run lint:demo`: Lint the demo application.
  - `pnpm run lint:shadcnui`: Lint the shadcnui library.

- **Precommit**
  - `pnpm run precommit`: Run lint, type-check, build, and test for all projects before committing.

- **Prepare**
  - `pnpm run prepare`: Prepare Husky for Git hooks.

- **Serve**
  - `pnpm run serve:demo`: Serve the demo application.
  - `pnpm run serve:storybook`: Serve the Storybook instance.

- **Test**
  - `pnpm run test:affected`: Test only the affected projects.
  - `pnpm run test:all`: Test all projects.
  - `pnpm run test:demo`: Test the demo application.
  - `pnpm run test:shadcnui`: Test the shadcnui library.

- **Type-check**
  - `pnpm run type-check:affected`: Type-check only the affected projects.
  - `pnpm run type-check:all`: Type-check all projects.
  - `pnpm run type-check:demo`: Type-check the demo application.
  - `pnpm run type-check:shadcnui`: Type-check the shadcnui library.

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

# Make This Your Own

Follow these steps to fork and customize the boilerplate for your own project.

---

## 1. Fork the Repository

1. Navigate to the **original** repository on GitHub.  
2. Click the **Fork** button in the upper-right corner to create a personal copy under your GitHub account.  
3. For detailed instructions, refer to GitHub’s [Fork a repo documentation](https://docs.github.com/en/get-started/quickstart/fork-a-repo).

---

## 2. Clone the Forked Repository

1. Locate the **forked** repository on your GitHub account.  
2. Click the **Code** button and copy the repository’s URL.  
3. Open your terminal and run:

    ```bash
    git clone https://github.com/<your-username>/<your-forked-repo>.git
    ```

   Replace `<your-username>` with your GitHub username and `<your-forked-repo>` with the repository name.

---

## 3. Update Project Identifiers

You can update project identifiers either **manually** or by using the **setup script** included in this boilerplate.

### 3.1 Manual Update

1. Perform a global **search and replace** across the codebase to update:
   - Project name  
   - URLs  
   - Branding elements  
   - Any other relevant identifiers  

2. Ensure **all** instances of the original project name are replaced with your new project name.

### 3.2 Using the Setup Script

1. **Install project dependencies**:

    ```bash
    pnpm install
    ```

2. **Run the setup script**:

    ```bash
    pnpm run setup
    ```

   The script will prompt you to replace:
   - **Organization**: e.g., “CambridgeMonorail” → “YourOrgName”  
   - **Machine-Readable App Name**: e.g., “react-weapons-of-choice” → “my-awesome-app”  
   - **Human-Readable App Name**: e.g., “React Weapons of Choice” → “My Awesome App”  
   - **Abbreviation**: e.g., “rwoc” → “maa”  

   You will also have the option to set a **new Git remote** URL.

---

## 4. Modify Configuration Files

1. Review and update configuration files—such as `package.json` and `.env`—to align them with your project’s requirements.  
2. Adjust metadata, dependencies, environment variables, and other project-specific settings as needed.

---

## 5. Review Documentation

1. **Replace** references to the original project with your new project details.  
2. Update any relevant documentation (e.g., README, wiki pages) to reflect your project’s context and branding.

---

## 6. Set Up a New Remote Repository

1. Create a **new repository** on GitHub for your customized project.  
2. In your terminal, **navigate** to your project’s directory and run:

    ```bash
    git remote remove origin
    git remote add origin https://github.com/<your-username>/<your-new-repo>.git
    ```

   Replace `<your-username>` with your GitHub username and `<your-new-repo>` with the new repository name.

---

## 7. Push Changes to the New Repository

1. Push your local changes to the new remote repository:

    ```bash
    git push -u origin main
    ```

   Make sure your local branch is named `main`. If not, replace `main` with the correct branch name.

---

## 8. Install Dependencies and Initialize Git Hooks

1. **Install** any required dependencies (if you haven’t already):

    ```bash
    pnpm install
    ```

2. **Set up Git hooks** or other initialization scripts:

    ```bash
    pnpm run prepare
    ```

   This typically configures hooks like pre-commit or lint-staged checks.

---

By following these steps, you can fully customize the boilerplate to fit your project’s needs while maintaining a clean, organized codebase.

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/react:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/react:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Theming Your App

To learn how to theme your app using Shadcn UI and Tailwind CSS, please refer to the detailed guide in [docs/theming-a-new-app.md](./docs/theming-a-new-app.md).

### Adding a New Component Page to the Routing in Your React SPA

To add a new component page to the routing in your React SPA, please refer to the detailed guide in [docs/adding-new-component-page.md](./docs/adding-new-component-page.md).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes. For detailed guidelines on how to contribute, see [Contributing](./docs/CONTRIBUTING.md).

## License

This project is licensed under the MIT License.

## Acknowledgments

- [joshuarobs/nx-shadcn-ui-monorepo](https://github.com/joshuarobs/nx-shadcn-ui-monorepo)
- [Shadcn UI](https://github.com/shadcn-ui/ui)
- [Nx](https://nx.dev)
- [Placebeard](https://placebeard.it/): A fantastic service for placeholder images featuring bearded individuals, inspired by similar services like placekitten.com and placedog.com. We appreciate their free service for adding a touch of fun to our project.
- [unDraw](https://undraw.co/): Open-source illustrations for any idea you can imagine and create. A constantly updated design project with beautiful SVG images that you can use completely free and without attribution. Created by [Katerina Limpitsouni](https://x.com/ninaLimpi).

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## FAQs

### Why doesn't the app load?

It's not finished yet.

### Why is the button not working?

It's not finished yet.

### Why is there no dark mode?

It's not finished yet.

### Why does the page look weird on mobile?

It's not finished yet.

### Why is the documentation incomplete?

It's not finished yet.

### Why can't I find the feature I need?

It's not finished yet.

### Why is the sky blue?

It's not finished yet. (Just kidding, that's actually due to Rayleigh scattering.)

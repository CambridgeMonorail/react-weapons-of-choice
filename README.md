# react-weapons-of-choice

![Project Status](https://img.shields.io/badge/status-alpha-orange?style=for-the-badge)
![Version](https://img.shields.io/github/package-json/v/CambridgeMonorail/react-weapons-of-choice?style=for-the-badge)
![Build Status](https://img.shields.io/github/actions/workflow/status/CambridgeMonorail/react-weapons-of-choice/ci.yml?style=for-the-badge)
![License](https://img.shields.io/github/license/CambridgeMonorail/react-weapons-of-choice?style=for-the-badge)
![Last Commit](https://img.shields.io/github/last-commit/CambridgeMonorail/react-weapons-of-choice?style=for-the-badge)

## Table of Contents

- [Overview](#overview)
- [Project Goals](#project-goals)
- [Features](#features)
- [Why This Project Was Built](#why-this-project-was-built)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Run tasks](#run-tasks)
- [Add new projects](#add-new-projects)
- [Install Nx Console](#install-nx-console)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Useful links](#useful-links)

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

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Nx](https://img.shields.io/badge/Nx-143055?style=for-the-badge&logo=nx&logoColor=white)
![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

- **React**: A JavaScript library for building user interfaces.
- **Nrwl Nx**: A set of extensible dev tools for monorepos, which helps in managing and scaling the project.
- **Tailwind CSS**: A utility-first CSS framework for styling the components.
- **shadcn/ui**: A set of reusable UI components for consistent design.
- **React Router**: A library for routing in React applications.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vitest**: A Vite-native unit testing framework.
- **Playwright**: An end-to-end testing framework.

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
    npm install
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
  - `pnpm run build`: Build the project.

- **Clean**
  - `pnpm run clean`: Clean all projects.

- **Format**
  - `pnpm run format:check`: Check the formatting of the code.
  - `pnpm run format`: Format the code.

- **Lint**
  - `pnpm run lint:affected`: Lint only the affected projects.
  - `pnpm run lint:all`: Lint all projects.
  - `pnpm run lint`: Lint the project.

- **Precommit**
  - `pnpm run precommit`: Run lint, typecheck, test, and build before committing.

- **Prepare**
  - `pnpm run prepare`: Prepare Husky for Git hooks.

- **Serve**
  - `pnpm run serve:demo`: Serve the demo application.

- **Test**
  - `pnpm run test:affected`: Test only the affected projects.
  - `pnpm run test:all`: Test all projects.
  - `pnpm run test:e2e`: Run end-to-end tests.
  - `pnpm run test`: Test the project.

- **Typecheck**
  - `pnpm run typecheck`: Typecheck the project without emitting output.

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

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes. For detailed guidelines on how to contribute, see [Contributing](./docs/CONTRIBUTING.md).

## License

This project is licensed under the MIT License.

## Acknowledgments

- [joshuarobs/nx-shadcn-ui-monorepo](https://github.com/joshuarobs/nx-shadcn-ui-monorepo)
- [Shadcn UI](https://github.com/shadcn-ui/ui)
- [Nx](https://nx.dev)
- [Placebeard](https://placebeard.it/): A fantastic service for placeholder images featuring bearded individuals, inspired by similar services like placekitten.com and placedog.com. We appreciate their free service for adding a touch of fun to our project.

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

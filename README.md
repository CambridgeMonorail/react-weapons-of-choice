# nx-react-tailwind-shadcn-boilerplate

![Project Status](https://img.shields.io/badge/status-alpha-orange?style=for-the-badge)
![Version](https://img.shields.io/github/package-json/v/CambridgeMonorail/nx-react-tailwind-shadcn-boilerplate?style=for-the-badge)
![Build Status](https://img.shields.io/github/actions/workflow/status/CambridgeMonorail/nx-react-tailwind-shadcn-boilerplate/ci.yml?style=for-the-badge)
![License](https://img.shields.io/github/license/CambridgeMonorail/nx-react-tailwind-shadcn-boilerplate?style=for-the-badge)
![Last Commit](https://img.shields.io/github/last-commit/CambridgeMonorail/nx-react-tailwind-shadcn-boilerplate?style=for-the-badge)

An open-source boilerplate designed to simplify the development of single-page React applications (SPAs). By leveraging Nx, Tailwind CSS, and Shadcn UI, this project offers developers a seamless and efficient starting point for building modern front-end applications. It is ideal for those who prefer not to use Next.js or cannot use it but still want the benefits of this powerful toolset.

Inspired by and based upon [joshuarobs/nx-shadcn-ui-monorepo](https://github.com/joshuarobs/nx-shadcn-ui-monorepo).

Thanks to the help from this tutorial here: <https://medium.com/readytowork-org/monorepo-setup-with-nx-nextjs-and-shadcn-ui-3b72c3599470>

## Project Goals

- **Simplified Setup**: Provide a ready-to-use boilerplate for developers looking to build SPAs using modern tools without the complexities of SSR or Next.js.
- **Seamless Integration**: Combine Nx for monorepo management, Tailwind CSS for utility-first styling, and Shadcn UI for cohesive, customizable UI components.
- **Scalability and Modularity**: Offer a scalable architecture with reusable libraries and clear boundaries between projects.
- **Enhanced Developer Experience**: Deliver a well-documented, intuitive, and maintainable codebase to boost productivity and reduce onboarding time.
- **Community Collaboration**: Foster an open-source community to innovate, improve, and expand the project.

## Features

- 🏗 **Nx Monorepo**: Modular and scalable workspace for managing multiple projects and libraries.
- 🎨 **Tailwind CSS**: Utility-first CSS framework for rapid and responsive UI development.
- 🖌 **Shadcn UI**: A customizable component library for consistent and reusable design patterns.
- ⚡ **Vite**: Fast and efficient development server and build tool.
- 🚀 **CI/CD Integration**: Preconfigured workflows for automated builds and testing.

## Table of Contents

- [Project Goals](#project-goals)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Run tasks](#run-tasks)
- [Add new projects](#add-new-projects)
- [Finish your CI setup](#finish-your-ci-setup)
- [Install Nx Console](#install-nx-console)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Contact Information](#contact-information)
- [Useful links](#useful-links)
- [Join the Nx community](#join-the-nx-community)

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

## Installation

To install the project, follow these steps:

1. Clone the repository:

    ```sh
    git clone https://github.com/your-repo/nx-react-tailwind-shadcn-boilerplate.git
    ```

2. Navigate to the project directory:

    ```sh
    cd nx-react-tailwind-shadcn-boilerplate
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

## Finish your CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/nydsvj1Hng)

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [joshuarobs/nx-shadcn-ui-monorepo](https://github.com/joshuarobs/nx-shadcn-ui-monorepo)
- [Shadcn UI](https://github.com/shadcn-ui/ui)
- [Nx](https://nx.dev)

## Contact Information

For any inquiries, please contact [your-email@example.com](mailto:your-email@example.com).

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Join the Nx community

- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

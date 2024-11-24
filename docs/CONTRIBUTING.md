# Contributing to RiffRoll

Thank you for your interest in contributing to **RiffRoll**! Your contributions help improve the project and support guitarists in their practice journey. This guide provides an overview of the contribution process.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [How to Contribute](#how-to-contribute)
3. [Setting Up the Project Locally](#setting-up-the-project-locally)
4. [Guidelines for Issues and Pull Requests](#guidelines-for-issues-and-pull-requests)
5. [Coding Standards](#coding-standards)
6. [Commit Message Guidelines](#commit-message-guidelines)

---

## Code of Conduct

Please read and adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). We strive to create a welcoming environment where everyone feels respected and valued.

## How to Contribute

You can contribute in several ways:

- **Report bugs** by opening an [issue](https://github.com/CambridgeMonorail/RiffRoll/issues).
- **Request new features** by starting a discussion on GitHub.
- **Submit pull requests** for bug fixes, enhancements, or documentation updates.

## Setting Up the Project Locally

To set up **RiffRoll** locally:

1. **Fork the repository** on GitHub and clone it:

   ```bash
   git clone https://github.com/CambridgeMonorail/RiffRoll/riffroll.git
   cd riffroll
    ```

Install dependencies with pnpm:

   ```bash
Copy code
pnpm install
   ```

Start the development server:

   ```bash
Copy code
pnpm nx serve riffroll-app
   ```

Ensure everything is working by running the test suite:

   ```bash
Copy code
pnpm nx test
   ```

This will allow you to develop and test changes locally before submitting a pull request.

## Guidelines for Issues and Pull Requests

### Issues

- **Search existing issues** to avoid duplicates.
- When reporting a bug, include **clear steps to reproduce it**, along with your **environment details**.
- Feature requests should include a **use case** and, if possible, **examples of how it would benefit users**.

### Pull Requests

- **Work on a forked repository** and create a **new branch** for each feature or bug fix (e.g., `feature/fretboard-animation` or `fix/tempo-slider`).
- Provide a **clear title and description** for the PR, describing the purpose and the changes.
- **Reference related issues** in the description (e.g., `Closes #12`).
- Ensure all **tests pass** by running `pnpm nx test`.
- **Tag maintainers or reviewers** if you need help or clarification on your PR.

## Coding Standards

To maintain code quality and readability, please follow these guidelines:

- **Code Formatting**: Run `pnpm format` before submitting to ensure consistent formatting.
- **Linting**: Fix any lint errors by running `pnpm lint`.
- **Folder Structure**: Follow the established directory structure in the `libs` and `apps` folders.
- **Documentation**: Document new components and functions with comments, especially if they add new functionality to the app.

## Commit Message Guidelines

We follow the Conventional Commits specification for commit messages. This format allows easy tracking of changes and helps with versioning.

Structure:

   ```plaintext
Copy code
<type>(<scope>): <description>
   ```

Examples:

feat(fretboard): add scrolling animation for fretboard
fix(metronome): correct timing issue at high BPM
Types include:

feat: A new feature.
fix: A bug fix.
docs: Documentation updates.
style: Code formatting changes, no code logic change.
refactor: Code changes that neither fix a bug nor add a feature.
test: Adding or updating tests.
chore: Maintenance tasks.
Thank you for contributing to RiffRoll! Every contribution is valuable and helps make the app better for everyone. Happy coding!

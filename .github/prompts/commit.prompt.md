---
name: Commit Changes
description: Stages changes, generates a conventional commit message, and commits.
---

# Commit Changes

Your goal is to stage all current changes, create a conventional commit message, and commit them.

## Steps

1. **Check Status**: Run `git status --porcelain` to see changes.
2. **Stage**: Run `git add -A` to stage all changes.
3. **Analyze**: Look at the logic of the changes to determine the commit type and scope.
4. **Draft Message**: Create a conventional commit message.
   - Format: `<type>(<scope>): <description>`
   - Types: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`, `ci`, `build`.
   - Use multi-line body with bullet points if changes are complex (3+ files).
5. **Confirm**: Show the message to the user for confirmation.
6. **Commit**: Run `git commit -m "..."`.

## Example Usage

"Commit these changes"
"Commit with message 'feat: support offline mode'"

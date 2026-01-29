---
name: Generate PR Description
description: Generates a PR description based on the current diff and template.
---

# Generate PR Description

Your goal is to generate a comprehensive pull request description.

## Steps

1. **Get Context**:
   - Determine current branch and infer issue number (if any).
   - Run `git diff --name-status main...HEAD` to see changed files.
   - Read `.github/pull_request_template.md` if it exists.

2. **Draft Description**:
   - **Summary**: 1-3 sentences explaining *why* and *what*.
   - **List of Changes**: Bullet points starting with verbs. Group by feature/area.
   - **Issue Link**: Connect to GitHub issue if inferred.

3. **Output**:
   - Present the description in a markdown code block for easy copying.

## Template

```markdown
## 📝 Description
[Summary]

**Issue**: [Link]

## 📋 List of Changes
- [Change 1]
- [Change 2]
```

# Implement Next Task

**Description**: automatically finds the next task in the active plan and implements it.

**Prompt**:
Read the most recent plan file in `docs/plans/`.
Identify the first incomplete task (unchecked checkbox).
Load the context (files) mentioned in that task.
Implement the task according to the instructions.
After implementation, ask me if you should mark the task as complete in the plan.
**Constraint**: Do not implement more than one task at a time to preserve context.

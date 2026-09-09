# Secure Development Guidelines (Isolated Worktree)

1. **Validate the isolated workspace before editing**

- Run `pwd`, `git branch --show-current`, and `git status --short`.
- The current branch must be the feature branch assigned to the task.
- If the current branch is `main`, stop and alert the user. Never implement a task directly on `main`.

2. **Preserve worktree isolation**

- Work only inside the current worktree and current feature branch.
- Do not switch to another task branch.
- Do not create, remove, or modify another worktree.
- Never push directly to `main`.

3. **Start the assigned task**

- Move only the assigned card from `tasks/` to `tasks/doing/` with `git mv`.
- Do not move or edit cards assigned to another worktree.
- Recheck `git status --short` before changing application code.

4. **Implement and verify**

- Implement every acceptance criterion in the task specification.
- Keep changes limited to the assigned task.
- Update the checklist in the card as requirements are completed.
- Run the relevant verification commands. For backend changes, run `npm test`. For frontend changes, run `npm run build` inside `client/`. Run both when applicable.
- Record the real command output; never claim that a file, commit, push, build, or test exists without verifying it.

5. **Finish on the feature branch**

- Review `git status --short` and `git diff`.
- Commit the implementation on the current feature branch.
- Push only the current feature branch.
- Do not use `gh`; report the branch name and commit hash so the pull request can be opened through GitHub.
- Report tests/builds that passed or failed and any remaining checklist items.

6. **After implementation**

- Leave pull request review, merge, task finalization, and worktree removal to the PO or project operator.
- A worktree may be removed only after its pull request is merged.

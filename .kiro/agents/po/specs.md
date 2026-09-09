# Task Specification and Worktree Process

1. **Create sequential task specifications**

- Read `tasks/sequencial.md` to identify the last task ID.
- Increment the ID once for each new task and immediately persist the last allocated ID.
- Create each card under `tasks/` using `tasks/XXX-fit-task-name.md`, where XXX is the three-digit ID.
- Accepted filename types are `fit`, `fix`, and `test`.

2. **Required card content**

Every card must include:

- User Story and objective.
- Clear acceptance criteria.
- Definition of Done.
- Technical constraints and verification commands.
- Explicit delegation to the `dev` agent.
- A unique suggested feature branch and worktree path.
- Instructions to verify the current branch and move only that card to `tasks/doing/`.

3. **Review and publish specifications**

- Show the created files with `git status --short` and `git diff`.
- Ask the user before committing or pushing.
- Never push task specifications directly to `main`; use a planning branch and a pull request.

4. **Create one isolated worktree per approved task**

After the task specifications are merged and the primary checkout is synchronized with `main`, use:

```bash
git switch main
git pull --ff-only
git worktree add .worktrees/XXX-task-name -b feat/XXX-task-name main
```

Rules:

- Each worktree must have a unique directory and a unique feature branch.
- Never reuse a branch that is already checked out in another worktree.
- Run `git worktree list` and report the directory-to-branch mapping.
- Start the `dev` agent from inside the worktree assigned to its task.
- Do not instruct a developer to switch branches inside a worktree.
- Do not install or require the GitHub CLI.

5. **Pull request and cleanup**

- Each task must be committed and pushed from its own worktree and feature branch.
- Open one pull request per branch against `main`.
- If the second pull request conflicts after the first is merged, resolve it inside the second worktree, rerun verification, and push the resolution.
- Remove a worktree only after its pull request is merged:

```bash
git worktree remove .worktrees/XXX-task-name
git worktree prune
```

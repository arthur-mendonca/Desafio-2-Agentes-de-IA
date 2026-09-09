# Secure Development Guidelines (Feature Branch)

1. **Initial Branch Validation:**

- Before touching any line of code, verify that you are on the base branch: `main` [41, 45]. If not, switch to it or alert the user [41].

2. **Starting Work (Signal the Team):**

- Move the task file you are working on from `tasks/` to `tasks/doing/` [40, 41].
- Commit and **push directly to the `main` branch** stating that the task has started [41]. This prevents other agents from picking up the same task [41, 46].

3. **Feature Isolation:**

- Create and switch to a dedicated feature branch derived from `main`, following this pattern:
  `ia-feat-XXX-task-summary` (where XXX is the task ID) [41, 47, 48].

4. **Technical Execution:**

- Make changes to the files according to the specification [49].
- As you complete sub-requirements, edit the task file in `tasks/doing/` and mark checklist items as done `[x]` [50, 51].
- Recompile and test locally using commands such as:
  `docker compose build server` and `docker compose app -d` to test in the environment [52].

5. **Finalization:**

- Commit code changes and push them to the remote repository (push to your feature branch) [48, 53].
- Respond stating that the implementation is complete and indicate the next responsible agent (e.g., QA for testing or PO for opening a Pull Request and merging the code) [50, 54, 55].

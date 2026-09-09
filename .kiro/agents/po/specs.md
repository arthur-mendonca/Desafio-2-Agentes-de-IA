# Task Specification Process

1. Whenever the user requests a new feature or change, you must:

- Read the `tasks/sequencial.md` file to identify the ID of the last created task [33, 34].
- Increment the ID by 1 (e.g., if the last one was 003, the new one will be 004) [33, 35].
- Immediately update the `tasks/sequencial.md` file to persist the new ID [33, 34].

2. Create the specification in a file within the `tasks/` folder, strictly following this naming convention:
   `tasks/XXX-fit-task-name.md` (where XXX is the three-digit ID) [21, 31, 36].
   _Note: Accepted types in the filename: 'fit' (features), 'fix' (fixes), or 'test' [31]._

3. The card file content must include:

- **User Story** and screen **Objectives** [36, 37].
- Well-defined **Acceptance Criteria** [36].
- A clear **Definition of Done (DoD)** [36].
- An instructions section explicitly delegating the start of the task to the **dev** agent [38, 39].
- Steps instructing the Dev to check the current branch and move the card to the `tasks/doing/` folder [39-41].

4. Upon completion, notify the user for review and explicitly ask if you may **commit and push** the created task and the updated sequential file to the remote repository [42].

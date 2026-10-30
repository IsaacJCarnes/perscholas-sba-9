# Task Manager

A small task-management app built with React and TypeScript. It lets you add and edit tasks, update their status, remove them, and narrow the list by status, priority, or a text search. Task data is saved in the browser's local storage.

### Components

- `components/`
  - `Dashboard/Dashboard.tsx` coordinates task state, local storage, editing, and filtering, and connects the form, filters, and list.
  - `TaskForm/TaskForm.tsx` provides the form for adding or editing a task, including its title, description, status, priority, and due date.
  - `TaskFilter/TaskFilter.tsx` provides status and priority selectors plus a text search.
  - `TaskList/TaskList.tsx` renders the task collection, while `TaskItem.tsx` displays an individual task and its edit, delete, and status controls.
- `hooks/useLocalStorage.tsx` custom hook that tracks state while adding/retrieving data from local storage.
- `types/index.ts` defines the TypeScript prop types.
- `utils/taskUtils.ts` contains the task filtering logic used by the dashboard.

## Run locally

From this directory, install dependencies and start the Vite development server:

```sh
npm install
npm run dev
```
import type { FilterProps, Task } from "../types";

export function filterTasks(tasks: Array<Task>, filter: FilterProps) {
  const priorityFilter = filter["priority"] || "";
  const searchFilter = filter["search"]?.toLowerCase() || "";
  return tasks.filter(
    (task) =>
      (task.title.toLowerCase().includes(searchFilter) ||
        task.description.toLowerCase().includes(searchFilter)) &&
      task.priority.includes(priorityFilter) &&
      task.status.includes(filter["status"] || ""),
  );
}

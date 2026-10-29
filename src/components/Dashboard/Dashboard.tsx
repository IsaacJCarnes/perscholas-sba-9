import { useState } from "react";

import type { Task } from "../../types";

import TaskFilter from "../TaskFilter/TaskFilter.tsx";
import TaskList from "../TaskList/TaskList";

export default function Dashboard() {
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const [filter, setFilter] = useState<{ priority?: string; status?: string }>(
    {},
  );

  const onStatusChange = (id: string, newStatus: string) => {
    setTasks(
      tasks.map((task) =>
        task.id == id ? { ...task, status: newStatus } : task,
      ) as [Task],
    );
  }

  const onDelete = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }


  return (
    <>
      <TaskFilter onFilterChange={setFilter} />
      <TaskList
        tasks={tasks.filter(
          (task) =>
            task.priority.includes(filter["priority"] || "") &&
            task.status.includes(filter["status"] || ""),
        )}
        onStatusChange={onStatusChange}
        onDelete={onDelete}
      />
    </>
  );
}

import { useState } from "react";

import type { Task } from "../../types";

import TaskForm from "../TaskForm/TaskForm.tsx";
import TaskFilter from "../TaskFilter/TaskFilter.tsx";
import TaskList from "../TaskList/TaskList";

export default function Dashboard() {
  const [nextID, setNextID] = useState(0);
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

  const onAddTask = (task: Task) => {
    setNextID((prevID) => prevID + 1);
    setTasks([...tasks, task]);
  }

  return (
    <>
      <TaskForm onAddTask={onAddTask} nextID={nextID} />
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

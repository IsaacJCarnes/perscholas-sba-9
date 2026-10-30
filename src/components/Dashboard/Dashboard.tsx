import { useState } from "react";

import type { FilterProps, Task } from "../../types";
import useLocalStorage from "../../hooks/useLocalStorage.tsx";
import { filterTasks } from "../../utils/taskUtils.ts";

import TaskForm from "../TaskForm/TaskForm.tsx";
import TaskFilter from "../TaskFilter/TaskFilter.tsx";
import TaskList from "../TaskList/TaskList";

export default function Dashboard() {
  const { storageData, setStorageItem } = useLocalStorage();
  const tasks: Array<Task> = storageData.tasks ? storageData.tasks : [];

  const [nextID, setNextID] = useState(0);
  const [filter, setFilter] = useState<FilterProps>({});

  const onStatusChange = (id: string, newStatus: string) => {
    const newTasks = tasks.map((task) =>
      task.id == id ? { ...task, status: newStatus } : task,
    ) as [Task];
    setStorageItem("tasks", newTasks);
  };

  const onDelete = (id: string) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setStorageItem("tasks", newTasks);
  };

  const onAddTask = (task: Task) => {
    setNextID((prevID) => {
      task["id"] = prevID.toString();
      return prevID + 1;
    });
    const newTasks = [...tasks, task];
    setStorageItem("tasks", newTasks);
  };

  return (
    <>
      <TaskForm onAddTask={onAddTask} nextID={nextID} />
      <TaskFilter onFilterChange={setFilter} />
      <TaskList
        tasks={filterTasks(tasks, filter)}
        onStatusChange={onStatusChange}
        onDelete={onDelete}
      />
    </>
  );
}

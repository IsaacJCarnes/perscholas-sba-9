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

  const [editingID, setEditingID] = useState(-1);

  const [nextID, setNextID] = useState(0);
  const [filter, setFilter] = useState<FilterProps>({});

  const onStatusChange = (id: string, newStatus: string) => {
    const newTasks = tasks.map((task) =>
      task.id == id ? { ...task, status: newStatus } : task,
    ) as [Task];
    setStorageItem("tasks", newTasks);
  };

  const onDeleteSelect = (id: string) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setStorageItem("tasks", newTasks);
  };

  const onEditSelect = (taskIndex: number) => {
    setEditingID(taskIndex);
  };

  const onAddTask = (task: Task) => {
    setNextID((prevID) => {
      task["id"] = prevID.toString();
      return prevID + 1;
    });
    const newTasks = [...tasks, task];
    setStorageItem("tasks", newTasks);
  };

  const onEditTask = (task: Task) => {
    const newTasks = tasks.map((t) => {
      return t.id === task.id ? { ...task } : { ...t };
    });
    setEditingID(-1);
    setStorageItem("tasks", newTasks);
  };

  return (
    <>
      <TaskForm
        onSubmitTask={editingID > -1 ? onEditTask : onAddTask}
        initialState={editingID > -1 ? tasks[editingID] : undefined}
        isEditing={editingID > -1}
      />
      <div id="TaskToolbar">
        <div id="StatSection">
          <label className="styledLabel">
            {tasks.length} {tasks.length == 1 ? "Task" : "Tasks"}
          </label>
        </div>
        <TaskFilter onFilterChange={setFilter} />
      </div>
      <TaskList
        tasks={filterTasks(tasks, filter)}
        onStatusChange={onStatusChange}
        onDelete={onDeleteSelect}
        onEdit={onEditSelect}
      />
    </>
  );
}

import { useState } from "react";
import type { Task, TaskFormProps } from "../../types";

const resetTask: Task = {
  id: "",
  title: "",
  description: "",
  status: "pending",
  priority: "low",
  dueDate: "",
};

export default function TaskForm({ nextID, onAddTask }: TaskFormProps) {
  const [isValid, setIsValid] = useState(true);
  const [task, setTask] = useState<Task>({ ...resetTask });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    event.preventDefault();
    const { name, value } = event.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const submitTask = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValid) return;
    onAddTask(task);
    setTask({ ...resetTask });
  };
  return (
    <form onSubmit={submitTask} id="TaskForm">
      <div className="formField">
        <label htmlFor="title">Title</label>
        <input
          name="title"
          value={task.title}
          className="styledInput"
          onChange={handleChange}
        />
      </div>
      <div className="formField">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          value={task.description}
          className="styledInput"
          onChange={handleChange}
        />
      </div>
      <div className="formFields">
        <div className="formField">
          <label htmlFor="status">Status</label>
          <select
            name="status"
            value={task.status}
            className="styledInput"
            onChange={handleChange}
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="formField">
          <label htmlFor="priority">Priority</label>
          <select
            name="priority"
            value={task.priority}
            className="styledInput"
            onChange={handleChange}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="formField">
          <label htmlFor="dueDate">Due Date</label>
          <input
            className="styledInput"
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
          />
        </div>
      </div>
      <button type="submit" className="styledInput">
        Add Task
      </button>
    </form>
  );
}

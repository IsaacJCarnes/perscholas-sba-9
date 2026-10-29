import "./TaskList.css";
import type { TaskListProps } from "../../types";
import TaskItem from "./TaskItem";
export default function TaskList(props: TaskListProps) {
  return (
    <ul id="TaskList">
      {props.tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onStatusChange={props.onStatusChange}
          onDelete={props.onDelete}
        />
      ))}
    </ul>
  );
}

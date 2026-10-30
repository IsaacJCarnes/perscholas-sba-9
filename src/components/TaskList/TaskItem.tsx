import type { TaskStatus, TaskItemProps } from "../../types";

export default function TaskItem(props: TaskItemProps) {
  return (
    <li data-id={props.task.id} className="taskItem">
      <h3>{props.task.title}</h3>
      <p className="description">{props.task.description}</p>
      <div className="taskStats">
        <p className={"priority " + props.task.priority}>
          Priority: {props.task.priority}
        </p>
        <p className="dueDate">Due: {props.task.dueDate}</p>
      </div>
      <div className="taskToolbar">
        <div>
          <button
            className="editButton"
            onClick={() => props.onEdit(props.index)}
          >
            Edit
          </button>
          <button
            className="deleteButton"
            onClick={() => props.onDelete(props.task.id)}
          >
            Delete
          </button>
        </div>
        <div>
          <select
            defaultValue={props.task.status}
            onChange={(e) =>
              props.onStatusChange(props.task.id, e.target.value as TaskStatus)
            }
            className={props.task.status}
          >
            <option value={"pending"}>Pending</option>
            <option value={"in-progress"}>In Progress</option>
            <option value={"completed"}>Completed</option>
          </select>
        </div>
      </div>
    </li>
  );
}

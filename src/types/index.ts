export type TaskStatus = "pending" | "in-progress" | "completed";
export type TaskPriority = "low" | "medium" | "high";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
}

export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
  onEdit: (taskIndex: number) => void;
}

export interface TaskItemProps {
  index: number;
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
  onEdit: (taskIndex: number) => void;
}

export interface FilterProps {
  priority?: string;
  status?: string;
  search?: string;
}

export interface TaskFilterProps {
  onFilterChange: (filters: FilterProps) => void;
}

export interface TaskFormProps {
  onSubmitTask: (task: Task) => void;
  initialState?: Task;
  isEditing?: boolean;
}

import { useEffect, useState, type ChangeEvent } from "react";
import type { TaskFilterProps } from "../../types";
export default function TaskFilter(props: TaskFilterProps) {
  const [filter, setFilter] = useState({});
  useEffect(() => {
    props.onFilterChange(filter);
  }, [filter]);

  const formChangeEvent = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    event.preventDefault();
    const { name, value } = event.target as HTMLSelectElement;
    setFilter({ ...filter, [name]: value });
  };

  return (
    <form id="FilterForm">
      <label>Status</label>
      <select name="status" className="styledInput" onChange={formChangeEvent}>
        <option value="">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <label>Priority</label>
      <select
        name="priority"
        className="styledInput"
        onChange={formChangeEvent}
      >
        <option value="">All Priorities</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <label htmlFor="search">Search</label>
      <input className="styledInput" name="search" onChange={formChangeEvent} />
    </form>
  );
}

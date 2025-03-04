import DeleteButton from "./deleteButton";
const Task = ({ task, onToggle, onDeleteTask }) => {
  return (
    <li
      onClick={() => onToggle(task.id)}
      style={{ textDecoration: task.completed ? "line-through" : "none" }}
    >
      <span className={`toggle ${task.priority}`}>{task.priority}</span>{" "}
      {task.title} <DeleteButton task={task} onDeleteTask={onDeleteTask} />
    </li>
  );
};

export default Task;

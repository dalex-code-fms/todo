import Task from "./Task";

const TodoList = ({ tasks, onToggle, onDeleteTask }) => {
  return (
    <div>
      <ol>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ol>
    </div>
  );
};

export default TodoList;

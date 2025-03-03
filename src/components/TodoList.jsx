import Task from "./Task";

const TodoList = ({ tasks, onToggle , onDeleteTask}) => {
    return (
        <div>
            <ul>
                { tasks.map( task => (
                    <Task key={task.id} task={task} onToggle={onToggle} onDeleteTask={onDeleteTask}/>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;
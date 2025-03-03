import Task from "./Task";

const TodoList = ({ tasks, onToggle }) => {
    return (
        <div>
            <ul>
                { tasks.map( task => (
                    <Task key={task.id} task={task} onToggle={onToggle}/>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;
const DeleteButton = ({task, onDeleteTask}) => {
return (
    <button onClick={()=> onDeleteTask(task.id)}>delete</button>
)
}

export default DeleteButton;
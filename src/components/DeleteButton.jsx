const DeleteButton = ({task, onDeleteTask}) => {

    const handleClick = event => {
        event.stopPropagation()
        onDeleteTask(task.id)
    }

return (
    <button onClick={handleClick}>delete</button>
)
}

export default DeleteButton;
const DeleteButton = ({ task, onDeleteTask }) => {
  const handleClick = (event) => {
    event.stopPropagation();
    onDeleteTask(task.id);
  };

  return (
    <button className="toggle btn-delete" onClick={handleClick}>
      DELETE
    </button>
  );
};

export default DeleteButton;

import React, {useState} from "react";

const AddTodoForm = ({ onAddTask }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === "") return;

        onAddTask(title);
        setTitle("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={title} 
            onChange={e=> setTitle(e.target.value)} 
            placeholder="Ajouter une tâche"/>
            <button type="submit">Ajouter</button>
        </form>
    )
}

export default AddTodoForm;
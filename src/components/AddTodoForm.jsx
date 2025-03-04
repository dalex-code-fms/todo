import React, { useState } from "react";

const AddTodoForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "" || priority === "") return;

    onAddTask(title, priority);
    setTitle("");
    setPriority("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Ajouter une tâche"
      />

      <select
        name="priority"
        id="priority-select"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="">--Priorité--</option>
        <option value="BASSE">basse</option>
        <option value="MOYENNE">moyenne</option>
        <option value="HAUTE">haute</option>
      </select>
      <button className="toggle" type="submit">
        Ajouter
      </button>
    </form>
  );
};

export default AddTodoForm;

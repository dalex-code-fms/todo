import TodoList from "./components/TodoList";
import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import SortButtons from "./components/sortButtons";
import { ThemeToggleButton } from "./components/ThemeToggleButton";

export const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tasks")
      .then((response) => setTasks(response.data))
      .catch((error) =>
        console.error("Erreur de récupération des tâches :", error)
      );
  }, []);

  const handleAddTask = (title, priority) => {
    const newTask = { title, completed: false, priority };
    axios
      .post("http://localhost:5000/tasks", newTask)
      .then((response) => setTasks([...tasks, response.data]))
      .catch((error) =>
        console.error("Erreur lors de l'ajout d'une tâche : ", error)
      );
  };

  const handleToggleTask = (id) => {
    const task = tasks.find((task) => task.id === id);
    const updatedTask = { ...task, completed: !task.completed };

    axios
      .put(`http://localhost:5000/tasks/${id}`, updatedTask)
      .then(() => {
        setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
      })
      .catch((error) =>
        console.error("Erreur lors de la mise à jour de la tâche : ", error)
      );
  };

  const completedTasksCount = tasks.filter(
    (task) => task.completed === true
  ).length;

  const handleDeleteTask = (id) => {
    axios
      .delete(`http://localhost:5000/tasks/${id}`)
      .then(() => setTasks(tasks.filter((task) => task.id !== id)))
      .catch((error) =>
        console.error("Erreur lors de la suppression de la tâche : ", error)
      );
  };

  const handleSelectedPriority = (selectedPriority) => {
    if (selectedPriority === "TOUT") {
      axios
        .get("http://localhost:5000/tasks")
        .then((response) => setTasks(response.data))
        .catch((error) =>
          console.error("Erreur de récupération des tâches :", error)
        );
    } else {
      axios
        .get("http://localhost:5000/tasks")
        .then((response) =>
          setTasks(
            response.data.filter((task) => task.priority === selectedPriority)
          )
        )
        .catch((error) =>
          console.error("Erreur de récupération des tâches :", error)
        );
    }
  };

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <ThemeToggleButton
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
      />
      <h1>ToDo List</h1>
      <p>
        Tâches à accomplir : {completedTasksCount}/{tasks.length}
      </p>
      <div className="card">
        <AddTodoForm onAddTask={handleAddTask} />
        <SortButtons onGetSelectePriority={handleSelectedPriority} />
        <TodoList
          tasks={tasks}
          onToggle={handleToggleTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
};

import TodoList from './components/TodoList';
import axios from 'axios';
import './App.css'
import { useEffect, useState } from 'react';
import AddTodoForm from './components/AddTodoForm';

function App() {

  const [tasks, setTasks] = useState ([])

  useEffect(()=> {
    axios
      .get("http://localhost:5000/tasks")
      .then(response => setTasks(response.data))
      .catch(error => console.error("Erreur de récupération des tâches :", error))
  }, [])

const handleAddTask = title => {
  const newTask = {title, completed : false};
  axios
    .post("http://localhost:5000/tasks", newTask)
    .then(response => setTasks([...tasks, response.data]))
    .catch(error=> console.error("Erreur lors de l'ajout d'une tâche : ", error))
}

const handleToggleTask = id => {
  const task = tasks.find(task => task.id === id)
  const updatedTask = {...task, completed: !task.completed}
  axios
    .put(`http://localhost:5000/tasks/${id}`, updatedTask)
    .then(()=> setTasks(tasks.map(task=> task.id === id ? updatedTask : task)))
    .catch(error => console.error("Erreur lors de la mise à jour de la tâche : ", error))
}


  return (
      <div>
        <h1>ToDo List</h1>
        <AddTodoForm onAddTask={handleAddTask}/>
        <TodoList tasks={ tasks } onToggle={handleToggleTask}/>
      </div>
  )
}

export default App

import { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Tasks from './Components/Tasks';
import AddTask from "./Components/AddTask";


function App() {
  var [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTask] = useState([])

  useEffect(() => {

    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTask(tasksFromServer)
    }


    getTasks()
  }, [])

  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')

    const data = await res.json()
    return data;
  }

  //Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)

    const data = await res.json()
    return data;
  }



  //Add Task
  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTask([...tasks, data])

    // const id = Math.floor(Math.random() * 10000) + 1
    // console.log(id)
    // const newTask = { id, ...task }
    // setTask([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    })
    setTask(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()
    setTask(tasks.map((task) =>
      task.id === id ? { ...task, reminder:
         data.reminder } : task
    ))
  }
   
  // Show Add Task
  const showTask = () => {
    setShowAddTask(!showAddTask)
  }

  return (  
    <div className="container">
      <Header showTask={showTask} showAdd={showAddTask} />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : "No task to show"}
      {showAddTask && <AddTask onAdd={addTask} />}
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react'
import TasksList from './components/TasksList'
import Timer from './components/Timer'
import Input from "./components/Input.jsx";

const TaskManager = () => {
  const [tasks, setTasks] = useState([])

  const [count, setCount] = useState(0)

  const [query, setQuery] = useState('')

  //Добавляем запрос в состояние
  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  const handleAddTask = () => {
    const newTask = {
      id: Date.now() + Math.random(),
      title: query,
    }

    setTasks([...tasks, newTask])
  }

  // Добавляем задачи в localStorage
  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(tasks))
  },[tasks])

  useEffect(() => {
    localStorage.getItem(tasks)
  },[])

  return (
    <div>
      <Timer />
      <Input
        value={query}
        onChange={handleInputChange}
        onAddTask={handleAddTask}
      />
      <TasksList
        tasks={tasks}
      />
    </div>
  )
}

export default TaskManager
import { useState, useEffect } from 'react'
import TasksList from './components/TasksList'
import Timer from './components/Timer'
import Input from "./components/Input.jsx";

const TaskManager = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('task')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

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
    setQuery('')
  }

  //Удаляем задачу
  const handleDeleteTask = (id) => {
    const newTasks = tasks.filter((task) => {
      return task.id !== id
    })

    setTasks(newTasks)
  }

  // Добавляем задачи в localStorage
  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(tasks))
  },[tasks])

  //Изменение title документа
  useEffect(() => {
    document.title = `Задач: ${tasks.length}`
  }, [tasks]);

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
        taskDelete={handleDeleteTask}
      />
    </div>
  )
}

export default TaskManager
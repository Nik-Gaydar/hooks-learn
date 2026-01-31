import { useState, useEffect, useCallback, useRef } from 'react'
import TasksList from './components/TasksList'
import Timer from './components/Timer'
import Input from "./components/Input.jsx";
import { TasksContext } from "./context/TasksContext";

const TaskManager = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('task')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  const [query, setQuery] = useState('')

  const inputRef = useRef(null)

  //Добавляем запрос в состояние
  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  //Добавляем задачу
  const handleAddTask = () => {
    const newTask = {
      id: Date.now() + Math.random(),
      title: query,
    }

    inputRef.current.focus()
    setTasks([...tasks, newTask])
    setQuery('')
  }

  //Удаляем задачу
  const handleDeleteTask = useCallback((id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }, [])

  // Добавляем задачи в localStorage
  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(tasks))
  },[tasks])

  //Изменение title документа
  useEffect(() => {
    document.title = `Задач: ${tasks.length}`
  }, [tasks]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        handleAddTask,
        handleDeleteTask,
        handleInputChange,
        query,
        inputRef,
      }}
    >
      <div>
        <Timer />
        <Input
          value={query}
          onChange={handleInputChange}
          onAddTask={handleAddTask}
          ref={inputRef}
        />
        <TasksList
          tasks={tasks}
        />
      </div>
    </TasksContext.Provider>
  )
}

export default TaskManager
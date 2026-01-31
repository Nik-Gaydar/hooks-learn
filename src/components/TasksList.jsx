import { memo, useContext } from 'react'
import { TasksContext } from "../context/TasksContext";
import '../styles/taskList.css'
import Task from './Task'

const TasksList = () => {
  const {tasks} = useContext(TasksContext)

  return (
    <ul className="tasksList">
      {tasks.map((task) => (
        <Task
          key={task.id}
          { ...task}
        />
      ))}
    </ul>
  )
}

export default memo(TasksList)
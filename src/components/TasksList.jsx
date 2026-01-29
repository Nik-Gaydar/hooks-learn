import { memo } from 'react'
import '../styles/taskList.css'
import Task from './Task'

const TasksList = (props) => {
  console.log('TasksList')

  const {
    tasks,
    taskDelete,
  } = props

  return (
    <ul className="tasksList">
      {tasks.map((task) => (
        <Task
          key={task.id}
          taskDelete={taskDelete}
          { ...task}
        />
      ))}
    </ul>
  )
}

export default memo(TasksList)
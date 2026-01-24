import '../styles/taskList.css'
import Task from './Task'

const TasksList = ({tasks}) => {
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

export default TasksList
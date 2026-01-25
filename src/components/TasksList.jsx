import '../styles/taskList.css'
import Task from './Task'

const TasksList = ({tasks, taskDelete}) => {
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

export default TasksList
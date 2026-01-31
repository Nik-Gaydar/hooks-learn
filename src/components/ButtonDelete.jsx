import { useContext } from 'react'
import { TasksContext } from '../context/TasksContext'

const ButtonDelete = ({id}) => {
  const {handleDeleteTask} = useContext(TasksContext)

  return (
    <button
      className="button"
      onClick={() => handleDeleteTask(id)}
    >
      удалить
    </button>
  )
}

export default ButtonDelete
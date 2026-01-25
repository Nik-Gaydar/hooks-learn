import ButtonDelete from './ButtonDelete'

const Task = ({title, taskDelete, id}) => {

  return (
    <div>
      <span>{title}</span>
      <ButtonDelete
        taskDelete={taskDelete}
        id={id}
      />
    </div>
  )
}

export default Task
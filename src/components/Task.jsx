import ButtonDelete from './ButtonDelete'

const Task = ({title, taskDelete, id}) => {
  console.log('Task')

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
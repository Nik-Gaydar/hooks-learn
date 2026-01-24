import ButtonDelete from './ButtonDelete'

const Task = ({title}) => {

  return (
    <div>
      <span>{title}</span>
      <ButtonDelete />
    </div>
  )
}

export default Task
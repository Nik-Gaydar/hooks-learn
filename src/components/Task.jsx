import ButtonDelete from './ButtonDelete'

const Task = ({title, id}) => {
    return (
    <div>
      <span>{title}</span>
      <ButtonDelete
        id={id}
      />
    </div>
  )
}

export default Task
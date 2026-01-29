const ButtonDelete = ({taskDelete, id}) => {
  console.log('ButtonDelete')

  return (
    <button
      className="button"
      onClick={() => taskDelete(id)}
    >
      удалить
    </button>
  )
}

export default ButtonDelete
const ButtonDelete = ({taskDelete, id}) => {
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
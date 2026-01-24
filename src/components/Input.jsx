const Input = ({value, onChange, onAddTask}) => {

  return (
    <div className="addTask__form">
      <input
        type="text"
        className="addTask__input"
        onChange={onChange}
        value={value}
      />
      <button
        className="button"
        onClick={onAddTask}
      >
        Добавить
      </button>
    </div>
  )
}

export default Input
const Input = ({value, onChange, onAddTask, ref}) => {
  console.log("Input")
  return (
    <div className="addTask__form">
      <input
        type="text"
        className="addTask__input"
        onChange={onChange}
        value={value}
        ref={ref}
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
import { useContext} from "react";
import {TasksContext} from "../context/TasksContext.js";

const Input = ({value}) => {
  const {
    handleInputChange,
    inputRef,
    handleAddTask,
  } = useContext(TasksContext)
  return (
    <div className="addTask__form">
      <input
        type="text"
        className="addTask__input"
        onChange={handleInputChange}
        value={value}
        ref={inputRef}
      />
      <button
        className="button"
        onClick={handleAddTask}
      >
        Добавить
      </button>
    </div>
  )
}

export default Input
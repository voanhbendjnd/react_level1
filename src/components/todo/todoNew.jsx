import { useState } from 'react';
import './todo.css'
const TodoNew = (props) => {
  const { addNewTodo } = props;
  const handleClick = () => {
    addNewTodo(valueInput);
    setValueInput("")
  }
  const handleOnChange = (event) => {
    setValueInput(event)
  }
  // const valueInput = "Toi La Ben Ben";
  const[valueInput, setValueInput] = useState()
  return (
         <div className="search">
      <input type="text"
        style={{ color: "black" }}
        onChange={(event) => handleOnChange(event.target.value)}
        value={valueInput}
      />
      <button
        style={{ cursor: "pointer" }}
        onClick={handleClick}>
        Add
      </button>
      <div>
        My text is = {valueInput}
      </div>
    </div>
    )
}

export default TodoNew;
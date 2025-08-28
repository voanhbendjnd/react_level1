import { useState } from 'react'
import './todo.css'

const TodoSearch = () => {
    const [inputText, setText] = useState();
    const handleOnChange = (text) => {
        setText(text);
    }
    const handleOnClick = () => {
        alert(inputText)
    }
    return (
        <div className='todoSearch'>
            <input
                type="text"
                onChange={(hangni)=>{handleOnChange(hangni.target.value)} }
            />
            <button
            onClick={handleOnClick}
            >Add Data</button>
            <div>
                My text is ={inputText}
            </div>
        </div>
    )
}

export default TodoSearch
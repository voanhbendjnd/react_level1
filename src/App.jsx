import './components/todo/todo.css'
import TodoData from './components/todo/todoData'
import TodoNew from './components/todo/todoNew'
import reactLogo from './assets/react.svg';
import { useState } from 'react';
import TodoSearch from './components/todo/todoSearch';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';
const App = () => {
  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }
    setTodoList([...todoList, newTodo]) // add the last location
  }
  const [todoList, setTodoList] = useState(
    [
    ]
  )
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const deleteTodo = (id) => {
    const newTodo = todoList.filter(it => it.id !== id)
    setTodoList(newTodo)
  }
  const age = 20;
  const data = {
    name : "Hằng Ni cute",
    address: "Can Tho",
    country: "Viet Nam"
  }
  return (
    <>
      <Header/>
      <div className = "todo-container">
      <div className="title">
        <h1>Todo List</h1>
      </div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoSearch />
      {todoList.length > 0 ? <TodoData
        deleteTodo ={deleteTodo}
        todoList={todoList}
      />
        :
        <div className="picture">
        <img src={reactLogo} className='logo'/>
      </div>}
      {/* <TodoSearch />
      {todoList.length > 0 &&<TodoData
        age={age}
        data={data}
        todoList={todoList}
      />}
      {todoList.length ===0 &&  <div className="picture">
        <img src={reactLogo} className='logo'/>
      </div>} */}
      </div>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App

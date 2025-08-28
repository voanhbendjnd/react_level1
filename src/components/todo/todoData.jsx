import './todo.css'
const TodoData = (props) => {
  console.log(props)
  const handleClick = (id) => {
   deleteTodo(id)
  }
  const { deleteTodo,todoList} = props;
    return (
      <div className='text'>
        {todoList.map((item, index) => {
          return (
            <div className={`todo-item`} style={{display:"flex", justifyContent:"space-between", marginTop:"10px", marginBottom:"10px"}}>
              <div>
              {item.name}

              </div>
              <div>
                <button onClick={()=>handleClick(item.id)}
                  style={{ marginRight: "10px", borderRadius: "10px" }}>Delete</button>

              </div>
            </div>
          )
        })}
        {/* <div>My name is {data.name}</div>
        <div>Learning React</div>
        <div>Watching Youtube</div> */}
      </div>
    )
}

export default TodoData;
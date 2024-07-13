import { todosContext } from "../datas/Todos";
import Navbar from "./navbar/Navbar";
import "./Context.css"

import ContextB from "./ContextB";
import Todos from "../datas/Todos";

export default function ContextA() {
  document.title="Context"
  const {todos, setTodos} =Todos()
  // console.log('todos', todos);

 
  return (
  <todosContext.Provider value={{ todos, setTodos }}>
    <Navbar/>
    <div className="ContextA">
      <div style={{boxShadow:"0 0 20px 0 black"}}>
        <h1>ContextA</h1>
        <div className="todos">{todos.map((todo, index, arrayReference)=>
          <p key={todo.id}>{todo.id}: {todo.title}</p>
        )}</div>
      </div>

      <ContextB/>
    </div>
  </todosContext.Provider>
  )
}
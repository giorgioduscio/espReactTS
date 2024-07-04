import { todosContext } from "../datas/Todos";
import Navbar from "./Navbar";

import ContextB from "./ContextB";
import Todos from "../datas/Todos";

export default function ContextA() {
  document.title="Context"
  const {todos, setTodos} =Todos()
  // console.log('todos', todos);

 
  return (
  <todosContext.Provider value={{ todos, setTodos }}>
    <Navbar/>
    <div className="ContextA" style={{display:"flex"}}>
      <div style={{boxShadow:"0 0 20px 0 black"}}>
        <h1>ContextA</h1>
        {todos.map((todo, index, arrayReference)=>
          <p key={todo.id}>{todo.id}: {todo.title}</p>
        )}
      </div>

      <ContextB/>
    </div>
  </todosContext.Provider>
  )
}
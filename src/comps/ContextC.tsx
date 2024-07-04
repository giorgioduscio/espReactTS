import { useContext } from "react";
import { todosContext } from "../datas/Todos";

export default function ContextC() {
  const todos =useContext(todosContext)

  return (
  <div style={{boxShadow:"0 0 20px 0 black"}}>
    <h3>ContextC</h3>
    {todos.map(todo=>{
      return <p key={todo.id}>{todo.title}</p>
    })}
  </div>
  )
}

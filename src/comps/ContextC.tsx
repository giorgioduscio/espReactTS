import { useContext } from "react";
import { todosContext } from "../datas/Todos";

export default function ContextC() {
  const {todos, setTodos} =useContext(todosContext)

  function add() {
    setTodos([...todos, {
      completed: false,
      id: todos.length+1,
      title: "Nuovo",
      userId: 1,
    }])
  }

  return (
  <div style={{boxShadow:"0 0 20px 0 black"}}>
    <h1>ContextC</h1>
    <button onClick={add}>Aggiungi</button>
    <div className="todos">{todos.map((todo:object)=>
      <p key={todo.id}>{todo.id}: {todo.title}</p>
    )}</div>
  </div>
  )
}

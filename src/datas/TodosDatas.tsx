import { createContext, useEffect, useState } from "react"

export const todosContext =createContext({})

export default function TodosDatas() {
  const [todos, setTodos] =useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(json => setTodos(json))
  }, [])
  // console.log("json", todos);

  return {todos, setTodos}
}

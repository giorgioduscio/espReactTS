import { createContext, useState } from "react"
import ContextA from "../comps/ContextA"

export const peopleContext =createContext({})

export default function UsersContext() {
  const [users, setUsers] =useState([
    {id:1, name:"Aldo"},
    {id:2, name:"Beatrice"},
    {id:3, name:"Carlo"},
  ])
  return (
    <peopleContext.Provider value={users}>
      <ContextA/>
    </peopleContext.Provider>
  )
}

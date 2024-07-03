import { createContext, useEffect, useState } from "react"
import "./EffectContext.css"
import Navbar from "./Navbar"
import { Link, Outlet } from "react-router-dom"

export const UsersContext =createContext({})

export default function EffectContext() { 
  document.title="EffectContext"
  const [users, setUsers] =useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => setUsers(json))
  }, [])
  console.log("json", users);
  
 
  return (<UsersContext.Provider value={users}>
    <Navbar/>

    <div className="EffectContext">
      <details open className="usersMenu">
        <summary>Utenti</summary>
        <ol>{users.map(user=>{
          return <li key={user.id}>
            <button className="delete">❌</button>
            <Link to={`/effect/${user.id}`}>{user.name}</Link>
          </li>
        })}</ol>
      </details>

      <Outlet />
    </div>
  </UsersContext.Provider>)
}

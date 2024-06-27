import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import { Link, Outlet } from "react-router-dom"
import Rchildren from "./Rchildren"

export default function Effect() {
  document.title="Effect"
  const [users, setUsers] =useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => setUsers(json))
  }, [])
 
  return (<>
    <Navbar/>

    <div className="Effect">
      <details open className="usersMenu">
        <summary>Utenti</summary>
        <ol>{users.map(user=>{
            return <li key={user.id}>
                <Link to={"/effect/"+user.id}>{user.name}</Link>
            </li>
        })}</ol>
      </details>

      <Rchildren users={users} />
    </div>
  </>)
}

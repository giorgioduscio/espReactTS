import "./UsersComponent.css"
import Navbar from "../navbar/Navbar"
import { Link, Outlet } from "react-router-dom"
import UsersDatas, { UsersContext } from "../../datas/UsersDatas"


export default function UsersComponent() { 
  document.title="UsersComponent"
  const {users, setUsers} =UsersDatas()

  function deleteUser(id:number) {
    const result :object[] =[]
    for (let user of users) {
      if (user.id!=id) result.push(user)
    }
    setUsers(result)
  }
  
 
  return (<UsersContext.Provider value={{users, setUsers}}>
    <Navbar/>

    <article className="UsersComponent">
      <details open className="usersMenu">
        <summary>Utenti</summary>
        <ol>
          <Link to={'/effect/input'}>Aggiungi</Link>
        {users.map((user:any)=>
          <li key={user.id}>
            <button onClick={()=> deleteUser(user.id)}>❌</button>
            <Link to={`/effect/${user.id}`}>{user.name}</Link>
          </li>
        )}</ol>
      </details>

      <Outlet />
    </article>
  </UsersContext.Provider>)
}

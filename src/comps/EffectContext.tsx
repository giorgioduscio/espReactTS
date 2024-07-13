import "./EffectContext.css"
import Navbar from "./Navbar"
import { Link, Outlet } from "react-router-dom"
import Users, { UsersContext } from "../datas/Users"


export default function EffectContext() { 
  document.title="EffectContext"
  const {users, setUsers} =Users()

  function deleteUser(id:number) {
    const result :object[] =[]
    for (let user of users) {
      if (user.id!=id) result.push(user)
    }
    setUsers(result)
  }
  
 
  return (<UsersContext.Provider value={{users, setUsers}}>
    <Navbar/>

    <div className="EffectContext">
      <details open className="usersMenu">
        <summary>Utenti</summary>
        <ol>
          <Link to={'/effect/input'}>Aggiungi</Link>
        {users.map((user:object)=>
          <li key={user.id}>
            <button onClick={()=> deleteUser(user.id)}>❌</button>
            <Link to={`/effect/${user.id}`}>{user.name}</Link>
          </li>
        )}</ol>
      </details>

      <Outlet />
    </div>
  </UsersContext.Provider>)
}

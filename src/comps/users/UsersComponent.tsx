import css from "./UsersComponent.module.css"
import Navbar from "../navbar/Navbar"
import { Link, Outlet } from "react-router-dom"
import UsersDatas, { UsersContext } from "../../datas/UsersDatas"


export default function UsersComponent() { 
  document.title="UsersComponent"
  const {users, setUsers} =UsersDatas()

  // fix
  function deleteUser(id:number) {
    const result :object[] =[]
    for (let user of users) {
      if (user.id!=id) result.push(user)
    }
    setUsers(result)
  }
  
 
  return (<UsersContext.Provider value={{users, setUsers}}>
    <Navbar/>

    <article className={css.UsersComponent}>
      <details open className={css.usersMenu}>
        <summary>Utenti</summary>
        
        <ol>
          <Link to={'/users/input'}>Aggiungi</Link>
          
          {users.map((user:any)=>
            <li key={user.id}>
              <button onClick={()=> deleteUser(user.id)}>❌</button>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          )}
        </ol>
      </details>

      <Outlet />
    </article>
  </UsersContext.Provider>)
}

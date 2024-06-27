import { useContext } from "react";
import { peopleContext } from "../datas/UsersContext";

export default function ContextC() {
  const users =useContext(peopleContext)

  return (
  <div style={{border:"1px solid"}}>
    <h3>ContextC</h3>
    {users.map(user=>{
      return <p key={user.id}>{user.name}</p>
    })}
  </div>
  )
}

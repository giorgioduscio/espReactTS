import { useContext } from "react";
import { peopleContext } from "../datas/UsersContext";

export default function ContextC() {
  const users =useContext(peopleContext)

  return (
  <div style={{boxShadow:"0 0 20px 0 black"}}>
    <h3>ContextC</h3>
    {users.map(user=>{
      return <p key={user.id}>{user.name}</p>
    })}
  </div>
  )
}

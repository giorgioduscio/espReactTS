import { peopleContext } from "../datas/UsersContext";
import Navbar from "./Navbar";

import { useState } from "react";
import ContextB from "./ContextB";


export default function ContextA() {
  document.title="Context"
  const [users, setUsers] =useState([
    {id:1, name:"Aldo"},
    {id:2, name:"Beatrice"},
    {id:3, name:"Carlo"},
  ])
  
  return (
  <peopleContext.Provider value={users}>
    <Navbar/>
    <div className="flexbox" style={{display:"flex"}}>
      <div style={{border:"1px solid"}}>
        <h1>ContextA</h1>
        {users.map(user=>{
          return <p key={user.id}>{user.name}</p>
        })}
      </div>

      <ContextB/>
    </div>
  </peopleContext.Provider>
  )
}

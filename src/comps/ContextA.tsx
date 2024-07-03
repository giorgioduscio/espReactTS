import { animalsContext } from "../datas/Animals";
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
  <animalsContext.Provider value={users}>
    <Navbar/>
    <div>
      <div style={{boxShadow:"0 0 20px 0 black"}}>
        <h1>ContextA</h1>
        {users.map((user, index, arrayReference)=>{
          return <p key={user.id}>{user.name}</p>
        })}
      </div>

      <ContextB/>
    </div>
  </animalsContext.Provider>
  )
}
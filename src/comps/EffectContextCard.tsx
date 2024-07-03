import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { UsersContext } from "./EffectContext";

export default function EffectContextCard() {
  const 
    urlid :number =Number(useParams().urlid),
    users =useContext(UsersContext),
    [user, setUser] =useState({}),
    keys =Object.keys(user)
    
  useEffect(()=>{ 
    users.map((user:{})=>{
      if (user.id==urlid) setUser(user)
    })  
  }, [urlid, users])

  

  return (
  <details open className="usersShow">
    <summary>
      {user.name}
    </summary>
    <div className="usersContainer">
      {keys.map((key:string)=>{
        if (typeof(user[key])!="object" && key!="id") return <div>
          <span>{key}</span>
          <input type="text" id={key} value={user[key]}/>
        </div>
      })}
      <button>Salva</button>
    </div>
  </details>
  )
}

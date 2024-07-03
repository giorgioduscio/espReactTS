import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { UsersContext } from "./EffectContext";

export default function EffectContextCard() {
  const urlid :number =Number(useParams().urlid);
  const users =useContext(UsersContext)
  const [user, setUser] =useState({})
  
  useEffect(()=>{ 
    users.map((user:{})=>{
      if (user.id==urlid) setUser(user)
    })  
  }, [urlid, users])

  return (
  <details open className="usersShow">
    <summary>{user.name}</summary>
  </details>
  )
}

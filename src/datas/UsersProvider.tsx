import { createContext, useEffect, useState } from "react"
import User from "./UserInterface"
import { mapper } from "../tools/mapper"

export const UsersContext =createContext<{
  users:User[], 
  deleteUser:Function, 
  postUser:Function, 
  patchUser:Function
} |null>(null)

export default function UsersProvider(props:any) {
  const [users, setUsers] =useState<User[]>([])
  ,     url='https://users-b9804-default-rtdb.europe-west1.firebasedatabase.app/users'  
  
  // TODO MOSTRA
  function getUsers() {
    useEffect(()=>{
      fetch(`${url}.json`)
      .then(res=>res.json())
      .then(res=>res &&setUsers( mapper(res) ))
      .catch(e=>console.log(e))
    },[])
  } getUsers()

  // TODO AGGIUNGI
  function postUser(newUser:User) {
    fetch(`${url}.json`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    })
    .then(r=>r.json())
    .then(r=>{ 
      const updatedUsers =users
      newUser ={...newUser, key:r.name}

      updatedUsers.push(newUser)
      setUsers(updatedUsers)
      console.log('post', users[users.length-1]);
    })
  }
  // TODO MODIFICA
  function patchUser(elemKey:string, user:User) {
    fetch(`${url}/${elemKey}.json`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    .then(r=>r.json())
    .then(_r=>{ 
      const updateList :User[] =users.map(e=>e.key===elemKey ?user :e)
      setUsers(updateList)
      console.log('patch',users.filter(e=>e.key===elemKey)[0] );
    })
  }
  // TODO ELIMINA
  function deleteUser(elemKey:string) {
    fetch(`${url}/${elemKey}.json`, { method: 'DELETE' })
    .then(r=>r.json())
    .then(_r=>{ 
      setUsers( users.filter(user=>user.key!==elemKey) )
      console.log('delete',users);
    })
  }
  return <UsersContext.Provider value={{users, deleteUser, postUser, patchUser}}>
    {props.children}
  </UsersContext.Provider> 
}

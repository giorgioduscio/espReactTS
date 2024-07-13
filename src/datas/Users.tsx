import { createContext, useEffect, useState } from "react"

export const UsersContext =createContext({})

export default function Users() {
    const [users, setUsers] =useState([])
    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json => setUsers(json))
    }, [])
    console.log("users", users);

  return {users, setUsers}
}

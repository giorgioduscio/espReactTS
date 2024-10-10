import { createContext, useContext, useEffect, useState } from "react";
import User from "./UserInterface";
import { UsersContext } from "./UsersProvider";

export const AuthContext =createContext<{
  localeUser:User |undefined,
  onUpdate:Function,
  onDelete:Function,
} |null>(null)

export default function AuthProvider(props:any) {
  const [localeUser, setLocaleUser] =useState<User |undefined>()
  ,     uc =useContext(UsersContext)
  ,     users =uc?.users
  
  // if(localeUser) console.log('authprovider',localeUser);  

  function autoUpdate() {
    if(users) useEffect(()=>{
      let lsi =Number(localStorage.getItem('localeUser'))
      ,   userFinded =users.find(user=>user.id===lsi)
      if(userFinded) setLocaleUser( userFinded )
    },[users])
  } autoUpdate()

  function onUpdate(userFinded:User |undefined) {
    if (users && userFinded) {
      if(users.find(user=>user.id===userFinded.id)){
        localStorage.setItem('localeUser', userFinded.id.toString())
        setLocaleUser(userFinded)
      }
    }
  }

  function onDelete() {
    setLocaleUser(undefined)
    localStorage.removeItem('localeUser')
  }

  return <AuthContext.Provider value={{localeUser, onDelete, onUpdate}}>
    {props.children}
  </AuthContext.Provider>
}
import { createContext, useState } from "react";
import ContextB from "./ContextB";
import Navbar from "./Navbar";

// eslint-disable-next-line react-refresh/only-export-components
export const HHH =createContext({})

export default function ContextA() {
  document.title="Context"
  const [user, setUser] =useState("Vuoto")
  
  function change(e:Event) {
    e.target.value==''? setUser( "Vuoto" ) :setUser( e.target.value )
  }
  
  return (<HHH.Provider value={user}>
    <Navbar/>
    <div className="Context">
      <h1>ContextA</h1>
      <input type="text" onChange={change}/>
      <p>{user}</p>
      <ContextB/>
    </div>
  </HHH.Provider>)
}

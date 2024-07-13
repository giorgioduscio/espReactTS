import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { UsersContext } from "../datas/Users";

export default function EffectContextCard() {
  const 
    urlid :number =Number(useParams().urlid),
    {users, setUsers} =useContext(UsersContext),
    [formState, setFormState] =useState({}),
    keys :string[] =Object.keys(formState)
  // console.log('formState', formState);
  
    
  useEffect(()=>{ 
    users.map((user:{})=>{
      if (user.id==urlid) setFormState(user)
    })  
  }, [urlid, users])


  function changeField(e:Event) {
    const {value, name} =e.target
    setFormState({...formState, [name]:value})
  }
  function submit(e:Event) {
    e.preventDefault()
    // const result :object[] =[]
    // for (let user of users) {
    //   if(user.id==formState.id) user =formState
    // }
    // console.log(formState);
  }


  return (
  <details open className="usersShow">
    <summary>
      {formState.name}
    </summary>
    <form onSubmit={submit} className="usersContainer">
      {keys.map((key:string)=> {
      if (typeof(formState[key])!="object" && key!="id") return (

        <div key={key}>
          <span>{key}</span>
          <input 
            type="text" 
            name={key} 
            value={formState[key]}
            onChange={changeField}
          />
        </div>

      )})}
      <button type="submit">Salva</button>
    </form>
  </details>
  )
}

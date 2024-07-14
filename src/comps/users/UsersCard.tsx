import css from "./UsersComponent.module.css"
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { UsersContext } from "../../datas/UsersDatas";

export default function UsersCard() {
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


  function changeField(event:Event) {
    const {value, name} =(event.target as HTMLInputElement)
    setFormState({...formState, [name]:value})
  }
  function submit(event:Event) {
    event.preventDefault()
    // const result :object[] =[]
    // for (let user of users) {
    //   if(user.id==formState.id) user =formState
    // }
    // console.log(formState);
  }


  return (
  <details open className={css.usersCard}>
    <summary>{formState.name}</summary>
    <form onSubmit={submit} className={css.usersContainer}>

      <table>
        <tbody>{keys.map((key:string)=> typeof(formState[key])!="object" && key!="id" && 
          <tr key={key}>
            <td>{key}</td>

            <td>
            <input 
              type="text" 
              id={key}  
              name={key}  
              value={formState[key]}
              onChange={changeField}
            />
            </td>
          </tr>
        )}</tbody>
      </table>
      <button type="submit">Salva</button>
    </form>
  </details>
  )
}

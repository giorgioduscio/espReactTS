import React from 'react'

export default function ReducerInput({formState, formKeys, dispatchState}) {
  //optimize ECCEZIONI
  function fieldType(fieldName:string){ 
    switch(fieldName){
      case "email": return "email"
      case "age": return "number"
      case "weight": return "number"
      default: return "text"
  }}

  //todo
  function fieldChange(e:Event){
    let {name, value} =e.target
    dispatchState({ type:"patch", name, value })
  }

  return (<>
      <fieldset>
      <legend>Campi</legend>

      {formKeys.map((fieldName:string)=>{
        return <code key={fieldName}>
          <input 
            //optimize
            type={fieldType(fieldName)} 
            id={fieldName} 
            name={fieldName} 
            placeholder={fieldName} 
            value={formState[fieldName]} 
            //todo
            onChange={fieldChange} 
          />
          <datalist id={fieldName}>
            <option value={"Edge"}/>
            <option value={"Firefox"}/>
          </datalist>
        </code>
      })}

      <button onClick={()=> dispatchState({type:"reset"})}>Reset</button>
    </fieldset>
  </>)
}

import { createContext, useEffect, useState } from 'react'
import { List } from './listInterface'
import { mapper } from '../../tools/mapper'

export const listContext :any =createContext(null)

export default function listService() {
  const [list, setList] =useState<List[]>([])
  , url ='https://list-89d05-default-rtdb.europe-west1.firebasedatabase.app/todos'    
  
  // TODO MOSTRA
  function getList() {
    useEffect(()=>{
      fetch(`${url}.json`)
      .then(r => r.json())
      .then(r => r&& setList(mapper(r)))
      .catch(e=>console.log("catch:",e))
    },[])
  } getList()

  // TODO AGGIUNGI
  function postList(listEl:List) {
    fetch(`${url}.json`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(listEl)
    })
    .then(r=>r.json())
    .then(r=>{ 
      setList([...list,{key:r.name,...listEl}])
      console.log('postList',list[list.length]);
    })
  }
  // TODO MODIFICA
  function patchList(elemKey:string,listEl:List) {
    fetch(`${url}/${elemKey}/.json`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(listEl)
    })
    .then(r=>r.json())
    .then(r=>{ 
      const updateList :List[] =list.map(e=>e.key===elemKey ?listEl :e)
      setList(updateList)
      console.log('postList',list.filter(e=>e.key===elemKey)[0] );
    })
  }
  // TODO ELIMINA
  function deleteList(elemKey:string) {
    fetch(`${url}/${elemKey}/.json`, { method: 'DELETE' })
    .then(r=>r.json())
    .then(r=>{ 
      setList( list.filter(e=>e.key!==elemKey) )
      console.log('postList',list);
    })
  }

  return {list, postList, patchList, deleteList}
}

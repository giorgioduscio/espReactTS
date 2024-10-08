import './List.css'
import { randomId } from '../../tools/randomCompiler'
import listService, { listContext } from './ListService'
import { ChangeEvent } from 'react'
import Navbar from '../../components/navbar/Navbar'

export default function List() {
  document.title ='List'
  const lls =listService() //localListService

  function onPostList(e:any){
    const newValue :string =(e.target).title.value
    lls.postList({ complete:false, title:newValue, id:`${randomId()}` })
    e.preventDefault()
  }
  function onPatchList(e:ChangeEvent<HTMLInputElement>) {
    const {id, name, value, checked} =e.target
    ,     newValue =name=='title' ?value :checked
    ,     listEl =lls.list[Number(id)]
    lls.patchList(listEl.key!,{...listEl,[name]:newValue })
  }

  return <listContext.Provider value={lls}>
  <Navbar/>
  <article id="list">
    <div>
      <h1>Lista</h1>

      <main>
        <form onSubmit={onPostList}>
          <input type="text" name="title" placeholder="Aggiungi" />
          <button type="submit">
            <span className="material-symbols-outlined">add</span>
          </button>
        </form>
        
        {lls.list.map((el,i)=>(
        <div key={i}> 
          <span
            onClick={()=> lls.deleteList(el.key!)} 
            className="material-symbols-outlined"
          >delete</span>
          <input
            type="checkbox" 
            id={i.toString()}
            name="complete" 
            defaultChecked={el.complete} 
            onChange={onPatchList}
          />
          <input
            type="text" 
            id={i.toString()}
            name="title" 
            defaultValue={el.title} 
            onChange={onPatchList}
          />
        </div> ))}
      </main>

    </div>
  </article>
  </listContext.Provider>
}
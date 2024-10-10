import './List.css'
import { randomId } from '../../tools/randomCompiler'
import { ListContext } from '../../datas/ListProvider'
import { ChangeEvent, useContext } from 'react'
import Navbar from '../../components/navbar/Navbar'

export default function List() {
  document.title ='List'
  const listContext =useContext(ListContext)! //localListService

  function onPostList(e:ChangeEvent<HTMLFormElement>){
    const newValue =(e.target as any).title.value
    listContext.postList({ complete:false, title:newValue.value, id:`${randomId()}` })
    e.preventDefault()    
  }
  function onPatchList(e:ChangeEvent<HTMLInputElement>) {
    const {id, name, value, checked} =e.target
    ,     newValue =name=='title' ?value :checked
    ,     listEl =listContext.list[Number(id)]
    listContext.patchList(listEl.key!,{...listEl,[name]:newValue })
  }

  return <>
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
        
        {listContext.list.map((el,i)=>(
        <div key={i}> 
          <span
            onClick={()=> listContext.deleteList(el.key!)} 
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
  </>
}
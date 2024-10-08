import { Link } from "react-router-dom"
import { AppRouter } from "../../router"
import { upperSpaces } from "../../tools/upperSpaces"
import closeDropdown from "../../tools/closeDropdown"
import './RouterDrop.css'

export default function RouterDrop() {
  const appRouter =AppRouter.filter(page=>page.show && page.path!==document.title.toLowerCase())

  // CHIUDE IL DROPDOWN
  closeDropdown('RouterDrop')

  return (
    <details className="RouterDrop">
      <summary>
      <span className="material-symbols-outlined">apps</span>
      </summary>
      
      <div> {appRouter .map((page:any,i)=>
        <Link to={"/"+page.path} key={i}>
          <abbr title={page.path}>{ upperSpaces(page.path) }</abbr> 
        </Link>  )}
      </div>
    </details>
  )
}

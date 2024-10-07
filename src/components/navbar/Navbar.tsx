import "./Navbar.css"
import { AppRouter } from "../../router";
import closeDropdown from "./closeDropdown";
import { Link } from "react-router-dom";
import { upperSpaces } from "../../tools/upperSpaces";

export default function Navbar() {
  const appRouter =AppRouter
  ,     reactLogo ="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"

  // CHIUDE IL DROPDOWN
  closeDropdown('navbar')
    
  return (
  <nav id="navbar">
    <Link to={'/home'}>
      <img src={reactLogo} alt="reactLogo"/>
    </Link>
    <b>{ document.title && document.title }</b>

    <details className="navbar">
      <summary>
      <span className="material-symbols-outlined">apps</span>
      </summary>
      
      <div>{ appRouter.map((page:any,i)=> page.show &&
        <Link to={"/"+page.path} key={i}>
          <abbr title={page.path}>{ upperSpaces(page.path) }</abbr> 
        </Link>  )}
      </div>
    </details>
  </nav>
  )
}

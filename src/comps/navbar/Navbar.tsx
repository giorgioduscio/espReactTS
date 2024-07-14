import css from "./Navbar.module.css"
import { Link } from "react-router-dom";
import { router } from "../../main";

export default function Navbar() {
  const R =router.routes
  // console.log("router", R);
  const reactLogo ="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"

  // CHIUDE IL DROPDOWN
  document.addEventListener('click', (e:Event)=>{
    let classSelected =(e.target as HTMLInputElement).className
    let dropdown =document.querySelector(`details._autoDropdown_9j9oi_39`)
    if (classSelected!="_autoDropdown_**") dropdown?.removeAttribute("open");
  })

    
  return (
  <nav className={css.Navbar}>
    <img className={css.logo} src={reactLogo}/>

    <details className={css.autoDropdown}>
      <summary className={css.autoDropdown}>Pagine</summary>
      
      <div className={css.content}>{ R.map((page:any)=> page.show &&
        <Link to={"/"+page.path} key={page.id}>
          <abbr title={page.path}>{page.path}</abbr> 
        </Link>
      )}</div>
    </details>
  </nav>
  )
}

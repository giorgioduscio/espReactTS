import "./Navbar.css"
import { Link } from "react-router-dom";
import { router } from "../../main";

export default function Navbar() {
  const R =router.routes
  // console.log("router", R);
  const reactLogo ="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"

  // CHIUDE IL DROPDOWN
  document.addEventListener('click', (e:Event)=>{
    let result =(e.target as HTMLInputElement).className
    let dropdown =document.querySelector("details.auto-dropdown")
    if (result!="auto-dropdown") dropdown?.removeAttribute("open")
  })

    
  return (
  <nav className="Navbar">
    <img className="logo" src={reactLogo}/>

    <details className="auto-dropdown">
      <summary className="auto-dropdown">Pagine</summary>
      <div className="content">{ R.map((page:any)=> page.show &&
        <Link to={"/"+page.path} key={page.id}>
          <abbr title={page.path}>{page.path}</abbr> 
        </Link>
      )}</div>
    </details>
  </nav>
  )
}

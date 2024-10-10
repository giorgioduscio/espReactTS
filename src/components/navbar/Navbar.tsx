import "./Navbar.css"
import { Link } from "react-router-dom";
import RouterDrop from "../RouterDrop/RouterDrop";
import AccountDrop from "../accountDrop/AccountDrop";

export default function Navbar() {
  const reactLogo ="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
    
  return (
  <nav id="navbar">
    <div>
      <Link to={'/home'}>
        <img src={reactLogo} alt="reactLogo"/>
      </Link>
      {document.title&& <b>{ document.title }</b>}
    </div>

    <div>
      <RouterDrop />
      <AccountDrop />
    </div>
  </nav>
  )
}

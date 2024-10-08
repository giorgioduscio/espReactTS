import "./Navbar.css"
import { Link } from "react-router-dom";
import RouterDrop from "../RouterDrop/RouterDrop";

export default function Navbar() {
  const reactLogo ="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
    
  return (
  <nav id="navbar">
    <Link to={'/home'}>
      <img src={reactLogo} alt="reactLogo"/>
    </Link>
    <b>{ document.title && document.title }</b>
    <RouterDrop />
  </nav>
  )
}

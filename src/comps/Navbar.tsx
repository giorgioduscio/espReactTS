import { Link } from "react-router-dom";
import { router } from "../main";

export default function Navbar() {
  const R =router.routes
  // console.log("router", R);
    
  return (<nav className="Navbar">
    {R.map(page=>{ 
        if (page.path!="" && page.path!="*")
        return <Link to={"/"+page.path} key={page.id}>
          <abbr title={page.path}>{page.path}</abbr> 
        </Link>
     })}
  </nav>)
}

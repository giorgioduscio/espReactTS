import { Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Dashboard from "./pages/dashboard/Dashboard";
import NotFound from "./pages/notfound/NotFound";


export const AppRouter =[
  // NESSUN PERCORSO
  { show: false, path:"",  element: <Navigate to={"/home"}/>},
  
  { show: true, path:"home", element: <Home/> },
  { show: true, path:"list", element: <List/> },
  { show: false, path:"dashboard", element: <Dashboard/> },
  // PAGINA NON TROVATA
  { show: false, path:"404", element: <NotFound/> },
  { show: false, path:"*", element: <Navigate to={"/404"}/> },
]
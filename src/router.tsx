import { Navigate } from "react-router-dom";
import ReducerComp from "./comps/reducer/ReducerComp";
import Error from "./comps/Error";
import Home from "./comps/home/Home";
import List from "./comps/list/List";


export const AppRouter =[
  // NESSUN PERCORSO
  { show: false, path:"",  element: <Navigate to={"/home"}/>},
  
  { show: true, path:"home", element: <Home/> },
  { show: true, path:"list", element: <List/> },
  { show: true, path:"reducer", element: <ReducerComp/> },
  // PAGINA NON TROVATA
  { show: false, path:"error", element: <Error/> },
  { show: false, path:"*", element: <Navigate to={"/error"}/> },
]
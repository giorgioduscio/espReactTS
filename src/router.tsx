import { Navigate } from "react-router-dom";
import ReducerComp from "./pages/reducer/ReducerComp";
import Error from "./pages/Error";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Dashboard from "./pages/dashboard/Dashboard";


export const AppRouter =[
  // NESSUN PERCORSO
  { show: false, path:"",  element: <Navigate to={"/home"}/>},
  
  { show: true, path:"home", element: <Home/> },
  { show: true, path:"list", element: <List/> },
  { show: false, path:"reducer", element: <ReducerComp/> },
  { show: false, path:"dashboard", element: <Dashboard/> },
  // PAGINA NON TROVATA
  { show: false, path:"error", element: <Error/> },
  { show: false, path:"*", element: <Navigate to={"/error"}/> },
]
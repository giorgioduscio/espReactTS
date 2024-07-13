import './macro.css'
import './micro.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

import ReducerComp from './comps/ReducerComp'
import Error from './comps/Error'
import UsersComponent from './comps/users/UsersComponent'
import UsersCard from './comps/users/UsersCard'
import UsersInput from './comps/users/UsersInput'

export const router :RouteObject |any[] =createBrowserRouter([
  // NESSUN PERCORSO
  { show: false, path:"",  element: <Navigate to={"/users"}/>},

  { show: true, path:"reducer", element: <ReducerComp/> },
  { show: true, path:"users", element: <UsersComponent/>, children:[
    { path:"input", element: <UsersInput/> },
    { path:":urlid", element: <UsersCard/> },
  ]},
  // PAGINA NON TROVATA
  { show: false, path:"error", element: <Error/> },
  { show: false, path:"*", element: <Navigate to={"/error"}/> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)


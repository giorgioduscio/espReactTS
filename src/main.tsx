import './macro.css'
import './micro.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

import ContextA from './comps/ContextA'
import ReducerComp from './comps/ReducerComp'
import Error from './comps/Error'
import EffectContext from './comps/EffectContext'
import EffectContextCard from './comps/EffectContextCard'
import Firebase from './comps/Firebase'
import EffectContextInput from './comps/EffectContextInput'

export const router :RouteObject |any[] =createBrowserRouter([
  // NESSUN PERCORSO
  { show: false, path:"",  element: <Navigate to={"/context"}/>},
  { show: true, path:"context", element: <ContextA/> },
  
  { show: false, path:"firebase", element: <Firebase/> },
  { show: true, path:"reducer", element: <ReducerComp/> },
  { show: true, path:"effect", element: <EffectContext/>, children:[
    { path:"input", element: <EffectContextInput/> },
    { path:":urlid", element: <EffectContextCard/> },
  ] },
  // PAGINA NON TROVATA
  { show: false, path:"error", element: <Error/> },
  { show: false, path:"*", element: <Navigate to={"/error"}/> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)


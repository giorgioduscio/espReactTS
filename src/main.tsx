import './macro.css'
import './micro.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import ContextA from './comps/ContextA'
import ReducerComp from './comps/ReducerComp'
import Error from './comps/Error'
import EffectContext from './comps/EffectContext'
import EffectContextCard from './comps/EffectContextCard'
import Firebase from './comps/Firebase'

export const router =createBrowserRouter([
  // NESSUN PERCORSO
  { path:"",  element: <Navigate to={"/context"}/>},
  { path:"context", element: <ContextA/> },
  
  { path:"firebase", element: <Firebase/> },
  { path:"reducer", element: <ReducerComp/> },
  { path:"effect", element: <EffectContext/>, children:[
    { path:":urlid", element: <EffectContextCard/> },
  ] },
  // PAGINA NON TROVATA
  { path:"error", element: <Error/> },
  { path:"*", element: <Navigate to={"/error"}/> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

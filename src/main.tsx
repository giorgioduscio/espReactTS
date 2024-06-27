import './macro.css'
import './micro.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import ContextA from './comps/ContextA'
import ReducerComp from './comps/ReducerComp'
import Error from './comps/Error'
import Effect from './comps/Effect'
import Rchildren from './comps/Rchildren'

export const router =createBrowserRouter([
  { path:"",  element: <Navigate to={"/context"}/>},
  { path:"context", element: <ContextA/> },
  { path:"reducer", element: <ReducerComp/> },
  { path:"effect", element: <Effect/>, children:[
    { path:":urlid", element: <Rchildren/> }
  ] },
  
  { path:"error", element: <Error/> },
  { path:"*", element: <Navigate to={"/error"}/> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

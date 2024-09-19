import './style.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppRouter } from './router'

const mainRouter =createBrowserRouter(AppRouter)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={mainRouter}/>
  </React.StrictMode>,
)
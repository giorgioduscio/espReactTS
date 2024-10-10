import './style.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppRouter } from './router'

import AuthProvider from './datas/AuthProvider'
import UsersProvider from './datas/UsersProvider'
import ListProvider from './datas/ListProvider'

const mainRouter =createBrowserRouter(AppRouter)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UsersProvider>
    <AuthProvider>
    <ListProvider>


    <RouterProvider router={mainRouter}/>

    </ListProvider>
    </AuthProvider>
    </UsersProvider>
  </React.StrictMode>,
)
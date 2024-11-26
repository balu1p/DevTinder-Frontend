import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/pages/Header'
import '@fontsource/comic-neue'; 
import '@fontsource/comic-neue/300.css'; 
import '@fontsource/comic-neue/700.css'; 
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';


const AppLayout = () => {
  return (
    <div className='bg-black text-white min-h-screen'>
       <Outlet/>
    </div>
   
  )
}

const appRouter = createBrowserRouter([
  {
  path: '/',
  element: <AppLayout/>,
  children: [
    {
      path: "/",
      element: <Header/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/signup",
      element: <Signup/>
    }
  ]
}
])

const root = createRoot(document.getElementById('root'));

root.render(
  <>
    <RouterProvider router={appRouter}/>
  </>
)
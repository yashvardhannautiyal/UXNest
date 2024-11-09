import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppLayout from './AppLayout.jsx';
import '../index.css'

import  {RouterProvider, createBrowserRouter } from "react-router-dom"
import HeroSection from './Components/HeroSection/HeroSection.jsx';
import LoginPage2 from './Components/LoginPage/LoginPage2.jsx';
import Editor from './Components/Editor/Editor.jsx';


const router = createBrowserRouter(
  [
    {
      path : "",
      element : <AppLayout />,
      children : [
       { path : "/",
        element : <HeroSection />
       },
       {
        path : "/login",
        element : <LoginPage2 />
       },
       {
        path : "/editor",
        element : <Editor />
       }
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

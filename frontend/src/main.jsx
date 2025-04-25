import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import AppLayout from "./AppLayout";
import Home from "./pages/Home/Home";
import { ThemeContextProvider } from './Context/ThemeContext/ThemeContext';
import TextEditor from './pages/TextEditor/TextEditor';
import SignIn from './pages/SignIn/SignIn';


const router = createBrowserRouter(
  createRoutesFromElements(
    //we are required with a parent element always
      <Route  path = "/"   element = {<AppLayout />}>
      <Route  path = ""   element = {<Home />} />
      <Route  path = "/editor"  element = {<TextEditor />} />
      <Route  path = "/signin"  element = {<SignIn />} />
      </Route>
  )
)


createRoot(document.getElementById('root')).render(
<StrictMode>
  <ThemeContextProvider>
      <RouterProvider router = {router}/>
  </ThemeContextProvider>
</StrictMode>,
)


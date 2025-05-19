import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./pages/Home/Home";
import TextEditor from "./pages/TextEditor/TextEditor";
import SignIn from "./pages/SignIn/SignIn";
import Login from "./pages/Login/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    //we are required with a parent element always
    <Route path="/" element={<AppLayout />}>
      <Route path="" element={<Home />} />
      <Route path="/editor" element={<TextEditor />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);

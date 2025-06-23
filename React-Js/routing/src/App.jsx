import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home";
import About from "./components/About";
import Contact from "./components/Contact";

import Layout from "./components/Layout";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // shared layout
      children: [
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <div>404 - Not Found</div> },
      ],
    },
  ]);
  

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

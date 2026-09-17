import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Layout from "./Components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import About from "./Components/About/About";
import PostDetails from "./Components/PostDetails/PostDetails";

function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/blog",
          element: <Blog />,
        },
        { path: "/blog/:slug", element: <PostDetails /> },
        { path: "/about", element: <About /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;

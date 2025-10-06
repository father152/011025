import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import About from "./Components/Header/About";
import Projects from "./Components/Header/Projects";

function App() {
   const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
      ],
    },
  ]);
    return (
    <>
       <RouterProvider router={router} />
    </>
  );
}

export default App;

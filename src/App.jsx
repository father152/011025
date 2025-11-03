import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import About from "./Components/Header/About";
import Projects from "./Components/Header/Projects";
import Photo from "./Components/Header/Photo";
import Contact from "./Components/Header/Contact";
import Poltava from "./Components/Home/Poltava";
import Kharkiv from "./Components/Home/Kharkiv";
import Sumu from "./Components/Home/Sumu";
import Kyiv from "./Components/Home/Kyiv";
import Fivefloor from "./Components/Home/Fivefloor";


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
        {
          path: "/photo",
          element: <Photo />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
         {
          path: "/poltava",
          element: <Poltava />,
        },
        {
          path: "/kharkiv",
          element: <Kharkiv />,
        },
        {
          path: "/sumu",
          element: <Sumu />,
        },
        {
          path: "/kyiv",
          element: <Kyiv />,
        },
        {
          path: "/fivefloor",
          element: <Fivefloor />,
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

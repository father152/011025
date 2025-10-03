import Layout from "./Components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
   const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        // {
        //   path: "/comp",
        //   element: <Comp />,
        // },
        
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

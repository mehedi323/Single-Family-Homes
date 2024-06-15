import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import HomeDetails from "../Pages/HomeDetails";

 

 const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/homeDetails/:id',
                loader:  ()=>fetch('Family.json'),
                element:<HomeDetails></HomeDetails>
            }
        ]
    }

 ])

 export default router;
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import HomeDetails from "../Pages/HomeDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import OrderList from "../Pages/OrderList";  
import PrivateRouter from "../Pages/PrivateRouter/PrivateRouter";

 

 const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/orderList',
                element: <PrivateRouter><OrderList></OrderList> </PrivateRouter>
            },
            {
                path: '/homeDetails/:id',
                loader:  ()=>fetch('Family.json'),
                element:<HomeDetails></HomeDetails>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }

 ])

 export default router;
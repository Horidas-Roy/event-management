import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import ErrorElement from "../pages/ErrorElement";
import Home from "../pages/Home";
import Login from "../components/Login/Login";
import Resister from "../components/Resister/Resister";

const router=createBrowserRouter([
   {
    path:'/',
    element:<Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('data.json')
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/resister',
            element:<Resister></Resister>
        }
    ]
   }
])



export default router;
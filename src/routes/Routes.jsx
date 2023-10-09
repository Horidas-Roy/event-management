import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import ErrorElement from "../pages/ErrorElement";
import Home from "../pages/Home";
import Login from "../components/Login/Login";
import Resister from "../components/Resister/Resister";
import ServiceCardDetails from "../components/services/ServiceCardDetails";
import PrivateRoute from "../components/PrivateRoutes/PrivateRoute"
import OurGallary from "../components/PrivateRoutes/OurGallary";
import InvitationCard from "../components/PrivateRoutes/InvitationCard";




const router=createBrowserRouter([
   {
    path:'/',
    element:<Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('/data.json')
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/resister',
            element:<Resister></Resister>
        },
        {
            path:'/service/:id',
            element:<PrivateRoute><ServiceCardDetails></ServiceCardDetails></PrivateRoute>,
            
        },
        {
            path:'/gallary',
            element:<PrivateRoute><OurGallary></OurGallary></PrivateRoute>
        },
        {
            path:'/invitions',
            element:<PrivateRoute><InvitationCard></InvitationCard></PrivateRoute>
        }
    ]
   }
])



export default router;
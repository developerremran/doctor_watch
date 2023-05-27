import {createBrowserRouter} from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Appointment from "../Pages/Appointment";
import About from "../Pages/About";
import Login from "../Pages/Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/appointment',
          element:<Appointment></Appointment>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
      ]
    },
  ]); 
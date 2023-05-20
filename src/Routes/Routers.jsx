import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AllToys from "../Pages/AllToys";
import MyToys from "../Pages/MyToys";
import AddAToys from "../Pages/AddAToys";
import PrivateRoute from "./PrivateRoute";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'/blogs',
          element:<Blog></Blog>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        }, 
        {
          path:'/alltoys',
          element:<AllToys></AllToys>
        },
        {
          path:'/mytoys',
          element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path:'/addtoy',
          element:<PrivateRoute><AddAToys></AddAToys></PrivateRoute>
        }
      ]
    },
  ]);
  
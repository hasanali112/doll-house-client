import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";


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
        }
      ]
    },
  ]);
  
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog";
import Error from "../Pages/Error";
import Login from "../Pages/Login";


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
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/login',
          element:<Login></Login>
        }
      ]
    },
  ]);
  
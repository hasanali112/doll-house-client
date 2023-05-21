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
import ViewDetail from "../Pages/ViewDetail";
import UpdateToy from "../Pages/UpdateToy";


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
          element:<AllToys></AllToys>,
          loader: ()=> fetch('https://dolls-marketplace-server.vercel.app/alltoys')
        },
        {
          path:'/mytoys',
          element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path:'/addtoy',
          element:<PrivateRoute><AddAToys></AddAToys></PrivateRoute>
        },
        {
          path:'/viewdetail/:id',
          element:<PrivateRoute><ViewDetail></ViewDetail></PrivateRoute>,
          loader:({params}) => fetch(`https://dolls-marketplace-server.vercel.app/toy/${params.id}`)
        },
        {
          path:'/updatetoy/:id',
          element:<PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
          loader:({params})=> fetch(`http://localhost:5000/toy/${params.id}`)
        }
      ]
    },
  ]);
  
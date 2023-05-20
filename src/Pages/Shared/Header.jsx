import React, { useContext } from "react";
import logo from '../../assets/images/logo.png'
import { NavLink , Link} from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'




const Header = () => {
  const {user, userSignOut} = useContext(AuthContext)
  
  const handleSignOut = () =>{
    userSignOut()
    .then()
    .catch(error => console.log(error))
  }




  const navItem = <>
    <li ><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/blogs'>Blogs</NavLink></li> 
    <li ><NavLink to='/alltoys'>All Toys</NavLink></li> 
    {user?.displayName ? <>
      <li ><NavLink to='/mytoys'>My Toys</NavLink></li>
      <li ><NavLink to='/addtoy'>Add A Toys</NavLink></li>
      <div className="flex items-center">
      {user && <><a data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}>
           <img src={user.photoURL} alt="" className="rounded-full mr-2"/>
         </a> <Tooltip id="my-tooltip" /></> }
      <button className="btn btn-secondary" onClick={handleSignOut}>Sign Out</button>
      </div>
    </>
    : <Link to='/login' className="btn btn-secondary">SignIn</Link> 
  } 
  </>
  
  
  
  return (
    <div className="navbar bg-gray-600">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
         {navItem}
        </ul>
      </div>
      <div className="flex lg:ml-6">
        <img src={logo} alt="" className="w-12"/>
      <Link className="btn btn-ghost normal-case text-2xl font-bold text-white">Doll House</Link>
      </div>
      
    </div>
    <div className="navbar-center hidden lg:flex navbar-end lg:mr-6">
      <ul className="menu menu-horizontal px-1 text-white">
         {navItem}
      </ul>
    </div>
  </div>
  );
};

export default Header;

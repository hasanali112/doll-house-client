import React, { useContext } from "react";
import logo from '../../assets/images/logo.png'
import { NavLink , Link} from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";




const Header = () => {

  const {user} = useContext(AuthContext)
  const navItem = <>
    <li ><NavLink to='/'>Home</NavLink></li>
    <li ><NavLink to='/alltoys'>All Toys</NavLink></li> 
    <li ><NavLink to='/mytoys'>My Toys</NavLink></li>
    <li ><NavLink to='/addtoy'>Add A Toys</NavLink></li>
    <li><NavLink to='/blogs'>Blogs</NavLink></li>  
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
         <Link to='/login' className="btn btn-secondary">SignIn</Link>
        </ul>
      </div>
      <div className="flex lg:ml-6">
        <img src={logo} alt="" className="w-12"/>
      <Link className="btn btn-ghost normal-case text-2xl font-bold text-white">Doll House</Link>
      </div>
      
    </div>
    <div className="navbar-center hidden lg:flex navbar-end lg:mr-6">
      <ul className="menu menu-horizontal px-1 text-white">
         {user && <h1>{user.displayName}</h1>}
         {navItem}
         <Link to='/login' className="btn btn-secondary">SignIn</Link>
      </ul>
    </div>
  </div>
  );
};

export default Header;

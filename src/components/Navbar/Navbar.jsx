import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);
  const [photoURL,setPhotoUrl]=useState();
  console.log(user)
  useEffect(()=>{
    if(user){
      setPhotoUrl(user.photoURL)
    }
  },[user])
    const navlinks=<>
         <li><NavLink to='/'>Home</NavLink></li>
         <li><NavLink to='/login'>Sign In</NavLink></li>
         <li><NavLink to='/resister'>Sign Up</NavLink></li>
         {
          user && <>
             <li><NavLink to='/gallary'>Our Gallery</NavLink></li>
          <li><NavLink to='/invitions'>Invitation Card</NavLink></li>
          </>
         }
    </>
    const handleSignOut=()=>{
      logOut()
      .then(result=>{
        console.log(result.user)
      })
      .catch(error=>{
        console.log(error)
      })
    }
  return (
    <div className="navbar bg-[#262626] text-[#FFF]">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-0 shadow rounded-box w-40 bg-[#262626] text-[#FFF]">
        {navlinks}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-2xl font-satisfy">Wedding <span className="text-[#5f7f37]">Arranger</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl font-bold">
     {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
       user? 

         <div className="flex items-center gap-3 ">
           {(photoURL)?
            <div className="flex items-center gap-2">
              <span className="text-[#FFF] hidden md:flex">{user?.displayName}</span>
              <img className="h-10 w-10 rounded-full" src={photoURL} alt="" />
            </div>
            :
            <FaUserCircle></FaUserCircle>
           }
           <button onClick={handleSignOut} className="btn hidden md:flex">LogOut</button>
         </div>
       :
          <Link to='/login'>
           <button className="btn font-semibold px-1 md:px-3 py-1">LogIn</button>
          </Link>
    }
  </div>
</div>
  );
};

export default Navbar;

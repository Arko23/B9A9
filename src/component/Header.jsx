import { Link, NavLink } from "react-router-dom";
import { BsBuildingFill } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import 'animate.css';


const Header = () => {
    const {user,logOut}=useContext(AuthContext);
    
    const handleSignout=()=>{
       logOut()
       .then()
       .catch()
    }

    const links = <>
            <li className="text-white font-semibold "><NavLink to="/" className="focus:ring-2 focus:ring-white">Home</NavLink></li> 
            {
               user && <>
                <li className="text-white font-semibold"><NavLink to="/buy" className="focus:ring-2 focus:ring-white">Buyers Guide</NavLink></li> 
                <li className="text-white font-semibold"><NavLink to="/up" className="focus:ring-2 focus:ring-white">Update Profile</NavLink></li> 
              </>
            }
           
            <li className="text-white font-semibold"><NavLink to="/con" className="focus:ring-2 focus:ring-white">Contact us</NavLink></li>
             
    </>
   

    
    return (
        
            <div className="navbar bg-base-100" style={{backgroundImage: 'url("https://i.ibb.co/NTQSKJC/istockphoto-1456147420-1024x1024.jpg")'}}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl lg:text-3xl font-bold text-white animate__animated animate__bounce animate__"><BsBuildingFill></BsBuildingFill>Urban<span className="text-black">NEST</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end">
  
  {
    user ? <>
    <div className="flex gap-2">
    <img src={user.photoURL} className="w-10 h-10 rounded-full" title={user.displayName} />
    <button onClick={handleSignout} className="btn bg-black text-white font-semibold ">Sign-Out</button> 
    </div>
    </>
    :
    <Link to="/log">

    <button className="btn bg-black text-white font-semibold">Log-In</button>
  
    </Link>
  }

         
  </div>
</div>
       
    );
};

export default Header;
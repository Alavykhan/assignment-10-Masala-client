import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaUser } from "react-icons/fa";
import './Header.css';

const Header = () => {
    const {logOut, user} = useContext(AuthContext);
    const handleLogOut =()=>{
        logOut()
        .then()
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className="navbar bg-base-200">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                       <Link to='/' className='text-md font-semibold'>Home</Link>
                       <Link to='/' className='text-md font-semibold'>Blog</Link>
                       <Link to='/register' className='text-md font-semibold'>Register</Link>
                    </ul>
                    </div>
                    <Link to='/' className='text-2xl font-bold ps-5'>MASALA</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                   <NavLink
                    to='/'
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    Home
                  </NavLink>
                    <NavLink
                    to='/blog'
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    Blog
                  </NavLink>
                    <NavLink
                    to='/register'
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    Register
                  </NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user? <div className='flex items-center text-2xl'> <FaUser /><button onClick={handleLogOut} className="btn btn-active btn-neutral mx-5">Logout</button></div> : <Link to='/login'><button className="btn btn-active btn-neutral mx-5">Login</button></Link> 
                    }
                </div>
        </div>
    );
};

export default Header;
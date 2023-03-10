import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import logo from '../../assets/logo.png';

const Header = () => {
    const { user, providerLogOut } = useContext(AuthContext);

    return (
        <div className="navbar bg-base-100 sticky top-0 z-50 ">
            <div className="navbar-start">

                {/* for mobile  */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/home' >Home</Link></li>
                        <li><Link to='/services' className="justify-between">Services</Link></li>
                        {
                            user?.uid &&
                            <>
                                <li> <Link to='/reviews' >My Reviews</Link></li>
                                <li> <Link to='/addServices' >Add Service</Link></li>
                            </>

                        }
                        <li><Link to='/blogs' >Blogs</Link></li>
                    </ul>
                </div>

                {/* logo  */}
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img className='w-8 ' src={logo} alt="" />
                    <h1>SastoCare</h1>
                </Link>
            </div>

            {/* for desktop  */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/home' >Home</Link></li>
                    <li> <Link to='/services' >Services</Link></li>
                    {
                        user?.uid &&
                        <>
                            <li> <Link to='/reviews' >My Reviews</Link></li>
                            <li> <Link to='/addServices' >Add Service</Link></li>
                        </>

                    }
                    <li><Link to='/blogs' >Blogs</Link></li>
                </ul>
            </div>

            {/* login and user  */}
            <div className="navbar-end">
                {
                    user?.uid ?
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                                <li><Link to='/profile' className="justify-between"> Profile</Link></li>
                                <li>
                                    <p
                                        className='text-error'
                                        onClick={() => providerLogOut()}
                                    >
                                        Logout
                                        
                                    </p>
                                </li>
                            </ul>
                        </div>
                        :
                        <Link to='/login' className="btn">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;
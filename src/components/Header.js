import React, {useContext} from 'react';
import {FaUser} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';
import logo from '../assets/logo.jpg';
import {AuthContext} from '../contexts/UserContext';

const Header = () => {
    const {user, logOut, setUser} = useContext(AuthContext);

    const logOutHandler = () => {
        logOut()
            .then(() => {
                setUser(null);
            }).catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className='w-full flex justify-between items-center bg-blue-100 px-2 py-2 lg:px-16 fixed top-0 z-50'>
            <NavLink to={"/"}>
                <div className='flex items-center gap-x-2'>
                    <img src={logo} alt="site_logo" className='w-12 h-12 border border-blue-900' />
                    <div className='flex flex-col'>
                        <span className='text-xl font-bold text-blue-900'>Creative</span>
                        <span className='text-md font-bold text-blue-500'>Construction</span>
                    </div>
                </div>
            </NavLink>
            <div className='flex gap-x-3 font-bold'>
                <NavLink to={"/"} className='text-blue-900 hover:text-blue-600'>Home</NavLink>
                <NavLink to={"/services"} className='text-blue-900 hover:text-blue-600'>Services</NavLink>
                <NavLink to={"/blog"} className='text-blue-900 hover:text-blue-600'>Blog</NavLink>
                <NavLink to={"/my-reviews"} className='text-blue-900 hover:text-blue-600'>My Reviews</NavLink>
                <NavLink to={"/add-service"} className='text-blue-900 hover:text-blue-600'>Add Service</NavLink>
            </div>
            <div className='flex gap-x-2'>
                {
                    user?.uid
                        ? user?.photoURL
                            ? <img src={user?.photoURL} alt="photoURL" className='w-8 h-8 rounded-full' title={user?.displayName} />
                            : <FaUser className='w-6 h-6 rounded-full border' title={user?.displayName}></FaUser>
                        : ""
                }

                {
                    user?.uid
                        ?
                        <button onClick={logOutHandler} className="bg-blue-700 hover:bg-blue-600 px-3 py-2 rounded-md text-white">
                            Log Out
                        </button>
                        : <NavLink to={"/login"} className="bg-blue-700 hover:bg-blue-600 px-3 py-2 rounded-md text-white">Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Header;
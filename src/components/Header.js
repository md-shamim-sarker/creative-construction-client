import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Header = () => {
    return (
        <div className='w-full flex justify-between items-center bg-blue-100 px-2 py-2 lg:px-16 fixed top-0 z-50'>
            <div className='flex items-center gap-x-2'>
                <img src={logo} alt="site_logo" className='w-12 h-12 border border-blue-900' />
                <div className='flex flex-col'>
                    <span className='text-xl font-bold text-blue-900'>Creative</span>
                    <span className='text-md font-bold text-blue-500'>Construction</span>
                </div>
            </div>
            <div className='flex gap-x-3'>
                <NavLink to={"/"} className='text-blue-900 hover:text-blue-600'>Home</NavLink>
                <NavLink to={"/services"} className='text-blue-900 hover:text-blue-600'>Services</NavLink>
                <NavLink to={"/blog"} className='text-blue-900 hover:text-blue-600'>Blog</NavLink>
                <NavLink to={"/my-reviews"} className='text-blue-900 hover:text-blue-600'>My Reviews</NavLink>
            </div>
            <div>
                <NavLink to={"/login"} className="bg-blue-700 hover:bg-blue-600 px-3 py-2 rounded-md text-white">Login</NavLink>
            </div>
        </div>
    );
};

export default Header;
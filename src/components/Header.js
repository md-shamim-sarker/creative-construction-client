import React, {useContext, useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {GrClose} from 'react-icons/gr';
import {NavLink} from 'react-router-dom';
import logo from '../assets/logo.jpg';
import {AuthContext} from '../contexts/UserContext';

const Header = () => {
    const {user, logOut, setUser} = useContext(AuthContext);
    const [toggle, setToggle] = useState(false);

    const logOutHandler = () => {
        logOut()
            .then(() => {
                setUser(null);
            }).catch((error) => {
                console.log(error);
            });
    };

    const toggleHandler = () => {
        setToggle(!toggle);
    };

    return (
        <div className='w-full flex justify-between items-center bg-blue-100 px-4 py-2 lg:px-16 fixed top-0 z-50'>
            <NavLink to={"/"}>
                <div className='flex items-center gap-x-2'>
                    <img src={logo} alt="site_logo" className='w-12 h-12 border border-blue-900' />
                    <div className='flex flex-col'>
                        <span className='text-xl font-bold text-blue-900'>Creative</span>
                        <span className='text-md font-bold text-blue-500'>Construction</span>
                    </div>
                </div>
            </NavLink>
            <div className='hidden lg:flex gap-x-3 font-bold'>
                <NavLink to={"/"} className='text-blue-900 hover:text-blue-600'>Home</NavLink>
                <NavLink to={"/services"} className='text-blue-900 hover:text-blue-600'>Services</NavLink>
                <NavLink to={"/blog"} className='text-blue-900 hover:text-blue-600'>Blog</NavLink>
                {
                    user?.email && <>
                        <NavLink to={"/my-reviews"} className='text-blue-900 hover:text-blue-600'>My Reviews</NavLink>
                        <NavLink to={"/add-service"} className='text-blue-900 hover:text-blue-600'>Add Service</NavLink>
                    </>
                }
            </div>
            <div className='flex gap-x-2 items-center'>
                {
                    user?.uid
                    // && user?.photoURL
                    && <img src={user?.photoURL} alt="photoURL" className='w-9 h-9 rounded-full' title={user?.displayName} />
                }

                {
                    user?.uid
                        ?
                        <button onClick={logOutHandler} className="bg-blue-700 hover:bg-blue-600 px-3 py-1 rounded-md text-white">
                            Log Out
                        </button>
                        : <NavLink to={"/login"} className="bg-blue-700 hover:bg-blue-600 px-3 py-1 rounded-md text-white">Login</NavLink>
                }
                <button onClick={toggleHandler} className='block lg:hidden'>
                    {
                        toggle ? <FaBars></FaBars> : <GrClose></GrClose>
                    }
                </button>
            </div>
            {/* For Mobile Device */}

            <div className={`flex flex-col gap-y-5 font-bold lg:hidden fixed bg-blue-100 top-16 right-0 px-10 py-5 ${toggle ? 'hidden' : 'block'}`} onClick={toggleHandler}>
                <NavLink to={"/"} className='text-blue-900 hover:text-blue-600'>Home</NavLink>
                <NavLink to={"/services"} className='text-blue-900 hover:text-blue-600'>Services</NavLink>
                <NavLink to={"/blog"} className='text-blue-900 hover:text-blue-600'>Blog</NavLink>
                {
                    user?.email && <>
                        <NavLink to={"/my-reviews"} className='text-blue-900 hover:text-blue-600'>My Reviews</NavLink>
                        <NavLink to={"/add-service"} className='text-blue-900 hover:text-blue-600'>Add Service</NavLink>
                    </>
                }
            </div>
        </div>
    );
};

export default Header;
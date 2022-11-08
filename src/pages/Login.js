import React from 'react';
import {FaGoogle, FaFacebook} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl mt-28 mb-16 border bg-blue-100">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid" data-bitwarden-watching="1">

                    <div className="space-y-1 text-sm">
                        <label for="email" className="block">Email</label>
                        <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label for="password" className="block">Password</label>
                        <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md" />
                        <div className="flex justify-end text-xs cursor-pointer">
                            <p>Forgot Password?</p>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm bg-blue-700 text-white font-bold">Sign in</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <div className="flex justify-center">
                    <button title="Log in with Google" className="p-3 rounded-sm">
                        <FaGoogle></FaGoogle>
                    </button>
                    <button title="Log in with Facebook" className="p-3 rounded-sm">
                        <FaFacebook></FaFacebook>
                    </button>
                </div>
                <div className="text-sm text-center sm:px-6 dark:text-gray-800 flex gap-x-1 justify-center">
                    <span>Don't have an account?</span>
                    <NavLink to={"/registration"} className="text-blue-700 underline">Register</NavLink>
                </div>
            </div>
        </div >
    );
};

export default Login;
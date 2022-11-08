import React from 'react';
import {NavLink} from 'react-router-dom';

const Registration = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl mt-28 mb-16 border bg-blue-100">
                <h1 className="text-2xl font-bold text-center">Register</h1>
                <form novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid" data-bitwarden-watching="1">

                    <div className="space-y-1 text-sm">
                        <label for="fullName" className="block">Full Name</label>
                        <input type="text" name="fullName" placeholder="Full Name" className="w-full px-4 py-3 rounded-md" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label for="photo" className="block">Photo URL</label>
                        <input type="text" name="photo" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label for="email" className="block">Email</label>
                        <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label for="password" className="block">Password</label>
                        <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label for="confirmPassword" className="block">Confirm Password</label>
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" className="w-full px-4 py-3 rounded-md" />
                    </div>

                    <button className="block w-full p-3 text-center rounded-sm bg-blue-700 text-white font-bold">Create an account</button>
                </form>
                <div className="text-sm text-center sm:px-6 dark:text-gray-800 flex gap-x-1 justify-center">
                    <span>Already have an account?</span>
                    <NavLink to={"/login"} className="text-blue-700 underline">Login</NavLink>
                </div>
            </div>
        </div >
    );
};

export default Registration;
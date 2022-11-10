import React, {useContext, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {AuthContext} from '../contexts/UserContext';
import useTitle from '../hooks/useTitle';

const Registration = () => {
    const [message, setMessage] = useState("");
    const {createUser, updateUser, logOut, setUser, sweetAlertFailed, sweetAlertSuccess} = useContext(AuthContext);
    useTitle("Registration");

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.fullName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then((userCredential) => {
                // const user = userCredential.user;
                updateUser({
                    displayName: fullName,
                    photoURL: photoURL
                }).then(() => {
                }).catch((error) => {
                    console.log(error.message);
                });

                logOut().then(() => {
                    setUser(null);
                }).catch((error) => {
                    console.log(error);
                });

                form.reset();
                setMessage("Successfully Created Account.");
                sweetAlertSuccess();
            })
            .catch((error) => {
                console.log(error);
                setMessage("This email already in use.");
                sweetAlertFailed();
            });
    };

    return (
        <div className='w-full flex justify-center'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl mt-28 mb-16 border bg-blue-100">
                <h1 className="text-2xl font-bold text-center">Register</h1>

                <form onSubmit={onSubmitHandler} className="space-y-6 ng-untouched ng-pristine ng-valid" data-bitwarden-watching="1">

                    <div className="space-y-1 text-sm">
                        <label htmlFor="fullName" className="block">Full Name</label>
                        <input type="text" name="fullName" placeholder="Full Name" className="w-full px-4 py-3 rounded-md" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="photoURL" className="block">Photo URL</label>
                        <input type="text" name="photoURL" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block">Email</label>
                        <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block">Password</label>
                        <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="confirmPassword" className="block">Confirm Password</label>
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" className="w-full px-4 py-3 rounded-md" />
                    </div>
                    <div>{message}</div>
                    <button type='submit' className="block w-full p-3 text-center rounded-sm bg-blue-700 text-white font-bold">Create an account</button>
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
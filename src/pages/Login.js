import React, {useContext, useState} from 'react';
import {FaGoogle, FaFacebook} from 'react-icons/fa';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import {AuthContext} from '../contexts/UserContext';
import useTitle from '../hooks/useTitle';

const Login = () => {
    useTitle("Login");
    const [message, setMessage] = useState("");
    const {signIn, signInWithGoogle, signInWithFacebook} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, {replace: true});
            }).catch((error) => {
                setMessage(error.message);
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
            }).catch((error) => {
                console.log(error);
            });
    };

    const handleFacebookSignIn = () => {
        signInWithFacebook()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
            }).catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className='w-full flex justify-center'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl mt-28 mb-16 border bg-blue-100">
                <h1 className="text-2xl font-bold text-center">Login</h1>

                <form onSubmit={onSubmitHandler} className="space-y-6 ng-untouched ng-pristine ng-valid" data-bitwarden-watching="1">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block">Email</label>
                        <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block">Password</label>
                        <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md" />
                        <div className="flex justify-end text-xs cursor-pointer">
                            <p>Forgot Password?</p>
                        </div>
                    </div>
                    <div className='text-red-600'>{message}</div>
                    <button type='submit' className="block w-full p-3 text-center rounded-sm bg-blue-700 text-white font-bold">Login</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <div className="flex justify-center">
                    <button onClick={handleGoogleSignIn} title="Log in with Google" className="p-3 rounded-sm">
                        <FaGoogle></FaGoogle>
                    </button>
                    <button onClick={handleFacebookSignIn} title="Log in with Facebook" className="p-3 rounded-sm">
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
import React, {useContext} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {AuthContext} from '../contexts/UserContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return <div className='w-screen h-screen flex justify-center items-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-blue-700"></div>
        </div>;
    }
    if(user && user.uid) {
        return children;
    }

    return <Navigate to={"/login"} state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;
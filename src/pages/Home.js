import React, {useContext} from 'react';
import {AuthContext} from '../contexts/UserContext';

const Home = () => {
    const {myName} = useContext(AuthContext);
    return (
        <div>
            <h2>{myName}</h2>
        </div>
    );
};

export default Home;
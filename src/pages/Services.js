import React, {useContext, useEffect} from 'react';
import {NavLink, useLoaderData, useLocation} from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import {PhotoProvider, PhotoView} from 'react-photo-view';
import {AuthContext} from '../contexts/UserContext';
import Banner from '../components/Banner';

const Services = () => {
    const services = useLoaderData();
    useTitle("Services");
    const location = useLocation();
    const {setPath} = useContext(AuthContext);

    useEffect(() => {
        setPath(location.pathname);
    }, [setPath, location.pathname]);

    return (
        <div className='mb-20'>
            {/* Banner Part */}
            {/* <Banner></Banner> */}

            {/* Services Part */}
            <div className='my-5'>
                <h2 className='text-5xl font-bold text-blue-700 text-center mt-28'>MY ALL SERVICES</h2>
            </div>
            <div className='w-[95vw] lg:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 my-10'>
                {
                    services.map(service => <div
                        key={service._id}
                        className="border">
                        <PhotoProvider>
                            <PhotoView src={service.image || service.thumbnail}>
                                <img src={service.thumbnail} alt="service_thumbnail" className='w-[500px] h-[300px]' />
                            </PhotoView>
                        </PhotoProvider>
                        <div className='p-5 flex flex-col justify-between'>
                            <div>
                                <h2 className='text-xl font-bold text-blue-800'>{service.title}</h2>
                                <small>{service.description.substring(0, 80)}...</small>
                                <p className='text-blue-800 font-bold my-5'>Price: ${service.price}</p>
                            </div>
                            <NavLink to={`/services/${service._id}`} className="bg-blue-700 hover:bg-blue-600 px-3 py-1 rounded-md text-white text-center">Service Details</NavLink>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;
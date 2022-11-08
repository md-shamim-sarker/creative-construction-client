import React from 'react';
import {NavLink, useLoaderData} from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import {PhotoProvider, PhotoView} from 'react-photo-view';

const Services = () => {
    const services = useLoaderData();
    useTitle("Services");
    return (
        <div>
            <section
                className="relative bg-[url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)] bg-cover bg-center bg-no-repeat">
                <div
                    className="absolute inset-0 bg-black/50 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/50"></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center sm:text-left text-white">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Let us find your

                            <strong className="block font-extrabold">
                                Forever Home.
                            </strong>
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                            tenetur fuga ducimus numquam ea!
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <NavLink to={"/"} className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">Get Started</NavLink>

                            <NavLink to={"/"} className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto">Learn More</NavLink>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Part */}
            <div>
                <h2 className='text-5xl font-bold text-blue-700 text-center mt-10'>MY ALL SERVICES</h2>
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
                                <p className='text-blue-800 font-bold'>Ratings: {service.rating}</p>
                                <p className='text-blue-800 font-bold mb-5'>Price: ${service.price}</p>
                            </div>
                            <NavLink to={`/service/${service._id}`} className="bg-blue-700 hover:bg-blue-600 px-3 py-1 rounded-md text-white text-center">Service Details</NavLink>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;
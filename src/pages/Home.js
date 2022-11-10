import React from 'react';
import {PhotoProvider, PhotoView} from 'react-photo-view';
import {NavLink, useLoaderData} from 'react-router-dom';
import Banner from '../components/Banner';
import useTitle from '../hooks/useTitle';

const Home = () => {
    const services = useLoaderData();
    useTitle("Home");

    return (
        <>
            {/* Banner Part */}
            <Banner></Banner>

            {/* Services Part */}
            <div>
                <h2 className='text-5xl font-bold text-blue-700 text-center mt-10'>MY SERVICES</h2>
            </div>
            <div className='w-[95vw] lg:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 my-10'>
                {
                    services.map(service => <div
                        key={service._id}
                        className="border">
                        <PhotoProvider>
                            <PhotoView src={service.image || service.thumbnail}>
                                <img src={service.thumbnail} alt="service_thumbnail" className='w-full lg:w-[500px] h-[300px]' />
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
            <div className='flex justify-center mb-10'>
                <NavLink to={"/services"} className="bg-blue-700 hover:bg-blue-600 px-3 py-1 rounded-md text-white text-center mb-10 mt-5">See All Services</NavLink>
            </div>

            {/* Hero Part */}
            <div className='w-4/5 h-auto mx-auto flex flex-col lg:flex-row gap-10 bg-blue-100 p-4'>
                <div className='w-full lg:w-1/2'>
                    <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="hero_image" className='h-full' />
                </div>
                <div className='h-full w-full lg:w-1/2 flex flex-col justify-center'>
                    <h2 className='text-4xl lg:text-5xl font-bold text-blue-700 text-center my-10'>Civil engineering</h2>
                    <p>Civil engineering is a professional engineering discipline that deals with the design, construction, and maintenance of the physical and naturally built environment, including public works such as roads, bridges, canals, dams, airports, sewage systems, pipelines, structural components of buildings, and railways</p>
                </div>
            </div>

            {/* Testimonial Part */}
            <section className="">
                <div className="container flex flex-col items-center mx-auto md:p-10 md:px-12">
                    <h1 className='text-3xl lg:text-5xl font-bold text-blue-700 text-center mt-32 lg:mt-16'>What my customers are saying about me</h1>
                </div>
                <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-3 mb-16">
                    {/* Testimonial 1 */}
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg border border-blue-300 rounded-lg">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12">
                            <p className="relative px-6 py-1 text-lg italic text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-blue-700">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>
                                Civil engineering is traditionally broken into a number of sub-disciplines. It is considered the second-oldest engineering discipline after military engineering.
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-blue-700">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-blue-600 text-white">
                            <img src="https://cdn.factcheck.org/UploadedFiles/joe_biden_houston-200x200.jpg" alt="..." className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
                            <p className="text-xl font-semibold leading-tight">Joe Biden</p>
                            <p className="text-sm uppercase">President, USA</p>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg border border-blue-300 rounded-lg">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12">
                            <p className="relative px-6 py-1 text-lg italic text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-blue-700">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>Civil engineering is traditionally broken into a number of sub-disciplines. It is considered the second-oldest engineering discipline after military engineering
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-blue-700">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-blue-600 text-white">
                            <img src="https://media.vanityfair.com/photos/57b36c6751d697ed23e725af/1:1/w_200,h_200,c_limit/t-donald-trump-proust.jpg" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
                            <p className="text-xl font-semibold leading-tight">Donald Trump</p>
                            <p className="text-sm uppercase">Ex-President, USA</p>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg border border-blue-300 rounded-lg">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12">
                            <p className="relative px-6 py-1 text-lg italic text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-blue-700">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>Civil engineering is traditionally broken into a number of sub-disciplines. It is considered the second-oldest engineering discipline after military engineering
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-blue-700">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-blue-600 text-white">
                            <img src="https://static.gigwise.com/artists/Image/200barack-.jpg" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
                            <p className="text-xl font-semibold leading-tight">Barak Obama</p>
                            <p className="text-sm uppercase">Ex-President, USA</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
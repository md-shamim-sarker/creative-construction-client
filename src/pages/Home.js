import React from 'react';
import {NavLink, useLoaderData} from 'react-router-dom';
import Banner from '../components/Banner';

const Home = () => {
    const services = useLoaderData();
    // const {_id, title, thumbnail, price, description, rating} = services;
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
                        <img src={service.thumbnail} alt="service_thumbnail" className='w-full' />
                        <div className='p-5 flex flex-col justify-between'>
                            <div>
                                <h2 className='text-xl font-bold text-blue-800'>{service.title}</h2>
                                <small>{service.description.substring(0, 100)}...</small>
                                <p className='text-blue-800 font-bold'>Ratings: {service.rating}</p>
                                <p className='text-blue-800 font-bold'>Price: ${service.price}</p>
                            </div>
                            <NavLink to={"/"} className="bg-blue-700 hover:bg-blue-600 px-3 py-1 rounded-md text-white text-center">Service Details</NavLink>
                        </div>
                    </div>)
                }
            </div>
            <div className='flex justify-center mb-10'>
                <NavLink to={"/"} className="bg-blue-700 hover:bg-blue-600 px-3 py-1 rounded-md text-white text-center">See More</NavLink>
            </div>

            {/* Hero Part */}
            <div className='w-4/5 h-[70vh] mx-auto flex flex-col lg:flex-row gap-10 mb-10'>
                <div className='w-full lg:w-1/2'>
                    <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="hero_image" className='h-full' />
                </div>
                <div className='h-full w-full lg:w-1/2 flex flex-col justify-center'>
                    <h2 className='text-5xl font-bold text-blue-700 text-center my-10'>This is heading</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo possimus ab veritatis odio eum quam repellat officia. Facilis quod impedit, consectetur harum aut quia ullam? Dolor enim at excepturi dolore explicabo illo velit, soluta eveniet quia deleniti, quas officia doloribus quisquam, voluptas tempora nemo fuga.</p>
                </div>
            </div>

            {/* Testimonial Part */}
            <section className="my-8">
                <div className="container flex flex-col items-center mx-auto md:p-10 md:px-12">
                    <h1 className='text-5xl font-bold text-blue-700 text-center mt-10'>What my customers are saying about me</h1>
                </div>
                <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-3">
                    {/* Testimonial 1 */}
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12">
                            <p className="relative px-6 py-1 text-lg italic text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-blue-700">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-blue-700">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-blue-600 text-white">
                            <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
                            <p className="text-xl font-semibold leading-tight">Distinctio Animi</p>
                            <p className="text-sm uppercase">Aliquam illum</p>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12">
                            <p className="relative px-6 py-1 text-lg italic text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-blue-700">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-blue-700">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-blue-600 text-white">
                            <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
                            <p className="text-xl font-semibold leading-tight">Distinctio Animi</p>
                            <p className="text-sm uppercase">Aliquam illum</p>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12">
                            <p className="relative px-6 py-1 text-lg italic text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-blue-700">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-blue-700">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-blue-600 text-white">
                            <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
                            <p className="text-xl font-semibold leading-tight">Distinctio Animi</p>
                            <p className="text-sm uppercase">Aliquam illum</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
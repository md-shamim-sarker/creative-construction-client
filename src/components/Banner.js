import React from 'react';
import {NavLink} from 'react-router-dom';

const Banner = () => {
    return (
        <section
            className="relative bg-[url(https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)] bg-cover bg-center bg-no-repeat">
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
                        Creative Construction Provide The Most Professional and Long Lasting Services.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <NavLink to={"/services"} className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">Get Started</NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../assets/logo.jpg';
import {FaGoogle, FaFacebook, FaGithub} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="px-4 divide-y bg-blue-100">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <NavLink to={"/"} className="flex justify-center space-x-3 lg:justify-start">
                        <div className="flex items-center justify-center">
                            <img src={logo} alt="" className='w-16 h-16 rounded-full' />
                        </div>
                        <span className="self-center text-2xl font-semibold text-blue-700">Creative Construction</span>
                    </NavLink>

                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase text-blue-700 font-bold">Product</h3>
                        <ul className="space-y-1">
                            <li>
                                <NavLink to={"/"}>Features</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/"}>Integrations</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/"}>Pricing</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/"}>FAQ</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase text-blue-700 font-bold">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <NavLink to={"/"}>Privacy</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/"}>Terms of Service</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase text-blue-700 font-bold">Developers</h3>
                        <ul className="space-y-1">
                            <li>
                                <NavLink to={"/"}>Public API</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/"}>Documentation</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/"}>Guides</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase text-blue-700 font-bold">Social media</div>
                        <div className="flex justify-start space-x-3">
                            <NavLink to={"/"}>
                                <FaGoogle></FaGoogle>
                            </NavLink>
                            <NavLink to={"/"}>
                                <FaFacebook></FaFacebook>
                            </NavLink>
                            <NavLink to={"/"}>
                                <FaGithub></FaGithub>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center text-blue-700">© 2022 Creative Construction. All rights reserved.</div>
        </footer>
    );
};

export default Footer;
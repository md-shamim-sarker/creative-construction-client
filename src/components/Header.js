import {Avatar, Dropdown, Navbar} from 'flowbite-react';
import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Header = () => {
    return (
        <Navbar fluid={true} rounded={true} className="border">
            <Navbar>
                <img src={logo} className="mr-3 w-12 h-12 border border-blue-800" alt="site_logo" />
                <div className='flex flex-col justify-center'>
                    <span className='text-xl font-bold text-blue-800'>Creative</span>
                    <span className='text-md font-bold'>Construction</span>
                </div>
            </Navbar>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                >
                    <Dropdown.Header>
                        <span className="block text-sm">
                            Bonnie Green
                        </span>
                        <span className="block truncate text-sm font-medium">
                            name@flowbite.com
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                        Dashboard
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Settings
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Earnings
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        Sign out
                    </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar><NavLink to={"/"}>Home</NavLink></Navbar>
                <Navbar><NavLink to={"/services"}>Services</NavLink></Navbar>
                <Navbar><NavLink to={"/blog"}>Blog</NavLink></Navbar>
            </Navbar.Collapse>
        </Navbar>

    );
};

export default Header;
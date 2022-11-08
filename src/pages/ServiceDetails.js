import React from 'react';
import {NavLink, useLoaderData} from 'react-router-dom';
import {FaStar} from 'react-icons/fa';
import useTitle from '../hooks/useTitle';

const ServiceDetails = () => {
    const {title, image, description, fields, price, rating} = useLoaderData();
    useTitle("Service Details");
    return (
        <div className='w-4/5 mx-auto mt-20 mb-18'>
            <h2 className='text-4xl font-bold text-center mb-5 text-blue-700'>{title}</h2>
            <img src={image} alt="service_banner" className='w-[1366px] h-[500px]' />
            <div className='w-full flex justify-between'>
                <h2 className='text-xl font-bold mb-5 text-blue-700 my-5'>Estimated Price: ${price}</h2>
                <h2 className='text-lg font-bold mb-5 text-orange-500 my-5 flex items-center gap-x-2'>
                    <span>Ratings: {rating}</span>
                    <FaStar></FaStar>
                </h2>
            </div>
            <h2 className='text-2xl font-bold mb-5 text-blue-700 my-5'>{title} DETAILS</h2>
            <p>{description}</p>
            <h2 className='text-2xl font-bold mb-5 text-blue-700 my-5'>SERVICE AREA</h2>
            {
                fields?.map((field, index) => <li key={index} className="ml-10">{field}</li>)
            }
            <h2 className='text-3xl font-bold text-center mb-5 text-blue-700 my-5'>REVIEWS</h2>
            <div>
                <div className='flex items-center gap-x-2 w-4/5 mx-auto'>
                    <img src="https://avatarfiles.alphacoders.com/837/thumb-83705.png" alt="profile_pic" className='w-10 h-10 rounded-full' />
                    <h2 className='text-xl font-bold'>Profile Name</h2>
                </div>
                <p className='w-4/5 mx-auto my-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, blanditiis! Facere esse aperiam soluta dolorum amet laboriosam odit tempore. Illo, quia? Deserunt molestiae amet laudantium vel soluta cupiditate eos assumenda accusantium tempore? Perspiciatis voluptates expedita alias similique eligendi. Non at minus temporibus odio eos? Sequi neque ut, consequuntur numquam asperiores, quibusdam quo nobis harum soluta ratione reiciendis illo laborum? Cum eum magni rem sit. Eius quas ea laboriosam velit officia animi qui architecto ullam laudantium, quam pariatur et autem ratione mollitia libero quae nisi quasi aspernatur hic laborum saepe earum consequatur! Consequuntur est temporibus cupiditate numquam illo maxime, neque repellat.</p>
            </div>
            <div>
                <div className='flex items-center gap-x-2 w-4/5 mx-auto'>
                    <img src="https://avatarfiles.alphacoders.com/837/thumb-83705.png" alt="profile_pic" className='w-10 h-10 rounded-full' />
                    <h2 className='text-xl font-bold'>Profile Name</h2>
                </div>
                <p className='w-4/5 mx-auto my-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, blanditiis! Facere esse aperiam soluta dolorum amet laboriosam odit tempore. Illo, quia? Deserunt molestiae amet laudantium vel soluta cupiditate eos assumenda accusantium tempore? Perspiciatis voluptates expedita alias similique eligendi. Non at minus temporibus odio eos? Sequi neque ut, consequuntur numquam asperiores, quibusdam quo nobis harum soluta ratione reiciendis illo laborum? Cum eum magni rem sit. Eius quas ea laboriosam velit officia animi qui architecto ullam laudantium, quam pariatur et autem ratione mollitia libero quae nisi quasi aspernatur hic laborum saepe earum consequatur! Consequuntur est temporibus cupiditate numquam illo maxime, neque repellat.</p>
            </div>

            <div className='w-4/5 mx-auto flex gap-x-1 mb-10'>
                <NavLink to={"/login"} className="bg-blue-700 hover:bg-blue-600 px-3 py-2 rounded-md text-white">Write your own review</NavLink>
            </div>
        </div>
    );
};

export default ServiceDetails;
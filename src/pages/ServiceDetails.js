import React, {useContext, useEffect, useState} from 'react';
import {NavLink, useLoaderData, useLocation} from 'react-router-dom';
import {FaStar, FaUser} from 'react-icons/fa';
import useTitle from '../hooks/useTitle';
import {AuthContext} from '../contexts/UserContext';
import Swal from 'sweetalert2';

const ServiceDetails = () => {
    const location = useLocation();

    const [reviews, setReviews] = useState([]);
    const [render, setRender] = useState(false);
    const [avgRating, setAvgRating] = useState(0);
    const {user, sweetAlertFailed, setPath} = useContext(AuthContext);
    const {_id, title, image, description, fields, price} = useLoaderData();
    useTitle("Service Details");

    const sweetAlertAddReview = () => {
        Swal.fire(
            'Thank You!',
            'A Review Added Successfully!',
            'success'
        );
    };

    useEffect(() => {
        const url = `https://creative-construction-three.vercel.app/reviews/services/${_id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                const totalRatings = data.reduce((previous, current) => Number(previous) + Number(current.ratings), 0);
                const length = data.length;
                const serviceRatings = (totalRatings / length).toFixed(1);
                setAvgRating(serviceRatings);
            })
            .catch(err => console.log(err));

        setPath(location.pathname);
    }, [_id, render, location.pathname, setPath]);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const ratings = form.rating.value;
        const review = form.review.value;
        const serviceId = _id;
        const serviceTitle = title;
        const email = user.email;
        const reviewTime = Date();
        const photo = user.photoURL;
        const name = user.displayName;
        const reviewObj = {ratings, review, serviceId, email, reviewTime, photo, name, serviceTitle};
        fetch('https://creative-construction-three.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewObj)
        }).then(() => {
            sweetAlertAddReview();
            setRender(!render);
            form.reset();
        }).catch(err => {
            sweetAlertFailed();
            console.log(err);
        });
    };

    return (
        <div className='w-11/12 lg:w-4/5 mx-auto mt-20 mb-18'>
            <h2 className='text-4xl font-bold text-center mb-5 text-blue-700'>{title}</h2>
            <img src={image} alt="service_banner" className='w-full lg:w-[1366px] lg:h-[500px]' />
            <div className='w-full flex justify-between'>
                <h2 className='text-xl font-bold mb-5 text-blue-700 my-5'>Price: ${price}</h2>
                <h2 className='text-lg font-bold mb-5 text-orange-500 my-5 flex items-center gap-x-2'>
                    <span>Ratings: {avgRating > 0 ? avgRating : 0}</span>
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

            {
                reviews.map(review => <div key={review._id}>
                    <div className='flex items-center gap-x-2'>
                        {
                            review?.photo
                                ? <img src={review?.photo} alt="profile_pic" className='w-10 h-10 rounded-full' />
                                : <FaUser className='w-8 h-8 border bg-white text-black rounded-full' title={user?.displayName}></FaUser>

                        }
                        <div>
                            <h2 className='text-xl font-bold'>{review?.name}</h2>
                            <p className='flex items-center gap-x-2 flex-wrap text-xs'>
                                <span>
                                    Rating: {review?.ratings}
                                </span>
                                <span className=''>
                                    <FaStar className='text-orange-600'></FaStar>
                                </span>
                                <span>Date: {review?.reviewTime.slice(3, 24)}</span>
                            </p>
                        </div>
                    </div>
                    <p className='pl-12 mx-auto mt-3 mb-5'>{review?.review}</p>
                </div>)
            }

            <div className='w-4/5 mx-auto flex gap-x-1 mb-10'>
                <h2 className='w-full my-5 text-xl font-bold text-center'>
                    {
                        user?.uid
                            ? <span>
                                Please add your review
                            </span>
                            : <span>
                                If you want to add a review, please <NavLink to={"/login"} className='underline text-blue-700'>login</NavLink>
                            </span>
                    }

                </h2>
            </div>

            <div className={`w-4/5 mx-auto mb-10 ${user?.uid ? 'block' : 'hidden'}`}>
                <form onSubmit={onSubmitHandler}>
                    <select name="rating" className='block border'>
                        <option value="0">---Ratings---</option>
                        <option value="1">1 star</option>
                        <option value="2">2 star</option>
                        <option value="3">3 star</option>
                        <option value="4">4 star</option>
                        <option value="5">5 star</option>
                    </select>
                    <textarea name="review" className='border block w-full h-32 p-2 my-5' placeholder='Please, write a review...'></textarea>
                    <input type="submit" value="Submit" className="bg-blue-700 hover:bg-blue-600 px-3 py-2 rounded-md text-white" />
                </form>
            </div>
        </div>
    );
};

export default ServiceDetails;
import React, {useContext, useEffect, useState} from 'react';
import {FaUser} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';
import Swal from 'sweetalert2';
import {AuthContext} from '../contexts/UserContext';
import useTitle from '../hooks/useTitle';

const MyReviews = () => {
    useTitle("My Reviews");
    const {user} = useContext(AuthContext);
    const {displayName, photoURL, email} = user;
    const [reviews, setReviews] = useState([]);
    const [render, setRender] = useState(false);

    const deleteSuccess = () => {
        Swal.fire(
            'Deleted!',
            'A Review Delete Successfully!',
            'success'
        );
    };

    useEffect(() => {
        fetch(`https://creative-construction-three.vercel.app/reviews/services/email/${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                return res.json();
            })
            .then(data => {
                setReviews(data);
            })
            .catch(err => console.log(err));
    }, [render, user?.email]);

    // Delete Review
    const handleDelete = review => {
        fetch(`https://creative-construction-three.vercel.app/reviews/${review._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(() => {
                const remainingReviews = reviews.filter(rev => rev._id !== review._id);
                setReviews(remainingReviews);
                setRender(render);
                deleteSuccess();
            });
    };

    return (
        <div className="w-4/5 mx-auto mt-32 mb-20">
            <div className='w-full flex flex-col items-center mb-5'>
                {
                    photoURL
                        ? <img src={photoURL} alt="user_photo" className='rounded-2xl w-40 h-40' />
                        : <FaUser className='border bg-white text-black rounded-2xl w-40 h-40' title={user?.displayName}></FaUser>
                }

                <h2 className='text-3xl font-bold'>{displayName}</h2>
                <p>Email: {email}</p>
            </div>
            <div className='w-auto overflow-x-auto'>
                {
                    reviews.length > 0
                        ? <table className="w-full text-center divide-y-2 divide-gray-200 text-sm">
                            <thead>
                                <tr>
                                    <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                                        SL
                                    </th>
                                    <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                                        Service Name
                                    </th>
                                    <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                                        Ratings
                                    </th>
                                    <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                                        Review
                                    </th>
                                    <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                                        Date & Time
                                    </th>
                                    <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                                        Update
                                    </th>
                                    <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                                        Delete
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                {
                                    reviews.map((review, index) => <tr key={review?._id}>
                                        <td className="px-4 py-2 font-medium text-gray-900">{index + 1}</td>
                                        <td className="px-4 py-2 text-gray-700">{review?.serviceTitle}</td>
                                        <td className="px-4 py-2 text-gray-700">{review?.ratings}</td>
                                        <td className="px-4 py-2 text-gray-700">{review?.review.slice(0, 25)}</td>
                                        <td className="px-4 py-2 text-gray-700">{review?.reviewTime.slice(3, 24)}</td>
                                        <td className="px-4 py-2 text-gray-700">
                                            <NavLink to={`/update/${review?._id}`} className="bg-green-700 hover:bg-green-600 px-3 py-1 rounded-md text-white">Update</NavLink>
                                        </td>
                                        <td className="px-4 py-2 text-gray-700">
                                            <button onClick={() => handleDelete(review)} className="bg-red-700 hover:bg-red-600 px-3 py-1 rounded-md text-white">Delete</button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                        : <h2 className='text-2xl font-bold text-blue-700'>You Don't Have Any Review......</h2>
                }
            </div>
        </div>
    );
};

export default MyReviews;
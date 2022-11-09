import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../contexts/UserContext';
import useTitle from '../hooks/useTitle';

const MyReviews = () => {
    useTitle("My Reviews");
    const {user} = useContext(AuthContext);
    const {displayName, photoURL, email} = user;
    const [reviews, setReviews] = useState([]);
    const [render, setRender] = useState(false);

    useEffect(() => {
        const url = `http://localhost:5000/reviews/services/email/${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                console.log(data);
            })
            .catch(err => console.log(err));
    }, [render, user?.email]);

    // Delete Review
    const handleDelete = review => {
        fetch(`http://localhost:5000/reviews/${review._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(() => {
                const remainingReviews = reviews.filter(rev => rev._id !== review._id);
                setReviews(remainingReviews);
                setRender(render);
                console.log('A review is deleted successfully!!!');
            });
    };

    return (
        <div className="w-4/5 mx-auto mt-24 mb-16">
            <div className='w-full flex flex-col items-center mb-5'>
                <img src={photoURL} alt="user_photo" className='rounded-2xl' />
                <h2 className='text-3xl font-bold'>{displayName}</h2>
                <p>Email: {email}</p>
            </div>
            <div className='w-auto overflow-x-auto'>
                <table className="w-full text-center divide-y-2 divide-gray-200 text-sm">
                    <thead>
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                                SL
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                                Service Name
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
                                <td className="px-4 py-2 text-gray-700">Service Name</td>
                                <td className="px-4 py-2 text-gray-700">{review?.review.slice(0 - 25)}...</td>
                                <td className="px-4 py-2 text-gray-700">{review?.reviewTime.slice(3, 24)}</td>
                                <td className="px-4 py-2 text-gray-700">
                                    <button className="bg-green-700 hover:bg-green-600 px-3 py-1 rounded-md text-white">Update</button>
                                </td>
                                <td className="px-4 py-2 text-gray-700">
                                    <button onClick={() => handleDelete(review)} className="bg-red-700 hover:bg-red-600 px-3 py-1 rounded-md text-white">Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;
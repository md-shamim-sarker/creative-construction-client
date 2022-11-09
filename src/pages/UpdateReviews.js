import React from 'react';
import {useLoaderData, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateReviews = () => {
    const prevReview = useLoaderData();
    const navigate = useNavigate();

    const updateSuccess = () => {
        Swal.fire(
            'Updated!',
            'A Review Updated Successfully!',
            'success'
        );
    };

    const onSubmitHandlerUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const ratings = form.rating.value;
        const review = form.review.value;
        const updatedReview = {ratings, review};
        console.log(updatedReview);
        fetch(`http://localhost:5000/reviews/${prevReview._id}`, {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(updatedReview)
        }).then(() => {
            updateSuccess();
            navigate(`/my-reviews`);
        }).catch(err => console.log(err));
    };

    return (
        <div className={`w-4/5 mx-auto mb-16 mt-28`}>
            <h2 className='text-4xl font-bold text-center mb-10'>Update Review</h2>
            <form onSubmit={onSubmitHandlerUpdate}>
                <select name="rating" className='block border' defaultValue={prevReview?.ratings}>
                    <option value="0">---Ratings---</option>
                    <option value="1">1 star</option>
                    <option value="2">2 star</option>
                    <option value="3">3 star</option>
                    <option value="4">4 star</option>
                    <option value="5">5 star</option>
                </select>
                <textarea name="review" className='border block w-full h-32 p-2 my-5' defaultValue={prevReview?.review}></textarea>
                <input type="submit" value="Update Review" className="bg-blue-700 hover:bg-blue-600 px-3 py-2 rounded-md text-white" />
            </form>
        </div>
    );
};

export default UpdateReviews;
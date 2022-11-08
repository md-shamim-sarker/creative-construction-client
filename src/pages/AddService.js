import React, {useContext} from 'react';
import {AuthContext} from '../contexts/UserContext';
import useTitle from '../hooks/useTitle';

const AddService = () => {
    useTitle("Add Service");
    const {sweetAlertSuccess, sweetAlertFailed} = useContext(AuthContext);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const thumbnail = form.thumbnail.value;
        const image = form.image.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = 0;
        const service = {title, thumbnail, image, price, description, rating};
        console.log(service);

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        }).then(() => {
            console.log('Service added successfully!!');
            sweetAlertSuccess();
            form.reset();
        }).catch(err => {
            sweetAlertFailed();
            console.log(err);
        });
    };

    return (
        <div className='w-full flex justify-center'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl mt-28 mb-16 border bg-blue-100">
                <h1 className="text-2xl font-bold text-center">Add New Service</h1>

                <form onSubmit={onSubmitHandler} className="space-y-6 ng-untouched ng-pristine ng-valid" data-bitwarden-watching="1">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="title" className="block">
                            Service Title <span className='text-red-700'>*</span>
                        </label>
                        <input type="text" name="title" placeholder="Service Title" className="w-full px-4 py-3 rounded-md" required />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="thumbnail" className="block">Thumbnail URL (Recommended Size: 500x500px)<span className='text-red-700'>*</span></label>
                        <input type="text" name="thumbnail" placeholder="Thumbnail URL" className="w-full px-4 py-3 rounded-md" required />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="image" className="block">Image URL (Recommended Size: 1366x500px)<span className='text-red-700'>*</span></label>
                        <input type="text" name="image" placeholder="Image URL" className="w-full px-4 py-3 rounded-md" required />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="price" className="block">Service Price<span className='text-red-700'>*</span></label>
                        <input type="number" name="price" placeholder="Service Price" className="w-full px-4 py-3 rounded-md" required />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="description" className="block">Description (Recommended Characteres: Upto 300)<span className='text-red-700'>*</span></label>
                        <textarea name="description" cols="30" rows="10" className="w-full px-4 py-3 rounded-md" placeholder="Service Description" required></textarea>
                    </div>
                    <button type='submit' className="block w-full p-3 text-center rounded-sm bg-blue-700 text-white font-bold">Add Service</button>
                </form>
            </div>
        </div >
    );
};

export default AddService;
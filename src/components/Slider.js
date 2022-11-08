import {Carousel} from 'flowbite-react';
import React from 'react';
import carousel1 from '../assets/carousel/carousel1.jpg';
import carousel2 from '../assets/carousel/carousel2.jpg';
import carousel3 from '../assets/carousel/carousel3.jpg';
import carousel4 from '../assets/carousel/carousel4.jpg';

const Slider = () => {
    return (
        <div className="h-[70vh] ">
            <Carousel slideInterval={5000}>
                <div className='w-full h-full text-white relative'>
                    <img src={carousel1} alt="carousel_image" className='absolute z-10 ' />
                    <div className='w-full h-full flex flex-col justify-center items-center absolute z-20'>
                        <div className='w-1/2 text-center'>
                            <div className='text-4xl font-bold mb-5'>Creative Construction</div>
                            <div className='text-xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus excepturi aut, nobis ad eos nemo ab sed dicta veritatis, a, eveniet sequi aperiam est veniam.</div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full text-white relative'>
                    <img src={carousel2} alt="carousel_image" className='absolute z-10 ' />
                    <div className='w-full h-full flex flex-col justify-center items-center absolute z-20'>
                        <div className='w-1/2 text-center'>
                            <div className='text-4xl font-bold mb-5'>Creative Construction</div>
                            <div className='text-xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus excepturi aut, nobis ad eos nemo ab sed dicta veritatis, a, eveniet sequi aperiam est veniam.</div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full text-white relative'>
                    <img src={carousel3} alt="carousel_image" className='absolute z-10 ' />
                    <div className='w-full h-full flex flex-col justify-center items-center absolute z-20'>
                        <div className='w-1/2 text-center'>
                            <div className='text-4xl font-bold mb-5'>Creative Construction</div>
                            <div className='text-xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus excepturi aut, nobis ad eos nemo ab sed dicta veritatis, a, eveniet sequi aperiam est veniam.</div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full text-white relative'>
                    <img src={carousel4} alt="carousel_image" className='absolute z-10 ' />
                    <div className='w-full h-full flex flex-col justify-center items-center absolute z-20'>
                        <div className='w-1/2 text-center'>
                            <div className='text-4xl font-bold mb-5'>Creative Construction</div>
                            <div className='text-xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus excepturi aut, nobis ad eos nemo ab sed dicta veritatis, a, eveniet sequi aperiam est veniam.</div>
                        </div>
                    </div>
                </div>

            </Carousel>
        </div>
    );
};

export default Slider;
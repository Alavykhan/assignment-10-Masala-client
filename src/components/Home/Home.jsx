import React from 'react';
import './Home.css';
const Home = () => {
    return (
        <div>
            {/* hero section */}
            <div className="bg">
                <div className="image-overlay flex flex-col gap-3 md:gap-8  justify-center items-center">
                <h1 className=' text-white md:text-6xl text-2xl font-bold'>Mouth Watering Indian Cuisine</h1>
                <button className='btn font-bold md:px-10 md:text-lg'>Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
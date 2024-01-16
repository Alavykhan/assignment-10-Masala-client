import React from 'react';
import './Home.css';
import Marquee from "react-fast-marquee";
import Chefs from '../Chefs/Chefs';
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
            <Marquee className='text-black font-bold uppercase text-6xl my-6 py-4'>
            Indian Best food Recipes 🍛
            </Marquee>
            <Chefs/>
        </div>
    );
};

export default Home;
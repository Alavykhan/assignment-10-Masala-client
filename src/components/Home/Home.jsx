import React from 'react';
import './Home.css';
import Marquee from "react-fast-marquee";
import Chefs from '../Chefs/Chefs';
import IndianChef from '../IndianChef/IndianChef';
import MasalaSwiper from '../MasalaSwiper/MasalaSwiper';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            {/* hero section */}
            <div className="bg">
                <div className="image-overlay flex flex-col gap-3 md:gap-8  justify-center items-center">
                <h1 className=' text-white md:text-6xl text-xl font-bold'>Mouth Watering Indian Cuisine Recipes</h1>
               <Link to='/chef'><button className='btn font-bold md:px-10 md:text-lg'>Explore</button></Link>
                </div>
            </div>
            <Marquee className='text-white font-bold bg-black uppercase text-6xl py-4'>
            Indian Best food Recipes 🍛
            </Marquee>
            <IndianChef/>
            <Chefs/>
            <MasalaSwiper/>
        </div>
    );
};

export default Home;
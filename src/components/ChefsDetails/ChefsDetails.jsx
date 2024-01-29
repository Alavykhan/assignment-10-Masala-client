import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { HandThumbUpIcon } from '@heroicons/react/24/solid'
import { FaHeart } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

const ChefsDetails = () => {
    const [isClicked, setIsClicked] = useState(false);
    const chefsDetails = useLoaderData();
    const {name, coverImg, bio, likes, recipes, experience, recipe1, recipe2, recipe3}= chefsDetails;
    toast.success('Your Favorite Recipe');

    const handleDisable = ()=>{
        setIsClicked(true)
    }

    return (
        <div>
            <img src={coverImg} alt="" />
            <div className="hero bg-base-100 mt-6">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                    <h1 className="md:text-4xl text-2xl font-bold">Name: {name}</h1>
                    <p className="py-6 font-semibold">Bio: {bio}</p>
                    <p className="text-xl font-semibold">Experiences: {experience}</p>
                    <p className="text-xl font-semibold">Recipes: {recipes}</p>
                    <p className="text-2xl flex justify-center items-center gap-2 font-semibold"><HandThumbUpIcon className="h-6 w-6 text-red-700"/> {likes}</p>
                    </div>
                </div>
                </div>

                {/* Carts */}
                <h2 className='md:px-20 px-5 md:text-5xl text-2xl font-bold'>Recipes 👨‍🍳</h2>
               <div className='my-10 md:flex flex-row gap-5 px-5 '>
               <div className="card md:w-1/3 bg-base-100 shadow-xl mb-5">
                <figure><img src={recipe1.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe1.name1}</h2>
                    <p><span className='font-bold'>Ingredients:</span> {recipe1.ingredients}</p>
                    <p><span className='font-bold'>Recipe:</span> {recipe1.recipe}</p>
                    <div className="card-actions justify-end">
                    <button onClick={handleDisable} className='text-red-600' disabled={isClicked}><FaHeart /> <Toaster
                    position="top-center"
                    reverseOrder={true}
                    /></button>
                    </div>
                </div>
                </div>

                {/* cart-2  */}
                <div className="card md:w-1/3 bg-base-100 shadow-xl">
                <figure><img src={recipe2.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe2.name1}</h2>
                    <p><span className='font-bold'>Ingredients:</span> {recipe2.ingredients}</p>
                    <p><span className='font-bold'>Recipe:</span> {recipe2.recipe}</p>
                    <div className="card-actions justify-end">
                    <button onClick={handleDisable} className='text-red-600' disabled={isClicked}><FaHeart /></button>
                    </div>
                </div>
                </div>

                {/* cart-3  */}

                <div className="card md:w-1/3 bg-base-100 shadow-xl">
                <figure><img src={recipe3.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe3.name1}</h2>
                    <p><span className='font-bold'>Ingredients:</span> {recipe3.ingredients}</p>
                    <p><span className='font-bold'>Recipe:</span> {recipe3.recipe}</p>
                    <div className="card-actions justify-end">
                    <button onClick={handleDisable} className='text-red-600' disabled={isClicked}><FaHeart /></button>
                    </div>
                </div>
                </div>

               </div>
         
        </div>
    );
};

export default ChefsDetails;
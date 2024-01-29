import React from 'react';
import { HandThumbUpIcon } from '@heroicons/react/24/solid'
import Recipes from '../Recipes/Recipes';
import { Link } from 'react-router-dom';

const ChefsData = ({chef}) => {
    const {name, id, img, experience, recipes, likes} = chef
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mb-20">
            <figure><img src={img} alt="chef-img" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{name}</h2>
                <p className='font-semibold'>Experience: {experience}</p>
                <p className='font-semibold'>Numbers of Recipes: {recipes}</p>
                <div className="card-actions flex justify-between items-center">
                <div><Link to={`/chefs/${id}`}><button className="btn btn-neutral">View Recipes</button></Link></div>
                <div className='flex'><HandThumbUpIcon className="h-6 w-6 text-red-700"/><p>{likes}</p></div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ChefsData;
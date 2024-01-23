import React from 'react';

const Recipes = ({recipe}) => {
    const {name, ingredients} =recipe;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Recipes;
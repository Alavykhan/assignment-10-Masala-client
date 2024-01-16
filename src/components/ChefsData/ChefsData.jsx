import React from 'react';

const ChefsData = ({chef}) => {
    const {name, id} = chef
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default ChefsData;
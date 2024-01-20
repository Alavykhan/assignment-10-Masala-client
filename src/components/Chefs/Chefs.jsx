import React, { useEffect, useState } from 'react';
import ChefsData from '../ChefsData/ChefsData';

const Chefs = () => {
    const [chefs, setChefs] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res=>res.json())
        .then(data=>setChefs(data))
    },[])
    return (
        <div>
                <h2 className='md:px-32 text-5xl font-bold'>Chefs 👨‍🍳</h2>
                <div className='md:px-32 mt-10 grid lg:grid-cols-3 md:grid-cols-2'>
                {
                    chefs.map(chef=><ChefsData
                    key={chef.id}
                    chef={chef}></ChefsData>)
                }
                </div>
           
        </div>
    );
};

export default Chefs;
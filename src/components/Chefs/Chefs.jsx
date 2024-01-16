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
                <h2>Chefs</h2>
                {
                    chefs.map(chef=><ChefsData
                    key={chef.id}
                    chef={chef}></ChefsData>)
                }
           
        </div>
    );
};

export default Chefs;
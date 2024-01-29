import React from 'react';
import chefPhoto from '../../assets/img/chef-group.webp';
import { Link } from 'react-router-dom';
const IndianChef = () => {
    return (
        <div className=' py-10'>
            <div className='grid md:grid-cols-2 items-center'>
                <div>
                <img className='' src={chefPhoto} alt="" />
                </div>
                <div className='bg-gray-100 md:py-52 py-4'>
                   <div className='text-center bg-gray-100 md:px-32'>
                   <p c>Explore the fascinating world of India’s top chefs, where innovation meets tradition and each mouthful reveals a tale of passion, artistry, and the diverse embroidery of Indian cuisine.</p>
                    <Link to='/chef'><button className="btn btn-outline mt-6">Explore</button></Link>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default IndianChef;
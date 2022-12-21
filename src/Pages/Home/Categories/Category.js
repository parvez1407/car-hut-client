import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { cateImg, name, id } = category;
    return (
        <div className='card text-white p-6 md:card-side shadow-xl bg-gray-50' data-aos="fade-up" data-aos-duration="2000">
            <figure>
                <img src={cateImg} alt="car-category" className='w-28 h-28 rounded-full' />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl mb-4 text-purple-900">{name}</h2>
                <Link to={`/category/${id}`}><button className='block px-5 text-center rounded-md dark:text-gray-200 bg-indigo-800  hover:bg-purple-900'>See All</button></Link>
            </div>
        </div>
    );
};

export default Category;
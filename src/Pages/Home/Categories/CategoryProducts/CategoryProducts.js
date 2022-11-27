import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import CategoryProduct from './CategoryProduct';

const CategoryProducts = () => {
    const products = useLoaderData();
    const [bookProduct, setBookProduct] = useState(null);
    return (
        <section>
            <h1 className='text-4xl text-center my-5 font-bold'>Pick Your Desired <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500'>{products[0].category_name}</span> Car</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <CategoryProduct
                        key={product._id}
                        product={product}
                        setBookProduct={setBookProduct}
                    ></CategoryProduct>)
                }
            </div>
            {
                bookProduct &&
                <BookingModal
                    bookProduct={bookProduct}
                    setBookProduct={setBookProduct}
                ></BookingModal>
            }
        </section>
    );
};

export default CategoryProducts;
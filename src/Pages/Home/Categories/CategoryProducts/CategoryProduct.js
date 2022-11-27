import React from 'react';

const CategoryProduct = ({ product, setBookProduct }) => {
    const { productName, buyingPrice, buyingYear, condition, description, location, phnNumber, postedDate, productImg, sealingPrice, yearsOfUse, sellerName } = product;
    return (
        <div className="max-w-md rounded-sm shadow-md dark:bg-indigo-900 dark:text-gray-100">
            <div>
                <img src={productImg} alt="" className="object-cover object-center w-full rounded-t-sm h-72 dark:bg-gray-500" />
                <div className='flex justify-between px-4'>
                    <div className="mt-2 text-sm">
                        <span>Posted Date- {postedDate}</span>
                    </div>
                    <div className="mt-2 text-sm">
                        <p>Condition: {condition}</p>
                    </div>
                </div>
            </div>
            <div className="p-4 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-wide">{productName}</h2>
                    <p className="dark:text-gray-300 text-justify my-10">{description}</p>
                    <div className='flex justify-between'>
                        <p className='text-red-300 text-md font-bold'>Buying Price: ${buyingPrice}</p>
                        <p className='text-red-300 text-md font-bold'>Sealing Price: ${sealingPrice}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className='text-red-300 text-md font-bold'>Buying Year: {buyingYear}</p>
                        <p className='text-red-300 text-md font-bold'>Years of Use: {yearsOfUse} Year's</p>
                    </div>

                    <div className='flex justify-between'>
                        <p className='text-gray-50 text-md'>Location: {location}</p>
                        <p className='text-gray-50 text-md'>Phone: {phnNumber}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className='text-gray-50 text-md'>Seller Name: {sellerName} <span className='text-red-500'> X</span></p>
                        <button className='btn btn-sm bg-indigo-500'>Wishlist</button>
                    </div>

                </div>

                <label
                    onClick={() => setBookProduct(product)}
                    htmlFor="booking-modal"
                    className="block w-full p-3 text-center rounded-sm dark:text-gray-200 bg-gradient-to-r from-indigo-600 to-purple-600 hover:to-indigo-600 hover:from-purple-600 shadow-md shadow-purple-600"
                >Book Now</label>

            </div>
        </div>
    );
};

export default CategoryProduct;
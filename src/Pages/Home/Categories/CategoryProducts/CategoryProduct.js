import React from 'react';

const CategoryProduct = ({ product }) => {
    const { productName, buyingPrice, buyingYear, condition, description, location, phnNumber, postedDate, productImg, sealingPrice, yearsOfUse, sellerName } = product;
    return (
        <div className="max-w-md rounded-sm shadow-md dark:bg-indigo-900 dark:text-gray-100">
            <div>
                <img src={productImg} alt="" className="object-cover object-center w-full rounded-t-sm h-72 dark:bg-gray-500" />
                <div className="ml-5 mt-2 text-sm">
                    <span>Posted Date- {postedDate}</span>
                </div>
            </div>
            <div className="flex flex-col justify-between p-4 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-wide">{'serviceName'}</h2>
                    <p className="dark:text-gray-300 text-justify">{'description'}
                    </p>
                    <div className='flex justify-between'>
                        <p className='text-red-300'>Ratings: {'rating'}</p>
                        <p className='text-red-300'>Service Cost: ${'cost'}</p>
                        <p className='text-red-300'>Approximate {'duration'} days</p>
                    </div>
                </div>
                <button type="button" className="block w-full p-3 text-center rounded-sm dark:text-gray-200 bg-gradient-to-r from-indigo-600 to-purple-600 hover:to-indigo-600 hover:from-purple-600 shadow-md shadow-purple-600">Book Now</button>

            </div>
        </div>
    );
};

export default CategoryProduct;
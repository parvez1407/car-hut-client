import React from 'react';

const WishCard = ({ wishProduct }) => {

    return (
        <div className="w-full rounded-md shadow-md dark:bg-indigo-900 dark:text-gray-100">
            <img src={wishProduct?.productImg} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold tracking-wide">{wishProduct?.productName}</h2>
                    <p className="dark:text-gray-100">Price: ${wishProduct?.sealingPrice}</p>
                    <p className="dark:text-gray-100">Seller Name: {wishProduct?.sellerName}</p>
                    <p className="dark:text-gray-100">Seller Phone: {wishProduct?.sellerPhone}</p>
                </div>
                <button type="button" className="block w-full p-3 text-center rounded-md dark:text-gray-200 bg-gradient-to-r from-indigo-600 to-purple-600 hover:to-indigo-600 hover:from-purple-600">Purchase</button>
            </div>
        </div>
    );
};

export default WishCard;
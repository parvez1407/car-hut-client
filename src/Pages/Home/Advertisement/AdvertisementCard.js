import React from 'react';

const AdvertisementCard = ({ promotion }) => {
    return (

        <>
            {!promotion.paid &&
                <div className="w-full dark:bg-gray-500 my-12 rounded-md" style={{ backgroundImage: `url(${promotion?.productImg})`, backgroundPosition: 'center', backgroundBlendMode: 'multiply', backgroundZize: 'cover', }} data-aos="fade-down" data-aos-duration="2000">
                    <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                        <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-100">{promotion.productName}</h1>
                        <p className="pt-2 pb-2 text-xl antialiased text-center dark:text-gray-100">${promotion.sealingPrice}</p>
                        <p className='pt-2 text-xl antialiased text-center dark:text-gray-100'>20% off!!! Get it Now</p>

                    </div>
                </div>
            }
        </>
    );
};

export default AdvertisementCard;
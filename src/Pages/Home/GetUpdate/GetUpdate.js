import React from 'react';
import update from '../../../assets/update.jpg'

const GetUpdate = () => {
    return (
        <div className="w-full dark:bg-indigo-600 rounded-md" style={{ backgroundImage: `url(${update})`, backgroundPosition: 'center', backgroundBlendMode: 'multiply', backgroundZize: 'cover', }} data-aos="fade-down" data-aos-duration="2000">
            <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-100 mb-5">Get Our Updates</h1>
                <div className="flex flex-row">
                    <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" data-temp-mail-org="0" />
                    <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-gradient-to-r from-primary to-secondary dark:text-gray-100 hover:from-secondary hover:to-primary">Subscribe</button>
                </div>
            </div>
        </div >
    );
};

export default GetUpdate;
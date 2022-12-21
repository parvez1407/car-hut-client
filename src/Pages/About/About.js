import React from 'react';
import { Link } from 'react-router-dom';


const About = () => {

    return (
        <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-50 dark:text-gray-100">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                <img src="https://newstimes180.com/wp-content/uploads/2021/12/Careful-About-When-Buying-A-Used-Car.jpg" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500 rounded-md" data-aos="zoom-in" data-aos-duration="1000" />
                <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-indigo-900" data-aos="zoom-in" data-aos-duration="2000">
                    <div className="space-y-2">
                        <Link to="" className="inline-block text-md font-semibold sm:text-xl">The best aspect of the second-hand car market in Bangladesh is that people can have access to certified used cars at low prices as cheap second-hand cars are available throughout Bangladesh. There are also facilities to buy used cars online in Bangladesh. car-hut.com is the one-stop solution if you want to buy used cars online in Bangladesh as you can get competitive prices for models of your choice.</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
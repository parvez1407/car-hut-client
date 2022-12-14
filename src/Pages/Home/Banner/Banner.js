import React from 'react';
// import banner from '../../../assets/banner.png'
import Lottie from "lottie-react";
import car from "../../../assets/Car.json";

const Banner = () => {
    return (
        <section className=" dark:text-gray-400">
            <div className="container px-6 py-16 mx-auto">
                <div className="items-center lg:flex">
                    <div className="w-full lg:w-1/2" data-aos="zoom-in" data-aos-duration="500">
                        <div className="lg:max-w-lg">
                            <h1 className="lg:text-6xl font-bold leading-none text-3xl">Welcome to
                                <span className="text-indigo-500"> Car Hut</span> !!!
                            </h1>
                            <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-purple-700 lg:text-3xl">Best Place To Choose Your Car!!!</h1>

                            <p className="mt-2 text-gray-600 dark:text-gray-400">The best aspect of the second-hand car market in Bangladesh is that people can have access to certified used cars at low prices as cheap second-hand cars are available throughout Bangladesh..</p>

                            <button className="rounded-md tracking-wider px-6 py-2.5 mt-6 text-sm text-white uppercase transition-colors duration-300 transform bg-gradient-to-r from-indigo-600 to-purple-600 hover:to-indigo-600 hover:from-purple-600">Shop Now</button>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        {/* <img className="w-full h-full lg:max-w-2xl" src={banner} alt="Catalogue-pana.svg" /> */}
                        <Lottie animationData={car} loop={true} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
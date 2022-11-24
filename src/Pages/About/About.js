import React from 'react';
import { Link } from 'react-router-dom';


const About = () => {

    return (
        <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-50 dark:text-gray-100">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                <img src="https://newstimes180.com/wp-content/uploads/2021/12/Careful-About-When-Buying-A-Used-Car.jpg" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500 rounded-md" />
                <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
                    <div className="space-y-2">
                        <Link to="" className="inline-block text-2xl font-semibold sm:text-3xl">The Best Activewear from the Nordstrom Anniversary Sale</Link>
                        <p className="text-xs dark:text-gray-400">By
                            <Link to="" className="text-xs hover:underline">Leroy Jenkins</Link>
                        </p>
                    </div>
                    <div className="dark:text-gray-100">
                        <p>Insert the actual text content here...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
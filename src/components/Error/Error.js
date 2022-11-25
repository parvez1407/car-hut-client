import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../assets/not_found.svg'

const Error = () => {
    return (
        <section className="flex items-center h-screen sm:p-16 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                <img className='w-screen' src={notfound} alt="" />
                <p className="text-5xl text-red-500 font-bold">Page Not Found</p>
                <Link rel="noopener noreferrer" to="/" className="px-8 py-3 font-semibold rounded dark:bg-indigo-700 dark:text-gray-200">Back to homepage</Link>
            </div>
        </section>
    );
};

export default Error;
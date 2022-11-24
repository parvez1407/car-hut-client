import React from 'react';

const Loader = () => {
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
            </div>
        </div>
    );
};

export default Loader;
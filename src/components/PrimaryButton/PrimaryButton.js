import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="btn bg-gradient-to-r from-primary to-secondary border-0 text-white hover:from-secondary hover:to-primary">{children}</button>
    );
};

export default PrimaryButton;
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {
    const booking = useLoaderData();
    console.log('booking data: ', booking);
    return (
        <div>
            <h1 className='text-3xl text-indigo-500 font-bold my-6 text-center'>Payment for- <span className='text-purple-600'> '{booking?.productName}'</span></h1>
            <p className='text-lg text-center'>Please Pay $ <span className='font-bold text-indigo-600'>{booking?.sealingPrice} </span> to complete your Purchase</p>
            <div className='w-1/2 my-12 mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
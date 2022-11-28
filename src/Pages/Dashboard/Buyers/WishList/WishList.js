import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';
import Loader from '../../../../context/Loader/Loader';
import WishCard from './WishCard';

const WishList = () => {
    const { user } = useContext(AuthContext);
    const { data: wishProducts = [], isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/wishlists/${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('carHut-token')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <h1 className='text-3xl text-indigo-500 font-bold my-6 text-center'>My Wishlist</h1>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    wishProducts.map(wishProduct => <WishCard
                        key={wishProduct._id}
                        wishProduct={wishProduct}
                    ></WishCard>)
                }
            </div>
        </div>
    );
};

export default WishList;
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../context/Loader/Loader';

const AllBuyers = () => {
    const { data: buyers, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/buyers');
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <h1 className='text-3xl text-indigo-500 font-bold my-6 text-center'>All Buyers</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            buyers?.map(buyer => <tr key={buyer._id}>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={buyer.userImg} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {buyer.name}
                                </td>
                                <td>{buyer.email}</td>
                                <th>
                                    <button className="btn border-0 btn-xs bg-red-500">Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllBuyers;
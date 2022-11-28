import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';
import Loader from '../../../context/Loader/Loader';

const AllSellers = () => {

    const { data: sellers = [], refetch, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('https://car-hut-server.vercel.app/sellers', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('carHut-token')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    const handleVerify = (seller) => {
        const verification = {
            email: seller.email
        }

        fetch('https://car-hut-server.vercel.app/verification', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('carHut-token')}`
            },
            body: JSON.stringify(verification)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin Successfully', { autoClose: 500 })
                    refetch();
                }
            })
    }


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to Delete?');
        if (proceed) {
            fetch(`https://car-hut-server.vercel.app/sellers/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('carHut-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        refetch()
                        toast.success('Data Successfully Deleted', { autoClose: 500 })
                    }
                })

        }
    }



    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <h1 className='text-3xl text-indigo-500 font-bold my-6 text-center'>All Sellers</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            sellers?.map(seller => <tr key={seller?._id}>

                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={seller?.userImg} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {seller?.name}
                                </td>
                                <td>{seller?.email}</td>
                                <th>
                                    {
                                        !seller?.verified && <button onClick={() => handleVerify(seller)} className="btn border-0 btn-xs bg-slate-500">Please Verify</button>
                                    }
                                    {
                                        seller?.verified && <span className='text-green-600'>Verified</span>
                                    }
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(seller?._id)} className="btn border-0 btn-xs bg-red-500">Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllSellers;
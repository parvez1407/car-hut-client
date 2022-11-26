import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';
import Loader from '../../../../context/Loader/Loader';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: myProducts, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproducts/${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <h1 className='text-3xl text-indigo-500 font-bold my-6 text-center'>My Products</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name of Product</th>
                            <th>Status</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            myProducts?.map(product => <tr key={product._id}>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={product?.productImg} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {product.productName}
                                </td>
                                <td>
                                    Available
                                </td>
                                <td>
                                    <button className="btn border-0 btn-xs bg-indigo-500">Advertise</button>
                                </td>
                                <td>
                                    <button className="btn border-0 btn-xs bg-red-500">Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyProducts;
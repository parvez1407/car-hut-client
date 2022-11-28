import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../context/AuthProvider';
import Loader from '../../../../context/Loader/Loader';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproducts/${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('carHut-token')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to Delete?');
        if (proceed) {
            fetch(`http://localhost:5000/products/${id}`, {
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
    const handleAdvertise = (product) => {
        const advertiseProduct = {
            productId: product._id,
            productName: product.productName,
            condition: product.condition,
            productImg: product.productImg,
            sealingPrice: product.sealingPrice,
            sellerName: product.sellerName,
            sellerEmail: product.sellerEmail
        }
        fetch('http://localhost:5000/promotions', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('carHut-token')}`
            },
            body: JSON.stringify(advertiseProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`${product.productName} successfully Advertised`, { autoClose: 500 })
                }
            })
    }


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
                            <th>Price</th>
                            <th>Status</th>
                            <th>Advertise</th>
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
                                    ${product.sealingPrice}
                                </td>
                                <td>
                                    {
                                        product.paid && <span className='font-bold text-red-500'>Sold Out</span>
                                    }
                                    {
                                        !product.paid && <span className='font-bold text-green-600 text-lg'>Available</span>
                                    }

                                </td>
                                <td>
                                    <button onClick={() => handleAdvertise(product)} className="btn border-0 btn-xs bg-indigo-500" disabled={product.paid}>Advertise</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(product._id)} className="btn border-0 btn-xs bg-red-500" disabled={product.paid}>Delete</button>
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
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';


const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [bookedProducts, setBookedProducts] = useState();
    // console.log(bookedProducts);
    axios.get(`http://localhost:5000/bookings/${user?.email}`)
        .then(res => {
            // console.log(res.data);
            setBookedProducts(res.data)

        })
        .catch(err => {
            console.error(err);
        })

    return (
        <div>
            <h1 className='text-3xl text-indigo-500 font-bold my-6 text-center'>My Bookings</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name of Product</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            bookedProducts?.map(bookProduct => <tr key={bookProduct._id}>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={bookProduct?.productImg} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {bookProduct.productName}
                                </td>
                                <td>
                                    ${bookProduct.sealingPrice}
                                </td>
                                <td>
                                    <button className="btn border-0 btn-xs bg-indigo-500">Please Pay</button>
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

export default MyBookings;
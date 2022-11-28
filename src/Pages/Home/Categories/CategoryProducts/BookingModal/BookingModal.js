import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../../context/AuthProvider';

const BookingModal = ({ bookProduct, setBookProduct }) => {
    const { user } = useContext(AuthContext);
    const { productName, _id, phnNumber, productImg, sealingPrice, sellerName } = bookProduct;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const buyerPhone = form.buyerPhone.value;
        const meetLocation = form.meetLocation.value;
        const buyerEmail = form.buyerEmail.value;
        const buyerName = form.buyerName.value;
        const bookingDate = form.bookingDate.value;
        // console.log(sealingPrice, buyerPhone, bookingDate)
        const booking = {
            buyerName,
            buyerEmail,
            meetLocation,
            buyerPhone,
            productName,
            sealingPrice,
            sellerPhone: phnNumber,
            productImg,
            sellerName,
            bookingDate,
            productId: _id
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('carHut-token')}`
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setBookProduct(null)
                    toast.success(`${productName} car successfully Booked`, { autoClose: 500 })
                }
            })

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productName}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" name='buyerName' value={user?.displayName} className="input input-bordered w-full mt-5 mb-4" disabled />
                        <input type="text" name='buyerEmail' value={user?.email} className="input input-bordered w-full mb-4" disabled />
                        <input type="text" value={productName} className="input input-bordered w-full mb-4" disabled />
                        <input type="text" value={sealingPrice} className="input input-bordered w-full mb-4" disabled />
                        <input type="text" name='buyerPhone' placeholder="Enter Your Phone Number" className="input w-full mb-4 input-bordered" required />
                        <input type="text" name='meetLocation' placeholder="Enter a Location where You want to meet" className="input w-full mb-4 input-bordered" required />
                        <input type="date" name='bookingDate' className="input w-full mb-4 input-bordered" required />
                        <input type="submit" value="Book" className='block btn mt-8 w-full p-3 text-center rounded-md border-0 dark:text-gray-200 bg-gradient-to-r from-indigo-600 to-purple-600 hover:to-indigo-600 hover:from-purple-600' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;
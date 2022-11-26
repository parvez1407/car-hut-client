import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../context/AuthProvider';

const AddProducts = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const imgbbHostingKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    const handleAddProduct = data => {
        // console.log(data);
        const image = data.productImg[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgbbHostingKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const product = {
                        category_id: data.category_id,
                        productName: data.productName,
                        buyingPrice: data.buyingPrice,
                        buyingYear: data.buyingYear,
                        condition: data.condition,
                        description: data.description,
                        location: data.location,
                        phnNumber: data.phnNumber,
                        postedDate: data.postedDate,
                        productImg: imgData.data.url,
                        sealingPrice: data.sealingPrice,
                        yearsOfUse: data.yearsOfUse,
                        sellerName: user.displayName,
                        sellerEmail: user.email
                    }
                    // save product information to the database
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            if (result.acknowledged) {
                                toast.success(`${data.productName} is added successfully`, { autoClose: 500 })
                                navigate('/dashboard/my-products')
                            }
                        });
                }
            })
    }

    return (
        <div>
            <h1 className='text-3xl text-indigo-500 font-bold my-6 text-center'>Add A Product</h1>
            <form onSubmit={handleSubmit(handleAddProduct)} className='w-2/3 mx-auto'>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text text-gray-400">Product Name</span></label>
                    <input type="text" {...register('productName', { required: 'please enter your product name' })} className="input input-bordered w-full" />
                    {errors.productName && <p className='text-red-400'>{errors.productName?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text text-gray-400">Brand Category</span></label>
                    <select
                        {...register('category_id', { required: 'Please select his specialty' })}
                        className="select select-bordered w-full">
                        <option value="01">Toyota</option>
                        <option value="02">Mercedes Benz</option>
                        <option value="03">BMW</option>
                    </select>
                    {errors.category_id && <p className='text-red-400'>{errors.category_id?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text text-gray-400">Car Condition</span></label>
                    <select
                        {...register('condition', { required: 'Please select his specialty' })}
                        className="select select-bordered w-full">
                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                    </select>
                    {errors.condition && <p className='text-red-400'>{errors.condition?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text text-gray-400">Buying Price</span></label>
                    <input type="number" {...register('buyingPrice', { required: 'please enter your Buying Price' })} className="input input-bordered w-full" />
                    {errors.buyingPrice && <p className='text-red-400'>{errors.buyingPrice?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text text-gray-400">Selling Price</span></label>
                    <input type="number" {...register('sealingPrice', { required: 'please enter your Sealing Price' })} className="input input-bordered w-full" />
                    {errors.sealingPrice && <p className='text-red-400'>{errors.sealingPrice?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text text-gray-400">Years of Use</span></label>
                    <input type="number" {...register('yearsOfUse', { required: 'please enter how many year used this car' })} className="input input-bordered w-full" />
                    {errors.yearsOfUse && <p className='text-red-400'>{errors.yearsOfUse?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text text-gray-400">Buying Year</span></label>
                    <input type="number" {...register('buyingYear', { required: 'please enter which year you buy this car' })} className="input input-bordered w-full" />
                    {errors.buyingYear && <p className='text-red-400'>{errors.buyingYear?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text text-gray-400">Mobile Number</span></label>
                    <input type="tel" {...register('phnNumber', { required: 'Please enter a valid mobile number minlength 6 max length 12', minLength: 6, maxLength: 12 })} className="input input-bordered w-full" />
                    {errors.phnNumber && <p className='text-red-400'>{errors.phnNumber?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text text-gray-400">Todays Date</span></label>
                    <input type="date" {...register('postedDate', { required: 'Please select Todays date', minLength: 6, maxLength: 12 })} className="input input-bordered w-full" />
                    {errors.postedDate && <p className='text-red-400'>{errors.postedDate?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text text-gray-400">Select Your Division</span></label>
                    <select
                        {...register('location', { required: 'Please select his specialty' })}
                        className="select select-bordered w-full">
                        <option value="Barisal">Barisal</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Mymensingh">Mymensingh</option>
                        <option value="Rajshahi">Rajshahi</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Sylhet">Sylhet</option>
                    </select>
                    {errors.location && <p className='text-red-400'>{errors.location?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text text-gray-400">Upload Product Photo</span></label>
                    <input type="file" {...register('productImg', { required: 'photo is required' })} className="input input-bordered w-full" />
                    {errors.productImg && <p className='text-red-400'>{errors.productImg?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text text-gray-400">Details About Your Car</span></label>
                    <textarea type="text" {...register('description', { required: 'please provide details about your car' })} className="input input-bordered w-full" />
                    {errors.description && <p className='text-red-400'>{errors.description?.message}</p>}
                </div>
                <input className='btn border-0 mt-8 block w-full p-3 text-center rounded-md dark:text-gray-200 hover:text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:to-indigo-600 hover:from-purple-600' type="submit" value='Add Product' />
            </form>
        </div>
    );
};

export default AddProducts;
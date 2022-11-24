import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import registerImage from '../../../assets/register.png';
import { AuthContext } from '../../../context/AuthProvider';


const Register = () => {
    const { createUser, updateUserProfile, loading, setLoading, googleProviderLogin } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [role, setRole] = useState('');
    const imgbbHostingKey = process.env.REACT_APP_imgbb_key;


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Please give a valid email')
            return;
        }
        else {
            setError('');
        }
        const password = form.password.value;
        if (!/(?=.{8,})/.test(password)) {
            setError('Password should be 8 characters');
            return;
        }
        if (!/(?=.*[a-zA-Z])/.test(password)) {
            setError('you Must give one uppercase');
            return;
        }
        if (!/(?=.*[!#$@%^&*? "])/.test(password)) {
            setError('You should provide one special character')
            return;
        }
        else {
            setError('');
        }
        const image = form.image.files[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgbbHostingKey}`;
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imageData => {
                console.log(imageData.data.display_url);
                // create user
                createUser(email, password)
                    .then(result => {
                        const user = result.user;
                        // user profile update 
                        updateUserProfile(name, imageData.data.display_url)
                            .then(() => {
                                toast.success('User Created Successfully', { autoClose: 500 })
                            })
                            .catch(err => console.error(err))
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => console.error(err))

    }

    // signIn with google 
    const handleSignInWithGoogle = () => {
        googleProviderLogin()
            .then(result => {
                const user = result.user;
                toast.success('User Register Successfully', { autoClose: 500 })
            })
            .catch(error => {
                console.error(error)
                const errorMessage = error.message;
                toast.error(errorMessage, { autoClose: 500 });
            })
    }



    return (
        <div className="sm:px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between lg:flex-row">
                <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                    <img src={registerImage} alt="" />
                </div>
                <div className="lg:w-1/2">
                    <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-indigo-900 dark:text-gray-100 mt-10">
                        <h1 className="text-3xl font-bold text-center">Register</h1>

                        <p className='text-red-500 my-3 text-center'>{error}</p>
                        <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
                            <div className="space-y-1 text-sm">
                                <label htmlFor="userName" className="block dark:text-gray-400">Name</label>
                                <input type="text" name="name" id="userName" placeholder="Enter Your Name" className="w-full px-4 py-3 rounded-md border-gray-500 dark:bg-gray-800 dark:text-gray-100 focus:border-violet-400" required />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label htmlFor="imageUrl" className="block dark:text-gray-400">Photo URL</label>
                                <input type="file" name="image" accept='image/*' id="imageUrl" placeholder="Enter Your Image URL" className="w-full px-4 py-3 rounded-md border-gray-500 dark:bg-gray-800 dark:text-gray-100 focus:border-violet-400" required />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label htmlFor="userEmail" className="block dark:text-gray-400">Email</label>
                                <input type="email" name="email" id="userEmail" placeholder="Enter Your Email" className="w-full px-4 py-3 rounded-md border-gray-500 dark:bg-gray-800 dark:text-gray-100 focus:border-violet-400" required />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                                <input type="password" name="password" id="password" placeholder="Enter Your Password" className="w-full px-4 py-3 rounded-md border-gray-500 dark:bg-gray-800 dark:text-gray-100 focus:border-violet-400" required />
                            </div>
                            <div>
                                <input type="radio" value="buyer" name="role" onChange={e => setRole(e.target.value)} required /> Buyer
                                <input type="radio" value="seller" name="role" onChange={e => setRole(e.target.value)} className='ml-4' required /> Seller
                            </div>
                            <button className="block w-full p-3 text-center rounded-md dark:text-gray-200 bg-gradient-to-r from-indigo-600 to-purple-600 hover:to-indigo-600 hover:from-purple-600">Register</button>
                        </form>
                        <div className="flex items-center pt-4 space-x-1">
                            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                            <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                        </div>
                        <div className="flex justify-center space-x-4">
                            <button onClick={handleSignInWithGoogle} aria-label="Log in with Google" className="p-3 rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7 fill-current text-gray-200 hover:text-indigo-400">
                                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                </svg>
                            </button>
                        </div>
                        <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
                            <Link rel="noopener noreferrer" to="/login" className="underline dark:text-gray-100"> Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
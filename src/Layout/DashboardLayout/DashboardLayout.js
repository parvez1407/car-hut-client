import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import Footer from '../../Pages/Shared/Footer/Footer';
import Header from '../../Pages/Shared/Header/Header';


const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {
                            isAdmin || isSeller ?
                                <>
                                    {
                                        isAdmin && <>
                                            <li className='text-gray-500'><Link to='/dashboard/all-sellers'>All Sellers</Link></li>
                                            <li className='text-gray-500'><Link to='/dashboard/all-buyers'>All Buyers</Link></li>
                                        </>
                                    }
                                    {
                                        isSeller && <>
                                            <li className='text-gray-500'><Link to='/dashboard/my-products'>My Products</Link></li>
                                            <li className='text-gray-500'><Link to='/dashboard/add-product'>Add Products</Link></li>
                                        </>
                                    }
                                </>

                                :
                                <>
                                    <li className='text-gray-500'><Link to='/dashboard/my-bookings'>My Booking</Link></li>
                                    <li className='text-gray-500'><Link to='/dashboard/wishlist'>Wishlist</Link></li>
                                </>
                        }

                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;
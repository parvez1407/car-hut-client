import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Header from '../../Pages/Shared/Header/Header';


const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
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
                            !isAdmin ?
                                <div>
                                    {
                                        user?.uid ?
                                            <>
                                                <li className='text-gray-500'><Link to='/dashboard'>My Booking</Link></li>
                                                <li className='text-gray-500'><Link to='/dashboard'>Wishlist</Link></li>
                                            </>
                                            :
                                            <>
                                            </>
                                    }
                                </div>
                                :
                                <div>
                                    {
                                        isAdmin && <>
                                            <li className='text-gray-500'><Link to='/dashboard/users'>All Sellers</Link></li>
                                            <li className='text-gray-500'><Link to='/dashboard/add-doctor'>All Buyers</Link></li>
                                        </>
                                    }
                                </div>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
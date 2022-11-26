import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import Loader from '../../context/Loader/Loader';
import useSeller from '../../hooks/useSeller';

const SellersRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    const location = useLocation();
    if (loading || isSellerLoading) {
        return <Loader></Loader>
    }
    if (user && isSeller) {
        return children;
    }
    return <Navigate to='/login' location={{ from: location }} replace></Navigate>;
};

export default SellersRoute;
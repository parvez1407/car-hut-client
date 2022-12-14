import { createBrowserRouter } from "react-router-dom";
import Error from "../../components/Error/Error";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main/Main";
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import MyBookings from "../../Pages/Dashboard/Buyers/MyBookings/MyBookings";
import WishList from "../../Pages/Dashboard/Buyers/WishList/WishList";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import AddProducts from "../../Pages/Dashboard/Seller/AddProducts/AddProducts";
import MyProducts from "../../Pages/Dashboard/Seller/MyProducts/MyProducts";
import CategoryProducts from "../../Pages/Home/Categories/CategoryProducts/CategoryProducts";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellersRoute from "../SellersRoute/SellersRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><CategoryProducts></CategoryProducts></PrivateRoute>,
                loader: ({ params }) => fetch(`https://car-hut-server.vercel.app/category/${params.id}`)
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/dashboard/all-sellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/all-buyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/my-products',
                element: <SellersRoute><MyProducts></MyProducts></SellersRoute>
            },
            {
                path: '/dashboard/add-product',
                element: <SellersRoute><AddProducts></AddProducts></SellersRoute>
            },
            {
                path: '/dashboard/my-bookings',
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
            },
            {
                path: '/dashboard/wishlist',
                element: <PrivateRoute><WishList></WishList></PrivateRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>,
                loader: ({ params }) => fetch(`https://car-hut-server.vercel.app/booking/${params.id}`)
            },
        ]
    }
])
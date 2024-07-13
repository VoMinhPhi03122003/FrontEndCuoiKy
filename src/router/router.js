import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import ListProducts from "../components/TopCodePage/ListProducts";
import ProductDetails from "../components/ProductDetailPage/ProductDetails";
import LoginPage from "../components/AuthenticationPage/Login";
import RegisterPage from "../components/AuthenticationPage/Register";
import ForgotPassPage from "../components/AuthenticationPage/ForgotPass";
import ProfilePage from "../components/ProfilePage/Profile";
import ChangePassPage from "../components/AuthenticationPage/ChangePass";
import CartDetailPage from "../components/CartDetailPage/CartDetailPage";
import {LikedCodes} from "../components/Commons/LikedCodes";
import {ErrorPage404} from "./components/ErrorPage/ErrorPage404";

const profile = {path: '/profile', element: <ProfilePage/>}
const listAuthentication = [
    {
        path: '/login',
        element: <LoginPage/>
    },
    {
        path: '/register',
        element: <RegisterPage/>
    },
    {
        path: '/forgot-password',
        element: <ForgotPassPage/>
    },
    {
        path: '/change-password',
        element: <ChangePassPage/>
    },
    {
        path: "/verify-password",
        element: <VerifyPassPage/>
    }
]

 const listProducts = [
    {
        path: '/top-products/*',
        element: <ListProducts/>
    },
     {
         path: '/top-products/product/:productId',
         element: <ProductDetails/>
    },
    {
        path: '/quality-products',
        element: <ListProducts/>
    },
     {
         path: '/quality-products/product/:productId',
         element: <ProductDetails/>
     },
     {
         path: '/free-products',
         element: <ListProducts/>
     },
     {
         path: '/free-products/product/:productId',
         element: <ProductDetails/>
     },
     {
         path: '/product/:productId',
         element: <ProductDetails/>
     }
 ]

const likedCodes = [{
    path: '/liked-codes',
    element: <LikedCodes/>
}]

const cart = [{
    path: '/cart-details',
    element: <CartDetailPage/>
}]

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage404/>
    },
    profile,
    ...listProducts,
    ...listAuthentication,
    ...cart,
    ...likedCodes
])
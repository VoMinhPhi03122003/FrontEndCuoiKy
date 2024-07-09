import {createBrowserRouter} from "react-router-dom";
import ListProducts from "../components/TopProductPage/ListProducts";
import ProductDetails from "../components/ProductDetailPage/ProductDetails";
import CartDetailPage from "../components/CartDetailPage/CartDetailPage";

import App from "../App";
import LoginPage from "../components/AuthenticationPage/Login";
import RegisterPage from "../components/AuthenticationPage/Register";
import ForgotPassPage from "../components/AuthenticationPage/ForgotPass";
import ProfilePage from "../components/ProfilePage/Profile";
import ChangePassPage from "../components/AuthenticationPage/ChangePass";

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
    }
]

 const listProducts = [
    {
        path: '/top-products',
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
    }
 ]

const cart = [{
    path: '/cart-details',
    element: <CartDetailPage/>
}]

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
    },
    profile,
    ...listProducts,
    ...listAuthentication,
    ...listProducts,
    ...cart
])
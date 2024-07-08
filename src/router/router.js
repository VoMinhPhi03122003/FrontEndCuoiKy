import {createBrowserRouter} from "react-router-dom";
import ListProducts from "../components/TopProductPage/ListProducts";
import ProductDetails from "../components/ProductDetailPage/ProductDetails";
import App from "../App";

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

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    ...listProducts
])
import {createBrowserRouter} from "react-router-dom";
import {ListProducts} from "../components/TopProductPage/ListProducts";
import App from "../App";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/list-products',
        element: <ListProducts/>
    }
])
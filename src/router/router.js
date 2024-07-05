import {createBrowserRouter} from "react-router-dom";
import App from "../components/App";
import {ListProducts} from "../components/List_products";

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
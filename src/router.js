import {createBrowserRouter} from "react-router-dom";
import {ListProducts} from "./components/ListProducts";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <ListProducts/>
    },
    {
        path: '/list-products',
        element: <ListProducts/>
    }
])
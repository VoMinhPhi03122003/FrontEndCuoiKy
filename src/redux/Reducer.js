import {combineReducers} from "redux";
import {cartReducer, discountCodeReducer} from "../redux_tuyen/Reducer_Tuyen";

import errorReducer from "./redux_tai/ErrorSlice";

export  const initialState = {
    layout: 'grid',
    page: 1,
    sort: null,
    type: null
}

const listProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'reset': {
            return {
                ...state,
                ...initialState
            }
        }

        case 'listProducts/page': {
            return {
                ...state,
                page: action.payload
            }
        }
        case 'listProducts/sort': {
            return {
                ...state,
                sort: action.payload
            }
        }
        case 'listProducts/type': {
            return {
                ...state,
               type: action.payload
            }
        }
        case 'listProducts/layout': {
            return {
                ...state,
                layout: action.payload
            }
        }
        default:
            return state
    }
}

export const reducers = combineReducers({
    cartReducer: cartReducer,
    listProductsReducer: listProductsReducer,
    registerReducer: errorReducer,
    discountCodeReducer: discountCodeReducer
})
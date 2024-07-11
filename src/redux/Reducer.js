import {combineReducers} from "redux";
import {cartReducer, discountCodeReducer, modalReducer} from "../redux_tuyen/Reducer_Tuyen";

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

        case 'products/page': {
            return {
                ...state,
                page: action.payload
            }
        }
        case 'products/sort': {
            return {
                ...state,
                sort: action.payload
            }
        }
        case 'products/type': {
            return {
                ...state,
               type: action.payload
            }
        }
        case 'products/layout': {
            return {
                ...state,
                layout: action.payload
            }
        }
        default:
            return state
    }
}

const likedCodesReducer = (state = {liked: JSON.parse(localStorage.getItem('liked'))}, action) => {
    switch (action.type) {
        case 'liked/add': {
            let likedCodes = undefined
            if (!state.liked.some(c => c.id === action.payload.id)) {
                likedCodes = [...state.liked, action.payload]
            } else {
                const index = state.liked.findIndex(value => value.id === action.payload.id)
                likedCodes = index > -1 ? [...state.liked.slice(0, index), ...state.liked.slice(index + 1)] : undefined
            }
            localStorage.setItem('liked', JSON.stringify(likedCodes))
            return {
                ...state,
                liked: likedCodes !== undefined ? [...likedCodes] : [...state.liked]
            }
        }
        default:
            return state
    }
}

export const reducers = combineReducers({
    cartReducer: cartReducer,
    listProductsReducer: listProductsReducer,
    errorReducer: errorReducer,
    discountCodeReducer: discountCodeReducer,
    likedCodesReducer: likedCodesReducer,
    modalReducer: modalReducer
})
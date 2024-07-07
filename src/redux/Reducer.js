
const initState = {

    products: [],
    cart: []

}

export const rootReducer = (state = initState, action) => {

    switch (action.type) {

        case 'product/load': {
            return {
                ...state,
                products: action.payload
            }
        }

        case 'cart/add': {
            return {
                ...state,
                cart: [
                    ...state.cart,
                    action.payload
                ]
            }
        }

        default :
            return state;

    }

}
import {combineReducers} from "redux";
import {products} from "../data/Products";
import registerReducer from "../components/AuthenticationPage/RegisterSlice"

import {checkItemExistCart, totalPrice} from "../javascript/utils"

const initCartState = {
    /* đây là trạng thái ban đầu của ứng dụng */
    cart: [],
    totalPrice: 0
}

 const cartReducer = (state = initCartState, action) => {
    /* Đây là Reducer, một hàm xử lý các hành động (actions) để cập nhật trạng thái của ứng dụng */

    switch (action.type) {
        case 'cart/add-item': {

            // nếu sản phẩm chưa tồn tại trong giỏ hàng
            const updatedCart = checkItemExistCart(state.cart, action.payload) === undefined ? [...state.cart, action.payload] : [...state.cart]  /* Cập nhật thuộc tính cart với một mảng mới. Mảng mới này bao gồm toàn bộ phần tử từ state.cart và phần tử mới được thêm vào từ action.payload */

            const newTotalPrice = totalPrice(updatedCart);

            return {
                ...state, // sao chép trạng thái hiện tại
                cart: updatedCart, // cập nhật số lượng sản phẩm trong giỏ hàng
                totalPrice: newTotalPrice // => tổng giá trị mới của giỏ hàng
            }

            /**
             Đây là một trường hợp xử lý cho hành động có loại là 'cart/add-item'.
             Khi nhận được hành động này, reducer sẽ tạo ra một đối tượng mới bằng cách sao chép trạng thái hiện tại (...state)
             và cập nhật thuộc tính cart với một mảng mới gồm toàn bộ phần tử từ state.cart và phần tử mới được thêm vào từ action.payload.
             action.payload chứa dữ liệu mới cần thêm vào giỏ hàng
             */
        }

        case 'cart/remove-item': {
            // console.log("Day la Action cart/remove-item");
            const updatedCart = state.cart.filter(item => item.id !== action.payload.id); /* loại bỏ các phần tử có id trùng khớp với id của action.payload */
            // => tạo ra mảng mới

            // console.log("Object cart", updatedCart);
            const newTotalPrice = totalPrice(updatedCart);
            return {
                ...state, // sao chép trạng thái hiện tại
                cart: updatedCart, // cập nhật số lượng sản phẩm trong giỏ hàng
                totalPrice: newTotalPrice // => tổng giá trị mới của giỏ hàng
            }
        }

        default :
            return state;
        /**
         Đây là trường hợp mặc định của switch case.
         Nếu hành động không khớp với bất kỳ trường hợp nào đã được xác định,
         reducer sẽ trả về trạng thái hiện tại mà không có sự thay đổi.
         */


    }

}
const listProductsReducer = (state = {data: products, page: 1, sort: 'most', type: null}, action) => {
    switch (action.type) {

        case 'listProducts/page': {
            const page = Number(action.payload)
            const itemsPerPage = 9
            const lastIndex = page * itemsPerPage
            const firstIndex = lastIndex - itemsPerPage
            const items = products.slice(firstIndex, lastIndex)
            return {
                ...state,
                data: [...items],
                page: page
            }
        }
        case 'listProducts/most': {
            return {
                ...state,
                data: [...products],
                sort: 'most'
            }
        }
        case 'listProducts/mostViewed': {
            const items = [...state.data].sort((a, b) => a.viewed > b.viewed ? -1 : 1)
            return {
                ...state,
                data: [...items],
                sort: 'mostViewed'
            }
        }
        case 'listProducts/mostDownloaded': {
            const item = [...state.data].sort((a, b) => a.downloaded > b.downloaded ? -1 : 1)
            return {
                ...state,
                data: [...item],
                sort: 'mostDownloaded'
            }
        }
        case 'listProducts/type': {
            return {
                ...state,
                type: action.payload
            }
        }
        default:
            return state
    }
}

export const reducers = combineReducers({
    cartReducer: cartReducer,
    listProductsReducer: listProductsReducer,
    registerReducer: registerReducer,
})
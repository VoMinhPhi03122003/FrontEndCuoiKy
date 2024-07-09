import {combineReducers} from "redux";
import {products} from "../data/Products";
import registerReducer from "../components/AuthenticationPage/redux/RegisterSlice"

import {checkItemExistCart, loadCartFromLocalStorage, totalPrice} from "../javascript/utils"

const initCartState = {
    /* đây là trạng thái ban đầu của giỏ hàng */
    cart: loadCartFromLocalStorage() === null ? [] : loadCartFromLocalStorage(),
    totalPrice: localStorage.getItem('total-price') === null ? 0 : localStorage.getItem('total-price'),
    discount_percent: 0 // phần trăm giảm giá của đơn hàng
}

 const cartReducer = (state = initCartState, action) => {
    /* Đây là Reducer, một hàm xử lý các hành động (actions) để cập nhật trạng thái của ứng dụng */

    switch (action.type) {
        case 'cart/add-item': {

            // nếu sản phẩm chưa tồn tại trong giỏ hàng
            const updatedCart = checkItemExistCart(state.cart, action.payload) === undefined ? [...state.cart, action.payload] : [...state.cart]
            /* Cập nhật thuộc tính cart với một mảng mới. Mảng mới này bao gồm toàn bộ phần tử từ state.cart và phần tử mới được thêm vào từ action.payload */
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            // Dữ liệu trong Local Storage không có hạn chế về thời gian sống và sẽ được giữ lại sau khi bạn đóng trình duyệt. Điều này có nghĩa là dữ liệu vẫn sẽ tồn tại ngay cả khi người dùng tắt trình duyệt hoặc khởi động lại máy tính.

            const newTotalPrice = totalPrice(updatedCart);

            localStorage.setItem('total-price', JSON.stringify(newTotalPrice));


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
            console.log("Day la Action cart/remove-item");
            const updatedCart = state.cart.filter(item => item.id !== action.payload.id); /* loại bỏ các phần tử có id trùng khớp với id của action.payload */
            // => tạo ra mảng mới
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            // Dữ liệu trong Local Storage không có hạn chế về thời gian sống và sẽ được giữ lại sau khi bạn đóng trình duyệt. Điều này có nghĩa là dữ liệu vẫn sẽ tồn tại ngay cả khi người dùng tắt trình duyệt hoặc khởi động lại máy tính.

            //   console.log("Object cart", updatedCart);
            const newTotalPrice = totalPrice(updatedCart);
            localStorage.setItem('total-price', JSON.stringify(newTotalPrice));

            return {
                ...state, // sao chép trạng thái hiện tại
                cart: updatedCart, // cập nhật số lượng sản phẩm trong giỏ hàng
                totalPrice: newTotalPrice // => tổng giá trị mới của giỏ hàng
            }
        }
        case 'cart/update-discount-percent': {
            // console.log("Day la Action cart/update-discount-percent");

            return {
                ...state,
                discount_percent: action.payload
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
const listProductsReducer = (state = {data: products, page: 1, sort: null, layout: 'grid', type: null}, action) => {
    switch (action.type) {

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
    registerReducer: registerReducer,
})
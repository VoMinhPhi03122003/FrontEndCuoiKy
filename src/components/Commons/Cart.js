import {useDispatch, useSelector} from "react-redux"

function Cart() {
    const cart = useSelector(state => state.rootReducer.cart);

    /**
     useSelector là một hook của React Redux,
     cho phép bạn lấy ra các giá trị từ Redux store.
     Bằng cách truyền một hàm selector,
     bạn có thể lựa chọn các phần của state mà bạn muốn truy xuất từ store.
     */

    return (
        <div className="header-cart">
            <a href="" className="position-relative mr-5"><i className="bi bi-hand-thumbs-up"></i><span>0</span></a>
            <a href="" className="position-relative"><i className="bi bi-cart"></i> <span>{cart.length}</span></a>
        </div>


    )
}

export default Cart;
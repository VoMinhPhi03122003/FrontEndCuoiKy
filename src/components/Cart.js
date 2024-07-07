import {useDispatch, useSelector} from "react-redux"
function Cart(){
    const cart = useSelector(state => state.cart);

    /**
     useSelector là một hook của React Redux,
     cho phép bạn lấy ra các giá trị từ Redux store.
     Bằng cách truyền một hàm selector,
     bạn có thể lựa chọn các phần của state mà bạn muốn truy xuất từ store.
     */

    return (
        <div className="header__cart">
            <ul>
                <li><a><i className="fa fa-heart"></i><span>0</span></a></li>
                <li><a><i className="fa fa-shopping-bag"></i> <span>{cart.length}</span></a></li>
            </ul>
        </div>


    )
}

export default Cart;
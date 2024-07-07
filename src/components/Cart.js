import {useDispatch, useSelector} from "react-redux"
function Cart(){
    const cart = useSelector(state => state.cart);
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
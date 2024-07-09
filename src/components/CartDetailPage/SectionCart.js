import React,{useEffect, useState}  from "react";
import {useSelector, useDispatch} from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {formatCurrency} from "../../javascript/utils";
import {removeItemFromCart} from "../../redux/Action";


function SectionCart() {
    const cart = useSelector(state => state.cartReducer.cart);
    /**
     useSelector là một hook của React Redux,
     cho phép bạn lấy ra các giá trị từ Redux store.
     Bằng cách truyền một hàm selector,
     bạn có thể lựa chọn các phần của state mà bạn muốn truy xuất từ store.
     */

    return (
        <section className="shoping-cart spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shoping__cart__table">
                            <table>
                                <thead>
                                <tr>
                                    <th></th>
                                    <th className="shoping__product">Sản phẩm</th>
                                    <th>Giá</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                {cart.map(cart_item => (
                                    <ItemCart key={cart_item.id} id={cart_item.id} img={cart_item.img}
                                              name={cart_item.name}
                                              price={cart_item.price}/>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shoping__cart__btns">
                            <Link to="/"  className="primary-btn cart-btn">Tiếp tục mua sản phẩm</Link>
                            <Link to="/" className="primary-btn cart-btn cart-btn-right">Tiếp tục mua sản phẩm</Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="shoping__continue">
                            <div className="shoping__discount">
                                <h5>Mã giảm giá</h5>
                                <form action="#">
                                    <input type="text" placeholder="Nhập mã giảm giá"/>
                                    <button type="submit" className="site-btn">Áp dụng</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <TotalCart/>
                    </div>
                </div>
            </div>
        </section>
    )
}

function ItemCart(data) {

    const [product, setProduct] = useState(data);

    const styleImage = {
        width: '60%',
        height: '60%'
    }
    const dispatch = useDispatch();

    function clickRemoveItemFromCart() {
        console.log("Product remove: ", product);
        dispatch(removeItemFromCart(product));
        alert('Removed product');
    }

    return (
        <tr>
            <td><img src={`${product.img}`} style={styleImage}  alt=""/></td>
            <td className="shoping__cart__item">
                <h5>{`${product.name}`}</h5>
            </td>
            <td className="shoping__cart__price">
                {formatCurrency(product.price)}
            </td>
            <td className="shoping__cart__item__close">
                <span onClick={clickRemoveItemFromCart}>Xóa</span>
            </td>
        </tr>
    )
}

function TotalCart() {
    const totalPrice = useSelector(state => state.cartReducer.totalPrice);
    return (
        <div className="shoping__checkout">
            <h5>Đơn hàng</h5>
            {/*<ul>
                <li>Tổng <span> 500.000 VND</span></li>
                <li>Giảm giá <span> 100.000 VND</span></li>
                <li>Còn lại <span> 400.000 VND</span></li>
            </ul>*/}
            <ul>
                <li>Tổng <span>{formatCurrency(totalPrice)}</span></li>
            </ul>
                <a href="" className="primary-btn">Tiến hành thanh toán</a>
        </div>
)
}

export default SectionCart;
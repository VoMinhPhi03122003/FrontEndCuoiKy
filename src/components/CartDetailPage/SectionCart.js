import React from "react";

function SectionCart() {
    return (
        <section className="shoping-cart spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shoping__cart__table">
                            <table>
                                <thead>
                                <tr>
                                    <th className="shoping__product">Code</th>
                                    <th>Giá</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <ItemCart/>
                                <ItemCart/>
                                <ItemCart/>
                                <ItemCart/>
                                <ItemCart/>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shoping__cart__btns">
                            <a href="#" className="primary-btn cart-btn">Tiếp tục mua code</a>
                            <a href="#" className="primary-btn cart-btn cart-btn-right">Tiếp tục mua code</a>
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
    return (
        <tr>
            <td className="shoping__cart__item">
                <img src="" alt=""/>
                <h5>Android Hot App bài tập lớn</h5>
            </td>
            <td className="shoping__cart__price">
                55.00 VND
            </td>
            <td className="shoping__cart__item__close">
                <span>Xóa</span>
            </td>
        </tr>
    )
}

function TotalCart(data) {
    return (
        <div className="shoping__checkout">
            <h5>Đơn hàng</h5>
            <ul>
                <li>Tổng <span> 500.000 VND</span></li>
                <li>Giảm giá <span> 100.000 VND</span></li>
                <li>Còn lại <span> 400.000 VND</span></li>
            </ul>
            <a href="" className="primary-btn">Tiến hành thanh toán</a>
        </div>
    )
}

export default SectionCart;
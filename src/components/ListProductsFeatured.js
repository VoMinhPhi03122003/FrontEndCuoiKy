import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"

import products_featured from '../data/ProductData.js' //=> danh sách code nổi bật
import {loadProduct, addCart} from '../redux/Action'

function ListProductsFeatured(data) {

    const products = useSelector(state => state.products);

    /**
     useSelector là một hook của React Redux,
     cho phép bạn lấy ra các giá trị từ Redux store.
     Bằng cách truyền một hàm selector,
     bạn có thể lựa chọn các phần của state mà bạn muốn truy xuất từ store.
     */

    const dispatch = useDispatch();
    /**
     useDispatch là một hook của thư viện React Redux,
     cho phép bạn gửi các action đến Redux store từ thành phần React của bạn.
     Nó trả về một hàm mà bạn có thể sử dụng để gửi action đi.
     */

    useEffect(() => {
        dispatch(loadProduct(products_featured))

        /**
         useEffect là một hook trong React được sử dụng để thực hiện các tác vụ liên quan đến hiệu ứng (effects) trong thành phần React.
         Nó cho phép bạn thực hiện các tác vụ như gọi API, tương tác với DOM, đăng ký sự kiện, và thực hiện các tác vụ bất đồng bộ khác.
         Bạn có thể xem useEffect như một cách để "kích hoạt" các tác vụ sau khi React hoàn thành việc render giao diện người dùng.
         */

        /**
         => useEffect trong đoạn mã trên được sử dụng để:
         gọi action "loadProduct" để tải dữ liệu sản phẩm từ Redux store
         và cập nhật lại danh sách sản phẩm được hiển thị trong thành phần.
         */

    })

    return (
        <div className="row featured__filter">
            {products.map(product => (
                    <ItemProductFeatured id={product.id} name={product.name} img={product.img}
                                         price={product.price}></ItemProductFeatured>
                )
            )}
        </div>
    )

}

function ItemProductFeatured(data) {

    const [product, setProduct] = useState(data)
    /**
     useState là một hook dùng để lưu trữ và quản lý state(trạng thái) của một component
     => cú pháp :
     const[state,setState] = useState(initState)
     - Component được re-render sau khi 'setState'
     - Initial state chỉ dùng cho lần đầu
     - Set state với callback ?
     - Initial state với callback ?
     - setState là thay thế state bằng giá trị mới
     */

    const dispatch = useDispatch();

    function clickAddCart() {
        dispatch(addCart(product))
        alert('Sản phẩm đã được thêm vào giỏ hàng')
    }
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
            <div className="featured__item">
                <div className="featured__item__pic set-bg"
                     style={{backgroundImage: `url(${product.img})`}}>
                    <ul className="featured__item__pic__hover">
                        <li><a><i className="fa fa-heart"></i></a></li>
                        <li><a onClick={clickAddCart}><i className="fa fa-shopping-cart"></i></a></li>
                    </ul>
                </div>
                <div className="featured__item__text">
                    <h6><a href="">{product.name}</a></h6>
                    <h5>{product.price} VNĐ</h5>


                </div>
            </div>
        </div>
    )


}

export default ListProductsFeatured;
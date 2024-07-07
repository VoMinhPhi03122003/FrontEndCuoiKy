import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"

import products_featured from '../data/ProductData.js'
import {loadProduct} from '../redux/Action'

function ListProductsFeatured(data) {
    //const [products, setProducts] = useState(products_featured);

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
        // console.log('Day la ham useEffect')
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
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
            <div className="featured__item">
                <div className="featured__item__pic set-bg"
                     style={{backgroundImage: `url(${product.img})`}}>
                    <ul className="featured__item__pic__hover">
                        <li><a href=""><i className="fa fa-heart"></i></a></li>
                        <li><a href=""><i className="fa fa-retweet"></i></a></li>
                        <li><a href=""><i className="fa fa-shopping-cart"></i></a></li>
                    </ul>
                </div>
                <div className="featured__item__text">
                    <h6><a href="">{product.name}</a></h6>
                    <h5>{product.price}</h5>


                </div>
            </div>
        </div>
    )


}

export default ListProductsFeatured;
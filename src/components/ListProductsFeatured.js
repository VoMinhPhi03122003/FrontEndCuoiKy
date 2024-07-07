import React, {useState} from "react";

import products_featured from '../data/ProductData.js'

function ListProductsFeatured(data) {
    const [products, setProducts] = useState(products_featured)

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
import img_category_suckhoethugian_1 from '../image/featured/suckhoethugian_1.jpg'
import React from "react";
function ProductFeaturedItem() {
    return (
        <div className="featured__item">
            <div className="featured__item__pic set-bg" style={{ backgroundImage: `url(${img_category_suckhoethugian_1})` }}>
                <ul className="featured__item__pic__hover">
                    <li><a href=""><i className="fa fa-heart"></i></a></li>
                    <li><a href=""><i className="fa fa-retweet"></i></a></li>
                    <li><a href=""><i className="fa fa-shopping-cart"></i></a></li>
                </ul>
            </div>
            <div className="featured__item__text">
                <h6><a href="#">Crab Pool Security</a></h6>
                <h5>$30.00</h5>
            </div>
        </div>
    )
}
export default ProductFeaturedItem;
function ImagesProductDetails() {
    return (
        <div className="col-lg-6 col-md-6">
            <div className="product__details__pic">
                <div className="product__details__pic__item">
                    <img className="product__details__pic__item--large"
                         src={require('../../img/detailsProduct/product-details-1.jpg')} alt=""/>
                </div>
                <div className="product__details__pic__slider d-flex justify-content-between">
                    <div className="other_image">
                        <img data-imgbigurl={require('../../img/detailsProduct/product-details-2.jpg')}
                             src={require('../../img/detailsProduct/thumb-1.jpg')} alt=""/>
                    </div>
                    <div className="other_image">
                        <img data-imgbigurl={require('../../img/detailsProduct/product-details-2.jpg')}
                             src={require('../../img/detailsProduct/thumb-1.jpg')} alt=""/>
                    </div>
                    <div className="other_image">
                        <img data-imgbigurl={require('../../img/detailsProduct/product-details-2.jpg')}
                             src={require('../../img/detailsProduct/thumb-1.jpg')} alt=""/>
                    </div>
                    <div className="other_image">
                        <img data-imgbigurl={require('../../img/detailsProduct/product-details-2.jpg')}
                             src={require('../../img/detailsProduct/thumb-1.jpg')} alt=""/>
                    </div>
                    <div className="other_image">
                        <img data-imgbigurl={require('../../img/detailsProduct/product-details-2.jpg')}
                             src={require('../../img/detailsProduct/thumb-1.jpg')} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
function InforProductDetails(){
    return(
        <div className="col-lg-6 col-md-6">
            <div className="product__details__text">
                <h3>Vetgetable’s Package</h3>
                <div className="product__details__rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    <span>(18 reviews)</span>
                </div>
                <div className="product__details__price">$50.00</div>
                <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam
                    vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet
                    quam vehicula elementum sed sit amet dui. Proin eget tortor risus.</p>
                <div className="product__details__quantity">
                    <div className="quantity">
                        <div className="pro-qty">
                            <input type="text" value="1"/>
                        </div>
                    </div>
                </div>
                <a href="#" className="primary-btn">ADD TO CARD</a>
                <a href="#" className="heart-icon"><span className="icon_heart_alt"></span></a>
                <ul>
                    <li><b>Availability</b> <span>In Stock</span></li>
                    <li><b>Shipping</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li>
                    <li><b>Weight</b> <span>0.5 kg</span></li>
                    <li><b>Share on</b>
                        <div className="share">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                            <a href="#"><i className="fa fa-pinterest"></i></a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
function ProductDetails(){
    return(
        <section className="product-details spad">
            <div className="container">
                <div className="row">
                    <ImagesProductDetails/>
                    <InforProductDetails/>
                </div>
            </div>
        </section>
    )
}
export default ProductDetails;
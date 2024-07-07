import Header from "./Header";
import Footer from "./Commons/Footer"
import SectionSubHero from "./SectionSubHero";


function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar__item">
                <h4>Department</h4>
                <ul>
                    <li><a href="#">Fresh Meat</a></li>
                    <li><a href="#">Vegetables</a></li>
                    <li><a href="#">Fruit & Nut Gifts</a></li>
                    <li><a href="#">Fresh Berries</a></li>
                    <li><a href="#">Ocean Foods</a></li>
                    <li><a href="#">Butter & Eggs</a></li>
                    <li><a href="#">Fastfood</a></li>
                    <li><a href="#">Fresh Onion</a></li>
                    <li><a href="#">Papayaya & Crisps</a></li>
                    <li><a href="#">Oatmeal</a></li>
                </ul>
            </div>
            <div className="sidebar__item">
                <h4>Price</h4>
                <div className="price-range-wrap">
                    <div
                        className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                        data-min="10" data-max="540">
                        <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
                        <span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                        <span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                    </div>
                    <div className="range-slider">
                        <div className="price-input">
                            <input type="text" id="minamount"/>
                            <input type="text" id="maxamount"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidebar__item sidebar__item__color--option">
                <h4>Colors</h4>
                <div className="sidebar__item__color sidebar__item__color--white">
                    <label htmlFor="white">
                        White
                        <input type="radio" id="white"/>
                    </label>
                </div>
                <div className="sidebar__item__color sidebar__item__color--gray">
                    <label htmlFor="gray">
                        Gray
                        <input type="radio" id="gray"/>
                    </label>
                </div>
                <div className="sidebar__item__color sidebar__item__color--red">
                    <label htmlFor="red">
                        Red
                        <input type="radio" id="red"/>
                    </label>
                </div>
                <div className="sidebar__item__color sidebar__item__color--black">
                    <label htmlFor="black">
                        Black
                        <input type="radio" id="black"/>
                    </label>
                </div>
                <div className="sidebar__item__color sidebar__item__color--blue">
                    <label htmlFor="blue">
                        Blue
                        <input type="radio" id="blue"/>
                    </label>
                </div>
                <div className="sidebar__item__color sidebar__item__color--green">
                    <label htmlFor="green">
                        Green
                        <input type="radio" id="green"/>
                    </label>
                </div>
            </div>
            <div className="sidebar__item">
                <h4>Popular Size</h4>
                <div className="sidebar__item__size">
                    <label htmlFor="large">
                        Large
                        <input type="radio" id="large"/>
                    </label>
                </div>
                <div className="sidebar__item__size">
                    <label htmlFor="medium">
                        Medium
                        <input type="radio" id="medium"/>
                    </label>
                </div>
                <div className="sidebar__item__size">
                    <label htmlFor="small">
                        Small
                        <input type="radio" id="small"/>
                    </label>
                </div>
                <div className="sidebar__item__size">
                    <label htmlFor="tiny">
                        Tiny
                        <input type="radio" id="tiny"/>
                    </label>
                </div>
            </div>
            <div className="sidebar__item">
                <div className="latest-product__text">
                    <h4>Latest Products</h4>
                    <div className="latest-product__slider owl-carousel">
                        <div className="latest-prdouct__slider__item">
                            <a href="#" className="latest-product__item">
                                <div className="latest-product__item__pic">
                                    <img src="img/latest-product/lp-1.jpg" alt=""/>
                                </div>
                                <div className="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                            <a href="#" className="latest-product__item">
                                <div className="latest-product__item__pic">
                                    <img src="img/latest-product/lp-2.jpg" alt=""/>
                                </div>
                                <div className="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                            <a href="#" className="latest-product__item">
                                <div className="latest-product__item__pic">
                                    <img src="img/latest-product/lp-3.jpg" alt=""/>
                                </div>
                                <div className="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                        </div>
                        <div className="latest-prdouct__slider__item">
                            <a href="#" className="latest-product__item">
                                <div className="latest-product__item__pic">
                                    <img src="img/latest-product/lp-1.jpg" alt=""/>
                                </div>
                                <div className="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                            <a href="#" className="latest-product__item">
                                <div className="latest-product__item__pic">
                                    <img src="img/latest-product/lp-2.jpg" alt=""/>
                                </div>
                                <div className="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                            <a href="#" className="latest-product__item">
                                <div className="latest-product__item__pic">
                                    <img src="img/latest-product/lp-3.jpg" alt=""/>
                                </div>
                                <div className="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Products() {
    return (
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                    <div className="product__item__pic set-bg" data-setbg="img/product/product-1.jpg">
                        <ul className="product__item__pic__hover">
                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Crab Pool Security</a></h6>
                        <h5>$30.00</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                    <div className="product__item__pic set-bg" data-setbg="img/product/product-2.jpg">
                        <ul className="product__item__pic__hover">
                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Crab Pool Security</a></h6>
                        <h5>$30.00</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                    <div className="product__item__pic set-bg" data-setbg="img/product/product-3.jpg">
                        <ul className="product__item__pic__hover">
                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Crab Pool Security</a></h6>
                        <h5>$30.00</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                    <div className="product__item__pic set-bg" data-setbg="img/product/product-4.jpg">
                        <ul className="product__item__pic__hover">
                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Crab Pool Security</a></h6>
                        <h5>$30.00</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                    <div className="product__item__pic set-bg" data-setbg="img/product/product-5.jpg">
                        <ul className="product__item__pic__hover">
                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Crab Pool Security</a></h6>
                        <h5>$30.00</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                    <div className="product__item__pic set-bg" data-setbg="img/product/product-6.jpg">
                        <ul className="product__item__pic__hover">
                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Crab Pool Security</a></h6>
                        <h5>$30.00</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                    <div className="product__item__pic set-bg" data-setbg="img/product/product-7.jpg">
                        <ul className="product__item__pic__hover">
                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Crab Pool Security</a></h6>
                        <h5>$30.00</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                    <div className="product__item__pic set-bg" data-setbg="img/product/product-8.jpg">
                        <ul className="product__item__pic__hover">
                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Crab Pool Security</a></h6>
                        <h5>$30.00</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                    <div className="product__item__pic set-bg" data-setbg="img/product/product-9.jpg">
                        <ul className="product__item__pic__hover">
                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Crab Pool Security</a></h6>
                        <h5>$30.00</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                    <div className="product__item__pic set-bg" data-setbg="img/product/product-10.jpg">
                        <ul className="product__item__pic__hover">
                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Crab Pool Security</a></h6>
                        <h5>$30.00</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                    <div className="product__item__pic set-bg" data-setbg="img/product/product-11.jpg">
                        <ul className="product__item__pic__hover">
                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Crab Pool Security</a></h6>
                        <h5>$30.00</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                    <div className="product__item__pic set-bg" data-setbg="img/product/product-12.jpg">
                        <ul className="product__item__pic__hover">
                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Crab Pool Security</a></h6>
                        <h5>$30.00</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Filter() {
    return (
        <div className="filters">
            <div className="row">
                <div className="col-lg-4 d-flex justify-content-start align-items-center">
                    <div className="filter-found">
                        <h6>Tìm thấy <b>17</b> sản phẩm</h6>
                    </div>
                </div>
                <div className="col-lg-8 d-flex justify-content-end align-items-center">
                    <div className="filter-sort mr-5">
                        <span>SẮP XẾP</span>
                        <ul className="d-inline-block">
                            <li className="filter-active">Mới nhất</li>
                            <li>Xem nhiều</li>
                            <li>Tải nhiều</li>
                        </ul>
                    </div>
                    <div className="filter-option d-flex align-items-center">
                        <span className="icon_grid-2x2 filter-active"></span>
                        <span className="icon_ul"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Pagination() {
    return (
        <div className="product__pagination">
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#"><i className="fa fa-long-arrow-right"></i></a>
        </div>
    )
}

function ProductsContainer() {
    return (
        <section className="product">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-5">
                        <SideBar/>
                    </div>
                    <div className="col-lg-9 col-md-7">
                        <Filter/>
                        <Products/>
                        <Pagination/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function ListProducts() {
    return (
        <>
            <Header/>
            <SectionSubHero/>
            <ProductsContainer/>
            <Footer/>
        </>
    )
}
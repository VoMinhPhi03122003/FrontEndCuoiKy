import Header from "./Header";
import Footer from "./Commons/Footer"
import SectionSubHero from "./SectionSubHero";

import '../css/products.css'

const categories = ['Sức khỏe - Thư giản', 'Uống chất', 'Ăn lành', 'Khẩu trang', 'Chăm sóc nhà cửa-Đồ dùng phòng bếp tắm', 'Làm đẹp & chăm sóc cá nhân', 'Mẹ & bé', 'Đồ gốm', 'Nón lá', 'Áo dài']

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar-item">
                <h5 className="list-group-item font-weight-bolder">Phân loại sản phâm</h5>
                <div className="list-group">
                    {categories.map(c => (
                        <a className="list-group-item d-flex justify-content-between align-items-center" href="#">
                            <span>{c}</span>
                            <span className="badge badge-light font-weight-normal">12</span>
                        </a>
                    ))}
                </div>
            </div>
            <div className="sidebar-item mt-5">
                <h5 className="list-group-item font-weight-bolder">Sản phẩm phổ biến</h5>
                <div className="list-group">
                    <a className="list-group-item" href="#">
                        <span className="popular-rank">1</span>
                        <div className="float-left mr-3">
                            <img width={50} src={require("../img/products/lp-1.jpg")} alt=""/>
                        </div>
                        <div className="">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                        </div>
                    </a>
            </div>
                {/*<div className="latest-product__slider owl-carousel">*/}
                {/*    <div className="latest-prdouct__slider__item">*/}
                {/*        <a href="#" className="latest-product__item">*/}
                {/*            <div className="latest-product__item__pic">*/}
                {/*                <img src="img/latest-product/lp-1.jpg" alt=""/>*/}
                {/*            </div>*/}
                {/*            <div className="latest-product__item__text">*/}
                {/*                <h6>Crab Pool Security</h6>*/}
                {/*                <span>$30.00</span>*/}
                {/*            </div>*/}
                {/*        </a>*/}
                {/*        <a href="#" className="latest-product__item">*/}
                {/*            <div className="latest-product__item__pic">*/}
                {/*                <img src="img/latest-product/lp-2.jpg" alt=""/>*/}
                {/*            </div>*/}
                {/*            <div className="latest-product__item__text">*/}
                {/*                <h6>Crab Pool Security</h6>*/}
                {/*                <span>$30.00</span>*/}
                {/*            </div>*/}
                {/*        </a>*/}
                {/*        <a href="#" className="latest-product__item">*/}
                {/*            <div className="latest-product__item__pic">*/}
                {/*                <img src="img/latest-product/lp-3.jpg" alt=""/>*/}
                {/*            </div>*/}
                {/*            <div className="latest-product__item__text">*/}
                {/*                <h6>Crab Pool Security</h6>*/}
                {/*                <span>$30.00</span>*/}
                {/*            </div>*/}
                {/*        </a>*/}
                {/*    </div>*/}
                {/*    <div className="latest-prdouct__slider__item">*/}
                {/*        <a href="#" className="latest-product__item">*/}
                {/*            <div className="latest-product__item__pic">*/}
                {/*                <img src="img/latest-product/lp-1.jpg" alt=""/>*/}
                {/*            </div>*/}
                {/*            <div className="latest-product__item__text">*/}
                {/*                <h6>Crab Pool Security</h6>*/}
                {/*                <span>$30.00</span>*/}
                {/*            </div>*/}
                {/*        </a>*/}
                {/*        <a href="#" className="latest-product__item">*/}
                {/*            <div className="latest-product__item__pic">*/}
                {/*                <img src="img/latest-product/lp-2.jpg" alt=""/>*/}
                {/*            </div>*/}
                {/*            <div className="latest-product__item__text">*/}
                {/*                <h6>Crab Pool Security</h6>*/}
                {/*                <span>$30.00</span>*/}
                {/*            </div>*/}
                {/*        </a>*/}
                {/*        <a href="#" className="latest-product__item">*/}
                {/*            <div className="latest-product__item__pic">*/}
                {/*                <img src="img/latest-product/lp-3.jpg" alt=""/>*/}
                {/*            </div>*/}
                {/*            <div className="latest-product__item__text">*/}
                {/*                <h6>Crab Pool Security</h6>*/}
                {/*                <span>$30.00</span>*/}
                {/*            </div>*/}
                {/*        </a>*/}
                {/*    </div>*/}
                {/*</div>*/}
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
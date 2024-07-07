import Header from "./Header";
import Footer from "./Commons/Footer"
import SectionSubHero from "./SectionSubHero";

import '../css/products.css'

const categories = ['Sức khỏe - Thư giản', 'Uống chất', 'Ăn lành', 'Khẩu trang', 'Chăm sóc nhà cửa-Đồ dùng phòng bếp tắm', 'Làm đẹp & chăm sóc cá nhân', 'Mẹ & bé', 'Đồ gốm', 'Nón lá', 'Áo dài']

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar-item">
                <h6 className="list-group-item font-weight-bolder">Phân loại sản phâm</h6>
                <div className="list-group">
                    {categories.map((value,index) => (
                        <a className="list-group-item d-flex justify-content-between align-items-center" key={index} href="#">
                            <span>{value}</span>
                            <span className="badge badge-light font-weight-normal">12</span>
                        </a>
                    ))}
                </div>
            </div>
            <div className="sidebar-item mt-4">
                <h6 className="list-group-item font-weight-bolder">Sản phẩm phổ biến</h6>
                <div className="list-group">
                    {
                        Array(9).fill(1).map((value, index) => (
                            <a className="list-group-item d-flex align-items-center" key={index} href="#">
                                <div className="align-self-start mt-2 mr-2">
                                    <span className="popular-rank">{++index}</span>
                                </div>
                                <img className="mr-2" src={require("../img/products/lp-1.jpg")} alt=""/>
                                <span className="popular-title">Bundle 5 Android Studio games</span>
                                <div className="align-self-start ml-2 mt-1">
                                    <span className="popular-price">12$</span>
                                </div>
                            </a>
                        ))
                    }
            </div>

        </div>
</div>
)
}
function ProductItem() {
    return (
        <div className="product-item">
            <a className="product-item-img">
                <img src={require("../img/products/product-1.jpg")} alt=""/>
            </a>
            <div className="product-item-title text-center pt-2">
                <a>BGAI - AI Powered Image Background Generator</a>
            </div>
            <div className="product-item-actions d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-start">
                    <a className="product-item-action mr-1"><i className="fa fa-folder-open"></i></a>
                    <a className="product-item-action"><i className="fa fa-thumbs-up"></i></a>
                </div>
                <div className="product-item-stars">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
            </div>
            <div className="product-item-bottom d-flex justify-content-between align-items-center">
                <a className="product-item-brand"><i className="fa fa-android"></i> Sức khỏe - Thư giản</a>
                <a className="product-item-price">$12</a>
            </div>
        </div>
    )
}


function Products() {
    return (
        <div className="row">
            {
                Array(12).fill(1).map((value, index) => (
                    <div className="product-item-container col-lg-4 col-md-6 col-sm-6" key={index}>
                        <ProductItem/>
                    </div>
                ))
            }

        </div>
    )
}

function Filter() {
    return (
        <div className="filters mb-4">
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
                    <div className="col-lg-9 col-md-7 pl-4">
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
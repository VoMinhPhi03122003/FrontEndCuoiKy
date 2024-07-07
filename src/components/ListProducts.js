import Header from "./Header";
import Footer from "./Commons/Footer"
import SectionSubHero from "./SectionSubHero";

import '../css/products.css'
import {useState} from "react";
import {useSelector} from "react-redux";

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
function ProductItem(props) {
    const p = props.data
    return (
        <div className="product-item">
            <a className="product-item-img">
                <img src={p.img} alt=""/>
            </a>
            <div className="product-item-title text-center pt-2">
                <a>{p.name}</a>
            </div>
            <div className="product-item-stats d-flex justify-content-between">
                <div><i className="fa fa-eye"></i> {p.viewed}</div>
                <div><i className="fa fa-download"></i>{p.downloaded}</div>
            </div>
            <div className="product-item-actions d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-start">
                    <a className="product-item-action mr-1"><i className="fa fa-thumbs-up"></i></a>
                    <a className="product-item-action"><i className="fa fa-download"></i></a>
                </div>
                <div className="product-item-stars">
                    {Array(5).fill(1).map((value, index) => (<i className="fa fa-star" key={index}></i>))}
                </div>
            </div>
            <div className="product-item-bottom d-flex justify-content-between align-items-center">
                <a className="product-item-brand"><i className="fa fa-android"></i>{p.type}</a>
                <a className="product-item-price">{p.price}</a>
            </div>
        </div>
    )
}

function ProductItemRow(props) {
    const p = props.data
    return (
        <div className="product-item-row mb-4">
            <div className="row no-gutters">
                <a className="product-item-img col-lg-4 pr-3">
                    <img src={p.img} alt=""/>
                </a>
                <div className="product-item-row-content col-lg-6">
                    <a className="product-item-row-title">{p.name}</a>
                    <a className="product-item-brand"><i className="fa fa-android"></i> {p.type}</a>
                    <div className="product-item-stars">
                        {Array(5).fill(1).map((value, index) => (<i className="fa fa-star" key={index}></i>))}
                    </div>
                    <p className="product-item-row-description">{p.description}</p>
                </div>
                <div className="col-lg-2 d-flex flex-column justify-content-end align-items-end">
                    <div className="pr-3 pb-3">
                        <div className="product-item-row-price text-center">
                            <a className="d-inline text-center">{p.price}</a>
                        </div>
                        <div className="d-flex justify-content-end">
                            <a className="product-item-action mr-1"><i className="fa fa-thumbs-up"></i></a>
                            <a className="product-item-action"><i className="fa fa-download"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Products(props) {
    const products = useSelector(state => state.listProductsReducer.data)
    return (
        <div className="row">
            {
                products.map((value, index) => {
                    return props.isGrid ?
                        (
                            <div className="product-item-container col-lg-4 col-md-6 col-sm-6" key={index}>
                                <ProductItem data={value}/>
                            </div>
                        ) :
                        (
                            <div className="product-item-container col-12" key={index}>
                                <ProductItemRow data={value}/>
                            </div>
                        )
                })

            }

        </div>
    )
}

function Filter(props) {
    const [layout, setLayout] = useState('grid')

    function onLayoutClick(isGrid) {
        props.onLayout(isGrid)
        setLayout(isGrid === true ? 'grid' : 'row')
    }
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
                        <span className={`icon_grid-2x2 ${layout === 'grid' ? "filter-active" : ""}`}
                              onClick={() => onLayoutClick(true)}></span>
                        <span className={`icon_ul ${layout === 'row' ? "filter-active" : ""}`}
                              onClick={() => onLayoutClick(false)}></span>
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
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 12
    const lastIndex = currentPage * itemsPerPage
    const firstIndex = lastIndex - itemsPerPage

    const [grid, setGrid] = useState(true)

    return (
        <section className="product">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-5">
                        <SideBar/>
                    </div>
                    <div className="col-lg-9 col-md-7 pl-4">
                        <Filter onLayout={(idGrid) => setGrid(idGrid)}/>
                        <Products isGrid={grid}/>
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

import '../../css/header.css'
import {useEffect, useState} from "react";
import Cart from './Cart'

const adsList = [
    {
        img: 'ads/code-hay-upload-kiem-tien.jpg',
        color: '#86BD3B'
    },
    {
        img: 'ads/share-code-clould-vps.jpg',
        color: '#34A5CD'
    },
    {
        img: 'ads/thiet-ke-website.jpg',
        color: '#2175BA'
    }
]

function HeaderAds() {
    const [adsIndex, setAdsIndex] = useState(0)
    const ads = adsList[adsIndex]
    console.log(adsIndex)
    useEffect(() => {
        const id = setInterval(() => setAdsIndex((adsIndex + 1) % adsList.length), 5000)
        return () => clearInterval(id)
    }, [adsIndex])

    return (
        <div className="header-ads" style={{backgroundColor: `${ads.color}`}}>
            <div className="container">
                <img src={require(`../../img/${ads.img}`)} alt=""/>
            </div>
        </div>
    )
}

function HeaderTop() {
    return (
        <div className="header-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 py-2">
                        <div className="header-top-left d-flex justify-content-start align-items-center">
                            <a href=""><i className="fa fa-phone-alt"></i> 0123.456.789</a>
                            <a href=""><i className="fa fa-envelope"></i> nlu@gmail.com</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 py-2">
                        <div className="header-top-right d-flex justify-content-end align-items-center">
                            <div className="header-top-right-social d-flex justify-content-start align-items-center">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                <a href="#"><i className="fa fa-youtube-play"></i></a>
                            </div>
                            <div className="header-top-right-language">
                                <img src={require('../../img/language/tieng_viet.png')} alt="" className="mr-2"/>
                                <div>Tiếng Việt <i className="bi bi-chevron-down d-inline-block ml-2"></i></div>
                                <ul>
                                    <li><a href="#">Tiếng Việt</a></li>
                                    <li><a href="#">English</a></li>
                                </ul>
                            </div>
                            <div className="header-top-right-auth d-flex justify-content-end align-items-center">
                                <a href=""><i className="fa fa-user"></i> Đăng ký</a>
                                <a href="" className="mr-0"><i className="fa fa-sign-in"></i> Đăng nhập</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function HeaderMenu() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-2 d-flex justify-content-center align-items-center">
                    <div className="py-4">
                        <a href="/public"><img src={require('../../img/logo/logo.png')} alt=""/></a>
                    </div>
                </div>
                <div className="col-lg-8 d-flex justify-content-center align-items-center">
                    <nav className="header-menu">
                        <ul>
                            <li><a href="">Trang chủ</a></li>
                            <li><a href="" className="active">Top sản phẩm</a></li>
                            <li><a href="">Sản phẩm chất lượng</a><img src={require('../../img/ic_hot.gif')} alt=""/></li>
                            <li><a href="">Sản phẩm miễn phí</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-2 d-flex justify-content-center align-items-center">
                    <Cart/>
                </div>
            </div>
        </div>
    )
}

function HeaderSearch() {
    const [categoriesClose, setCategoriesClose] = useState(true)
    return (
        <div className="container mb-4">
            <div className="row">
                <div className="col-lg-3">
                    <div className="header-categories" onClick={() => setCategoriesClose(!categoriesClose)}>
                        <div className="header-categories-all">
                            <i className="bi bi-list mr-3"></i>
                            <span>Danh mục sản phẩm </span>
                            <i className="bi bi-chevron-down"></i>
                        </div>
                        <ul style={{
                            opacity: `${categoriesClose ? 0 : 1}`,
                            top: `${categoriesClose ? '80px' : '60px'}`
                        }}>
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
                            <li><a href="#">Fresh Bananas</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="header-search h-100">
                        <form action="">
                            <div className="header-search-categories pl-3">
                                <span className="position-relative align-middle">TẤT CẢ SẢN PHẨM <i className="fa fa-caret-down"></i></span>
                            </div>
                            <input type="text" placeholder="Nhập từ khóa"/>
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="header-upload d-flex justify-content-end align-items-center h-100">
                        <div className="header-upload-action"><i className="fa fa-cloud-upload mr-2"></i> TẢI LÊN</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Header() {
    return (
        <header className="header">
            <HeaderAds/>
            <HeaderTop/>
            <HeaderMenu/>
            <HeaderSearch/>
        </header>
    )
}

export default Header;
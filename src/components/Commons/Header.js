import '../../css/header.css'
import {useEffect, useState} from "react";
import Cart from './Cart'
import {Link, useLocation, useNavigate} from "react-router-dom";
import $ from 'jquery'

import {getTypes} from "../../javascript/utils"
import {useDispatch} from "react-redux";
import {setPage, setSort, setType} from "../../redux/Action";

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
                            <a href="tel:0123.456.789"><i className="fa fa-phone-alt"></i> 0123.456.789</a>
                            <a href="mailto:nlu@gmail.com"><i className="fa fa-envelope"></i> nlu@gmail.com</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 py-2">
                        <div className="header-top-right d-flex justify-content-end align-items-center">
                            <div className="header-top-right-social d-flex justify-content-start align-items-center">
                                <a target="_blank" rel="noreferrer" href="https://facebook.com"><i
                                    className="fa fa-facebook"></i></a>
                                <a target="_blank" rel="noreferrer" href="https://twitter.com"><i
                                    className="fa fa-twitter"></i></a>
                                <a target="_blank" rel="noreferrer" href="https://linkedin.com"><i
                                    className="fa fa-linkedin"></i></a>
                                <a target="_blank" rel="noreferrer" href="https://youtube.com"><i
                                    className="fa fa-youtube-play"></i></a>
                            </div>
                            <div className="header-top-right-language">
                                <img src={require('../../img/language/tieng_viet.png')} alt="" className="mr-2"/>
                                <div>Tiếng Việt <i className="bi bi-chevron-down d-inline-block ml-2"></i></div>
                                <ul>
                                    <li>Tiếng Việt</li>
                                    <li>English</li>
                                </ul>
                            </div>
                            <div className="header-top-right-auth d-flex justify-content-end align-items-center">
                                <Link to="/register"><i className="fa fa-user"></i> Đăng ký</Link>
                                <Link to="/login" className="mr-0"><i className="fa fa-sign-in"></i> Đăng nhập</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function HeaderMenu() {
    const location = useLocation()
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-2 d-flex justify-content-center align-items-center">
                    <div className="py-4">
                        <Link to={'/'}><img src={require('../../img/logo/logo.png')} alt=""/></Link>
                    </div>
                </div>
                <div className="col-lg-8 d-flex justify-content-center align-items-center">
                    <nav className="header-menu">
                        <ul>
                            <li><Link to="/" className={location.pathname === '/' && 'active'}>Trang chủ</Link></li>
                            <li><Link to="/top-products"
                                      className={location.pathname.indexOf('top-products') > 0 && 'active'}>Top sản
                                phẩm</Link>
                            </li>
                            <li><Link to="/quality-products"
                                      className={location.pathname.indexOf('quality-products') > 0 && 'active'}>Sản phẩm
                                chất
                                lượng</Link>
                                <img src={require('../../img/ic_hot.gif')} alt=""/>
                            </li>

                            <li><Link to="/free-codes"
                                      className={location.pathname.indexOf('free-codes') > 0 && 'active'}>Sản phẩm miễn
                                phí</Link></li>
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
function CodeCategories({types}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleNavigation(typeId) {
        dispatch(setType(typeId))
        dispatch(setPage(1))
        dispatch(setSort(null))
        navigate(`/top-products/type=${typeId}`)
    }

    return (
        <div className="header-categories" onClick={() => {
            $('.header-categories ul').slideToggle(300)
            $('.header-categories-all .bi-chevron-down').toggleClass('rotate-down')
        }}>
            <div className="header-categories-all">
                <i className="bi bi-list mr-3"></i>
                <span>Danh mục sản phẩm </span>
                <i className="bi bi-chevron-down"></i>
            </div>
            <ul>
                {types.map(type => (
                    <li onClick={() => handleNavigation(type.id)}
                        className="list-group-item" key={type.id}><i className="fa fa-code"></i> {type.name}</li>
                ))}
            </ul>
        </div>
    )
}
function HeaderSearch() {
    const [search, setSearch] = useState({})
    const [types, setTypes] = useState([])
    const [toggle, setToggle] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:9810/products`)
            .then(res => res.json())
            .then(json => setTypes(getTypes(json)))
    }, [])

    function handleChange(event) {
        setSearch({...search, query: event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault()
        dispatch(setType(null))
        dispatch(setPage(1))
        dispatch(setSort(null))
        navigate(`/top-products?search=${search.query}${search.from ? `&from=${search.from}` : ''}`)
    }

    return (
        <div className="container mb-4">
            <div className="row">
                <div className="col-lg-3">
                    <CodeCategories types={types}/>
                </div>
                <div className="col-lg-7">
                    <div className="header-search h-100">
                        <form onSubmit={handleSubmit}>
                            <div className="header-search-categories pl-3"
                                 onClick={(e) => {
                                     e.stopPropagation()
                                     $('.header-search-categories ul').slideToggle(300)
                                     setToggle(!toggle)
                                 }}>
                                <span className="position-relative align-middle">{search.from || 'TẤT CẢ SẢN PHẨM'} <i
                                    className={toggle ? "fa fa-caret-up" : "fa fa-caret-down"}></i></span>
                                <ul>
                                    {types.map(type => (
                                        <li onClick={() => setSearch({...search, from: type.id})}
                                            key={type.id}>{type.name}</li>
                                    ))}
                                    <li onClick={() => setSearch({})} key={types.length}>TẤT CẢ SẢN PHẨM</li>
                                </ul>
                            </div>
                            <input type="text" value={search.query} placeholder="Nhập từ khóa" onChange={handleChange}/>
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
    );
}

export default function Header() {
    useEffect(() => {
        const ul = $('.header-search-categories ul')
        $(document).on('click', (e) => {
            if (!ul.is(':hidden')) {
                ul.slideUp('fast')
            }
            e.stopPropagation()
        })
    }, [])

    return (
        <header className="header">
            <HeaderAds/>
            <HeaderTop/>
            <HeaderMenu/>
            <HeaderSearch/>
        </header>
    )
}

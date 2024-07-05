
import Logo from './Logo'
import NavBar from './NavBar'
import Cart from './Cart'
import english  from '../image/language/english.png'

function Header() {
    return (
        <header className="header">
            <HeaderTop/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <Logo/>
                    </div>
                    <div className="col-lg-8">
                        <NavBar/>
                    </div>
                    <div className="col-lg-2"><Cart/></div>
                </div>
            </div>
        </header>
    )
}
function HeaderTop(){
    return(
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <div className="header__top__left">
                            <ul>
                                <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                                {/* <li>Free Shipping for all Order of $99</li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9">
                        <div className="header__top__right">
                            <div className="header__top__right__language">
                                <img src={english} alt=""/>
                                <div>English</div>
                                <span className="arrow_carrot-down"></span>
                                <ul>
                                    <li><a href="#">VietNam</a></li>
                                    <li><a href="#">English</a></li>
                                </ul>
                            </div>
                            <div className="header__top__right__auth">
                                <a href=""><i className="fa fa-user"></i> Đăng ký / Đăng nhập</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;

export {HeaderTop};

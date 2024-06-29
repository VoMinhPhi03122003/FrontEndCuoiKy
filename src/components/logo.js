import logo from '../img/logo.png'

function Logo(){
    return(
        <div className="col-lg-3">
            <div className="header__logo">
                <a href="./index.html"><img src={logo} alt=""/></a>
            </div>
        </div>
    )
}

export default Logo;
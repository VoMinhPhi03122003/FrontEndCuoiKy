import logo from '../img/logo/logo.png'

function Logo(){
    return(
            <div className="header__logo">
                <a href=""><img src={logo} alt=""/></a>
        </div>
    )
}

export default Logo;
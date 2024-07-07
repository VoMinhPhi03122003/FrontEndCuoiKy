import '../../App.css'
import logo from '../../img/logo/logo.png' ;

function Footer() {
    return (
        <footer className="footer spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer__about">
                            <div className="footer__about__logo">
                                <a href=""><img src={logo} alt=""/></a>
                            </div>
                            <ul>
                                <li>Address:Khoa CNTT - ĐH Nông Lâm</li>
                                <li>Phone: 0123456789</li>
                                <li>Email: hello@colorlib.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                        <div className="footer__widget">
                            <h6>Về chúng tôi</h6>
                            <ul>
                                <li><a href="#">Giới thiệu </a></li>
                                <li><a href="#">Quy định chung</a></li>
                                <li><a href="#">Chính sách bán sản phẩm</a></li>
                                <li><a href="#">Câu hỏi thường gặp</a></li>
                                <li><a href="#">Sự kiện</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="footer__widget">
                            <h6>GỬI HỖ TRỢ - GÓP Ý</h6>
                            <form action="#">
                                <input type="text" placeholder="Nội dung & liên hệ của bạn"/>
                                <button type="submit" className="site-btn">SEND</button>
                            </form>
                            <div className="footer__widget__social">
                                <a href="https://www.facebook.com"><i className="fa fa-facebook"></i></a>
                                <a href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a>
                                <a href="https://www.twitter.com/"><i className="fa fa-twitter"></i></a>
                                <a href="https://www.pinterest.com"><i className="fa fa-pinterest"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer__copyright">
                            <div className="footer__copyright__text">
                                {/*  <p>
                                    Copyright &copy;
                                    <script>document.write(new Date().getFullYear());</script>
                                    All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a
                                    href="https://colorlib.com" target="_blank">Colorlib</a>
                                </p> */}
                            </div>
                            <div className="footer__copyright__payment"><img src="img/payment-item.png" alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
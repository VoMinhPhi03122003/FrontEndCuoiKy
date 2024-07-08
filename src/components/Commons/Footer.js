import '../../App.css'
import '../../css/footer.css'


export default function Footer() {
    return (
        <footer className="footer ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer-about">
                            <div className="mb-3">
                                <a href="/"><img src={require('../../img/logo/logo.png')} alt=""/></a>
                            </div>
                            <div>
                                <div className="footer-about-contact-item">
                                    <div className="w-25 float-left font-weight-bolder">Địa chỉ:</div>
                                    <div>Khoa CNTT - ĐH Nông Lâm</div>
                                </div>
                                <div className="footer-about-contact-item">
                                    <div className="w-25 float-left font-weight-bolder">Phone:</div>
                                    <div>0123456789</div>
                                </div>
                                <div className="footer-about-contact-item">
                                    <div className="w-25 float-left font-weight-bolder">Email:</div>
                                    <div>nlu@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-6">
                        <div className="row pl-5">
                            <div className="footer-links col-lg-6">
                                <h6>VỀ CHÚNG TÔI</h6>
                                <ul>
                                    <li><a href="/">Giới thiệu</a></li>
                                    <li><a href="/">Quy định chung</a></li>
                                    <li><a href="/">Chính sách bán sản phẩm</a></li>
                                    <li><a href="/">Câu hỏi thường gặp</a></li>
                                    <li><a href="/">Sự kiện</a></li>
                                </ul>
                            </div>
                            <div className="footer-links col-lg-6">
                                <h6>HƯỚNG DẪN</h6>
                                <ul>
                                    <li><a href="/">Sản phẩm miễn phí</a></li>
                                    <li><a href="/">Sản phẩm có phí</a></li>
                                    <li><a href="/">Hướng dẫn thanh toán</a></li>
                                    <li><a href="/">Hướng dẫn cài đặt</a></li>
                                    <li><a href="/">Hỗ trợ kĩ thuật</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="footer-widget">
                            <h6>GỬI HỖ TRỢ - GÓP Ý</h6>
                            <form action="/">
                                <input type="text" placeholder="Nội dung & liên hệ của bạn"/>
                                <button type="submit" className="site-btn">SEND</button>
                            </form>
                            <div className="footer-widget-social">
                                <a target="_blank" rel="noreferrer" href="https://facebook.com"><i
                                    className="fa fa-facebook"></i></a>
                                <a target="_blank" rel="noreferrer" href="https://twitter.com"><i
                                    className="fa fa-twitter"></i></a>
                                <a target="_blank" rel="noreferrer" href="https://linkedin.com"><i
                                    className="fa fa-linkedin"></i></a>
                                <a target="_blank" rel="noreferrer" href="https://youtube.com"><i
                                    className="fa fa-youtube-play"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-copyright">
                            <div className="float-left">
                                <span>Copyright &copy; {new Date().getFullYear()} | Privacy Policy | Nội dung đã được bảo vệ bản quyền</span>
                                <span className="ml-2"><img src={require('../../img/dmca-badge.png')} alt=""/></span>
                            </div>
                            <div className="float-right">
                                <img src={require('../../img/payment/payment-item.png')} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}


import Header from "../Commons/Header";
import Footer from "../Commons/Footer";
import SectionBreadcrumb from "../Commons/SectionBreadcrumb";
import '../../css/product-detail.css'
import {useState} from "react";
import {PopularProducts} from "../TopProductPage/ListProducts";

function DetailLeft() {
    const [slideIndex, setSlideIndex] = useState(0)

    function moveSlide(dir) {
        const currentSlide = slideIndex + dir
        if (currentSlide > -1 && currentSlide < 3)
            setSlideIndex(currentSlide)
    }

    return (
        <div className="detail-left">
            <div className="detail-slider">
                <div className="detail-slide" style={{transform: `translateX(${100 * (0 - slideIndex)}%)`}}>
                    <img src={require('../../img/detailsProduct/product-details-1.jpg')} alt=""/>
                </div>
                <div className="detail-slide" style={{transform: `translateX(${100 * (1 - slideIndex)}%)`}}>
                    <img src={require('../../img/detailsProduct/product-details-2.jpg')} alt=""/>
                </div>
                <div className="detail-slide" style={{transform: `translateX(${100 * (2 - slideIndex)}%)`}}>
                    <img src={require('../../img/detailsProduct/product-details-3.jpg')} alt=""/>
                </div>
            </div>
            <button className="btn slide-arrow btn-prev" onClick={() => moveSlide(-1)}><i className="bi bi-chevron-left"></i></button>
            <button className="btn slide-arrow btn-next" onClick={() => moveSlide(1)}><i className="bi bi-chevron-right"></i></button>
            <div className="slider-thumbnails d-flex justify-content-between">
                <div className={slideIndex === 0 && 'active'} onClick={() => setSlideIndex(0)}>
                    <img src={require('../../img/detailsProduct/product-details-1.jpg')} alt=""/>
                </div>
                <div className={slideIndex === 1 && 'active'} onClick={() => setSlideIndex(1)}>
                    <img src={require('../../img/detailsProduct/product-details-2.jpg')} alt=""/>
                </div>
                <div className={slideIndex === 2 && 'active'} onClick={() => setSlideIndex(2)}>
                    <img src={require('../../img/detailsProduct/product-details-3.jpg')} alt=""/>
                </div>
            </div>
        </div>
    )
}

function DetailCenter() {
    return (
        <div className="detail-center">
            <h6>SALE - full source code webiste bán hàng laptop - Sử dụng PHP Framework
                CodeIgniter <span>[Mã code 36122]</span></h6>
            <div className="detail-center-stats d-flex align-items-center">
                <div className="product-item-stars mr-3">
                    {Array(5).fill(1).map((value, index) => (<i className="fa fa-star" key={index}></i>))}
                </div>
                <span>(12 Đánh giá)</span>
                <span><i className="fa fa-eye"></i> 12</span>
                <span><i className="fa fa-download"></i> 34</span>
            </div>
            <div className="detail-center-des">
                Chia sẻ code + database website tuyển dụng người giúp việc xây dựng trên PHP thuần, đơn giản, dễ hiểu, dành
                cho sinh viên lập trình tham khảo
            </div>
            <div className="detail-center-info">
                <div><span>Danh mục</span> Android</div>
                <div><span>Nhóm code</span> Top code</div>
                <div><span>Ngày đăng</span> 12-06-2023</div>
                <div><span>Loại file</span> Full code</div>
                <div><span>File download</span> 23 MB</div>
            </div>
        </div>
    )
}

function DetailRight() {
    return (
        <div className="detail-right">
            <div className="detail-right-offer">
                <h6>PHÍ DOWNLOAD</h6>
                <span className="offer-price">150.000 VNĐ</span>
                <button className="offer-download"><i className="fa fa-download"></i> TẢI NGAY</button>
                <button className="offer-favorite"><i className="fa fa-thumbs-up"></i> Lưu vào yêu thích</button>
                <span><span>CHIA SẺ NHANH</span> (CODE 9433)</span>
                <div>
                    <img src="https://topcode.vn/assets/images/share-email.png" alt=""/>
                    <div>Gửi code tới email bạn bè</div>
                </div>
                <div className="d-flex justify-content-center">
                    <span><i className="fa fa-thumbs-up"></i> Like</span>
                    <span><i className="fa fa-share-alt"></i> Share</span>
                </div>
            </div>
        </div>
    )
}
function DetailDivider({title}) {
    return (<div className="detail-divider mt-5"><span>{title}</span></div>)
}

function DetailDescription() {
    return (
        <>
            <DetailDivider title={'MÔ TẢ CHI TIẾT'}/>
            <div>
                Source code app đặt trà sữa, cà phê, bánh ngọt Android Studio với giao diện đẹp mắt, dễ sử dụng.

                Source code được chia làm 2 phần: client và server

                Client: viết bằng java, sử dụng Android Studio
                Server: viết bằng php sử dụng MySQL
                Các chức năng chính:

                Chức năng của người dùng:

                Chức năng đăng nhập, đăng ký
                Chức năng Order: chọn kích thước, topping, số lượng, ghi chú,..
                Chức năng đặt hàng: chỉnh sửa địa chỉ giao hàng, áp dụng voucher, chỉnh sửa order, gửi thông báo đơn hàng mới đến admin
                Chức năng xem lịch sử đơn hàng: xem đơn hàng đang chờ xác nhận, đang giao, hoàn tất, đã hủy
                Chức năng xem danh sách voucher: xem thông tin chi tiết voucher
                Chức năng xem sản phẩm yêu thích
                Chức năng thay đổi thông tin cá nhân: họ tên, địa chỉ giao hàng mặc định, mật khẩu,..
                Chức năng của admin:

                Chức năng quản lý đơn hàng: duyệt đơn (gửi thông báo tình trạng đơn đến điện thoại người dùng), hoàn tất đơn, hủy đơn,...
                Chức năng quản lý tài khoản: thêm, sửa, xóa tài khoản
                Chức năng quản lý sản phẩm: thêm sửa xóa sản phẩm
                Chức năng quản lý voucher: tạo voucher, gửi voucher đến tất cả người dùng,...
                Chức năng quản lý doanh thu: xem doanh số bán hàng
            </div>
        </>
    )
}

function Installation() {
    return (
        <>
            <DetailDivider title={'HƯỚNG DẪN CÀI ĐẶT'}/>
            <div>
                Yêu cầu phần mềm XAMPP hỗ trợ phiên bản PHP 7.4
                Giải nén và copy thư mục Website vào thư mục htdocs của xampp. Thông thường thư mục htdocs sẽ có đường dẫn: C:xampp -- htdocs.
                Chạy XAMPP.
                Truy cập đường dẫn: http://localhost/phpmyadmin/ và thêm cơ sở dư liệu với tên là: duan1
                Nhập lên trình duyệt đường dẫn: localhost/Website/
                Import cơ sở dữ liệu mẫu duan1.sql vào cơ sở dữ liệu duan1vừa tạo trên phpmyadmin. file cơ sở dữ liệu mới duan1.sql này nằm trong cùng
                một thư mục với tài liệu hưỡng dẫn này.
                Đã hoàn thành cài đặt website
                Tài khoản Admin
                - http://localhost/Website/site/tai_khoan/login.php:
                - tk: chucchuquan mk: 123456
            </div>
        </>
    )
}

function Comment() {
    return (
        <>
            <DetailDivider title={'BÌNH LUẬN'}/>
            <div className="detail-comment clearfix">
                <textarea placeholder="Vui lòng để lại bình luận..."/>
                <div className="d-flex justify-content-between">
                    <div>
                        <div className="input-box">
                            <label htmlFor="input-name">Họ và tên <span>*</span></label>
                            <input name="input-name" type="text"/>
                        </div>
                        <div className="input-box">
                            <label htmlFor="input-name">Email</label>
                            <input name="input-name" type="text"/>
                        </div>
                    </div>
                    <button>GỬI</button>
                </div>
            </div>
        </>
    )
}

function RatingModal({display, setDisplay}) {
    console.log(display)
    return (
        <div className="rating-modal" style={{display: `${display ? 'block' : 'none'}`}}>
            <div className="rating-modal-content">
                <div>
                    <span>Đánh giá</span>
                    <span onClick={() => setDisplay(false)}><i className="fa fa-x"></i></span>
                </div>
                <div>
                    <div>
                        SALE - full source code webiste bán hàng laptop - Sử dụng PHP Framework
                        CodeIgniter
                    </div>
                    <div className="rating-modal-stars my-4">
                        <div>
                            <i className="fa fa-star-o"></i>
                            <div>Rất tệ</div>
                        </div>
                        <div>
                            <i className="fa fa-star-o"></i>
                            <div>Tệ</div>
                        </div>
                        <div>
                            <i className="fa fa-star-o"></i>
                            <div>Bình thường</div>
                        </div>
                        <div>
                            <i className="fa fa-star-o"></i>
                            <div>Tốt</div>
                        </div>
                        <div>
                            <i className="fa fa-star-o"></i>
                            <div>Rất tốt</div>
                        </div>
                    </div>
                    <div>
                        <textarea placeholder="Mời bạn chia sẻ một số cảm nhận về sản phẩm..." />
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                        <input type="text" placeholder="Họ và tên (bắt buộc)"/>
                        <input type="text" placeholder="Số điện thoại"/>
                    </div>
                    <div className="my-3 rating-guarantee"><i className="fa fa-check-square-o"></i> Chúng tôi cam kết bảo mật số điện thoại của bạn</div>
                    <div className="text-center mt-3 mb-1">
                        <button>Gửi đánh giá ngay</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Rating() {
    const [isShow, setIsShow] = useState(false)
    return (
        <>
            <DetailDivider title={'ĐÁNH GIÁ'}/>
            <div className="detail-rating">
                <div className="row mt-5 mb-3">
                    <div className="col-lg-4 text-center">
                        <div className="rating-average">4.6<span>/5</span></div>
                        <div className="product-item-stars">
                            {Array(5).fill(1).map((value, index) => (<i className="fa fa-star" key={index}></i>))}
                        </div>
                        <div className="rating-count">1,233 đánh giá</div>
                        <div className="rating-action mt-3 text-center">
                            <button onClick={() => setIsShow(true)}><i className="fa fa-star mr-1"></i> Viết đánh giá
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="rating-chart">
                            {Array(5).fill(1).map((value, index) => (
                                <div key={index}>
                                    <div>{5 - index} <i className="fa fa-star"></i></div>
                                    <div><div></div></div>
                                    <div>1234</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="detail-rating-comment">
                    <div>
                        <div>Anh Hưng <span><i className="fa fa-check-circle"></i> Đã mua hàng</span> <span>3 tuần trước</span></div>
                        <div className="product-item-stars">
                            {Array(5).fill(1).map((value, index) => (<i className="fa fa-star" key={index}></i>))}
                        </div>
                        <div>Sảm phẩm rất tốt tôi rất hài lòng</div>
                    </div>
                    <div>
                        <div>Chị Hà <span><i className="fa fa-check-circle"></i> Đã mua hàng</span> <span>1 tuần trước</span></div>
                        <div className="product-item-stars">
                            {Array(5).fill(1).map((value, index) => (<i className="fa fa-star" key={index}></i>))}
                        </div>
                        <div>Rất hài lòng</div>
                    </div>
                </div>
            </div>
            <RatingModal display={isShow} setDisplay={(isShow) => setIsShow(isShow)}/>
        </>
    )
}

function DetailContent() {
    return (
        <>
            <DetailDescription/>
            <Installation/>
            <Rating/>
            <Comment/>
        </>
    )
}


function ProductDetailContainer() {
    return (
        <section className="product-details my-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-5">
                                <DetailLeft/>
                            </div>
                            <div className="col-lg-7">
                                <DetailCenter/>
                            </div>
                        </div>
                        <DetailContent/>
                    </div>
                    <div className="col-lg-3">
                        <DetailRight/>
                        <PopularProducts/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default function ProductDetails() {
    return (
        <>
            <Header/>
            <SectionBreadcrumb/>
            <ProductDetailContainer/>
            <Footer/>
        </>
    )
}
import Header from "../Commons/Header";
import Footer from "../Commons/Footer";
import SectionBreadcrumb from "../Commons/SectionBreadcrumb";
import '../../css/product-detail.css'
import {useState} from "react";

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
                <div className={slideIndex === 0 && 'active'} onClick={() => setSlideIndex(0)}><img src={require('../../img/detailsProduct/product-details-1.jpg')} alt=""/></div>
                <div className={slideIndex === 1 && 'active'} onClick={() => setSlideIndex(1)}><img src={require('../../img/detailsProduct/product-details-2.jpg')} alt=""/></div>
                <div className={slideIndex === 2 && 'active'} onClick={() => setSlideIndex(2)}><img src={require('../../img/detailsProduct/product-details-3.jpg')} alt=""/></div>
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
                    </div>
                    <div className="col-lg-3">
                        <DetailRight/>
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
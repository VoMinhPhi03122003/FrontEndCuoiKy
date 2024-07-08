import Header from "../Commons/Header";
import Footer from "../Commons/Footer";
import SectionBreadcrumb from "../Commons/SectionBreadcrumb";
import '../../css/product-detail.css'


function ProductDetailContainer() {
    return (
        <section className="product-details my-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="detail-left">
                                    <img src={require('../../img/detailsProduct/product-details-1.jpg')} alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="detail-center">
                                    <h6>Nến thơm hũ thủy tinh <span>[Mã sản phẩm 36122]</span></h6>
                                    <div className="detail-center-stats d-flex align-items-center">
                                        <div className="product-item-stars mr-3">
                                            {Array(5).fill(1).map((value, index) => (
                                                <i className="fa fa-star" key={index}></i>))}
                                        </div>
                                        <span>(12 Đánh giá)</span>
                                        <span><i className="fa fa-eye"></i> 12</span>
                                        <span><i className="fa fa-download"></i> 34</span>
                                    </div>
                                    <div className="detail-center-des">
                                        Chia sẻ code + database website tuyển dụng người giúp việc xây dựng trên PHP
                                        thuần, đơn giản, dễ hiểu, dành
                                        cho sinh viên lập trình tham khảo
                                    </div>
                                    <div className="detail-center-info">
                                        <div><span>Danh mục</span> Android</div>
                                        <div><span>Nhóm sản phẩm </span> Sản phẩm code</div>
                                        <div><span>Ngày đăng</span> 12-06-2024</div>
                                        <div><span>Loại sản phẩm</span> Chất lượng</div>
                                        <div><span>File download</span> 23 MB</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="detail-right">
                            <div className="detail-right-offer">
                                <h6>PHÍ DOWNLOAD</h6>
                                <span className="offer-price">150.000 VNĐ</span>
                                <button className="offer-download"><i className="fa fa-download"></i> TẢI NGAY</button>
                                <button className="offer-favorite"><i className="fa fa-thumbs-up"></i> Lưu vào yêu thích
                                </button>
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
import Header from "../Commons/Header";
import Footer from "../Commons/Footer";
import '../../css/product-detail.css'
import {useMemo, useRef, useState} from "react";
import {PopularProducts} from "../TopProductPage/ListProducts";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {formatNumber, formatRating} from "../../javascript/utils";
import Parser from 'html-react-parser'
import {useDispatch, useSelector} from "react-redux";
import {increaseDownloaded, increaseViewed, putProduct} from "../../redux/Action";

function DetailLeft() {
    const p = useSelector(state => state.productReducer.product)
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
                    <img src={p.thumbnails[0]} alt=""/>
                </div>
                <div className="detail-slide" style={{transform: `translateX(${100 * (1 - slideIndex)}%)`}}>
                    <img src={p.thumbnails[1]} alt=""/>
                </div>
                <div className="detail-slide" style={{transform: `translateX(${100 * (2 - slideIndex)}%)`}}>
                    <img src={p.thumbnails[2]} alt=""/>
                </div>
            </div>
            <button className="btn slide-arrow btn-prev" onClick={() => moveSlide(-1)}><i className="bi bi-chevron-left"></i></button>
            <button className="btn slide-arrow btn-next" onClick={() => moveSlide(1)}><i className="bi bi-chevron-right"></i></button>
            <div className="slider-thumbnails d-flex justify-content-between">
                <div className={slideIndex === 0 && 'active'} onClick={() => setSlideIndex(0)}>
                    <img src={p.thumbnails[0]} alt=""/>
                </div>
                <div className={slideIndex === 1 && 'active'} onClick={() => setSlideIndex(1)}>
                    <img src={p.thumbnails[1]} alt=""/>
                </div>
                <div className={slideIndex === 2 && 'active'} onClick={() => setSlideIndex(2)}>
                    <img src={p.thumbnails[2]} alt=""/>
                </div>
            </div>
        </div>
    )
}

export function StarRate({stars, type}) {
    const fullStars = Math.floor(stars)
    const remain = (5 - stars) - Math.floor(5 - stars)
    return (
        <>
            {Array(fullStars).fill(1).map((value, index) => (<i className={type} key={index}></i>))}
            {remain < 1 && remain > 0 && <i className={type} key={fullStars} style={{color: '#BEBEBE'}}></i>}
            {Array(Math.floor(5 - stars)).fill(1).map((value, index) =>
                (<i className={type} key={index} style={{color: '#BEBEBE'}}></i>))}
        </>
    )
}

function DetailCenter() {
    const p = useSelector(state => state.productReducer.product)

    return (
        <div className="detail-center">
            <h6>{p.name} <span>[Mã sản phẩm {p.id}]</span></h6>
            <div className="detail-center-stats">
                <div className="product-item-stars mr-3">
                    <StarRate stars={formatRating(p.rating).average} type={"bi bi-star-fill"}/>
                </div>
                <span>({formatRating(p.rating).total} Đánh giá)</span>
                <span><i className="fa fa-eye"></i> {p.viewed}</span>
                <span><i className="fa fa-download"></i> {p.downloaded}</span>
            </div>
            <div className="detail-center-des">{p.description}</div>
            <div className="detail-center-info">
                <div><i className="fa fa-list"></i><span>Danh mục</span> <Link to={'/'}>{p.type.name}</Link></div>
                <div><i className="fa fa-layer-group"></i><span>Nhóm sản phẩm</span> <Link to={'/'}>Top sản phẩm</Link>
                </div>
                <div><i className="fa fa-calendar"></i><span>Ngày đăng</span> {p.release}</div>
                <div><i className="fa fa-object-group"></i><span>Loại file</span> {p.file.type}</div>
                <div><i className="fa fa-file-code"></i><span>File download</span> {p.file.name}
                    <span>[{p.file.size} {p.file.unit}]</span></div>
            </div>
        </div>
    )
}

function DetailRight() {
    const product = useSelector(state => state.productReducer.product)
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    function handledDownload() {
        dispatch(increaseDownloaded())
        navigate(".", {state: {...location.state, downloaded: location.state.downloaded + 1}})
    }

    return (
        <div className="detail-right">
            <div className="detail-right-offer">
                <h6>PHÍ DOWNLOAD</h6>
                <span className="offer-price">{formatNumber((product.price), '.')}<sup>đ</sup></span>
                <button className="offer-download" onClick={handledDownload}>
                    <img src="https://topcode.vn/assets/images/ic-down.png" alt=""/> TẢI NGAY</button>
                <button className="offer-favorite"><i className="fa fa-thumbs-up"></i> Lưu vào yêu thích</button>
                <span><span>CHIA SẺ NHANH</span> (CODE {product.id})</span>
                <div>
                    <img src="https://topcode.vn/assets/images/share-email.png" alt=""/>
                    <div>Gửi sản phẩm tới email bạn bè</div>
                </div>
                <div className="d-flex justify-content-center">
                    <span><i className="fa fa-thumbs-up"></i> Like</span>
                    <span><i className="fa fa-share-alt"></i> Share</span>
                </div>
            </div>
        </div>
    )
}

function DetailDivider({title, refData}) {
    return (<div className="detail-divider mt-5" ref={refData}><span>{title}</span></div>)
}

function DetailDescription({p, goTo}) {
    return (
        <>
            <DetailDivider title={'MÔ TẢ CHI TIẾT'}/>
            <div className="detail-description">
                <div>{p.description}</div>
                {Parser(p.detail)}
                <div className="di-guide">XEM THÊM <span>==</span><span
                    onClick={goTo}> Hướng dẫn cài đặt chi tiết</span></div>
            </div>
        </>
    )
}

function DemoImage({p}) {
    return (
        <>
            <DetailDivider title={'HÌNH ẢNH DEMO'}/>
            <div className="text-center">
                {p.thumbnails.map((value, index) => {
                    return (
                        <>
                            <img style={{display: 'inline-block', marginBottom: '15px'}} key={index} src={value} alt=""/>
                            <p className="text-center mt-0 mb-5 font-italic text-dark">Hình {index + 1}</p>
                        </>
                    )
                })}
            </div>
        </>
    )
}

function Installation({p, refData}) {
    return (
        <>
            <DetailDivider title={'HƯỚNG DẪN CÀI ĐẶT'} refData={refData}/>
            <div className="installation">
                {Parser(p.installation)}
            </div>
        </>
    )
}

function RatingModal({closeModal}) {
    const ratingCriteria = ['Rất tệ', 'Tệ', 'Bình thường', 'Tốt', 'Rất tốt']
    return (
        <div className="rating-modal">
            <div className="rating-modal-content">
                <div>
                    <span>Đánh giá</span>
                    <span onClick={closeModal}><i className="fa fa-x"></i></span>
                </div>
                <div>
                    <div>
                        SALE - full source code webiste bán hàng laptop - Sử dụng PHP Framework
                        CodeIgniter
                    </div>
                    <div className="rating-modal-stars my-4">
                        {ratingCriteria.map((value, index) => (
                            <div key={index}>
                                <i className="fa fa-star-o"></i>
                                <div>{value}</div>
                            </div>
                        ))}
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

function Rating({p}) {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <DetailDivider title={'ĐÁNH GIÁ'}/>
            <div className="detail-rating">
                <div className="row mt-5 mb-3">
                    <div className="col-lg-4 text-center">
                        <div className="rating-average">{formatRating(p.rating).average}<span>/5</span></div>
                        <div className="product-item-stars">
                            <StarRate stars={formatRating(p.rating).average} type={"fa fa-star"}/>
                        </div>
                        <div className="rating-count">{formatNumber(formatRating(p.rating).total, ',')} đánh giá</div>
                        <div className="rating-action mt-3 text-center">
                            <button onClick={() => setShowModal(true)}><i className="bi bi-star-fill mr-1"></i> Viết đánh giá
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="rating-chart">
                            {Array(5).fill(1).map((value, index) => (
                                <div key={index}>
                                    <div>{5 - index} <i className="bi bi-star-fill"></i></div>
                                    <div>
                                        <div style={{width: `${formatRating(p.rating)['avg' + (5 - index)]}%`}}></div>
                                    </div>
                                    <div>{p.rating[(5 - index) + 'star']}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="detail-rating-comment">
                    <div>
                        <div>Anh Hưng <span><i className="fa fa-check-circle"></i> Đã mua hàng</span> <span>3 tuần trước</span></div>
                        <div className="product-item-stars">
                            <StarRate stars={5} type={"bi bi-star-fill"}/>
                        </div>
                        <div>Sảm phẩm rất tốt tôi rất hài lòng</div>
                    </div>
                    <div>
                        <div>Chị Hà <span><i className="fa fa-check-circle"></i> Đã mua hàng</span> <span>1 tuần trước</span></div>
                        <div className="product-item-stars">
                            <StarRate stars={5} type={"bi bi-star-fill"}/>
                        </div>
                        <div>Rất hài lòng</div>
                    </div>
                </div>
            </div>
            {showModal && <RatingModal closeModal={() => setShowModal(false)}/>}
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
            <div className="mt-5">
                <div className="comment-item">
                    <div className="comment-avatar mr-3">
                        <div>N</div>
                    </div>
                    <div className="comment-detail">
                        <div>
                            <div>Ngô Bá Khá</div>
                            <div>12/06/2023</div>
                        </div>
                        <div>
                            Dạ cho em hỏi thời hạn bảo hành máy này khi mua ở TTDĐ là ntn? Nếu lỗi thì sẽ xử lí trong bao lâu?
                        </div>
                    </div>
                </div>
                <div className="comment-item">
                    <div className="comment-avatar mr-3">
                        <div>N</div>
                    </div>
                    <div className="comment-detail">
                        <div>
                            <div>Ngô Bá Khá</div>
                            <div>12/06/2023</div>
                        </div>
                        <div>
                            Dạ cho em hỏi thời hạn bảo hành máy này khi mua ở TTDĐ là ntn? Nếu lỗi thì sẽ xử lí trong bao lâu?
                        </div>
                    </div>
                </div>
                <div className="comment-item">
                    <div className="comment-avatar mr-3">
                        <div>N</div>
                    </div>
                    <div className="comment-detail">
                        <div>
                            <div>Ngô Bá Khá</div>
                            <div>12/06/2023</div>
                        </div>
                        <div>
                            Dạ cho em hỏi thời hạn bảo hành máy này khi mua ở TTDĐ là ntn? Nếu lỗi thì sẽ xử lí trong bao lâu?
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function DetailContent() {
    const p = useSelector(state => state.productReducer.product)
    const ref = useRef(null)
    const goToInstallation = () => ref.current.scrollIntoView({behavior: "auto"})
    return (
        <>
            <DetailDescription p={p} goTo={goToInstallation}/>
            <DemoImage p={p}/>
            <Installation p={p} refData={ref}/>
            <Rating  p={p}/>
            <Comment/>
        </>
    )
}


function ProductDetailContainer() {
    const location = useLocation()
    const dispatch = useDispatch()

    useMemo(() => {
        dispatch(putProduct(location.state))
    }, [dispatch, location.state])

    dispatch(increaseViewed())

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
            <ProductDetailContainer/>
            <Footer/>
        </>
    )
}
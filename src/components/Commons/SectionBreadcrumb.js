import breadcrumb_1 from '../../img/breadcrumb/breadcrumb_1.png'
function SectionBreadcrumb() {
    return (
        <section className="breadcrumb-section set-bg" style={{ backgroundImage: `url(${breadcrumb_1})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="breadcrumb__text">
                            <div className="breadcrumb__option">
                                <a href="">Trang chủ</a>
                                <a href="">Chi tiết sản phẩm</a>
                                <span>App Tin tức</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SectionBreadcrumb;

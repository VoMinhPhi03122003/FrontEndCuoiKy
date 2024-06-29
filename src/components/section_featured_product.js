function SectionFeaturedCode(){
    return(
        <section className="featured spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2> SẢN PHẨM NỔI BẬT</h2>
                        </div>
                        <div className="featured__controls">
                            <ul>
                                <li className="active" data-filter="*">Đồ gốm</li>
                                <li data-filter=".oranges">Bánh-kẹo</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SectionFeaturedCode;
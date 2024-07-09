import breadcrumb_1 from '../../img/breadcrumb/breadcrumb_1.png'
function SectionBreadcrumb() {
    const styleBreadcrumb = {display: "flex", justifyContent: "center"}
    return (
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb" style={styleBreadcrumb}>
                    <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                    <li className="breadcrumb-item"><a href="#">Chi tiết giỏ hàng</a></li>
                </ol>
            </nav>
        </div>
    )
}

export default SectionBreadcrumb;

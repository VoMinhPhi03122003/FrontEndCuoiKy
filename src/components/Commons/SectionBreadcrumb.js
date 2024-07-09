import {Link} from "react-router-dom";

function SectionBreadcrumb() {
    const styleBreadcrumb = {display: "flex", justifyContent: "center"}
    return (
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb" style={styleBreadcrumb}>
                    <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                    <li className="breadcrumb-item"><Link to="">Chi tiết giỏ hàng</Link></li>
                </ol>
            </nav>
        </div>
    )
}

export default SectionBreadcrumb;

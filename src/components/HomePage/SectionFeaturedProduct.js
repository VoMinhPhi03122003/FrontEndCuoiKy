import React, {useState} from "react";
import ListProductFeatured from './ListProductsFeatured'

function TitleSection(){

    // Tạo state địa phương activeItem và hàm setActiveItem để cập nhật giá trị của state
    const [activeItem, setActiveItem] = useState(null);

    // Hàm xử lý sự kiện click, cập nhật giá trị của activeItem và hiển thị thông báo alert
    const handleClick = (filter) => {
        setActiveItem(filter);
        alert(`Clicked on ${filter}`);
    };

    return(
        <div className="col-lg-12">
            <div className="section-title">
                <h2>SẢN PHẨM NỔI BẬT</h2>
            </div>
            {/*  <div className="featured__controls">
                <ul>
                    <li
                        className={activeItem === ".suckhoethugian" ? "active" : ""}
                        data-filter=".suckhoethugian"
                        onClick={() => handleClick(".suckhoethugian")}>
                        Sức khỏe và thư giản
                    </li>
                    <li
                        className={activeItem === ".tuichuomnonglanh" ? "active" : ""}
                        data-filter=".tuichuomnonglanh"
                        onClick={() => handleClick(".iOS")}>
                        Túi chườm nóng - lạnh
                    </li>
                    <li
                        className={activeItem === ".dogom" ? "active" : ""}
                        data-filter=".dogom"
                        onClick={() => handleClick(".dogom")}>
                        Đồ gốm
                    </li>
                    <li
                        className={activeItem === ".tranh" ? "active" : ""}
                        data-filter=".tranh"
                        onClick={() => handleClick(".tranh")}>
                        Tranh
                    </li>
                </ul>
            </div> */}
        </div>
    )
}

function SectionFeaturedProduct() {

    return (
        <section className="featured spad">
            <div className="container">
                <div className="row">
                    <TitleSection/>
                </div>
                <ListProductFeatured/>
            </div>
        </section>
    );
}

export {TitleSection};

export default SectionFeaturedProduct;
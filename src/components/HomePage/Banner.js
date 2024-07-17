import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../css/slide.css'

import img_banner_1 from '../../img/banner/banner-1.jpg';
import img_banner_2 from '../../img/banner/banner-2.jpg';
import img_banner_3 from '../../img/banner/banner-3.jpg';
import {Link} from "react-router-dom";

function Banner() {
    // Định nghĩa thuộc tính của hình ảnh slide
    const styleImage = {
      //  width: '80%',
       // height: '30%'
    }

    // Định nghĩa các thiết lập của carousel
    const carouselSettings = {
        showIndicators: false,
        showThumbs: false,
        showStatus: false,
        showArrows: true,
        autoPlay: true, // Tự động phát carousel
        interval: 5000,  // Thời gian giữa các lần chuyển đổi ảnh là 8 giây (8000 mili giây)
        infiniteLoop: true, // Cho phép lặp vô hạn carousel
        stopOnHover: true  // Dừng carousel khi con trỏ chuột nằm trên nó
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="banner-left list-group">
                            <Link to="/products?type=dogomsu" className="list-group-item"><i
                                className="fa fa-code"></i> Đồ gốm sứ</Link>
                            <Link to="/products?type=domaytredan" className="list-group-item"><i
                                className="fa fa-code"></i> Đồ mây tre đan</Link>
                            <Link to="/products?type=dogo" className="list-group-item"><i className="fa fa-code"></i> Đồ gỗ </Link>
                            <Link to="/products?type=dotheuvadet" className="list-group-item"><i
                                className="fa fa-code"></i> Đồ thêu và dệt</Link>
                            <Link to="/products?type=dotrangsucthucong" className="list-group-item"><i
                                className="fa fa-code"></i> Đồ trang sức </Link>
                            <Link to="/products?type=doda" className="list-group-item"><i
                                className="fa fa-code"></i> Đồ da</Link>
                            <Link to="/products?type=nenthucong" className="list-group-item"><i
                                className="fa fa-code"></i> Nến thủ công</Link>
                            <Link to="/products?type=xaphong" className="list-group-item"><i
                                className="fa fa-code"></i> Xà phòng</Link>
                            <Link to="/products?type=dungcu" className="list-group-item"><i
                                className="fa fa-code"></i> Dụng cụ</Link>
                        </div>
                    </div>
                    <div className="col-sm-7">
                        <Carousel className="main-slide" {...carouselSettings}>
                            <div>
                                <img style={styleImage} src={img_banner_1} alt=""/>
                            </div>
                            <div>
                                <img style={styleImage} src={img_banner_2} alt=""/>
                            </div>
                            <div>
                                <img style={styleImage} src={img_banner_3} alt=""/>
                            </div>
                        </Carousel>
                    </div>
                    <div className="col-sm-2 pl-0">
                        <div className="banner-right text-right">
                            <img src="https://sharecode.vn/assets/images/thiet-ke-web-gia-re.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Banner;
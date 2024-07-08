import React from 'react';
import '../../css/slide.css'

import img_banner_1 from '../../image/banner/banner-1.jpg';
import img_banner_2 from '../../image/banner/banner-2.jpg';
import img_banner_3 from '../../image/banner/banner-3.jpg';
import {Carousel} from "react-bootstrap";

function Banner() {
    // Định nghĩa thuộc tính của hình ảnh slide
    const styleImage = {
        width: '80%',
        height: '30%'
    }

    // Định nghĩa các thiết lập của carousel
    const carouselSettings = {
        autoPlay: true, // Tự động phát carousel
        interval: 8000,  // Thời gian giữa các lần chuyển đổi ảnh là 8 giây (8000 mili giây)
        infiniteLoop: true, // Cho phép lặp vô hạn carousel
        stopOnHover: true  // Dừng carousel khi con trỏ chuột nằm trên nó
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-10">
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
                        </Carousel></div>
                </div>
            </div>
        </>
    );

}

export default Banner;
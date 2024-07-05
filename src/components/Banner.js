import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img_banner_1 from '../image/banner/banner-1.jpg';
import img_banner_2 from '../image/banner/banner-2.jpg';
import img_banner_3 from '../image/banner/banner-3.jpg';
function Banner() {
    const settings = {
        dots: true,// Hiển thị các chấm chỉ số
        infinite: true, // Vô hạn cuộn
        speed: 5, // Tốc độ chuyển đổi
        slidesToShow: 1, // Số lượng hiển thị hình ảnh trên một slide
        slidesToScroll: 1, // Số lượng hình ảnh được cuộn khi chuyển đổi
    };

    return (
        <Slider {...settings}>
            <div className="hero__item">
                <div className="hero__text">
                    <img src={img_banner_1} alt="Banner 1"/>
                </div>
            </div>
            <div className="hero__item">
                <div className="hero__text">
                    <img src={img_banner_2} alt="Banner 2"/>
                </div>
            </div>
            <div className="hero__item">
                <div className="hero__text">
                    <img src={img_banner_3} alt="Banner 3"/>
                </div>
            </div>
        </Slider>
    )
}

export default Banner;
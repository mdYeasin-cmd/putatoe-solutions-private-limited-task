import React from 'react';
import Slider from "react-slick";
import BannerImg1 from './../../assets/Banner/covid-essential-products.jpg';
import BannerImg2 from './../../assets/Banner/cleaning-essential.jpeg';
import BannerImg3 from './../../assets/Banner/esential-foods.jpg';
import BannerImg4 from './../../assets/Banner/monthly-cooking-essential.png';
import './Banner.css';

const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img src={BannerImg1} alt="" className="w-full h-[550px]" />
                </div>
                <div>
                    <img src={BannerImg2} alt="" className="w-full h-[550px]" />
                </div>
                <div>
                    <img src={BannerImg3} alt="" className="w-full h-[550px]" />
                </div>
                <div>
                    <img src={BannerImg4} alt="" className="w-full h-[550px]" />
                </div>
            </Slider>
        </div>
    );
};

export default Banner;
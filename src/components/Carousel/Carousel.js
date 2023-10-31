import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SampleNextArrow from "./SamleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import Slide_1 from "../../../public/images/slider/slider-1.png";
import Slide_2 from "../../../public/images/slider/slider-2.png";
import Slide_3 from "../../../public/images/slider/slider-3.png";
import Slide_4 from "../../../public/images/slider/slider-4.png";
import Slide_5 from "../../../public/images/slider/slider-5.png";
import styles from "./styles.module.sass";
const Carousel = () => {
    const settings = {
        className: "carousel",
        dots: false,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <Slider {...settings}>
            <div className={styles.img_box}>
                <img src={Slide_1} alt=""/>
            </div>
            <div className={styles.img_box}>
                <img src={Slide_2} alt=""/>
            </div>
            <div className={styles.img_box}>
                <img src={Slide_3} alt=""/>
            </div>
            <div className={styles.img_box}>
                <img src={Slide_4} alt=""/>
            </div>
            <div className={styles.img_box}>
                <img src={Slide_5} alt=""/>
            </div>
        </Slider>
    );
}
export default Carousel;
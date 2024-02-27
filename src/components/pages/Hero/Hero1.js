import React, {Fragment} from 'react';
import Slider from "react-slick";
import '../Hero/hero.css';

// import heroData from '../../data/hero1.json';
import {NavLink} from "react-router-dom";

import imgx from '../../../assets/images/slider/slide-1.jpg';

/**
 * Hero for home style 1
 * @returns {*}
 * @constructor
 */
function Hero1() {

    /**
     * slider settings with parameters
     * @type {{fade: boolean, dots: boolean, infinite: boolean, slidesToScroll: number, focusOnSelect: boolean, slidesToShow: number, lazyLoad: boolean, speed: number, autoplay: boolean}}
     */
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        focusOnSelect: false,
        fade: true,
        lazyLoad: true
    };



    const heroData = [
        {
            "id": 1,
            "img": "http://shopafricana.co/wp-content/uploads/2024/01/art-of-life210124_40-scaled.jpg", //imgx,//"../../../assets/images/slider/slide-1.jpg",
            "title": "Art of Life",
            "text": "Collection"
        },
        {
            "id": 2,
            "img": "http://shopafricana.co/wp-content/uploads/2024/01/art-of-life210124_26-scaled.jpg", //imgx,//"../../../assets/images/slider/slide-2.jpg",
            "title": "Art of Life",
            "text": "Collection"
        },
        // {
        //     "id": 3,
        //     "img": imgx,//"../../../assets/images/slider/slide-3.jpg",
        //     "title": "Art of Life",
        //     "text": "Collection"
        // }
    ]

    return (
        <Fragment>
            <section className="hero-2">
                <Slider {...settings}>
                    {
                        heroData.map((item, index) => (
                            <div key={index} className="swiper-slide">
                                <div className="slide-inner slide-bg-image"
                                     style={{backgroundImage: `url(${item.img})`}}>
                                    <div className="container-1410">
                                        {/* <div className="slide-text">
                                            <p>{item.text}</p>
                                        </div> */}
                                        <div className="slide-title">
                                            <h2>{item.title}</h2>
                                        </div>
                                        <div className="clearfix"/>
                                        <div className="slide-btns">
                                            <NavLink to="/shop" className="theme-btn-s7">Shop The Collection</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </section>
        </Fragment>
    );
}

export default Hero1;
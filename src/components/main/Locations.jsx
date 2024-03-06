import React, { useState, Fragment } from 'react';
import Slider from "react-slick";
import './react-css/products.css';
import { Link, useNavigate } from "react-router-dom";
import img1 from '../../assets/images/locations/1.png';
import img2 from '../../assets/images/locations/2.png';
import img3 from '../../assets/images/locations/3.png';
import img4 from '../../assets/images/locations/4.png';

function Locations({ onQuickViewClick }) {
    const navigate = useNavigate();
    const [isPrevHovered, setPrevHovered] = useState(false);
    const [isNextHovered, setNextHovered] = useState(false);
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 600,
        swipeToSlide: true,
        autoplaySpeed: 6000,
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const locations = {
        "locations": [
            {
                "url": img1,
                "location": "AFRICANA X ABUJA",
                "street": "Jabi Lake Mall, Bala Sokoto Way, Jabi,",
                "state": "Abuja, Nigeria.",
                "time": "Mon – Sat: 9am – 7pm, Sun: 11am – 7pm"
            },
            {
                "url": img2,
                "location": "AFRICANA COUTURE ABUJA",
                "street": "17, Monrovia Street, Wuse 2,",
                "state": "Abuja, Nigeria.",
                "time": "Mon – Sat: 9am – 7pm, Sun: CLOSED"
            },
            {
                "url": img3,
                "location": "AFRICANA DAKAR",
                "street": "Route de King Fahd Palace,",
                "state": "Dakar, Senegal.",
                "time": "Mon – Sat: 9am – 8pm, Sun: APPOINTMENTS"
            },
            {
                "url": img4,
                "location": "AFRICANA ABIDJAN",
                "street": "1055, Marcroni,",
                "state": "Abidjan, Côte d’Ivoire 36BP.",
                "time": "Mon – Sat: 9am – 8pm, Sun: APPOINTMENTS"
            }
        ]
    }

    return (
        <Fragment>
            <div className="container-1410">
            <div className='flex justify-start mt-12 mb-2 mx-2'>OUR STORES</div>
            <section className=" mb-8">
                <div className="">
                    <div className="products-wrapper">
                        <ul>
                            <Slider {...settings}>
                                {
                                    locations.locations.map((location, index) => (
                                        <li key={index} className="product">
                                            <div className="product-holder mx-1">
                                                <div style={{ cursor: 'pointer' }}>
                                                    <img loading="lazy" src={location.url} alt="" />
                                                </div>
                                            </div>
                                            
                                                <div className="pl-1">
                                                    <h4 className="text-left flex items-center mt-4 cursor-pointer">
                                                        <div className="text-sm uppercase">{location.location}</div>
                                                    </h4>
                                                    <h4 className="text-left flex items-center mt-1 cursor-pointer">
                                                        <div className="text-sm uppercase">{location.street}</div>
                                                    </h4>
                                                    <h4 className="text-left flex items-center mt-1 cursor-pointer">
                                                        <div className="text-sm font-bold">{location.state}</div>
                                                    </h4>
                                                    <div className="text-left flex items-center mt-1 mb-8">
                                                        <h4 className="h-4 text-xs cursor-pointer">{location.time}</h4>                                                        
                                                    </div>
                                                </div>
                                            
                                        </li>
                                    ))
                                }
                            </Slider>
                        </ul>
                    </div>
                </div>
            </section>
            </div>
        </Fragment>
    );
}

export default Locations;

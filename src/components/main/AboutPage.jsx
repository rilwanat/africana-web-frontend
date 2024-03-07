import React, {Fragment} from 'react';
import Slider from "react-slick";
import AfricanaFooter from './AfricanaFooter';
// import Instagram from '../global/Instagram';
// import PageTitle from '../global/PageTitle';
import AfricanaHeader from './AfricanaHeader';



import './react-css/about.css';

import { useNavigate } from "react-router-dom";
import signature from "../../assets/images/signature.svg";

function AboutPage({ options, cart, removeCartItem, removeAllCartItem  }) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        focusOnSelect: false
    };


    const navigate = useNavigate();

    const navigateToOnSale = () => {
        // setHoveredMenuItem("")
        // setIsMenuOpen(false);
        const productSlug = "all products";
        navigate('/on-sale', { state: { productSlug }, replace: true });
        //window.location.reload();
      }

      const navigateToContact = () => {
        // setHoveredMenuItem("")
        // setIsMenuOpen(false);
        // const productSlug = "all products";
        navigate('/contact', { state: {  }, replace: true });
        //window.location.reload();
      }

    return (
        <Fragment>
            <div className='bg-black'><AfricanaHeader options={options} cart={cart} removeCartItem={removeCartItem} removeAllCartItem={removeAllCartItem} /></div>

            {/* <PageTitle name="About us"/> */}

            {/* start about-section */}
            <section className="about-section section-padding" style={{ backgroundColor: '#eeeeee' }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col col-lg-8">
                            <div className="about-area">
                                <div className="info">
                                    <span className=''>About us</span>
                                    {/* <h2>Clothes crafted to fit</h2> */}
                                    <p>A story filled Urban clothing brand and a host of products from leather goods, female wears, sneakers and bags. And post-pandemic, we have seen growth in expansion into other west-African countries, including but not limited to Mali, Senegal, Ivory Coast, etc.</p>
                                    <img src={signature} className='mb-8'/>
                                    <a onClick={() => {navigateToContact()}} className="theme-btn-s3">Contact us</a>
                                </div>
                                <div className="img-holder">
                                    <img loading="lazy" src=
                                    // {about}
                                    "http://shopafricana.co/wp-content/uploads/2024/01/BRS_8445-1-copyBereal.webp"
                                    // "http://shopafricana.co/wp-content/uploads/2024/01/March-23-Document-Name22-scaled-1.jpg"
                                    // "https://shopafricana.co/wp-content/uploads/2023/12/Africana-Oversized-Tees-www.shopafricana.co_24-scaled-1.jpg" 
                                    alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4">
                            <div className="mission-vision-area">
                                <div>
                                    <h3>Who We Are</h3>
                                    <p>Africana is a fashion movement, that crafts masterful designs that reference an African root, while highlighting a modern look. The goal is to elevate the style and confidence of everyone who understands the power of fashion. What started over 10 years ago as a niche brand for kaftans and Agbada, has transcended all fashion touchpoints to include: Africa’s first Ready-to-wear Kaftan Store.</p>
                                </div>
                                {/* <div>
                                    <h3>Goal of our business</h3>
                                    <p>A story filled Urban clothing brand and a host of products from leather goods, female wears, sneakers and bags. And post-pandemic, we have seen growth in expansion into other west-African countries, including but not limited to Mali, Senegal, Ivory Coast, etc.</p>
                                </div> */}
                                 <a onClick={navigateToOnSale} style={{ cursor: 'pointer' }} className="theme-btn">Go to shop</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end about-section */}

            {/* start testimonials-section */}
            {/* <section className="testimonials-section" style={{ background: testimonial }}>
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="section-title-s4">
                                <h2>Client's quote</h2>
                                <p>##</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-md-6">
                            <div className="testimonial-grids testimonials-slider">
                                <Slider {...settings}>
                                    {
                                        testimonialsData.map((item, index) => (
                                            <div key={index} className="grid">
                                                <p>“{item.text}”</p>
                                                <div className="client-info">
                                                    <h5>{item.name}</h5>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* end testimonials-section */}

            {/* <Instagram/> */}
            <AfricanaFooter/>
        </Fragment>
    );
}

export default AboutPage;
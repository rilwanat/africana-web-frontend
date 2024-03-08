import React, {useState, Fragment, useEffect} from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import axios from 'axios';

import AfricanaHeader from './AfricanaHeader';
import AfricanaFooter from './AfricanaFooter';

import imgx from '../../assets/images/size.png';

function SizesPage({ options, addToCart, cart, removeCartItem, categories, removeAllCartItem, handleEmailAddress }) {
    return(
        <div>
            <div className='bg-black'><AfricanaHeader options={options} cart={cart} removeCartItem={removeCartItem} removeAllCartItem={removeAllCartItem}  handleEmailAddress={handleEmailAddress}/></div>

            <section className="shop-single-section section-padding" style={{ backgroundColor: '#eeeeee' }}>
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-md-6">
                            <div className="shop-single-slider slider-thumbnail">
                                {/* <Slider {...settings}>
                                    {
                                        data.images.map((item, index) => (
                                            <div key={index}>
                                                <img src={process.env.PUBLIC_URL + item.src}/>
                                            </div>
                                        ))
                                    }
                                </Slider> */}
                                <img src={imgx}/>
                                <div className="slider-nav"></div>
                            </div>
                        </div>
                        
                        <div className="col col-md-6">
                            <div className="product-details">
                                <h2>HOW TO MEASURE</h2>
                                
                                {/* <p>{data.shortDescription}</p> */}
                                <div className='flex flex-col ' >
                                <p className='' style={{ fontSize: '14px' }}><strong>CHEST:</strong> Measure under your arms around the fullest part of your chest.</p>
                                <p className='' style={{ fontSize: '14px' }}><strong>NECK:</strong> Measure around the middle of your neck (at the Adam's apple), keeping tape a bit loose.</p>
                                <p className='' style={{ fontSize: '14px' }}><strong>WAIST:</strong> Measure around your natural waistline, keeping the tape a little bit loose.</p>
                                <p className='' style={{ fontSize: '14px' }}><strong>SLEEVES:</strong> Measure from the edge of the shoulder along the edge to the end of the sleeve cuff.</p>
                                <p className='' style={{ fontSize: '14px' }}><strong>LENGTH:</strong> Measure from the waist, straight down to the botom of the hem.</p>
                                <p className='' style={{ fontSize: '14px' }}><strong>PLEASE NOTE:</strong> ALL MEASUREMENTS ARE IN INCHES.</p>
                                </div>
                                
                                
                            </div>
                        </div>
                        {/* end col */}
                    </div>
                    
                    
                </div>
                {/* end of container */}
            </section>


<AfricanaFooter/>
        </div>
    );
}

export default SizesPage;
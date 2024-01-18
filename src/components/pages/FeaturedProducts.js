import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

import img1 from '../../assets/images/feature-product/img-4.jpg';
import img2 from '../../assets/images/feature-product/img-11.jpg';
import img3 from '../../assets/images/feature-product/img-7.jpg';

/**
 * Featured Products Component
 * @returns {*}
 * @constructor
 */
function FeaturedProducts() {

    const featuredProductsData = [
        {
            "id" : 1,
            "img": img1, //"../../assets/images/feature-product/img-4.jpg",
            "title": "Clothing Collection"
        },
        {
            "id" : 2,
            "img": img2, //"../../assets/images/feature-product/img-11.jpg",
            "title": "Shoes Collection"
        },
        {
            "id" : 3,
            "img": img3, //"../../assets/images/feature-product/img-7.jpg",
            "title": "Essentials Collection"
        }
    ];

    return (
        <Fragment>
            {/* start featured-proeducts-section-s2 */}
            <section className="featured-proeducts-section-s2 section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="product-grids">
                              {
                                    featuredProductsData.map((item, index) => (
                                        <div key={index} className="grid mb-6">
                                            <div className="img-holder">
                                                <a href="/product-details">
                                                    <img 
                                                loading="lazy" 
                                                
                                                src={item.img} 
                                                alt=""/>
                                                
                                                </a>
                                            </div>
                                            <div className="details">
                                                <h3>{item.title}</h3>
                                                <Link className="shop-btn" to="/shop-full-width">
                                                    Shop Now
                                                </Link>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {/* end container-1410 */}
            </section>
            {/* end featured-proeducts-section-s2 */}
        </Fragment>
    );
}


export default FeaturedProducts;
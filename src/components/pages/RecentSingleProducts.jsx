import React, {Fragment} from 'react';
import Slider from "react-slick";
// import ReactTooltip from 'react-tooltip';

import './products.css';

/**
 * demo data
 */
// import productsData from '../../data/products.json';
import { Link, useNavigate, useParams } from 'react-router-dom';

import imgx from '../../assets/images/shop/img-2.jpg';

import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import CryptoJS from 'crypto-js';
import { AES } from 'crypto-js';


/**
 * Recent Single Products component
 * @param onQuickViewClick
 * @returns {*}
 * @constructor
 */
function RecentSingleProducts({onQuickViewClick, relatedProducts}) {

    
    const navigate = useNavigate();


    /**
     * slider settings
     * @type {{swipeToSlide: boolean, dots: boolean, infinite: boolean, responsive: *[], slidesToScroll: number, focusOnSelect: boolean, slidesToShow: number, autoplay: boolean, speed: number, autoplaySpeed: number}}
     */
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 300,
        swipeToSlide: true,
        autoplaySpeed: 2000,
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


    // Function to find the lowest price among product variants
function findLowestPrice(product) {
    let lowestPrice = Infinity;
  
    //products.forEach(product => {
      product.productVariants.forEach(variant => {
        if (variant.price < lowestPrice) {
          lowestPrice = variant.price;
        }
      });
    //});
  
    return lowestPrice;
  }

  function findHighestPrice(product) {
    let highestPrice = 0;
  
    //products.forEach(product => {
      product.productVariants.forEach(variant => {
        if (variant.price > highestPrice) {
            highestPrice = variant.price;
        }
      });
    //});
  
    return highestPrice;
  }

  // Function to calculate the discount percentage
function calculateDiscountPercentage(price, oldPrice) {
    return parseInt(price) < parseInt(oldPrice) ?
      Math.round(((parseInt(oldPrice) - parseInt(price)) / parseInt(oldPrice)) * 100)
      : 0; // Return 0 if there's no discount
  }

  const handleProductClick = (product, e) => {

    // if (!isDragging) 
    {
        //const productString = JSON.stringify(product);
        //navigate(`/product-details/${encodeURIComponent(productString)}`);

        // Encrypt the product data
        // Navigate to the route with the encrypted parameter
        const encryptedData = AES.encrypt(JSON.stringify(product), 'encryptionKey').toString();
        // const encryptedData = AES.encrypt(JSON.stringify(product), process.env.REACT_APP_ENCRYPTION_KEY).toString();
        navigate(`/product-details/${encodeURIComponent(encryptedData)}`);
        //
    }
    

  };


    return (
        <Fragment>
            <div className="realted-porduct">
                <h3>Related product</h3>
                <ul className="products product-row-slider">
                    <Slider {...settings}>
                        {
                            relatedProducts.map((item, index) => (
                                <li key={index} className="product" >
                                    <div className="product-holder">
                                        {
                                        // parseInt(item.price) < parseInt(item.oldPrice) 
                                        findLowestPrice(item) < findHighestPrice(item)
                                        ?
                                            <div className="product-badge discount">
                                                -{calculateDiscountPercentage(findLowestPrice(item), findHighestPrice(item))}%
                                                </div> : ''
                                        }
                                        {/* <Link to="/product-details"> */}
                                            <div
                                        onClick={(e) => handleProductClick(item, e)} >
                                            <img loading="lazy" 
                                            src=
                                            "https://shopafricana.co/wp-content/uploads/2024/01/Africana-Ready-To-Wear-KaftanJuly-2023_42-900x1125.jpg"
                                            // {process.env.PUBLIC_URL + item.mainImg} 
                                            alt=""/>
                                        </div>
                                        {/* </Link> */}

                                        <div className="shop-action-wrap">
                                            <ul className="shop-action">
                                            <li>
                                                                    {/* <a href="#" title="Quick view!"
                                                                       data-tip="Quick view!"
                                                                       onClick={
                                                                           e => onQuickViewClick(e, item)
                                                                       }
                                                                >
                                                                    
                                                                    <i className="fi flaticon-view"/>
                                                                </a> */}
                                                                <div style={{ backgroundColor: 'white', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer', margin: '0.2em' }}>
                                                                        <RemoveRedEyeOutlinedIcon 
                                                                        onClick={
                                                                            e => onQuickViewClick(e, item)
                                                                        }
                                                                        className='w-4 h-4 p-1' />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    {/* <a href="#" title="Add to Wishlist!"
                                                                       data-tip="Add to Wishlist!">
                                                                        <i className="fi icon-heart-shape-outline"/>
                                                                    </a> */}
                                                                    <div style={{ backgroundColor: 'white', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer', margin: '0.2em' }}>
                                                                        <FavoriteIcon className='w-4 h-4 p-1' />
                                                                    </div>
                                                                    </li>
                                                                <li>
                                                                    {/* <a href="#" title="Add to cart!"
                                                                       data-tip="Add to cart!">
                                                                        <i className="fi flaticon-shopping-cart"/></a> */}
                                                                        <div style={{ backgroundColor: 'white', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer', margin: '0.2em' }}>
                                                                        <ShoppingBagOutlinedIcon className='w-4 h-4 p-1' />
                                                                    </div>
                                                                        </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <h4>
                                            <Link to="/single-slider-images">
                                                {item.name}
                                            </Link>
                                        </h4>
                                        <span className="woocommerce-Price-amount amount">
                                            <ins>
                                              <span className="woocommerce-Price-amount amount">
                                                <bdi>
                                                    {/* <span className="woocommerce-Price-currencySymbol">{item.Symbol}</span> */}
                                                    <span className="woocommerce-Price-currencySymbol">{'N'}</span>
                                                    {findLowestPrice(item)}
                                                    </bdi>
                                              </span>
                                            </ins>
                                            {
                                            // parseInt(item.price) < parseInt(item.oldPrice) 
                                            findLowestPrice(item) < findHighestPrice(item) 
                                            ?
                                                                <del>
                                              <span className="woocommerce-Price-amount amount">
                                                <bdi><span
                                                    className="woocommerce-Price-currencySymbol">{'N'}</span>{findHighestPrice(item)}</bdi>
                                              </span>
                                                </del> : ''
                                            }
                                        </span>
                                    </div>
                                </li>
                            ))
                        }
                    </Slider>
                </ul>
            </div>
            {/* <ReactTooltip className='tool-tip' effect='solid'/> */}
        </Fragment>
    );
}

export default RecentSingleProducts;
import React, { Fragment, useState, useEffect } from 'react';
import './navbarRight.css';
import { Link, NavLink, useNavigate, useLocation  } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import imgx from "../../../assets/images/shop/mini-cart/img-1.jpg";
import axios from 'axios';


import CryptoJS from 'crypto-js';
import { AES } from 'crypto-js';


import Slider from "react-slick";

import '../cartsliderproducts.css';


function HeaderRight({ options, cart }) {
    const navigate = useNavigate();
    const location = useLocation();

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    // const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    // useEffect(() => {
    //     // Initialize cart state from local storage when component mounts
    //     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    //     setCart(storedCart);
    // }, []);


    const navigateToCheckOut = () => {
        if (cart.length > 0) {
            options.onMiniCartClick();
            const encryptedData = AES.encrypt(JSON.stringify(cart), 'encryptionKey').toString();
            navigate('/checkout', { state: { encryptedData } });
        } else {
            alert("Add items to your cart");
        }
    };
    
    const navigateToCart = () => {
        if (cart.length > 0) {
            options.onMiniCartClick();
            const encryptedData = AES.encrypt(JSON.stringify(cart), 'encryptionKey').toString();
            navigate('/cart', { state: { encryptedData } });
        } else {
            alert("Add items to your cart");
        }
    };

    const navigateToProduct = (product) => {

        
        const encryptedData = AES.encrypt(JSON.stringify(product), 'encryptionKey').toString();
        // navigate(`/product-details/${encodeURIComponent(encryptedData)}`);
        navigate('/product-details', { state: { encryptedData } });
    };
    
    
    // // Update cart items function
    // const updateCart = () => {
    //     const updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
    //     updateCartItems(updatedCart);
    // };
    
    // // Call updateCart function whenever cart items change
    // useEffect(() => {
    //     updateCart();
    // }, [cart]);


    
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



    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 600,
        swipeToSlide: true,
        autoplaySpeed: 4000,
        focusOnSelect: false,
        prevArrow: null,//<SamplePrevArrow />,
        nextArrow: null,//<SampleNextArrow />,
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




    return (
        <Fragment>
            <div className="header-right">
                
                {/* <div className="wishlist-box mr-2">
                    <FavoriteIcon style={{ cursor: "pointer" }} />
                </div> */}
                <div className="mini-cart">
                <div className="relative mr-4" onClick={() => 
                    //(location.pathname === "/checkout" || location.pathname === "/cart") ? null : 
                    options.onMiniCartClick()} style={{ cursor: "pointer" }}>
    <ShoppingBagOutlinedIcon className="mr-1 cursor-pointer" style={{ color: '#fff' }}/>
    {cart && cart.length > 0 && (
        <div
            className="absolute top-0 right-0 bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center font-bold"
            style={{ fontSize: '9px', color: "#ffffff" }}
        >
            {
            //(location.pathname === "/checkout" || location.pathname === "/cart") ? "" : 
            cart.length}
        </div>
    )}
</div>

                    <div className={"mini-cart-content " + (options.miniCart ? 'mini-cart-content-toggle' : '')}>
                        <div className="mini-cart-items">
                            {cart &&
                                cart.map((item, index) => (
                                    <div key={index} className="mini-cart-item clearfix" onClick={() => {navigateToProduct(item)}}>
                                        <div className="mini-cart-item-image">
                                            <NavLink to={item.link}>
                                                {/* <ShoppingBagOutlinedIcon /> */}
                                                <img src="http://shopafricana.co/wp-content/uploads/2024/01/March-23-Document-Name12-scaled-1-900x1125.jpg" />
                                        
                                            </NavLink>
                                            </div>
                                        <div className="mini-cart-item-des">
                                            <NavLink to={item.link}>{item.name}</NavLink>
                                            <span className="mini-cart-item-quantity">Qty: {item.quantity}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>



                        <div className="mini-cart-action clearfix">
                            {/* Subtotal logic here */}
                            <span className="mini-checkout-price">Subtotal: {/* cart.symbol */}{/* cart.subtotal */}</span>
                            {/* <Link className="view-cart-btn" to="/cart" onClick={options.onMiniCartClick}>View Cart</Link> */}
                            <div className="view-cart-btn mb-2"style={{ cursor: 'pointer' }} onClick={navigateToCart}>View Cart</div>
                            {/* <Link className="checkout-btn" to="/checkout" onClick={options.onMiniCartClick}>Checkout</Link> */}
                            <div className="checkout-btn"style={{ cursor: 'pointer' }} onClick={navigateToCheckOut}>Checkout</div>
                        </div>





{/* 
                        <section className="trendy-product-section section-padding">

<div className="">


<div className="row">
                        <div className="col col-xs-12">
                            <div className="products-wrapper">
                                <ul className="products " 
                                    >
                                    <Slider {...settings}
                                    >
                                        {
                                            cart.map((item, index) => (
                                                <li key={index} className="product">
                                                    <div className="product-holder">
                                                    
                                                    {
                            // parseInt(item.price) < parseInt(item.oldPrice)
                            // findLowestPrice(item) < findHighestPrice(item)
                            
                            // ? (
                            //   <div className="product-badge discount">
                            //     -{calculateDiscountPercentage(findLowestPrice(item), findHighestPrice(item))}%
                            //   </div>
                            // ) : null
                            }

                            <div  className='mx-2'
                            // onClick={isDragging ? null : (e) => handleProductClick(item, e)} 
                            // onClick={(e) => handleProductClick(item, e)}

                            style={{cursor: 'pointer'}}>

                            

                                                            <img loading="lazy" 
                                                            src=
                                                            "http://shopafricana.co/wp-content/uploads/2024/01/March-23-Document-Name12-scaled-1-900x1125.jpg"
                                                            //{item.mainImg} 
                                                            alt=""/>
                                                        
                                                        </div>

                                                    </div>
                                                    <div className="product-info">
                                                        <h4>
                                                            <Link to="/product-details">
                                                                {item.name}
                                                            </Link>
                                                        </h4>
                                                        <span className="woocommerce-Price-amount amount">
                                                              <ins>
                                                                <span className="woocommerce-Price-amount amount">
                                                                  <bdi>
                                                                    <span className="woocommerce-Price-currencySymbol">{'₦'}</span>
                                                                    {findLowestPrice(item)}
                                                                    </bdi>
                                                                </span>
                                                              </ins>
                                                            
                                                            </span>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </Slider>
                                </ul>
                            </div>
                        </div>
                    </div>
    </div>
    </section> */}









                    </div>
                </div>

                <div className="my-account-link">
                    <NavLink to="/signin"><AccountCircleIcon style={{ cursor: "pointer", color: '#fff' }} /></NavLink>
                </div>


            </div>
        </Fragment>
    );
}

export default HeaderRight;


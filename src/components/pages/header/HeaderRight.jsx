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

import CloseIcon from '@mui/icons-material/Close';

function HeaderRight({ options, cart, removeCartItem }) {
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
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,

    };




    return (
        <Fragment>
            <div className="header-right">
                
                {/* <div className="wishlist-box mr-2">
                    <FavoriteIcon style={{ cursor: "pointer" }} />
                </div> */}
                <div className="mini-cart">

                <div className="relative" onClick={() => {
                    if (cart.length > 0) {
                        options.onMiniCartClick();
                    } else {
                        if (options.miniCart) {options.onMiniCartClick();}
                        alert("add items to your cart");
                    }
                }} style={{ cursor: "pointer" }}>
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


            
            <div className={"mini-cart-content " + (options.miniCart ? 'mini-cart-content-toggle' : '')} 
                     style={{ maxHeight: '600px', overflowY: 'auto' }}
                    // style={{ maxHeight: '600px', overflowY: 'hidden', position: 'relative' }}
                    >
                        
                        
                        <div className='grid grid-cols-12 gap-4'>
                            
                            <div className='col-span-3 bg-black ' >
                                
                               
                            <div className="">
         {/* <div className="col col-xs-12"> */}
         <div className="">
            <div className="" >
                <ul className="products">
                    <Slider {...settings}>
                        {cart.map((item, index) => (
                            <li key={index} className="product my-2">
                                <div className="product-holder">
                                    <div className='mx-2' style={{ cursor: 'pointer' }}>
                                        <img loading="lazy" src="http://shopafricana.co/wp-content/uploads/2024/01/March-23-Document-Name12-scaled-1-900x1125.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="product-info text-center mt-1 mx-2">
                                    <h4  style={{ cursor: 'pointer' }} onClick={() => {navigateToProduct(item)}}>
                                        <a className='text-xs text-gray-200' style={{  }} >{item.name}</a>
                                    </h4>
                                    {/* <span className="woocommerce-Price-amount amount">
                                        <ins>
                                            <span className="woocommerce-Price-amount amount">
                                                <bdi>
                                                    <span className="woocommerce-Price-currencySymbol">{'₦'}</span>
                                                    {findLowestPrice(item)}
                                                </bdi>
                                            </span>
                                        </ins>
                                    </span> */}
                                </div>
                            </li>
                        ))}
                    </Slider>
                </ul>
            </div>
        </div>
    </div>

    
   
                            </div>








                            <div className='col-span-9'>

                            <div className="mini-cart-items"
                        style={{ maxHeight: '400px', overflowY: 'auto' }}
                        >
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
                                            <div className='flex justify-between'>
                                                <span className="mini-cart-item-quantity">Qty: {item.quantity}</span>

                                                <CloseIcon onClick={(e) => removeCartItem(e, item)} className="mr-2" style={{ cursor: 'pointer', width: '16px', height: '16px'}}/>
                                                
                                            </div>
                                           
                                        </div>
                                        
                                    </div>
                                ))
                            }
                        </div>
                        <div className="mini-cart-action clearfix" 
                        // style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
                        >
                            {/* Subtotal logic here */}
                            <span className="mini-checkout-price">Subtotal: {/* cart.symbol */}{/* cart.subtotal */}</span>
                            {/* <Link className="view-cart-btn" to="/cart" onClick={options.onMiniCartClick}>View Cart</Link> */}
                            <div className="view-cart-btn mb-2"style={{ cursor: 'pointer' }} onClick={navigateToCart}>View Cart</div>
                            {/* <Link className="checkout-btn" to="/checkout" onClick={options.onMiniCartClick}>Checkout</Link> */}
                            <div className="checkout-btn"style={{ cursor: 'pointer' }} onClick={navigateToCheckOut}>Checkout</div>
                        </div>

                            </div>
                        </div>
                        
                        







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


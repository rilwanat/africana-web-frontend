import React, { Fragment, useState, useEffect } from 'react';
import './navbarRight.css';
import { Link, NavLink, useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import imgx from "../../../assets/images/shop/mini-cart/img-1.jpg";
import axios from 'axios';


import CryptoJS from 'crypto-js';
import { AES } from 'crypto-js';



function HeaderRight({ options }) {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    useEffect(() => {
        // Initialize cart state from local storage when component mounts
        //const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        //setCart(storedCart);

    }, []);
    



    const navigateToCheckOut = () => {
        options.onMiniCartClick();

        //plain
        //const cartString = JSON.stringify(cart);
        //navigate(`/checkout/${encodeURIComponent(cartString)}`);


        const encryptedData = AES.encrypt(JSON.stringify(cart), 'encryptionKey').toString();
        navigate(`/checkout/${encodeURIComponent(encryptedData)}`);
      };


    return (
        <Fragment>
            <div className="header-right">
                <div className="my-account-link mr-2">
                    <NavLink to="/signin"><AccountCircleIcon style={{ cursor: "pointer" }} /></NavLink>
                </div>
                <div className="wishlist-box mr-2">
                    <FavoriteIcon style={{ cursor: "pointer" }} />
                </div>
                <div className="mini-cart mr-2">
                    <div className="relative mr-4" onClick={options.onMiniCartClick} style={{ cursor: "pointer" }}>
                        <ShoppingBagOutlinedIcon className="mr-1 text-gray-500 cursor-pointer" />
                        {cart.length > 0 && (
                            <div
                                className="absolute top-0 right-0 bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center"
                                style={{ fontSize: '10px' }}
                            >
                                {cart.length}
                            </div>
                        )}
                    </div>
                    <div className={"mini-cart-content " + (options.miniCart ? 'mini-cart-content-toggle' : '')}>
                        <div className="mini-cart-items">
                            {cart &&
                                cart.map((item, index) => (
                                    <div key={index} className="mini-cart-item clearfix">
                                        <div className="mini-cart-item-image">
                                            <NavLink to={item.link}><ShoppingBagOutlinedIcon /></NavLink>
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
                            <Link className="view-cart-btn" to="/cart" onClick={options.onMiniCartClick}>View Cart</Link>
                            {/* <Link className="checkout-btn" to="/checkout" onClick={options.onMiniCartClick}>Checkout</Link> */}
                            <div className="checkout-btn"style={{ cursor: 'pointer' }} onClick={navigateToCheckOut}>Checkout</div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default HeaderRight;


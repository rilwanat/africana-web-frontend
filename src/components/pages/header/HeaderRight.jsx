import React, {Fragment, useState, useEffect} from 'react';
import './navbarRight.css'
import {Link, NavLink} from "react-router-dom";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import imgx from "../../../assets/images/shop/mini-cart/img-1.jpg";

import axios from 'axios';

/**
 * right side of header include minicart, and buttons
 * @param options
 * @returns {*}
 * @constructor
 */
function HeaderRight({options}) {

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    useEffect(() => {
        //if (!token) {
          // Redirect to the home page if the token is null
          //navigate('/');
        //} else {
          // If the user is authenticated, call the handleData function
          //alert("X");
          getCart();
        //}
    }, []);


    
    const getCart = async (e) => {
        //e.preventDefault();

        //alert("login user: " + loginEmailAddress + " " + loginPassword);

        try {
            // const formData = new FormData();
            // formData.append('email', loginEmailAddress);        
            // formData.append('password', loginPassword);
    
            // const response = await axios.post('http://144.149.167.72.host.secureserver.net:3000/api/v1/view-cart', formData, {
            //     headers: {
            //         // 'Content-Type': 'multipart/form-data',
            //         'Content-Type': 'application/json',
            //     },
            // });

            // const response = await axios.post('http://144.149.167.72.host.secureserver.net:3000/api/v1/auth/login', {
            //     loginEmailAddress,
            //     loginPassword,
            // });

            const response = await axios.get('http://144.149.167.72.host.secureserver.net:3000/api/v1/view-cart', {
                // loginEmailAddress,
                // loginPassword,
            });


    
            setIsLoading(false);
    
            // alert("cart: " + JSON.stringify(response.data.data, null, 2));
            alert("cart: " + JSON.stringify(response.data, null, 2) + "\n\nuserType: guest");

    
            if (response.data.success) {
                setErrorMessage(null);
                
                //alert("Success");
            } else {
                const errors = response.data.errors.map(error => error.msg);
                setErrorMessage({ message: response.data.message, errors });
                //alert("Failed1");
            }
        } catch (error) {
          setIsLoading(false);
            
          if (error.response && error.response.data && error.response.data.errors) {
            const { errors } = error.response.data;
            const errorMessages = errors.map(error => error.msg);
            setErrorMessage({ message: error.response.data.message, errors: errorMessages });
        } else {
            setErrorMessage({ message: 'Get cart failed..' });
        }

            //alert("Failed2");
        }
    };




    const miniCartData = {
        product: [
            {
                id: "",
                name: "Elegant skirt",
                qty: 1,
                price: "0.00",
                img: imgx, //"/assets/images/shop/mini-cart/img-1.jpg",
                link: "/single-slider-images"
            },
            {
                id: "",
                name: "Beautiful tops",
                qty: 1,
                price: "0.00",
                img: imgx, //"/assets/images/shop/mini-cart/img-2.jpg",
                link: "/single-slider-images"
            }
        ],
        subtotal: "0.00",
        symbol: "N"//$
    };

    return (
        <Fragment>
            <div className="header-right">
                <div className="my-account-link mr-2">
                    {/* <Link className="" 
                    // to="/my-account"
                    >
                        <i className="icon-user"/>
                        < AccountCircleIcon />
                    </Link> */}
                    <NavLink to="/signin">< AccountCircleIcon style={{ cursor: "pointer" }}/></NavLink>
                </div>
                <div className="wishlist-box mr-2">
                    <a 
                    // href="#"
                    >
                        {/* <i className="icon-heart-shape-outline"/> */}
                        {/* <FavoriteIcon /> */}
                        </a>
                        <FavoriteIcon style={{ cursor: "pointer" }}/>
                </div>
                <div className="mini-cart mr-2">
                    {/* <button className="cart-toggle-btn" onClick={options.onMiniCartClick}>
                        <i className="icon-large-paper-bag"/>
                        <ShoppingBagOutlinedIcon />
                        <span className="cart-count">{miniCartData.product.length}</span>
                    </button> */}
                    {/* <ShoppingBagOutlinedIcon onClick={options.onMiniCartClick} style={{ cursor: "pointer" }}/> */}
                    <div className="relative mr-4" onClick={options.onMiniCartClick} style={{ cursor: "pointer" }}>
              <ShoppingBagOutlinedIcon className="mr-1 text-gray-500 cursor-pointer" />
              
              {miniCartData.product.length > 0 && (
                <div
                className="absolute top-0 right-0 bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center"
                style={{ fontSize: '10px' }} // Adjust the font size as needed
                >
                  {miniCartData.product.length}
                </div>
                )}
              </div>
                    <div className={"mini-cart-content " + (options.miniCart ? 'mini-cart-content-toggle' : '')}>
                        <div className="mini-cart-items">
                            {
                                miniCartData.product.map((item, index) => (
                                    <div key={index} className="mini-cart-item clearfix">
                                        <div className="mini-cart-item-image">
                                            <NavLink to={item.link}>
                                                <img src={item.img} alt=""/>
                                            </NavLink>
                                        </div>
                                        <div className="mini-cart-item-des">
                                            <NavLink to={item.link}>{item.name}</NavLink>
                                            <span className="mini-cart-item-quantity">Qty: {item.qty}</span>
                                            <span className="mini-cart-item-price">{miniCartData.symbol}{item.price}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="mini-cart-action clearfix">
                            <span className="mini-checkout-price">Subtotal: {miniCartData.symbol}{miniCartData.subtotal}</span>
                            <Link className="view-cart-btn" to="/cart">
                                View Cart
                            </Link>
                            <Link className="checkout-btn" to="/checkout">
                                Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default HeaderRight;
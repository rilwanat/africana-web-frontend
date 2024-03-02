import React, { useState, useEffect, useRef  } from 'react';
import { useNavigate, NavLink } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Box, useMediaQuery } from '@mui/material';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';


import logo from '../../assets/logos/Logo Wordmark 1.png';
import logo2 from '../../assets/logos/Logo Wordmark.png';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/LocalMallSharp';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';



import Slider from "react-slick";

import './cartsliderproducts.css';

import CloseIcon from '@mui/icons-material/Close';

import { AES } from 'crypto-js';

const SlideInMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  z-index: 1000; /* Ensure the menu is on top of other content */
  overflow-x: hidden;
`;
const MenuContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
const menuItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } },
};




// Styled component for the sliding div
const SlideInDiv = styled(motion.div)`
  position: absolute;
  top: 5rem;
  left: 2rem;
  right: 2rem;
  width: calc(100% - 4rem);
  height: 75%;
  background-color: white; /* Change color as needed */
`;
const slideInVariants = {
  hidden: { height: 0 },
  visible: { height: '75%', transition: { duration: 0.3, type: 'tween' } }
};
const SlideInContent = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  height: 100%;
`;



function AfricanaHeader({ options, cart, removeCartItem }) {

    // const data = {
    //     "content": "Join our showroom and get 1 % off ! Coupon code : AFR222"
    // }

    const navigate = useNavigate();
  const isLargeScreen = useMediaQuery('(min-width:960px)');
  const [hoveredMenuItem, setHoveredMenuItem] = useState(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [menuWidthMen, setMenuWidthMen] = useState(0);
  const [menuWidthWomen, setMenuWidthWomen] = useState(0);
  const [menuWidthEssentials, setMenuWidthEssentials] = useState(0);
  const [menuWidthStores, setMenuWidthStores] = useState(0);
  const [menuWidthOnsale, setMenuWidthOnsale] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  useEffect(() => {
    
    if (hoveredMenuItem === 'MEN') {
      const menTextWidth = document.getElementById('men-text').offsetWidth;
      setMenuWidthMen(menTextWidth);
    } else {
      setMenuWidthMen(0);
    }

    if (hoveredMenuItem === 'WOMEN') {
      const womenTextWidth = document.getElementById('women-text').offsetWidth;
      setMenuWidthWomen(womenTextWidth);
    } else {
      setMenuWidthWomen(0);
    }

    if (hoveredMenuItem === 'ESSENTIALS') {
      const menuWidthEssentials = document.getElementById('essentials-text').offsetWidth;
      setMenuWidthEssentials(menuWidthEssentials);
    } else {
      setMenuWidthEssentials(0);
    }

    if (hoveredMenuItem === 'STORES') {
      const menuWidthStores = document.getElementById('stores-text').offsetWidth;
      setMenuWidthStores(menuWidthStores);
    } else {
      setMenuWidthStores(0);
    }

    if (hoveredMenuItem === 'ONSALE') {
      const menuWidthOnsale = document.getElementById('onsale-text').offsetWidth;
      setMenuWidthOnsale(menuWidthOnsale);
    } else {
      setMenuWidthOnsale(0);
    }


  }, [hoveredMenuItem]);


  const navigateToOnSale = () => {
    navigate('/on-sale', {  });
  }

  const navigateToMyAccount = () => {
    navigate('/my-account', {  });
  }

  const navigateToSignIn = () => {
    navigate('/sign-in', {  });
  }

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
        <div>
            <nav className=" z-50" >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-">
              {isLargeScreen ? (
                <div className="lg:flex flex-grow justify-between items-center">
                 <motion.div
  className="text-white text-xs font-bold cursor-pointer mr-4 z-50"
  // className={`text-white text-xs font-bold cursor-pointer mr-4 z-50 ${hoveredMenuItem === 'MEN' ? 'border-b-2 border-white' : ''}`}
  onClick={() => { /* Handle navigation */ }}
  onMouseEnter={() => setHoveredMenuItem('MEN')}
  onMouseLeave={() => setHoveredMenuItem('MENX')}
>
<div style={{ position: 'relative' }}>
<span id="men-text">MEN</span>
      <div className={`absolute bg-white 
      ${hoveredMenuItem === 'MEN' ? 'transition-all duration-300' : hoveredMenuItem === "MENX" ? 'transition-all duration-300' : ''}`} 
      style={{ width: menuWidthMen, height: '2px', 
      left: hoveredMenuItem === 'MEN' ? 0 : 'auto',
      right: hoveredMenuItem === 'MEN' ? 0 : menuWidthMen
       }} />
</div>
  {hoveredMenuItem === 'MEN' && (
  <SlideInDiv variants={slideInVariants}><SlideInContent>
  <div className="flex flex-col  p-8">
  
  <div className="flex p-8" style={{ height: '80%' }}>
  <div className=" p-4 w-full text-gray-900 flex flex-col" >
    <a className='mb-4 uppercase font-bold'>Clothing</a>
    {/* <hr /> */}
    <a className='uppercase my-2'>New in</a>
    <a className='uppercase my-2'>Kaftan</a>
    <a className='uppercase my-2'>Dashiki</a>
    <a className='uppercase my-2'>T-shirt</a>
    <a className='uppercase my-2'>Dress Shirt</a>
    <a className='uppercase my-2'>Lounge Wear</a>
    <a className='uppercase my-2'>Sweatshirts</a>
    <a className='uppercase my-2'>Underwear</a>
    </div>
    <div className=" p-4 w-full text-gray-900 flex flex-col">
    <a className='mb-4 uppercase font-bold'>Shoes</a>
    {/* <hr /> */}
    <a className='uppercase my-2'>Sneakers</a>
    <a className='uppercase my-2'>Mules</a>
    <a className='uppercase my-2'>T-shirt</a>
    <a className='uppercase my-2'>Lounge Wear</a>
    <a className='uppercase my-2'>Sweatshirts</a>
    <a className='uppercase my-2'>Underwear</a>
    </div>
    <div className=" p-4 w-full text-gray-900 flex flex-col" >
    <a className='mb-4 uppercase font-bold'>Accessories </a>
    {/* <hr /> */}
    <a className='uppercase my-2'>Scarfs</a>
    <a className='uppercase my-2'>Wallets</a>
    <a className='uppercase my-2'>Bags</a>
    <a className='uppercase my-2'>Purses</a>
    </div>
      
  </div>

  <hr style={{ borderColor: 'black' }} className='my-4'/>

  <a
        className="text-gray-900 text-sm font-bold cursor-pointer block my-2"
        onClick={() => { /* Handle navigation */ }}
      >
        SHOP ALL PRODUCTS
      </a>
  
  </div>
  <div className=" p-8">
    <img src="http://shopafricana.co/wp-content/uploads/2023/12/ALAY4447111.jpg" className='rounded-lg'/>
  </div>
</SlideInContent></SlideInDiv>
)}
</motion.div>

<motion.div
                    className="text-white text-xs font-bold cursor-pointer mr-4  z-50"
                    onClick={() => { /* Handle navigation */ }}
                    onMouseEnter={() => setHoveredMenuItem('WOMEN')}
                    onMouseLeave={() => setHoveredMenuItem('WOMENX')}
                  >
<div style={{ position: 'relative' }}>
<span id="women-text">WOMEN</span>
      <div className={`absolute bg-white 
      ${hoveredMenuItem === 'WOMEN' ? 'transition-all duration-300' : hoveredMenuItem === 'WOMENX' ? 'transition-all duration-300' : ''}`} 
      style={{ width: menuWidthWomen, height: '2px', 
      left: hoveredMenuItem === 'WOMEN' ? 0 : 'auto',
      right: hoveredMenuItem === 'WOMEN' ? 0 : menuWidthWomen
       }} />
</div>
                    {hoveredMenuItem === 'WOMEN' && (
  <SlideInDiv variants={slideInVariants}><SlideInContent>
  <div className="flex flex-col  p-8">
  
  <div className="flex p-8" style={{ height: '80%' }}>
  <div className=" p-4 w-full text-gray-900 flex flex-col" >
    <a className='mb-4 uppercase font-bold'>Clothing</a>
    {/* <hr /> */}
    <a className='uppercase my-2'>New in</a>
    <a className='uppercase my-2'>Dashiki</a>
    <a className='uppercase my-2'>T-shirt</a>
    <a className='uppercase my-2'>Lounge Wear</a>
    <a className='uppercase my-2'>Sweatshirts</a>
    <a className='uppercase my-2'>Underwear</a>
    </div>
    <div className=" p-4 w-full text-gray-900 flex flex-col">
    <a className='mb-4 uppercase font-bold'>Shoes</a>
    {/* <hr /> */}
    <a className='uppercase my-2'>Sneakers</a>
    <a className='uppercase my-2'>Mules</a>
    <a className='uppercase my-2'>Slides</a>
    <a className='uppercase my-2'>Slippers</a>
    </div>
    <div className=" p-4 w-full text-gray-900 flex flex-col" >
    <a className='mb-4 uppercase font-bold'>Accessories </a>
    {/* <hr /> */}
    <a className='uppercase my-2'>Scarfs</a>
    <a className='uppercase my-2'>Wallets</a>
    <a className='uppercase my-2'>Bags</a>
    <a className='uppercase my-2'>Purses</a>
    </div>
  </div>

  <hr style={{ borderColor: 'black' }} className='my-4'/>

  <a
        className="text-gray-900 text-sm font-bold cursor-pointer block my-2"
        onClick={() => { /* Handle navigation */ }}
      >
        SHOP ALL PRODUCTS
      </a>
  
  </div>
  <div className=" p-8">
    <img src="http://shopafricana.co/wp-content/uploads/2023/12/ALAY4456111.jpg" className='rounded-lg'/>
  </div>
</SlideInContent></SlideInDiv>
)}
                  </motion.div>

<motion.div
                    className="text-white text-xs font-bold cursor-pointer mr-4  z-50"
                    onClick={() => { /* Handle navigation */ }}
                    onMouseEnter={() => setHoveredMenuItem('ESSENTIALS')}
                    onMouseLeave={() => setHoveredMenuItem('ESSENTIALSX')}
                  >
                  <div style={{ position: 'relative' }}>
<span id="essentials-text">ESSENTIALS</span>
      <div className={`absolute bg-white 
      ${hoveredMenuItem === 'ESSENTIALS' ? 'transition-all duration-300' : hoveredMenuItem === "ESSENTIALSX" ? 'transition-all duration-300' : ''}`} 
      style={{ width: menuWidthEssentials, height: '2px', 
      left: hoveredMenuItem === 'ESSENTIALS' ? 0 : 'auto',
      right: hoveredMenuItem === 'ESSENTIALS' ? 0 : menuWidthEssentials
       }} />
</div></motion.div>

<motion.div
                    className="text-white text-xs font-bold cursor-pointer mr-4  z-50"
                    onClick={() => { /* Handle navigation */ }}
                    onMouseEnter={() => setHoveredMenuItem('STORES')}
                    onMouseLeave={() => setHoveredMenuItem('STORESX')}
                  >
                  <div style={{ position: 'relative' }}>
<span id="stores-text">STORES</span>
      <div className={`absolute bg-white 
      ${hoveredMenuItem === 'STORES' ? 'transition-all duration-300' : hoveredMenuItem === "STORESX" ? 'transition-all duration-300' : ''}`} 
      style={{ width: menuWidthStores, height: '2px', 
      left: hoveredMenuItem === 'STORES' ? 0 : 'auto',
      right: hoveredMenuItem === 'STORES' ? 0 : menuWidthStores
       }} />
</div></motion.div>

<motion.div
                    className="text-white text-xs font-bold cursor-pointer mr-4  z-50"
                    onClick={() => {navigateToOnSale();}}
                    onMouseEnter={() => setHoveredMenuItem('ONSALE')}
                    onMouseLeave={() => setHoveredMenuItem('ONSALEX')}
                  >
                  <div style={{ position: 'relative' }}>
<span id="onsale-text">ON SALE</span>
      <div className={`absolute bg-white 
      ${hoveredMenuItem === 'ONSALE' ? 'transition-all duration-300' : hoveredMenuItem === "ONSALEX" ? 'transition-all duration-300' : ''}`} 
      style={{ width: menuWidthOnsale, height: '2px', 
      left: hoveredMenuItem === 'ONSALE' ? 0 : 'auto',
      right: hoveredMenuItem === 'ONSALE' ? 0 : menuWidthOnsale
       }} />
</div></motion.div>

                </div>
              ) : (
                <IconButton
                  edge="start"
                  aria-label="menu"
                  sx={{ color: 'white', marginRight: 2 }} 
                  onClick={toggleMenu}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </div>
            <div className="flex-grow flex items-center justify-center  z-50">
              <img
                className="block h-8 w-auto"
                src={logo}
                alt="Logo"
                onClick={() => {navigate('/');}}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="flex items-center">
              {isLargeScreen && (
                <div style={{ width: '300px' }} className="flex justify-end">
                  <IconButton aria-label="search" sx={{ color: 'white' }}>
                    <SearchIcon />
                  </IconButton>









                  <div className="mini-cart bg-red-500">
                  <IconButton aria-label="search" sx={{ color: 'white' }} 
                  onClick={() => {
                    if (cart.length > 0) {
                        options.onMiniCartClick();
                    } else {
                        if (options.miniCart) {options.onMiniCartClick();}
                        alert("add items to your cart");
                    }
                }}>
                    <ShoppingBagOutlinedIcon />
                    {cart && cart.length > 0 && (
            <div
                className="absolute top-1 right-1 bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center font-bold"
                style={{ fontSize: '8px', color: "#ffffff", paddingTop: '1px', paddingLeft: '2px' }}
            >
                {cart.length}
            </div>
        )}
                  </IconButton>
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






                  <IconButton aria-label="shopping cart" sx={{ color: 'white' }}
                  onClick={() => {navigateToSignIn();}}
                  >
                    <AccountCircleOutlinedIcon />
                  </IconButton>
                </div>
              )}
              {!isLargeScreen && (
                <div>
                  <IconButton aria-label="search" sx={{ color: 'white' }}>
                    <SearchIcon />
                  </IconButton>






                  <div className="mini-cart bg-red-500">
                  <IconButton aria-label="search" sx={{ color: 'white' }}
                  onClick={() => {
                    if (cart.length > 0) {
                        options.onMiniCartClick();
                    } else {
                        if (options.miniCart) {options.onMiniCartClick();}
                        alert("add items to your cart");
                    }
                }}>
                    <ShoppingBagOutlinedIcon />                    
                  </IconButton>
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









                  <IconButton aria-label="shopping cart" sx={{ color: 'white' }}
                  onClick={() => {navigateToSignIn();}}>
                    <AccountCircleOutlinedIcon />
                  </IconButton>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* Slide-in menu */}
      <SlideInMenu
        initial={{ x: '-100%' }}
        animate={{ x: isMenuOpen ? 0 : '-100%' }}
        transition={{ duration: 0.4 }}
      >
        <MenuContent>
          <div className='mx-8'>
            <div className='flex justify-between items-center'>
              <img
                className="block h-8 w-auto my-4"
                src={logo2}
                alt="Logo"
                onClick={() => {navigate('/');}}
                style={{ cursor: 'pointer' }}
              />
              <ArrowBackOutlinedIcon onClick={toggleMenu} style={{ cursor: 'pointer' }}/>
            </div>
            <hr />
            {/* Apply variants to each menu item */}
            <motion.span
              variants={menuItemVariants}
              initial="hidden"
              animate={isMenuOpen ? "visible" : "hidden"}
              className="text-gray-900 text-sm font-bold cursor-pointer block my-4"
              onClick={() => { /* Handle navigation */ }}
            >
              MEN
            </motion.span>
            <motion.span
              variants={menuItemVariants}
              initial="hidden"
              animate={isMenuOpen ? "visible" : "hidden"}
              className="text-gray-900 text-sm font-bold cursor-pointer block my-4"
              onClick={() => { /* Handle navigation */ }}
            >
              WOMEN
            </motion.span>
            <motion.span
              variants={menuItemVariants}
              initial="hidden"
              animate={isMenuOpen ? "visible" : "hidden"}
              className="text-gray-900 text-sm font-bold cursor-pointer block my-4"
              onClick={() => { /* Handle navigation */ }}
            >
              ESSENTIALS
            </motion.span>
            <motion.span
              variants={menuItemVariants}
              initial="hidden"
              animate={isMenuOpen ? "visible" : "hidden"}
              className="text-gray-900 text-sm font-bold cursor-pointer block my-4"
              onClick={() => { /* Handle navigation */ }}
            >
              STORES
            </motion.span>
            <motion.span
              variants={menuItemVariants}
              initial="hidden"
              animate={isMenuOpen ? "visible" : "hidden"}
              className="text-gray-900 text-sm font-bold cursor-pointer block my-4"
              onClick={() => { /* Handle navigation */ }}
            >
              ON SALE
            </motion.span>
          </div>
        {/* Fixed div at the bottom */}
        <div className="fixed bottom-0 left-0 w-full py-4">
          
  <div className='mx-8'>
  <hr className='my-2'/>
    <div className='flex justify-between items-center'>
      <a
        className="text-gray-900 text-sm font-bold cursor-pointer block my-2"
        onClick={() => { /* Handle navigation */ }}
      >
        CONNECT TO YOUR ACCOUNT
      </a>
      <AccountCircleOutlinedIcon onClick={toggleMenu} style={{ cursor: 'pointer' }}/>
    </div>

    <div className='flex justify-between items-center'>
      <span
        className="text-gray-900 text-sm font-bold cursor-pointer block my-2"
        onClick={() => { /* Handle navigation */ }}
      >
        CURRENCY: <a className='ml-2'>USD</a> <a className='ml-2'>NGN</a>
      </span>
      <a onClick={() => {}} style={{ cursor: 'pointer' }}>Need Help?</a>
    </div>
  </div>
</div>

    </MenuContent>
      </SlideInMenu>
    
      
        </div>
    );
}

export default AfricanaHeader;
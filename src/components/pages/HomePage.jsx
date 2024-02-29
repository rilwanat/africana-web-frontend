import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Box, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

import logo from '../../assets/logos/Logo Wordmark 1.png';
import logo2 from '../../assets/logos/Logo Wordmark.png';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import Slider from 'react-slick';

import axios from 'axios';


import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import { AES } from 'crypto-js';



import RecentProducts from './RecentProducts';
import CtaSection from './CtaSection';
import Locations from './Locations';
import Footer from './Footer';

import { useInView } from 'react-intersection-observer';









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

// Define variants for menu items
const menuItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } }, // Adjust duration for slower animation
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

//carousel
const carouselItemVariants = {
  hidden: { opacity: 0, y: 200 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5, type: 'spring', stiffness: 20 } },
};

const carouselItemVariants2 = {
  hidden: { opacity: 0, y: 200 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.5, type: 'spring', stiffness: 20 } },
};










export default function HomePage({ options, handleDataViewData, addToCart, cart, removeCartItem }) {
  const navigate = useNavigate();
  const isLargeScreen = useMediaQuery('(min-width:960px)');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenuItem, setHoveredMenuItem] = useState(null);


  const [animateCarousel, setAnimateCarousel] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });


  const [menuWidthMen, setMenuWidthMen] = useState(0);
  const [menuWidthWomen, setMenuWidthWomen] = useState(0);


  useEffect(() => {
    // Any initialization logic can go here

    if (inView) {
      setAnimateCarousel(true);
    }


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


  }, [inView, hoveredMenuItem]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4, //6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 600,
    swipeToSlide: true,
    autoplaySpeed: 4000,
    focusOnSelect: false,
    responsive: [
      {
        breakpoint: 1024, // Medium screens and above
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Small screens and above
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };




  const [isViewHovered, setViewHovered] = useState(false); const [isViewHoveredId, setViewHoveredId] = useState(null);
  const [isBagHovered, setBagHovered] = useState(false); const [isBagHoveredId, setBagHoveredId] = useState(null);
  const [zoomedItemId, setZoomedItemId] = useState(null);

  const [products, setProductsData] = useState([]);
  const [isDataloading, setIsDataLoading] = useState(true);

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

  // return lowestPrice;
  return lowestPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
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
  {
      const encryptedData = AES.encrypt(JSON.stringify(product), 'encryptionKey').toString();
      navigate('/product-details', { state: { encryptedData } });    
  }
};


  
  useEffect(() => {

    handleData();
    
  }, []);




  const handleData = async () => {    
    //alert("token: " + token + "\n\n" + "uid: " + uid);
    setIsDataLoading(true);
    try {

      // const response = await axios.get('http://localhost:3000/productssample.json');
      const response = await axios.get('http://144.149.167.72.host.secureserver.net:3000/api/v1/products', {
        //params: { uid: uid },
        headers: {
          "Content-Type": "application/json",
          //Authorization: `Bearer ${token}`,
        },
      });

      setIsDataLoading(false);
      //alert(JSON.stringify(response.data, null, 2));

      if (response.data.success) {
        //alert("dashboard-products " + JSON.stringify(response.data, null, 2));
      
        // Store the retrieved data in state variables

        setProductsData(response.data.products);
      } else {
        //alert("error: " + response.data.message);
      }

    } catch (error) {
      setIsDataLoading(false);
      //alert("error: " + error);
    }
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
                  <span
                    className="text-white text-xs font-bold cursor-pointer mr-4  z-50"
                    onClick={() => { /* Handle navigation */ }}
                  >
                    ESSENTIALS
                  </span>
                  <span
                    className="text-white text-xs font-bold cursor-pointer mr-4  z-50"
                    onClick={() => { /* Handle navigation */ }}
                  >
                    STORES
                  </span>
                  <span
                    className="text-white text-xs font-bold cursor-pointer mr-4  z-50"
                    onClick={() => { /* Handle navigation */ }}
                  >
                    ON SALE
                  </span>
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
                  <IconButton aria-label="search" sx={{ color: 'white' }}>
                    <ShoppingBagOutlinedIcon />
                  </IconButton>
                  <IconButton aria-label="shopping cart" sx={{ color: 'white' }}>
                    <AccountCircleOutlinedIcon />
                  </IconButton>
                </div>
              )}
              {!isLargeScreen && (
                <div>
                  <IconButton aria-label="search" sx={{ color: 'white' }}>
                    <SearchIcon />
                  </IconButton>
                  <IconButton aria-label="search" sx={{ color: 'white' }}>
                    <ShoppingBagOutlinedIcon />
                  </IconButton>
                  <IconButton aria-label="shopping cart" sx={{ color: 'white' }}>
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
    
      <div className="w-full mt-[-5rem]">
  <img src=
  {isLargeScreen ? "https://shopafricana.co/wp-content/uploads/2024/01/1-slider-scaled.jpg" : "https://shopafricana.co/wp-content/uploads/2024/01/art-of-life210124_26-scaled.jpg"

  }
   alt="" className="w-full h-screen object-cover" />
</div>



<div className='flex justify-center mt-20 mb-2'>SHOP THE LOOK</div>
<div className="flex flex-col md:flex-row mx-16 mb-16">
<div className="relative flex-grow">
<motion.div
              variants={carouselItemVariants}
              initial="hidden"
              animate={ animateCarousel ? "visible" : "hidden"}
              // className="cursor-pointer"
              ref={ref}
              // onClick={() => { /* Handle navigation */ }}
            >
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        swipeable={true}
        draggable={false}

        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const defStyle = { margin: 4, color: "white", cursor: "pointer" };
          const style = isSelected
          ? { ...defStyle, backgroundColor: "white" } // Use solid color when isSelected is true
          : { ...defStyle, backgroundColor: "transparent" };
          return (
            <span
            className="inline-block w-2 h-2 rounded-full border-2 border-white"
            style={style}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            >
              {/* {"cust " + index} */}
            </span>
          );
        }}
      >
        <div>
          <img src="http://shopafricana.co/wp-content/uploads/2023/12/ALAY4426111-768x961.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="https://shopafricana.co/wp-content/uploads/2024/01/ALAY532700-768x959.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="https://shopafricana.co/wp-content/uploads/2024/01/ALAY454900-768x960.jpg" alt="Slide 3" />
        </div>
      </Carousel>
      </motion.div>

      {/* <div className='absolute bottom-10 left-0 right-0 flex justify-between items-center h-full'>
        <IconButton aria-label="previous" style={{ color: 'white' }} onClick={() => {}}>
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton aria-label="next" style={{ color: 'white' }} onClick={() => {}}>
          <NavigateNextIcon />
        </IconButton>
      </div> */}
    </div>


    <div className="relative flex-grow flex items-center justify-center p-8" style={{ backgroundColor: '#eeeeee' }}>     
    <motion.div
              variants={carouselItemVariants2}
              initial="hidden"
              animate={ animateCarousel ? "visible" : "hidden"}
              className="cursor-pointer"
              // ref={ref}
              onClick={() => {  }}
            > 
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={7500}
        swipeable={true}
        draggable={true}
        

        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const defStyle = { margin: 4, color: "white", cursor: "pointer" };
          const style = isSelected
          ? { ...defStyle, backgroundColor: "white" } // Use solid color when isSelected is true
          : { ...defStyle, backgroundColor: "transparent" };
          return (
            <span
            // className="inline-block w-2 h-2 rounded-full border-2 border-white"
            style={style}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            >
            </span>
          );
        }}
      >
        <div>
          <img src="http://shopafricana.co/wp-content/uploads/2023/12/0158-BRS-AFRICANA-1-copy-768x960.jpg" style={{ width: '60%', height: '60%' }} alt="Slide 1" />
          <div className='flex flex-col justify-center'><div className='mt-4'>NAME</div><div className='mt-4'>SHOP NOW</div></div>
        </div>
        <div>
          <img src="http://shopafricana.co/wp-content/uploads/2023/12/Mad-2.0-Fashion-Accessoriesx-AFRICANA140-scaled-1-768x960.jpg" style={{ width: '60%', height: '60%' }} alt="Slide 2" />
          <div className='flex flex-col justify-center'><div className='mt-4'>NAME</div><div className='mt-4'>SHOP NOW</div></div>
        </div>
        <div>
          <img src="http://shopafricana.co/wp-content/uploads/2023/12/Image-7-20-23-at-4.20-PM-768x946.jpeg" style={{ width: '60%', height: '60%' }} alt="Slide 3" />
          <div className='flex flex-col justify-center'><div className='mt-4'>NAME</div><div className='mt-4'>SHOP NOW</div></div>
        </div>
      </Carousel>
      </motion.div>
      </div>

      

      {/* <div className='absolute bottom-10 left-0 right-0 flex justify-between items-center h-full'>
        <IconButton aria-label="previous" style={{ color: 'white' }} onClick={() => {}}>
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton aria-label="next" style={{ color: 'white' }} onClick={() => {}}>
          <NavigateNextIcon />
        </IconButton>
      </div> */}
</div>








<div className='flex justify-center mt-4 mb-2'>NEW IN</div>
<div className="w-full px-2">
  <Slider {...settings}>
    {products.map((item, index) => (
      <li key={index} className="">
        <div className="">
          {findLowestPrice(item) < findHighestPrice(item) ? (
            <div className="absolute top-0 right-0 m-2 p-1 bg-red-500 text-white text-xs font-bold">-{calculateDiscountPercentage(findLowestPrice(item), findHighestPrice(item))}%</div>
          ) : null}
          <div
            className={`${ isLargeScreen ? 'mx-1' : 'mx-2'} cursor-pointer`}
            // onClick={(e) => handleProductClick(item, e)}
            // onMouseEnter={() => setZoomedItemId(item.id)}
            // onMouseLeave={() => setZoomedItemId(null)}
            style={{
              transform: zoomedItemId === item.id ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.8s ease',
            }}
          >
            <img
              loading="lazy"
              src="http://shopafricana.co/wp-content/uploads/2024/02/BRS_8340-1-copyBereal-900x1125.png"
              alt=""
            />
          </div>
        </div>
        <div className="pl-2 ">
          <h4 className="text-left flex items-center mt-4 cursor-pointer">
            <div className="text-sm uppercase">{item.name}</div>
          </h4>
          <h4 className="text-left flex items-center mt-1 cursor-pointer">
            <div className="text-sm font-bold">{'₦'}{findLowestPrice(item)}</div>
          </h4>
          <div className="text-left flex items-center mt-1 mb-8">
            <h4 className="h-4 text-xs cursor-pointer">SELECT OPTIONS</h4>
            <div className="ml-2">
              <RemoveRedEyeOutlinedIcon className="w-4 h-4 p-1" />
            </div>
            <div className="ml-2">
              <ShoppingBagOutlinedIcon className="w-4 h-4 p-1" />
            </div>
          </div>
        </div>
      </li>
    ))}
  </Slider>
</div>


<div className='flex justify-center mt-4 mb-2'>BEST SELLERS</div>
<div className="w-full px-2">
  <Slider {...settings}>
    {products.map((item, index) => (
      <li key={index} className="">
        <div className="">
          {findLowestPrice(item) < findHighestPrice(item) ? (
            <div className="absolute top-0 right-0 m-2 p-1 bg-red-500 text-white text-xs font-bold">-{calculateDiscountPercentage(findLowestPrice(item), findHighestPrice(item))}%</div>
          ) : null}
          <div
            className={`${ isLargeScreen ? 'mx-1' : 'mx-2'} cursor-pointer`}
            // onClick={(e) => handleProductClick(item, e)}
            // onMouseEnter={() => setZoomedItemId(item.id)}
            // onMouseLeave={() => setZoomedItemId(null)}
            style={{
              transform: zoomedItemId === item.id ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.8s ease',
            }}
          >
            <img
              loading="lazy"
              src="http://shopafricana.co/wp-content/uploads/2024/01/BRS_8479-1-copyBereal-600x800.webp"
              alt=""
            />
          </div>
        </div>
        <div className="pl-2 ">
          <h4 className="text-left flex items-center mt-4 cursor-pointer">
            <div className="text-sm uppercase">{item.name}</div>
          </h4>
          <h4 className="text-left flex items-center mt-1 cursor-pointer">
            <div className="text-sm font-bold">{'₦'}{findLowestPrice(item)}</div>
          </h4>
          <div className="text-left flex items-center mt-1 mb-8">
            <h4 className="h-4 text-xs cursor-pointer">SELECT OPTIONS</h4>
            <div className="ml-2">
              <RemoveRedEyeOutlinedIcon className="w-4 h-4 p-1" />
            </div>
            <div className="ml-2">
              <ShoppingBagOutlinedIcon className="w-4 h-4 p-1" />
            </div>
          </div>
        </div>
      </li>
    ))}
  </Slider>
</div>


<div className='flex justify-center mt-4 mb-2'>KAFTANS</div>
<div className="w-full px-2">
  <Slider {...settings}>
    {products.map((item, index) => (
      <li key={index} className="">
        <div className="">
          {findLowestPrice(item) < findHighestPrice(item) ? (
            <div className="absolute top-0 right-0 m-2 p-1 bg-red-500 text-white text-xs font-bold">-{calculateDiscountPercentage(findLowestPrice(item), findHighestPrice(item))}%</div>
          ) : null}
          <div
            className={`${ isLargeScreen ? 'mx-1' : 'mx-2'} cursor-pointer`}
            // onClick={(e) => handleProductClick(item, e)}
            // onMouseEnter={() => setZoomedItemId(item.id)}
            // onMouseLeave={() => setZoomedItemId(null)}
            style={{
              transform: zoomedItemId === item.id ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.8s ease',
            }}
          >
            <img
              loading="lazy"
              src="https://shopafricana.co/wp-content/uploads/2024/01/Africana-Ready-to-Wear1040-scaled-1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="pl-2 ">
          <h4 className="text-left flex items-center mt-4 cursor-pointer">
            <div className="text-sm uppercase">{item.name}</div>
          </h4>
          <h4 className="text-left flex items-center mt-1 cursor-pointer">
            <div className="text-sm font-bold">{'₦'}{findLowestPrice(item)}</div>
          </h4>
          <div className="text-left flex items-center mt-1 mb-8">
            <h4 className="h-4 text-xs cursor-pointer">SELECT OPTIONS</h4>
            <div className="ml-2">
              <RemoveRedEyeOutlinedIcon className="w-4 h-4 p-1" />
            </div>
            <div className="ml-2">
              <ShoppingBagOutlinedIcon className="w-4 h-4 p-1" />
            </div>
          </div>
        </div>
      </li>
    ))}
  </Slider>
</div>



<div className='flex justify-center mt-4 mb-2'>EXPLORE MORE</div>
<div className="flex flex-col md:flex-row mt-4 mb-2">
  <div className="w-full relative">
    <div className="p-2">
    <img src="http://shopafricana.co/wp-content/uploads/2023/12/ALAY4456111.jpg" className='rounded-lg'/>
  </div>
  <div className="absolute bottom-20 right-10 p-2 text-white bg-black bg-opacity-50 rounded-lg cursor-pointer">
    <p className="text-sm text-white font-bold" style={{ width: '60px' }}>WOMEN</p>
  </div>
  </div>
  
  <div className=" w-full relative">
    <div className="p-2">
    <img src="http://shopafricana.co/wp-content/uploads/2023/12/ALAY4447111.jpg" className='rounded-lg'/>
  </div>
  <div className="absolute bottom-20 right-10 p-2 text-white bg-black bg-opacity-50 rounded-lg cursor-pointer">
    <p className="text-sm text-white font-bold"  style={{ width: '60px' }} >MEN</p>
  </div>
  </div>
</div>






{/* <RecentProducts onQuickViewClick={handleDataViewData} products={products} addToCart={addToCart} cart={cart}/> */}
{/* <CtaSection /> */}
<div className='flex justify-start mt-12 mb-2 mx-2'>OUR STORES</div>
<Locations onQuickViewClick={handleDataViewData} products={products}/>

<Footer/>
    </div>
  );
}

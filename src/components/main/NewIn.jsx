import React, { useState, useEffect, useRef  } from 'react';
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Box, useMediaQuery } from '@mui/material';
import axios from 'axios';

import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import ShoppingBagOutlinedIcon from '@mui/icons-material/LocalMallSharp';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';

import Slider from 'react-slick';

import CryptoJS from 'crypto-js';
import { AES } from 'crypto-js';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { AnimatePresence, motion } from 'framer-motion';


function NewIn({ addToCart, cart }) {

    const navigate = useNavigate();
  const isLargeScreen = useMediaQuery('(min-width:960px)');

  const sliderRefNewIn = useRef(null); 
  const [isHoverWestNewIn, setIsHoverWestNewIn] = useState(false);
  const [isHoverEastNewIn, setIsHoverEastNewIn] = useState(false);
  const handleHoverWestNewIn = () => { setIsHoverWestNewIn(true); };
  const handleLeaveWestNewIn = () => { setIsHoverWestNewIn(false); };
  const handleHoverEastNewIn = () => { setIsHoverEastNewIn(true); };
  const handleLeaveEastNewIn = () => { setIsHoverEastNewIn(false); };

  
  const [openItemIndexNewIn, setOpenItemIndexNewIn] = useState(null);
  const toggleOptionsNewIn = (index) => {
    setProductCount(1);
    setSelectedSize('');
    setOpenItemIndexNewIn(openItemIndexNewIn === index ? null : index);
  };

  const [zoomedItemId, setZoomedItemId] = useState(null);
  const [products, setProductsData] = useState([]);
  const [productCount, setProductCount] = useState(1);
  const [isDataloading, setIsDataLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState('');
  const handleSizeSelection = (size) => {
    setSelectedSize(size);
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

  useEffect(() => {

    handleNewInData();
    
  }, []);




  const handleNewInData = async () => {    
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

  const handleProductClick = (product, e) => {

    //if (!isDragging) 
   {
       
       const encryptedData = AES.encrypt(JSON.stringify(product), 'encryptionKey').toString();
       navigate('/product-details', { state: { encryptedData } });
       //
       window.scrollTo(0, 0);
   }
   

 };

 const handleIncreaseQuantity = (item) => {
  setProductCount(productCount + 1);
};

const handleDecreaseQuantity = (item) => {
  if (productCount > 1) {
      setProductCount(productCount - 1);
  }
};

const [showItemAdded, setShowItemAdded] = useState(false);
const [showIndexItemAdded, setShowIndexItemAdded] = useState(-1);
const showAddedDialogue = (i) => {
  setShowIndexItemAdded(i);
  // alert("");
  setShowItemAdded(true);
  setTimeout(() => {
    setShowItemAdded(false);
  }, 2000);
}



const [addedItemName, setAddedItemName] = useState('');





// const [currentSlides, setCurrentSlides] = useState(products.map(() => 0)); // Initialize to an array of zeros
const [currentSlides, setCurrentSlides] = useState(Array(products.length).fill(0)); // Separate state for each carousel

// const images = productImages.map(image => image.url);
// function mainProductImage(product) { 
//   return product.productImages.find(img => img.isDefault).url;
// }


  // const [currentSlide, setCurrentSlide] = useState(0);
  const [delayTimeout, setDelayTimeout] = useState(null);
  const handleMouseEnter = (index, item) => {
    
    clearTimeout(delayTimeout); // Clear any existing timeout
    const timeout = setTimeout(() => {

      setCurrentSlides((prevSlides) => {
        const newSlides = [...prevSlides];
        // newSlides[index] = (prevSlides[index] + 1) % images.length;
        newSlides[index] = (prevSlides[index] + 1) % item.productImages.length;
        return newSlides;
      });
    
    }, 500); 
    setDelayTimeout(timeout); // Save the timeout reference
    
  };
  
  useEffect(() => {
    // Initialize currentSlides to an array of zeros
    setCurrentSlides(Array(products.length).fill(0));
  }, [products]);







    return (
        <div className="container-1410 ">
<div className='flex justify-between mt-12 mb-4'>
<div style={{ width: '50px' }} className='flex justify-start'>
      <ArrowRightAltIcon
        className='cursor-pointer'
        onClick={() => sliderRefNewIn.current.slickPrev()}
        onMouseEnter={handleHoverWestNewIn}
        onMouseLeave={handleLeaveWestNewIn}
        style={{ width: isHoverWestNewIn ? '32px' : '44px', transition: 'width 0.3s ease', transform: 'scaleX(-1)' }}
      />
      </div>
      <a style={{ cursor: 'pointer' }}>NEW IN</a>
      <div style={{ width: '50px'}} className='flex justify-end'>
      <ArrowRightAltIcon
        className='cursor-pointer'
        onClick={() => sliderRefNewIn.current.slickNext()}
        onMouseEnter={handleHoverEastNewIn}
        onMouseLeave={handleLeaveEastNewIn}
        style={{ width: isHoverEastNewIn ? '32px' : '44px', transition: 'width 0.3s ease' }}
      />
      </div>
    </div>
<div className="w-full">
  <Slider ref={sliderRefNewIn} {...settings}>
    {products.map((item, index) => (
      <li key={index} className="">
        <div className="">
          {findLowestPrice(item) < findHighestPrice(item) ? (
            <div className="absolute top-0 right-0 m-2 p-1 bg-red-500 text-white text-xs font-bold">-{calculateDiscountPercentage(findLowestPrice(item), findHighestPrice(item))}%</div>
          ) : null}
<div className={`${ isLargeScreen ? 'mx-1' : 'mx-2'} cursor-pointer`} style={{ position: 'relative' }}>
  <div className="ml-2 z-50" style={{ position: 'absolute', top: '16px', left: '4px', display: 'flex' }}>
    {item.productImages.map((_, i) => (
      <div
        key={i}
        style={{
          width: '24px',
          height: '2px',
          margin: '0 4px',
          background: i === currentSlides[index] ? '#000' : '#fff',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        // onClick={() => setCurrentSlide(i)}
        aria-label={`Go to slide ${i + 1}`}
        title={`${i + 1}`}
      />
    ))}
  </div>
  <div
    className="cursor-pointer"
    onClick={(e) => handleProductClick(item, e)}
    onMouseEnter={() => setZoomedItemId(item.id)}
    onMouseLeave={() => setZoomedItemId(null)}
    // style={{
    //   transform: zoomedItemId === item.id ? 'scale(1.05)' : 'scale(1)',
    //   transition: 'transform 0.8s ease',
    // }}
  >
    <Carousel
      showIndicators={false}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={false}
      draggable={false}
      selectedItem={currentSlides[index]}
      onChange={(slide) => setCurrentSlides((prevSlides) => prevSlides.map((prevSlide, i) => (i === index ? slide : prevSlide)))}
    >
      {item.productImages.map((image, imageIndex) => (
        <div key={imageIndex} onMouseEnter={() => handleMouseEnter(index, item)}>
          <img
            src={image.url}
            alt={`Image ${imageIndex}`}
            style={{
              transform: zoomedItemId === item.id ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.8s ease',
            }}
          />
        </div>
      ))}
    </Carousel>
  </div>
</div>

        </div>
        <div className="pl-2 ">
          <h4 className="text-left flex items-center mt-4 cursor-pointer">
            <div className="text-sm uppercase">{item.name}</div>
          </h4>
          <h4 className="text-left flex items-center mt-2 cursor-pointer">
            <div className="text-sm font-bold">{'₦'}{findLowestPrice(item)}</div>
          </h4>
          <div className="text-left flex items-center mt-1 ">
            <h4 className="h-4 text-xs cursor-pointer" onClick={() => {toggleOptionsNewIn(index)}}>OPTIONS</h4>
            <AnimatePresence>
                                        {openItemIndexNewIn === index && (
                                            <motion.div
                                                // initial={{ opacity: 0 }}
                                                // animate={{ opacity: 1 }}
                                                // exit={{ opacity: 0 }}
                                                
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}

                                                className="absolute bg-gray-100 p-2 rounded-lg border border-gray-300 mt-2"
                                                style={{ marginTop: '-134px' }}
                                            >
                                                <div className='flex justify-between items-start  mb-4 mt-1'>
                                                    <CloseIcon style={{ color: '#777777' }} className='cursor-pointer p-1' onClick={() => { toggleOptionsNewIn(index) }} />
                                                    <div className='text-sm'>{item.name}</div>
                                                </div>

                                                <div className="mx-1 mb-2 flex items-center justify-between" style={{ color: '#777777', height: '30px' }}>
                                                    <div className='flex'>
                                                        <div onClick={() => handleSizeSelection('S')} className={`flex justify-center items-center mr-1 ${selectedSize === 'S' ? 'bg-black text-white' : 'bg-white'} text-xs`} style={{ border: '1px solid #ccc', padding: '4px', width: '32px', height: '30px', cursor: 'pointer' }}>S</div>
                                                        <div onClick={() => handleSizeSelection('M')} className={`flex justify-center items-center mx-1 ${selectedSize === 'M' ? 'bg-black text-white' : 'bg-white'} text-xs`} style={{ border: '1px solid #ccc', padding: '4px', width: '32px', height: '30px', cursor: 'pointer' }}>M</div>
                                                        <div onClick={() => handleSizeSelection('L')} className={`flex justify-center items-center mx-1 ${selectedSize === 'L' ? 'bg-black text-white' : 'bg-white'} text-xs`} style={{ border: '1px solid #ccc', padding: '4px', width: '32px', height: '30px', cursor: 'pointer' }}>L</div>
                                                        <div onClick={() => handleSizeSelection('XL')} className={`flex justify-center items-center mx-1 ${selectedSize === 'XL' ? 'bg-black text-white' : 'bg-white'} text-xs`} style={{ border: '1px solid #ccc', padding: '4px', width: '32px', height: '30px', cursor: 'pointer' }}>XL</div>
                                                        <div onClick={() => handleSizeSelection('XXL')} className={`flex justify-center items-center ml-1 ${selectedSize === 'XXL' ? 'bg-black text-white' : 'bg-white'} text-xs`} style={{ border: '1px solid #ccc', padding: '4px', width: '32px', height: '30px', cursor: 'pointer' }}>XXL</div>

                                                    </div>
                                                </div>

                                                <div className="flex flex-col md:flex-row mb-4">
                                                    <div className="flex items-center bg-black mx-1 my-1">
                                                        <div className="" style={{ display: 'flex', alignItems: 'center' }}>
                                                            <div className='flex bg-white items-center justify-center m-2' style={{ height: '80%', width: '100%' }}>
                                                                <RemoveIcon className='' style={{ cursor: 'pointer', width: '30px', borderRight: '1px solid #ccc' }}
                                                                    onClick={() => { handleDecreaseQuantity(item) }}
                                                                />
                                                                <span className='flex justify-center items-center text-center' style={{ width: '30px' }}>{productCount}</span>
                                                                <AddIcon className='' style={{ cursor: 'pointer', width: '30px', borderLeft: '1px solid #ccc' }}
                                                                    onClick={() => { handleIncreaseQuantity(item) }}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className='flex flex-col md:flex-row bg-black '>
                                                            <div className="flex ml-2 w-20 text-white items-center cursor-pointer"
                                                                onClick={() => {
                                                                    showAddedDialogue(index);
                                                                    addToCart(item, productCount);
                                                                    toggleOptionsNewIn(index);

                                                                    setAddedItemName(item.name);
                                                                }
                                                                }
                                                            >
                                                                <ShoppingBagOutlinedIcon className="p-1 w-4 h-4 mx-2" /><span className='text-xs' style={{ paddingTop: '0px' }}>ADD</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

            

            <div className="flex ml-4 bg-gray-300 rounded-lg w-20 text-black items-center cursor-pointer mr-2" 
            onClick={() => {
              showAddedDialogue(index);
              addToCart(item, 1);

              setAddedItemName(item.name);
            }
          }
            >
              <ShoppingBagOutlinedIcon className="p-1 w-4 h-4 mx-2 flex" 
              />
              


              <span className='text-xs' style={{ paddingTop: '0px' }}>ADD</span>
            </div>
          </div>
        </div>
      </li>
    ))}
  </Slider>
</div>

{showItemAdded ?
// && showIndexItemAdded === index && 
(
  <div 
    // className="flex absolute bg-white p-4 rounded-lg border border-gray-300 mt-2 text-lg z-50 items-center justify-center" 
    className="flex absolute bg-black p-4 rounded-lg mt-2 text-lg z-50 items-center justify-center text-white" 
    style={{ 
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '240px',
      height: '100px',
    }}
  >
    {addedItemName} added to your cart !!
  </div>
) : ''}
        </div>
    );
}

export default NewIn;
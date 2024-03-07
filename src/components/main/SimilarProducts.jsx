import React, {useState, Fragment, useEffect} from 'react';
import Slider from "react-slick";
// import ReactTooltip from 'react-tooltip';

import './react-css/products.css';

import imgx from '../../assets/images/shop/img-2.jpg';
// import imgx from '../../assets/images/site-products/3.jpg';
import {Link, useNavigate} from "react-router-dom";


import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagOutlinedIcon from '@mui/icons-material/LocalMallSharp';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';


import CryptoJS from 'crypto-js';
import { AES } from 'crypto-js';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


import axios from 'axios';

import { AnimatePresence, motion } from 'framer-motion';


function SimilarProducts({onQuickViewClick, products, addToCart}) {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    // const [isDragging, setIsDragging] = useState(false);

    const [isPrevHovered, setPrevHovered] = useState(false);
    const [isNextHovered, setNextHovered] = useState(false);

    const [isViewHovered, setViewHovered] = useState(false); const [isViewHoveredId, setViewHoveredId] = useState(null);
    const [isFavHovered, setFavHovered] = useState(false);
    const [isBagHovered, setBagHovered] = useState(false); const [isBagHoveredId, setBagHoveredId] = useState(null);



  
    
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3, //7,
        slidesToScroll: 1,
        autoplay: true,
        speed: 600,
        swipeToSlide: true,
        autoplaySpeed: 4000,
        focusOnSelect: false,
        // prevArrow: <SamplePrevArrow />,
        // nextArrow: <SampleNextArrow />,
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
  
    // return lowestPrice;
    return lowestPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
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

  
  const handleProductClick = (product) => {

     //if (!isDragging) 
    {
        //const productString = JSON.stringify(product);
        //navigate(`/product-details/${encodeURIComponent(productString)}`);

        // Encrypt the product data
        // Navigate to the route with the encrypted parameter
        const encryptedData = AES.encrypt(JSON.stringify(product), 'encryptionKey').toString();
        // navigate(`/product-details/${encodeURIComponent(encryptedData)}`);
        navigate('/product-details', { state: { encryptedData } });
        //
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


  const [zoomedItemId, setZoomedItemId] = useState(null);
    const [productCount, setProductCount] = useState(1);
    const [selectedSize, setSelectedSize] = useState('');
    const handleSizeSelection = (size) => {
      setSelectedSize(size);
    };



  const [openItemIndexSimilarProduct, setOpenItemIndexSimilarProduct] = useState(null);
  const toggleOptionsSimilarProduct = (index) => {
    setProductCount(1);
    setSelectedSize('');
    setOpenItemIndexSimilarProduct(openItemIndexSimilarProduct === index ? null : index);
  };



  const [showItemAdded, setShowItemAdded] = useState(false);
const [showIndexItemAdded, setShowIndexItemAdded] = useState(-1);
const showAddedDialogue = (i) => {
  setShowIndexItemAdded(i);
  // alert("");
  setShowItemAdded(true);
  setTimeout(() => {
    setShowItemAdded(false);
  }, 1000);
}





// const [currentSlides, setCurrentSlides] = useState(products.map(() => 0)); // Initialize to an array of zeros
const [currentSlides, setCurrentSlides] = useState(Array(products.length).fill(0)); // Separate state for each carousel
const images = [
  "http://shopafricana.co/wp-content/uploads/2024/01/March-23-Document-Name12-scaled-1-900x1125.jpg", 
  "http://shopafricana.co/wp-content/uploads/2024/01/March-23-Document-Name12-scaled-1-900x1125.jpg", 
  "http://shopafricana.co/wp-content/uploads/2024/01/March-23-Document-Name12-scaled-1-900x1125.jpg"
];
  // const [currentSlide, setCurrentSlide] = useState(0);
  const [delayTimeout, setDelayTimeout] = useState(null);
  const handleMouseEnter = (index) => {
    
    clearTimeout(delayTimeout); // Clear any existing timeout
    const timeout = setTimeout(() => {

      setCurrentSlides((prevSlides) => {
        const newSlides = [...prevSlides];
        newSlides[index] = (prevSlides[index] + 1) % images.length;
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
        <Fragment>
            {/* start recent-product-section */}
            <section className="trendy-product-section section-padding-medium">

                <div className="container-1410">
                    <div className="row flex">
                        <div className="col col-xs-12">
                            <div className="section-title-s2">
                                <h2 className='text-center'>Similar Products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="products-wrapper">
                                <ul className="products "
                                >
                                    <Slider {...settings}>
                                        {
                                            products.map((item, index) => (
                                                <li key={index} className="product">
                                                    <div className="product-holder">
                                                    
                                                    {
                            // parseInt(item.price) < parseInt(item.oldPrice)
                            findLowestPrice(item) < findHighestPrice(item)
                            
                            ? (
                              <div className="product-badge discount">
                                -{calculateDiscountPercentage(findLowestPrice(item), findHighestPrice(item))}%
                              </div>
                            ) : null
                            }

                            {/* <Link to="/product-details"> */}
                            <div  className='mx-2'
                            // onClick={isDragging ? null : (e) => handleProductClick(item, e)} 
                            onClick={(e) => handleProductClick(item, e)} 
                            style={{cursor: 'pointer'}}>



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
        {images.map((image, imageIndex) => (
          <div key={imageIndex} onMouseEnter={() => handleMouseEnter(index)} >
            <img 
            src={image} 
            alt={`Image ${imageIndex}`} 

          style={{
            transform: zoomedItemId === item.id ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.8s ease',
          }}

            />
          </div>
        ))}
      </Carousel>
      <div className="ml-4" style={{ position: 'absolute', top: '16px', left: '8px', display: 'flex' }}>
        {images.map((_, i) => (
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




                                                            {/* <img loading="lazy" 
                                                            src=
                                                            "http://shopafricana.co/wp-content/uploads/2024/01/March-23-Document-Name12-scaled-1-900x1125.jpg"
                                                            //{item.mainImg} 
                                                            alt=""
                                                            
                                                            onMouseEnter={() => setZoomedItemId(item.id)}
                               onMouseLeave={() => setZoomedItemId(null)}
                               style={{
                                transform: zoomedItemId === item.id ? 'scale(1.05)' : 'scale(1)',
                                transition: 'transform 0.8s ease',
                            }}

                                                            /> */}
                                                        
                                                        {/* </Link> */}
                                                        </div>

                                                        
                                                    </div>
                                                    <div className="pl-2">
                                                    <h4 className="text-left flex items-center mt-4 cursor-pointer">
            <div className="text-sm uppercase">{item.name}</div>
          </h4>
                                                        <h4 className="text-left flex items-center mt-2 cursor-pointer">
            <div className="text-sm font-bold">{'₦'}{findLowestPrice(item)}</div>
          </h4>

          <div className="text-left flex items-center mt-1 mb-8">
            <h4 className="h-4 text-xs cursor-pointer" onClick={() => {toggleOptionsSimilarProduct(index)}}>SELECT OPTIONS</h4>
            <AnimatePresence>
                                        {openItemIndexSimilarProduct === index && (
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
                                                    <CloseIcon style={{ color: '#777777' }} className='cursor-pointer p-1' onClick={() => { toggleOptionsSimilarProduct(index) }} />
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
                                                                    toggleOptionsSimilarProduct(index);
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
            {/* <div className="ml-2">
              <RemoveRedEyeOutlinedIcon className="w-4 h-4 p-1" />
            </div> */}
            <div className="flex ml-4 bg-gray-300 rounded-lg w-20 text-black items-center cursor-pointer mr-2"
            onClick={() => {
              showAddedDialogue(index);
              addToCart(item, 1);

            }
          }
            >
              <ShoppingBagOutlinedIcon className="p-1 w-4 h-4 mx-2 flex" />
              {showItemAdded && showIndexItemAdded === index && (
        <div className="absolute bg-gray-100 p-2 rounded-lg border border-gray-300 mt-2 text-xs" style={{ marginTop: '-100px' }}>
          {item.name} added
        </div>
      )}
      <span className='text-xs' style={{ paddingTop: '0px' }}>ADD</span>
            </div>
          </div>
                                                            
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
                {/* end container-1410 */}
            </section>
            {/* end recent-product-section */}
            {/* <ReactTooltip className='tool-tip' effect='solid'/> */}
        </Fragment>
    );
}

export default SimilarProducts;
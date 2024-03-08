import React, {useState, Fragment, useEffect} from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import axios from 'axios';

import Slider from "react-slick";

import AfricanaHeader from './AfricanaHeader';
import AfricanaFooter from './AfricanaFooter';

import RelatedProducts from './RelatedProducts';
import ProductInfoTabs from './ProductInfoTabs';

import StarRateIcon from '@mui/icons-material/StarRate';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import FlashOnIcon from '@mui/icons-material/FlashOn';


import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


import CryptoJS from 'crypto-js';
import { AES } from 'crypto-js';

import './react-css/shop.css';
import data from './singleProductDemo.json';

import imgx from '../../assets/images/size.png';

import CloseIcon from '@mui/icons-material/Close';


function ProductPage({options, addToCart, cart, updateCart, removeCartItem, removeAllCartItem, handleEmailAddress }) {

    const navigate = useNavigate();
    const location = useLocation();
    const product = location.state.encryptedData;

    const [showQuickView, setShowQuickView] = useState(false);
    const [quickViewData, setQuickViewData] = useState({});
    const [productCount, setProductCount] = useState(1);

    const [relatedProducts, setRelatedProductsData] = useState([]);
    const [isDataloading, setIsDataLoading] = useState(true);


    const [star, setStar] = useState(0);
    

    const handleStarClick = (rating) => {
        setStar(rating);
    };
    
    const [selectedSize, setSelectedSize] = useState('');
    const handleSizeSelection = (size) => {
      setSelectedSize(size);
    };

    const decryptedData = AES.decrypt(decodeURIComponent(product), 'encryptionKey').toString(CryptoJS.enc.Utf8);
    const parsedProduct = JSON.parse(decryptedData);

    const HandleQuickViewData = (e, item) => {
        e.preventDefault();
        setShowQuickView(!showQuickView);
        setQuickViewData(item);
    };

    const HandleQuickViewClose = (e) => {
        e.preventDefault();
        setShowQuickView(false);
        setQuickViewData({});
    };

    const settings = {
        customPaging: function (i) {
           return (
               <a>
                   <img 
                   src=
                   //{imgs}
                   "http://shopafricana.co/wp-content/uploads/2024/01/March-23-Document-Name12-scaled-1-900x1125.jpg"
                           
                   />
               </a>
           );
       },
       infinite: true,
       speed: 600,
       autoplaySpeed: 4000,
       slidesToShow: 1,
       slidesToScroll: 1,
       autoplay: true,
       dots: true,
       dotsClass: "slick-dots slick-thumb slider-nav",
       arrows: false,
       //vertical: true,
       //verticalSwiping: true,
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

    useEffect(() => {
        window.scrollTo(0, 0);
          handleData();
    }, []);

    const handleData = async () => {    
        setIsDataLoading(true);
        try {
    
          const response = await axios.get('http://144.149.167.72.host.secureserver.net:3000/api/v1/products', {
            headers: {
              "Content-Type": "application/json",
              //Authorization: `Bearer ${token}`,
            },
          });
    
          setIsDataLoading(false);
    
          if (response.data.success) {
    
            setRelatedProductsData(response.data.products);
          } else {
           // alert("error: " + response.data.message);
          }
    
        } catch (error) {
          setIsDataLoading(false);
          //alert("error: " + error);
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

    const handleBuyNow = () => {
        addToCart(parsedProduct, productCount);
    
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
const [addedItemName, setAddedItemName] = useState('');


const [showSizeChart, setShowSizeChart] = useState(false);
const showSizeChartDialogue = (i) => {
    // setShowIndexItemAdded(i);
    // alert("");
    setShowSizeChart(true);
    setTimeout(() => {
        // setShowSizeChart(false);
    }, 3000);
  }

    return (
        <div>
            
            <div className='bg-black'><AfricanaHeader options={options} cart={cart} removeCartItem={removeCartItem} removeAllCartItem={removeAllCartItem}  handleEmailAddress={handleEmailAddress} /></div>

            <section className="shop-single-section  shop-single-vertical-thumb section-padding">
                <div className="container-1410">
                    <div className="row">
                    


                        <div className="col col-md-6">
                            <div className="shop-single-slider vertical-thumbnail" 
                            //  style={{ background: '#FF0000' }}
                            >
                                {/* <Slider {...settings}>
                                    {
                                        parsedProduct && parsedProduct.productImages.map((item, index) => (
                                            <div key={index} 
                                            // style={{ background: '#000000' }}
                                            >
                                                <img 
                                                className='px-1 mx-1 mt-2'
                                                // style={{ maxHeight: '100%', width: 'auto' }}
                                                // style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                                src=
                                                // {item.src}
                                                "http://shopafricana.co/wp-content/uploads/2024/01/March-23-Document-Name12-scaled-1-900x1125.jpg"
                            
                                                />
                                            </div>
                                        ))
                                    }
                                </Slider>
                                <div className="slider-nav"></div> */}

                                <Slider {...settings}>
                                    {
                                        data.images.map((item, index) => (
                                            <div key={index}>
                                                <img 
                                                className='px-1 mx-1 mt-2'
                                                src=
                                                "http://shopafricana.co/wp-content/uploads/2024/01/March-23-Document-Name12-scaled-1-900x1125.jpg"
                                                // onMouseEnter={}
                                                />
                                            </div>
                                        ))
                                    }
                                </Slider>
                                <div className="slider-nav"></div>

                                
                            </div>
                        </div>
                        <div className="col col-md-6">
                            <div className="product-details">
                                <h2 className='' style={{ fontSize: '24px' }}>{parsedProduct.name}</h2>
                                {showSizeChart && (
  <div
    className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 z-50"
    style={{
      width: '100vw',
      height: '100vh',
    }}
  >
    <div
      className="flex flex-col bg-gray-100 p-2 rounded-lg border border-gray-300 text-xs"
      style={{
        width: '80vw',
        height: '80vh',
      }}
    >
        <div className='flex justify-end'><CloseIcon style={{ color: '#777777' }} className='cursor-pointer p-1' onClick={() => { setShowSizeChart(false); }} /></div>
      <img src={imgx} style={{ maxWidth: '100%', maxHeight: '95%', objectFit: 'contain' }}/>
    </div>
  </div>
)}

                                <div className="price" style={{ fontSize: '20px' }}>
                                    <span className="current">{'₦'}{findLowestPrice(parsedProduct)}</span>
                                    {/* <span className="old">{'₦'}{findHighestPrice(parsedProduct)}</span> */}
                                </div>
                                <div className="rating">
                                    {/* <i className="fi flaticon-star"/>
                                    <i className="fi flaticon-star"/>
                                    <i className="fi flaticon-star"/>
                                    <i className="fi flaticon-star"/>
                                    <i className="fi flaticon-star-social-favorite-middle-full"/> */}
                                    <a className="star-1" onClick={() => handleStarClick(1)} style={{ cursor: 'pointer' }}>
                                {/* <i className="ti-star" style={{ color: star < 1 ? 'grey' : 'black' }}/> */}
                                <StarRateIcon style={{width: '20px', height: '20px', color: star < 1 ? 'grey' : '#c25f2b' }}/>
                            </a>
                            <a className="star-1" onClick={() => handleStarClick(2)} style={{ cursor: 'pointer' }}>
                                {/* <i className="ti-star" style={{ color: star < 2 ? 'grey' : 'black' }}/> */}
                                <StarRateIcon style={{width: '20px', height: '20px',  color: star < 2 ? 'grey' : '#c25f2b' }}/>
                            </a>
                            <a className="star-1" onClick={() => handleStarClick(3)} style={{ cursor: 'pointer' }}>
                                {/* <i className="ti-star" style={{ color: star < 3 ? 'grey' : 'black' }}/> */}
                                <StarRateIcon style={{width: '20px', height: '20px',  color: star < 3 ? 'grey' : '#c25f2b' }}/>
                            </a>
                            <a className="star-1" onClick={() => handleStarClick(4)} style={{ cursor: 'pointer' }}>
                                {/* <i className="ti-star" style={{ color: star < 4 ? 'grey' : 'black' }}/> */}
                                <StarRateIcon style={{width: '20px', height: '20px',  color: star < 4 ? 'grey' : '#c25f2b' }}/>
                            </a>
                            <a className="star-1" onClick={() => handleStarClick(5)} style={{ cursor: 'pointer' }}>
                                {/* <i className="ti-star" style={{ color: star < 5 ? 'grey' : 'black' }}/> */}
                                <StarRateIcon style={{width: '20px', height: '20px',  color: star < 5 ? 'grey' : '#c25f2b' }}/>
                            </a>
                                    {/* <span>{data.reviewCount}</span> */}
                                    {/* <span className='ml-2'>({parsedProduct && parsedProduct.rating} Customer review{parsedProduct && parsedProduct.rating > 1 ? 's ' : ' '})</span> */}
                                </div>



                                <span className="tagged_as" style={{ display: 'flex', alignItems: 'center', color: '#777777', height: '30px',  }}>
                                    <div>SIZE: </div>
        <div onClick={() => handleSizeSelection('S')} className={`text-center ${selectedSize === 'S' ? 'bg-black text-white' : 'bg-white'} ml-2 mx-1`} style={{ border: '1px solid #ccc', padding: '5px', width: '40px', cursor: 'pointer' }}>S</div>
        <div onClick={() => handleSizeSelection('M')} className={`text-center ${selectedSize === 'M' ? 'bg-black text-white' : 'bg-white'} mx-1`} style={{ border: '1px solid #ccc', padding: '5px', width: '40px', cursor: 'pointer' }}>M</div>
        <div onClick={() => handleSizeSelection('L')} className={`text-center ${selectedSize === 'L' ? 'bg-black text-white' : 'bg-white'} mx-1`} style={{ border: '1px solid #ccc', padding: '5px', width: '40px', cursor: 'pointer' }}>L</div>
        <div onClick={() => handleSizeSelection('XL')} className={`text-center ${selectedSize === 'XL' ? 'bg-black text-white' : 'bg-white'} mx-1`} style={{ border: '1px solid #ccc', padding: '5px', width: '40px', cursor: 'pointer' }}>XL</div>
        <div onClick={() => handleSizeSelection('XXL')} className={`text-center ${selectedSize === 'XXL' ? 'bg-black text-white' : 'bg-white'} mx-1`} style={{ border: '1px solid #ccc', padding: '5px', width: '40px', cursor: 'pointer' }}>XXL</div>
        <div onClick={() => showSizeChartDialogue()} className={`text-center ${selectedSize === 'XXL' ? 'bg-black text-white' : 'bg-white'} mx-1`} style={{ border: '1px solid #ccc', padding: '5px', width: '90px', cursor: 'pointer' }}>Size Chart</div>
        {/* <div onClick={() => showSizeChartDialogue()} className={`flex justify-center items-center ml-1 ${selectedSize === 'Show Size Chart' ? 'bg-black text-white' : 'bg-white'} `} style={{ border: '1px solid #ccc', padding: '4px', width: '80px', height: '40px', cursor: 'pointer' }}>Size Chart</div> */}

                           {/* {
                                        data.tags.map((item, index) =>
                                            <a key={index}
                                               href={item.link}>{' ' + item.name}{data.tags.length - 1 === index ? '' : ', '}</a>
                                        )
                                    } */}
                                </span>



                                <div className="product-option flex flex-col md:flex-row">
                            {/* <form className="form"> */}
                                <div className="product-row flex items-center bg-black mx-2 my-1">

                                <div className="touchspin-wrap" style={{ display: 'flex', alignItems: 'center' }}>
            
            <div className='flex bg-white items-center justify-center m-2' style={{ height: '80%', width: '100%' }}>
                <RemoveIcon className='' style={{ cursor: 'pointer', width: '30px', borderRight: '1px solid #ccc' }} 
                onClick={() => { handleDecreaseQuantity(parsedProduct) }}
                />
                
                <span className='flex justify-center items-center text-center' style={{ width: '30px' }}>{productCount}</span>
                <AddIcon className='' style={{ cursor: 'pointer', width: '30px', borderLeft: '1px solid #ccc' }} 
                onClick={() => { handleIncreaseQuantity(parsedProduct) }}
                />
            </div>

        </div>


                                    
                                    <div className='bg-black'>
                                        <button className='p-4 font-bold text-white ml-8 text-sm' 
                                        onClick={
                                            () => {
                                                showAddedDialogue(0);addToCart(parsedProduct, productCount);

                                                setAddedItemName(parsedProduct.name);
                                            }                                        
                                        }                                        
                                        >ADD TO CART</button>
                                    </div>
                                    {/* {showItemAdded 
                                    // && showIndexItemAdded === index 
                                    && (
        <div className="absolute bg-gray-100 p-2 rounded-lg border border-gray-300 mt-2 text-xs" style={{ marginTop: '-100px' }}>
          {parsedProduct.name} added
        </div>
      )} */}



                                    
                                </div>

                                <div  className='flex bg-black  justify-center mx-2 my-1'>
                                        <button className='p-4 font-bold text-white  text-sm' 
                                        onClick={handleBuyNow}

                                        
                                        ><FlashOnIcon /> BUY NOW</button>
                                    </div>


                            {/* </form> */}
                        </div>
                                <p>{parsedProduct.description}</p>
                                
                                 
                                <div className="thb-product-meta-before">
                                {/* <div className="add-to-wishlist">
                                <a className="add_to_wishlist">
                                    <FavoriteIcon className='mr-2' style={{ cursor: "pointer" }}/>
                                    <span>Add To Wishlist</span>
                                </a>
                            </div> */}
                                    <div className="product_meta">
                                    {/* <span className="sku_wrapper">SKU:<span className="sku">{' ' + parsedProduct.sku}</span></span> */}
                                        {/* <span className="posted_in">
                                    Categories:
                                    {
                                        data.categories.map((item, index) =>
                                            <a key={index}
                                               href={item.link}>{' ' + item.name}{data.categories.length - 1 === index ? '' : ', '}</a>
                                        )
                                    }
                                </span> */}
                                <span className="tagged_as">
                                    Tags:
                                    {/* {
                                        data.tags.map((item, index) =>
                                            <a key={index}
                                               href={item.link}>{' ' + item.name}{data.tags.length - 1 === index ? '' : ', '}</a>
                                        )
                                    } */}
                                </span>
                                <span className="tagged_as" style={{ display: 'flex', alignItems: 'center', color: '#777777', height: '30px',  }}>
                                    <div>SHARE: </div>
                                    <XIcon className='ml-2 mr-4' style={{ height: '16px', width: '16px', cursor: 'pointer' }} /> 
                                    <FacebookIcon className='mr-4' style={{ height: '16px', width: '16px', cursor: 'pointer' }} /> 
                                    <InstagramIcon className='mr-4' style={{ height: '16px', width: '16px', cursor: 'pointer' }} /> 
                                    <ContentCopyIcon className='mr-4' style={{ height: '16px', width: '16px', cursor: 'pointer' }} />
                                    
                                </span>
                                    </div>
                                </div>

                                
                            </div>
                        </div>
                        {/* end col */}
                    </div>
                    {/* end row */}
                    <div className="row">
                        <div className="col col-md-8 col-md-offset-2">
                            <ProductInfoTabs/>
                        </div>
                    </div>
                    {/* end row */}
                    <div className="row">
                        <div className="col col-xs-12">
                            <RelatedProducts onQuickViewClick={HandleQuickViewData} relatedProducts={relatedProducts} addToCart={addToCart} cart={cart}/>
                        </div>
                    </div>
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

                {/* end of container */}
            </section>

            <AfricanaFooter />
        </div>
    );
}

export default ProductPage;
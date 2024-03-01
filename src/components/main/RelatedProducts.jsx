import React, {Fragment, useState} from 'react';
import Slider from "react-slick";

import './products.css';

import { Link, useNavigate, useParams } from 'react-router-dom';

import imgx from '../../assets/images/shop/img-2.jpg';

import ShoppingBagOutlinedIcon from '@mui/icons-material/LocalMallSharp';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';

import CryptoJS from 'crypto-js';
import { AES } from 'crypto-js';



/**
 * Recent Single Products component
 * @param onQuickViewClick
 * @returns {*}
 * @constructor
 */
function RelatedProducts({onQuickViewClick, relatedProducts, addToCart, cart}) {

    
    const navigate = useNavigate();


    const [isPrevHovered, setPrevHovered] = useState(false);
    const [isNextHovered, setNextHovered] = useState(false);

    const [isViewHovered, setViewHovered] = useState(false); const [isViewHoveredId, setViewHoveredId] = useState(null);
    const [isFavHovered, setFavHovered] = useState(false);
    const [isBagHovered, setBagHovered] = useState(false); const [isBagHoveredId, setBagHoveredId] = useState(null);
    

    const [showWidget, setShowWidget] = useState(false);

    const [zoomedItemId, setZoomedItemId] = useState(null);
    
    const [openItemIndexRelatedProduct, setOpenItemIndexRelatedProduct] = useState(null);
  const toggleOptionsRelatedProduct = (index) => {
    setOpenItemIndexRelatedProduct(openItemIndexRelatedProduct === index ? null : index);
  };



    /**
     * slider settings
     * @type {{swipeToSlide: boolean, dots: boolean, infinite: boolean, responsive: *[], slidesToScroll: number, focusOnSelect: boolean, slidesToShow: number, autoplay: boolean, speed: number, autoplaySpeed: number}}
     */
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
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

     //if (!isDragging) 
    {
        
        //plain
        //const productString = JSON.stringify(product);
        //navigate(`/product-details/${encodeURIComponent(productString)}`);

        // Encrypt the product data
        // Navigate to the route with the encrypted parameter
        const encryptedData = AES.encrypt(JSON.stringify(product), 'encryptionKey').toString();
        // navigate(`/product-details/${encodeURIComponent(encryptedData)}`);
        navigate('/product-details', { state: { encryptedData } });
        //
        window.scrollTo(0, 0);
    }
    

  };


  


    return (
        <Fragment>
            <div className="realted-porduct">
                <h3>Related products</h3>
                <ul className="products product-row-slider" 
                >
                    <Slider {...settings}
                    >
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
                                            <div className='mx-2'
                                        onClick={(e) => handleProductClick(item, e)}

                                        style={{cursor: 'pointer'}}>
                                            <img loading="lazy" 
                                            src=
                                            "https://shopafricana.co/wp-content/uploads/2024/01/BRS_8479-1-copyBereal-900x1125.webp"
                                            alt=""
                                            
                                            onMouseEnter={() => setZoomedItemId(item.id)}
                               onMouseLeave={() => setZoomedItemId(null)}
                               style={{
                                transform: zoomedItemId === item.id ? 'scale(1.05)' : 'scale(1)',
                                transition: 'transform 0.8s ease',
                            }}

                                            />
                                        </div>
                                        {/* </Link> */}

                                        
                                    </div>
                                    <div className="pl-2" >
                                    <h4 className="text-left flex items-center mt-4 cursor-pointer">
            <div className="text-sm uppercase">{item.name}</div>
          </h4>
          <h4 className="text-left flex items-center mt-2 cursor-pointer">
            <div className="text-sm font-bold">{'₦'}{findLowestPrice(item)}</div>
          </h4>
                                        <div className="text-left flex items-center mt-1 mb-8">
            <h4 className="h-4 text-xs cursor-pointer" onClick={() => {toggleOptionsRelatedProduct(index)}}>SELECT OPTIONS</h4>
            {openItemIndexRelatedProduct === index && (
              <div className="absolute bg-gray-100 p-2 rounded-lg border border-gray-300 mt-2" style={{ marginTop: '-100px' }}>
              <div className='flex justify-between items-start  mb-4 mt-1'>
                {/* <div className='text-xs font-bold'>SIZE</div> */}
                <CloseIcon style={{ color: '#777777' }} className='cursor-pointer p-1' onClick={() => {toggleOptionsRelatedProduct(index)}}/>
                {/* <CloseIcon style={{ color: '#777777' }} className='cursor-pointer p-1' onClick={() => {toggleOptions(index);}}/> */}
              </div>
            
              <div className="mx-1 mb-2 flex items-center justify-between" style={{ color: '#777777', height: '30px' }}>
                {/* <div className='text-xs font-bold'>SIZE:</div> */}
                <div className='flex'>
                <div className='flex justify-center items-center mr-1 bg-white text-xs' style={{ border: '1px solid #ccc', padding: '4px', width: '32px', height: '30px', cursor: 'pointer' }}>S</div>
                <div className='flex justify-center items-center mx-1 bg-white text-xs' style={{ border: '1px solid #ccc', padding: '4px', width: '32px', height: '30px', cursor: 'pointer' }}>M</div>
                <div className='flex justify-center items-center mx-1 bg-white text-xs' style={{ border: '1px solid #ccc', padding: '4px', width: '32px', height: '30px', cursor: 'pointer' }}>L</div>
                <div className='flex justify-center items-center mx-1 bg-white text-xs' style={{ border: '1px solid #ccc', padding: '4px', width: '32px', height: '30px', cursor: 'pointer' }}>XL</div>
                <div className='flex justify-center items-center ml-1 bg-white text-xs' style={{ border: '1px solid #ccc', padding: '4px', width: '32px', height: '30px', cursor: 'pointer' }}>XXL</div>
              
                </div>
                </div>

            
              <div className="flex flex-col md:flex-row mb-4">
                <div className="flex items-center bg-black mx-1 my-1">
                  <div className="" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className='flex bg-white items-center justify-center m-2' style={{ height: '80%', width: '100%' }}>
                      <RemoveIcon className='' style={{ cursor: 'pointer', width: '30px', borderRight: '1px solid #ccc' }} />
                      <span className='flex justify-center items-center text-center' style={{ width: '30px' }}>#</span>
                      <AddIcon className='' style={{ cursor: 'pointer', width: '30px', borderLeft: '1px solid #ccc' }} />
                    </div>
                  </div>
            
                  <div className='flex flex-col md:flex-row bg-black '>
                    {/* <button className='p-4 font-bold text-white  text-xs'>ADD TO CART</button> */}
                    <div className="flex ml-2 w-20 text-white items-center cursor-pointer">
              <ShoppingBagOutlinedIcon className="p-1 w-4 h-4 mx-2" /><span className='text-xs'>add</span>
            </div>
                  </div>
                </div>
              </div>
            </div>
            
      )}
            {/* <div className="ml-2">
              <RemoveRedEyeOutlinedIcon className="w-4 h-4 p-1" />
            </div> */}
            <div className="flex ml-4 bg-gray-300 rounded-lg w-20 text-black items-center cursor-pointer mr-2">
              <ShoppingBagOutlinedIcon className="p-1 w-4 h-4 mx-2 flex" /><span className='text-xs' style={{ paddingTop: '2px' }}>add</span>
            </div>
          </div>

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

export default RelatedProducts;
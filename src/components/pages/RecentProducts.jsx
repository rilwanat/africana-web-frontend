import React, {useState, Fragment} from 'react';
import Slider from "react-slick";
// import ReactTooltip from 'react-tooltip';

import './products.css';

import imgx from '../../assets/images/shop/img-2.jpg';
// import imgx from '../../assets/images/site-products/3.jpg';
import {Link, useNavigate} from "react-router-dom";


import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



import CryptoJS from 'crypto-js';
import { AES } from 'crypto-js';


import axios from 'axios';

/**
 * Recent Products component
 * @param onQuickViewClick
 * @returns {*}
 * @constructor
 */
function RecentProducts({onQuickViewClick, products}) {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    // const [isDragging, setIsDragging] = useState(false);

    const [isPrevHovered, setPrevHovered] = useState(false);
    const [isNextHovered, setNextHovered] = useState(false);

    const [isViewHovered, setViewHovered] = useState(false);
    const [isFavHovered, setFavHovered] = useState(false);
    const [isBagHovered, setBagHovered] = useState(false);

    
    function SampleNextArrow(props) {
  const { className, style, onClick } = props;














  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: isNextHovered ? 'black' : '',
        zIndex: 1,
      }}
      onClick={onClick}
      onMouseEnter={() => setNextHovered(true)}
      onMouseLeave={() => setNextHovered(false)}
    >
      <ChevronRightIcon style={{ color: isNextHovered ? 'white' : '', }}/>
    </div>
  );
}

function SamplePrevArrow(props) {



    




  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: isPrevHovered ? 'black' : '',
        zIndex: 1,
      }}
      onClick={onClick}
      onMouseEnter={() => setPrevHovered(true)}
      onMouseLeave={() => setPrevHovered(false)}
    >
      <ChevronLeftIcon style={{ color: isPrevHovered ? 'white' : '', }}/>
    </div>
  );
}


    /**
     * slider settings
     */
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
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
  
    return lowestPrice;
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

    

    // if (!isDragging) 
    {
        //plain
        //const productString = JSON.stringify(product);
        //navigate(`/product-details/${encodeURIComponent(productString)}`);

        // Encrypt the product data
        // Navigate to the route with the encrypted parameter
        const encryptedData = AES.encrypt(JSON.stringify(product), 'encryptionKey').toString();
        navigate(`/product-details/${encodeURIComponent(encryptedData)}`);
        //
    }
    

  };


  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
//   const increaseItemToCart = (item) => {

//     // alert(item);
//     alert(JSON.stringify(item, null, 2));

//     // Check if the product is already in the cart
//     const existingProduct = cart.find((cartItem) => cartItem.id === item.id);
  
//     if (existingProduct) {
//       // If the product is already in the cart, update its quantity
//       const updatedCart = cart.map((cartItem) =>
//         cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
//       );
//       setCart(updatedCart);
//     } else {
//       // If the product is not in the cart, add it
//       setCart([...cart, { ...item, quantity: 1 }]);
//     }
//     //alert("Ok");
//   };


const addToCart = async (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    
    if (existingProduct) {
      // If the product is already in the cart, update its quantity
      const updatedCart = cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update local storage
  } else {
      // If the product is not in the cart, add it
      const leastPriceProductVariant = product.productVariants.reduce((prev, current) => {
          return (prev.price < current.price) ? prev : current;
      });
      const productToAdd = {
          id: product.id,
          name: product.name,
          productVariant: leastPriceProductVariant,
          quantity: 1
      };
      const updatedCart = [...cart, productToAdd];
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update local storage
  }
  
    // Optionally, you can show a confirmation message or trigger additional actions
    //alert(`Item ${product?.name} added to cart!`);

    //alert(JSON.stringify(localStorage.getItem('cart'), null, 2));
  };



    return (
        <Fragment>
            {/* start recent-product-section */}
            <section className="trendy-product-section section-padding">

                <div className="container-1410">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="section-title-s2">
                                <h2>Recent products</h2>
                            </div>
                            <Link className="more-products" to="/shop">
                                More products
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="products-wrapper">
                                <ul className="products ">
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

                            

                                                            <img loading="lazy" 
                                                            src=
                                                            "http://shopafricana.co/wp-content/uploads/2024/01/Africana-Ready-To-Wear-KaftanJuly-2023_42-900x1125.jpg"
                                                            //{item.mainImg} 
                                                            alt=""/>
                                                        
                                                        {/* </Link> */}
                                                        </div>

                                                        <div className="shop-action-wrap">
                                                            <ul className="shop-action">
                                                                <li>
                                                                <div 
                                                                style={{ backgroundColor: isViewHovered ? 'black' : 'white', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer', margin: '0.2em' }}>
                                                                        <RemoveRedEyeOutlinedIcon 
                                                                        onClick={
                                                                            e => onQuickViewClick(e, item)
                                                                        }
                                                                        onMouseEnter={()=>{
                                                                            setViewHovered(true)
                                                                        }}
                                                                        onMouseLeave={()=>{
                                                                            setViewHovered(false)
                                                                        }}
                                                                        className='w-4 h-4 p-1' 
                                                                        style={{ color: isViewHovered ? 'white' : 'black',  }}
                                                                        />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div style={{ backgroundColor: isFavHovered ? 'black' : 'white', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer', margin: '0.2em' }}>
                                                                        <FavoriteIcon className='w-4 h-4 p-1' 
                                                                        onClick={
                                                                            ()=>{}
                                                                        }
                                                                        onMouseEnter={()=>{
                                                                            setFavHovered(true)
                                                                        }}
                                                                        onMouseLeave={()=>{
                                                                            setFavHovered(false)
                                                                        }}
                                                                        style={{ color: isFavHovered ? 'white' : 'black',  }}

                                                                        />
                                                                    </div>
                                                                    </li>
                                                                <li>
                                                                        <div style={{ backgroundColor: isBagHovered ? 'black' : 'white', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer', margin: '0.2em' }}>
                                                                        <ShoppingBagOutlinedIcon className='w-4 h-4 p-1' 
                                                                        
                                                                        onClick={
                                                                            // ()=>{ addToCart()}
                                                                            //(e) => addToCart(e, item, 1)
                                                                            () => addToCart(item)
                                                                            // addToCart = async (e, productVariantId, quantity)
                                                                            // () => {alert(item.productVariantId);}
                                                                        }
                                                                        onMouseEnter={()=>{
                                                                            setBagHovered(true)
                                                                        }}
                                                                        onMouseLeave={()=>{
                                                                            setBagHovered(false)
                                                                        }}
                                                                        style={{ color: isBagHovered ? 'white' : 'black',  }}
                                                                        />
                                                                    </div>
                                                                        </li>
                                                            </ul>
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
                                                                    {/* <span className="woocommerce-Price-currencySymbol">{item.Symbol}</span> */}
                                                                    <span className="woocommerce-Price-currencySymbol">{'N'}</span>
                                                                    {findLowestPrice(item)}
                                                                    </bdi>
                                                                </span>
                                                              </ins>
                                                            {
                                                            // parseInt(item.price) < parseInt(item.oldPrice) 
                                                            findLowestPrice(item) < findHighestPrice(item) 
                                                            ?
                                                                <del>
                                                                    <span className="woocommerce-Price-amount amount">
                                                                      <bdi><span
                                                                          className="woocommerce-Price-currencySymbol">{'N'}</span>{findHighestPrice(item)}</bdi>
                                                                    </span>
                                                                </del> : ''
                                                            }
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
                {/* end container-1410 */}
            </section>
            {/* end recent-product-section */}
            {/* <ReactTooltip className='tool-tip' effect='solid'/> */}
        </Fragment>
    );
}

export default RecentProducts;
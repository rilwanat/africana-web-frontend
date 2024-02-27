import React, {useState, Fragment} from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Link, useNavigate} from "react-router-dom";

import StarRateIcon from '@mui/icons-material/StarRate';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import CloseIcon from '@mui/icons-material/Close';


import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


import FlashOnIcon from '@mui/icons-material/FlashOn';


import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


/**
 * product Quick View component
 * @param data
 * @param onQuickViewCloseClick
 * @returns {*}
 * @constructor
 */
function QuickView({data, onQuickViewCloseClick, addToCart}) {


    const navigate = useNavigate();

    const [productCount, setProductCount] = useState(1);


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



const handleIncreaseQuantity = (item) => {
    setProductCount(productCount + 1);
};

const handleDecreaseQuantity = (item) => {
    if (productCount > 1) {
        setProductCount(productCount - 1);
    }
    
};



    return (
        <Fragment>
            <div className="quick-view-single-product activve-quick-view-single-product">
                <div className="view-single-product-inner clearfix">
                    <button className="btn quick-view-single-product-close-btn mt-8" onClick={onQuickViewCloseClick}><CloseIcon className="pe-7s-close-circle"/></button>
                    
                    <div className="img-holder">
                        <img loading="lazy" src=
                        // {process.env.PUBLIC_URL + data.mainImg} 
                        "http://shopafricana.co/wp-content/uploads/2024/01/March-23-Document-Name12-scaled-1-900x1125.jpg"
                        alt=""/>
                    </div>
                    <div className="product-details">
                        <h4 style={{ fontSize: '24px' }}>{data.name}</h4>
                        <div className="price" style={{ fontSize: '20px' }}>
                            <span className="current">{'₦'}{findLowestPrice(data).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            {
                            // parseInt(data.price) < parseInt(data.oldPrice)
                            findLowestPrice(data) < findHighestPrice(data)
                            ?
                                <span className="old">
                                    {'₦'}{findHighestPrice(data).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </span> : ''
                            }
                        </div>
                        <div className="rating">
                            {/* <i className="fi flaticon-star"/>
                            <i className="fi flaticon-star"/>
                            <i className="fi flaticon-star"/>
                            <i className="fi flaticon-star"/>
                            <i className="fi flaticon-star-social-favorite-middle-full"/> */}
                             <a className="star-1" 
                                // onClick={() => handleStarClick(1)} 
                                // style={{ cursor: 'pointer' }}
                                >
                                {/* <i className="ti-star" style={{ color: star < 1 ? 'grey' : 'black' }}/> */}
                                <StarRateIcon className='-mt-2' style={{width: '16px', height: '16px', color: 'black' }}/>
                            </a>
                            <a className="star-1" 
                            // onClick={() => handleStarClick(2)} 
                            // style={{ cursor: 'pointer' }}
                            >
                                {/* <i className="ti-star" style={{ color: star < 2 ? 'grey' : 'black' }}/> */}
                                <StarRateIcon className='-mt-2' style={{width: '16px', height: '16px',  color: 'black' }}/>
                            </a>
                            <a className="star-1" 
                            // onClick={() => handleStarClick(3)} 
                            // style={{ cursor: 'pointer' }}
                            >
                                {/* <i className="ti-star" style={{ color: star < 3 ? 'grey' : 'black' }}/> */}
                                <StarRateIcon className='-mt-2' style={{width: '16px', height: '16px',  color: 'black' }}/>
                            </a>
                            <a className="star-1" 
                            // onClick={() => handleStarClick(4)} 
                            // style={{ cursor: 'pointer' }}
                            >
                                {/* <i className="ti-star" style={{ color: star < 4 ? 'grey' : 'black' }}/> */}
                                <StarRateIcon className='-mt-2' style={{width: '16px', height: '16px',  color: 'black' }}/>
                            </a>
                            <a className="star-1" 
                            // onClick={() => handleStarClick(5)} 
                            // style={{ cursor: 'pointer' }}
                            >
                                {/* <i className="ti-star" style={{ color: star < 5 ? 'grey' : 'black' }}/> */}
                                <StarRateIcon className='-mt-2' style={{width: '16px', height: '16px',  color: 'black' }}/>
                            </a>
                            <span className='ml-2'>({data.reviewCounts} Customer review{data.reviewCounts > 1 ? 's ' : ' '})</span>
                        </div>
                        <p>{data.content}</p>
                        <div className="product-option">


                        <span className="tagged_as" style={{ display: 'flex', alignItems: 'center', color: '#777777', height: '30px',  }}>
                                    <div>SIZE: </div>
        <div className='text-center ml-2 mx-1' style={{ border: '1px solid #ccc', padding: '5px', width: '40px', cursor: 'pointer' }}>S</div>
        <div className='text-center mx-1' style={{ border: '1px solid #ccc', padding: '5px', width: '40px', cursor: 'pointer' }}>M</div>
        <div className='text-center mx-1' style={{ border: '1px solid #ccc', padding: '5px', width: '40px', cursor: 'pointer' }}>L</div>
        <div className='text-center mx-1' style={{ border: '1px solid #ccc', padding: '5px', width: '40px', cursor: 'pointer' }}>XL</div>
        <div className='text-center mx-1' style={{ border: '1px solid #ccc', padding: '5px', width: '40px', cursor: 'pointer' }}>XXL</div>
                                    {/* {
                                        data.tags.map((item, index) =>
                                            <a key={index}
                                               href={item.link}>{' ' + item.name}{data.tags.length - 1 === index ? '' : ', '}</a>
                                        )
                                    } */}
                                </span>


                        <div className="product-option flex flex-col md:flex-row">
                        {/* <form className="form"> */}
                                <div className="product-row flex items-center justify-center bg-black my-2 mx-1">

                                <div className="touchspin-wrap items-center  justify-center " >
                                
                                                
                                                <div className='flex bg-white items-center justify-center m-2' style={{ height: '80%', width: '100%' }}>
                <RemoveIcon className='' style={{ cursor: 'pointer', width: '30px', borderRight: '1px solid #ccc' }} onClick={() => { handleDecreaseQuantity(data) }} />
                <span className='text-center' style={{ width: '30px' }}>{productCount}</span>
                <AddIcon className='' style={{ cursor: 'pointer', width: '30px', borderLeft: '1px solid #ccc' }} onClick={() => { handleIncreaseQuantity(data) }} />
            </div>

                                            </div>


                                            {/* <div className='bg-black  ml-4 my-2 flex items-center'> */}
                                                
                                        <button className='py-2 px-4 font-bold text-white text-xs ml-8'
                                        style={{ marginTop: '2px' }} 
                                        onClick={                                            
                                            () => addToCart(data, productCount)                
                                        }                                        
                                        >ADD TO CART</button>
                                    {/* </div> */}
                                </div>
                                <div  className='flex bg-black mx-1 my-2 justify-center'>
                                        <button className='py-2  px-4 font-bold text-white text-xs' 
                                        // onClick={handleBuyNow}                                        
                                        >
                                            <FlashOnIcon /> BUY NOW</button>
                                    </div>
                            {/* </form> */}
                            </div>
                        </div>
                        <div className="thb-product-meta-before">
                            {/* <div className="add-to-wishlist">
                                <a  className="add_to_wishlist">
                                    <FavoriteIcon className='mr-2' style={{ cursor: "pointer" }}/>
                                    <span>Add To Wishlist</span>
                                </a>
                            </div> */}
                            <div className="product_meta">
                                {/* <span className="sku_wrapper">SKU:<span className="sku">{' ' + data.SKU}</span></span> */}
                                {/* <span className="posted_in">
                                    Categories:
                                    
                                </span> */}
                                <span className="tagged_as">
                                    Tags:
                                    {/* {
                                        data.Tags.map((item, index) =>
                                            <a key={index}
                                               href={item.link}>{' ' + item.name}{data.Tags.length - 1 === index ? '' : ', '}</a>
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
            </div>
        </Fragment>
    );
}

export default QuickView;
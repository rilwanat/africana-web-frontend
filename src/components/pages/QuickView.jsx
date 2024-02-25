import React, {useState, Fragment} from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Link, useNavigate} from "react-router-dom";

import StarRateIcon from '@mui/icons-material/StarRate';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import CloseIcon from '@mui/icons-material/Close';


/**
 * product Quick View component
 * @param data
 * @param onQuickViewCloseClick
 * @returns {*}
 * @constructor
 */
function QuickView({data, onQuickViewCloseClick}) {

    const navigate = useNavigate();

    const [productCount, setProductCount] = useState(1);

    const HandleProductCount = (e, data) => {
        e.preventDefault();
        if (data == 'plus') {
            setProductCount(productCount + 1);
        } else {
            if (productCount > 1) {
                setProductCount(productCount - 1);
            } else {
                setProductCount(1);
            }
        }
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

//   const handleProductClick = (product, e) => {

//     // if (!isDragging) 
//     {
//         //const productString = JSON.stringify(product);
//         // navigate(`/product-details/${encodeURIComponent(productString)}`);
//         //navigate('/product-details', { state: { encryptedData } });
//     }
    

//   };




    return (
        <Fragment>
            <div className="quick-view-single-product activve-quick-view-single-product">
                <div className="view-single-product-inner clearfix">
                    <button className="btn quick-view-single-product-close-btn" onClick={onQuickViewCloseClick}><CloseIcon className="pe-7s-close-circle"/></button>
                    
                    <div className="img-holder">
                        <img loading="lazy" src=
                        // {process.env.PUBLIC_URL + data.mainImg} 
                        "http://shopafricana.co/wp-content/uploads/2024/01/March-23-Document-Name12-scaled-1-900x1125.jpg"
                        alt=""/>
                    </div>
                    <div className="product-details">
                        <h4>{data.name}</h4>
                        <div className="price">
                            <span className="current">{'N'}{findLowestPrice(data)}</span>
                            {
                            // parseInt(data.price) < parseInt(data.oldPrice)
                            findLowestPrice(data) < findHighestPrice(data)
                            ?
                                <span className="old">
                                    {'N'}{findHighestPrice(data)}
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
                                <StarRateIcon className='-mt-2' style={{width: '20px', height: '20px', color: 'black' }}/>
                            </a>
                            <a className="star-1" 
                            // onClick={() => handleStarClick(2)} 
                            // style={{ cursor: 'pointer' }}
                            >
                                {/* <i className="ti-star" style={{ color: star < 2 ? 'grey' : 'black' }}/> */}
                                <StarRateIcon className='-mt-2' style={{width: '20px', height: '20px',  color: 'black' }}/>
                            </a>
                            <a className="star-1" 
                            // onClick={() => handleStarClick(3)} 
                            // style={{ cursor: 'pointer' }}
                            >
                                {/* <i className="ti-star" style={{ color: star < 3 ? 'grey' : 'black' }}/> */}
                                <StarRateIcon className='-mt-2' style={{width: '20px', height: '20px',  color: 'black' }}/>
                            </a>
                            <a className="star-1" 
                            // onClick={() => handleStarClick(4)} 
                            // style={{ cursor: 'pointer' }}
                            >
                                {/* <i className="ti-star" style={{ color: star < 4 ? 'grey' : 'black' }}/> */}
                                <StarRateIcon className='-mt-2' style={{width: '20px', height: '20px',  color: 'black' }}/>
                            </a>
                            <a className="star-1" 
                            // onClick={() => handleStarClick(5)} 
                            // style={{ cursor: 'pointer' }}
                            >
                                {/* <i className="ti-star" style={{ color: star < 5 ? 'grey' : 'black' }}/> */}
                                <StarRateIcon className='-mt-2' style={{width: '20px', height: '20px',  color: 'black' }}/>
                            </a>
                            <span className='ml-2'>({data.reviewCounts} Customer review{data.reviewCounts > 1 ? 's ' : ' '})</span>
                        </div>
                        <p>{data.content}</p>
                        <div className="product-option">
                        <form className="form">
                                <div className="product-row flex items-center">

                                <div className="touchspin-wrap">
                                <input readOnly className="product-count" type="text" style={{ display: 'inline-block', verticalAlign: 'middle' }}
                                                       value={productCount} name="product-count"/>
                                                       <button
                                                    onClick={(e) => {
                                                        HandleProductCount(e, 'plus')
                                                    }} id="slider-thumbnail-touchspin-up" className="btn btn-default "
                                                    type="button">
                                                        <ExpandLessIcon className="glyphicon glyphicon-chevron-up" style={{ height: '11px', width: '20px' }}/>
                                                        {/* <i className="glyphicon glyphicon-chevron-up"></i> */}
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        HandleProductCount(e, 'minus')
                                                    }}
                                                    id="slider-thumbnail-touchspin-down" className="btn btn-default "
                                                    type="button">
                                                        <ExpandMoreIcon className="glyphicon glyphicon-chevron-down" style={{ height: '11px', width: '20px' }}/>
                                                        {/* <i className="glyphicon glyphicon-chevron-down"></i> */}
                                                </button>
                                                
                                            </div>


                                    
                                    {/* <div className='flex flex-grow'> */}
                                        <button className='px-4 ml-2' 
                                        style={{ height: '50px' }}
                                        // type="submit" 
                                        // onClick={onQuickViewCloseClick}
                                        >Add to cart</button>
                                    {/* </div> */}
                                </div>
                            </form>
                        </div>
                        <div className="thb-product-meta-before">
                            <div className="add-to-wishlist">
                                <a  className="add_to_wishlist">
                                    {/* <i className="pe-7s-like"/> */}
                                    <FavoriteIcon className='mr-2' style={{ cursor: "pointer" }}/>
                                    <span>Add To Wishlist</span>
                                </a>
                            </div>
                            <div className="product_meta">
                                <span className="sku_wrapper">SKU:<span className="sku">{' ' + data.SKU}</span></span>
                                <span className="posted_in">
                                    Categories:
                                    {/* {
                                        data.Categories.map((item, index) =>
                                            <a key={index}
                                               href={item.link}>{' ' + item.name}{data.Categories.length - 1 === index ? '' : ', '}</a>
                                        )
                                    } */}
                                </span>
                                <span className="tagged_as">
                                    Tags:
                                    {/* {
                                        data.Tags.map((item, index) =>
                                            <a key={index}
                                               href={item.link}>{' ' + item.name}{data.Tags.length - 1 === index ? '' : ', '}</a>
                                        )
                                    } */}
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
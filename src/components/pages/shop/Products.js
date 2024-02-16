import React, {Fragment, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';


/**
 * Products
 * @param HandelQuickViewData
 * @param products
 * @param ordering
 * @returns {*}
 * @constructor
 */
function Products({HandelQuickViewData, products, ordering}) {

    const navigate = useNavigate();

    const [isViewHovered, setViewHovered] = useState(false);
    const [isFavHovered, setFavHovered] = useState(false);
    const [isBagHovered, setBagHovered] = useState(false);
    


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
        const productString = JSON.stringify(product);
        navigate(`/product-details/${encodeURIComponent(productString)}`);
    }
    

  };

    return (
        <Fragment>
            <ul className={"products " + (ordering == 1 ? 'default-column' : ordering == 2 ? 'three-column' : ordering == 3 ? 'list-view' : '')}>
                {
                    // products.map((item, index) => (
                    //     <li key={index} className="product">
                    //         <div className="product-holder">
                    //             {parseInt(item.price) < parseInt(item.oldPrice) ?
                    //                 <div className="product-badge discount">
                    //                     {
                    //                         Math.round(((parseInt(item.price) - parseInt(item.oldPrice)) / parseInt(item.price)) * 100)
                    //                     }
                    //                     %</div> : ''
                    //             }
                    //             <Link to="/product-details">
                    //                 <img loading="lazy" src={process.env.PUBLIC_URL + item.mainImg} alt=""/>
                    //             </Link>
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
                            ) : null}
                            <div 
                            onClick={(e) => handleProductClick(item, e)} >
                             {/* <Link to="/product-details"> */}
                              <img loading="lazy" 
                              src=
                              "https://shopafricana.co/wp-content/uploads/2024/01/Africana-Ready-To-Wear-KaftanJuly-2023_42-900x1125.jpg"
                            //   {process.env.PUBLIC_URL + item.mainImg}
                               alt=""/>
                            {/* </Link> */}
                            </div>
                                <div className="shop-action-wrap">
                                    <ul className="shop-action">
                                        <li>
                                                                    {/* <a href="#" title="Quick view!"
                                                                       data-tip="Quick view!"
                                                                       onClick={
                                                                           e => onQuickViewClick(e, item)
                                                                       }
                                                                >
                                                                    
                                                                    <i className="fi flaticon-view"/>
                                                                </a> */}
                                                                <div style={{ backgroundColor: isViewHovered ? 'black' : 'white', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer', margin: '0.2em' }}>
                                                                        <RemoveRedEyeOutlinedIcon 
                                                                        onClick={
                                                                            // e => onQuickViewClick(e, item)
                                                                            e => HandelQuickViewData(e, item)
                                                                        }
                                                                        onMouseEnter={()=>{
                                                                            setViewHovered(true)
                                                                        }}
                                                                        onMouseLeave={()=>{
                                                                            setViewHovered(false)
                                                                        }}
                                                                        style={{ color: isViewHovered ? 'white' : 'black',  }}
                                                                        className='w-4 h-4 p-1' />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    {/* <a href="#" title="Add to Wishlist!"
                                                                       data-tip="Add to Wishlist!">
                                                                        <i className="fi icon-heart-shape-outline"/>
                                                                    </a> */}
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
                                                                    {/* <a href="#" title="Add to cart!"
                                                                       data-tip="Add to cart!">
                                                                        <i className="fi flaticon-shopping-cart"/></a> */}
                                                                        <div style={{ backgroundColor: isBagHovered ? 'black' : 'white', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer', margin: '0.2em' }}>
                                                                        <ShoppingBagOutlinedIcon className='w-4 h-4 p-1' 
                                                                        onClick={
                                                                            ()=>{}
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
                                    {/* <p>
                                    {findLowestPrice(item) + " " + findHighestPrice(item) }
                                    </p> */}
                                    {
                                    // parseInt(item.price) < parseInt(item.oldPrice)
                                    findLowestPrice(item) < findHighestPrice(item) 
                                    ?
                                        <del>
                                            <span className="woocommerce-Price-amount amount">
                                            <bdi><span
                                                className="woocommerce-Price-currencySymbol">{item.Symbol}</span>{item.oldPrice}</bdi>
                                            </span>
                                        </del> : ''
                                    }
                                </span>
                                <p className="product-description">{item.description}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </Fragment>
    );
}

export default Products;
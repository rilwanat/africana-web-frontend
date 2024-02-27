import React, {Fragment, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import CryptoJS from 'crypto-js';
import { AES } from 'crypto-js';


/**
 * Products
 * @param HandelQuickViewData
 * @param products
 * @param ordering
 * @returns {*}
 * @constructor
 */
function Products({HandelQuickViewData, products, ordering, addToCart, cart}) {

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
//alert( JSON.stringify(product));
    // if (!isDragging) 
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
                        <li key={index} className="product" style={{ cursor: 'pointer' }}>
                          <div className="product-holder">
                            {
                            // parseInt(item.price) < parseInt(item.oldPrice)
                            findLowestPrice(item) < findHighestPrice(item)
                            
                            ? (
                              <div className="product-badge discount -m-2">
                                -{calculateDiscountPercentage(findLowestPrice(item), findHighestPrice(item))}%
                              </div>
                            ) : null}
                            <div 
                            onClick={(e) => handleProductClick(item, e)} >
                             {/* <Link to="/product-details"> */}
                              <img loading="lazy" 
                              src=
                              "http://shopafricana.co/wp-content/uploads/2024/01/March-23-Document-Name12-scaled-1-900x1125.jpg"
                            //   {process.env.PUBLIC_URL + item.mainImg}
                               alt=""/>
                            {/* </Link> */}
                            </div>
                                {/* <div className="shop-action-wrap">
                                    <ul className="shop-action">
                                        <li>
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
                                                                            () => addToCart(item)
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
                                </div> */}
                            </div>
                            <div className="product-info">
                            <h4 className='text-left pl-2 flex items-center mt-1' style={{ cursor: 'pointer' }}>
                                                            <div onClick={(e) => handleProductClick(item, e)} className='text-sm text-black'>
                                                                {item.name}
                                                            </div>
                                                        </h4>
                                                        <h4 className='text-left pl-2 flex items-center mt-1' style={{ cursor: 'pointer' }}>
                                                            <div onClick={(e) => handleProductClick(item, e)} className='text-sm  text-black'>
                                                            {'₦'}{findLowestPrice(item)}
                                                            </div>
                                                        </h4>



                                <div className='text-left pl-2 flex items-center mt-1' >
                                            <h4 className='h-4 py-1' style={{ cursor: 'pointer' }} >SELECT OPTIONS</h4>
                                            {/* <div style={{ position: 'relative' }}>
        <h4 className='h-4 py-1' onMouseEnter={() => setShowWidget(true)} onMouseLeave={() => setShowWidget(false)}>SELECT OPTIONS</h4>
        {showWidget && (
            <div style={{ position: 'absolute', top: 'calc(-100% - 10px)', left: '0', background: 'white', padding: '5px', border: '1px solid black' }}>
            Widget Content
        </div>
        )}
    </div> */}
                                            <div><RemoveRedEyeOutlinedIcon 
                                                                        onClick={
                                                                            e => HandelQuickViewData(e, item)
                                                                        }
                                                                        onMouseEnter={()=>{
                                                                            setViewHovered(true)
                                                                        }}
                                                                        onMouseLeave={()=>{
                                                                            setViewHovered(false)
                                                                        }}
                                                                        className='w-4 h-4 p-1 ml-2' 
                                                                        style={{ color: isViewHovered ? 'white' : 'black', cursor: 'pointer' }}
                                                                        /></div>
                                            <div><ShoppingBagOutlinedIcon className='w-4 h-4 p-1  ml-2' 
                                                                        
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
                                                                        style={{ color: isBagHovered ? 'white' : 'black', cursor: 'pointer' }}
                                                                        /></div>
                                        </div>

                                {/* <p className="product-description">{item.description}</p> */}
                            </div>
                        </li>
                    ))
                }
            </ul>
        </Fragment>
    );
}

export default Products;
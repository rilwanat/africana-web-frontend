import React, {Fragment, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagOutlinedIcon from '@mui/icons-material/LocalMallSharp';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';

import CryptoJS from 'crypto-js';
import { AES } from 'crypto-js';




function Products({HandelQuickViewData, products, ordering, addToCart, cart}) {

    const navigate = useNavigate();

    const [isViewHovered, setViewHovered] = useState(false); const [isViewHoveredId, setViewHoveredId] = useState(null);
    const [isFavHovered, setFavHovered] = useState(false);
    const [isBagHovered, setBagHovered] = useState(false); const [isBagHoveredId, setBagHoveredId] = useState(null);
    

    const [zoomedItemId, setZoomedItemId] = useState(null);
    const [productCount, setProductCount] = useState(1);
    const [selectedSize, setSelectedSize] = useState('');
    const handleSizeSelection = (size) => {
      setSelectedSize(size);
    };


    const [openItemIndexMyCollection, setOpenItemIndexMyCollection] = useState(null);
  const toggleOptionsMyCollection = (index) => {
    setProductCount(1);
    setSelectedSize('');
    setOpenItemIndexMyCollection(openItemIndexMyCollection === index ? null : index);
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
  }, 1000);
}


    return (
        <Fragment>
            <ul className={"products " + (ordering == 1 ? 'default-column' : ordering == 2 ? 'three-column' : ordering == 3 ? 'list-view' : '')}>
                {
                    products.map((item, index) => (
                        <li key={index} className="product" style={{ cursor: 'pointer' }}>
                          <div className="product-holder">
                            {
                            findLowestPrice(item) < findHighestPrice(item)
                            
                            ? (
                              <div className="product-badge discount -m-2">
                                -{calculateDiscountPercentage(findLowestPrice(item), findHighestPrice(item))}%
                              </div>
                            ) : null}
                            <div 
                            onClick={(e) => handleProductClick(item, e)} >
                              <img loading="lazy" 
                              src=
                              "http://shopafricana.co/wp-content/uploads/2024/02/BRS_8461-1-copyBereal.png"
                               alt=""
                               
                              //  onMouseEnter={() => setZoomedItemId(item.id)}
                              //  onMouseLeave={() => setZoomedItemId(null)}
                               style={{
                                transform: zoomedItemId === item.id ? 'scale(1.1)' : 'scale(1)',
                                transition: 'transform 0.3s ease',
                            }}

                               />
                            </div>
                                
                            </div>
                            <div className="">
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




                                        <div className="text-left flex items-center mt-1 mb-8 pl-2">
            <h4 className="h-4 text-xs cursor-pointer" onClick={() => {toggleOptionsMyCollection(index)}}>SELECT OPTIONS</h4>
            {openItemIndexMyCollection === index && (
              <div className="absolute bg-gray-100 p-2 rounded-lg border border-gray-300 mt-2" style={{ marginTop: '-100px' }}>
              <div className='flex justify-between items-start  mb-4 mt-1'>
                {/* <div className='text-xs font-bold'>SIZE</div> */}
                <CloseIcon style={{ color: '#777777' }} className='cursor-pointer p-1' onClick={() => {toggleOptionsMyCollection(index)}}/>
                {/* <CloseIcon style={{ color: '#777777' }} className='cursor-pointer p-1' onClick={() => {toggleOptions(index);}}/> */}
              </div>
            
              <div className="mx-1 mb-2 flex items-center justify-between" style={{ color: '#777777', height: '30px' }}>
                {/* <div className='text-xs font-bold'>SIZE:</div> */}
                <div className='flex'>
                <div onClick={() => handleSizeSelection('S')} className={`flex justify-center items-center mr-1 ${selectedSize === 'S' ? 'bg-black text-white' : 'bg-white'}  text-xs`} style={{ border: '1px solid #ccc', padding: '4px', width: '32px', height: '30px', cursor: 'pointer' }}>S</div>
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
                      onClick={() => { handleDecreaseQuantity(item) }}/>
                      <span className='flex justify-center items-center text-center' style={{ width: '30px' }}>{productCount}</span>
                      <AddIcon className='' style={{ cursor: 'pointer', width: '30px', borderLeft: '1px solid #ccc' }} 
                      onClick={() => { handleIncreaseQuantity(item) }}
                      />
                    </div>
                  </div>
            
                  <div className='flex flex-col md:flex-row bg-black '>
                    {/* <button className='p-4 font-bold text-white  text-xs'>ADD TO CART</button> */}
                    <div className="flex ml-2 w-20 text-white items-center cursor-pointer" 
                    onClick={() => {
                      showAddedDialogue(index);addToCart(item, productCount);
                    }
                    }
                    >
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
            <div className="flex ml-4 bg-gray-300 rounded-lg w-20 text-black items-center cursor-pointer mr-2" 
            onClick={() => {
              showAddedDialogue(index);addToCart(item, 1);
            }
            }
            >
              <ShoppingBagOutlinedIcon className="p-1 w-4 h-4 mx-2 flex" 
              />
              {showItemAdded && showIndexItemAdded === index && (
        <div className="absolute bg-gray-100 p-2 rounded-lg border border-gray-300 mt-2" style={{ marginTop: '-100px' }}>
          Item added
        </div>
      )}
      <span className='text-xs' style={{ paddingTop: '2px' }}>add</span>
            </div>
          </div>


                            </div>
                        </li>
                    ))
                }
            </ul>
        </Fragment>
    );
}

export default Products;
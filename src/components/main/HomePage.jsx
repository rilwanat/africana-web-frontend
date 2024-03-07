import React, { useState, useEffect, useRef  } from 'react';


import AfricanaHeader from './AfricanaHeader';
import Hero from './Hero';
import VideoPreview from './VideoPreview';
import ShopTheLook from './ShopTheLook';
import NewIn from './NewIn';
import BestSellers from './BestSellers';
import Kaftans from './Kaftans';
import ExploreMore from './ExploreMore';
import Locations from './Locations';
import AfricanaFooter from './AfricanaFooter';


export default function HomePage({ options, handleDataViewData, addToCart, cart, removeCartItem, removeAllCartItem  }) {

  

  return (
    <div>

      <AfricanaHeader options={options} cart={cart} removeCartItem={removeCartItem} removeAllCartItem={removeAllCartItem} />
      <Hero />
      {/* <VideoPreview /> <Hero /> */}       
      <ShopTheLook />
      {/* <VideoPreview /> */}
      <NewIn addToCart={addToCart} cart={cart} removeCartItem={removeCartItem}/>
      <BestSellers addToCart={addToCart} cart={cart} removeCartItem={removeCartItem}/>
      <Kaftans addToCart={addToCart} cart={cart} removeCartItem={removeCartItem}/>
      <ExploreMore />
      
      {/* <RecentProducts onQuickViewClick={handleDataViewData} products={products} addToCart={addToCart} cart={cart}/> */}
      {/* <CtaSection /> */}
      <Locations onQuickViewClick={handleDataViewData} />
      <AfricanaFooter/>
    
    </div>
  );
}

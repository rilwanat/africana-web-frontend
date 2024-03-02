import React, { useState, useEffect, useRef  } from 'react';


import AfricanaHeader from './AfricanaHeader';
import Hero from './Hero';
import ShopTheLook from './ShopTheLook';
import NewIn from './NewIn';
import BestSellers from './BestSellers';
import Kaftans from './Kaftans';
import ExploreMore from './ExploreMore';
import Locations from '../pages/Locations';
import AfricanaFooter from './AfricanaFooter';


export default function HomePage({ options, handleDataViewData, addToCart, cart, removeCartItem }) {



  return (
    <div>

      <AfricanaHeader options={options} cart={cart} removeCartItem={removeCartItem} />
      <Hero />
      <ShopTheLook />
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

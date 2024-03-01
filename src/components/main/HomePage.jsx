import React, { useState, useEffect, useRef  } from 'react';


import AfricanaHeader from './AfricanaHeader';
import Hero from './Hero';
import ShopTheLook from './ShopTheLook';
import NewIn from './NewIn';
import BestSellers from './BestSellers';
import Kaftans from './Kaftans';
import ExploreMore from './ExploreMore';
import Locations from '../pages/Locations';
import Footer from '../pages/Footer';


export default function HomePage({ options, handleDataViewData, addToCart, cart, removeCartItem }) {



  return (
    <div>

      <AfricanaHeader />
      <Hero />
      <ShopTheLook />
      <NewIn />
      <BestSellers />
      <Kaftans />
      <ExploreMore />
      
      {/* <RecentProducts onQuickViewClick={handleDataViewData} products={products} addToCart={addToCart} cart={cart}/> */}
      {/* <CtaSection /> */}
      <Locations onQuickViewClick={handleDataViewData} />
      <Footer/>
    
    </div>
  );
}

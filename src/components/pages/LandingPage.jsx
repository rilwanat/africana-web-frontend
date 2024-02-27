import React, { useState, useEffect } from 'react';
import {Fragment} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logos/Logo Wordmark.png';
import axios from 'axios';

//
import NewsletterPopup from './NewsletterPopup';

import Hero1 from './Hero/Hero1';
import Header from './header/Header';
import FeaturedProducts from './FeaturedProducts';
import RecentProducts from './RecentProducts';
import QuickView from './QuickView';
import CtaSection from './CtaSection';
import Locations from './Locations';
import Footer from './Footer';


export default function LandingPage({ options, handleDataViewData, addToCart, cart, removeCartItem }) {
  const [isVisible, setIsVisible] = useState(false);
  //const [transitionComplete, setTransitionComplete] = useState(false);
  let transitionComplete = localStorage.getItem('transitionCompleted');

  const [isMainVisible, setIsMainVisible] = useState(false);
  
  //const [startMainTransition, setStartMainTransition] = useState(false);

  const [products, setProductsData] = useState([]);
    const [isDataloading, setIsDataLoading] = useState(true);
  
  const fadeInMainTimeout = () => {
    setIsMainVisible(true);
  };

  // const checkTransitionCompletion = () => {
  //   const hasTransitionCompleted = localStorage.getItem('transitionCompleted');
  //   return hasTransitionCompleted;
  // };

  useEffect(() => {

    handleData();
    
    //setIsVisible(true);
    //localStorage.removeItem('transitionCompleted');
    // setIsMainVisible(false);
    

    //alert(checkTransitionCompletion());
    // if (checkTransitionCompletion() === 'true') {
    //   // If the transition has already completed, skip the animation
    //   setIsMainVisible(true);
    // } else 
    {
      // Phase 1: Fade in for the first animation
    const fadeInTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);
  
    // Phase 2: Fade out after the fade-in for the first animation
    const fadeOutTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  
    // Set transitionComplete to true after the entire transition of the first animation is completed
    const transitionCompleteTimeout = setTimeout(() => {
      //setTransitionComplete(true);
      // fadeInMainTimeout();
      localStorage.setItem('transitionCompleted', true);
      fadeInMainTimeout();
    }, 5000);
  

      
    // Cleanup the timeouts and remove the event listener when the component unmounts
    return () => {
      clearTimeout(fadeInTimeout);
      clearTimeout(fadeOutTimeout);
      clearTimeout(transitionCompleteTimeout);
  
    };
    }

    
  }, []);




  const handleData = async () => {    
    //alert("token: " + token + "\n\n" + "uid: " + uid);
    setIsDataLoading(true);
    try {

      // const response = await axios.get('http://localhost:3000/productssample.json');
      const response = await axios.get('http://144.149.167.72.host.secureserver.net:3000/api/v1/products', {
        //params: { uid: uid },
        headers: {
          "Content-Type": "application/json",
          //Authorization: `Bearer ${token}`,
        },
      });

      setIsDataLoading(false);
      //alert(JSON.stringify(response.data, null, 2));

      if (response.data.success) {
        //alert("dashboard-products " + JSON.stringify(response.data, null, 2));
      
        // Store the retrieved data in state variables

        setProductsData(response.data.products);
      } else {
        alert("error: " + response.data.message);
      }

    } catch (error) {
      setIsDataLoading(false);
      alert("error: " + error);
    }
  };

  
  
  


  return (
    <div>
      {
      transitionComplete ? 
      (
        
<Fragment>

           <div 
          //  style={{ opacity: startMainTransition ? 1 : 1 }}>
            // className={isMainVisible ? 'fade-in-main' : 'fade-out-main'}>
            className={`fade-in-main ${!isMainVisible ? 'fade-in' : 'fade-out'}`}
            style={{ backgroundColor: '#eeeeee' }}
            >

           <Header options={options} cart={cart} removeCartItem={removeCartItem}/>

           <Hero1 />


<FeaturedProducts />
<RecentProducts onQuickViewClick={handleDataViewData} products={products} addToCart={addToCart} cart={cart}/>
<CtaSection />
<Locations onQuickViewClick={handleDataViewData} products={products}/>
<Footer/>
<NewsletterPopup/>
            </div> 



            </Fragment>
        
          
      ) 
      : (
        <div className='flex flex-col items-center justify-center h-screen'>
          <img
            className={`w-72 h-32 object-scale-down ${isVisible ? 'fade-in' : 'fade-out'}`}
            src={logo}
            alt=""
          />
        </div>
      )
      }
    </div>
  );
}

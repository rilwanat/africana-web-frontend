import React, { useState, useEffect } from 'react';
import {Fragment} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logos/Logo Wordmark.png';


//
import NewsletterPopup from './NewsletterPopup';

import Header from './header/Header';
import FeaturedProducts from './FeaturedProducts';
import RecentProducts from './RecentProducts';
import QuickView from './QuickView';
import CtaSection from './CtaSection';
import Footer from './Footer';


export default function LandingPage({ options, handleDataViewData }) {
  const [isVisible, setIsVisible] = useState(false);
  const [transitionComplete, setTransitionComplete] = useState(false);

  
  useEffect(() => {
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
      setTransitionComplete(true);
      //setMainTransitionComplete(false);
    }, 5000);
  
  
    // Cleanup the timeouts and remove the event listener when the component unmounts
    return () => {
      clearTimeout(fadeInTimeout);
      clearTimeout(fadeOutTimeout);
      clearTimeout(transitionCompleteTimeout);
  
    };
  }, []);






  return (
    <div>
      {
      transitionComplete ? 
      (
        <div >

<Fragment>
            {/* {showQuickView
                ? <QuickView
                    data={quickViewData}
                    onQuickViewCloseClick={HandelQuickViewClose}
                />
                : ''
            } */}

<Header options={options} />


<FeaturedProducts />
<RecentProducts onQuickViewClick={handleDataViewData}/>
<CtaSection />
<Footer/>
<NewsletterPopup/>


            </Fragment>
        
          

         </div>
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

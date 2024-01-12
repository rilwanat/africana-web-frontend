import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logos/Logo Wordmark.png';

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [transitionComplete, setTransitionComplete] = useState(false);

  useEffect(() => {

    // Phase 1: Fade in
    const fadeInTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Phase 2: Fade out after the fade-in
    const fadeOutTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    // Set transitionComplete to true after the entire transition is completed
    const transitionCompleteTimeout = setTimeout(() => {
      setTransitionComplete(true);
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
      {transitionComplete ? (
        <div className='flex flex-col items-center justify-center h-screen'> .. </div>
      ) : (
        <div className='flex flex-col items-center justify-center h-screen'>
          <img
            className={`w-72 h-32 object-scale-down ${isVisible ? 'fade-in' : 'fade-out'}`}
            src={logo}
            alt=""
          />
          {/* <Link to="/" style={{fontWeight: 'bold'}}>
            Africana Home
          </Link> */}
        </div>
      )}
    </div>
  );
}

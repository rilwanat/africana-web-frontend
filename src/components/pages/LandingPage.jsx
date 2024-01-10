import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logos/Logo Wordmark.png';

export default function LandingPage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      
      <img className="w-56 h-20 object-scale-down" src={logo} alt="" />
      {/* <Link to="/" style={{fontWeight: 'bold'}}>
        Africana Home
      </Link> */}
      

    </div>
  );
}

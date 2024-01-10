import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      
      <Link to="/" style={{fontWeight: 'bold'}}>
        Africana Home
      </Link>

    </div>
  );
}

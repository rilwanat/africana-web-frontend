import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';

import LandingPage from "./components/pages/LandingPage";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <div className="flex">
        <div className="content flex-grow">
          <Routes>
            <Route path="/*" element={<div>NOT FOUND</div>} />
            <Route path='/' element={<LandingPage />}/>    
            <Route path='/home' element={<HomePage />}/>    
            {/* <Route path='/login' element={<LoginPage />}/> */}
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
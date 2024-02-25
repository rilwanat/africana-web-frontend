import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import {Fragment} from 'react';

import LandingPage from "./components/pages/LandingPage";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/about/About";
import AccountPage from "./components/pages/MyAccount";
import CartPage from "./components/pages/cart/Cart";
import CheckoutPage from "./components/pages/checkout/Checkout";
import ShopLeftSidebarPage from "./components/pages/ShopLeftSidebarPage";
import ProductPage from "./components/pages/ProductPage";
import SizesPage from "./components/pages/SizesPage";

import SignUpPage from './components/pages/SignUpPage';
import SignInPage from './components/pages/SignInPage';
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage';


import QuickView from './components/pages/QuickView';

// import axios from 'axios';


// import ScrollToTop from "./ScrollToTop";

// import dotenv from 'dotenv';
// dotenv.config();

function App() {

  const [isDataloading, setIsDataLoading] = useState(true);

  
  const [showQuickView, setShowQuickView] = useState(false);
  const [quickViewData, setQuickViewData] = useState({});
  const HandelQuickViewData = (e, item) => {
    e.preventDefault();
    setShowQuickView(!showQuickView);
    setQuickViewData(item);
  };
const HandelQuickViewClose = (e) => {
  e.preventDefault();
  setShowQuickView(false);
  setQuickViewData({});
};


/**
     * mini cart state
     * left side info state
     * mobile nav state
     * loader state
     */
const [showMiniCart, setShowMiniCart] = useState(false);
const [showSideInfo, setShowSideInfo] = useState(false);
const [showMobileNav, setShowMobileNav] = useState(false);
const [showPreloader, setShowPreloader] = useState(true);

/**
 * change mini cart state
 * @constructor
 */
const HandelMiniCartStatus = () => {
    setShowMiniCart(!showMiniCart);
};

/**
 * change left side info state
 * @constructor
 */
const HandelSideInfoStatus = () => {
    setShowSideInfo(!showSideInfo);
};

/**
 * change mobile nav state
 * @constructor
 */
const HandelMobileNavStatus = () => {
    setShowMobileNav(!showMobileNav);
};

/**
 *  Effect Hook for remove loader after 400 milliseconds
 */
useEffect(() => {
  
// initAuth();

    setTimeout(() => {
        setShowPreloader(false);
    }, 400)
}, []);

/**
 * set default states
 * @constructor
 */
const HandelOverlayStatus = () => {
    setShowMiniCart(false);
    setShowSideInfo(false);
    setShowMobileNav(false);
};


/**
 * state and dandle function for change states
 * send this options to child component
 * @type {{
 *          onSideInfoClick: HandelSideInfoStatus,
 *          onMiniCartClick: HandelMiniCartStatus,
 *          mobileNav: boolean,
 *          sideInfo: boolean,
 *          onMobileNavClick: HandelMobileNavStatus,
 *          miniCart: boolean
 *       }}
 */
const options = {
  sideInfo: showSideInfo,
  mobileNav: showMobileNav,
  miniCart: showMiniCart,
  onSideInfoClick: HandelSideInfoStatus,
  onMobileNavClick: HandelMobileNavStatus,
  onMiniCartClick: HandelMiniCartStatus
};

// const product = '';
 const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

//   const addToCart = (product) => {
//     //alert("adding: " + JSON.stringify(product, null, 2));

//     const existingProduct = cart.find((item) => item.id === product.id);
    
//     if (existingProduct) {
//       const updatedCart = cart.map((item) =>
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       );
//       setCart(updatedCart);
//       localStorage.setItem('cart', JSON.stringify(updatedCart));
//     } else {
//       const updatedCart = [...cart, { ...product, quantity: 1 }];
//       setCart(updatedCart);
//       localStorage.setItem('cart', JSON.stringify(updatedCart));
//     }

//     //alert(JSON.stringify(localStorage.getItem('cart'), null, 2));
//     updateCart();
//   };

const addToCart = (product, count) => {
  //console.log("Product:", product);
  //console.log("Count:", count);

  const existingProduct = cart.find((item) => item.id === product.id);
  //console.log("Existing Product:", existingProduct);
  
  if (existingProduct) {
      const updatedCart = cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + (count ? count : 1) } : item
      );
      //console.log("Updated Cart:", updatedCart);
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
  } else {
      const updatedCart = [...cart, { ...product, quantity: count ? count : 1 }];
      //console.log("Updated Cart:", updatedCart);
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  //alert(JSON.stringify(localStorage.getItem('cart'), null, 2));
  updateCart();
};





  
// Update cart items function
const updateCart = () => {
  const updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
  setCart(updatedCart);
};

// Call updateCart function whenever cart items change
// useEffect(() => {
//   updateCart();
// }, [cart]);
useEffect(() => {
  
});

  return (
    <Router>
      {/* <Navbar /> */}
      <div>{/* <div className="flex"> */}
        <div>{/* <div className="content flex-grow"> */}

        <Fragment>
            {showQuickView
                ? <QuickView
                    data={quickViewData}
                    onQuickViewCloseClick={HandelQuickViewClose}
                />
                : ''
            }


            {/* <ScrollToTop/> */}
            <Routes>
              <Route path="/*" element={<div>NOT FOUND</div>} />
              <Route path='/' element={<LandingPage options={options} handleDataViewData={HandelQuickViewData} addToCart={addToCart} cart={cart}/>}/>    
              <Route path='/home' element={<HomePage />}/>    
              <Route path='/about' element={<AboutPage options={options} addToCart={addToCart} cart={cart}/>}/>    
              <Route path='/my-account' element={<AccountPage options={options} addToCart={addToCart} cart={cart}/>}/> 
              <Route path='/shop' element={<ShopLeftSidebarPage options={options} addToCart={addToCart} cart={cart} />}/>
              
              <Route path='/cart' element={<CartPage options={options} handleDataViewData={HandelQuickViewData} addToCart={addToCart} cart={cart} updateCart={updateCart}/>}/>
              {/* <Route path='/checkout/:cart' element={<CheckoutPage options={options} />}/> */}
              <Route path='/checkout' element={<CheckoutPage options={options} addToCart={addToCart} cart={cart} />}/>

              {/* <Route path='/product-details/:product' element={<ProductPage options={options} />}/> */}
              <Route path="/product-details" element={<ProductPage options={options} addToCart={addToCart} cart={cart} updateCart={updateCart}/>} />

              <Route path='/sizes' element={<SizesPage options={options} addToCart={addToCart} cart={cart}/>}/>
              {/* <Route path='/contact-us' element={<ContactUsPage options={options} />}/> */}

              <Route path='/signup' element={<SignUpPage options={options} addToCart={addToCart} cart={cart}/>}/>
              <Route path='/signin' element={<SignInPage options={options} addToCart={addToCart} cart={cart}/>}/>

              <Route path='/privacy-policy' element={<PrivacyPolicyPage options={options} addToCart={addToCart} cart={cart}/>}/>

            
          </Routes>


            </Fragment>



          
        </div>
      </div>
    </Router>
  );
}

export default App;
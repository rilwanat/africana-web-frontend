import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import {Fragment} from 'react';

import LandingPage from "./components/pages/LandingPage";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/about/About";
import AccountPage from "./components/pages/MyAccount";
// import ShopPage from "./components/pages/ShopPage";
import ShopPage from "./components/pages/ShopLeftSidebarPage";
import ProductPage from "./components/pages/ProductPage";
import SizesPage from "./components/pages/SizesPage";

import QuickView from './components/pages/QuickView';

// import ScrollToTop from "./ScrollToTop";

function App() {

  

  
  const [showQuickView, setShowQuickView] = useState(false);
  const [quickViewData, setQuickViewData] = useState({});
  const HandelQuickViewData = (e, item) => {
    e.preventDefault();
    setShowQuickView(!showQuickView);
    setQuickViewData(item);
  };

/**
     * Handle Quick View Close
     * @param e
     * @constructor
     */
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
              <Route path='/' element={<LandingPage options={options} handleDataViewData={HandelQuickViewData}/>}/>    
              <Route path='/home' element={<HomePage />}/>    
              <Route path='/about' element={<AboutPage options={options} />}/>    
              <Route path='/my-account' element={<AccountPage options={options} />}/>    
              {/* <Route path='/login' element={<LoginPage />}/> */}
              <Route path='/shop' element={<ShopPage options={options} />}/>
              <Route path='/product-details' element={<ProductPage options={options} />}/>
              <Route path='/sizes' element={<SizesPage options={options} />}/>

              {/* 
              <Route path='/privacy' element={<PrivacyPage />}/>
              <Route path='/terms' element={<TermsPage />}/>
              <Route path='/promo' element={<PromoPage />}/>
              <Route path='/wishlist' element={<WishlistPage />}/>
              <Route path='/cart' element={<CartPage />}/>
              <Route path='/checkout' element={<CheckoutPage />}/>
              */}
            
          </Routes>


            </Fragment>



          
        </div>
      </div>
    </Router>
  );
}

export default App;
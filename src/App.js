import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import {Fragment} from 'react';



import HomePage from "./components/main/HomePage";
import MyAccount from "./components/main/MyAccount";
import OnSale from "./components/main/OnSale";
import ProductPage from "./components/main/ProductPage";
import SignInPage from "./components/main/SignInPage";
import SignUpPage from "./components/main/SignUpPage";



// import LandingPage from "./components/pages/LandingPage";

// import AboutPage from "./components/pages/about/About";
// import AccountPage from "./components/pages/MyAccount";
// import CartPage from "./components/pages/cart/Cart";
// import CheckoutPage from "./components/pages/checkout/Checkout";
// import ShopLeftSidebarPage from "./components/pages/ShopLeftSidebarPage";
// import ShopLeftSidebarCategoriesPage from "./components/pages/ShopLeftSidebarCategoriesPage";
// import ProductPage from "./components/pages/ProductPage";
// import SizesPage from "./components/pages/SizesPage";

// import SignUpPage from './components/pages/SignUpPage';
// import SignInPage from './components/pages/SignInPage';
// import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage';

// import ConfirmEmailPage from './components/pages/ConfirmEmailPage';
// import PaymentStatusPage from './components/pages/PaymentStatusPage';
// http://africanalifestyle.tv/flutterwave/payment-callback?status=successful&tx_ref=6UKeoEGP2Vaa&transaction_id=4938612


import QuickView from './components/pages/QuickView';


import axios from 'axios';
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


const [emailAddress, setEmailAddress] = useState(true);



const [category, setCategory] = useState('');
const [categories, setCategories] = useState([]);
    

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
handleDataCategories();

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
  //alert("Product:" + product + " Count:" + count + ", added !");

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
// useEffect(() => {
//   handleDataCategories();
// }, []);


// Remove item totally from cart
const removeCartItem = (e, itemToRemove) => {
  e.stopPropagation();

  const updatedCart = cart.map((item) =>
        item.id === itemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item
    ).filter((item) => item.quantity > 0);

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
};




const handleDataCategories = async () => {    
  setIsDataLoading(true);
  try {
    // const response = await axios.get('http://localhost:3000/productssample.json');
    const response = await axios.get('http://144.149.167.72.host.secureserver.net:3000/api/v1/categories', {
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
      setCategories(response.data.categoriesOrdered);
    } else {
      //alert("error: " + response.data.message);
    }
  } catch (error) {
    setIsDataLoading(false);
    //alert("error: " + error);
  }
};

// const handleDataTags = async () => {    
//   setIsDataLoading(true);
//   try {
//     // const response = await axios.get('http://localhost:3000/productssample.json');
//     const response = await axios.get('http://144.149.167.72.host.secureserver.net:3000/api/v1/tags', {
//       //params: { uid: uid },
//       headers: {
//         "Content-Type": "application/json",
//         //Authorization: `Bearer ${token}`,
//       },
//     });
//     setIsDataLoading(false);
//     //alert(JSON.stringify(response.data, null, 2));
//     if (response.data.success) {
//       //alert("dashboard-products " + JSON.stringify(response.data, null, 2));    
//       // Store the retrieved data in state variables
//       setTags(response.data.categoriesOrdered);
//     } else {
//       //alert("error: " + response.data.message);
//     }
//   } catch (error) {
//     setIsDataLoading(false);
//     //alert("error: " + error);
//   }
// };

const handleEmailAddress = (em) => {
  setEmailAddress(em);
}

const handleSetCategory = (cat) => {
  setCategory(cat);
}


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
                    addToCart={addToCart}
                />
                : ''
            }


            {/* <ScrollToTop/> */}
            <Routes>
              <Route path="/*" element={<div>NOT FOUND</div>} />
              {/* <Route path='/' element={<LandingPage options={options} handleDataViewData={HandelQuickViewData} addToCart={addToCart} cart={cart} removeCartItem={removeCartItem}/>}/>     */}
              <Route path='/' element={<HomePage options={options} handleDataViewData={HandelQuickViewData} addToCart={addToCart} cart={cart} removeCartItem={removeCartItem}/>}/>    
              <Route path='/my-account' element={<MyAccount options={options} addToCart={addToCart} cart={cart} removeCartItem={removeCartItem}/>}/> 
              <Route path='/on-sale' element={<OnSale options={options} addToCart={addToCart} cart={cart} removeCartItem={removeCartItem} categories={categories}/>}/>
              <Route path="/product-details" element={<ProductPage options={options} addToCart={addToCart} cart={cart} updateCart={updateCart} removeCartItem={removeCartItem}/>} />
              <Route path='/sign-in' element={<SignInPage options={options} addToCart={addToCart} cart={cart} removeCartItem={removeCartItem}/>}/>
              <Route path='/sign-up' element={<SignUpPage options={options} addToCart={addToCart} cart={cart} removeCartItem={removeCartItem} handleEmailAddress={handleEmailAddress}/>}/>
              
              
{/*           <Route path='/my-account' element={<AccountPage options={options} addToCart={addToCart} cart={cart} removeCartItem={removeCartItem}/>}/> 
                  
              <Route path='/about' element={<AboutPage options={options} addToCart={addToCart} cart={cart} removeCartItem={removeCartItem}/>}/>    
              <Route path='/shop' element={<ShopLeftSidebarPage options={options} addToCart={addToCart} cart={cart} removeCartItem={removeCartItem} categories={categories}/>}/>
              <Route path='/categories' element={<ShopLeftSidebarCategoriesPage options={options} addToCart={addToCart} cart={cart} removeCartItem={removeCartItem} categories={categories} />}/>
              <Route path='/cart' element={<CartPage options={options} handleDataViewData={HandelQuickViewData} addToCart={addToCart} cart={cart} updateCart={updateCart} removeCartItem={removeCartItem}/>}/>
              <Route path='/checkout' element={<CheckoutPage options={options} addToCart={addToCart} cart={cart} removeCartItem={removeCartItem}/>}/>
              <Route path="/product-details" element={<ProductPage options={options} addToCart={addToCart} cart={cart} updateCart={updateCart} removeCartItem={removeCartItem}/>} />
              <Route path='/sizes' element={<SizesPage options={options} addToCart={addToCart} cart={cart} removeCartItem={removeCartItem}/>}/>
              <Route path='/privacy-policy' element={<PrivacyPolicyPage options={options} addToCart={addToCart} cart={cart} removeCartItem={removeCartItem}/>}/>
              <Route path='/confirm-email' element={<ConfirmEmailPage emailAddress={emailAddress}
              // options={options} addToCart={addToCart} cart={cart} removeCartItem={removeCartItem}
              />}/>              
              <Route path='/flutterwave/payment-callback' element={<PaymentStatusPage options={options} addToCart={addToCart} cart={cart} removeCartItem={removeCartItem}/>}/> */}

            
          </Routes>


            </Fragment>



          
        </div>
      </div>
    </Router>
  );
}

export default App;
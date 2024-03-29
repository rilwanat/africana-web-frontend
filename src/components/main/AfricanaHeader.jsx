import React, { useState, useEffect, useRef  } from 'react';
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Box, useMediaQuery } from '@mui/material';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';


import logo from '../../assets/logos/Logo Wordmark 1.png';
import logo2 from '../../assets/logos/Logo Wordmark.png';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/LocalMallSharp';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';



import Slider from "react-slick";

import './react-css/cartsliderproducts.css';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';




import { AES } from 'crypto-js';

import axios from 'axios';

const SlideInMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  z-index: 1000; /* Ensure the menu is on top of other content */
  overflow-x: hidden;
`;
const MenuContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
const menuItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } },
};




// Styled component for the sliding div
const SlideInDiv = styled(motion.div)`
  position: absolute;
  top: 5rem;
  left: 2rem;
  right: 2rem;
  width: calc(100% - 4rem);
  height: 75%;
  background-color: white; /* Change color as needed */
`;
const slideInVariants = {
  hidden: { height: 0 },
  visible: { height: '75%', transition: { duration: 0.3, type: 'tween' } }
};
const SlideInContent = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  height: 100%;
`;



// const SlideInBag = styled(motion.div)`
//   position: fixed;
//   top: 5rem;
//   right: 0;
//   width: calc(100% - 2rem);
//   height: 80%;
//   /*background-color: rgba(0, 0, 0, 0.5);  Semi-transparent background */
//   z-index: 1000; /* Ensure the menu is on top of other content */
//   overflow-x: hidden;

//   @media (min-width: 960px) {
//     width: 40%;
//   }
// `;

const SlideInBag = styled(motion.div)`
  position: fixed;
  top: 0rem;
  right: 0;
  width: calc(80% - 2rem);
  height: 100%;
  /*background-color: rgba(0, 0, 0, 0.5);  Semi-transparent background */
  z-index: 1000; /* Ensure the menu is on top of other content */
  overflow-x: hidden;

  @media (min-width: 960px) {
    width: 40%;
  }

  @media (max-width: 959px) {
    width: 100%; /* Full width on mobile screens */
    left: 0;
  }
`;
const BagContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 83%;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 959px) {
    width: 100%; /* Full width on mobile screens */
    left: 0;
  }
`;
const BagContentInner = styled.div`
  height: 100%; /* Ensure the inner content fills the container */
  max-height: 100%; /* Limit the height to the container's height */
  /*overflow-y: auto;  Enable vertical scrolling if content overflows */
`;
const bagItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } },
};




//


const SlideInAccount = styled(motion.div)`
  position: fixed;
  top: 0rem;
  right: 0;
  width: calc(100% - 2rem);
  height: 70vh;
  /*background-color: rgba(0, 0, 0, 0.5);  Semi-transparent background */
  z-index: 1000; /* Ensure the menu is on top of other content */
  overflow-x: hidden;

  @media (min-width: 960px) {
    width: 40%;
  }
`;
const AccountContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
const AccountContentInner = styled.div`
  height: 100%; /* Ensure the inner content fills the container */
  max-height: 100%; /* Limit the height to the container's height */
  overflow-y: auto; /* Enable vertical scrolling if content overflows */
`;
const accountItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } },
};
//


function AfricanaHeader({ options, cart, addToCart, updateCart, removeCartItem, removeAllCartItem, handleEmailAddress }) {

    // const data = {
    //     "content": "Join our showroom and get 1 % off ! Coupon code : AFR222"
    // }

    const navigate = useNavigate();
  const isLargeScreen = useMediaQuery('(min-width:960px)');
  const [hoveredMenuItem, setHoveredMenuItem] = useState(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [menuWidthMen, setMenuWidthMen] = useState(0);
  const [menuWidthWomen, setMenuWidthWomen] = useState(0);
  const [menuWidthEssentials, setMenuWidthEssentials] = useState(0);
  const [menuWidthStores, setMenuWidthStores] = useState(0);
  const [menuWidthOnsale, setMenuWidthOnsale] = useState(0);
  const [menuWidthSizes, setMenuWidthSizes] = useState(0);

  const [menuWidthSignin, setMenuWidthSignin] = useState(0);
  const [menuWidthRegister, setMenuWidthRegister] = useState(0);

  const [menuWidthDont, setMenuWidthDont] = useState(0);
  const [menuWidthAlready, setMenuWidthAlready] = useState(0);


  const [loginEmailAddress, setLoginEmailAddress] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // const [isDefaultModalOpen, setDefaultModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  // const [registrationStatus, setRegistrationStatus] = useState('');
  const loginUser = async (e) => {
    e.preventDefault();
    setErrorMessage({ message: '' });

    navigate('/my-account');
    return;

    setIsLoading(true);
    

    // setLoginEmailAddress();
    // setLoginPassword();

    if (loginEmailAddress === 'Enter your email' || loginEmailAddress === '' 
    || 
    loginPassword === 'Enter your password' || loginPassword === ''
        ) {
        setErrorMessage({ message: 'Login Failed: Please enter valid credentials' });
        // setRegistrationStatus("Failed");
        setIsLoading(false);
        return;
    }


    //alert("login user: " + loginEmailAddress + " " + loginPassword);

    try {
        const formData = new FormData();
        formData.append('email', loginEmailAddress);        
        formData.append('password', loginPassword);

        const response = await axios.post('http://144.149.167.72.host.secureserver.net:3000/api/v1/auth/login', formData, {
            headers: {
                // 'Content-Type': 'multipart/form-data',
                'Content-Type': 'application/json',
            },
        });

        // const response = await axios.post('http://144.149.167.72.host.secureserver.net:3000/api/v1/auth/login', {
        //     loginEmailAddress,
        //     loginPassword,
        // });



        setIsLoading(false);

        //alert("login: " + JSON.stringify(response.data.data, null, 2));


        if (response.data.success) {
            // If login is successful
            setErrorMessage({ message: '' });

            setLoginEmailAddress('');
            setLoginPassword('');
            alert("Login Successful: " + response.data.message);

            navigate('/my-account');

        } else {
            const errors = response.data.errors.map(error => error.msg);
            setErrorMessage({ message: response.data.message, errors });
            //alert("Failed1");
        }
    } catch (error) {
      setIsLoading(false);
        
      if (error.response && error.response.data && error.response.data.message) {
        const errorMessage = error.response.data.message;
        setErrorMessage({ message: errorMessage });
    } else if (error.response && error.response.data && error.response.data.errors) {
        const { errors } = error.response.data;
        const errorMessages = errors.map(error => error.msg);
        const errorMessage = errorMessages.join(', '); // Join all error messages
        setErrorMessage({ message: errorMessage });
    } else {
        setErrorMessage({ message: 'Login failed. Please check your credentials and try again.' });
    }

    }
};



const [firstname, setFirstname] = useState('');
const [lastname, setLastname] = useState('');
const [companyname, setCompanyname] = useState('Enter your Company name');
const [emailAddress, setEmailAddress] = useState('');
const [phone, setPhonenumber] = useState('Enter your phone number');
const [country, setCountry] = useState('Enter your Country *dropdown');
const [address1, setAddress1] = useState('Enter Address Line 1');
const [address2, setAddress2] = useState('Enter Address Line 2');
const [towncity, setTowncity] = useState('Enter Town / City');
const registerUser = async (e) => {
  e.preventDefault();
  setErrorMessage({ message: '' });
  //alert("");

  setIsLoading(true);
  

  if (emailAddress === 'Enter your email' || emailAddress === '' 
  || 
      firstname === 'Enter your Firstname' || firstname === ''
      || 
      lastname === 'Enter your Lastname' || lastname === ''
      ) {
      setErrorMessage({ message: 'Registration Failed: Please enter valid credentials' });
      // setRegistrationStatus("Failed");
      setIsLoading(false);

      //alert("");
      return;
  }

  //alert("login user: " + emailAddress + " " + firstname + " " + lastname);


  try {

      const requestData = {                
              firstName: firstname,
              lastName: lastname,
              email: emailAddress,          
      };

      const response = await axios.post('http://144.149.167.72.host.secureserver.net:3000/api/v1/auth/register', requestData, {
          headers: {
              // 'Content-Type': 'multipart/form-data',
              'Content-Type': 'application/json',
          },
      });


      setIsLoading(false);


      if (response.data.success) {
          // If registration is successful
          setErrorMessage({ message: '' });

          handleEmailAddress(emailAddress);
          
          // navigate('/confirm-email/' + emailAddress);
          //navigate('/confirm-email');


          setFirstname('');
          setLastname('');
          setEmailAddress('');
          alert("Registration Successful: " + response.data.message + "\n\n Please check your mail and login to continue");
          navigate('/sign-in');

          
      } else {
          // If there are errors in the response
          const errors = response.data.errors.map(error => error.msg);
          const errorMessage = errors.join(', ');
          setErrorMessage({ message: errorMessage });
          alert("Registration Failed");
      }
      
  } catch (error) {
      setIsLoading(false);
      
      if (error.response && error.response.data && error.response.data.message) {
          const errorMessage = error.response.data.message;
          setErrorMessage({ message: errorMessage });
      } else if (error.response && error.response.data && error.response.data.errors) {
          const { errors } = error.response.data;
          const errorMessages = errors.map(error => error.msg);
          const errorMessage = errorMessages.join(', '); // Join all error messages
          setErrorMessage({ message: errorMessage });
      } else {
          setErrorMessage({ message: 'Registration failed. Please check your credentials and try again.' });
      }
  }
  
};








  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


const [isBagOpen, setIsBagOpen] = useState(false);
const toggleBag = () => {
  setIsBagOpen(!isBagOpen);
};

const [isAccountOpen, setIsAccountOpen] = useState(false);
const toggleAccount = () => {
  setIsAccountOpen(!isAccountOpen);
};

const [isSignUpOpen, setIsSignUpOpen] = useState(false);
const toggleAccountForSignUp = () => {
  setErrorMessage({ message: '' });
  setIsSignUpOpen(!isSignUpOpen);
}  

const toggleAccountForSignIn = () => {
  setErrorMessage({ message: '' });
  setIsSignUpOpen(false);
}


  useEffect(() => {
    
    if (hoveredMenuItem === 'MEN') {
      const menTextWidth = document.getElementById('men-text').offsetWidth;
      setMenuWidthMen(menTextWidth);
    } else {
      setMenuWidthMen(0);
    }

    if (hoveredMenuItem === 'WOMEN') {
      const womenTextWidth = document.getElementById('women-text').offsetWidth;
      setMenuWidthWomen(womenTextWidth);
    } else {
      setMenuWidthWomen(0);
    }

    if (hoveredMenuItem === 'ESSENTIALS') {
      const menuWidthEssentials = document.getElementById('essentials-text').offsetWidth;
      setMenuWidthEssentials(menuWidthEssentials);
    } else {
      setMenuWidthEssentials(0);
    }

    if (hoveredMenuItem === 'STORES') {
      const menuWidthStores = document.getElementById('stores-text').offsetWidth;
      setMenuWidthStores(menuWidthStores);
    } else {
      setMenuWidthStores(0);
    }

    if (hoveredMenuItem === 'ONSALE') {
      const menuWidthOnsale = document.getElementById('onsale-text').offsetWidth;
      setMenuWidthOnsale(menuWidthOnsale);
    } else {
      setMenuWidthOnsale(0);
    }

    if (hoveredMenuItem === 'SIZES') {
      const menuWidthSizes = document.getElementById('sizes-text').offsetWidth;
      setMenuWidthSizes(menuWidthSizes);
    } else {
      setMenuWidthSizes(0);
    }

    //
    if (hoveredMenuItem === 'SIGNIN') {
      const menuWidthSignin = document.getElementById('signin-text').offsetWidth;
      setMenuWidthSignin(menuWidthSignin);
    } else {
      setMenuWidthSignin(0);
    }
    if (hoveredMenuItem === 'REGISTER') {
      const menuWidthRegister = document.getElementById('register-text').offsetWidth;
      setMenuWidthRegister(menuWidthRegister);
    } else {
      setMenuWidthRegister(0);
    }

    //
    if (hoveredMenuItem === 'DONT') {
      const menuWidthDont = document.getElementById('dont-text').offsetWidth;
      setMenuWidthDont(menuWidthDont);
    } else {
      setMenuWidthDont(0);
    }
    if (hoveredMenuItem === 'ALREADY') {
      const menuWidthAlready = document.getElementById('already-text').offsetWidth;
      setMenuWidthAlready(menuWidthAlready);
    } else {
      setMenuWidthAlready(0);
    }




  }, [hoveredMenuItem]);


  const navigateToOnSale = () => {
    setHoveredMenuItem("")
    setIsMenuOpen(false);
    const productSlug = "all products";
    navigate('/on-sale', { state: { productSlug }, replace: true });
    //window.location.reload();
  }

  const navigateToMen = () => {
    setHoveredMenuItem("")
    setIsMenuOpen(false);
    const productSlug = "men";
    navigate('/on-sale', { state: { productSlug }, replace: true });
    //window.location.reload();    
  }
  const navigateToWomen = () => {
    setHoveredMenuItem("");
    setIsMenuOpen(false);
    const productSlug = "women";
    navigate('/on-sale', { state: { productSlug }, replace: true });
    //window.location.reload();
  }

  const navigateToSizes = () => {
    setHoveredMenuItem("")
    setIsMenuOpen(false);
    //const productSlug = "all products";
    navigate('/sizes', { state: {  }, replace: true });
    //window.location.reload();
  }



  const navigateToMyAccount = () => {
    navigate('/my-account', {  });
  }

  // const navigateToSignIn = () => {
  //   navigate('/sign-in', {  });
  // }

  const navigateToCheckOut = () => {
    if (cart.length > 0) {
        options.onMiniCartClick();
        const encryptedData = AES.encrypt(JSON.stringify(cart), 'encryptionKey').toString();
        navigate('/checkout', { state: { encryptedData } });
    } else {
        alert("Add items to your cart");
    }
};

const navigateToCart = () => {
    if (cart.length > 0) {
        options.onMiniCartClick();
        const encryptedData = AES.encrypt(JSON.stringify(cart), 'encryptionKey').toString();
        navigate('/cart', { state: { encryptedData } });
    } else {
        alert("Add items to your cart");
    }
};

const navigateToProduct = (product) => {

    
    const encryptedData = AES.encrypt(JSON.stringify(product), 'encryptionKey').toString();
    // navigate(`/product-details/${encodeURIComponent(encryptedData)}`);
    navigate('/product-details', { state: { encryptedData } });
};


const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,

};


const [cartItems, setCartItems] = useState(cart);

const handleIncreaseQuantity = (item) => {
  const updatedCart = cartItems.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
  );
  setCartItems(updatedCart);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  
  updateCart();
  calculateCartSubTotal();
};

const handleDecreaseQuantity = (item) => {
  if (item.quantity > 1) {
      const updatedCart = cartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      );
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
  } else {
      const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
  }
  updateCart();
  calculateCartSubTotal();
};


function findLowestPrice(product) {
  let lowestPrice = Infinity;
  product.productVariants.forEach(variant => {
      if (variant.price < lowestPrice) {
          lowestPrice = variant.price;
      }
  });
  return lowestPrice;
}
const calculateTotal = (item) => {
  return findLowestPrice(item) * item.quantity;
};

const [isHovered, setIsHovered] = useState(false);
const iconVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
};


const calculateCartSubTotal = (cart) => {
  let subTotal = 0;
  cart.forEach((item) => {
      subTotal += findLowestPrice(item) * item.quantity;
  });
  return subTotal;
};



//
const [isHoverCheckout, setIsHoverCheckout] = useState(false);
const handleHoverCheckout = () => { setIsHoverCheckout(true); };
const handleLeaveCheckout = () => { setIsHoverCheckout(false); };

const [isHoverMenu, setIsHoverMenu] = useState(false);
const handleHoverMenu = () => { setIsHoverMenu(true); };
const handleLeaveMenu = () => { setIsHoverMenu(false); };

const [isHoverCreateAccount, setIsHoverCreateAccount] = useState(false);
const handleHoverCreateAccount = () => { setIsHoverCreateAccount(true); };
const handleLeaveCreateAccount = () => { setIsHoverCreateAccount(false); };

const [isHoverSignIn, setIsHoverSignIn] = useState(false);
const handleHoverSignIn = () => { setIsHoverSignIn(true); };
const handleLeaveSignIn = () => { setIsHoverSignIn(false); };

// const [isHoverShoppingBag, setIsHoverShoppingBag] = useState(false);
// const handleHoverShoppingBag = () => { setIsHoverShoppingBag(true); };
// const handleLeaveShoppingBag = () => { setIsHoverShoppingBag(false); };
//


function mainProductImage(product) { 
  return product.productImages.find(img => img.isDefault).url;
}
 

    return (
        <div>
            <nav className=" z-50" >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 pt-7">
            <div className="flex-shrink-">
              {isLargeScreen ? (
                <div >
                  <div className="lg:flex flex-grow justify-between items-center">
                 <motion.div
  className="text-white text-xs font-bold cursor-pointer mr-4 z-50"
  // className={`text-white text-xs font-bold cursor-pointer mr-4 z-50 ${hoveredMenuItem === 'MEN' ? 'border-b-2 border-white' : ''}`}
  onClick={() => {navigateToMen();}}
  onMouseEnter={() => setHoveredMenuItem('MEN')}
  // onMouseLeave={() => setHoveredMenuItem('MENX')}
>
<div style={{ position: 'relative' }}>
<span id="men-text">MEN</span>
      <div className={`absolute bg-white 
      ${hoveredMenuItem === 'MEN' ? 'transition-all duration-300' : hoveredMenuItem === "MENX" ? 'transition-all duration-300' : ''}`} 
      style={{ width: menuWidthMen, height: '2px', 
      left: hoveredMenuItem === 'MEN' ? 0 : 'auto',
      right: hoveredMenuItem === 'MEN' ? 0 : menuWidthMen
       }} />
</div>
  {hoveredMenuItem === 'MEN' && (
  <SlideInDiv variants={slideInVariants}><SlideInContent>
  <div className="flex flex-col  p-8" 

  onMouseEnter={() => setHoveredMenuItem('MEN')}
  onMouseLeave={() => setHoveredMenuItem('MENX')}
  
  >
  
  <div className="flex p-8" style={{ height: '80%' }}>
  <div className=" p-4 w-full text-gray-900 flex flex-col" >
    <a className='mb-4 uppercase font-bold'>Clothing</a>
    {/* <hr /> */}
    <a className='uppercase my-2'>New in</a>
    <a className='uppercase my-2'>Kaftan</a>
    <a className='uppercase my-2'>Dashiki</a>
    <a className='uppercase my-2'>T-shirt</a>
    <a className='uppercase my-2'>Dress Shirt</a>
    <a className='uppercase my-2'>Lounge Wear</a>
    <a className='uppercase my-2'>Sweatshirts</a>
    <a className='uppercase my-2'>Underwear</a>
    </div>
    <div className=" p-4 w-full text-gray-900 flex flex-col">
    <a className='mb-4 uppercase font-bold'>Shoes</a>
    {/* <hr /> */}
    <a className='uppercase my-2'>Sneakers</a>
    <a className='uppercase my-2'>Mules</a>
    <a className='uppercase my-2'>T-shirt</a>
    <a className='uppercase my-2'>Lounge Wear</a>
    <a className='uppercase my-2'>Sweatshirts</a>
    <a className='uppercase my-2'>Underwear</a>
    </div>
    <div className=" p-4 w-full text-gray-900 flex flex-col" >
    <a className='mb-4 uppercase font-bold'>Accessories </a>
    {/* <hr /> */}
    <a className='uppercase my-2'>Scarfs</a>
    <a className='uppercase my-2'>Wallets</a>
    <a className='uppercase my-2'>Bags</a>
    <a className='uppercase my-2'>Purses</a>
    </div>
      
  </div>

  <hr style={{ borderColor: 'black' }} className='my-4'/>

  <a
        className="text-gray-900 text-sm font-bold cursor-pointer block my-2"
        onClick={() => {navigateToOnSale();}}
      >
        SHOP ALL PRODUCTS
      </a>
  
  </div>
  <div className=" p-8">
    <img src="http://shopafricana.co/wp-content/uploads/2023/12/ALAY4447111.jpg" className='rounded-lg'/>
  </div>
</SlideInContent></SlideInDiv>
)}
</motion.div>

<motion.div
                    className="text-white text-xs font-bold cursor-pointer mr-4  z-50"
                    onClick={() => {navigateToWomen();}}
                    onMouseEnter={() => setHoveredMenuItem('WOMEN')}
                    // onMouseLeave={() => setHoveredMenuItem('WOMENX')}
                  >
<div style={{ position: 'relative' }}>
<span id="women-text">WOMEN</span>
      <div className={`absolute bg-white 
      ${hoveredMenuItem === 'WOMEN' ? 'transition-all duration-300' : hoveredMenuItem === 'WOMENX' ? 'transition-all duration-300' : ''}`} 
      style={{ width: menuWidthWomen, height: '2px', 
      left: hoveredMenuItem === 'WOMEN' ? 0 : 'auto',
      right: hoveredMenuItem === 'WOMEN' ? 0 : menuWidthWomen
       }} />
</div>
                    {hoveredMenuItem === 'WOMEN' && (
  <SlideInDiv variants={slideInVariants}><SlideInContent>
  <div className="flex flex-col  p-8" 
  onMouseEnter={() => setHoveredMenuItem('WOMEN')}
  onMouseLeave={() => setHoveredMenuItem('WOMENX')}
  >
  
  <div className="flex p-8" style={{ height: '80%' }}>
  <div className=" p-4 w-full text-gray-900 flex flex-col" >
    <a className='mb-4 uppercase font-bold'>Clothing</a>
    {/* <hr /> */}
    <a className='uppercase my-2'>New in</a>
    <a className='uppercase my-2'>Dashiki</a>
    <a className='uppercase my-2'>T-shirt</a>
    <a className='uppercase my-2'>Lounge Wear</a>
    <a className='uppercase my-2'>Sweatshirts</a>
    <a className='uppercase my-2'>Underwear</a>
    </div>
    <div className=" p-4 w-full text-gray-900 flex flex-col">
    <a className='mb-4 uppercase font-bold'>Shoes</a>
    {/* <hr /> */}
    <a className='uppercase my-2'>Sneakers</a>
    <a className='uppercase my-2'>Mules</a>
    <a className='uppercase my-2'>Slides</a>
    <a className='uppercase my-2'>Slippers</a>
    </div>
    <div className=" p-4 w-full text-gray-900 flex flex-col" >
    <a className='mb-4 uppercase font-bold'>Accessories </a>
    {/* <hr /> */}
    <a className='uppercase my-2'>Scarfs</a>
    <a className='uppercase my-2'>Wallets</a>
    <a className='uppercase my-2'>Bags</a>
    <a className='uppercase my-2'>Purses</a>
    </div>
  </div>

  <hr style={{ borderColor: 'black' }} className='my-4'/>

  <a
        className="text-gray-900 text-sm font-bold cursor-pointer block my-2"
        onClick={() => {
          navigateToOnSale();
        }}
      >
        SHOP ALL PRODUCTS
      </a>
  
  </div>
  <div className=" p-8">
    <img src="http://shopafricana.co/wp-content/uploads/2023/12/ALAY4456111.jpg" className='rounded-lg'/>
  </div>
</SlideInContent></SlideInDiv>
)}
                  </motion.div>

<motion.div
                    className="text-white text-xs font-bold cursor-pointer mr-4  z-50"
                    onClick={() => { /* Handle navigation */ }}
                    onMouseEnter={() => setHoveredMenuItem('ESSENTIALS')}
                    onMouseLeave={() => setHoveredMenuItem('ESSENTIALSX')}
                  >
                  <div style={{ position: 'relative' }}>
<span id="essentials-text">ESSENTIALS</span>
      <div className={`absolute bg-white 
      ${hoveredMenuItem === 'ESSENTIALS' ? 'transition-all duration-300' : hoveredMenuItem === "ESSENTIALSX" ? 'transition-all duration-300' : ''}`} 
      style={{ width: menuWidthEssentials, height: '2px', 
      left: hoveredMenuItem === 'ESSENTIALS' ? 0 : 'auto',
      right: hoveredMenuItem === 'ESSENTIALS' ? 0 : menuWidthEssentials
       }} />
</div></motion.div>

<motion.div
                    className="text-white text-xs font-bold cursor-pointer mr-4  z-50"
                    onClick={() => { /* Handle navigation */ }}
                    onMouseEnter={() => setHoveredMenuItem('STORES')}
                    onMouseLeave={() => setHoveredMenuItem('STORESX')}
                  >
                  <div style={{ position: 'relative' }}>
<span id="stores-text">STORES</span>
      <div className={`absolute bg-white 
      ${hoveredMenuItem === 'STORES' ? 'transition-all duration-300' : hoveredMenuItem === "STORESX" ? 'transition-all duration-300' : ''}`} 
      style={{ width: menuWidthStores, height: '2px', 
      left: hoveredMenuItem === 'STORES' ? 0 : 'auto',
      right: hoveredMenuItem === 'STORES' ? 0 : menuWidthStores
       }} />
</div></motion.div>

<motion.div
                    className="text-white text-xs font-bold cursor-pointer mr-4  z-50"
                    onClick={() => {navigateToOnSale();}}
                    onMouseEnter={() => setHoveredMenuItem('ONSALE')}
                    onMouseLeave={() => setHoveredMenuItem('ONSALEX')}
                  >
                  <div style={{ position: 'relative' }}>
<span id="onsale-text">ON SALE</span>
      <div className={`absolute bg-white 
      ${hoveredMenuItem === 'ONSALE' ? 'transition-all duration-300' : hoveredMenuItem === "ONSALEX" ? 'transition-all duration-300' : ''}`} 
      style={{ width: menuWidthOnsale, height: '2px', 
      left: hoveredMenuItem === 'ONSALE' ? 0 : 'auto',
      right: hoveredMenuItem === 'ONSALE' ? 0 : menuWidthOnsale
       }} />
</div></motion.div>

<motion.div
                    className="text-white text-xs font-bold cursor-pointer mr-4  z-50"
                    onClick={() => {navigateToSizes();}}
                    onMouseEnter={() => setHoveredMenuItem('SIZES')}
                    onMouseLeave={() => setHoveredMenuItem('SIZESX')}
                  >
                  <div style={{ position: 'relative' }}>
<span id="sizes-text">SIZES</span>
      <div className={`absolute bg-white 
      ${hoveredMenuItem === 'SIZES' ? 'transition-all duration-300' : hoveredMenuItem === "SIZESX" ? 'transition-all duration-300' : ''}`} 
      style={{ width: menuWidthSizes, height: '2px', 
      left: hoveredMenuItem === 'SIZES' ? 0 : 'auto',
      right: hoveredMenuItem === 'SIZES' ? 0 : menuWidthSizes
       }} />
</div></motion.div>


                </div>
                </div>
              ) : (
                <IconButton
                  edge="start"
                  aria-label="menu"
                  sx={{ color: 'white', marginRight: 2 }} 
                  onClick={toggleMenu}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </div>
            <div className="flex-grow flex items-center justify-center  z-50">
              <img
                className="block h-8 w-auto"
                src={logo}
                alt="Logo"
                onClick={() => {navigate('/');}}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="flex items-center">
              {isLargeScreen && (
                <div style={{ width: '300px' }} className="flex justify-end">
                  <IconButton aria-label="search" sx={{ color: 'white' }}>
                    <SearchIcon />
                  </IconButton>









                  <IconButton aria-label="search" sx={{ color: 'white' }} 
                  onClick={() => {
                    if (cart.length > 0) {
                        // options.onMiniCartClick();
                        toggleBag();
                    } else {
                        if (options.miniCart) {options.onMiniCartClick();}
                        alert("add items to your cart");
                    }
                }}>
                    <ShoppingBagOutlinedIcon />
                    {cart && cart.length > 0 && (
            <div
                className="absolute top-1 right-1 bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center font-bold"
                style={{ fontSize: '8px', color: "#ffffff", paddingTop: '1px', paddingLeft: '2px' }}
            >
                {cart.length}
            </div>
        )}
                  </IconButton>






                  <IconButton aria-label="shopping cart" sx={{ color: 'white' }}
                  onClick={() => {
                    //navigateToSignIn();
                    toggleAccount();
                  }}
                  >
                    <AccountCircleOutlinedIcon />
                  </IconButton>
                </div>
              )}
              {!isLargeScreen && (
                <div>
                  <IconButton aria-label="search" sx={{ color: 'white' }}>
                    <SearchIcon />
                  </IconButton>






                  <IconButton aria-label="search" sx={{ color: 'white' }}
                  onClick={() => {
                    if (cart.length > 0) {
                        // options.onMiniCartClick();
                        toggleBag();
                    } else {
                        if (options.miniCart) {options.onMiniCartClick();}
                        alert("add items to your cart");
                    }
                }}>
                    <ShoppingBagOutlinedIcon />
                    {cart && cart.length > 0 && (
            <div
                className="absolute top-1 right-1 bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center font-bold"
                style={{ fontSize: '8px', color: "#ffffff", paddingTop: '1px', paddingLeft: '2px' }}
            >
                {cart.length}
            </div>
        )}
                  </IconButton>









                  <IconButton aria-label="shopping cart" sx={{ color: 'white' }}
                  onClick={() => {
                    // navigateToSignIn();
                    toggleAccount();
                    }}>
                    <AccountCircleOutlinedIcon />
                  </IconButton>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* Slide-in menu */}
      <SlideInMenu
        initial={{ x: '-100%' }}
        animate={{ x: isMenuOpen ? 0 : '-100%' }}
        transition={{ duration: 0.4 }}
      >
        <MenuContent>
          <div className='mx-8'>
            <div className='flex justify-between items-center'>
              <img
                className="block h-8 w-auto my-4"
                src={logo2}
                alt="Logo"
                onClick={() => {navigate('/');}}
                style={{ cursor: 'pointer' }}
              />
              <ArrowBackOutlinedIcon onClick={toggleMenu} style={{ cursor: 'pointer' }}/>
            </div>
            <hr />
            {/* Apply variants to each menu item */}
            <motion.span
              variants={menuItemVariants}
              initial="hidden"
              animate={isMenuOpen ? "visible" : "hidden"}
              className="text-gray-900 text-sm font-bold cursor-pointer block my-4"
              onClick={() => {navigateToMen();}}
            >
              MEN
            </motion.span>
            <motion.span
              variants={menuItemVariants}
              initial="hidden"
              animate={isMenuOpen ? "visible" : "hidden"}
              className="text-gray-900 text-sm font-bold cursor-pointer block my-4"
              onClick={() => {navigateToWomen();}}
            >
              WOMEN
            </motion.span>
            <motion.span
              variants={menuItemVariants}
              initial="hidden"
              animate={isMenuOpen ? "visible" : "hidden"}
              className="text-gray-900 text-sm font-bold cursor-pointer block my-4"
              onClick={() => { /* Handle navigation */ }}
            >
              ESSENTIALS
            </motion.span>
            <motion.span
              variants={menuItemVariants}
              initial="hidden"
              animate={isMenuOpen ? "visible" : "hidden"}
              className="text-gray-900 text-sm font-bold cursor-pointer block my-4"
              onClick={() => { /* Handle navigation */ }}
            >
              STORES
            </motion.span>
            <motion.span
              variants={menuItemVariants}
              initial="hidden"
              animate={isMenuOpen ? "visible" : "hidden"}
              className="text-gray-900 text-sm font-bold cursor-pointer block my-4"
              onClick={() => {navigateToOnSale();}}
            >
              ON SALE
            </motion.span>
          </div>
        {/* Fixed div at the bottom */}
        <div className="fixed bottom-0 left-0 w-full py-4">
          
  <div className='mx-8'>
  <hr className='my-2'/>
    <div className='flex justify-between items-center'>
      <a
        className="text-gray-900 text-sm font-bold cursor-pointer block my-2"
        onClick={() => { /* Handle navigation */ }}
      >
        CONNECT TO YOUR ACCOUNT
      </a>
      <AccountCircleOutlinedIcon onClick={toggleMenu} style={{ cursor: 'pointer' }}/>
    </div>

    <div className='flex justify-between items-center'>
      <span
        className="text-gray-900 text-sm font-bold cursor-pointer block my-2"
        onClick={() => { /* Handle navigation */ }}
      >
        CURRENCY: <a className='ml-2'>USD</a> <a className='ml-2'>NGN</a>
      </span>
      <a onClick={() => {}} style={{ cursor: 'pointer' }}>Need Help?</a>
    </div>
  </div>
</div>

    </MenuContent>
      </SlideInMenu>



<SlideInBag 
  initial={{ x: '100%' }}
        animate={{ x: isBagOpen ? 0 : '100%' }}
        transition={{ duration: 0.2 }}>
    <BagContent>
      <BagContentInner>


      <div className='mx-2 '>      
            
            <motion.span
              variants={bagItemVariants}
              initial="hidden"
              animate={isBagOpen ? "visible" : "hidden"}
              className="text-gray-900 text-sm cursor-pointer block "
              onClick={() => {  }}
            >
              
            <div 
            style={{ maxHeight: '100vh', overflowY: 'hidden' }}>                        
                        <div className='grid grid-cols-12 gap-4 mb-8'>

{
  isLargeScreen ? 
  
  <div className='md:col-span-3 md:px-2 md:mt-2' style={{  }}>
  <div className="mt-4 ">
    <div className='ml-2 mb-4'>Bestsellers:</div>

    <div className='scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100' style={{ height: 'calc(100vh - 80px)', overflowY: 'auto' }}>
      
          {cart.map((item, index) => (
            <li key={index} className="my-2 mb-6">
              <div className="">
                <div className='mx-2' style={{ cursor: 'pointer' }}>
                  <img style={{ width: '120px' }} loading="lazy" 
                  src={mainProductImage(item)}
                   alt=""/>
                </div>
              </div>
              <div className="flex flex-col mt-1 mx-2">
                <span style={{ cursor: 'pointer' }} onClick={() => {navigateToProduct(item)}}>
                  <a className='text-xs text-gray-900 '>{item.name}</a>
                </span>
                <span style={{ cursor: 'pointer' }} onClick={() => {navigateToProduct(item)}}>
                  <a className='text-xs text-gray-900'>
                  {'₦'}{findLowestPrice(item).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </a>
                </span>
              </div>
            </li>
          ))}
        {/* </Slider> */}

    </div>
    
  </div>
</div>






: ''
}
                            

<div className='relative col-span-12 md:col-span-9 px-2' style={{ boxShadow: '0px 0px 20px 0px rgba(0,0,0,1)', height: '100vh', overflowY: 'auto' }}>
  <div className='relative' style={{ minHeight: '100%', paddingBottom: '100px' }}>
    <div className='flex justify-between items-center mx-4 '>
      <motion.span
        variants={bagItemVariants}
        initial="hidden"
        animate={isBagOpen ? "visible" : "hidden"}
        className="text-gray-900 text-sm cursor-pointer block my-4"
        // onClick={() => {navigateToOnSale();}}
      >
        SHOPPING BAG {'(' + cart.length + ')'}
      </motion.span>
      <ArrowRightAltIcon 
      onClick={toggleBag} 
      style={{ cursor: 'pointer', width: isHoverMenu ? '32px' : '44px', transition: 'width 0.3s ease' }} 
      className="block h-8 w-auto my-4"
      
            onMouseEnter={handleHoverMenu}
            onMouseLeave={handleLeaveMenu}
      />
      
      {/* <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{ cursor: "pointer" }}
      >
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate={isHovered ? "animate" : "initial"}
          transition={{ duration: 0.2 }}
        >
          {isHovered ? (
            <CloseIcon onClick={toggleBag} className="block h-8 w-auto my-4" />
          ) : (
            <ArrowRightAltIcon onClick={toggleBag} className="block h-8 w-auto my-4" />
          )}
        </motion.div>
      </motion.div> */}
      
    </div>
    <hr style={{ borderColor: '#888888' }} className='ml-4 mb-8'/>
    <p className='flex justify-center mb-2 text-black '>Free shipping!</p>
    <div className='bg-black mx-4 mb-6' style={{ height: '8px' }}></div>
    
    
    <div className='' style={{ height: 'calc(100vh - 320px)', overflowY: 'auto' }}>
      {/* <ul id='bestSellersList'>
        {[...Array(100)].map((_, index) => (
          <li key={index}>
            {index} {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
          </li>
        ))}
      </ul> */}
      <div className="my-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100" style={{ maxHeight: '95%', overflowY: 'auto' }}>
      {cart && cart.map((item, index) => (
        <div key={index} className="px-4" onClick={() => { /* navigateToProduct(item) */ }}>
          <div className="flex">
            <img style={{ width: '80px' }} 
            src={mainProductImage(item)}
            />
            <div className="ml-4 w-full">
              <div className='flex justify-between'>
                <div className='uppercase' to={item.link}>{item.name}</div>
                
                <CloseIcon 
                onClick={(e) => removeAllCartItem(e, item)} 
                className=" bg-white rounded-md border border-gray-300 hover:border-black hover:text-black" 
                style={{ cursor: 'pointer', width: '22px', height: '22px', color: "#cccccc"}}
                />
              </div>
              <div className='uppercase' to={item.link}>Size: {}</div>
              <div className='flex items-center justify-between'>
                <div className="flex" style={{ display: 'flex', alignItems: 'center' }}>
                  <div className='flex bg-white items-center justify-center my-2 py-1 rounded-md' style={{ height: '70%', width: '100%' }}>
                    <RemoveIcon className='' style={{ cursor: 'pointer', width: '30px', height: '16px', borderRight: '1px solid #ccc' }} 
                    onClick={() => { handleDecreaseQuantity(item) }} />
                    <span className='flex justify-center items-center text-center text-sm' style={{ width: '30px' }}>{item.quantity}</span>
                    <AddIcon className='' style={{ cursor: 'pointer', width: '30px', height: '16px', borderLeft: '1px solid #ccc' }} 
                    onClick={() => { handleIncreaseQuantity(item) }} />
                  </div>
                  <span className="ml-4">
                    {'₦'}{findLowestPrice(item).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                </div>
                <span className="ml-4">
                {'₦'}{calculateTotal(item).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>
            </div>
          </div>
          <hr style={{ borderColor: '#cccccc' }} className='my-6'/>
        </div>
      ))}
    </div>

    </div>


    <div id='thisDiv' className='absolute bottom-0 bg-white pb-8 w-full'>
      <div className='flex flex-col mx-4'>
        <div className='flex justify-between mt-4 mb-4'>
          <span className="flex uppercase">Subtotal:</span>
          <span className="flex font-bold">
          {'₦'}{calculateCartSubTotal(cart).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
        <span className="flex mb-4">Have a coupon?</span>
        <div className='flex justify-between'>
          <div className="view-cart-btn mr-2 flex items-center" style={{ cursor: 'pointer' }} onClick={navigateToCart}>
            View Cart {'(' + cart.length + ')'}
          </div>
          <div className="checkout-btn ml-2 flex items-center" style={{ cursor: 'pointer' }} onClick={navigateToCheckOut}>
            Checkout 
            <ArrowRightAltIcon 
            onClick={toggleAccount} 
            style={{ cursor: 'pointer', width: isHoverCheckout ? '32px' : '44px', transition: 'width 0.3s ease' }} 
            className="ml-2"
            onMouseEnter={handleHoverCheckout}
            onMouseLeave={handleLeaveCheckout}
            />
          </div>  
        </div>
      </div>
    </div>
  </div>
</div>


                        </div>                        

                    </div>

                    
                    
            </motion.span>

            
            
          </div>

          
{/* Uncomment this */}
          {/* <div className='fixed bottom-0 bg-white w-full'><div className="px-8 my-2 pb-4 mt-4" 
                        // style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
                        >
                            <span className="flex justify-end mb-4">Subtotal: </span>
                            <div className="view-cart-btn mb-2 mt-2"style={{ cursor: 'pointer' }} onClick={navigateToCart}>View Cart {'(' + cart.length + ')'}</div>
                            <div className="checkout-btn"style={{ cursor: 'pointer' }} onClick={navigateToCheckOut}>Checkout</div>
                            
                        </div>
                        </div> */}
          
        </ BagContentInner>
    
    </BagContent>
</SlideInBag>



{/* {isAccountOpen && ( */}
<SlideInAccount 
  initial={{ x: '100%' }}
        animate={{ x: isAccountOpen ? 0 : '100%' }}
        transition={{ duration: 0.2 }} 
        // exit={{ x: '100%', transition: { type: 'spring', damping: 15, stiffness: 20 } }} // Define exit animation with spring
  // variants={bagItemVariants}
  >
    <AccountContent>
      <AccountContentInner>
      <div className='fixed top-0 bg-white h-8 w-full z-50'></div>


      <div className='mx-2  h-full'>      
            
            <motion.span
              variants={bagItemVariants}
              initial="hidden"
              animate={isAccountOpen ? "visible" : "hidden"}
              className="text-gray-900 text-sm cursor-pointer block "
              onClick={() => {  }}
            >
              
            <div 
            // className={"mini-cart-content " + (options.miniCart ? 'mini-cart-content-toggle' : '')} 
                     style={{ maxHeight: '100%', overflowY: 'hidden' }}
                    //  style={{ maxHeight: '600px', overflowY: 'hidden' }}
                    // style={{ maxHeight: '600px', overflowY: 'hidden', position: 'relative' }}
                    >
                        
                        <div className='grid grid-cols-12 gap-4 my-8 ' style={{ height: '60vh' }}>
                            
                            <div className='col-span-4 px-2 mt-2' >
                                
                               
                            <div className="bg-gray-300" 
                            style={{ height: '100%', overflowY: 'auto' }}
                            >
                
                Wishlist
    </div>

                            </div>


                            {/* <div className='col-span-8 px-2' style={{ boxShadow: '0px 0px 20px 0px rgba(0,0,0,1)' }}> */}
{isSignUpOpen ? 
<div className='col-span-8 px-2 h-full ' style={{ display: 'flex', flexDirection: 'column' }}>
                            {/* <div className='col-span-8 shadow-xl'> */}

                            <div className='flex justify-between items-center ml-4'>
            <motion.span
              variants={accountItemVariants}
              initial="hidden"
              animate={isAccountOpen ? "visible" : "hidden"}
              className="text-gray-900 text-sm font-bold cursor-pointer block my-4"
              // onClick={() => {navigateToOnSale();}}
            >
              CREATE AN ACCOUNT
            </motion.span>
              {/* <CloseIcon onClick={toggleAccount} style={{ cursor: 'pointer' }} className="block h-8 w-auto my-4 mr-5"/> */}
              <ArrowRightAltIcon 
              onClick={toggleAccount} 
              className="block h-8 w-auto my-4 mr-5"
              
              style={{ cursor: 'pointer', width: isHoverCreateAccount ? '32px' : '44px', transition: 'width 0.3s ease' }} 
            onMouseEnter={handleHoverCreateAccount}
            onMouseLeave={handleLeaveCreateAccount}
              />
            </div>

            
            <hr style={{ borderColor: '#888888' }} className='ml-4 '/>




                            <div className="m-2 mb-10 "
                        style={{ maxHeight: '50vh', overflowY: 'auto' }}
                        >
                            <div className="woocommerce mb-8">
                                <div className="woocommerce-notices-wrapper "/>
                                <div className="u-columns col2-set mx-4 mt-4" id="customer_login">
                                    <div className="u-column1 col-1 justify-center">
                                        {/* <h2>Login</h2> */}
                                        {/* <form className="woocommerce-form woocommerce-form-login login" method="post"> */}
                                        <div className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        {/* <label htmlFor="reg_firstname">First name&nbsp;<span className="required">*</span></label> */}
        <input 
        value={firstname}
        placeholder="Enter your Firstname"
        onChange={(e) => setFirstname(e.target.value)}
        type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="firstname" id="reg_firstname" autoComplete="given-name" />
    </div>

    <div className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide mt-4">
        {/* <label htmlFor="reg_lastname">Last name&nbsp;<span className="required">*</span></label> */}
        <input 
        value={lastname}
        placeholder="Enter your Lastname"
        onChange={(e) => setLastname(e.target.value)}
        type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="lastname" id="reg_lastname" autoComplete="family-name" />
    </div>

    {/* <div className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        <label htmlFor="reg_company">Company name&nbsp;<span className=""></span></label>
        <input type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="company" id="reg_company" autoComplete="organization" />
    </div> */}

    <div className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide mt-4">
        {/* <label htmlFor="reg_email">Email address&nbsp;<span className="required">*</span></label> */}
        <input 
        value={emailAddress}
        placeholder="Enter your email"
        onChange={(e) => setEmailAddress(e.target.value)}
        type="email" className="woocommerce-Input woocommerce-Input--text input-text" name="email" id="reg_email" autoComplete="email" />
    </div>

                                            <div className='my-2 text-sm' style={{ color: '#c2572b' }}>{errorMessage.message}</div>

                                            

                                            <p className='ml-2 mb-2 text-xs'>A link to set a new password will be sent to your email address.</p>
                                            <p className='ml-2 mb-2 text-xs'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="">privacy policy</a>.</p>
                                            
                                            <div className='flex justify-between items-center flex-col md:flex-row '>
                                              <div className='flex flex-col justify-center invisible'>
                                              <div className="md:mr-4">
                                                <input className="" name="" type="checkbox" id="" defaultValue="forever"/>
                                                <span className='ml-2'>Remember me</span>
                                              </div>
                                              <div className="woocommerce-LostPassword lost_password mt-1">
                                                <a href="#">Forgot password ?</a>
                                            </div>
                                              
                                              </div>
                                              <motion.div
                    className="text-black text-xs font-bold cursor-pointer mr-4  z-50"
                    onClick={(e) => {if (!isLoading) registerUser(e)}}
                    onMouseEnter={() => setHoveredMenuItem('REGISTER')}
                    onMouseLeave={() => setHoveredMenuItem('REGISTERX')}
                  >
                  <div style={{ position: 'relative' }} className='text-lg'>
<span id="register-text">{isLoading ? 'Please wait..' : 'Register'}</span>
      <div className={`absolute bg-black 
      ${hoveredMenuItem === 'REGISTER' ? 'transition-all duration-300' : hoveredMenuItem === "REGISTERX" ? 'transition-all duration-300' : ''}`} 
      style={{ width: menuWidthRegister, height: '2px', 
      left: hoveredMenuItem === 'REGISTER' ? 0 : 'auto',
      right: hoveredMenuItem === 'REGISTER' ? 0 : menuWidthRegister
       }} />
</div></motion.div>
                                              {/* <button className="woocommerce-button-account mt-4 md:mt-4" style={{}} onClick={(e) => {if (!isLoading) registerUser(e)}}>                                                
                                                {isLoading ? 'Please wait..' : 'Register'}
                                              </button> */}
                                            </div>

                                            

                                            
                                            
                                            <div className='mt-4'>
                                            <div className="mt-2">
                                            {/* <motion.div
                    className="text-black text-xs cursor-pointer mr-4  z-50"
                    onClick={() => setIsSignUpOpen(false)}
                    onMouseEnter={() => setHoveredMenuItem('ALREADY')}
                    onMouseLeave={() => setHoveredMenuItem('ALREADYX')}
                  >
                  <div style={{ position: 'relative' }} className=''>
<span id="already-text">Already have an account? Sign In</span>
      <div className={`absolute bg-black 
      ${hoveredMenuItem === 'ALREADY' ? 'transition-all duration-300' : hoveredMenuItem === "ALREADYX" ? 'transition-all duration-300' : ''}`} 
      style={{ width: menuWidthAlready, height: '2px', 
      left: hoveredMenuItem === 'ALREADY' ? 0 : 'auto',
      right: hoveredMenuItem === 'ALREADY' ? 0 : menuWidthAlready
       }} />
</div></motion.div> */}
                                              <a onClick={() => toggleAccountForSignIn()}>Already have an account? Sign In</a>
                                              </div>
                                            </div>


                                        {/* </form> */}
                                    </div>                                    
                                </div>
                            </div>


                        </div>



                       

                            </div> : 
<div className='col-span-8 px-2 h-full ' style={{ display: 'flex', flexDirection: 'column' }}>
                            {/* <div className='col-span-8 shadow-xl'> */}

                            <div className='flex justify-between items-center ml-4'>
            <motion.span
              variants={accountItemVariants}
              initial="hidden"
              animate={isAccountOpen ? "visible" : "hidden"}
              className="text-gray-900 text-sm font-bold cursor-pointer block my-4"
              // onClick={() => {navigateToOnSale();}}
            >
              SIGN IN
            </motion.span>
              {/* <CloseIcon onClick={toggleAccount} style={{ cursor: 'pointer' }} className="block h-8 w-auto my-4 mr-5"/> */}
              <ArrowRightAltIcon 
              onClick={toggleAccount} 
              className="block h-8 w-auto my-4 mr-5"
              
              style={{ cursor: 'pointer', width: isHoverSignIn ? '32px' : '44px', transition: 'width 0.3s ease' }} 
            onMouseEnter={handleHoverSignIn}
            onMouseLeave={handleLeaveSignIn}
            />
              
            </div>

            
            <hr style={{ borderColor: '#888888' }} className='ml-4'/>




                            <div className="m-2 mb-10  "
                        style={{ maxHeight: '50vh', overflowY: 'auto' }}
                        >
                            <div className="woocommerce mb-8">
                                <div className="woocommerce-notices-wrapper "/>
                                <div className="u-columns col2-set mx-4 mt-4" id="customer_login">
                                    <div className="u-column1 col-1 justify-center"  style={{ overflowY: 'auto' }}>
                                        {/* <h2>Login</h2> */}
                                        {/* <form className="woocommerce-form woocommerce-form-login login" method="post"> */}
                                            <div className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                {/* <label htmlFor="username">Username or email address&nbsp;<span
                                                    className="required">*</span></label> */}
                                                <input type="text"
                                                value={loginEmailAddress}
                                                placeholder="Enter your email"
                                                onChange={(e) => setLoginEmailAddress(e.target.value)}
                                                       className="woocommerce-Input woocommerce-Input--text input-text"
                                                       name="username" 
                                                       id="username" 
                                                       autoComplete="username"/>
                                            </div>
                                            <div className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide mt-4">
                                                {/* <label htmlFor="password">Password&nbsp;<span
                                                    className="required">*</span></label> */}
                                                <input className="woocommerce-Input woocommerce-Input--text input-text"
                                                value={loginPassword}
                                                placeholder="Enter your password"
                                                onChange={(e) => setLoginPassword(e.target.value)}
                                                       type="password" 
                                                       name="password" 
                                                       id="password"
                                                       autoComplete="current-password"/>
                                            </div>


                                            <div className='invisible'><div className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide mt-4">
        {/* <label htmlFor="reg_email">Email address&nbsp;<span className="required">*</span></label> */}
        <input value={emailAddress} 
        onChange={(e) => setLoginEmailAddress(e.target.value)}
        placeholder="Enter your email" 
        type="email" className="woocommerce-Input woocommerce-Input--text input-text" name="email" id="reg_email" autoComplete="email" />
    </div> <div className='my-2 text-sm' style={{ color: '#c2572b' }}>{errorMessage.message}</div>
                                            <p className='ml-2 mb-2 text-xs'>A link to set a new password will be sent to your email address.</p>
                                            <p className='ml-2 mb-2 text-xs'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                                            </div>



                                            <div className='my-2 text-sm' style={{ color: '#c2572b' }}>{errorMessage.message}</div>

                                            <div className='flex justify-between items-center flex-col md:flex-row '>
                                              <div className='flex flex-col justify-center'>
                                              <div className="md:mr-4">
                                                <input className="" name="" type="checkbox" id="" defaultValue="forever"/>
                                                <span className='ml-2'>Remember me</span>
                                              </div>
                                              <div className="woocommerce-LostPassword lost_password mt-1">
                                                <a href="#">Forgot password ?</a>
                                            </div>
                                              
                                              </div>

                                              <motion.div
                    className="text-black text-xs font-bold cursor-pointer mr-4  z-50"
                    onClick={(e) => {if (!isLoading) loginUser(e)}}
                    onMouseEnter={() => setHoveredMenuItem('SIGNIN')}
                    onMouseLeave={() => setHoveredMenuItem('SIGNINX')}
                  >
                  <div style={{ position: 'relative' }} className='text-lg'>
<span id="signin-text">{isLoading ? 'Please wait..' : 'Sign in'}</span>
      <div className={`absolute bg-black 
      ${hoveredMenuItem === 'SIGNIN' ? 'transition-all duration-300' : hoveredMenuItem === "SIGNINX" ? 'transition-all duration-300' : ''}`} 
      style={{ width: menuWidthSignin, height: '2px', 
      left: hoveredMenuItem === 'SIGNIN' ? 0 : 'auto',
      right: hoveredMenuItem === 'SIGNIN' ? 0 : menuWidthSignin
       }} />
</div></motion.div>

                                              {/* <button className="woocommerce-button-account mt-4 md:mt-4" style={{}} onClick={(e) => {if (!isLoading) loginUser(e)}}>                                                
                                                {isLoading ? 'Please wait..' : 'Sign in'}
                                              </button> */}
                                            </div>

                                            
                                            
                                            <div className='mt-4'>
                                            <div className="mt-2">
                                            {/* <motion.div
                    className="text-black text-xs cursor-pointer mr-4  z-50"
                    onClick={() => toggleAccountForSignUp()}
                    onMouseEnter={() => setHoveredMenuItem('DONT')}
                    onMouseLeave={() => setHoveredMenuItem('DONTX')}
                  >
                  <div style={{ position: 'relative' }} className=''>
<span id="dont-text">Don't have an account? Create Account</span>
      <div className={`absolute bg-black 
      ${hoveredMenuItem === 'DONT' ? 'transition-all duration-300' : hoveredMenuItem === "DONTX" ? 'transition-all duration-300' : ''}`} 
      style={{ width: menuWidthDont, height: '2px', 
      left: hoveredMenuItem === 'DONT' ? 0 : 'auto',
      right: hoveredMenuItem === 'DONT' ? 0 : menuWidthDont
       }} />
</div></motion.div> */}
                                              <a onClick={() => toggleAccountForSignUp()}>Don't have an account? Create Account</a> 
                                              </div>
                                            </div>


                                        {/* </form> */}
                                    </div>                                    
                                </div>
                            </div>


                        </div>



                       

                            </div>

                            }
                        </div>

                        
                        


                        



                    </div>

                    
                    
            </motion.span>

            
            
          </div>

          

          
        </ AccountContentInner>
    
    </AccountContent>
  </SlideInAccount>
{/* )} */}
    
      
        </div>
    );
}

export default AfricanaHeader;
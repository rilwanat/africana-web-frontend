import React from 'react';
import {useState, Fragment, useEffect} from 'react';

import CryptoJS from 'crypto-js';
import { AES } from 'crypto-js';


import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';

import axios from 'axios';


import AfricanaHeader from './AfricanaHeader';
import AfricanaFooter from './AfricanaFooter';

function CheckoutPage({ options, handleDataViewData, addToCart, updateCart, removeCartItem }) {
    const location = useLocation();
    const cart = location.state.encryptedData;
    const decryptedData = AES.decrypt(decodeURIComponent(cart), 'encryptionKey').toString(CryptoJS.enc.Utf8);
    const [parsedCart, setParsedCart] = useState(JSON.parse(decryptedData)); // State to store parsed cart

    // const [products, setProductsData] = useState([]);
    const [cartItems, setCartItems] = useState(parsedCart); // Define cartItems state variable

    const [isDataloading, setIsDataLoading] = useState(true);



    
    const [firstname, setFirstname] = useState("rb");
    const [lastname, setLastname] = useState("apps");
    const [email, setEmail] = useState("rilwan.at@gmail.com");
    const [phoneNumber, setPhoneNumber] = useState("09081537000");
    
    const [address1, setAddress1] = useState("No 31, Pope John Paul Street II");
    const [address2, setAddress2] = useState("");

    
    const [postalCode, setPostalCode] = useState("900001");
    
    const [city, setCity] = useState("Maitama");
    const [state, setState] = useState("Abuja");

    const [country, setCountry] = useState("Nigeria");
    const [orderNotes, setOrderNotes] = useState("");
    
    const [paymentMethod, setPaymentMethod] = useState("flutterwave");//);
    const [isLoading, setIsLoading] = useState(false);


    /**
     * states
     */
    const [showLogin, setShowLogin] = useState(false);
    const [showShowCoupon, setShowShowCoupon] = useState(false);


    let errorOrderItems = [];
    

    /**
     * Handle state
     */
    useEffect(() => {

        window.scrollTo(0, 0);
        

        
        // Update parsedCart when cartItems change
        setParsedCart(cartItems);
    }, [cartItems]);



    const HandleShowLoginStatus = (e) => {
        e.preventDefault();
        HandelCloseTabs();
        setShowLogin(!showLogin);
    };

    const HandelShowCouponStatus = (e) => {
        e.preventDefault();
        HandelCloseTabs();
        setShowShowCoupon(!showShowCoupon);
    };

    const HandelCloseTabs = () => {
        setShowLogin(false);
        setShowShowCoupon(false);
    };


    function findLowestPrice(product) {
        let lowestPrice = Infinity;
      
        //products.forEach(product => {
          product.productVariants.forEach(variant => {
            if (variant.price < lowestPrice) {
              lowestPrice = variant.price;
            }
          });
        //});
      
        return lowestPrice;
      }

    const calculateCartSubTotal = () => {
        let subTotal = 0;
        parsedCart.forEach((item) => {
            subTotal += findLowestPrice(item) * item.quantity;
        });
    
        // const taxRate = 0.075; // 7.5%
        // const calculatedTax = subTotal * taxRate;
        // setTax(calculatedTax);
    
        return subTotal;
    };
    
    const calculateCartTax = () => {
        let subTotal = 0;
        parsedCart.forEach((item) => {
            subTotal += findLowestPrice(item) * item.quantity;
        });
    
        const taxRate = 0.075; // 7.5%
        const calculatedTax = subTotal * taxRate;
        
        return calculatedTax;
    };

    const calculateGrandTotal = () => {
        return calculateCartSubTotal() + calculateCartTax();
    }
    


        const handlePaymentTypeChange = (p) => {
            setPaymentMethod(p);
        }


          // Function to validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  function createOrderItems(products) {
    // Initialize an array to store order items
    let orderItems = [];

    // Iterate through each product
    products.forEach(product => {
        // Find the product variant with the least quantity
        let minQuantityVariant = product.productVariants.reduce((minVariant, variant) => {
            return variant.quantity < minVariant.quantity ? variant : minVariant;
        });

        // Push the order item to the orderItems array
        orderItems.push({
            productVariantId: minQuantityVariant.id,
            // quantity: 1 // You can modify this quantity if needed
            quantity: product.quantity
        });

        errorOrderItems.push({
            productVariantId: minQuantityVariant.id,
            productName: product.name,
            // quantity: 1 // You can modify this quantity if needed
            quantity: product.quantity
        });
    });

    return orderItems;
}


  const payNow = async () => {

    //alert(paymentMethod);
    if (paymentMethod == "paystack" || paymentMethod == "") {
        alert("use flutterwave");
        return;
    }

     // Validate email before proceeding
     if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        //setRegistrationStatus("Invalid email address");
        //setIsModalOpen(true);
        return;
      }


    // Create an array to hold the names of required fields
    const requiredFields = [
        'firstname', 
        'lastname', 
        'email', 
        'phoneNumber', 
        'address1', 
        // 'postalCode', 
        'city', 
        // 'state', 
        // 'country', 
        'paymentMethod'
    ]; //

    // Check if any of the required fields are empty
    const emptyFields = requiredFields.filter(field => !eval(field));

    if (emptyFields.length > 0) {
        // Show an alert indicating the empty required fields
        alert(`Please fill in the remaining ${emptyFields.length} required fields: ${emptyFields.join(', ')}`);
        // alert(`Please fill in the following required fields: ${emptyFields.join(', ')}`);
        return;
    }

    setIsLoading(true);

    try {
        
        const requestData = {
            customer: {
                firstName: firstname,
                lastName: lastname,
                email: email,
                phone: phoneNumber,
                address1: address1,
                address2: address2,
                postalCode: postalCode,
                city: city,
                state: state,
                country: country
            },
            // orderItems: [
            //     {
            //         productVariantId: "2c09c57a-d367-43a8-a118-8c4fee26824b",
            //         quantity: 2
            //     },
            //     {
            //         productVariantId: "398eec1a-78c5-4864-88a1-66dc4f10cec9",
            //         quantity: 1
            //     }
            // ],
            orderItems: createOrderItems(parsedCart),
            taxId: 1,
            paymentMethod: paymentMethod
        };
        
        // alert(JSON.stringify(requestData));

        const response = await axios.post("http://144.149.167.72.host.secureserver.net:3000/api/v1/checkout", requestData, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        
        setIsLoading(false);

        
        if (response.data.status = "success") {
            alert("Success but https: on domain is required");
            // alert(JSON.stringify(response.data.data.link));

            const paymentLink = response.data.data.link;
            window.open(paymentLink, '_blank');
            // Clear fields if needed
            // clearFields();
        } else {
            alert("Payment Failed");
        }
    } catch (error) {
        setIsLoading(false);
        // if (error.response) {
        //     const errors = error.response.data.errors;
        //     errors.forEach(err => {
        //         alert(`Error: ${err.msg}`);
        //     });
        // } else {
        //     alert("An error occurred while processing your request.");
        // }

        
        // if (error.response) {
        //     const errors = error.response.data.errors;
        //     const cartItems = createOrderItems(parsedCart); // Get the cart items here
            
        //     errors.forEach(err => {
        //         const productName = getProductName(cartItems, err.value); // Get the product name from the cart items
        //         alert(`Error: ${err.msg} for product: ${productName}`);
        //     });
        // } else {
        //     alert("An error occurred while processing your request.");
        // }


        // if (error.response) {
        //     const errors = error.response.data.errors;
        //     const cartItems = createOrderItems(parsedCart); // Get the cart items here
            
        //     let errorMessage = "Errors occurred while processing your request:\n\n";
        
        //     errors.forEach(err => {
        //         const productName = getProductName(cartItems, err.value); // Get the product name from the cart items
        //         errorMessage += `Error: ${err.msg} for product: ${productName}\n\n`;
        //     });
        
        //     alert(errorMessage);
        // } else {
        //     alert("An error occurred while processing your request.");
        // }


        if (error.response && error.response.data && error.response.data.errors) {
            const errors = error.response.data.errors;
            const cartItems = errorOrderItems;//createOrderItems(parsedCart); // Get the cart items here
            
            let errorMessage = "Errors occurred while processing your request:\n\n";
        
            errors.forEach(err => {
                const productName = getProductName(cartItems, err.value); // Get the product name from the cart items
                errorMessage += `Error: ${err.msg} for product: ${productName}\n\n`;
            });
        
            alert(errorMessage);
        } else if (error.response && error.response.data && error.response.data.message) {
            // If there's an error message in the response data, display it
            alert(error.response.data.message);
        } else {
            alert("An error occurred while processing your request.");
        }
        
    }
};

function getProductName(cartItems, productVariantId) {
    const cartItem = cartItems.find(item => item.productVariantId === productVariantId);
    return cartItem ? cartItem.productName : "Unknown Product";
}


    return (
        <div>
            <div className='bg-black'><AfricanaHeader options={options} cart={cart} removeCartItem={removeCartItem} /></div>

            <AfricanaFooter />
        </div>
    );
}

export default CheckoutPage;
import React from 'react';
import {useState, Fragment, useEffect} from 'react';

import CryptoJS from 'crypto-js';
import { AES } from 'crypto-js';


import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';

import axios from 'axios';

import BillingFields from './BillingFields';
import ShippingFields from './ShippingFields';


import AfricanaHeader from './AfricanaHeader';
import AfricanaFooter from './AfricanaFooter';

import FrequentlyBoughtTogether from './FrequentlyBoughtTogether';

function CheckoutPage({ options, handleDataViewData, addToCart, updateCart, removeCartItem, clearCart, removeAllCartItem, handleEmailAddress  }) {
    const location = useLocation();
    const cart = location.state.encryptedData;
    const decryptedData = AES.decrypt(decodeURIComponent(cart), 'encryptionKey').toString(CryptoJS.enc.Utf8);
    const [parsedCart, setParsedCart] = useState(JSON.parse(decryptedData)); // State to store parsed cart

    // const [products, setProductsData] = useState([]);
    const [cartItems, setCartItems] = useState(parsedCart); // Define cartItems state variable

    const [isDataloading, setIsDataLoading] = useState(true);



    
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");

    
    const [postalCode, setPostalCode] = useState("");
    
    const [city, setCity] = useState("");
    const [state, setState] = useState("");

    const [country, setCountry] = useState("");
    const [orderNotes, setOrderNotes] = useState("");
    
    const [paymentMethod, setPaymentMethod] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    /**
     * states
     */
    const [showLogin, setShowLogin] = useState(false);
    const [showShowCoupon, setShowShowCoupon] = useState(false);


    let errorOrderItems = [];


    const [relatedProducts, setRelatedProductsData] = useState([]);
    

    /**
     * Handle state
     */
    useEffect(() => {

        window.scrollTo(0, 0);
        

        handleData();
        
        // Update parsedCart when cartItems change
        setParsedCart(cartItems);
    }, [cartItems]);


    const handleData = async () => {    
        setIsDataLoading(true);
        try {
    
          const response = await axios.get('http://144.149.167.72.host.secureserver.net:3000/api/v1/products', {
            headers: {
              "Content-Type": "application/json",
              //Authorization: `Bearer ${token}`,
            },
          });
    
          setIsDataLoading(false);
    
          if (response.data.success) {
    
            setRelatedProductsData(response.data.products);
          } else {
           // alert("error: " + response.data.message);
          }
    
        } catch (error) {
          setIsDataLoading(false);
          //alert("error: " + error);
        }
      };

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

            clearCart();

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
            <div className='bg-black'><AfricanaHeader options={options} cart={parsedCart} removeCartItem={removeCartItem} removeAllCartItem={removeAllCartItem}  handleEmailAddress={handleEmailAddress}/></div>


            <section className="checkout-section section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="woocommerce">
                                {/* <div className="woocommerce-info">
                                    Returning customer?
                                    <a onClick={HandleShowLoginStatus}  className="showlogin ml-1" style={{ cursor: 'pointer' }}>Click
                                        here to login
                                    </a>
                                </div>
                                {
                                    showLogin ?
                                        <form method="post" className="login">
                                            <p>If you have shopped with us before, please enter your details in the
                                                boxes below. If you are a new customer, please proceed to the
                                                Billing &amp; Shipping section.</p>
                                            <p className="form-row form-row-first">
                                                <label htmlFor="username">Username or email <span
                                                    className="required">*</span></label>
                                                <input type="text" className="input-text" name="username"
                                                       id="username"/>
                                            </p>
                                            <p className="form-row form-row-last">
                                                <label htmlFor="password">Password <span
                                                    className="required">*</span></label>
                                                <input className="input-text" type="password" name="password"
                                                       id="password"/>
                                            </p>
                                            <div className="clear"/>
                                            <p className="form-row">
                                                <input type="hidden" id="_wpnonce" name="_wpnonce"
                                                       defaultValue="94dfaf2ac1"/>
                                                <input type="hidden" name="_wp_http_referer"
                                                       defaultValue="/wp/?page_id=6"/>
                                                <input type="submit" className="button" name="login"
                                                       defaultValue="Login"/>
                                                <input type="hidden" name="redirect"
                                                       defaultValue=""/>
                                                <label htmlFor="rememberme" className="inline">
                                                    <input name="rememberme" type="checkbox" id="rememberme"
                                                           defaultValue="forever"/> Remember me </label>
                                            </p>
                                            <p className="lost_password">
                                                <a href="">Lost your
                                                    password?</a>
                                            </p>
                                            <div className="clear"/>
                                        </form>
                                        : ''
                                } */}

                                {/* <div className="woocommerce-info">Have a coupon? 
                                <a onClick={HandelShowCouponStatus} className="showcoupon ml-1" style={{ cursor: 'pointer' }}>Click here to enter your code</a>
                                </div>
                                {
                                    showShowCoupon
                                        ?
                                        <form className="checkout_coupon" method="post">
                                            <p className="form-row form-row-first">
                                                <input type="text" name="coupon_code" className="input-text"
                                                       placeholder="Coupon code" id="coupon_code"/>
                                            </p>
                                            <p className="form-row form-row-last">
                                                <input type="submit" className="button" name="apply_coupon"
                                                       defaultValue="Apply Coupon"/>
                                            </p>
                                            <div className="clear"/>
                                        </form>
                                        : ''
                                } */}

                                <form name="checkout" 
                                // method="post" 
                                className="checkout woocommerce-checkout"
                                    //   action="" encType="multipart/form-data"
                                      >



<div className="col2-set" id="customer_details">
    <div className="col-1">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Billing Details</h3>
            </div>
            <div className="border-t border-gray-200">
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 px-4 py-5 sm:grid-cols-3 sm:px-6">
                    <div>
                        <label htmlFor="billing_first_name" className="block text-sm font-medium text-gray-700">
                            First name
                        </label>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                            placeholder="Enter your first name"
                            onChange={(e) => setFirstname(e.target.value)}
                            value={firstname}
                        />
                    </div>
                    <div>
                        <label htmlFor="billing_last_name" className="block text-sm font-medium text-gray-700">
                            Last name
                        </label>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                            placeholder="Enter your last name"
                            onChange={(e) => setLastname(e.target.value)}
                            value={lastname}
                        />
                    </div>
                    <div>
                        <label htmlFor="billing_email" className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                            placeholder="Enter email address"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div>
                        <label htmlFor="billing_phone" className="block text-sm font-medium text-gray-700">
                            Phone
                        </label>
                        <input
                            type="tel"
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                            placeholder="Enter phone number"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            value={phoneNumber}
                        />
                    </div>
                    <div>
                        <label htmlFor="billing_address_1" className="block text-sm font-medium text-gray-700">
                            Street address
                        </label>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                            placeholder="Street address"
                            onChange={(e) => setAddress1(e.target.value)}
                            value={address1}
                        />
                    </div>
                    <div>
                        <label htmlFor="billing_address_2" className="block text-sm font-medium text-gray-700">
                            (optional) Address
                        </label>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                            placeholder="Apartment, Suite, Unit etc."
                            onChange={(e) => setAddress2(e.target.value)}
                            value={address2}
                        />
                    </div>
                    <div>
                        <label htmlFor="billing_city" className="block text-sm font-medium text-gray-700">
                            City
                        </label>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                            placeholder="City"
                            onChange={(e) => setCity(e.target.value)}
                            value={city}
                        />
                    </div>
                    <div>
                        <label htmlFor="billing_postcode" className="block text-sm font-medium text-gray-700">
                            Postcode / ZIP
                        </label>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                            placeholder="Postalcode"
                            onChange={(e) => setPostalCode(e.target.value)}
                            value={postalCode}
                        />
                    </div>
                    <div>
                        <label htmlFor="billing_state" className="block text-sm font-medium text-gray-700">
                            State
                        </label>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                            placeholder="State"
                            onChange={(e) => setState(e.target.value)}
                            value={state}
                        />
                    </div>
                    <div>
                        <label htmlFor="billing_country" className="block text-sm font-medium text-gray-700">
                            Country
                        </label>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                            placeholder="Country"
                            onChange={(e) => setCountry(e.target.value)}
                            value={country}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>


    {/* Include ShippingFields component or code here if needed */}
    <ShippingFields/>
</div>




                                    
                                    <h3 id="order_review_heading">Your order</h3>
                                    <div id="order_review" className="woocommerce-checkout-review-order">
                                        
                                        
                                    <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
        <tr>
            {/* <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th> */}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item{parsedCart.length > 1 ? 's (' + parsedCart.length + ')' :'(' + parsedCart.length + ')'}</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
        </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
        {parsedCart.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                {/* <td className="px-3 py-4 text-left whitespace-nowrap">
                    <span className="text-sm text-gray-900">{index}</span>
                </td> */}
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.quantity}</div>
                </td>
                <td className="px-6 py-4 text-right whitespace-nowrap">
                    <span className="text-sm text-gray-900">{'₦'}{findLowestPrice(item).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </td>
            </tr>
        ))}
    </tbody>
    <tfoot className="bg-gray-50">
        <tr className="bg-white divide-y divide-gray-200">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subtotal</th>
            <td className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                <span className="text-sm text-gray-900">{'₦'}{calculateCartSubTotal().toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </td>
        </tr>
        {/* You can add more rows here for additional details */}
        <tr className="bg-white divide-y divide-gray-200">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tax (7.5%)</th>
            <td className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                <span className="text-sm text-gray-900">{'₦'}{calculateCartTax().toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </td>
        </tr>
        <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
            <td className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                <span className="text-sm text-gray-900">{'₦'}{calculateGrandTotal().toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </td>
        </tr>
    </tfoot>
</table>














                                        <div id="payment" className="flex flex-col items-start justify-center">
                                               
                                            
<label className='flex items-center cursor-pointer' style={{ height: '32px', textAlign: 'center' }}>
    <input
        type="radio"
        name="flutterwaveOption"
        value="flutterwave"
        className='mr-2 flex items-center' 
        checked={paymentMethod === 'flutterwave'} // Check if this option is selected
       onChange={() => handlePaymentTypeChange("flutterwave")}
    />&nbsp;&nbsp;Flutterwave
</label>


<label className='flex items-center cursor-pointer' style={{ height: '32px', textAlign: 'center' }}>
    <input
        type="radio"
        name="paystackOption"
        value="paystack"
        className='mr-2 flex items-center' 
        checked={paymentMethod === 'paystack'} // Check if this option is selected
        onChange={() => handlePaymentTypeChange("paystack")}
    />&nbsp;&nbsp;Paystack
</label>

                                            
                                            <div className="form-row place-order">

                                                {/* <NoscriptSnippet/> */}
                                                       
                                                       <div className="slide-btns mt-2" style={{ cursor: 'pointer' }} onClick={payNow}><div className="theme-btn-s5">{isLoading ? 'Please wait..' : 'Checkout'}</div>
                                                        </div>

                                                       
                                                       </div>
                                        </div>



                                        {/* <div className="row mt-4">
                        <div className="col col-xs-12">
                            <FrequentlyBoughtTogether onQuickViewClick={null} relatedProducts={relatedProducts} addToCart={addToCart} cart={cart}/>
                            <FrequentlyBoughtTogether addToCart={addToCart} cart={cart} removeCartItem={removeCartItem}/>
                            
                        </div>
                    </div> */}


                                    </div>


                                </form>


                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="row -mt-44 mb-8">
                        <div className="col col-xs-12">
                            {/* <FrequentlyBoughtTogether onQuickViewClick={null} relatedProducts={relatedProducts} addToCart={addToCart} cart={cart}/> */}
                            <FrequentlyBoughtTogether addToCart={addToCart} cart={cart} removeCartItem={removeCartItem}/>
                            
                        </div>
                    </div>


            
            <AfricanaFooter />
        </div>
    );
}

export default CheckoutPage;
import React from 'react';
import {useState, Fragment} from 'react';
import Footer from '../Footer';
// import Instagram from '../../components/global/Instagram';
import Header from '../header/Header';
// import PageTitle from '../../components/global/PageTitle';

import BillingFields from './BillingFields';
import ShippingFields from './ShippingFields';
// import NoscriptSnippet from "../../components/global/NoscriptSnippet";


import CryptoJS from 'crypto-js';
import { AES } from 'crypto-js';


import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';

import axios from 'axios';


/**
 * Checkout page
 * @param options
 * @returns {*}
 * @constructor
 */
function Checkout({ options }) {

    const location = useLocation();
    const cart = location.state.encryptedData;



    
    const [firstname, setFirstname] = useState("");//rb");
    const [lastname, setLastname] = useState("");//apps");
    const [email, setEmail] = useState("");//rilwan.at@gmail.com");
    const [phoneNumber, setPhoneNumber] = useState("");//09081537000");
    
    const [address1, setAddress1] = useState("");//No 31, Pope John Paul Street II");
    const [address2, setAddress2] = useState("");

    
    const [postalCode, setPostalCode] = useState("");//900001");
    
    const [city, setCity] = useState("");//Maitama");
    const [state, setState] = useState("");//Abuja");

    const [country, setCountry] = useState("");//Nigeria");
    const [orderNotes, setOrderNotes] = useState("");
    
    const [paymentMethod, setPaymentMethod] = useState("flutterwave");//);
    const [isLoading, setIsLoading] = useState(false);


    /**
     * states
     */
    const [showLogin, setShowLogin] = useState(false);
    const [showShowCoupon, setShowShowCoupon] = useState(false);


    // const { cart } = useParams();
    const decryptedData = AES.decrypt(decodeURIComponent(cart), 'encryptionKey').toString(CryptoJS.enc.Utf8);
    const parsedCart = JSON.parse(decryptedData);

    /**
     * Handle state
     */
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


  const payNow = async () => {

    if (paymentMethod == "paystack") {
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
            orderItems: [
                {
                    productVariantId: "2c09c57a-d367-43a8-a118-8c4fee26824b",
                    quantity: 2
                },
                {
                    productVariantId: "398eec1a-78c5-4864-88a1-66dc4f10cec9",
                    quantity: 1
                }
            ],
            taxId: 1,
            paymentMethod: paymentMethod
        };
        
        const response = await axios.post("http://144.149.167.72.host.secureserver.net:3000/checkout", requestData, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        
        setIsLoading(false);
        if (response.data.success) {
            alert("Success");
            // Clear fields if needed
            // clearFields();
        } else {
            alert("Registration Failed");
        }
    } catch (error) {
        setIsLoading(false);
        alert("Error: " + error);
    }
};

          

    return (
        <Fragment>
            <Header options={options} />

            {/* <PageTitle name="Checkout"/> */}

            {/* start checkout-section */}
            <section className="checkout-section section-padding-medium">
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

                                <form name="checkout" method="post" 
                                className="checkout woocommerce-checkout"
                                      action="" encType="multipart/form-data">



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
                            First Name
                        </label>
                        <input
                            type="text"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            placeholder="Enter First Name"
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="billing_last_name" className="block text-sm font-medium text-gray-700">
                            Last Name
                        </label>
                        <input
                            type="text"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            placeholder="Enter Last Name"
                            onChange={(e) => setLastname(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="billing_email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            placeholder="Enter Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="billing_phone" className="block text-sm font-medium text-gray-700">
                            Phone
                        </label>
                        <input
                            type="tel"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            placeholder="Enter Phone Number"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="billing_address_1" className="block text-sm font-medium text-gray-700">
                            Address
                        </label>
                        <input
                            type="text"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            placeholder="Street Address"
                            onChange={(e) => setAddress1(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="billing_address_2" className="block text-sm font-medium text-gray-700">
                            (optional) Address
                        </label>
                        <input
                            type="text"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            placeholder="Apartment, Suite, Unit etc."
                            onChange={(e) => setAddress2(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="billing_city" className="block text-sm font-medium text-gray-700">
                            City
                        </label>
                        <input
                            type="text"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            placeholder="City"
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="billing_postcode" className="block text-sm font-medium text-gray-700">
                            Postcode / ZIP
                        </label>
                        <input
                            type="text"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            placeholder="Postal Code"
                            onChange={(e) => setPostalCode(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="billing_state" className="block text-sm font-medium text-gray-700">
                            State
                        </label>
                        <input
                            type="text"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            placeholder="State"
                            onChange={(e) => setState(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="billing_country" className="block text-sm font-medium text-gray-700">
                            Country
                        </label>
                        <input
                            type="text"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            placeholder="Country"
                            onChange={(e) => setCountry(e.target.value)}
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
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
        </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
        {parsedCart.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.quantity}</div>
                </td>
                <td className="px-6 py-4 text-right whitespace-nowrap">
                    <span className="text-sm text-gray-900">N{findLowestPrice(item)}</span>
                </td>
            </tr>
        ))}
    </tbody>
    <tfoot className="bg-gray-50">
        <tr className="bg-white divide-y divide-gray-200">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subtotal</th>
            <td className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                <span className="text-sm text-gray-900">N{calculateCartSubTotal()}</span>
            </td>
        </tr>
        {/* You can add more rows here for additional details */}
        <tr className="bg-white divide-y divide-gray-200">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tax</th>
            <td className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                <span className="text-sm text-gray-900">N{calculateCartTax()}</span>
            </td>
        </tr>
        <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
            <td className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                <span className="text-sm text-gray-900">N{calculateGrandTotal()}</span>
            </td>
        </tr>
    </tfoot>
</table>














                                        <div id="payment" className="woocommerce-checkout-payment flex flex-col items-start">
                                               
                                            
                                        <label style={{ flex: '1', textAlign: 'center' }}>
    <input
        type="radio"
        name="option"
        value="flutterwave"
        className='mr-2' 
        // checked={genType === 'qrCodeOnly'} // Check if this option is selected
       onChange={() => handlePaymentTypeChange("flutterwave")}
    />&nbsp;&nbsp;Flutterwave
</label>


<label style={{ flex: '1', textAlign: 'center' }}>
    <input
        type="radio"
        name="option"
        value="paystack"
        className='mr-2' 
        // checked={genType === 'qrCodeOnly'} // Check if this option is selected
        onChange={() => handlePaymentTypeChange("paystack")}
    />&nbsp;&nbsp;Paystack
</label>

                                            
                                            <div className="form-row place-order">

                                                {/* <NoscriptSnippet/> */}
                                                       
                                                       <div className="slide-btns mt-2" style={{ cursor: 'pointer' }} onClick={payNow}><div className="theme-btn-s5">{isLoading ? 'Please wait..' : 'Pay Now'}</div>
                                                        </div>

                                                       
                                                       </div>
                                        </div>
                                    </div>


                                </form>


                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end checkout-section */}

            {/* <Instagram/> */}
            <Footer/>

        </Fragment>
    );
}

export default Checkout;
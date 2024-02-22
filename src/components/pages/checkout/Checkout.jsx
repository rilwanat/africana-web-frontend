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

     // Validate email before proceeding
     if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        //setRegistrationStatus("Invalid email address");
        //setIsModalOpen(true);
        return;
      }


    // Create an array to hold the names of required fields
    const requiredFields = ['firstname', 'lastname', 'email', 'phoneNumber', 'address1', 'postalCode', 'city', 'paymentMethod']; //'state', 'country', 

    // Check if any of the required fields are empty
    const emptyFields = requiredFields.filter(field => !eval(field));

    if (emptyFields.length > 0) {
        // Show an alert indicating the empty required fields
        alert(`Please fill in the following required fields: ${emptyFields.join(', ')}`);
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

                                <form name="checkout" method="post" className="checkout woocommerce-checkout"
                                      action="/?page_id=6" encType="multipart/form-data">
                                    <div className="col2-set" id="customer_details">
                                    <div className="col-1">
                <div className="woocommerce-billing-fields">
                    <h3>Billing Details</h3>

                    <p className="form-row form-row form-row-first validate-required" id="billing_first_name_field">
                        <label htmlFor="billing_first_name">
                            First Name <abbr className="required" title="required">*</abbr>
                        </label>
                        <input
                            type="text"
                            className="input-text"
                            name="billing_first_name"
                            id="billing_first_name"
                            placeholder="Enter firstname"
                            autoComplete="given-name"
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                    </p>
                    <p className="form-row form-row form-row-last validate-required" id="billing_last_name_field">
                        <label htmlFor="billing_last_name">
                            Last Name <abbr className="required" title="required">*</abbr>
                        </label>
                        <input
                            type="text"
                            className="input-text"
                            name="billing_last_name"
                            id="billing_last_name"
                            placeholder="Enter lastname"
                            autoComplete="family-name"
                            onChange={(e) => setLastname(e.target.value)}
                        />
                    </p>
                    <div className="clear" />

                    <p className="form-row form-row form-row-first validate-required validate-email" id="billing_email_field">
                        <label htmlFor="billing_email">
                            Email Address <abbr className="required" title="required">*</abbr>
                        </label>
                        <input
                            type="email"
                            className="input-text"
                            name="billing_email"
                            id="billing_email"
                            placeholder="Enter email address"
                            autoComplete="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </p>
                    <p className="form-row form-row form-row-last validate-required validate-phone" id="billing_phone_field">
                        <label htmlFor="billing_phone">Phone <abbr className="required" title="required">*</abbr></label>
                        <input
                            type="tel"
                            className="input-text"
                            name="billing_phone"
                            id="billing_phone"
                            placeholder="Enter phone number"
                            autoComplete="tel"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </p>

                    <div className="clear" />

                    <p className="form-row form-row form-row-wide address-field validate-required" id="billing_address_1_field">
                        <label htmlFor="billing_address_1">Address <abbr className="required" title="required">*</abbr></label>
                        <input
                            type="text"
                            className="input-text"
                            name="billing_address_1"
                            id="billing_address_1"
                            placeholder="Street address"
                            autoComplete="address-line1"
                            onChange={(e) => setAddress1(e.target.value)}
                        />
                    </p>
                    <p className="form-row form-row form-row-wide address-field" id="billing_address_2_field">
                        <input
                            type="text"
                            className="input-text"
                            name="billing_address_2"
                            id="billing_address_2"
                            placeholder="Apartment, suite, unit etc. (optional)"
                            autoComplete="address-line2"
                            onChange={(e) => setAddress1(e.target.value)}
                        />
                    </p>
                    <p className="form-row form-row address-field validate-postcode validate-required form-row-first woocommerce-invalid-required-field" id="billing_city_field">
                        <label htmlFor="billing_city">City <abbr className="required" title="required">*</abbr></label>
                        <input
                            type="text"
                            className="input-text"
                            name="billing_city"
                            id="billing_city"
                            placeholder="Billing city"
                            autoComplete="billing-city"
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </p>
                    <p className="form-row form-row form-row-last address-field validate-required validate-postcode" id="billing_postcode_field">
                        <label htmlFor="billing_postcode">Postcode / ZIP <abbr className="" title=""></abbr></label>
                        <input
                            type="text"
                            className="input-text"
                            name="billing_postcode8"
                            id="billing_postcode"
                            placeholder="Postal code"
                            autoComplete="postal-code"
                            onChange={(e) => setPostalCode(e.target.value)}
                        />
                    </p>
                    <p className="form-row form-row form-row-wide address-field update_totals_on_change validate-required" id="billing_state_field">
                        <label htmlFor="billing_state">State <abbr className="required" title="required">*</abbr></label>
                        <select name="billing_state" id="billing_state" autoComplete="state" className="state_to_state state_select">
                            <option>Select state </option>
                            {/* {state.map((item, index) => (
                                <option key={index} value={item.code}>{item.name}</option>
                            ))} */}
                            <option key='state' value='state'>State</option>
                        </select>
                    </p>
                    <p className="form-row form-row form-row-wide address-field update_totals_on_change validate-required" id="billing_country_field">
                        <label htmlFor="billing_country">Country <abbr className="required" title="required">*</abbr></label>
                        <select name="billing_country" id="billing_country" autoComplete="country" className="country_to_state country_select">
                            <option>Select country </option>
                            {/* {countries.map((item, index) => (
                                <option key={index} value={item.code}>{item.name}</option>
                            ))} */}
                            <option key='country' value='country'>Country</option>
                        </select>
                    </p>
                    <div className="clear" />
                </div>
            </div>
                                        {/* <BillingFields/> */}
                                        
                                        <ShippingFields/>
                                    </div>
                                    <h3 id="order_review_heading">Your order</h3>
                                    <div id="order_review" className="woocommerce-checkout-review-order">
                                        <table className="shop_table woocommerce-checkout-review-order-table">
                                            <thead>
                                            <tr>
                                                <th className="product-name">Product</th>
                                                <th className="product-total text-right">Total</th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            {
                                                parsedCart.map((item, index) => (
                                                    <tr key={index} className="cart_item">
                                                        <td className="product-name">
                                                            {item.name} &nbsp; <strong className="product-quantity">x
                                                            {item.quantity}</strong></td>
                                                        <td className="product-total text-right">
                                                        <span className="woocommerce-Price-amount amount"><span
                                                            className="woocommerce-Price-currencySymbol">N</span>{findLowestPrice(item)}</span>
                                                        </td>
                                                    </tr>
                                                ))
                                            }

                                            </tbody>
                                            <tfoot>
                                            <tr className="cart-subtotal">
                                                <th>Subtotal</th>
                                                <td className="text-right"><span className="woocommerce-Price-amount amount"><span
                                                    className="woocommerce-Price-currencySymbol">N</span>{calculateCartSubTotal()}</span>
                                                </td>
                                            </tr>
                                            {/* <tr className="shipping">
                                                <th>Shipping</th>
                                                <td data-title="Shipping">
                                                    {"-"}
                                                    <input type="hidden" name="shipping_method[0]" data-index={0}
                                                           id="shipping_method_0" defaultValue="free_shipping:1"
                                                           className="shipping_method"/>
                                                </td>
                                            </tr> */}
                                            <tr className="cart-subtotal" 
                    // style={{ textAlign: 'right' }}
                    >
                        <th>Tax</th>
                        <td className="text-right" data-title="Subtotal">
                            <span className="woocommerce-Price-amount amount">
                                    <span className="woocommerce-Price-currencySymbol">
                                        N
                                    </span>{calculateCartTax()}
                            </span>
                        </td>
                    </tr>
                                            <tr className="order-total">
                                                <th>Total</th>
                                                <td className="text-right"><strong><span className="woocommerce-Price-amount amount"><span
                                                    className="woocommerce-Price-currencySymbol">N</span>{calculateGrandTotal()}</span></strong>
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
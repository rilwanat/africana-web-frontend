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


import { Link, useNavigate, useParams } from 'react-router-dom';

/**
 * Checkout page
 * @param options
 * @returns {*}
 * @constructor
 */
function Checkout({ options }) {

    /**
     * states
     */
    const [showLogin, setShowLogin] = useState(false);
    const [showShowCoupon, setShowShowCoupon] = useState(false);


    const { cart } = useParams();
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
    
        let countCartItem = 1;//indexOfFirstItem + 1;


        const payNow = () => {
            // options.onMiniCartClick();
            // const encryptedData = AES.encrypt(JSON.stringify(cart), 'encryptionKey').toString();
            // navigate(`/checkout/${encodeURIComponent(encryptedData)}`);
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
                                <div className="woocommerce-info">
                                    Returning customer?
                                    <a onClick={HandleShowLoginStatus} href="#" className="showlogin">Click
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
                                }

                                <div className="woocommerce-info">Have a coupon? 
                                <a onClick={HandelShowCouponStatus} href="#" className="showcoupon">Click here to enter your code</a>
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
                                }

                                <form name="checkout" method="post" className="checkout woocommerce-checkout"
                                      action="/?page_id=6" encType="multipart/form-data">
                                    <div className="col2-set" id="customer_details">
                                        <BillingFields/>
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
              <input type="radio" name="option" value="fluterwave" className='mr-2' 
            //   checked={genType === 'qrCodeOnly'} // Check if this option is selected
            //   onChange={handleOptionChange}
              />
            Flutterwave
            </label>

            <label style={{ flex: '1', textAlign: 'center' }}>
              <input type="radio" name="option" value="paystack" className='mr-2' 
            //   checked={genType === 'qrCodeOnly'} // Check if this option is selected
            //   onChange={handleOptionChange}
              />
              Paystack
            </label>
                                            
                                            <div className="form-row place-order">

                                                {/* <NoscriptSnippet/> */}
                                                       
                                                       <div className="slide-btns mt-2" style={{ cursor: 'pointer' }} onClick={payNow}><div className="theme-btn-s5">Pay Now</div>
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
import React, {Fragment, useState} from 'react';
// import countries from "../../data/countries";
import { Link, useNavigate } from "react-router-dom";

import CryptoJS from 'crypto-js';
import { AES } from 'crypto-js';

function CalculatedShipping({currencySymbol, price, tax, options, cart}) {

    const navigate = useNavigate();

    const onClickSubmit = (e) => {
        e.preventDefault();
    };
    
    const calculateGrandTotal = () => {
        let grandTotal = price + tax;
    return grandTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

    };

    const navigateToCheckOut = () => {
        //options.onMiniCartClick();
        const encryptedData = AES.encrypt(JSON.stringify(cart), 'encryptionKey').toString();
        // navigate(`/checkout/${encodeURIComponent(encryptedData)}`);
        navigate('/checkout', { state: { encryptedData } });
      };

    return (
        <Fragment>
            <div className="cart_totals calculated_shipping">
                <h3>Cart Totals</h3>
                <table className="shop_table shop_table_responsive">
                    <tbody>
                    <tr className="cart-subtotal" 
                    // style={{ textAlign: 'right' }}
                    >
                        <th>Subtotal</th>
                        <td data-title="Subtotal">
                            <span className="woocommerce-Price-amount amount">
                                    <span className="woocommerce-Price-currencySymbol">
                                        {currencySymbol}
                                    </span>{price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </span>
                        </td>
                    </tr>
                    <tr className="cart-subtotal" 
                    // style={{ textAlign: 'right' }}
                    >
                        <th>Tax</th>
                        <td data-title="Subtotal">
                            <span className="woocommerce-Price-amount amount">
                                    <span className="woocommerce-Price-currencySymbol">
                                        {currencySymbol}
                                    </span>{tax.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </span>
                        </td>
                    </tr>
                    
                    <tr className="order-total" 
                    // style={{ textAlign: 'right' }}
                    >
                        <th>Total</th>
                        <td data-title="Total">
                            <strong>
                                <span className="woocommerce-Price-amount amount">
                                <span className="woocommerce-Price-currencySymbol">{currencySymbol}</span>{calculateGrandTotal()}</span>
                            </strong>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className="wc-proceed-to-checkout">
                    {/* <Link className="checkout-button button alt wc-forward" onClick={navigateToCheckOut}>Proceed to Checkout</Link> */}
                    <div className="checkout-btn button"style={{ cursor: 'pointer' }} onClick={navigateToCheckOut}>Proceed to Checkout</div>
                </div>
            </div>
        </Fragment>
    );
}

export default CalculatedShipping;
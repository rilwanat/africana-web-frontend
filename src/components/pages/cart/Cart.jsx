import React, {Fragment, useState, useEffect} from 'react';

import Footer from '../Footer';
// import Instagram from '../Instagram';
// import PageTitle from '../../components/global/PageTitle';
import Header from '../header/Header';
// import CartItem from "./CartItem";
import Coupon from "./Coupon";
import CalculatedShipping from "./CalculatedShipping";

import {Link, NavLink} from "react-router-dom";

import './cart.css';

/**
 * Cart page
 * @param options
 * @returns {*}
 * @constructor
 */
function Cart({ options }) {

    
    const [tax, setTax] = useState(0);
    
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    useEffect(() => {
        // Initialize cart state from local storage when component mounts
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);

        // Update local storage whenever the cart state changes
        //localStorage.setItem('cart', JSON.stringify(cart));

        
    // }, [cart]);
}, []);

// Function to find the lowest price among product variants
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
  
const calculateTotal = (item) => {
    // var p = findLowestPrice(item);
    // return item.price * item.quantity;
    // return p * item.quantity;

    return findLowestPrice(item) * item.quantity;


};

const calculateCartSubTotal = () => {
    let subTotal = 0;
    cart.forEach((item) => {
        subTotal += findLowestPrice(item) * item.quantity;
    });

    // const taxRate = 0.075; // 7.5%
    // const calculatedTax = subTotal * taxRate;
    // setTax(calculatedTax);

    return subTotal;
};

const calculateCartTax = () => {
    let subTotal = 0;
    cart.forEach((item) => {
        subTotal += findLowestPrice(item) * item.quantity;
    });

    const taxRate = 0.075; // 7.5%
    const calculatedTax = subTotal * taxRate;
    
    return calculatedTax;
};

    let countCartItem = 1;//indexOfFirstItem + 1;

    return (
        <Fragment>
            <Header options={options} />

            {/* <PageTitle name="Cart"/> */}

            {/* start cart-section */}
            <section className="cart-section woocommerce-cart section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="woocommerce">
                                <form action="/" method="post">
                                    <table className="shop_table shop_table_responsive cart">
                                        <thead>
                                        <tr>
                                            <th className="product-remove">&nbsp;</th>
                                            <th className="product-thumbnail">&nbsp;</th>
                                            <th className="product-name">Product</th>
                                            <th className="product-price">Price</th>
                                            <th className="product-quantity">Quantity</th>
                                            <th className="product-subtotal">Total</th>
                                        </tr>
                                        </thead>
                                        <tbody>

                                        {cart.map((cartItem) => (
                        <tr key={cartItem.id} 
                        // onClick={(e) => handleRowClick(cartItem, e)} 
                        style={{ cursor: "pointer" }}>
                            <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                        {countCartItem++}
                        </td>
                        <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                        image{/* {countInstitutions++} */}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          {cartItem.name}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          N{findLowestPrice(cartItem)}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          {cartItem.quantity}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        N{calculateTotal(cartItem)}
                        </td>
                        {/* <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <span className="mr-4" style={{ color: 'green' }} onClick={(e) => handleEditOnClick(institution, e)} ><EditIcon /></span>
                          <span className="mr-4" 
                          style={{ color:  institution.status === 'active' ? 'green' : 'red' }} onClick={(e) => handleChangeDataClick(institution, e)} >{ institution.status === 'active' ? <ToggleOnIcon /> : <ToggleOffIcon />}</span>
                          <span className="" style={{ color: 'green' }}>More</span>
                          
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 " >
                          <div className="text-center px-2 py-1" style={{ 
                            borderRadius: '10px', 
                            color: institution.status === 'active' ? 'green' : 'red',
                            background: '#eeeeee' }}>{institution.status}
                            </div>
                        </td> */}
                      </tr>
                    ))}


                                        {/* <Coupon/> */}
                                        </tbody>
                                    </table>
                                </form>
                                <div className="cart-collaterals">
                                    <CalculatedShipping currencySymbol="N" price={calculateCartSubTotal()} tax={calculateCartTax()}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end cart-section */}

            {/* <Instagram/> */}
            <Footer/>
        </Fragment>
    );
}

export default Cart;
import React, { Fragment, useState, useEffect } from 'react';

// import Coupon from "./Coupon";
import CalculatedShipping from "./CalculatedShipping";
import SimilarProducts from './SimilarProducts';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import './cart.css';
import CryptoJS from 'crypto-js';
import { AES } from 'crypto-js';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


import AfricanaHeader from './AfricanaHeader';
import AfricanaFooter from './AfricanaFooter';

function CartPage({ options, handleDataViewData, addToCart, updateCart, removeCartItem }) {
    const location = useLocation();
    const cart = location.state.encryptedData;
    const decryptedData = AES.decrypt(decodeURIComponent(cart), 'encryptionKey').toString(CryptoJS.enc.Utf8);
    const [parsedCart, setParsedCart] = useState(JSON.parse(decryptedData)); // State to store parsed cart

    const [products, setProductsData] = useState([]);
    const [cartItems, setCartItems] = useState(parsedCart); // Define cartItems state variable

    const [isDataloading, setIsDataLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        
        handleData();
    }, []);

    useEffect(() => {
        // Update parsedCart when cartItems change
        setParsedCart(cartItems);
    }, [cartItems]);

    const handleData = async () => {
        setIsDataLoading(true);
        try {
            const response = await axios.get('http://144.149.167.72.host.secureserver.net:3000/api/v1/products', {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            setIsDataLoading(false);
            if (response.data.success) {
                setProductsData(response.data.products);
            } else {
                //alert("error: " + response.data.message);
            }
        } catch (error) {
            setIsDataLoading(false);
            //alert("error: " + error);
        }
    };

    const handleIncreaseQuantity = (item) => {
        const updatedCart = cartItems.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        
        updateCart();
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
    };

    // Function to find the lowest price among product variants
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

    const calculateCartSubTotal = () => {
        let subTotal = 0;
        cartItems.forEach((item) => {
            subTotal += findLowestPrice(item) * item.quantity;
        });
        return subTotal;
    };

    const calculateCartTax = () => {
        let subTotal = 0;
        cartItems.forEach((item) => {
            subTotal += findLowestPrice(item) * item.quantity;
        });
        const taxRate = 0.075; // 7.5%
        const calculatedTax = subTotal * taxRate;
        return calculatedTax;
    };

    let countCartItem = 1;


    return (
        <div>
            <div className='bg-black'><AfricanaHeader options={options} cart={parsedCart} removeCartItem={removeCartItem} /></div>

            <section className="cart-section woocommerce-cart section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="woocommerce">
                                <form action="/" method="post">
                                    <table className="shop_table shop_table_responsive cart">
                                        <thead>
                                            <tr>
                                                <th className="product-remove">s/n</th>
                                                <th className="product-thumbnail">Image</th>
                                                <th className="product-name">Product</th>
                                                <th className="product-price text-right">Price</th>
                                                <th className="product-quantity text-center">Quantity</th>
                                                <th className="product-subtotal text-right">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartItems.map((cartItem) => (
                                                <tr key={cartItem.id} style={{ cursor: "pointer" }}>
                                                    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                                                        {countCartItem++}
                                                    </td>
                                                    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                                                        <img src="http://shopafricana.co/wp-content/uploads/2024/01/March-23-Document-Name12-scaled-1-900x1125.jpg"/>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                        {cartItem.name}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right">
                                                    {'₦'}{findLowestPrice(cartItem).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
                                                        <RemoveIcon className='mr-2' style={{ cursor: 'pointer' }} onClick={() => { handleDecreaseQuantity(cartItem) }}/>
                                                        {cartItem.quantity}
                                                        <AddIcon className='ml-2' style={{ cursor: 'pointer' }} onClick={() => { handleIncreaseQuantity(cartItem) }}/>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right">
                                                    {'₦'}{calculateTotal(cartItem).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </form>
                                <div className="cart-collaterals">
                                    <CalculatedShipping currencySymbol={'₦'} price={calculateCartSubTotal()} tax={calculateCartTax()} options={options} cart={parsedCart}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SimilarProducts onQuickViewClick={handleDataViewData} products={products} addToCart={addToCart}/>


            <AfricanaFooter />
        </div>
    );
}

export default CartPage;
import React, { useState, useEffect } from 'react';
import {Fragment} from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import logo from '../../assets/logos/Logo Wordmark.png';
import axios from 'axios';

import Header from './header/Header';



export default function PaymentStatusPage({ options, handleDataViewData, addToCart, cart, removeCartItem, emailAddress }) {
  const [isLoading, setIsLoading] = useState(false);

  const [status, setStatus] = useState('');
  const [txRef, setTxRef] = useState('');
  const [transactionId, setTransactionId] = useState('');

  useEffect(() => {
    // Parse the URL to extract parameters
    const urlParams = new URLSearchParams(window.location.search);
    const statusParam = urlParams.get('status');
    const txRefParam = urlParams.get('tx_ref');
    const transactionIdParam = urlParams.get('transaction_id');

    // Set state with extracted parameters
    setStatus(statusParam);
    setTxRef(txRefParam);
    setTransactionId(transactionIdParam);
  }, []);

  return (

    <Fragment>

           <div 
          //  style={{ opacity: startMainTransition ? 1 : 1 }}>
            // className={isMainVisible ? 'fade-in-main' : 'fade-out-main'}>
            // className={`fade-in-main ${!isMainVisible ? 'fade-in' : 'fade-out'}`}
            style={{ backgroundColor: '#eeeeee' }}
            >

           {/* <Header options={options} cart={cart} removeCartItem={removeCartItem}/> */}


           <div className='flex flex-col justify-center items-center'>
      <h1>Payment Status: {status}</h1>
      <p>Email Address: {emailAddress}</p>
      {/* <p>Status: {status}</p> */}
      <p>Transaction Reference: {txRef}</p>
      <p>Transaction ID: {transactionId}</p>
    </div>




            </div> 



            </Fragment>





  );
}

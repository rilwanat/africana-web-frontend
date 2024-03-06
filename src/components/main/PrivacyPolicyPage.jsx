import React, {useState, Fragment, useEffect} from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import axios from 'axios';

import AfricanaHeader from './AfricanaHeader';
import AfricanaFooter from './AfricanaFooter';

function PrivacyPolicyPage({ options, addToCart, cart, removeCartItem, categories }) {
    return(
        <div>
            <div className='bg-black'><AfricanaHeader options={options} cart={cart} removeCartItem={removeCartItem} /></div>




<AfricanaFooter/>
        </div>
    );
}

export default PrivacyPolicyPage;
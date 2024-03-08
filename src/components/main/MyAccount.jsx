import React, {useState, Fragment, useEffect} from 'react';
import { useMediaQuery } from '@mui/material';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import AfricanaHeader from './AfricanaHeader';

import Products from "./Products";


import { Avatar, Divider } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import CollectionsIcon from '@mui/icons-material/Collections';
import ReviewsIcon from '@mui/icons-material/Reviews';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import LogoutIcon from '@mui/icons-material/Logout';

import Loading from './widgets/Loading';



function MyAccount({ options, addToCart, cart, removeCartItem, removeAllCartItem }) {

    const navigate = useNavigate();


    return(
    <div>
        <div className='bg-black'><AfricanaHeader options={options} cart={cart} removeCartItem={removeCartItem} removeAllCartItem={removeAllCartItem} /></div>

    </div>
    );
}

export default MyAccount;
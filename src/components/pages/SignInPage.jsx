import React, { Fragment, useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";

import Footer from './Footer';
// import Instagram from './Instagram';
import Header from './header/Header';
// import PageTitle from '../../components/global/PageTitle';

import axios from 'axios';

import imgx from '../../assets/images/shop/img-2.jpg';

/**
 * My Account Page
 * @param options
 * @returns {*}
 * @constructor
 */
function SignInPage({ options, cart }) {

    const navigate = useNavigate();
    
    const [loginEmailAddress, setLoginEmailAddress] = useState('example@gmail.com');//Enter your email');
    const [loginPassword, setLoginPassword] = useState('12345678');//Enter your password');

    
    const [isLoading, setIsLoading] = useState(false);
    // const [isDefaultModalOpen, setDefaultModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    // const [registrationStatus, setRegistrationStatus] = useState('');


    /**
     * check this function
     */

    useEffect(() => {
        window.scrollTo(0, 0);
        
          
    }, []);


    const loginUser = async (e) => {
        e.preventDefault();

        // if (loginEmailAddress === 'rilwan.at@gmail.com' && loginPassword === '12345678'
        //     ) {
        //         navigate('/my-account');
        //     return;
        // } else {
        //     alert("invalid");
        // }

        navigate('/my-account');
        return;


        setIsLoading(true);
        setErrorMessage({ message: '' });

        // setLoginEmailAddress();
        // setLoginPassword();
    
        if (loginEmailAddress === 'Enter your email' || loginEmailAddress === '' 
        || 
        loginPassword === 'Enter your password' || loginPassword === ''
            ) {
            setErrorMessage({ message: 'Login Failed: Please enter valid credentials' });
            // setRegistrationStatus("Failed");
            setIsLoading(false);
            return;
        }


        //alert("login user: " + loginEmailAddress + " " + loginPassword);

        try {
            const formData = new FormData();
            formData.append('email', loginEmailAddress);        
            formData.append('password', loginPassword);
    
            const response = await axios.post('http://144.149.167.72.host.secureserver.net:3000/api/v1/auth/login', formData, {
                headers: {
                    // 'Content-Type': 'multipart/form-data',
                    'Content-Type': 'application/json',
                },
            });

            // const response = await axios.post('http://144.149.167.72.host.secureserver.net:3000/api/v1/auth/login', {
            //     loginEmailAddress,
            //     loginPassword,
            // });


    
            setIsLoading(false);
    
            //alert("login: " + JSON.stringify(response.data.data, null, 2));

    
            if (response.data.success) {
                setErrorMessage(null);
                
                //alert("Success");
            } else {
                const errors = response.data.errors.map(error => error.msg);
                setErrorMessage({ message: response.data.message, errors });
                //alert("Failed1");
            }
        } catch (error) {
          setIsLoading(false);
            
          if (error.response && error.response.data && error.response.data.errors) {
            const { errors } = error.response.data;
            const errorMessages = errors.map(error => error.msg);
            setErrorMessage({ message: error.response.data.message, errors: errorMessages });
        } else {
            setErrorMessage({ message: 'Login failed. Please check your credentials and try again.' });
        }

            //alert("Failed2");
        }
    };
    


    return (
        <Fragment>
            <Header options={options} cart={cart}/>

            {/* <PageTitle name="My Account"/> */}

            {/* start my-account-section */}
            <section className="my-account-section">
                <div className="container-1410">
                    <div className="row">
                        <div className="col-xs-12" >
                            <div className="woocommerce ">
                                <div className="woocommerce-notices-wrapper "/>
                                <div className="u-columns col2-set" id="customer_login">
                                    <div className="u-column1 col-1 justify-center">
                                        <h2>Login</h2>
                                        <form className="woocommerce-form woocommerce-form-login login" method="post">
                                            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                <label htmlFor="username">Username or email address&nbsp;<span
                                                    className="required">*</span></label>
                                                <input type="text"
                                                value={loginEmailAddress}
                                                placeholder="Enter your email"
                                                onChange={(e) => setLoginEmailAddress(e.target.value)}
                                                       className="woocommerce-Input woocommerce-Input--text input-text"
                                                       name="username" 
                                                       id="username" 
                                                       autoComplete="username"/>
                                            </p>
                                            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                <label htmlFor="password">Password&nbsp;<span
                                                    className="required">*</span></label>
                                                <input className="woocommerce-Input woocommerce-Input--text input-text"
                                                value={loginPassword}
                                                placeholder="Enter your password"
                                                onChange={(e) => setLoginPassword(e.target.value)}
                                                       type="password" 
                                                       name="password" 
                                                       id="password"
                                                       autoComplete="current-password"/>
                                            </p>
                                            <p className="form-row">
                                            <p className='mb-4 font-bold' style={{ color: '#c2572b' }}>{errorMessage.message}</p>


                                                <label
                                                    className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
                                                    <input
                                                        className="woocommerce-form__input woocommerce-form__input-checkbox"
                                                        name="rememberme" type="checkbox" id="rememberme"
                                                        defaultValue="forever"/> <span>Remember me</span>
                                                </label>
                                                <input type="hidden" id="woocommerce-login-nonce"
                                                       name="woocommerce-login-nonce" defaultValue="f0e969fd27"/><input
                                                type="hidden" name="_wp_http_referer" defaultValue="/my-account/"/>
                                                <button onClick={(e) => {loginUser(e)}} type="submit"
                                                        className="woocommerce-button button woocommerce-form-login__submit"
                                                        name="login" value="Log in">Log in
                                                </button>
                                            </p>
                                            <p className="woocommerce-LostPassword lost_password">
                                                <a href="#">Lost your password?</a>
                                            </p>

                                            <p className=""> <a href="/signup">Dont have an account? Sign Up</a> </p>
                                        </form>
                                    </div>

                                    <div className="u-column3 col-2">
                                        <img src={imgx} />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end my-account-section */}

            {/* <Instagram/> */}
            <Footer/>
        </Fragment>
    );
}

export default SignInPage;
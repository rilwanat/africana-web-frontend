import React, {Fragment, useState, useEffect} from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';

import axios from 'axios';

import AfricanaHeader from './AfricanaHeader';
import AfricanaFooter from './AfricanaFooter';

import imgx from '../../assets/images/shop/img-2.jpg';

function SignInPage({ options, cart, removeCartItem, removeAllCartItem  }) {

    const navigate = useNavigate();
    
    const [loginEmailAddress, setLoginEmailAddress] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    
    const [isLoading, setIsLoading] = useState(false);
    // const [isDefaultModalOpen, setDefaultModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    // const [registrationStatus, setRegistrationStatus] = useState('');


    useEffect(() => {
        window.scrollTo(0, 0);
        
          
    }, []);


    const loginUser = async (e) => {
        e.preventDefault();

        

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
                // If login is successful
                setErrorMessage({ message: '' });

                setLoginEmailAddress('');
                setLoginPassword('');
                alert("Login Successful: " + response.data.message);

                navigate('/my-account');

            } else {
                const errors = response.data.errors.map(error => error.msg);
                setErrorMessage({ message: response.data.message, errors });
                //alert("Failed1");
            }
        } catch (error) {
          setIsLoading(false);
            
          if (error.response && error.response.data && error.response.data.message) {
            const errorMessage = error.response.data.message;
            setErrorMessage({ message: errorMessage });
        } else if (error.response && error.response.data && error.response.data.errors) {
            const { errors } = error.response.data;
            const errorMessages = errors.map(error => error.msg);
            const errorMessage = errorMessages.join(', '); // Join all error messages
            setErrorMessage({ message: errorMessage });
        } else {
            setErrorMessage({ message: 'Login failed. Please check your credentials and try again.' });
        }

        }
    };


    return (
        <div>
            <div className='bg-black'><AfricanaHeader options={options} cart={cart} removeCartItem={removeCartItem} removeAllCartItem={removeAllCartItem} /></div>

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
                                            <div className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
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
                                            </div>
                                            <div className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
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
                                            </div>
                                            <div className="form-row">
                                            <div className='mb-4 font-bold text-sm' style={{ color: '#c2572b' }}>{errorMessage.message}</div>


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
                                                <button onClick={(e) => {if (!isLoading) loginUser(e)}} type="submit"
                                                        className="woocommerce-button button woocommerce-form-login__submit"
                                                        name="login" value="Log in">{isLoading ? 'Please wait..' : 'Log in'}
                                                </button>
                                            </div>
                                            <div className="woocommerce-LostPassword lost_password">
                                                <a href="#">Lost your password?</a>
                                            </div>

                                            <div className=""> <a href="/sign-up">Dont have an account? Sign Up</a> </div>
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

            <AfricanaFooter/>
        </div>
    );
}

export default SignInPage;
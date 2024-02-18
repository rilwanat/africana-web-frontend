import React, {Fragment, useState} from 'react';

import Footer from './Footer';
// import Instagram from './Instagram';
import Header from './header/Header';
// import PageTitle from '../../components/global/PageTitle';

import axios from 'axios';


/**
 * My Account Page
 * @param options
 * @returns {*}
 * @constructor
 */
function SignInPage({ options }) {

    const [firstname, setFirstname] = useState('Enter your firstname');
    const [lastname, setLastname] = useState('Enter your Lastname');
    const [companyname, setCompanyname] = useState('Enter your Company name');
    const [emailAddress, setEmailAddress] = useState('Enter your email');//rilwan.at@gmail.com');//
    const [phone, setPhonenumber] = useState('Enter your phone number');
    const [country, setCountry] = useState('Enter your Country *dropdown');//12345678');//
    const [address1, setAddress1] = useState('Enter Address Line 1');
    const [address2, setAddress2] = useState('Enter Address Line 2');
    const [towncity, setTowncity] = useState('Enter Town / City');

    
    const [loginEmailAddress, setLoginEmailAddress] = useState('Enter your email');
    const [loginPassword, setLoginPassword] = useState('Enter your password');

    
    const [isLoading, setIsLoading] = useState(false);
    // const [isDefaultModalOpen, setDefaultModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    // const [registrationStatus, setRegistrationStatus] = useState('');


    /**
     * check this function
     */


    const loginUser = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setErrorMessage({ message: '' });
    
        if (loginEmailAddress === 'Enter your email' || loginEmailAddress === '' 
        || 
        loginPassword === 'Enter your password' || loginPassword === ''
            ) {
            setErrorMessage({ message: 'Registration Failed: Please enter valid credentials' });
            // setRegistrationStatus("Failed");
            setIsLoading(false);
            return;
        }

        alert("login user");

        try {
            const formData = new FormData();
            formData.append('email', loginEmailAddress);        
            formData.append('password', loginPassword);
    
            const response = await axios.post('http://#/auth/login', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            setIsLoading(false);
    
            //const regData = response.data;
    
            if (response.data.status === 'success') {
                setErrorMessage(null);
                
                alert("Success");
            } else {
              
                if (response.data.errors) {
                    const errorMessages = Object.values(response.data.errors).flat();
                    setErrorMessage({ message: response.data.message, errors: errorMessages });
                } else {
                    setErrorMessage({ message: response.data.message, errors: response.data.message });
                }
                //setDefaultModalOpen(true);
                alert("Failed");
            }
        } catch (error) {
          setIsLoading(false);
            
            if (error.response && error.response.data && error.response.data.errors) {
                const { message, errors } = error.response.data;
    
                if (errors && Object.keys(errors).length > 0) {
                    const errorMessages = Object.values(errors).flat().join(', ');
                    setErrorMessage({ message: `${message} (${errorMessages})`, errors });
                } else {
                    setErrorMessage({ message: message || 'Registration failed. Please check your credentials and try again.' });
                }
            } else {
                setErrorMessage({ message: 'Registration failed. Please check your credentials and try again.' });
            }
            //setDefaultModalOpen(true);
            alert("Failed");
        }
    };
    


    return (
        <Fragment>
            <Header options={options} />

            {/* <PageTitle name="My Account"/> */}

            {/* start my-account-section */}
            <section className="my-account-section">
                <div className="container-1410">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="woocommerce">
                                <div className="woocommerce-notices-wrapper"/>
                                <div className="u-columns col2-set" id="customer_login">
                                    <div className="u-column1 col-1">
                                        <h2>Login</h2>
                                        <form className="woocommerce-form woocommerce-form-login login" method="post">
                                            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                <label htmlFor="username">Username or email address&nbsp;<span
                                                    className="required">*</span></label>
                                                <input type="text"
                                                       className="woocommerce-Input woocommerce-Input--text input-text"
                                                       name="username" id="username" autoComplete="username"/>
                                            </p>
                                            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                <label htmlFor="password">Password&nbsp;<span
                                                    className="required">*</span></label>
                                                <input className="woocommerce-Input woocommerce-Input--text input-text"
                                                       type="password" name="password" id="password"
                                                       autoComplete="current-password"/>
                                            </p>
                                            <p className="form-row">
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
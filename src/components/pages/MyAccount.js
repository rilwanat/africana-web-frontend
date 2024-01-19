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
function MyAccount({ options }) {

    const [firstname, setFirstname] = useState('Enter your firstname');
    const [lastname, setLastname] = useState('Enter your Lastname');
    const [companyname, setCompanyname] = useState('Enter your Company name');
    const [emailAddress, setEmailAddress] = useState('Enter your email');//rilwan.at@gmail.com');//
    const [phone, setPhonenumber] = useState('Enter your phone number');
    const [country, setCountry] = useState('Enter your Country *dropdown');//12345678');//
    const [address1, setAddress1] = useState('Enter Address Line 1');
    const [address2, setAddress2] = useState('Enter Address Line 2');
    const [towncity, setTowncity] = useState('Enter Town / City');
    
    const [isSignupLoading, setIsSignupLoading] = useState(false);
    const [isDefaultModalOpen, setDefaultModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [registrationStatus, setRegistrationStatus] = useState('');


    /**
     * check this function
     */

    const registerUser = async (e) => {
        e.preventDefault();
    
        setIsSignupLoading(true);
        setErrorMessage({ message: '' });
    
        if (emailAddress === 'Enter your email' || emailAddress === '' 
        //|| 
            //password === 'Enter your password' || password === ''
            ) {
            setErrorMessage({ message: 'Registration Failed: Please enter valid credentials' });
            setRegistrationStatus("Failed");
            setIsSignupLoading(false);
            return;
        }
    
        try {
            const formData = new FormData();
            formData.append('email', emailAddress);
            
            formData.append('firstname', firstname);
            formData.append('lastname', lastname);
            formData.append('companyname', companyname);
            formData.append('emailAddress', emailAddress);
            formData.append('phone', phone);
            formData.append('country', country);
            formData.append('address1', address1);
            formData.append('address2', address2);
            formData.append('towncity', towncity);
    
            const response = await axios.post('https://your-api-endpoint', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            setIsSignupLoading(false);
    
            //const regData = response.data;
    
            if (response.data.status === 'success') {
                setIsSignupLoading(false);
                setErrorMessage(null);
                setRegistrationStatus("Success");
                setDefaultModalOpen(true);
                
                alert("Success");
            } else {
                setIsSignupLoading(false);
                setRegistrationStatus("Failed");
    
                if (response.data.errors) {
                    const errorMessages = Object.values(response.data.errors).flat();
                    setErrorMessage({ message: response.data.message, errors: errorMessages });
                } else {
                    setErrorMessage({ message: response.data.message, errors: response.data.message });
                }
                setDefaultModalOpen(true);
                alert("Failed");
            }
        } catch (error) {
            setIsSignupLoading(false);
            setRegistrationStatus("Failed");
    
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
            setDefaultModalOpen(true);
            alert("Failed");
        }
    };
    

    const loginUser = (e) => {
        e.preventDefault();

        alert("login user");
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
                                                <a href="#">Lost
                                                    your password?</a>
                                            </p>
                                        </form>
                                    </div>
                                    <div className="u-column2 col-2">
                                        <h2>Register</h2>
                                        <form 
                                        //method="post" 
                                        // action="/registration-endpoint" 
                                        className="woocommerce-form woocommerce-form-register register">

<p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        <label htmlFor="reg_firstname">First name&nbsp;<span className="required">*</span></label>
        <input type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="firstname" id="reg_firstname" autoComplete="given-name" />
    </p>

    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        <label htmlFor="reg_lastname">Last name&nbsp;<span className="required">*</span></label>
        <input type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="lastname" id="reg_lastname" autoComplete="family-name" />
    </p>

    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        <label htmlFor="reg_company">Company name&nbsp;<span className=""></span></label>
        <input type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="company" id="reg_company" autoComplete="organization" />
    </p>

    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        <label htmlFor="reg_email">Email address&nbsp;<span className="required">*</span></label>
        <input type="email" className="woocommerce-Input woocommerce-Input--text input-text" name="email" id="reg_email" autoComplete="email" />
    </p>

    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        <label htmlFor="reg_phone">Phone&nbsp;<span className="required">*</span></label>
        <input type="tel" className="woocommerce-Input woocommerce-Input--text input-text" name="phone" id="reg_phone" autoComplete="tel" />
    </p>

    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        <label htmlFor="reg_country">Country&nbsp;<span className="required">*</span></label>
        <input type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="country" id="reg_country" autoComplete="country" />
    </p>

    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        <label htmlFor="reg_address1">Address 1&nbsp;<span className="required">*</span></label>
        <input type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="address1" id="reg_address1" autoComplete="address-line1" />
    </p>

    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        <label htmlFor="reg_address2">Address 2&nbsp;<span className="required">*</span></label>
        <input type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="address2" id="reg_address2" autoComplete="address-line2" />
    </p>

    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        <label htmlFor="reg_towncity">Town / City&nbsp;<span className="required">*</span></label>
        <input type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="towncity" id="reg_towncity" autoComplete="town-city" />
    </p>

    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        <label htmlFor="reg_postcodezip">Postcode / ZIP&nbsp;<span className="required">*</span></label>
        <input type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="postcode-zip" id="reg_postcodezip" autoComplete="postcode-zip" />
    </p>





    <p className='mb-4'>{errorMessage.message}</p>


                                            <p>A password will be sent to your email address.</p>
                                            <div className="woocommerce-privacy-policy-text">
                                                <p>Your personal data will be used to support your experience throughout
                                                    Africana site, to manage access to your account, and for other
                                                    purposes described in our <a href="/privacy-policy"
                                                                                 className="woocommerce-privacy-policy-link" >privacy policy</a>.</p>
                                            </div>
                                            <p className="woocommerce-form-row form-row">
                                                {/* <input type="hidden" id="woocommerce-register-nonce"
                                                       name="woocommerce-register-nonce"
                                                       defaultValue="2361821e0b"/> */}
                                                       {/* <input type="hidden"
                                                                                         name="_wp_http_referer"
                                                                                         defaultValue="/my-account/"/> */}
                                                <button onClick={(e) => {registerUser(e)}} //type="submit"
                                                        className="woocommerce-Button woocommerce-button button woocommerce-form-register__submit"
                                                        name="register" value="Register">Register
                                                </button>
                                            </p>
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

export default MyAccount;
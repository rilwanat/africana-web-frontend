import React, {Fragment, useState, useEffect} from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';

import axios from 'axios';

import AfricanaHeader from './AfricanaHeader';
import AfricanaFooter from './AfricanaFooter';

import imgx from '../../assets/images/shop/img-2.jpg';

function SignUpPage({ options, cart, removeCartItem, handleEmailAddress }) {

    const navigate = useNavigate();

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [companyname, setCompanyname] = useState('Enter your Company name');
    const [emailAddress, setEmailAddress] = useState('');
    const [phone, setPhonenumber] = useState('Enter your phone number');
    const [country, setCountry] = useState('Enter your Country *dropdown');
    const [address1, setAddress1] = useState('Enter Address Line 1');
    const [address2, setAddress2] = useState('Enter Address Line 2');
    const [towncity, setTowncity] = useState('Enter Town / City');

    

    
    const [isLoading, setIsLoading] = useState(false);
    // const [isDefaultModalOpen, setDefaultModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    // const [registrationStatus, setRegistrationStatus] = useState('');


    
    useEffect(() => {
        window.scrollTo(0, 0);
        
          
    }, []);




    const registerUser = async (e) => {
        e.preventDefault();
        //alert("");
    
        setIsLoading(true);
        setErrorMessage({ message: '' });
    
        if (emailAddress === 'Enter your email' || emailAddress === '' 
        || 
            firstname === 'Enter your Firstname' || firstname === ''
            || 
            lastname === 'Enter your Lastname' || lastname === ''
            ) {
            setErrorMessage({ message: 'Registration Failed: Please enter valid credentials' });
            // setRegistrationStatus("Failed");
            setIsLoading(false);

            //alert("");
            return;
        }
    
        //alert("login user: " + emailAddress + " " + firstname + " " + lastname);


        try {

            const requestData = {                
                    firstName: firstname,
                    lastName: lastname,
                    email: emailAddress,          
            };
    
            const response = await axios.post('http://144.149.167.72.host.secureserver.net:3000/api/v1/auth/register', requestData, {
                headers: {
                    // 'Content-Type': 'multipart/form-data',
                    'Content-Type': 'application/json',
                },
            });

    
            setIsLoading(false);
    
    
            if (response.data.success) {
                // If registration is successful
                setErrorMessage({ message: '' });

                handleEmailAddress(emailAddress);
                
                // navigate('/confirm-email/' + emailAddress);
                //navigate('/confirm-email');


                setFirstname('');
                setLastname('');
                setEmailAddress('');
                alert("Registration Successful: " + response.data.message + "\n\n Please check your mail and login to continue");
                navigate('/login');

                
            } else {
                // If there are errors in the response
                const errors = response.data.errors.map(error => error.msg);
                const errorMessage = errors.join(', ');
                setErrorMessage({ message: errorMessage });
                alert("Registration Failed");
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
                setErrorMessage({ message: 'Registration failed. Please check your credentials and try again.' });
            }
        }
        
    };


    return (
        <div>
            <div className='bg-black'><AfricanaHeader options={options} cart={cart} removeCartItem={removeCartItem} /></div>


            <section className="my-account-section">
                <div className="container-1410">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="woocommerce">
                                <div className="woocommerce-notices-wrapper"/>
                                <div className="u-columns col1-set" id="customer_login">
                                    
                                    <div className="u-column1 col-1">
                                        <h2>Register</h2>
                                        <form 
                                        //method="post" 
                                        // action="/registration-endpoint" 
                                        className="woocommerce-form woocommerce-form-register register">

<p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        <label htmlFor="reg_firstname">First name&nbsp;<span className="required">*</span></label>
        <input 
        value={firstname}
        placeholder="Enter your Firstname"
        onChange={(e) => setFirstname(e.target.value)}
        type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="firstname" id="reg_firstname" autoComplete="given-name" />
    </p>

    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        <label htmlFor="reg_lastname">Last name&nbsp;<span className="required">*</span></label>
        <input 
        value={lastname}
        placeholder="Enter your Lastname"
        onChange={(e) => setLastname(e.target.value)}
        type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="lastname" id="reg_lastname" autoComplete="family-name" />
    </p>

    {/* <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        <label htmlFor="reg_company">Company name&nbsp;<span className=""></span></label>
        <input type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="company" id="reg_company" autoComplete="organization" />
    </p> */}

    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        <label htmlFor="reg_email">Email address&nbsp;<span className="required">*</span></label>
        <input 
        value={emailAddress}
        placeholder="Enter your email"
        onChange={(e) => setEmailAddress(e.target.value)}
        type="email" className="woocommerce-Input woocommerce-Input--text input-text" name="email" id="reg_email" autoComplete="email" />
    </p>

    {/* <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        <label htmlFor="reg_phone">Phone&nbsp;<span className=""></span></label>
        <input type="tel" className="woocommerce-Input woocommerce-Input--text input-text" name="phone" id="reg_phone" autoComplete="tel" />
    </p>

    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        <label htmlFor="reg_country">Country&nbsp;<span className=""></span></label>
        <input type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="country" id="reg_country" autoComplete="country" />
    </p>

    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        <label htmlFor="reg_address1">Address 1&nbsp;<span className=""></span></label>
        <input type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="address1" id="reg_address1" autoComplete="address-line1" />
    </p>

    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        <label htmlFor="reg_address2">Address 2&nbsp;<span className=""></span></label>
        <input type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="address2" id="reg_address2" autoComplete="address-line2" />
    </p>

    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        <label htmlFor="reg_towncity">Town / City&nbsp;<span className=""></span></label>
        <input type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="towncity" id="reg_towncity" autoComplete="town-city" />
    </p>

    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        <label htmlFor="reg_postcodezip">Postcode / ZIP&nbsp;<span className=""></span></label>
        <input type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="postcode-zip" id="reg_postcodezip" autoComplete="postcode-zip" />
    </p> */}





    <p className='mb-4 font-bold text-sm' style={{ color: '#c2572b' }}>{errorMessage.message}</p>


                                            <p>A password will be sent to your email address.</p>
                                            <div className="woocommerce-privacy-policy-text">
                                                <p>Your personal data will be used to support your experience throughout
                                                    Africana site to manage access to your account, and for other
                                                    purposes described in our <a href="/privacy-policy" className="woocommerce-privacy-policy-link" >privacy policy</a>.</p>
                                            </div>
                                            <p className="woocommerce-form-row form-row">
                                                {/* <input type="hidden" id="woocommerce-register-nonce"
                                                       name="woocommerce-register-nonce"
                                                       defaultValue="2361821e0b"/> */}
                                                       {/* <input type="hidden"
                                                                                         name="_wp_http_referer"
                                                                                         defaultValue="/my-account/"/> */}
                                                <button onClick={(e) => {if (!isLoading) registerUser(e)}} //type="submit"
                                                        className="woocommerce-Button woocommerce-button button woocommerce-form-register__submit"
                                                        name="register" value="Register">{isLoading ? 'Please wait..' : 'Register'}
                                                </button>
                                            </p>

                                            <p className=""> <a href="/sign-in">Already have an account? Sign In</a> </p>
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

export default SignUpPage;
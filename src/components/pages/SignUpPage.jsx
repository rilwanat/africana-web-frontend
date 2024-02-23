import React, {Fragment, useState} from 'react';

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
function SignUpPage({ options, cart }) {

    const [firstname, setFirstname] = useState('Enter your Firstname');
    const [lastname, setLastname] = useState('Enter your Lastname');
    const [companyname, setCompanyname] = useState('Enter your Company name');
    const [emailAddress, setEmailAddress] = useState('Enter your email');//rilwan.at@gmail.com');//
    const [phone, setPhonenumber] = useState('Enter your phone number');
    const [country, setCountry] = useState('Enter your Country *dropdown');//12345678');//
    const [address1, setAddress1] = useState('Enter Address Line 1');
    const [address2, setAddress2] = useState('Enter Address Line 2');
    const [towncity, setTowncity] = useState('Enter Town / City');

    

    
    const [isLoading, setIsLoading] = useState(false);
    // const [isDefaultModalOpen, setDefaultModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    // const [registrationStatus, setRegistrationStatus] = useState('');


    /**
     * check this function
     */

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
            const formData = new FormData();            
            formData.append('firstname', firstname);
            formData.append('lastname', lastname);
            //formData.append('companyname', companyname);
            formData.append('emailAddress', emailAddress);
            //formData.append('phone', phone);
            //formData.append('country', country);
            //formData.append('address1', address1);
            //formData.append('address2', address2);
            //formData.append('towncity', towncity);
    
            const response = await axios.post('http://144.149.167.72.host.secureserver.net:3000/api/v1/auth/register', formData, {
                headers: {
                    // 'Content-Type': 'multipart/form-data',
                    'Content-Type': 'application/json',
                },
            });

            // const response = await axios.post('http://144.149.167.72.host.secureserver.net:3000/api/v1/auth/register', {
            //     emailAddress,
            //     firstname,
            //     lastname,
            // });


    
            setIsLoading(false);
    
            //const regData = response.data;
    
    
            //alert("reg: " + JSON.stringify(response.data.data, null, 2));

    
            if (response.data.errors && response.data.errors.length > 0) {
                const errors = response.data.errors.map(error => error.msg);
                setErrorMessage({ message: response.data.message, errors });
                alert("Failed1");
            } else {
                setErrorMessage(null);
                alert("Success");
            }
            
        } catch (error) {
            setIsLoading(false);
            
            if (error.response && error.response.data && error.response.data.errors) {
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
        <Fragment>
            <Header options={options}  cart={cart} />

            {/* <PageTitle name="My Account"/> */}

            {/* start my-account-section */}
            <section className="my-account-section">
                <div className="container-1410">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="woocommerce">
                                <div className="woocommerce-notices-wrapper"/>
                                <div className="u-columns col1-set bg-gray-100" id="customer_login">
                                    
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





    <p className='mb-4 font-bold' style={{ color: '#c2572b' }}>{errorMessage.message}</p>


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
                                                <button onClick={(e) => {registerUser(e)}} //type="submit"
                                                        className="woocommerce-Button woocommerce-button button woocommerce-form-register__submit"
                                                        name="register" value="Register">Register
                                                </button>
                                            </p>
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

export default SignUpPage;
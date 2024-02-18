import React, {Fragment, useState} from 'react';
import { Link } from 'react-router-dom';

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

    
    const [loginEmailAddress, setLoginEmailAddress] = useState('Enter your email');
    const [loginPassword, setLoginPassword] = useState('Enter your password');

    
    const [isLoading, setIsLoading] = useState(false);
    // const [isDefaultModalOpen, setDefaultModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    // const [registrationStatus, setRegistrationStatus] = useState('');


    /**
     * check this function
     */



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
                                    <h2><Link to="/signin" style={{fontWeight: 'bold'}}>Login</Link></h2>
                                        
                                    </div>
                                    <div className="u-column2 col-2">
                                        <h2><Link to="/signup" style={{fontWeight: 'bold'}}>Register</Link></h2>
                                        
                                        
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
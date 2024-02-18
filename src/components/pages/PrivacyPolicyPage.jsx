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
function PrivacyPolicyPage({ options }) {

    
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
                                    
                                    <div className="u-column2 col-2">
                                        <h2>Privacy Policy</h2>
                                        
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

export default PrivacyPolicyPage;
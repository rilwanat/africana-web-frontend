import React, {Fragment} from 'react';
import NewsletterWidget from "../widget/NewsletterWidget";
import ContactWidget from "../widget/ContactWidget";
import CompanyWidget from "../widget/CompanyWidget";
// import PaymentWidget from "../widget/PaymentWidget";
import ShopWidget from "../widget/ShopWidget";
import HelpWidget from "../widget/HelpWidget";

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';



/**
 * footer component
 * @returns {*}
 * @constructor
 */
function Footer() {

    return (
        <Fragment>
            {/* start site-footer */}
            <footer className="site-footer">
                <div className="container-1410">
                    <div className="row widget-area">
                        {/* <div className="col-lg-4 col-xs-6  widget-col about-widget-col">
                            <NewsletterWidget/>
                        </div> */}
                        <div className="col-lg-3 col-xs-6 widget-col">
                            <ContactWidget/>
                        </div>
                        <div className="col-lg-3 col-xs-6 widget-col">
                            <ShopWidget/>
                        </div>
                        <div className="col-lg-3 col-xs-6 widget-col">
                            <HelpWidget/>
                        </div>
                        <div className="col-lg-3 col-xs-6 widget-col">
                            <CompanyWidget/>
                        </div>
                    </div>





                </div>
                {/* end container */}
                <div className="lower-footer">
                    <div className="container-1410">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="lower-footer-inner clearfix">
                                    <div>
                                        <p>© Africana 2024, All Rights Reserved.</p>
                                    </div>
                                    <div className="social">
                                        <ul className="clearfix">
                                        <li><a href="https://www.facebook.com/africanacouturenigeria" target='_blank'>
                                {/* <i className="ti-facebook" style={{ color: "#ffffff" }}/> */}
                                <FacebookIcon style={{cursor: "pointer", color: "#ffffff" }}/>
                                </a></li>
                            <li><a href="https://www.twitter.com/africana" target='_blank'>
                                {/* <i className="ti-twitter-alt" style={{ color: "#ffffff" }}/> */}
                                <TwitterIcon style={{cursor: "pointer", color: "#ffffff" }}/>
                                </a></li>
                            <li><a href="https://www.instagram.com/africanacouture" target='_blank'>
                                {/* <i className="ti-pinterest"/> */}
                                <InstagramIcon style={{cursor: "pointer", color: "#ffffff" }}/>
                                </a></li>

                                            {/* <li style={{ cursor: 'pointer' }}><a href="https://www.facebook.com/africana" target='_blank' title="Facebook">fb</a></li>
                                            <li style={{ cursor: 'pointer' }}><a href="https://www.twitter.com/africana" target='_blank' title="Twitter">tw</a></li>
                                            <li style={{ cursor: 'pointer' }}><a href="https://www.instagram.com/africanacouture" target='_blank' title="Instagram">ig</a></li> */}
                                            
                                        </ul>
                                    </div>
                                    <div className="extra-link">
                                        <ul>
                                            <li><a href="/privacy-policy">Privacy </a></li>
                                            <li><a >Terms</a></li>
                                            <li><a >Promo T&amp;Cs Apply</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* end site-footer */}
        </Fragment>
    );
}


export default Footer;
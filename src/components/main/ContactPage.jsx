import React, {Fragment} from 'react';

import AfricanaHeader from './AfricanaHeader';
import PageTitle from './widgets//PageTitle';

import AfricanaFooter from './AfricanaFooter';

import StorefrontIcon from '@mui/icons-material/Storefront';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import EmailIcon from '@mui/icons-material/Email';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

import Hero from './Hero';

import Instagram from './widgets/Instagram';

function ContactPage({ options, addToCart, cart, removeCartItem, removeAllCartItem  }) {

    const contactUsData = {
        address: "17 Monrovia street, Off Aminu Kano Crescent, Abuja",
        phone_1: "+234 909 207 5553",
        phone_2: "+234 909 207 5553",
        email_1: "hello@shopafricana.co",
        // email_2: "example@mail.com",
        time: "10AM - 5 PM, Sunday closed"
    };

    return(
    <div>

<div className='bg-black'><AfricanaHeader options={options} cart={cart} removeCartItem={removeCartItem} removeAllCartItem={removeAllCartItem} /></div>

{/* <Hero /> */}

{/* <PageTitle name="Contact"/> */}


{/* <section className="contact-section contact-pg-section section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-lg-10 col-lg-offset-1">
                            <div className="contact-info">
                                <ul>
                                    <li>
                                        <StorefrontIcon />
                                        <h4>Office address</h4>
                                        <p>{contactUsData.address}</p>
                                    </li>
                                    <li>
                                        <PhonelinkRingIcon />
                                        <h4>Phone number</h4>
                                        <p>{contactUsData.phone_1} <br/>{contactUsData.phone_2}</p>
                                    </li>
                                    <li>
                                        <EmailIcon />
                                        <h4>Email us</h4>
                                        <p>{contactUsData.email_1} <br/>{contactUsData.email_2}</p>
                                    </li>
                                    <li>
                                        <AccessAlarmIcon />
                                        <h4>Office time</h4>
                                        <p>{contactUsData.time}</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="contact-form-col">
                                <h2>Send Us A Message</h2>
                                <div className="contact-form">
                                    
                                        <div>
                                            <input type="text" name="name" id="name" placeholder="Name*"/>
                                        </div>
                                        <div>
                                            <input type="email" name="email" id="email" placeholder="Email*"/>
                                        </div>
                                        <div className="fullwidth">
                                            <select name="subject">
                                                <option disabled="disabled">Contact subject</option>
                                                <option>Subject 1</option>
                                                <option>Subject 2</option>
                                                <option>Subject 3</option>
                                            </select>
                                        </div>
                                        <div className="fullwidth">
                                            <textarea name="note" id="note" placeholder="Case Description..." defaultValue={""}/>
                                        </div>
                                        <div className="submit-area">
                                            <button 
                                            // onClick={onSubmitForm} 
                                            type="submit" className="theme-btn">Send</button>
                                        </div>
                                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            
            
            <Instagram/>
            <AfricanaFooter/>


    </div>
    );
}

export default ContactPage;
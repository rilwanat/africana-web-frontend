import React, {Fragment} from 'react';
import {useState, useEffect} from 'react';

import newsLetter from '../../assets/images/newsletter.jpg';
// import FramerThing from './framer/FramerThing';

/**
 * Newsletter Popup component
 * @returns {*}
 * @constructor
 */
function NewsletterPopup() {

    const [showNewsletter, setShowNewsletter] = useState(false);

    const HandelNewsletterClose = () => {
        setShowNewsletter(false);
    };

    useEffect(() => {
        setTimeout(() => {
            setShowNewsletter(true);
        }, 2000)
    }, []);

    const onSendEmail = (e)=> {
        e.preventDefault();
    };

    return (
        <Fragment>
            {/* start newsletter-popup-area-section */}
            <section className={"newsletter-popup-area-section " + (showNewsletter ? 'active-newsletter-popup' : '')}>
                <div className="newsletter-popup-area">
                    <div className="newsletter-popup-ineer">
                        <button onClick={HandelNewsletterClose} className="btn newsletter-close-btn"><i
                            className="pe-7s-close-circle"/></button>
                        <div className="img-holder">
                            <img src={newsLetter} loading="lazy" alt=""/>
                            {/* <FramerThing /> */}
                        </div>
                        <div className="details">
                            <h4>Get x% discount shipped to your inbox</h4>
                            <p>
                                Subscribe to Africana newsletter to receive timely updates to your favorite
                                products
                            </p>
                            <form>
                                <div>
                                    <input type="email" placeholder="Enter your email"/>
                                    <button type="submit" onClick={onSendEmail}>Subscribe</button>
                                </div>
                                <div>
                                    <label className="checkbox-holder"> Don't show this popup again!
                                        <input type="checkbox" className="show-message"/>
                                        <span className="checkmark"/>
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* end newsletter-popup-area-section */}
        </Fragment>
    );
}

export default NewsletterPopup;
import React, {Fragment} from 'react';

/**
 * Contact Widget
 * @returns {*}
 * @constructor
 */
function ContactWidget() {

    return (
        <Fragment>
            <div className="widget contact-widget">
                <h3 className='text-white'>Contact</h3>
                <ul>
                    <li>Phone: +234 909 207 5553</li>
                    <li>Email: hello@shopafricana.co</li>
                    <li>Address: 17 Monrovia street, Off Aminu Kano Crescent, Abuja </li>
                </ul>
            </div>
        </Fragment>
    );
}

export default ContactWidget;
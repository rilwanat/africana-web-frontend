import React, {Fragment} from 'react';

/**
 * Company Widget
 * @returns {*}
 * @constructor
 */
function CompanyWidget() {

    return (
        <Fragment>
            <div className="widget company-widget">
                <h3 className='text-white'>Help</h3>
                <ul>
                    <li><a href="#">Frequently Asked Questions</a></li>
                    <li><a href="#">Returns & Exchanges</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                </ul>
            </div>
        </Fragment>
    );
}

export default CompanyWidget;
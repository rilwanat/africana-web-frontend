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
                <h3 className='text-white'>About</h3>
                <ul>
                    <li><a href="#">Discover us</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </Fragment>
    );
}

export default CompanyWidget;
import React, {Fragment} from 'react';

/**
 * Payment Widget
 * @returns {*}
 * @constructor
 */
function ShopWidget() {

    return (
        <Fragment>
            <div className="widget payment-widget">
                <h3 className='text-white'>Shop</h3>
                <ul>
                    <li><a href="/on-sale">Shop</a></li>
                    <li><a >New arrivals</a></li>
                    <li><a >Sales</a></li>
                    <li><a >Wishlist</a></li>
                </ul>
            </div>
        </Fragment>
    );
}

export default ShopWidget;
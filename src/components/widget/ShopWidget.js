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
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">New arrivals</a></li>
                    <li><a href="#">Sales</a></li>
                    <li><a href="#">Wishlist</a></li>
                </ul>
            </div>
        </Fragment>
    );
}

export default ShopWidget;
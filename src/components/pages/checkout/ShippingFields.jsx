import React from 'react';
import {useState, Fragment} from 'react';

/**
 * demo date
 */
import categories from "../../data/categories.json";

/**
 * Shipping Fields section
 * @returns {*}
 * @constructor
 */
function ShippingFields() {

    /**
     * state
     */
    const [showShippingAddress, setShowShippingAddress] = useState(false);

    /**
     * Handle state
     * @constructor
     */
    const HandelShippingAddressStatus = () => {
        setShowShippingAddress(!showShippingAddress);
    };

    return (
        <Fragment>
            <div className="col-2">
                <div className="woocommerce-shipping-fields">

                    <p className="form-row form-row notes" id="order_comments_field">
                        <label htmlFor="order_comments">Order Notes</label>
                        <textarea name="order_comments" className="input-text " id="order_comments"
                                  placeholder="Notes about your order, e.g. special notes for delivery." rows={2}
                                  cols={5} defaultValue={""}/>
                    </p>
                </div>
            </div>
        </Fragment>
    );
}

export default ShippingFields;
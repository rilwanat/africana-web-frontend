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
            {/* <div className="col-2">
                <div className="woocommerce-shipping-fields">

                    <p className="form-row form-row notes" id="order_comments_field">
                        <label htmlFor="order_comments">Order Notes</label>
                        <textarea name="order_comments" className="input-text " id="order_comments"
                                  placeholder="Notes about your order, e.g. special notes for delivery." rows={2}
                                  cols={5} defaultValue={""}/>
                    </p>
                </div>
            </div> */}

<div className="col-1">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Order Notes</h3>
            </div>
            <div className="border-t border-gray-200">
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 px-4 py-5 sm:grid-cols-1 sm:px-6">
                    <div>
                        {/* <label htmlFor="billing_first_name" className="block text-sm font-medium text-gray-700">
                        Order Notes
                        </label> */}
                        
                        {/* <input
                            type="text"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            placeholder="Enter First Name"
                            // onChange={(e) => setFirstname(e.target.value)}
                        /> */}
                        <textarea name="order_comments" 
                        // className="input-text " 
                        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
    id="order_comments"
                                  placeholder="Notes about your order, e.g. special notes for delivery." 
                                  rows={2}
                                  cols={5} defaultValue={""}/>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>


        </Fragment>
    );
}

export default ShippingFields;
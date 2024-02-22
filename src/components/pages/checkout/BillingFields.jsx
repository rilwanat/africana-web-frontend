import React, { Fragment } from 'react';

function BillingFields() {

    return (
        <Fragment>
            <div className="col-1">
                <div className="woocommerce-billing-fields">
                    <h3>Billing Details</h3>

                    <p className="form-row form-row form-row-first validate-required" id="billing_first_name_field">
                        <label htmlFor="billing_first_name">
                            First Name <abbr className="required" title="required">*</abbr>
                        </label>
                        <input
                            type="text"
                            className="input-text"
                            name="billing_first_name"
                            id="billing_first_name"
                            placeholder="Enter firstname"
                            autoComplete="given-name"
                        />
                    </p>
                    <p className="form-row form-row form-row-last validate-required" id="billing_last_name_field">
                        <label htmlFor="billing_last_name">
                            Last Name <abbr className="required" title="required">*</abbr>
                        </label>
                        <input
                            type="text"
                            className="input-text"
                            name="billing_last_name"
                            id="billing_last_name"
                            placeholder="Enter lastname"
                            autoComplete="family-name"
                        />
                    </p>
                    <div className="clear" />

                    <p className="form-row form-row form-row-first validate-required validate-email" id="billing_email_field">
                        <label htmlFor="billing_email">
                            Email Address <abbr className="required" title="required">*</abbr>
                        </label>
                        <input
                            type="email"
                            className="input-text"
                            name="billing_email"
                            id="billing_email"
                            placeholder="Enter email address"
                            autoComplete="email"
                        />
                    </p>
                    <p className="form-row form-row form-row-last validate-required validate-phone" id="billing_phone_field">
                        <label htmlFor="billing_phone">Phone <abbr className="required" title="required">*</abbr></label>
                        <input
                            type="tel"
                            className="input-text"
                            name="billing_phone"
                            id="billing_phone"
                            placeholder="Enter phone number"
                            autoComplete="tel"
                        />
                    </p>

                    <div className="clear" />

                    <p className="form-row form-row form-row-wide address-field validate-required" id="billing_address_1_field">
                        <label htmlFor="billing_address_1">Address <abbr className="required" title="required">*</abbr></label>
                        <input
                            type="text"
                            className="input-text"
                            name="billing_address_1"
                            id="billing_address_1"
                            placeholder="Street address"
                            autoComplete="address-line1"
                        />
                    </p>
                    <p className="form-row form-row form-row-wide address-field" id="billing_address_2_field">
                        <input
                            type="text"
                            className="input-text"
                            name="billing_address_2"
                            id="billing_address_2"
                            placeholder="Apartment, suite, unit etc. (optional)"
                            autoComplete="address-line2"
                        />
                    </p>
                    <p className="form-row form-row address-field validate-postcode validate-required form-row-first woocommerce-invalid-required-field" id="billing_city_field">
                        <label htmlFor="billing_city">City <abbr className="required" title="required">*</abbr></label>
                        <input
                            type="text"
                            className="input-text"
                            name="billing_city"
                            id="billing_city"
                            placeholder="Billing city"
                            autoComplete="address-level2"
                        />
                    </p>
                    <p className="form-row form-row form-row-last address-field validate-required validate-postcode" id="billing_postcode_field">
                        <label htmlFor="billing_postcode">Postcode / ZIP <abbr className="" title=""></abbr></label>
                        <input
                            type="text"
                            className="input-text"
                            name="billing_postcode8"
                            id="billing_postcode"
                            placeholder="Postal code"
                            autoComplete="postal-code"
                        />
                    </p>
                    <p className="form-row form-row form-row-wide address-field update_totals_on_change validate-required" id="billing_state_field">
                        <label htmlFor="billing_state">State <abbr className="required" title="required">*</abbr></label>
                        <select name="billing_state" id="billing_state" autoComplete="state" className="state_to_state state_select">
                            <option>Select state </option>
                            {/* {state.map((item, index) => (
                                <option key={index} value={item.code}>{item.name}</option>
                            ))} */}
                        </select>
                    </p>
                    <p className="form-row form-row form-row-wide address-field update_totals_on_change validate-required" id="billing_country_field">
                        <label htmlFor="billing_country">Country <abbr className="required" title="required">*</abbr></label>
                        <select name="billing_country" id="billing_country" autoComplete="country" className="country_to_state country_select">
                            <option>Select country </option>
                            {/* {countries.map((item, index) => (
                                <option key={index} value={item.code}>{item.name}</option>
                            ))} */}
                        </select>
                    </p>
                    <div className="clear" />
                </div>
            </div>
        </Fragment>
    );
}

export default BillingFields;

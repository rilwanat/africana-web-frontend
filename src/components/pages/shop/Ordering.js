import React, {Fragment} from 'react';

/**
 * product Ordering component
 * @returns {*}
 * @constructor
 */
function Ordering({ handleDefaultSorting }) {

    const handleChange = (event) => {
        const selectedOption = event.target.value;
        handleDefaultSorting(selectedOption);
    };

    return (
        <Fragment>
            <form className="woocommerce-ordering">
            {/* <div className="woocommerce-ordering"> */}
                <select name="orderby" className="orderby" onChange={handleChange}>
                    <option value="default">Default sorting</option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="rating">Sort by average rating</option>
                    <option value="newness">Sort by newness</option>
                    <option value="lowprice">Sort by price: low to high</option>
                    <option value="highprice">Sort by price: high to low</option>
                </select>
                {/* <input type="hidden" name="post_type" defaultValue="product"/> */}
            </form>
            {/* </div> */}
        </Fragment>
    );
}

export default Ordering;
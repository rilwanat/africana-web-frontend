import React, {Fragment} from 'react';

import { useNavigate } from "react-router-dom";


function ShopWidget() {

    const navigate = useNavigate();

    const navigateToOnSale = () => {
        // setHoveredMenuItem("")
        // setIsMenuOpen(false);
        const productSlug = "all products";
        navigate('/on-sale', { state: { productSlug }, replace: true });
        //window.location.reload();
      }

    return (
        <Fragment>
            <div className="widget payment-widget">
                <h3 className='text-white'>Shop</h3>
                <ul>
                    <li><a onClick={navigateToOnSale} style={{ cursor: 'pointer' }}>Shop</a></li>
                    <li><a >New arrivals</a></li>
                    <li><a >Sales</a></li>
                    <li><a >Wishlist</a></li>
                </ul>
            </div>
        </Fragment>
    );
}

export default ShopWidget;
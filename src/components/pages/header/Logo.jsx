import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

import logo from '../../../assets/logos/Logo Wordmark.png';

/**
 * logo component
 * @returns {*}
 * @constructor
 */
function Logo() {

    return (
        <Fragment>
            <Link className="logo-middle" to="/">
                <img src={logo} alt=""/>
            </Link>
        </Fragment>
    );
}

export default Logo;
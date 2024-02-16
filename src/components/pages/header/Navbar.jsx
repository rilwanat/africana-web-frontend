import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import Logo from "./Logo";
import './navBar.css';

/**
 * nav bar component
 * @param options
 * @returns {*}
 * @constructor
 */
function Navbar({options}) {

    return (
        <Fragment>
            {/* <div id="navbar" className={"navbar-collapse collapse navigation-holder " + (options.mobileNav ? 'slideInn' : '')}> */}
            <div id="navbar" className={" " + (options.mobileNav ? 'slideInn' : '')}>
                <button onClick={options.onMobileNavClick} className="close-navbar"><i className="ti-close"/></button>
                <ul className="nav navbar-nav">
                    <li className=""><NavLink to="/">Home</NavLink></li>
                    <li className=""><NavLink to="/about">About</NavLink></li>
                    {/* <Logo onClick={() =>{}}/> */}
                    <li className=""><NavLink to="/shop">Shop</NavLink></li>
                    <li className=""><NavLink to="/sizes">Sizes</NavLink></li>
                </ul>
            </div>
            {/* end of nav-collapse */}
        </Fragment>
    );
}

export default Navbar;
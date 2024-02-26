import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import Logo from "./Logo";
import './navBar.css';

import CloseIcon from '@mui/icons-material/Close';

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
            <div id="navbar" className={" " + (options.mobileNav ? 'slideInn' : '')} >
                {/* <button onClick={options.onMobileNavClick} className="close-navbar"> */}
                    {/* <i className="ti-close"/> */}
                    {/* <CloseIcon onClick={options.onMobileNavClick} className="mt-4 mr-4 newsletter-close-btn" style={{ cursor: 'pointer', width: '20px', height: '20px'}}/> */}
                        
                    {/* </button> */}

                    <CloseIcon onClick={options.onMobileNavClick} className="close-navbar ti-close " style={{ cursor: 'pointer', width: '30px', height: '20px'}}/>
                <ul className="nav navbar-nav">
                    <li className="" ><NavLink style={{ fontSize: '14px', color: '#fff' }} to="/">HOME</NavLink></li>
                    <li className=""><NavLink style={{ fontSize: '14px', color: '#fff' }} to="/about">ABOUT</NavLink></li>
                    {/* <Logo onClick={() =>{}}/> */}
                    <li className=""><NavLink style={{ fontSize: '14px', color: '#fff' }} to="/shop">SHOP</NavLink></li>
                    <li className=""><NavLink style={{ fontSize: '14px', color: '#fff' }} to="/sizes">SIZES</NavLink></li>
                </ul>
            </div>
            {/* end of nav-collapse */}
        </Fragment>
    );
}

export default Navbar;
import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import HeaderRight from './HeaderRight';
import HeaderLeft from './HeaderLeft';
import Navbar from './Navbar';

import logo from '../../../assets/logos/Logo Wordmark.png';
import logo2 from '../../../assets/logos/Circle Icon_1.png';

/**
 * demo data
 */
// import data from '../../data/topbar-text.json';

/**
 * Header component
 * @param options
 * @returns {*}
 * @constructor
 */
function Header({ options, cart }) {

    const data = {
        "content": "Join our showroom and get 1 % off ! Coupon code : AFR222"
    }

    return (
        <Fragment>
            {/* Start header */}
            <header id="header" className="site-header header-style-1">
                {/* <div className="topbar">
                    <div className="topbar-text">
                        <p>{data.content}</p>
                    </div>
                </div> */}
                {/* end topbar */}
                <nav className="navigation navbar navbar-default" >
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="open-btn"// flex items-center justify-center" 
                            onClick={options.onMobileNavClick}>
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                                {/* <img src={logo2} className='w-6 h-6'/> */}
                            </button>
                            <Link className="mobile-only navbar-brand" to="/">
                                <img src={logo} alt="" className="h-10 w-48 object-scale-down"/>
                            </Link>

                        </div>

                        <HeaderLeft options={options}/>

                        <Navbar options={options}/>

                        <HeaderRight options={options} cart={cart} />

                    </div>
                    {/* end of container */}
                </nav>
            </header>
            {/* end of header */}
        </Fragment>
    );
}

export default Header;
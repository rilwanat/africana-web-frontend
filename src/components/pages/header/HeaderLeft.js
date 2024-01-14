import React, {Fragment} from 'react';

// import logo from '../../../assets/logos/Circle Icon.png';
import logo from '../../../assets/logos/Logo Wordmark.png';
//import Logo from "./Logo";
import slidbarlogo from '../../../assets/logos/Couture 2.png';

import CloseIcon from '@mui/icons-material/Close';

/**
 * side info left menu component
 * @param options
 * @returns {*}
 * @constructor
 */
function HeaderLeft({options}) {

    return (
        <Fragment>
            <div className="header-left">
                <img src={logo} onClick={options.onSideInfoClick} className={`side-info-bars w-50 h-10 object-scale-down mr-3`} />
                {/* <div className="side-info-bars" onClick={options.onSideInfoClick}>
                    <span/>
                    <span/>
                    <span/>
                </div> */}
                <div className={"side-info-content " + (options.sideInfo ? 'toggle-side-info' : '')}>
                    <button className="btn side-info-close-btn" onClick={options.onSideInfoClick}>< CloseIcon style={{ color: "#c8c8c8" }}/>
                    </button>
                    <div className="logo">
                        <img src={slidbarlogo} alt=""/>
                    </div>
                    <div className="text">
                        <p>Africana is a fashion movement that skillfully merges African heritage with modern aesthetics.</p>
                        <ul className="info" >
                            <li style={{ color: "#686868" }}>Contact us: +234 909 207 5553</li>
                            <li style={{ color: "#686868" }}>Mail us: hello@shopafricana.co</li>
                        </ul>
                        <ul className="social-links">
                            <li><a ><i className="ti-facebook" style={{ color: "#ffffff" }}/></a></li>
                            <li><a ><i className="ti-twitter-alt" style={{ color: "#ffffff" }}/></a></li>
                            {/* <li><a ><i className="ti-pinterest"/></a></li> */}
                            {/* <li><a ><i className="ti-vimeo-alt"/></a></li> */}
                        </ul>
                    </div>
                </div>
                <div className="search-area ">
                    <form className=''>
                        <button type="submit"><i className="fi flaticon-search "/></button>
                        <input type="text" style={{ marginTop: '2px' }} placeholder="Search.."/>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default HeaderLeft;
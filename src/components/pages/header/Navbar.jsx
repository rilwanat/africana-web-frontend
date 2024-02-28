import React, {Fragment} from 'react';
import { Link, NavLink, useNavigate, useParams, useLocation } from 'react-router-dom';

import logo from '../../../assets/logos/Logo Wordmark 1.png';
import logo2 from '../../../assets/logos/Circle Icon_1.png';

import './navBar.css';

import CloseIcon from '@mui/icons-material/Close';

/**
 * nav bar component
 * @param options
 * @returns {*}
 * @constructor
 */
function Navbar({options}) {

    const navigate = useNavigate();
    const handleNavigateCategory = (catSlug) => {
        navigate('/categories', { state: { catSlug } });
    }
    

    return (
        <Fragment>
            {/* <div id="navbar" className={"navbar-collapse collapse navigation-holder " + (options.mobileNav ? 'slideInn' : '')}> */}
            <div id="navbar" className={" " + (options.mobileNav ? 'slideInn' : '')} >
                {/* <button onClick={options.onMobileNavClick} className="close-navbar"> */}
                    {/* <i className="ti-close"/> */}
                    {/* <CloseIcon onClick={options.onMobileNavClick} className="mt-4 mr-4 newsletter-close-btn" style={{ cursor: 'pointer', width: '20px', height: '20px'}}/> */}
                        
                    {/* </button> */}

                    <CloseIcon onClick={options.onMobileNavClick} className="close-navbar ti-close " style={{ cursor: 'pointer', width: '30px', height: '20px'}}/>
                <ul className="nav navbar-nav" 
                onClick={options.onMobileNavClick}
                >

<NavLink to="/" >

<img src={logo} alt="" 
                                className="mobile-only h-10 w-52 object-scale-down mt-10" 
                                style={{ 
                                    marginLeft: '10px', 
                                    width: '200px',
                                    height: '30px'
                                    }}/>
                                    <hr className='mobile-only mt-4'/>
</NavLink>


                    <li className="" ><NavLink style={{ fontSize: '14px', color: '#fff' }} to="/about">ABOUT</NavLink></li> 
                    <li className="" ><a style={{ fontSize: '14px', color: '#fff', cursor: 'pointer' }} onClick={() => {handleNavigateCategory('men')}} 
                    // to="/categories/men" 
                    >MEN</a></li>
                    <li className="" ><a style={{ fontSize: '14px', color: '#fff', cursor: 'pointer' }} onClick={() => {handleNavigateCategory('women')}} 
                    // to="/categories/women"
                    >WOMEN</a></li>
                    <li className="" ><a style={{ fontSize: '14px', color: '#000', cursor: 'pointer' }} onClick={() => {handleNavigateCategory('essentials')}}  
                    >ESSENTIALS</a></li>
                    {/* <li className="" ><NavLink style={{ fontSize: '14px', color: '#fff' }} to="/">STORIES</NavLink></li> */}
                    <li className="" ><NavLink style={{ fontSize: '14px', color: '#fff' }} to="/shop">ON SALE</NavLink></li>
                    <li className="" ><NavLink style={{ fontSize: '14px', color: '#fff' }} to="/sizes">SIZES</NavLink></li>

                    {/* <li className="" ><NavLink style={{ fontSize: '14px', color: '#000' }} to="/">HOME</NavLink></li>                   
                    <li className=""><NavLink style={{ fontSize: '14px', color: '#000' }} to="/shop">SHOP</NavLink></li>
                    <li className=""><NavLink style={{ fontSize: '14px', color: '#000' }} to="/sizes">SIZES</NavLink></li> */}
                </ul>
            </div>
            {/* end of nav-collapse */}
        </Fragment>
    );
}

export default Navbar;
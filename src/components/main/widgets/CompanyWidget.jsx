import React, {Fragment} from 'react';
import { useNavigate } from "react-router-dom";


function CompanyWidget() {

    const navigate = useNavigate();

    const navigateToAbout = () => {
        // setHoveredMenuItem("")
        // setIsMenuOpen(false);
        //const productSlug = "all products";
        navigate('/about-us', { });
        //window.location.reload();
      }

      const navigateToContact = () => {
        // setHoveredMenuItem("")
        // setIsMenuOpen(false);
        //const productSlug = "all products";
        navigate('/contact', { });
        //window.location.reload();
      }


    return (
        <Fragment>
            <div className="widget company-widget">
                <h3 className='text-white'>About</h3>
                <ul>
                    <li><a onClick={navigateToAbout} style={{ cursor: 'pointer' }}>Discover us</a></li>
                    <li><a onClick={() => {navigateToContact()}} style={{ cursor: 'pointer' }}>Contact</a></li>
                </ul>
            </div>
        </Fragment>
    );
}

export default CompanyWidget;
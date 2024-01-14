import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

// import imgCta from '../../assets/images/cta.jpg';
import imgCta from '../../assets/images/cta2.webp';

/**
 * CTA action display on default home page
 * @returns {*}
 * @constructor
 */
function CtaSection() {

    return (
        <Fragment>
            {/* start cta-section */}
            <section className="cta-section" loading="lazy" style={{ background: `url(${imgCta})  center/cover no-repeat local` }}>
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="content-area">
                                {/* <span>ART OF LIFE</span> */}
                                <h3>ART OF LIFE</h3>
                                {/* <p></p> */}
                                    <Link className="theme-btn-s2" to="/shop-full-width">
                                        Shop the Collection
                                    </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end cta-section */}
        </Fragment>
    );
}

export default CtaSection;
import React, {Fragment} from 'react';
import { useNavigate } from "react-router-dom";

function PageTitle({name}) {

    const navigate = useNavigate();

    const navigateToHome = () => {
        // setHoveredMenuItem("")
        // setIsMenuOpen(false);
        // const productSlug = "all products";
        navigate('/', { state: {  }, replace: true });
        //window.location.reload();
      }

    return (
        <Fragment>
            {/* start page-title */}
            <section className="page-title">
                <div className="page-title-container">
                    <div className="page-title-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col col-xs-12">
                                    <h2>{name}</h2>
                                    <ol className="breadcrumb">
                                        <li>
                                            <p onClick={() => {navigateToHome()}} >Home</p>
                                        </li>
                                        <li>{name}</li>
                                    </ol>
                                </div>
                            </div>
                            {/* end row */}
                        </div>
                        {/* end container */}
                    </div>
                </div>
            </section>
            {/* end page-title */}
        </Fragment>
    );
}

export default PageTitle;
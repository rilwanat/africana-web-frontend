import React, {Fragment, useState} from 'react';
import ClientReviewItem from "./ClientReviewItem";
import AddReview from "./AddReview";

import reviewProfilePic from "../../assets/images/shop/shop-single/review/img-1.jpg"

/**
 * Product Info Tabs Component
 * @returns {*}
 * @constructor
 */
function ProductInfoTabs() {

    /**
     * demo data
     */
    const review = "The attention to detail, from the precision stitching to the sturdy hardware, reflects the brand's commitment to excellence.\n";

    const [openTab, setOpenTab] = useState(1);

    const HandleOpenTabStatus = (event, data) => {
        event.preventDefault();
        setOpenTab(data);
    };

    return (
        <Fragment>
            <div className="single-product-info">
                {/* Nav tabs */}
                <ul className="nav nav-tabs" role="tablist">
                    <li onClick={(event) => {
                        HandleOpenTabStatus(event, 1)
                    }} className={" " + (openTab == 1 ? 'active' : '')}><a href="#01" data-toggle="tab">Description</a>
                    </li>
                    <li onClick={(event) => {
                        HandleOpenTabStatus(event, 2)
                    }} className={" " + (openTab == 2 ? 'active' : '')}><a href="#02" data-toggle="tab">Review (03)</a>
                    </li>
                </ul>
                {/* Tab panes */}
                <div className="tab-content">
                    <div role="tabpanel" className={"tab-pane fade " + (openTab == 1 ? 'in active' : '')} id="01">
                        <p> {review} </p>
                    </div>
                    <div role="tabpanel" className={"tab-pane fade " + (openTab == 2 ? 'in active' : '')} id="02">
                        <div className="row">
                            <div className="col col-xs-12">
                                <ClientReviewItem img={reviewProfilePic} time="1 day ago" text={review} />
                                <ClientReviewItem img={reviewProfilePic} time="1 day ago" text={review} />
                                <ClientReviewItem img={reviewProfilePic} time="2 days ago" text={review} />
                            </div>
                            {/* end col */}
                            <div className="col col-xs-12 review-form-wrapper">
                                <AddReview/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ProductInfoTabs;
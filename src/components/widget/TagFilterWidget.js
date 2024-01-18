import React, {Fragment} from 'react';

/**
 * Tag Filter Widget
 * @returns {*}
 * @constructor
 */
function TagFilterWidget() {

    return (
        <Fragment>
            <div className="widget woocommerce widget_product_tag_cloud">
                <h3>Filter by Product tags</h3>
                <div className="tagcloud flex" >
                    <a href="#" className="tag-cloud-link" style={{marginTop: '2px'}}>Women</a>
                    <a href="#" className="tag-cloud-link" style={{marginTop: '2px'}}>Brown</a>
                    <a href="#" className="tag-cloud-link" style={{marginTop: '2px'}}>Men</a>
                </div>
            </div>
        </Fragment>
    );
}

export default TagFilterWidget;
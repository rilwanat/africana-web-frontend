import React, {Fragment} from 'react';

/**
 * Search Widget
 * @param title
 * @returns {*}
 * @constructor
 */
function SearchWidget({handleDataSearch, title}) {

    return (
        <Fragment>
            <div className="widget search-widget" >
                {
                    title.length > 0 ? <h3>{title}</h3> : ''
                }

                {/* <form> */}
                    <div>
                        <input onChange={handleDataSearch} type="text" placeholder="Search.."/>
                        {/* <button><i className="ti-search"/></button> */}
                    </div>
                {/* </form> */}
            </div>
        </Fragment>
    );
}

export default SearchWidget;
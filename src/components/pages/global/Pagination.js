import React, {Fragment, useState, useEffect } from 'react';

/**
 * Pagination component
 * @param extraClass
 * @returns {*}
 * @constructor
 */
function Pagination({extraClass, handlePageClick, totalProducts}) {

    const [activePage, setActivePage] = useState();
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const pages = Math.ceil(totalProducts / 16); // 16 products per page
        setTotalPages(pages);
    }, [totalProducts]);

    const handleClick = (pageNumber) => {
        if (handlePageClick) {
            setActivePage(pageNumber);
            handlePageClick(pageNumber);
        }
    };

    // Generate pagination dynamically based on total pages
    const pagesArray = [];
    for (let i = 1; i <= totalPages; i++) {
        pagesArray.push(
            <li key={i} className={activePage === i ? "active" : ""}>
                <a 
                style={{cursor: "pointer"}}
                onClick={() => handleClick(i)}>{i}</a>
            </li>
        );
    }

    return (
        <Fragment>
            <div className={"pagination-wrapper " + extraClass}>
                <ul className="pg-pagination">
                    <li>
                        <a href="#" aria-label="Previous">
                            <i className="fi flaticon-back"/>
                        </a>
                    </li>
                    {pagesArray}
                    <li>
                        <a href="#" aria-label="Next">
                            <i className="fi flaticon-next"/>
                        </a>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
}

export default Pagination;
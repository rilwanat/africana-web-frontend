import React, {Fragment, useState, useEffect } from 'react';

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Pagination({extraClass, handlePageClick, totalProducts, range}) {

    const [activePage, setActivePage] = useState();
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const pages = Math.ceil(totalProducts / 16); // 16 products per page
        setTotalPages(pages);

        setActivePage(1);
    }, [totalProducts]);

    const handleClick = (pageNumber) => {
        // if (handlePageClick) {
        //     setActivePage(pageNumber);
        //     handlePageClick(pageNumber);
        // }

        if (handlePageClick) {
            let newPage = pageNumber;
            // Ensure newPage is within bounds
            if (newPage < 1) {
                newPage = 1;
            } else if (newPage > totalPages) {
                newPage = totalPages;
            }
            setActivePage(newPage);
            //alert("page" + " " + newPage + " " +  range[0]  + " " + range[1]);
            handlePageClick("page-number", newPage, range[0], range[1]);
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
                        <a aria-label="Previous" style={{cursor: "pointer"}}>
                            {/* <i className="fi flaticon-back"/> */}
                            <NavigateBeforeIcon onClick={() => {handleClick(activePage-1)}}/>
                        </a>
                    </li>
                    {pagesArray}
                    <li>
                        <a aria-label="Next" style={{cursor: "pointer"}}>
                            {/* <i className="fi flaticon-next"/> */}
                            <NavigateNextIcon onClick={() => {handleClick(activePage+1)}}/>
                        </a>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
}

export default Pagination;
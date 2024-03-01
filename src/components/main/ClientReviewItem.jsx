import React, {Fragment} from 'react';

import StarRateIcon from '@mui/icons-material/StarRate';

/**
 * Client Review Item Component
 * @param img
 * @param time
 * @param text
 * @returns {*}
 * @constructor
 */
function ClientReviewItem({img, time, text}) {

    return (
        <Fragment>
            <div className="client-rv">
                <div className="client-pic">
                    <img src={process.env.PUBLIC_URL + img} alt=""/>
                </div>
                <div className="details">
                    <div className="name-rating-time">
                        <div className="name-rating">
                            <div>
                                <h4>Rbapps</h4>
                            </div>
                            <div className="rating">
                                {/* <i className="fi flaticon-star"/>
                                <i className="fi flaticon-star"/>
                                <i className="fi flaticon-star"/>
                                <i className="fi flaticon-star"/>
                                <i className="fi flaticon-star"/> */}
                                
                                <a className="star-1" 
                                // onClick={() => handleStarClick(1)} 
                                // style={{ cursor: 'pointer' }}
                                >
                                {/* <i className="ti-star" style={{ color: star < 1 ? 'grey' : 'black' }}/> */}
                                <StarRateIcon className='-mt-2' style={{width: '20px', height: '20px', color: 'black' }}/>
                            </a>
                            <a className="star-1" 
                            // onClick={() => handleStarClick(2)} 
                            // style={{ cursor: 'pointer' }}
                            >
                                {/* <i className="ti-star" style={{ color: star < 2 ? 'grey' : 'black' }}/> */}
                                <StarRateIcon className='-mt-2' style={{width: '20px', height: '20px',  color: 'black' }}/>
                            </a>
                            <a className="star-1" 
                            // onClick={() => handleStarClick(3)} 
                            // style={{ cursor: 'pointer' }}
                            >
                                {/* <i className="ti-star" style={{ color: star < 3 ? 'grey' : 'black' }}/> */}
                                <StarRateIcon className='-mt-2' style={{width: '20px', height: '20px',  color: 'black' }}/>
                            </a>
                            <a className="star-1" 
                            // onClick={() => handleStarClick(4)} 
                            // style={{ cursor: 'pointer' }}
                            >
                                {/* <i className="ti-star" style={{ color: star < 4 ? 'grey' : 'black' }}/> */}
                                <StarRateIcon className='-mt-2' style={{width: '20px', height: '20px',  color: 'black' }}/>
                            </a>
                            <a className="star-1" 
                            // onClick={() => handleStarClick(5)} 
                            // style={{ cursor: 'pointer' }}
                            >
                                {/* <i className="ti-star" style={{ color: star < 5 ? 'grey' : 'black' }}/> */}
                                <StarRateIcon className='-mt-2' style={{width: '20px', height: '20px',  color: 'black' }}/>
                            </a>
                            </div>
                        </div>
                        <div className="time">
                            <span>{time}</span>
                        </div>
                    </div>
                    <div className="review-body">
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ClientReviewItem;
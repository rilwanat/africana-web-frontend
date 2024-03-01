import React, {Fragment, useState} from 'react';

import StarRateIcon from '@mui/icons-material/StarRate';

/**
 * Add Review component
 * @returns {*}
 * @constructor
 */
function AddReview() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [review, setReview] = useState('');
    const [star, setStar] = useState(0);

    const handleStarClick = (rating) => {
        setStar(rating);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission (e.g., send the review data to a server).

        alert(
            'Name:' + name + "\n" +
        'Email:' + email + "\n" +
        'Review:' + review + "\n" +
        'Star Rating:' + star);
    };

    return (
        <Fragment>
            <div className="review-form">
                <h4>Here you can review our {'#'} product</h4>
                <form>
                    <div>
                        <input type="text" className="form-control" placeholder="Name *" required/>
                    </div>
                    <div>
                        <input type="email" className="form-control" placeholder="Email *" required/>
                    </div>
                    <div>
                        <textarea className="form-control" placeholder="Review *" defaultValue={""}/>
                    </div>
                    <div className="rating-wrapper">
                        <div className="rating">
                            <a className="star-1" onClick={() => handleStarClick(1)} style={{ cursor: 'pointer' }}>
                                {/* <i className="ti-star" style={{ color: star < 1 ? 'grey' : 'black' }}/> */}
                                <StarRateIcon style={{width: '20px', height: '20px', color: star < 1 ? 'grey' : 'black' }}/>
                            </a>
                            <a className="star-1" onClick={() => handleStarClick(2)} style={{ cursor: 'pointer' }}>
                                {/* <i className="ti-star" style={{ color: star < 2 ? 'grey' : 'black' }}/> */}
                                <StarRateIcon style={{width: '20px', height: '20px',  color: star < 2 ? 'grey' : 'black' }}/>
                            </a>
                            <a className="star-1" onClick={() => handleStarClick(3)} style={{ cursor: 'pointer' }}>
                                {/* <i className="ti-star" style={{ color: star < 3 ? 'grey' : 'black' }}/> */}
                                <StarRateIcon style={{width: '20px', height: '20px',  color: star < 3 ? 'grey' : 'black' }}/>
                            </a>
                            <a className="star-1" onClick={() => handleStarClick(4)} style={{ cursor: 'pointer' }}>
                                {/* <i className="ti-star" style={{ color: star < 4 ? 'grey' : 'black' }}/> */}
                                <StarRateIcon style={{width: '20px', height: '20px',  color: star < 4 ? 'grey' : 'black' }}/>
                            </a>
                            <a className="star-1" onClick={() => handleStarClick(5)} style={{ cursor: 'pointer' }}>
                                {/* <i className="ti-star" style={{ color: star < 5 ? 'grey' : 'black' }}/> */}
                                <StarRateIcon style={{width: '20px', height: '20px',  color: star < 5 ? 'grey' : 'black' }}/>
                            </a>
                        </div>
                        <div className="submit">
                            <button type="submit" className="theme-btn">Post review</button>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default AddReview;
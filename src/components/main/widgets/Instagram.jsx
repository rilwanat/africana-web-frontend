import React, { Fragment } from 'react';
import logo from '../../../assets/logos/Logo Wordmark 1.png';
import logo2 from '../../../assets/images/newsletter-1.png';

const instagramItems = [
    {
        id: "1",
        img: logo2,
        link: "#"
    },
    {
        id: "2",
        img: logo2,
        link: "#"
    },
    {
        id: "3",
        img: logo2,
        link: "#"
    },
    {
        id: "4",
        img: logo2,
        link: "#"
    },
    {
        id: "5",
        img: logo2,
        link: "#"
    },
    {
        id: "6",
        img: logo2,
        link: "#"
    }
];

function Instagram() {
    return (
        <div>
            <Fragment>
                <section className="instagram-section">
                    <div className="container-1410">
                        <div className="row">
                            <div className="col col-xs-12">
                                <div className="instagram-inner">
                                    <div className="instagram-text">
                                        <h3>Follow our Instagram</h3>
                                        <a href="https://www.instagram.com/africanacouture" target='_blank' >@africanacouture</a>
                                    </div>
                                    <div className="instagram-grids clearfix">
                                        {instagramItems.map((item, index) => (
                                            <div key={index} className="grid">
                                                <a >
                                                    <img loading="lazy" src={item.img} alt="" />
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        </div>
    );
}

export default Instagram;

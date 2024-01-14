import React, {Fragment} from 'react';
import Slider from "react-slick";
// import ReactTooltip from 'react-tooltip';

import './products.css';

import imgx from '../../assets/images/shop/img-2.jpg';
// import imgx from '../../assets/images/site-products/3.jpg';
import {Link} from "react-router-dom";

import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';


/**
 * Recent Products component
 * @param onQuickViewClick
 * @returns {*}
 * @constructor
 */
function RecentProducts({onQuickViewClick}) {

    /**
     * slider settings
     */
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 300,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const productsData = [
        {
            "SKU": "71236-1",
            "Categories": [{
                "id": 1,
                "name": "Clothing",
                "link": "#"
            },
            {
                "id": 2,
                "name": "Tops",
                "link": "#"
            },
            {
                "id": 3,
                "name": "Women",
                "link": "#"
            }],
            "Tags": [{
                "id": 1,
                "name": "Button",
                "link": "#"
            },
            {
                "id": 2,
                "name": "Red",
                "link": "#"
            },
            {
                "id": 3,
                "name": "Tshirt",
                "link": "#"
            }],
            "content": "Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly",
            "reviewCounts": 2,
            "reviews": [
                {
                    "id": 1,
                    "name": "Mice",
                    "stars": 5,
                    "coment" : "Waved about helplessly as he looked What's happened to me he thought. It wasn't a dreamtrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather",
                    "dateTime": "1 DAY AGO",
                    "pic" : "/assets/images/shop/shop-single/review/img-1.jpg"
                },
                {
                    "id": 2,
                    "name": "Hone",
                    "stars": 5,
                    "coment" : "Waved about helplessly as he looked What's happened to me he thought. It wasn't a dreamtrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather",
                    "dateTime": "1 DAY AGO",
                    "pic" : "/assets/images/shop/shop-single/review/img-2.jpg"
                },
                {
                    "id": 3,
                    "name": "Piloa",
                    "stars": 5,
                    "coment" : "Waved about helplessly as he looked What's happened to me he thought. It wasn't a dreamtrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather",
                    "dateTime": "2 DAY AGO",
                    "pic" : "/assets/images/shop/shop-single/review/img-3.jpg"
                }
            ],
            "starts": 4.5,
            "title": "Fashion tops",
            "price": "79,000.00",
            "oldPrice": "129,000.00",
            "Symbol" : "N",
            "mainImg" : imgx,
            "gallery": [
                {
                    "id": 1,
                    "img": "/assets/images/shop/shop-single/img-1.jpg",
                    "thumb": "/assets/images/shop/shop-single/thumb/img-1.jpg"
                },
                {
                    "id": 2,
                    "img": "/assets/images/shop/shop-single/img-2.jpg",
                    "thumb": "/assets/images/shop/shop-single/thumb/img-2.jpg"
                }
            ]
        },
        {
            "SKU": "71236-2",
            "Categories": [{
                "id": 1,
                "name": "Clothing",
                "link": "#"
            },
            {
                "id": 2,
                "name": "Tops",
                "link": "#"
            }],
            "Tags": [{
                "id": 1,
                "name": "Button",
                "link": "#"
            },
            {
                "id": 3,
                "name": "Tshirt",
                "link": "#"
            }],
            "content": "Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly",
            "reviewCounts": 2,
            "reviews": [
                {
                    "id": 1,
                    "name": "Mice",
                    "stars": 5,
                    "coment" : "Waved about helplessly as he looked What's happened to me he thought. It wasn't a dreamtrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather",
                    "dateTime": "1 DAY AGO",
                    "pic" : "/assets/images/shop/shop-single/review/img-1.jpg"
                },
                {
                    "id": 2,
                    "name": "Hone",
                    "stars": 5,
                    "coment" : "Waved about helplessly as he looked What's happened to me he thought. It wasn't a dreamtrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather",
                    "dateTime": "1 DAY AGO",
                    "pic" : "/assets/images/shop/shop-single/review/img-2.jpg"
                },
                {
                    "id": 3,
                    "name": "Piloa",
                    "stars": 5,
                    "coment" : "Waved about helplessly as he looked What's happened to me he thought. It wasn't a dreamtrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather",
                    "dateTime": "2 DAY AGO",
                    "pic" : "/assets/images/shop/shop-single/review/img-3.jpg"
                }
            ],
            "starts": 4.5,
            "title": "Women's T-shirt",
            "price": "650,129.00",
            "oldPrice": "650,129.00",
            "Symbol" : "N",
            "mainImg" : imgx,
            "gallery": [
                {
                    "id": 1,
                    "img": "/assets/images/shop/shop-single/img-1.jpg",
                    "thumb": "/assets/images/shop/shop-single/thumb/img-1.jpg"
                },
                {
                    "id": 2,
                    "img": "/assets/images/shop/shop-single/img-2.jpg",
                    "thumb": "/assets/images/shop/shop-single/thumb/img-2.jpg"
                }
            ]
        },
        {
            "SKU": "71236-3",
            "Categories": [{
                "id": 1,
                "name": "Clothing",
                "link": "#"
            },
            {
                "id": 2,
                "name": "Tops",
                "link": "#"
            }],
            "Tags": [{
                "id": 1,
                "name": "Button",
                "link": "#"
            },
            {
                "id": 3,
                "name": "Tshirt",
                "link": "#"
            }],
            "content": "Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly",
            "reviewCounts": 2,
            "reviews": [
                {
                    "id": 1,
                    "name": "Mice",
                    "stars": 5,
                    "coment" : "Waved about helplessly as he looked What's happened to me he thought. It wasn't a dreamtrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather",
                    "dateTime": "1 DAY AGO",
                    "pic" : "/assets/images/shop/shop-single/review/img-1.jpg"
                },
                {
                    "id": 2,
                    "name": "Hone",
                    "stars": 5,
                    "coment" : "Waved about helplessly as he looked What's happened to me he thought. It wasn't a dreamtrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather",
                    "dateTime": "1 DAY AGO",
                    "pic" : "/assets/images/shop/shop-single/review/img-2.jpg"
                },
                {
                    "id": 3,
                    "name": "Piloa",
                    "stars": 5,
                    "coment" : "Waved about helplessly as he looked What's happened to me he thought. It wasn't a dreamtrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather",
                    "dateTime": "2 DAY AGO",
                    "pic" : "/assets/images/shop/shop-single/review/img-3.jpg"
                }
            ],
            "starts": 4.5,
            "title": "Short Sleeve",
            "price": "550,000.00",
            "oldPrice": "520,000.00",
            "Symbol" : "N",
            "mainImg" : imgx,
            "gallery": [
                {
                    "id": 1,
                    "img": "/assets/images/shop/shop-single/img-1.jpg",
                    "thumb": "/assets/images/shop/shop-single/thumb/img-1.jpg"
                },
                {
                    "id": 2,
                    "img": "/assets/images/shop/shop-single/img-2.jpg",
                    "thumb": "/assets/images/shop/shop-single/thumb/img-2.jpg"
                }
            ]
        },
        {
            "SKU": "71236-6",
            "Categories": [{
                "id": 1,
                "name": "Clothing",
                "link": "#"
            },
            {
                "id": 2,
                "name": "Tops",
                "link": "#"
            }],
            "Tags": [{
                "id": 1,
                "name": "Button",
                "link": "#"
            },
            {
                "id": 3,
                "name": "Tshirt",
                "link": "#"
            }],
            "content": "Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly",
            "reviewCounts": 2,
            "reviews": [
                {
                    "id": 1,
                    "name": "Mice",
                    "stars": 5,
                    "coment" : "Waved about helplessly as he looked What's happened to me he thought. It wasn't a dreamtrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather",
                    "dateTime": "1 DAY AGO",
                    "pic" : "/assets/images/shop/shop-single/review/img-1.jpg"
                },
                {
                    "id": 2,
                    "name": "Hone",
                    "stars": 5,
                    "coment" : "Waved about helplessly as he looked What's happened to me he thought. It wasn't a dreamtrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather",
                    "dateTime": "1 DAY AGO",
                    "pic" : "/assets/images/shop/shop-single/review/img-2.jpg"
                },
                {
                    "id": 3,
                    "name": "Piloa",
                    "stars": 5,
                    "coment" : "Waved about helplessly as he looked What's happened to me he thought. It wasn't a dreamtrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather",
                    "dateTime": "2 DAY AGO",
                    "pic" : "/assets/images/shop/shop-single/review/img-3.jpg"
                }
            ],
            "starts": 4.5,
            "title": "Stylish coat",
            "price": "790,000.00",
            "oldPrice": "790,000.00",
            "Symbol" : "N",
            "mainImg" : imgx,
            "gallery": [
                {
                    "id": 1,
                    "img": "/assets/images/shop/shop-single/img-1.jpg",
                    "thumb": "/assets/images/shop/shop-single/thumb/img-1.jpg"
                },
                {
                    "id": 2,
                    "img": "/assets/images/shop/shop-single/img-2.jpg",
                    "thumb": "/assets/images/shop/shop-single/thumb/img-2.jpg"
                }
            ]
        },
        {
            "SKU": "71236-4",
            "Categories": [{
                "id": 1,
                "name": "Clothing",
                "link": "#"
            },
            {
                "id": 2,
                "name": "Tops",
                "link": "#"
            }],
            "Tags": [{
                "id": 1,
                "name": "Button",
                "link": "#"
            },
            {
                "id": 3,
                "name": "Tshirt",
                "link": "#"
            }],
            "content": "Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly",
            "reviewCounts": 2,
            "reviews": [
                {
                    "id": 1,
                    "name": "Mice",
                    "stars": 5,
                    "coment" : "Waved about helplessly as he looked What's happened to me he thought. It wasn't a dreamtrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather",
                    "dateTime": "1 DAY AGO",
                    "pic" : "/assets/images/shop/shop-single/review/img-1.jpg"
                },
                {
                    "id": 2,
                    "name": "Hone",
                    "stars": 5,
                    "coment" : "Waved about helplessly as he looked What's happened to me he thought. It wasn't a dreamtrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather",
                    "dateTime": "1 DAY AGO",
                    "pic" : "/assets/images/shop/shop-single/review/img-2.jpg"
                },
                {
                    "id": 3,
                    "name": "Piloa",
                    "stars": 5,
                    "coment" : "Waved about helplessly as he looked What's happened to me he thought. It wasn't a dreamtrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather",
                    "dateTime": "2 DAY AGO",
                    "pic" : "/assets/images/shop/shop-single/review/img-3.jpg"
                }
            ],
            "starts": 4.5,
            "title": "Women Modern Shot Pant",
            "price": "1,980,000.00",
            "oldPrice": "1,980,000.00",
            "Symbol" : "N",
            "mainImg" : imgx,
            "gallery": [
                {
                    "id": 1,
                    "img": "/assets/images/shop/shop-single/img-1.jpg",
                    "thumb": "/assets/images/shop/shop-single/thumb/img-1.jpg"
                },
                {
                    "id": 2,
                    "img": "/assets/images/shop/shop-single/img-2.jpg",
                    "thumb": "/assets/images/shop/shop-single/thumb/img-2.jpg"
                }
            ]
        },
        {
            "SKU": "71236-5",
            "Categories": [{
                "id": 1,
                "name": "Clothing",
                "link": "#"
            },
            {
                "id": 2,
                "name": "Tops",
                "link": "#"
            }],
            "Tags": [{
                "id": 1,
                "name": "Button",
                "link": "#"
            },
            {
                "id": 3,
                "name": "Tshirt",
                "link": "#"
            }],
            "content": "Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly",
            "reviewCounts": 2,
            "reviews": [
                {
                    "id": 1,
                    "name": "Mice",
                    "stars": 5,
                    "coment" : "Waved about helplessly as he looked What's happened to me he thought. It wasn't a dreamtrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather",
                    "dateTime": "1 DAY AGO",
                    "pic" : "/assets/images/shop/shop-single/review/img-1.jpg"
                },
                {
                    "id": 2,
                    "name": "Hone",
                    "stars": 5,
                    "coment" : "Waved about helplessly as he looked What's happened to me he thought. It wasn't a dreamtrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather",
                    "dateTime": "1 DAY AGO",
                    "pic" : "/assets/images/shop/shop-single/review/img-2.jpg"
                },
                {
                    "id": 3,
                    "name": "Piloa",
                    "stars": 5,
                    "coment" : "Waved about helplessly as he looked What's happened to me he thought. It wasn't a dreamtrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather",
                    "dateTime": "2 DAY AGO",
                    "pic" : "/assets/images/shop/shop-single/review/img-3.jpg"
                }
            ],
            "starts": 4.5,
            "title": "Blue Jeans Pant for Men",
            "price": "520,000.00",
            "oldPrice": "520,000.00",
            "Symbol" : "N",
            "mainImg" : imgx,
            "gallery": [
                {
                    "id": 1,
                    "img": "/assets/images/shop/shop-single/img-1.jpg",
                    "thumb": "/assets/images/shop/shop-single/thumb/img-1.jpg"
                },
                {
                    "id": 2,
                    "img": "/assets/images/shop/shop-single/img-2.jpg",
                    "thumb": "/assets/images/shop/shop-single/thumb/img-2.jpg"
                }
            ]
        },
    ];

    return (
        <Fragment>
            {/* start recent-product-section */}
            <section className="trendy-product-section section-padding">

                <div className="container-1410">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="section-title-s2">
                                <h2>Recent products</h2>
                            </div>
                            <Link className="more-products" to="/shop-full-width">
                                More products
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="products-wrapper">
                                <ul className="products product-row-slider">
                                    <Slider {...settings}>
                                        {
                                            productsData.map((item, index) => (
                                                <li key={index} className="product">
                                                    <div className="product-holder">
                                                        {parseInt(item.price) < parseInt(item.oldPrice) ?
                                                            <div className="product-badge discount">
                                                                {
                                                                    Math.round(((parseInt(item.price) - parseInt(item.oldPrice)) / parseInt(item.price)) * 100)
                                                                }
                                                                %</div> : ''
                                                        }

                                                        <Link to="/single-slider-images">
                                                            <img loading="lazy" src={item.mainImg} alt=""/>
                                                        </Link>

                                                        <div className="shop-action-wrap">
                                                            <ul className="shop-action">
                                                                <li>
                                                                    {/* <a href="#" title="Quick view!"
                                                                       data-tip="Quick view!"
                                                                       onClick={
                                                                           e => onQuickViewClick(e, item)
                                                                       }
                                                                >
                                                                    
                                                                    <i className="fi flaticon-view"/>
                                                                </a> */}
                                                                <div style={{ backgroundColor: 'white', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer', margin: '0.2em' }}>
                                                                        <RemoveRedEyeOutlinedIcon 
                                                                        onClick={
                                                                            e => onQuickViewClick(e, item)
                                                                        }
                                                                        className='w-4 h-4 p-1' />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    {/* <a href="#" title="Add to Wishlist!"
                                                                       data-tip="Add to Wishlist!">
                                                                        <i className="fi icon-heart-shape-outline"/>
                                                                    </a> */}
                                                                    <div style={{ backgroundColor: 'white', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer', margin: '0.2em' }}>
                                                                        <FavoriteIcon className='w-4 h-4 p-1' />
                                                                    </div>
                                                                    </li>
                                                                <li>
                                                                    {/* <a href="#" title="Add to cart!"
                                                                       data-tip="Add to cart!">
                                                                        <i className="fi flaticon-shopping-cart"/></a> */}
                                                                        <div style={{ backgroundColor: 'white', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer', margin: '0.2em' }}>
                                                                        <ShoppingBagOutlinedIcon className='w-4 h-4 p-1' />
                                                                    </div>
                                                                        </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <h4>
                                                            <Link to="/single-slider-images">
                                                                {item.title}
                                                            </Link>
                                                        </h4>
                                                        <span className="woocommerce-Price-amount amount">
                                                              <ins>
                                                                <span className="woocommerce-Price-amount amount">
                                                                  <bdi><span
                                                                      className="woocommerce-Price-currencySymbol">{item.Symbol}</span>{item.price}</bdi>
                                                                </span>
                                                              </ins>
                                                            {parseInt(item.price) < parseInt(item.oldPrice) ?
                                                                <del>
                                                                    <span className="woocommerce-Price-amount amount">
                                                                      <bdi><span
                                                                          className="woocommerce-Price-currencySymbol">{item.Symbol}</span>{item.oldPrice}</bdi>
                                                                    </span>
                                                                </del> : ''
                                                            }
                                                            </span>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </Slider>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end container-1410 */}
            </section>
            {/* end recent-product-section */}
            {/* <ReactTooltip className='tool-tip' effect='solid'/> */}
        </Fragment>
    );
}

export default RecentProducts;
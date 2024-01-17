import React, {useState, Fragment} from 'react';
import Slider from "react-slick";
// import ReactTooltip from 'react-tooltip';

import './products.css';

import imgx from '../../assets/images/shop/img-2.jpg';
// import imgx from '../../assets/images/site-products/3.jpg';
import {Link} from "react-router-dom";

import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

/**
 * Recent Products component
 * @param onQuickViewClick
 * @returns {*}
 * @constructor
 */
function RecentProducts({onQuickViewClick}) {

    const [isPrevHovered, setPrevHovered] = useState(false);
    const [isNextHovered, setNextHovered] = useState(false);

    const [isViewHovered, setViewHovered] = useState(false);
    const [isFavHovered, setFavHovered] = useState(false);
    const [isBagHovered, setBagHovered] = useState(false);

    
    function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: isNextHovered ? 'black' : '',
        zIndex: 1,
      }}
      onClick={onClick}
      onMouseEnter={() => setNextHovered(true)}
      onMouseLeave={() => setNextHovered(false)}
    >
      <ChevronRightIcon style={{ color: isNextHovered ? 'white' : '', }}/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: isPrevHovered ? 'black' : '',
        zIndex: 1,
      }}
      onClick={onClick}
      onMouseEnter={() => setPrevHovered(true)}
      onMouseLeave={() => setPrevHovered(false)}
    >
      <ChevronLeftIcon style={{ color: isPrevHovered ? 'white' : '', }}/>
    </div>
  );
}


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
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
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
                            <Link className="more-products" to="/shop">
                                More products
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="products-wrapper">
                                <ul className="products ">
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

                                                        <Link to="/product-details">
                                                            <img loading="lazy" src={item.mainImg} alt=""/>
                                                        </Link>

                                                        <div className="shop-action-wrap">
                                                            <ul className="shop-action">
                                                                <li>
                                                                <div 
                                                                style={{ backgroundColor: isViewHovered ? 'black' : 'white', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer', margin: '0.2em' }}>
                                                                        <RemoveRedEyeOutlinedIcon 
                                                                        onClick={
                                                                            e => onQuickViewClick(e, item)
                                                                        }
                                                                        onMouseEnter={()=>{
                                                                            setViewHovered(true)
                                                                        }}
                                                                        onMouseLeave={()=>{
                                                                            setViewHovered(false)
                                                                        }}
                                                                        className='w-4 h-4 p-1' 
                                                                        style={{ color: isViewHovered ? 'white' : 'black',  }}
                                                                        />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div style={{ backgroundColor: isFavHovered ? 'black' : 'white', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer', margin: '0.2em' }}>
                                                                        <FavoriteIcon className='w-4 h-4 p-1' 
                                                                        onClick={
                                                                            ()=>{}
                                                                        }
                                                                        onMouseEnter={()=>{
                                                                            setFavHovered(true)
                                                                        }}
                                                                        onMouseLeave={()=>{
                                                                            setFavHovered(false)
                                                                        }}
                                                                        style={{ color: isFavHovered ? 'white' : 'black',  }}

                                                                        />
                                                                    </div>
                                                                    </li>
                                                                <li>
                                                                        <div style={{ backgroundColor: isBagHovered ? 'black' : 'white', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer', margin: '0.2em' }}>
                                                                        <ShoppingBagOutlinedIcon className='w-4 h-4 p-1' 
                                                                        
                                                                        onClick={
                                                                            ()=>{}
                                                                        }
                                                                        onMouseEnter={()=>{
                                                                            setBagHovered(true)
                                                                        }}
                                                                        onMouseLeave={()=>{
                                                                            setBagHovered(false)
                                                                        }}
                                                                        style={{ color: isBagHovered ? 'white' : 'black',  }}
                                                                        />
                                                                    </div>
                                                                        </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <h4>
                                                            <Link to="/product-details">
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
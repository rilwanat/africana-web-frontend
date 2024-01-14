import React, {Fragment} from 'react';
import Slider from "react-slick";
// import ReactTooltip from 'react-tooltip';

import './products.css';

/**
 * demo data
 */
// import productsData from '../../data/products.json';
import {Link} from "react-router-dom";

/**
 * Recent Single Products component
 * @param onQuickViewClick
 * @returns {*}
 * @constructor
 */
function RecentSingleProducts({onQuickViewClick}) {

    /**
     * slider settings
     * @type {{swipeToSlide: boolean, dots: boolean, infinite: boolean, responsive: *[], slidesToScroll: number, focusOnSelect: boolean, slidesToShow: number, autoplay: boolean, speed: number, autoplaySpeed: number}}
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
            "price": "79.00",
            "oldPrice": "129.00",
            "Symbol" : "$",
            "mainImg" : "/assets/images/shop/img-1.jpg",
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
            "price": "129",
            "oldPrice": "129",
            "Symbol" : "$",
            "mainImg" : "/assets/images/shop/img-2.jpg",
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
            "price": "147",
            "oldPrice": "200",
            "Symbol" : "$",
            "mainImg" : "/assets/images/shop/img-3.jpg",
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
            "price": "79",
            "oldPrice": "79",
            "Symbol" : "$",
            "mainImg" : "/assets/images/shop/img-4.jpg",
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
            "price": "198",
            "oldPrice": "198",
            "Symbol" : "$",
            "mainImg" : "/assets/images/shop/img-5.jpg",
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
            "price": "129",
            "oldPrice": "129",
            "Symbol" : "$",
            "mainImg" : "/assets/images/shop/img-6.jpg",
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
            "SKU": "71236-88",
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
            "price": "129",
            "oldPrice": "129",
            "Symbol" : "$",
            "mainImg" : "/assets/images/shop/img-1.jpg",
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
            "SKU": "71236-54r",
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
            "price": "129",
            "oldPrice": "129",
            "Symbol" : "$",
            "mainImg" : "/assets/images/shop/img-3.jpg",
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
        }
    ];

    return (
        <Fragment>
            <div className="realted-porduct">
                <h3>Related product</h3>
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
                                            <img loading="lazy" src={process.env.PUBLIC_URL + item.mainImg} alt=""/>
                                        </Link>
                                        <div className="shop-action-wrap">
                                            <ul className="shop-action">
                                                <li><a href="#" title="Quick view!" data-tip="Quick view!"
                                                       onClick={
                                                           e => onQuickViewClick(e, item)
                                                       }
                                                ><i className="fi flaticon-view"/></a>
                                                </li>
                                                <li><a href="#" title="Add to Wishlist!" data-tip="Add to Wishlist!"><i
                                                    className="fi icon-heart-shape-outline"/></a></li>
                                                <li><a href="#" title="Add to cart!" data-tip="Add to cart!"><i
                                                    className="fi flaticon-shopping-cart"/></a></li>
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
                                                <bdi><span className="woocommerce-Price-currencySymbol">{item.Symbol}</span>{item.price}</bdi>
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
            {/* <ReactTooltip className='tool-tip' effect='solid'/> */}
        </Fragment>
    );
}

export default RecentSingleProducts;
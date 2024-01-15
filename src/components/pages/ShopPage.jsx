import React, {useState, Fragment} from 'react';

import Footer from './Footer';
// import Instagram from '../../components/global/Instagram';
import Header from './header/Header';
import PageTitle from './global/PageTitle';
import Pagination from "./global/Pagination";

import Ordering from './shop/Ordering';
import OrderingToolbar from "./shop/OrderingToolbar";
import Products from "./shop/Products";

import QuickView from './QuickView';


import './shop/shop.css';

import imgx from '../../assets/images/shop/img-2.jpg';

/**
 * demo data
 */
// import productsData from '../../data/products.json';
// import productsData_2 from '../../data/products.json';
// import productsData_3 from '../../data/products.json';
// const products = [...productsData, ...productsData_2, ...productsData_3];

/**
 * Shop page Full Width
 * @param options
 * @returns {*}
 * @constructor
 */
function ShopPage({ options }) {

    /**
     * states
     */
    const [showQuickView, setShowQuickView] = useState(false);
    const [quickViewData, setQuickViewData] = useState({});
    const [ordering, setOrdering] = useState(1);

    /**
     * Handle Ordering Status
     */
    const HandleOrderingStatus = (event, data) => {
        event.preventDefault();
        setOrdering(data);
    };

    /**
     * Handel Quick View Data
     */
    const HandelQuickViewData = (e, item) => {
        e.preventDefault();
        setShowQuickView(!showQuickView);
        setQuickViewData(item);
    };

    /**
     * Handel Quick View Close
     */
    const HandelQuickViewClose = (e) => {
        e.preventDefault();
        setShowQuickView(false);
        setQuickViewData({});
    };

    const products = [
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
            "content": "Crafted from a luxurious blend of wool and cashmere, the EleganceLux Trench Coat guarantees warmth and breathability.",
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
            "price": "790,000.00",
            "oldPrice": "690,000.00",
            "Symbol" : "N", //"$",
            "mainImg" : imgx, //"/assets/images/shop/img-1.jpg",
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
            "content": "Crafted from a luxurious blend of wool and cashmere, the EleganceLux Trench Coat guarantees warmth and breathability.",
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
            "price": "429,000.00",
            "oldPrice": "429,000.00",
            "Symbol" : "N", //"$",
            "mainImg" : imgx, //"/assets/images/shop/img-2.jpg",
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
            "content": "Crafted from a luxurious blend of wool and cashmere, the EleganceLux Trench Coat guarantees warmth and breathability.",
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
            "price": "147,000.00",
            "oldPrice": "200,000.00",
            "Symbol" : "N", //"$",
            "mainImg" : imgx, //"/assets/images/shop/img-3.jpg",
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
            "content": "Crafted from a luxurious blend of wool and cashmere, the EleganceLux Trench Coat guarantees warmth and breathability.",
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
            "price": "500,000.00",
            "oldPrice": "500,000.00",
            "Symbol" : "N", //"$",
            "mainImg" : imgx, //"/assets/images/shop/img-4.jpg",
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
            "content": "Crafted from a luxurious blend of wool and cashmere, the EleganceLux Trench Coat guarantees warmth and breathability.",
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
            "price": "398,000.00",
            "oldPrice": "398,000.00",
            "Symbol" : "N", //"$",
            "mainImg" : imgx, //"/assets/images/shop/img-5.jpg",
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
            "content": "Crafted from a luxurious blend of wool and cashmere, the EleganceLux Trench Coat guarantees warmth and breathability.",
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
            "price": "329,000.00",
            "oldPrice": "329,000.00",
            "Symbol" : "N", //"$",
            "mainImg" : imgx, //"/assets/images/shop/img-6.jpg",
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
            "content": "Crafted from a luxurious blend of wool and cashmere, the EleganceLux Trench Coat guarantees warmth and breathability.",
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
            "price": "290,000.00",
            "oldPrice": "290,000.00",
            "Symbol" : "N", //"$",
            "mainImg" : imgx, //"/assets/images/shop/img-1.jpg",
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
            "content": "Crafted from a luxurious blend of wool and cashmere, the EleganceLux Trench Coat guarantees warmth and breathability.",
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
            "price": "259,000.00",
            "oldPrice": "259,000.00",
            "Symbol" : "N", //"$",
            "mainImg" : imgx, //"/assets/images/shop/img-3.jpg",
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

            {showQuickView
                ? <QuickView
                    data={quickViewData}
                    onQuickViewCloseClick={HandelQuickViewClose}
                />
                : ''
            }

            <Header options={options} />

            {/* <PageTitle name="Shop"/> */}


            {/* start shop-section */}
            <section className="shop-section shop-style-2 section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="shop-area clearfix">
                                <div className="woocommerce-content-wrap">
                                    <div className="woocommerce-content-inner">
                                        <div className="woocommerce-toolbar-top">
                                            <p className="woocommerce-result-count">
                                                Showing all {products.length} results
                                            </p>

                                            <OrderingToolbar
                                                HandleOrderingStatus={HandleOrderingStatus}
                                                ordering={ordering}
                                            />

                                            <Ordering/>
                                        </div>

                                        <Products
                                            HandelQuickViewData={HandelQuickViewData}
                                            products={products}
                                            ordering={ordering}
                                        />

                                    </div>

                                    <Pagination extraClass=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end container */}
            </section>
            {/* end shop-section */}

            {/* <Instagram/> */}
            <Footer/>
        </Fragment>
    );
}

export default ShopPage;
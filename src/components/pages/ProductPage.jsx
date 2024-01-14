import React, {useState, Fragment} from 'react';
import Slider from "react-slick";

import Footer from './Footer';
import Instagram from './global/Instagram';
import PageTitle from './global/PageTitle';
import Header from './header/Header';

import RecentSingleProducts from './RecentSingleProducts';

import ProductInfoTabs from './ProductInfoTabs';
import QuickView from './QuickView';

import FavoriteIcon from '@mui/icons-material/Favorite';

import './shop/shop.css';

/**
 * demo data
 */
//import data from '../../data/singleProductDemo.json';

/**
 * single shop page with  Slider Images
 * @param options
 * @returns {*}
 * @constructor
 */
function ProductPage({options}) {

    /**
     * states
     */
    const [showQuickView, setShowQuickView] = useState(false);
    const [quickViewData, setQuickViewData] = useState({});
    const [productCount, setProductCount] = useState(1);

    /**
     * Handle Product Count
     */
    const HandleProductCount = (e, data) => {
        e.preventDefault();
        if (data == 'plus') {
            setProductCount(productCount + 1);
        } else {
            if (productCount > 1) {
                setProductCount(productCount - 1);
            } else {
                setProductCount(1);
            }
        }
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

    /**
     * slider settings
     */
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 2000,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    const data = {
        "id": "1",
        "name": "Ladies Elegant T-shirt",
        "images": [
          {
            "src": "assets/images/shop/img-1.jpg"
          },
          {
            "src": "assets/images/shop/img-2.jpg"
          },
          {
            "src": "assets/images/shop/img-3.jpg"
          },
          {
            "src": "assets/images/shop/img-4.jpg"
          },
          {
            "src": "assets/images/shop/img-5.jpg"
          },
          {
            "src": "assets/images/shop/img-6.jpg"
          }
        ],
        "price": "45.00",
        "oldPrice": "55.00",
        "symbol": "$",
        "reviewCount": "(2 Customer review)",
        "shortDescription": "Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections the bedding was hardly able to cover",
        "sku": "41236-1",
        "categories": [
          {
            "id": 1,
            "name": "Clothing",
            "link": "#"
          },
          {
            "id": 1,
            "name": "Tops",
            "link": "#"
          },
          {
            "id": 1,
            "name": "Women",
            "link": "#"
          }
        ],
        "tags": [
          {
            "id": 1,
            "name": "Button",
            "link": "#"
          },
          {
            "id": 1,
            "name": "Red",
            "link": "#"
          },
          {
            "id": 1,
            "name": "Tshirt",
            "link": "#"
          }
        ],
        "description": "Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. waved about helplessly as he looked. \"What's happened to me?\" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar wallstrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather"
      
      };

    return (
        <Fragment>
            {showQuickView
                ? <QuickView
                    data={quickViewData}
                    onQuickViewCloseClick={HandelQuickViewClose}
                />
                : ''
            }

            <Header options={options}/>

            <PageTitle name="Shop single"/>

            {/* start shop-single-section */}
            <section className="shop-single-section section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-md-6">
                            <div className="shop-single-slider slider-thumbnail">
                                <Slider {...settings}>
                                    {
                                        data.images.map((item, index) => (
                                            <div key={index}>
                                                <img src={process.env.PUBLIC_URL + item.src}/>
                                            </div>
                                        ))
                                    }
                                </Slider>
                                <div className="slider-nav"></div>
                            </div>
                        </div>
                        <div className="col col-md-6">
                            <div className="product-details">
                                <h2>{data.name}</h2>
                                <div className="price">
                                    <span className="current">{data.symbol}{data.price}</span>
                                    <span className="old">{data.symbol}{data.oldPrice}</span>
                                </div>
                                <div className="rating">
                                    <i className="fi flaticon-star"/>
                                    <i className="fi flaticon-star"/>
                                    <i className="fi flaticon-star"/>
                                    <i className="fi flaticon-star"/>
                                    <i className="fi flaticon-star-social-favorite-middle-full"/>
                                    <span>{data.reviewCount}</span>
                                </div>
                                <p>{data.shortDescription}</p>
                                <div className="product-option">
                                    <form className="form">
                                        <div className="product-row">
                                            <div className="touchspin-wrap">
                                                <button
                                                    onClick={(e) => {
                                                        HandleProductCount(e, 'plus')
                                                    }} id="slider-thumbnail-touchspin-up" className="btn btn-default "
                                                    type="button"><i className="glyphicon glyphicon-chevron-up"></i>
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        HandleProductCount(e, 'minus')
                                                    }}
                                                    id="slider-thumbnail-touchspin-down" className="btn btn-default "
                                                    type="button"><i className="glyphicon glyphicon-chevron-down"></i>
                                                </button>
                                                <input readOnly className="product-count" type="text"
                                                       value={productCount} name="product-count"/>
                                            </div>
                                            <div>
                                                <button type="submit">Add to cart</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="thb-product-meta-before">
                                    <div className="add-to-wishlist">
                                        <a href="#" className="add_to_wishlist">
                                            {/* <i className="pe-7s-like"/> */}
                                            <FavoriteIcon style={{ cursor: "pointer" }}/>
                                            <span>Add To Wishlist</span>
                                        </a>
                                    </div>
                                    <div className="product_meta">
                                        <span className="sku_wrapper">SKU: <span
                                            className="sku">{data.sku}</span></span>
                                        <span className="posted_in">Categories: 
                                            {
                                                data.categories.map((item, index) =>
                                                    <a key={index}
                                                       href={item.link}>
                                                        {item.name}{data.categories.length - 1 === index ? '' : ', '}
                                                    </a>
                                                )
                                            }
                                        </span>
                                        <span className="tagged_as">Tags:#
                                            {
                                                data.tags.map((item, index) =>
                                                    <a key={index}
                                                       href={item.link}>
                                                        {item.name}{data.tags.length - 1 === index ? '' : ', '}
                                                    </a>
                                                )
                                            }
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end col */}
                    </div>
                    {/* end row */}
                    <div className="row">
                        <div className="col col-md-8 col-md-offset-2">
                            <ProductInfoTabs/>
                        </div>
                    </div>
                    {/* end row */}
                    <div className="row">
                        <div className="col col-xs-12">
                            <RecentSingleProducts onQuickViewClick={HandelQuickViewData}/>
                        </div>
                    </div>
                </div>
                {/* end of container */}
            </section>
            {/* end of shop-single-section */}
            {/* <Instagram/> */}
            <Footer/>
        </Fragment>
    );
}

export default ProductPage;
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

import imgx from '../../assets/images/shop/img-2.jpg';
import imgs from '../../assets/images/shop/img-2.jpg';
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
         customPaging: function (i) {
            return (
                <a>
                    <img src={imgs}/>
                </a>
            );
        },
        //dots: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 2000,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,

        dots: true,
        dotsClass: "slick-dots slick-thumb slider-nav",
        // infinite: true,
        // speed: 500,
        // arrows: false,
        // slidesToShow: 1,
        // slidesToScroll: 1
    };

    const data = {
        "id": "1",
        "name": "Ladies Elegant T-shirt",
        "images": [
        {
            "src" : imgx,
        },
        {
            "src" : imgx,
        },
        {
            "src" : imgx,
        },
        {
            "src" : imgx,
        },
        {
            "src" : imgx,
        }
        ],
        "price": "500,000.00",
        "oldPrice": "550,000.00",
        "symbol": "N",//"$",
        "reviewCount": 2,
        "shortDescription": "Crafted from a luxurious blend of wool and cashmere, the EleganceLux Trench Coat guarantees warmth and breathability.",
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
        "description": "Made from a high-quality blend of wool and cashmere, the EleganceLux Trench Coat ensures both warmth and breathability, making it a versatile choice for any season. The fabric drapes gracefully, creating a flattering silhouette that complements various body types."
      
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

            {/* <PageTitle name="Shop single"/> */}

            {/* start shop-single-section */}
            <section className="shop-single-section  shop-single-vertical-thumb section-padding">
                <div className="container-1410">
                    <div className="row">
                    


                        <div className="col col-md-6">
                            <div className="shop-single-slider vertical-thumbnail">
                                <Slider {...settings}>
                                    {
                                        data.images.map((item, index) => (
                                            <div key={index}>
                                                <img src={item.src}/>
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
                                    {/* <span>{data.reviewCount}</span> */}
                                    <span className='ml-2'>({data.reviewCount} Customer review{data.reviewCount > 1 ? 's' : ''})</span>
                                </div>
                                <p>{data.shortDescription}</p>
                                
                                 <div className="product-option">
                            <form className="form">
                                <div className="product-row flex items-center">

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
                                        <button className='p-4' 
                                        // type="submit" 
                                        // onClick={onQuickViewCloseClick}
                                        >Add to cart</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                                <div className="thb-product-meta-before">
                                <div className="add-to-wishlist">
                                <a href="#" className="add_to_wishlist">
                                    {/* <i className="pe-7s-like"/> */}
                                    <FavoriteIcon className='mr-2' style={{ cursor: "pointer" }}/>
                                    <span>Add To Wishlist</span>
                                </a>
                            </div>
                                    <div className="product_meta">
                                    <span className="sku_wrapper">SKU:<span className="sku">{' ' + data.SKU}</span></span>
                                        <span className="posted_in">
                                    Categories:
                                    {
                                        data.categories.map((item, index) =>
                                            <a key={index}
                                               href={item.link}>{' ' + item.name}{data.categories.length - 1 === index ? '' : ', '}</a>
                                        )
                                    }
                                </span>
                                <span className="tagged_as">
                                    Tags:
                                    {
                                        data.tags.map((item, index) =>
                                            <a key={index}
                                               href={item.link}>{' ' + item.name}{data.tags.length - 1 === index ? '' : ', '}</a>
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
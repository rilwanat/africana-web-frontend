import React, {useState, Fragment, useEffect} from 'react';
import Slider from "react-slick";

import Footer from './Footer';
import Instagram from './global/Instagram';
import PageTitle from './global/PageTitle';
import Header from './header/Header';

import axios from 'axios';

import RecentSingleProducts from './RecentSingleProducts';

import ProductInfoTabs from './ProductInfoTabs';
import QuickView from './QuickView';

import FavoriteIcon from '@mui/icons-material/Favorite';

import './shop/shop.css';

import { Link, useNavigate, useParams } from 'react-router-dom';

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

    //let params = useParams();
  const { product } = useParams();
  const parsedProduct = JSON.parse(decodeURIComponent(product));
  //alert("parsedInstitution: " + parsedInstitution.id);


  useEffect(() => {
      handleData();
    //}
}, []);

    /**
     * states
     */
    const [showQuickView, setShowQuickView] = useState(false);
    const [quickViewData, setQuickViewData] = useState({});
    const [productCount, setProductCount] = useState(1);

    const [relatedProducts, setRelatedProductsData] = useState([]);
    const [isDataloading, setIsDataLoading] = useState(true);


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
                    <img 
                    src=
                    //{imgs}
                    "https://shopafricana.co/wp-content/uploads/2024/01/Africana-Ready-To-Wear-KaftanJuly-2023_42-900x1125.jpg"
                            
                    />
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

 

      // Function to find the lowest price among product variants
function findLowestPrice(product) {
    let lowestPrice = Infinity;
  
    //products.forEach(product => {
      product.productVariants.forEach(variant => {
        if (variant.price < lowestPrice) {
          lowestPrice = variant.price;
        }
      });
    //});
  
    return lowestPrice;
  }

  function findHighestPrice(product) {
    let highestPrice = 0;
  
    //products.forEach(product => {
      product.productVariants.forEach(variant => {
        if (variant.price > highestPrice) {
            highestPrice = variant.price;
        }
      });
    //});
  
    return highestPrice;
  }

  // Function to calculate the discount percentage
function calculateDiscountPercentage(price, oldPrice) {
    return parseInt(price) < parseInt(oldPrice) ?
      Math.round(((parseInt(oldPrice) - parseInt(price)) / parseInt(oldPrice)) * 100)
      : 0; // Return 0 if there's no discount
  }


  const handleData = async () => {    
    //alert("token: " + token + "\n\n" + "uid: " + uid);
    setIsDataLoading(true);
    try {

      const response = await axios.get('http://144.149.167.72.host.secureserver.net:3000/api/v1/products', {
        //params: { uid: uid },
        headers: {
          "Content-Type": "application/json",
          //Authorization: `Bearer ${token}`,
        },
      });

      setIsDataLoading(false);
      //alert(JSON.stringify(response.data, null, 2));

      if (response.data.success) {
        //alert("dashboard-products " + JSON.stringify(response.data, null, 2));
      
        // Store the retrieved data in state variables

        setRelatedProductsData(response.data.products);
      } else {
        alert("error: " + response.data.message);
      }

    } catch (error) {
      setIsDataLoading(false);
      alert("error: " + error);
    }
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
                                        parsedProduct && parsedProduct.productImages.map((item, index) => (
                                            <div key={index}>
                                                <img 
                                                src=
                                                // {item.src}
                                                "https://shopafricana.co/wp-content/uploads/2024/01/Africana-Ready-To-Wear-KaftanJuly-2023_42-900x1125.jpg"
                            
                                                />
                                            </div>
                                        ))
                                    }
                                </Slider>
                                <div className="slider-nav"></div>
                            </div>
                        </div>
                        <div className="col col-md-6">
                            <div className="product-details">
                                <h2>{parsedProduct.name}</h2>
                                <div className="price">
                                    <span className="current">{'N'}{findLowestPrice(parsedProduct)}</span>
                                    <span className="old">{'N'}{findHighestPrice(parsedProduct)}</span>
                                </div>
                                <div className="rating">
                                    <i className="fi flaticon-star"/>
                                    <i className="fi flaticon-star"/>
                                    <i className="fi flaticon-star"/>
                                    <i className="fi flaticon-star"/>
                                    <i className="fi flaticon-star-social-favorite-middle-full"/>
                                    {/* <span>{data.reviewCount}</span> */}
                                    <span className='ml-2'>({parsedProduct && parsedProduct.rating} Customer review{parsedProduct && parsedProduct.rating > 1 ? 's' : ''})</span>
                                </div>
                                <p>{parsedProduct.description}</p>
                                
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
                                    <span className="sku_wrapper">SKU:<span className="sku">{' ' + parsedProduct.sku}</span></span>
                                        <span className="posted_in">
                                    Categories:
                                    {/* {
                                        data.categories.map((item, index) =>
                                            <a key={index}
                                               href={item.link}>{' ' + item.name}{data.categories.length - 1 === index ? '' : ', '}</a>
                                        )
                                    } */}
                                </span>
                                <span className="tagged_as">
                                    Tags:
                                    {/* {
                                        data.tags.map((item, index) =>
                                            <a key={index}
                                               href={item.link}>{' ' + item.name}{data.tags.length - 1 === index ? '' : ', '}</a>
                                        )
                                    } */}
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
                            <RecentSingleProducts onQuickViewClick={HandelQuickViewData} relatedProducts={relatedProducts}/>
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
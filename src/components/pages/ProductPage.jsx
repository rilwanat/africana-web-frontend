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

import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';

import CryptoJS from 'crypto-js';
import { AES } from 'crypto-js';


import imgx from '../../assets/images/shop/img-2.jpg';
import imgs from '../../assets/images/shop/img-2.jpg';

import StarRateIcon from '@mui/icons-material/StarRate';


import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function ProductPage({options, addToCart, cart, updateCart}) {

    const location = useLocation();
    const product = location.state.encryptedData;

    
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    const [star, setStar] = useState(0);

    const handleStarClick = (rating) => {
        setStar(rating);
    };

    //let params = useParams();
    //const { product } = useParams();
    //const parsedProduct = JSON.parse(decodeURIComponent(product));
    //alert("parsedInstitution: " + parsedInstitution.id);
  
    

    //const { product } = useParams();
    const decryptedData = AES.decrypt(decodeURIComponent(product), 'encryptionKey').toString(CryptoJS.enc.Utf8);
    const parsedProduct = JSON.parse(decryptedData);


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

    // Function to handle change in product count input
    const handleProductCountChange = (event) => {
        // Ensure the value is a valid number
        const newCount = parseInt(event.target.value);

        // Update the productCount state if the newCount is a valid number
        if (!isNaN(newCount)) {
            setProductCount(newCount);
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
                    "http://shopafricana.co/wp-content/uploads/2024/01/March-23-Document-Name12-scaled-1-900x1125.jpg"
                            
                    />
                </a>
            );
        },
        infinite: true,
        speed: 600,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        dotsClass: "slick-dots slick-thumb slider-nav",
        arrows: false,
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

        // const response = await axios.get('http://localhost:3000/productssample.json');
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

            <Header options={options} cart={cart}/>

            {/* <PageTitle name="Shop single"/> */}

            {/* start shop-single-section */}
            <section className="shop-single-section  shop-single-vertical-thumb section-padding-medium">
                <div className="container-1410">
                    <div className="row">
                    


                        <div className="col col-md-6">
                            <div className="shop-single-slider vertical-thumbnail" 
                            // style={{ background: '#FF0000' }}
                            >
                                <Slider {...settings}>
                                    {
                                        parsedProduct && parsedProduct.productImages.map((item, index) => (
                                            <div key={index} 
                                            // style={{ background: '#000000' }}
                                            >
                                                <img 
                                                className='px-1 mx-1 mt-2'
                                                // style={{ maxHeight: '100%', width: 'auto' }}
                                                // style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                                src=
                                                // {item.src}
                                                "http://shopafricana.co/wp-content/uploads/2024/01/March-23-Document-Name12-scaled-1-900x1125.jpg"
                            
                                                />
                                            </div>
                                        ))
                                    }
                                </Slider>
                                {/* <div className="slider-nav"></div> */}
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
                                    {/* <i className="fi flaticon-star"/>
                                    <i className="fi flaticon-star"/>
                                    <i className="fi flaticon-star"/>
                                    <i className="fi flaticon-star"/>
                                    <i className="fi flaticon-star-social-favorite-middle-full"/> */}
                                    <a className="star-1" onClick={() => handleStarClick(1)} style={{ cursor: 'pointer' }}>
                                {/* <i className="ti-star" style={{ color: star < 1 ? 'grey' : 'black' }}/> */}
                                <StarRateIcon style={{width: '20px', height: '20px', color: star < 1 ? 'grey' : '#c25f2b' }}/>
                            </a>
                            <a className="star-1" onClick={() => handleStarClick(2)} style={{ cursor: 'pointer' }}>
                                {/* <i className="ti-star" style={{ color: star < 2 ? 'grey' : 'black' }}/> */}
                                <StarRateIcon style={{width: '20px', height: '20px',  color: star < 2 ? 'grey' : '#c25f2b' }}/>
                            </a>
                            <a className="star-1" onClick={() => handleStarClick(3)} style={{ cursor: 'pointer' }}>
                                {/* <i className="ti-star" style={{ color: star < 3 ? 'grey' : 'black' }}/> */}
                                <StarRateIcon style={{width: '20px', height: '20px',  color: star < 3 ? 'grey' : '#c25f2b' }}/>
                            </a>
                            <a className="star-1" onClick={() => handleStarClick(4)} style={{ cursor: 'pointer' }}>
                                {/* <i className="ti-star" style={{ color: star < 4 ? 'grey' : 'black' }}/> */}
                                <StarRateIcon style={{width: '20px', height: '20px',  color: star < 4 ? 'grey' : '#c25f2b' }}/>
                            </a>
                            <a className="star-1" onClick={() => handleStarClick(5)} style={{ cursor: 'pointer' }}>
                                {/* <i className="ti-star" style={{ color: star < 5 ? 'grey' : 'black' }}/> */}
                                <StarRateIcon style={{width: '20px', height: '20px',  color: star < 5 ? 'grey' : '#c25f2b' }}/>
                            </a>
                                    {/* <span>{data.reviewCount}</span> */}
                                    <span className='ml-2'>({parsedProduct && parsedProduct.rating} Customer review{parsedProduct && parsedProduct.rating > 1 ? 's ' : ' '})</span>
                                </div>
                                <div className="product-option">
                            {/* <form className="form"> */}
                                <div className="product-row flex items-center">

                                <div className="touchspin-wrap">
                                <input readOnly className="product-count" type="text" style={{ display: 'inline-block', verticalAlign: 'middle' }}
                                                       value={productCount} 
                                                        onChange={handleProductCountChange}
                                                       name="product-count"/>
                                                <button
                                                    onClick={(e) => {
                                                        HandleProductCount(e, 'plus', productCount)
                                                    }} id="slider-thumbnail-touchspin-up" className="btn btn-default "
                                                    type="button">
                                                        <ExpandLessIcon className="glyphicon glyphicon-chevron-up" style={{ height: '11px', width: '20px' }}/>
                                                        {/* <i className="glyphicon glyphicon-chevron-up"></i> */}
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        HandleProductCount(e, 'minus', productCount)
                                                    }}
                                                    id="slider-thumbnail-touchspin-down" className="btn btn-default "
                                                    type="button">
                                                        <ExpandMoreIcon className="glyphicon glyphicon-chevron-down" style={{ height: '11px', width: '20px' }}/>
                                                        {/* <i className="glyphicon glyphicon-chevron-down"></i> */}
                                                </button>
                                                
                                            </div>


                                    
                                    <div>
                                        <button className='p-4' 
                                        // type="submit" 
                                        // onClick={onQuickViewCloseClick}
                                        // onClick={addToCart(parsedProduct)}
                                        onClick={
                                            // (e) => addToCart(e, parsedProduct, 1)
                                            // () => increaseItemToCart(parsedProduct)
                                            () => addToCart(parsedProduct, productCount)
                                            
                                        }

                                        
                                        >Add to cart</button>
                                    </div>
                                </div>
                            {/* </form> */}
                        </div>
                                <p>{parsedProduct.description}</p>
                                
                                 
                                <div className="thb-product-meta-before">
                                <div className="add-to-wishlist">
                                <a className="add_to_wishlist">
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
                            <RecentSingleProducts onQuickViewClick={HandelQuickViewData} relatedProducts={relatedProducts} addToCart={addToCart} cart={cart}/>
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
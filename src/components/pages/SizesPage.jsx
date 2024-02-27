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

import imgx from '../../assets/images/size.png';
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
function SizesPage({options, cart, removeCartItem}) {

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

    return (
        <Fragment>
            {showQuickView
                ? <QuickView
                    data={quickViewData}
                    onQuickViewCloseClick={HandelQuickViewClose}
                />
                : ''
            }

            <Header options={options}  cart={cart}  removeCartItem={removeCartItem}/>

            {/* <PageTitle name="Shop single"/> */}

            {/* start shop-single-section */}
            <section className="shop-single-section section-padding" style={{ backgroundColor: '#eeeeee' }}>
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-md-6">
                            <div className="shop-single-slider slider-thumbnail">
                                {/* <Slider {...settings}>
                                    {
                                        data.images.map((item, index) => (
                                            <div key={index}>
                                                <img src={process.env.PUBLIC_URL + item.src}/>
                                            </div>
                                        ))
                                    }
                                </Slider> */}
                                <img src={imgx}/>
                                <div className="slider-nav"></div>
                            </div>
                        </div>
                        
                        <div className="col col-md-6">
                            <div className="product-details">
                                <h2>HOW TO MEASURE</h2>
                                
                                {/* <p>{data.shortDescription}</p> */}
                                <div className='flex flex-col ' >
                                <p className='' style={{ fontSize: '14px' }}><strong>CHEST:</strong> Measure under your arms around the fullest part of your chest.</p>
                                <p className='' style={{ fontSize: '14px' }}><strong>NECK:</strong> Measure around the middle of your neck (at the Adam's apple), keeping tape a bit loose.</p>
                                <p className='' style={{ fontSize: '14px' }}><strong>WAIST:</strong> Measure around your natural waistline, keeping the tape a little bit loose.</p>
                                <p className='' style={{ fontSize: '14px' }}><strong>SLEEVES:</strong> Measure from the edge of the shoulder along the edge to the end of the sleeve cuff.</p>
                                <p className='' style={{ fontSize: '14px' }}><strong>LENGTH:</strong> Measure from the waist, straight down to the botom of the hem.</p>
                                <p className='' style={{ fontSize: '14px' }}><strong>PLEASE NOTE:</strong> ALL MEASUREMENTS ARE IN INCHES.</p>
                                </div>
                                
                                
                            </div>
                        </div>
                        {/* end col */}
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

export default SizesPage;
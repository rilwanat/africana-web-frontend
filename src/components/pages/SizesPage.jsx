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
function SizesPage({options}) {

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

            <Header options={options}/>

            {/* <PageTitle name="Shop single"/> */}

            {/* start shop-single-section */}
            <section className="shop-single-section section-padding">
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
                                <h2>Size Chart</h2>
                                
                                
                                {/* <p>{data.shortDescription}</p> */}
                                
                                 <div className="product-option">
                            <form className="form">
                                <div className="product-row flex items-center">

                                <div className="touchspin-wrap">
                                                {/* <button
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
                                                       value={productCount} name="product-count"/> */}
                                            </div>


                                    {/* <div className='mr-4'>
                                        <input 
                                        // className="product-count" 
                                        type="text" 
                                        defaultValue={1}
                                               name="product-count-3"/>
                                    </div> */}
                                    <div>
                                        <button className='p-4' 
                                        // type="submit" 
                                        // onClick={onQuickViewCloseClick}
                                        >Calculate my Size</button>
                                    </div>
                                </div>
                            </form>
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
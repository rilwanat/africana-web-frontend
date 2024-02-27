import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';

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

    const [products, setProductsData] = useState([]);
    const [isDataloading, setIsDataLoading] = useState(true);

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



    //let token = localStorage.getItem('token');
    useEffect(() => {
        //if (!token) {
          // Redirect to the home page if the token is null
          //navigate('/');
        //} else {
          // If the user is authenticated, call the handleData function
          alert("X");
          handleData();
        //}
      }, []);

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
          alert("dashboard-stats: " + JSON.stringify(response.data, null, 2));
          setProductsData(response.data);
    
          if (response.data.status === "success") {
            //alert("handleData: " + JSON.stringify(response.data.message, null, 2));    
            // Store the retrieved data in state variables
            //setTransactions(response.data.payload.transactions);
          } else {
            //alert("error: " + response.data.message);
          }

        } catch (error) {
          setIsDataLoading(false);
          //alert("error: " + error);
        }
      };

      const handleDataOnPage = async (pg) => {    
        //alert("token: " + token + "\n\n" + "uid: " + uid);
        setIsDataLoading(true);
        try {
    
          const response = await axios.get('http://144.149.167.72.host.secureserver.net:3000/api/v1/products?page=' + pg, {
            //params: { uid: uid },
            headers: {
              "Content-Type": "application/json",
              //Authorization: `Bearer ${token}`,
            },
          });
    
          setIsDataLoading(false);
          alert("dashboard-stats: " + JSON.stringify(response.data, null, 2));
          setProductsData(response.data);
    
          if (response.data.status === "success") {
            //alert("handleData: " + JSON.stringify(response.data.message, null, 2));    
            // Store the retrieved data in state variables
            //setTransactions(response.data.payload.transactions);
          } else {
            //alert("error: " + response.data.message);
          }

        } catch (error) {
          setIsDataLoading(false);
          //alert("error: " + error);
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
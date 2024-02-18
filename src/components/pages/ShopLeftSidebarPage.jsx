import React, {useState, Fragment, useEffect} from 'react';
import { useMediaQuery } from '@mui/material';
import axios from 'axios';

import Footer from './Footer';
// import Instagram from '../../components/global/Instagram';
// import Header from './header/Header';
// import PageTitle from '../../components/global/PageTitle';
// import Ordering from '../../components/shop/Ordering';
// import QuickView from '../../components/products/QuickView';
// import Pagination from '../../components/global/Pagination';
import SearchWidget from '../widget/SearchWidget';
import PriceFilterWidget from '../widget/PriceFilterWidget';
import ProductCategoriesWidget from '../widget/ProductCategoriesWidget';
import ColorFilterWidget from '../widget/ColorFilterWidget';
import TagFilterWidget from '../widget/TagFilterWidget';

import Header from './header/Header';
import PageTitle from './global/PageTitle';
import Pagination from "./global/Pagination";
import Ordering from './shop/Ordering';
import OrderingToolbar from "./shop/OrderingToolbar";
import Products from "./shop/Products";
import QuickView from './QuickView';


import './shop/shop.css';


/**
 * Shop Page with Left Sidebar
 * @param options
 * @returns {*}
 * @constructor
 */
function ShopLeftSidebarPage({ options }) {

    /**
     * states
     */
    const [showQuickView, setShowQuickView] = useState(false);
    const [quickViewData, setQuickViewData] = useState({});
    const [ordering, setOrdering] = useState(1);

    const [products, setProductsData] = useState([]);
    const [productsTotal, setProductsTotal] = useState(0);
    const [isDataloading, setIsDataLoading] = useState(true);

    const [maxMin, setMaxMin] = useState(Infinity);
    const [maxMax, setMaxMax] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);

    const productsPerPage = 16;

    const HandleOrderingStatus = (event, data) => {
        event.preventDefault();
        setOrdering(data);
    };

    const HandelQuickViewData = (e, item) => {
        e.preventDefault();
        setShowQuickView(!showQuickView);
        setQuickViewData(item);
    };

    const HandelQuickViewClose = (e) => {
        e.preventDefault();
        setShowQuickView(false);
        setQuickViewData({});
    };

    const isMediumScreen = useMediaQuery('(max-width:990px)');
    useEffect(() => {
        //if (!token) {
          // Redirect to the home page if the token is null
          //navigate('/');
        //} else {
          // If the user is authenticated, call the handleData function
          //alert("X");
          handleData();
        //}
    }, []);

    
    const handleData = async () => {    
        //alert("token: " + token + "\n\n" + "uid: " + uid);
        setCurrentPage(1);
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

            setProductsData(response.data.products);
            setProductsTotal(response.data.total);

            // Find the minimum and maximum prices
            let minPrice = Infinity;
            let maxPrice = 0;

            response.data.products.forEach(product => {
                product.productVariants.forEach(variant => {
                    minPrice = Math.min(minPrice, variant.price);
                    maxPrice = Math.max(maxPrice, variant.price);
                });
            });

            // Set the min and max prices in state
            setMaxMin(minPrice);
            setMaxMax(maxPrice);

          } else {
            alert("error: " + response.data.message);
          }

        } catch (error) {
          setIsDataLoading(false);
          alert("error: " + error);
        }
      };

      const handleDataSort = async (min, max) => {    

        setProductsTotal("-");

        setCurrentPage(1);
        //alert("token: " + token + "\n\n" + "uid: " + uid);
        setIsDataLoading(true);
        try {
    
          const response = await axios.get('http://144.149.167.72.host.secureserver.net:3000/api/v1/products?minPrice=' + min + '&maxPrice=' + max, {
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

            setProductsData(response.data.products);
            setProductsTotal(response.data.total);
          } else {
            alert("error: " + response.data.message);
          }

        } catch (error) {
          setIsDataLoading(false);
          alert("error: " + error);
        }
      };

      const handleDataPage = async (pg) => {    
        //alert("token: " + token + "\n\n" + "uid: " + uid);
        setCurrentPage(pg);
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
          //alert("dashboard-stats: " + JSON.stringify(response.data, null, 2));
          
          setIsDataLoading(false);
          //alert(JSON.stringify(response.data, null, 2));
    
          if (response.data.success) {
            //alert("dashboard-products " + JSON.stringify(response.data, null, 2));
          
            // Store the retrieved data in state variables

            setProductsData(response.data.products);
            setProductsTotal(response.data.total);
          } else {
            alert("error: " + response.data.message);
          }

        } catch (error) {
          setIsDataLoading(false);
          alert("error: " + error);
        }
      };


      const startIndex = (currentPage - 1) * productsPerPage + 1;
      const endIndex = Math.min(currentPage * productsPerPage, productsTotal);


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

            {/* <PageTitle name="Shop Left Sidebar"/> */}


            {/* start shop-section */}
            <section className="shop-section section-padding" style={{ backgroundColor: '#eeeeee' }}>
                <div className="container-fluid">
                    <div className="row" >
                        <div className="col col-xs-12" >
                            <div className="shop-area clearfix" >
                            <div className={'shop-sidebar'} >
                                    <SearchWidget title="" />
                                    <PriceFilterWidget handleDataSort={handleDataSort} maxMin={maxMin} maxMax={maxMax}/>
                                    <ProductCategoriesWidget />
                                    <ColorFilterWidget/>
                                    <TagFilterWidget/>
                                </div>
                                <div className="woocommerce-content-wrap" style={{ marginTop: '14px' }}>
                                    <div className="woocommerce-content-inner" >
                                        <div className="woocommerce-toolbar-top" >
                                            <p className="woocommerce-result-count">Showing {startIndex} – {endIndex} of {productsTotal} results</p>

                                            {/* <div className="products-sizes">
                                            <p className="woocommerce-result-count">Showing 1–12 of ## results</p>
                
                
            </div> */}


                                            <OrderingToolbar
                                                HandleOrderingStatus={HandleOrderingStatus}
                                                ordering={ordering}
                                            />
                                            
                                            <Ordering/>
                                        </div>

{
  isDataloading ? "Loading..." : <Products
  HandelQuickViewData={HandelQuickViewData}
  products={products}
  ordering={ordering}
/>
}
                                        

                                    </div>
                                    <Pagination handlePageClick={handleDataPage} totalProducts={productsTotal} extraClass=""/>
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

export default ShopLeftSidebarPage;
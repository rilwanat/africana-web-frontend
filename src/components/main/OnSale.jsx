import React, {useState, Fragment, useEffect} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import axios from 'axios';

import AfricanaHeader from './AfricanaHeader';

import Products from "./Products";
import Pagination from "./Pagination";

function OnSale({ options, addToCart, cart, removeCartItem, categories }) {

    const navigate = useNavigate();

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
    const startIndex = (currentPage - 1) * productsPerPage + 1;
    const endIndex = Math.min(currentPage * productsPerPage, productsTotal);


    useEffect(() => {
          handleData();
    }, []);

    
    const handleData = async () => {    
        setCurrentPage(1);
        setIsDataLoading(true);
        try {
    
          const response = await axios.get('http://144.149.167.72.host.secureserver.net:3000/api/v1/products', {
            headers: {
              "Content-Type": "application/json",
              //Authorization: `Bearer ${token}`,
            },
          });
    
          setIsDataLoading(false);
    
          if (response.data.success) {

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
            //alert("error: " + response.data.message);
          }

        } catch (error) {
          setIsDataLoading(false);
          //alert("error: " + error);
        }
      };

      const handleDataPage = async (pg) => {    
        setCurrentPage(pg);
        setIsDataLoading(true);
        try {
    
          const response = await axios.get('http://144.149.167.72.host.secureserver.net:3000/api/v1/products?page=' + pg, {
            headers: {
              "Content-Type": "application/json",
              //Authorization: `Bearer ${token}`,
            },
          });
    
          setIsDataLoading(false);
    
          if (response.data.success) {
            setProductsData(response.data.products);
            setProductsTotal(response.data.total);

            // window.scrollTo(0, 0);
          } else {
            //alert("error: " + response.data.message);
          }

        } catch (error) {
          setIsDataLoading(false);
          //alert("error: " + error);
        }
      };



    return (
        <div>
            <div className='bg-black'><AfricanaHeader /></div>

            <section className="shop-section section-padding" style={{ backgroundColor: '#eeeeee' }}>
                <div className="container-fluid">
                    <div className="row" >
                        <div className="col col-xs-12" >
                            <div className="shop-area clearfix" >
                            <div className={'shop-sidebar'} >
                                    {/* <SearchWidget 
                                    handleDataSearch={handleDataSearch} 
                                    title="" />
                                    <PriceFilterWidget handleDataSort={handleDataSort} maxMin={maxMin} maxMax={maxMax}/>
                                    <ProductCategoriesWidget categories={categories}  category={null} navigateTo={navigateTo} /> */}
                                    {/* <ColorFilterWidget/> */}
                                    {/* <TagFilterWidget/> */}
                                </div>
                                <div className="woocommerce-content-wrap" style={{ marginTop: '14px' }}>
                                    <div className="woocommerce-content-inner" >
                                        <div className="woocommerce-toolbar-top" >
                                            <p className="woocommerce-result-count">{productsTotal > 0 ? startIndex : '0'} – {productsTotal > 0 ? endIndex : '0'} / {productsTotal}</p>
                                            {/* <p className="woocommerce-result-count">Showing {productsTotal > 0 ? startIndex : '0'} – {productsTotal > 0 ? endIndex : '0'} of {productsTotal} results</p> */}
                                            {/* <p>{category}</p> */}
                                            {/* <div className="products-sizes">
                                            <p className="woocommerce-result-count">Showing 1–12 of ## results</p>
                
                
            </div> */}


                                            {/* <OrderingToolbar
                                                HandleOrderingStatus={HandleOrderingStatus}
                                                ordering={ordering}
                                            />
                                            
                                            <Ordering handleDefaultSorting={handleDefaultSorting}/> */}
                                        </div>

{
  isDataloading ? "Loading..." : <Products
//   HandelQuickViewData={HandelQuickViewData}
  products={products}
  ordering={ordering}
  addToCart={addToCart}
  cart={cart}
/>
}
                                        

                                    </div>
                                    <div className='flex justify-center'><Pagination handlePageClick={handleDataPage} totalProducts={productsTotal} extraClass=""/></div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                {/* end container */}
            </section>

        </div>
    );
}

export default OnSale;
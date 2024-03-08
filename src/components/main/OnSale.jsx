import React, {useState, Fragment, useEffect} from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import axios from 'axios';

import AfricanaHeader from './AfricanaHeader';
import AfricanaFooter from './AfricanaFooter';

import Products from "./Products";
import Pagination from "./Pagination";



import Ordering from './widgets/Ordering';
import OrderingToolbar from './widgets/OrderingToolbar';
import PageTitle from './widgets/PageTitle';
import Loading from './widgets/Loading';
import SearchWidget from './widgets/SearchWidget';
import PriceFilterWidget from './widgets/PriceFilterWidget';
import ProductCategoriesWidget from './widgets/ProductCategoriesWidget';
import ColorFilterWidget from './widgets/ColorFilterWidget';
import TagFilterWidget from './widgets/TagFilterWidget';




function OnSale({ options, addToCart, cart, removeCartItem, categories, removeAllCartItem, handleEmailAddress  }) {

    const navigate = useNavigate();

    const location = useLocation();
    const productSlug = location.state.productSlug;

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


    const HandleOrderingStatus = (event, data) => {
      event.preventDefault();
      setOrdering(data);
  };


    const [range, setRange] = useState([0, 0]);
    const [useFilter, setUseFilter] = useState(false);
    const setFilterProps = async (r, b) => {
      setRange(r);
      setUseFilter(b);
    }


    useEffect(() => {
          handleData("all", 1, "min", "max");
    }, [productSlug]);

    
    const handleData = async (requestType, pageNumber, min, max) => { 

      setCurrentPage(pageNumber);
      //alert(productSlug);

      let queryAppend = "";
      if (productSlug == "all products")
      {
        switch(requestType) {
          case("all"):        
          queryAppend = "";
          //alert("1");
          break;
          case("price-filter"):
          queryAppend = '?minPrice=' + min + '&maxPrice=' + max;
          //alert("2");
          break;
          case("page-number"):
          if (useFilter) {
            queryAppend = '?minPrice=' + min + '&maxPrice=' + max + '&page=' + pageNumber;
          } else {
            queryAppend = "";
          }
          //alert("3");
          break;
        }
      } else if (productSlug == "men" || productSlug == "women") {
        // queryAppend = '?categorySlug=' + productSlug;
        switch(requestType) {
          case("all"):        
          queryAppend = '?categorySlug=' + productSlug;
          //alert("1");
          break;
          case("price-filter"):
          queryAppend = '?categorySlug=' + productSlug + '&minPrice=' + min + '&maxPrice=' + max;
          //alert("2");
          break;
          case("page-number"):
          if (useFilter) {
            queryAppend = '?categorySlug=' + productSlug + '&minPrice=' + min + '&maxPrice=' + max + '&page=' + pageNumber;
          } else {
            queryAppend = "";
          }
          //alert("3");
          break;
        }
        
      }
      
      
      

        
        setIsDataLoading(true);
        try {
    
          const response = await axios.get('http://144.149.167.72.host.secureserver.net:3000/api/v1/products' + queryAppend, {
            headers: {
              "Content-Type": "application/json",
              //Authorization: `Bearer ${token}`,
            },
          });
    
          setIsDataLoading(false);
    
          if (response.data.success) {

            setProductsData(response.data.products);
            setProductsTotal(response.data.total);





            if (requestType == "all") {
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

            }
            
          } else {
            //alert("error: " + response.data.message);
          }

        } catch (error) {
          setIsDataLoading(false);
          //alert("error: " + error);
        }
      };

      const navigateTo = async (catSlug) => {

        const productSlug = catSlug.toLowerCase();
        navigate('/on-sale', { state: { productSlug }, replace: true });

      }


      const handleDefaultSorting = async (q) => {
        alert(q); return;
        
      }


    return (
        <div>
            <div className='bg-black'><AfricanaHeader options={options} cart={cart} removeCartItem={removeCartItem} removeAllCartItem={removeAllCartItem}  handleEmailAddress={handleEmailAddress}/></div>

            {/* <PageTitle name={productSlug}/> */}

            <section className="shop-section section-padding" style={{ backgroundColor: '#eeeeee' }}>
                <div className="container-fluid">
                    <div className="row" >
                        <div className="col col-xs-12" >
                            <div className="shop-area clearfix" >
                            <div className={'shop-sidebar'} >
                                    {/* <SearchWidget 
                                    handleDataSearch={handleDataSearch} 
                                    title="" /> */}
                                    <PriceFilterWidget handleDataPriceFilter={handleData} maxMin={maxMin} maxMax={maxMax} updateRange={setFilterProps} useFilter={useFilter}/>
                                    <ProductCategoriesWidget categories={categories}  category={null} navigateTo={navigateTo} />
                                    {/* <ColorFilterWidget/> */}
                                    {/* <TagFilterWidget/> */}
                                </div>
                                

                                <div className="woocommerce-content-wrap" style={{ marginTop: '14px' }}>
                                <p>{productSlug}</p>
                                    <div className="woocommerce-content-inner" >
                                        <div className="woocommerce-toolbar-top" >
                                          
                                            <p className="woocommerce-result-count">{productsTotal > 0 ? startIndex : '0'} – {productsTotal > 0 ? endIndex : '0'} / {productsTotal}</p>
                                            {/* <p className="woocommerce-result-count">Showing {productsTotal > 0 ? startIndex : '0'} – {productsTotal > 0 ? endIndex : '0'} of {productsTotal} results</p> */}
                                            {/* <p>{category}</p> */}
                                            {/* <div className="products-sizes">
                                            <p className="woocommerce-result-count">Showing 1–12 of ## results</p>
                
                
            </div> */}


                                            <OrderingToolbar
                                                HandleOrderingStatus={HandleOrderingStatus}
                                                ordering={ordering}
                                            />
                                            
                                            <Ordering handleDefaultSorting={handleDefaultSorting}/>
                                        </div>

{
  isDataloading ? 
  // "Loading..." 
  < Loading />
  : <Products
//   HandelQuickViewData={HandelQuickViewData}
  products={products}
  ordering={ordering}
  addToCart={addToCart}
  cart={cart}
/>
}
                                        

                                    </div>
                                    <div className='flex justify-center'><Pagination handlePageClick={handleData} totalProducts={productsTotal} range={range} extraClass=""/></div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                {/* end container */}
            </section>


            <AfricanaFooter/>
        </div>
    );
}

export default OnSale;
import React, {useState, Fragment, useEffect} from 'react';
import { useMediaQuery } from '@mui/material';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import Footer from './Footer';
import Header from './header/Header';
import Products from "./shop/Products";
import './shop/shop.css';

import { Avatar, Divider } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import CollectionsIcon from '@mui/icons-material/Collections';
import HistoryIcon from '@mui/icons-material/History';

function MyAccount({  options, addToCart, cart, removeCartItem  }) {
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState(0);

    
    const [showQuickView, setShowQuickView] = useState(false);
    const [quickViewData, setQuickViewData] = useState({});
    const [ordering, setOrdering] = useState(1);




    const [products, setProductsData] = useState([]);
    const [productsTotal, setProductsTotal] = useState(0);
    const [isDataloading, setIsDataLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);



    const HandelQuickViewData = (e, item) => {
        e.preventDefault();
        setShowQuickView(!showQuickView);
        setQuickViewData(item);
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

            setProductsData(response.data.products);
            setProductsTotal(response.data.total);

            // // Find the minimum and maximum prices
            // let minPrice = Infinity;
            // let maxPrice = 0;

            // response.data.products.forEach(product => {
            //     product.productVariants.forEach(variant => {
            //         minPrice = Math.min(minPrice, variant.price);
            //         maxPrice = Math.max(maxPrice, variant.price);
            //     });
            // });

            // // Set the min and max prices in state
            // setMaxMin(minPrice);
            // setMaxMax(maxPrice);

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
            <Header options={options} cart={cart}  removeCartItem={removeCartItem}/>
            
            <section className="my-account-section section-padding">
                <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-black">
                <aside className="py-4 md:w-1/3 lg:w-1/4 md:block">
            <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-gray-200 top-12">
                <h2 className="pl-3 mb-4 text-2xl font-semibold">My Settings</h2>
                <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setActiveTab(0)}
                    className={`flex items-center pl-5 py-2.5 font-bold bg-white text-gray-900 ${activeTab === 0 ? 'border rounded-l-full' : ''} hover:border hover:rounded-l-full`}
                >
                    <Avatar sx={{ width: 32, height: 32 }}>
                        <AccountCircleIcon />
                    </Avatar>
                    <span className="pl-3">My Profile</span>
                </a>
                
                <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setActiveTab(1)}
                    className={`flex items-center pl-5 py-2.5 font-semibold hover:text-gray-900 ${activeTab === 2 ? 'border rounded-l-full' : ''} hover:border hover:rounded-l-full`}
                >
                    <Avatar sx={{ width: 32, height: 32 }}>
                        <CollectionsIcon />
                    </Avatar>
                    <span className="pl-3">My Collection</span>
                </a>
                <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setActiveTab(2)}
                    className={`flex items-center pl-5 py-2.5 font-semibold hover:text-gray-900 ${activeTab === 3 ? 'border rounded-l-full' : ''} hover:border hover:rounded-l-full`}
                >
                    <Avatar sx={{ width: 32, height: 32 }}>
                        <HistoryIcon />
                    </Avatar>
                    <span className="pl-3">Vouchers</span>
                </a>
                <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setActiveTab(3)}
                    className={`flex items-center pl-5 py-2.5 font-semibold hover:text-gray-900 ${activeTab === 3 ? 'border rounded-l-full' : ''} hover:border hover:rounded-l-full`}
                >
                    <Avatar sx={{ width: 32, height: 32 }}>
                        <HistoryIcon />
                    </Avatar>
                    <span className="pl-3">Reviews</span>
                </a>
                <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setActiveTab(4)}
                    className={`flex items-center pl-5 py-2.5 font-semibold hover:text-gray-900 ${activeTab === 1 ? 'border rounded-l-full' : ''} hover:border hover:rounded-l-full`}
                >
                    <Avatar sx={{ width: 32, height: 32 }}>
                        <SettingsIcon />
                    </Avatar>
                    <span className="pl-3">Account Management</span>
                </a>
            </div>
        </aside>
                    <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
                        {activeTab == 0 ? 
                        
                        <div className="flex flex-col sm:flex-row">
                    <div className="p-2 md:p-4">
                        <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                        <h2 className="pl-6 text-2xl font-bold sm:text-xl">My Profile</h2>
                                <div className="grid max-w-2xl mx-auto mt-8">
                                    <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                                        <img className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-gray-300"
                                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                                            alt="Bordered avatar" />
                                        <div className="flex flex-col space-y-5 sm:ml-8">
                                            <div className="view-cart-btn mb-2 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300" style={{ cursor: 'pointer' }} onClick={() => {}}>Change picture</div>
                                            <div className="view-cart-btn mb-2 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300" style={{ cursor: 'pointer' }} onClick={() => {}}>Remove picture</div>
                                        </div>
                                    </div>
                                    <div className="items-center mt-8 sm:mt-14 text-black">
                                        <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                            <div className="w-full">
                                                <label htmlFor="first_name"
                                                    className="block mb-2 text-sm font-medium text-black">Your
                                                    first name</label>
                                                <input type="text" id="first_name"
                                                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                                                    placeholder="Your first name" value="" required />
                                            </div>
                                            <div className="w-full">
                                                <label htmlFor="last_name"
                                                    className="block mb-2 text-sm font-medium text-black">Your
                                                    last name</label>
                                                <input type="text" id="last_name"
                                                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                                                    placeholder="Your last name" value="" required />
                                            </div>
                                        </div>
                                        <div className="mb-2 sm:mb-6">
                                            <label htmlFor="email"
                                                className="block mb-2 text-sm font-medium text-black">Your
                                                email</label>
                                            <input type="email" id="email"
                                                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                                                placeholder="your.email@mail.com" required />
                                        </div>
                                        
                                        
                                        
                                        
                                        <div className="flex justify-end">
                                            {/* <button type="submit" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center">Save</button> */}
                                            <div className="view-cart-btn mb-2 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"style={{ cursor: 'pointer' }} onClick={() => {}}>UPdate</div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="p-2 md:p-4 ">
                    <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg ">
                        <h2 className="pl-6 text-2xl font-bold sm:text-xl">My Billing Details</h2>
                                <div className="grid max-w-2xl mx-auto mt-8">
                                    
                                    <div className="items-center mt-4 sm:mt-4 text-black">
                                        <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                            
                                            <div className="w-full">
                                                <label htmlFor="first_name"
                                                    className="block mb-2 text-sm font-medium text-black">
                                                    Street address</label>
                                                <input type="text" id="first_name"
                                                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                                                    placeholder="Street address" value="" required />
                                            </div>
                                            <div className="w-full">
                                                <label htmlFor="last_name"
                                                    className="block mb-2 text-sm font-medium text-black">
                                                    (optional) Address</label>
                                                <input type="text" id="last_name"
                                                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                                                    placeholder="Apartment, Suite, Unit etc." value="" required />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                            
                                            <div className="w-full">
                                                <label htmlFor="first_name"
                                                    className="block mb-2 text-sm font-medium text-black">
                                                    City</label>
                                                <input type="text" id="first_name"
                                                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                                                    placeholder="City" value="" required />
                                            </div>
                                            <div className="w-full">
                                                <label htmlFor="last_name"
                                                    className="block mb-2 text-sm font-medium text-black">
                                                    Postcode / ZIP</label>
                                                <input type="text" id="last_name"
                                                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                                                    placeholder="Postalcode" value="" required />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                            
                                            <div className="w-full">
                                                <label htmlFor="first_name"
                                                    className="block mb-2 text-sm font-medium text-black">
                                                    State</label>
                                                <input type="text" id="first_name"
                                                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                                                    placeholder="State" value="" required />
                                            </div>
                                            <div className="w-full">
                                                <label htmlFor="last_name"
                                                    className="block mb-2 text-sm font-medium text-black">
                                                    Country</label>
                                                <input type="text" id="last_name"
                                                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                                                    placeholder="Country" value="" required />
                                            </div>
                                        </div>
                                        
                                        
                                        
                                        
                                        
                                        <div className="flex justify-end">
                                            {/* <button type="submit" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center">Save</button> */}
                                            <div className="view-cart-btn mb-2 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"style={{ cursor: 'pointer' }} onClick={() => {}}>UPdate</div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                
                
                
                : 
                        activeTab == 1 ? 
                        <div className="p-2 md:p-4">
                        <div className="">
                            <h2 className="pl-6 text-2xl font-bold sm:text-xl">My Collection</h2>



                            <section className="shop-section section-padding" style={{ backgroundColor: '#eeeeee' }}>
                <div className="container-fluid">
                    <div className="row" >
                        <div className="col col-xs-12" >
                            <div className="shop-area clearfix" >

                            {
  isDataloading ? "Loading..." : <Products
  HandelQuickViewData={HandelQuickViewData}
  products={products}
  ordering={ordering}
  addToCart={addToCart}
  cart={cart}
/>
}

</div></div></div></div>
</section>
                            
                        </div>
                    </div> :
                        activeTab == 2 ? 
                        <div className="p-2 md:p-4">
                        <div className="p-2 md:p-4">
                        <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                            <h2 className="pl-6 text-2xl font-bold sm:text-xl">Vouchers</h2>
                            
                        </div>
                    </div>
                    </div> :
                        activeTab == 3 ? <div className="p-2 md:p-4">
                        <div className="p-2 md:p-4">
                        <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                            <h2 className="pl-6 text-2xl font-bold sm:text-xl">Reviews</h2>
                            
                        </div>
                    </div>
                    </div> : activeTab == 4 ? <div className="p-2 md:p-4">
                        <div className="p-2 md:p-4">
                        <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                            <h2 className="pl-6 text-2xl font-bold sm:text-xl">Account</h2>
                            
                        </div>
                    </div>
                    </div> : <></>
                    
                    }
                    </main>
                    
                </div>
            </section>
            <Footer/>
        </Fragment>
    );
}

export default MyAccount;

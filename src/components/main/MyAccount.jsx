import React, {useState, Fragment, useEffect} from 'react';
import { useMediaQuery } from '@mui/material';
import axios from 'axios';
import { useNavigate } from "react-router-dom";



import AfricanaHeader from './AfricanaHeader';

import Products from "./Products";


import { Avatar, Divider } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import CollectionsIcon from '@mui/icons-material/Collections';
import ReviewsIcon from '@mui/icons-material/Reviews';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import LogoutIcon from '@mui/icons-material/Logout';

import Loading from './widgets/Loading';

function MyAccount({ options, addToCart, cart, removeCartItem, removeAllCartItem  }) {


    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(0);

    const [products, setProductsData] = useState([]);
    const [isDataloading, setIsDataLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);


    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [companyname, setCompanyname] = useState('Enter your Company name');
    const [emailAddress, setEmailAddress] = useState('');
    const [phone, setPhonenumber] = useState('Enter your phone number');
    const [country, setCountry] = useState('Enter your Country *dropdown');
    const [address1, setAddress1] = useState('Enter Address Line 1');
    const [address2, setAddress2] = useState('Enter Address Line 2');
    const [towncity, setTowncity] = useState('Enter Town / City');

    const [postalCode, setPostalCode] = useState("Enter Postal Code");
    const [city, setCity] = useState("Enter City");
    const [state, setState] = useState("Enter State");




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
            <div className='bg-black'><AfricanaHeader options={options} cart={cart} removeCartItem={removeCartItem} removeAllCartItem={removeAllCartItem} /></div>

            <section className="my-account-section ">
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
                    className={`flex items-center pl-5 py-2.5 font-semibold hover:text-gray-900 ${activeTab === 1 ? 'border rounded-l-full' : ''} hover:border hover:rounded-l-full`}
                >
                    <Avatar sx={{ width: 32, height: 32 }}>
                        <CollectionsIcon />
                    </Avatar>
                    <span className="pl-3">My Collection</span>
                </a>
                <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setActiveTab(2)}
                    className={`flex items-center pl-5 py-2.5 font-semibold hover:text-gray-900 ${activeTab === 2 ? 'border rounded-l-full' : ''} hover:border hover:rounded-l-full`}
                >
                    <Avatar sx={{ width: 32, height: 32 }}>
                        <LocalActivityIcon />
                    </Avatar>
                    <span className="pl-3">Vouchers</span>
                </a>
                <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setActiveTab(3)}
                    className={`flex items-center pl-5 py-2.5 font-semibold hover:text-gray-900 ${activeTab === 3 ? 'border rounded-l-full' : ''} hover:border hover:rounded-l-full`}
                >
                    <Avatar sx={{ width: 32, height: 32 }}>
                        <ReviewsIcon />
                    </Avatar>
                    <span className="pl-3">Reviews</span>
                </a>
                <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setActiveTab(4)}
                    className={`flex items-center pl-5 py-2.5 font-semibold hover:text-gray-900 ${activeTab === 4 ? 'border rounded-l-full' : ''} hover:border hover:rounded-l-full`}
                >
                    <Avatar sx={{ width: 32, height: 32 }}>
                        <SettingsIcon />
                    </Avatar>
                    <span className="pl-3">Account Management</span>
                </a>
                <a
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        setActiveTab(5);
                        alert("Logging out..")
                        navigate('/');
                    }}
                    className={`flex items-center pl-5 py-2.5 font-semibold hover:text-gray-900 ${activeTab === 5 ? 'border rounded-l-full' : ''} hover:border hover:rounded-l-full`}
                >
                    <Avatar sx={{ width: 32, height: 32 }}>
                        <LogoutIcon />
                    </Avatar>
                    <span className="pl-3">Logout</span>
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
                                                    placeholder="Your first name" value="" 
                                                    onChange={(e) => setFirstname(e.target.value)} 
                                                    required />
                                            </div>
                                            <div className="w-full">
                                                <label htmlFor="last_name"
                                                    className="block mb-2 text-sm font-medium text-black">Your
                                                    last name</label>
                                                <input type="text" id="last_name"
                                                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                                                    placeholder="Your last name" value="" 
                                                    onChange={(e) => setLastname(e.target.value)}
                                                    required />
                                            </div>
                                        </div>
                                        <div className="mb-2 sm:mb-6">
                                            <label htmlFor="email"
                                                className="block mb-2 text-sm font-medium text-black">Your
                                                email</label>
                                            <input type="email" id="email"
                                                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                                                placeholder="your.email@mail.com" 
                                                onChange={(e) => setEmailAddress(e.target.value)}
                                                required />
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
                                                    placeholder="Street address" value="" 
                                                    onChange={(e) => setAddress1(e.target.value)}
                                                    required />
                                            </div>
                                            <div className="w-full">
                                                <label htmlFor="last_name"
                                                    className="block mb-2 text-sm font-medium text-black">
                                                    (optional) Address</label>
                                                <input type="text" id="last_name"
                                                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                                                    placeholder="Apartment, Suite, Unit etc." value="" 
                                                    onChange={(e) => setAddress2(e.target.value)}
                                                    required />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                            
                                            <div className="w-full">
                                                <label htmlFor="first_name"
                                                    className="block mb-2 text-sm font-medium text-black">
                                                    City</label>
                                                <input type="text" id="first_name"
                                                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                                                    placeholder="City" value="" 
                                                    onChange={(e) => setCity(e.target.value)}
                                                    required />
                                            </div>
                                            <div className="w-full">
                                                <label htmlFor="last_name"
                                                    className="block mb-2 text-sm font-medium text-black">
                                                    Postcode / ZIP</label>
                                                <input type="text" id="last_name"
                                                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                                                    placeholder="Postalcode" value="" 
                                                    onChange={(e) => setPostalCode(e.target.value)}
                                                    required />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                            
                                            <div className="w-full">
                                                <label htmlFor="first_name"
                                                    className="block mb-2 text-sm font-medium text-black">
                                                    State</label>
                                                <input type="text" id="first_name"
                                                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                                                    placeholder="State" value="" 
                                                    onChange={(e) => setState(e.target.value)}
                                                    required />
                                            </div>
                                            <div className="w-full">
                                                <label htmlFor="last_name"
                                                    className="block mb-2 text-sm font-medium text-black">
                                                    Country</label>
                                                <input type="text" id="last_name"
                                                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                                                    placeholder="Country" value="" 
                                                    onChange={(e) => setCountry(e.target.value)}
                                                    required />
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
  isDataloading ? 
//   "Loading..." 
< Loading />
  : <Products
//   HandelQuickViewData={HandelQuickViewData}
  products={products}
//   ordering={ordering}
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
        </div>
    );
}

export default MyAccount;
import React, {useState, Fragment, useEffect} from 'react';
import { useMediaQuery } from '@mui/material';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import AfricanaHeader from './AfricanaHeader';

import Products from "./Products";


import logo from '../../assets/logos/Logo Wordmark 1.png';
import logo2 from '../../assets/logos/Logo Wordmark.png';
import logo3 from '../../assets/logos/Circle Icon.png';


import { Avatar, Divider } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import CollectionsIcon from '@mui/icons-material/Collections';
import ReviewsIcon from '@mui/icons-material/Reviews';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import LogoutIcon from '@mui/icons-material/Logout';

import Loading from './widgets/Loading';


import EditIcon from '@mui/icons-material/Edit';


function MyAccount({ options, addToCart, cart, removeCartItem, removeAllCartItem, handleEmailAddress }) {

    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(0);
    

    const [showEdit, setShowEdit] = useState(false);


    return(
    <div className='bg-gray-100'>
        <div className='bg-black'><AfricanaHeader options={options} cart={cart} removeCartItem={removeCartItem} removeAllCartItem={removeAllCartItem}  handleEmailAddress={handleEmailAddress}/></div>


        <div className='container-1410 mt-12 ' style={{  }}>
            <div className="flex w-full ">
                <div className="flex flex-col flex-grow bg-white mx-4 mb-4" style={{ flexBasis: '20%', height: '500px' }}>
                    {/* <div className='mx-2 bg-red-400'>Content for the first div (20%)</div> */}

                    <div className="sticky flex flex-col gap-2 p-4 text-sm top-12">
                <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setActiveTab(0)}
                    className={`flex items-center pl-4 py-2 hover:text-gray-600 ${activeTab === 0 ? 'bg-gray-200' : ''}`}
                >
                    <AccountCircleIcon />
                    <span className="pl-4">My Africana Account</span>
                </a>
                
                <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setActiveTab(1)}
                    className={`flex items-center pl-4 py-2 hover:text-gray-600 ${activeTab === 1 ? 'bg-gray-200' : ''}`}
                >
                    <CollectionsIcon />
                    <span className="pl-4">My Collection</span>
                </a>
                <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setActiveTab(2)}
                    className={`flex items-center pl-4 py-2  hover:text-gray-600 ${activeTab === 2 ? 'bg-gray-200' : ''}`}
                >
                    <LocalActivityIcon />
                    <span className="pl-4">Vouchers</span>
                </a>
                <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setActiveTab(3)}
                    className={`flex items-center pl-4 py-2  hover:text-gray-600 ${activeTab === 3 ? 'bg-gray-200' : ''}`}
                >
                    <ReviewsIcon />
                    <span className="pl-4">Reviews</span>
                </a>
                {/* <a
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        setActiveTab(5);
                        // alert("Logging out..")
                        // navigate('/');
                    }}
                    className={`flex items-center pl-4 py-2  hover:text-gray-600 ${activeTab === 5 ? 'bg-white' : ''}`}
                >
                    <LogoutIcon />
                    <span className="pl-3">Logout</span>
                </a> */}
            </div>
                </div>
                <div className="flex flex-col flex-grow bg-white mx-4 pt-6 mb-12" style={{ flexBasis: '80%' }}>
                {activeTab == 0 ? 
                    <div className='mx-2 '>
                        
                       <div className='ml-4 flex flex-col'>
                       <div className='mb-4'>Account Overview</div>
                       <hr className='mb-4'/>
                        {/* <div className=' pl-4 mb-4'>
                        <img className="object-contain w-32 h-32 p-1 rounded-full ring-2 ring-gray-300"
                        src={logo3} alt="" />
                        </div> */}

                        <div className='pl-4 mb-4 relative'>
                            <img className="object-contain w-32 h-32 p-1 rounded-full ring-2 ring-gray-300" src={logo3} alt="" 
                            onMouseEnter={() => {setShowEdit(true)}}
                            onMouseLeave={() => {setShowEdit(false)}}
                            />
                            {
                                showEdit ? <div 
                                onMouseEnter={() => {setShowEdit(true)}}
                                className="absolute bottom-0 left-28 bg-gray-300 rounded-full p-1 cursor-pointer flex justify-center">
                                <EditIcon className='p-1 border rounded-full'/>
                            </div> : ""
                            }
                        </div>


                        <div className='flex w-full'>
                            <div className="flex flex-col flex-grow border border:bg-black mx-4 mt-2 mb-12 pl-4" style={{ flexBasis: '50%' }}>
                                <p className='my-2'>Account Details</p>
                                <hr className='mb-4'/>
                                <p className='mb-8'># Details</p>
                            </div>
                            <div className="flex flex-col flex-grow border border:bg-black mx-4 mt-2 mb-12 pl-4" style={{ flexBasis: '50%' }}>
                                <p className='my-2'>Address Book</p>
                                <hr className='mb-4'/>
                                <p className='mb-8'># Details</p>
                            </div>
                        </div>
                        <div className='flex w-full'>
                            <div className="flex flex-col flex-grow border border:bg-black mx-4 mt-2 mb-12 pl-4" style={{ flexBasis: '50%' }}>
                                <p className='my-2'>Africana Credit</p>
                                <hr className='mb-4'/>
                                <p className='mb-8'># Details</p>
                            </div>
                            <div className="flex flex-col flex-grow border border:bg-black mx-4 mt-2 mb-12 pl-4" style={{ flexBasis: '50%' }}>
                                <p className='my-2'>Newsletters</p>
                                <hr className='mb-4'/>
                                <p className='mb-8'># Details</p>
                            </div>
                        </div>

                       </div>
                    </div>
                    :
                    activeTab == 1 ? 
                    <div className='mx-2 '>
                        <div className='ml-4 flex flex-col'>
                       <div className='mb-4'>My Collections</div>
                       <hr className='mb-4'/>
                        {/* <div>
                        <img className="object-fit w-32 h-32 p-1 rounded-full ring-2 ring-gray-300"
                        src={logo3} alt="" />
                        </div> */}
                        <div className='flex w-full'>
                            <div className="flex flex-col flex-grow border border:bg-black mx-4 mt-2 mb-12 pl-4" style={{ flexBasis: '100%' }}>
                                
                                <div className="w-full mt-4" >
                                    <img src={"https://shopafricana.co/wp-content/uploads/2024/01/1-slider-scaled.jpg"}
                                    alt="" className="w-full object-contain" style={{ height: '500px' }}/>
                                </div>


                            </div>
                            
                        </div>
                        

                       </div>
                    </div>
                    :
                    activeTab == 2 ? 
                    <div className='mx-2 '>Content for Vouchers</div>
                    :
                    activeTab == 3 ? 
                    <div className='mx-2 '>Content for Reviews</div>
                    :
                ''
                
                }


                </div>
            </div>
        </div>

    </div>
    );
}

export default MyAccount;
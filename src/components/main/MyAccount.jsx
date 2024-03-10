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


import LockIcon from '@mui/icons-material/Lock';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import Slider from "react-slick";
import data from './singleProductDemo.json';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


function MyAccount({ options, addToCart, cart, removeCartItem, removeAllCartItem, handleEmailAddress }) {

    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(0);
    

    const [showEdit, setShowEdit] = useState(false);

    const settings = {
        dots: true,
        // fade: true,
        // waitForAnimate: false,
        showThumbs: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        //
        // customPaging: function (i) {
        //     return (
        //         <a>
        //             <img 
        //             src=
        //             //{imgs}
        //             "http://shopafricana.co/wp-content/uploads/2024/01/March-23-Document-Name12-scaled-1-900x1125.jpg"
                            
        //             />
        //         </a>
        //     );
        // },
        // infinite: true,
        // speed: 600,
        // autoplaySpeed: 4000,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        // autoplay: true,
        // dots: true,
        // dotsClass: "slick-dots slick-thumb slider-nav",
        // arrows: false,
        // //vertical: true,
        // //verticalSwiping: true,
        // afterChange: index => {
        //     setCurrentSlide(index);
        // }
      };
      const [currentSlide, setCurrentSlide] = useState(0);
      const handleThumbnailClick = index => {
        setCurrentSlide(index);
    };


    const images = [
        "https://shopafricana.co/wp-content/uploads/2023/12/March-23-Document-Name03-scaled-2.jpg", 
        "https://shopafricana.co/wp-content/uploads/2023/12/March-23-Document-Name03-scaled-2.jpg", 
        "https://shopafricana.co/wp-content/uploads/2023/12/March-23-Document-Name03-scaled-2.jpg", 
        "https://shopafricana.co/wp-content/uploads/2023/12/March-23-Document-Name03-scaled-2.jpg", 
        "https://shopafricana.co/wp-content/uploads/2023/12/March-23-Document-Name03-scaled-2.jpg", 
        "https://shopafricana.co/wp-content/uploads/2023/12/March-23-Document-Name03-scaled-2.jpg", 
        "https://shopafricana.co/wp-content/uploads/2023/12/March-23-Document-Name03-scaled-2.jpg", 
        "https://shopafricana.co/wp-content/uploads/2023/12/March-23-Document-Name03-scaled-2.jpg", 
        "https://shopafricana.co/wp-content/uploads/2023/12/March-23-Document-Name03-scaled-2.jpg"
    ];
    // const [currentSlide, setCurrentSlide] = useState(0);
    const [delayTimeout, setDelayTimeout] = useState(null);
    const handleMouseEnter = () => {
      // setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  
      clearTimeout(delayTimeout); // Clear any existing timeout
      const timeout = setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, 500); // Set a delay of 1000 milliseconds (1 second)
      setDelayTimeout(timeout); // Save the timeout reference
  
    };


    const [isHoverWestNewIn, setIsHoverWestNewIn] = useState(false);
    const handleHoverWestNewIn = () => { setIsHoverWestNewIn(true); };
    const handleLeaveWestNewIn = () => { setIsHoverWestNewIn(false); };


    const [photo, setPhoto] = useState(null);
    // const [photo, setPhoto] = useState({});
    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        //console.log("Selected file:", file);
        if (file) {
            const reader = new FileReader();
            reader.onloadstart = () => {
                // console.log("File reading started...");
            };
            reader.onprogress = (event) => {
                // console.log(`File reading progress: ${Math.round((event.loaded / event.total) * 100)}%`);
            };
            reader.onload = (readerEvent) => {
                // console.log("File reading completed.");
                // console.log("Resulting data URL:", readerEvent.target.result);
                setPhoto(readerEvent.target.result);
            };
            reader.onerror = (error) => {
                // console.error("File reading error:", error);
            };
            reader.readAsDataURL(file);
        } else {
            alert("No file selected.");
        }
    };
    


    return(
    // <div className='bg-gray-100'>
    <div className='bg-black' style={{ height: '100vh' }}>
        <div className='bg-black'><AfricanaHeader options={options} cart={cart} removeCartItem={removeCartItem} removeAllCartItem={removeAllCartItem}  handleEmailAddress={handleEmailAddress}/></div>


        <div className='container-1410 mt-12 ' style={{  }}>
            <div className="flex w-full ">
                <div className="flex flex-col flex-grow bg-white mx-4 mb-4" style={{ flexBasis: '20%', height: '500px' }}>
                    {/* <div className='mx-2 bg-red-400'>Content for the first div (20%)</div> */}

                    <div className="sticky flex flex-col gap-2 p-4 text-sm top-12">
                <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setActiveTab(0)}
                    className={`flex items-center justify-between pl-4 py-2 hover:text-black ${activeTab === 0 ? 'bg-gray-200' : ''}`}
                >
                    <div className='flex items-center '>
                        <AccountCircleIcon />
                        <span className="pl-4">Account</span>
                    </div>
                    {activeTab === 0 ? <KeyboardArrowRightIcon className='p-1'/> : ''}
                </a>
                
                <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setActiveTab(1)}
                    className={`flex items-center justify-between pl-4 py-2 hover:text-black ${activeTab === 1 ? 'bg-gray-200' : ''}`}
                >
                    {/* <CollectionsIcon />
                    <span className="pl-4">My Collection</span> */}
                    <div className='flex items-center '>
                        <CollectionsIcon />
                        <span className="pl-4">Collections</span>
                    </div>
                    {activeTab === 1 ? <KeyboardArrowRightIcon className='p-1'/> : ''}
                </a>
                <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setActiveTab(2)}
                    className={`flex items-center justify-between pl-4 py-2  hover:text-black ${activeTab === 2 ? 'bg-gray-200' : ''}`}
                >
                    {/* <LocalActivityIcon />
                    <span className="pl-4">Vouchers</span> */}
                    <div className='flex items-center '>
                        <LocalActivityIcon />
                        <span className="pl-4">Vouchers</span>
                    </div>
                    {activeTab === 2 ? <KeyboardArrowRightIcon className='p-1'/> : ''}
                </a>
                <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setActiveTab(3)}
                    className={`flex items-center justify-between pl-4 py-2  hover:text-black ${activeTab === 3 ? 'bg-gray-200' : ''}`}
                >
                    {/* <ReviewsIcon />
                    <span className="pl-4">Reviews</span> */}
                    <div className='flex items-center '>
                        <ReviewsIcon />
                        <span className="pl-4">Reviews</span>
                    </div>
                    {activeTab === 3 ? <KeyboardArrowRightIcon className='p-1'/> : ''}
                </a>
                <hr />
                <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setActiveTab(4)}
                    className={`flex items-center justify-between pl-4 py-2  hover:text-black ${activeTab === 4 ? 'bg-gray-200' : ''}`}
                >
                    {/* <ReviewsIcon /> */}
                    <span className="">Account Management</span>
                    
                </a>
                <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setActiveTab(5)}
                    className={`flex items-center justify-between pl-4 py-2  hover:text-black ${activeTab === 5 ? 'bg-gray-200' : ''}`}
                >
                    {/* <ReviewsIcon /> */}
                    <span className="">Address Book</span>
                    
                </a>
                <hr className='mb-4'/>
                <a
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        // setActiveTab(6);
                        // alert("Logging out..")
                        navigate('/');
                    }}
                    className={`flex justify-center items-center pl-4 py-2  hover:text-black ${activeTab === 6 ? 'bg-gray-200' : ''}`}
                >
                    {/* <LogoutIcon /> */}
                    <span className="text-red-900">Logout</span>
                </a>
            </div>
                </div>
                <div className="flex flex-col flex-grow bg-white mx-4 pt-6 mb-12" style={{ flexBasis: '80%' }}>
                {activeTab == 0 ? 
                    <div className='mx-2 '>
                        
                       <div className='ml-4 flex flex-col'>
                       <div className='mb-4'>Account Overview</div>
                       <hr className='mb-4'/>

                        <div className='pl-4 mb-4 relative'>
                        
                        <img className="object-contain w-32 h-32 p-1 rounded-full ring-2 ring-gray-300" src={photo !== null ? photo : logo3} alt=""  //object-contain
                            onMouseEnter={() => {setShowEdit(true)}}
                            onMouseLeave={() => {setShowEdit(false)}}
                            />
                            {
                                showEdit ? <div 
                                onMouseEnter={() => {setShowEdit(true)}}
                                onMouseLeave={() => {setShowEdit(false)}}
                                className="absolute bottom-0 left-28 bg-gray-300 rounded-full p-1 cursor-pointer flex justify-center">
                                    
                                <EditIcon 
                                onClick={() => { document.getElementById('logoInput').click(); }}
                                className='p-1 border rounded-full'
                                />
                            </div> : ""
                            }
                            <input
                    style={{ backgroundColor: '#EDF2F6', width: '100%', 
                    display: 'none' }}
                    type="file"
                    id="logoInput"
                    accept=".jpg, .jpeg, .png"
                    onChange={handlePhotoChange}
                  />
                        </div>

                        

                        <div className='flex w-full'>
                            <div className="flex flex-col flex-grow border border:bg-black mx-4 mt-2 mb-12 pl-4" style={{ flexBasis: '50%' }}>
                                <p className='my-2'>Account Details</p>
                                <hr className='mb-4'/>
                                <div className='flex flex-col'>
                                <p className='mb-2'>Firstname Lastname</p>
                                <p className='mb-2'>email@africanalifestyle.tv</p>
                                </div>
                            </div>
                            <div className="flex flex-col flex-grow border border:bg-black mx-4 mt-2 mb-12 pl-4" style={{ flexBasis: '50%' }}>
                                <div className='flex justify-between items-center'>
                                    <p className='my-2'>Address Book</p>
                                    <EditIcon 
                                    onClick={() => {
                                        setActiveTab(5);
                                    }}
                                    style={{ width: '28px', height: '28px', color: '#000000', cursor: 'pointer' }} className='p-1.5 mr-4 hover:bg-gray-200 hover:rounded-full'/>
                                </div>
                                <hr className='mb-4'/>
                                <p className='mb-8'>Your default shipping address:</p>
                            </div>
                        </div>
                        <div className='flex w-full'>
                            <div className="flex flex-col flex-grow border border:bg-black mx-4 mt-2 mb-12 pl-4" style={{ flexBasis: '50%' }}>
                                <p className='my-2'>Africana Credit</p>
                                <hr className='mb-4'/>
                                <p className='mb-8'>Balance: 0</p>
                            </div>
                            <div className="flex flex-col flex-grow border border:bg-black mx-4 mt-2 mb-12 pl-4" style={{ flexBasis: '50%' }}>
                                <p className='my-2'>Newsletters</p>
                                <hr className='mb-4'/>
                                <p className='mb-8'>No current subscriptions</p>
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
                        <div className='flex w-full'>
                        <div className="w-full mt-4" >
                                    
                                    <div className='flex justify-center w-100'>
                                    <div className='flex' style={{ width: '500px'  }}>
                                        <div className="carousel-body carousel-content">
                                            {/* <h1 className="">#</h1> */}
                                            <div className=" " style={{  }}>
                                                {/* <Slider {...settings}>
                                                    {AfroStyles.map((item) => (
                                                        <div key={item.id}>
                                                            <div className="carousel-img-body">
                                                                <img src={item.src} alt={item.alt} />
                                                            </div>
                                                        <div>
                                                            <h2>{item.title}</h2>
                                                            <p>{item.description}</p>
                                                        </div>
                                                        </div>
                                                        ))}
                                                </Slider> */}
                                                
                                                {/* <Slider {...settings}>
                                                    {(() => {
                                                        const sliderItems = [];
                                                        for (let i = 0; i < data.images.length; i++) {
                                                            sliderItems.push(
                                                                <div key={i}>
                                                                    <img
                                                                    className='px-1 mx-1 mt-2'
                                                                    src="http://shopafricana.co/wp-content/uploads/2024/01/March-23-Document-Name12-scaled-1-900x1125.jpg"
                                                                    alt={`Image ${i}`}
                                                                    
                                                                    />
                                                                </div>
                                                            );
                                                        }
                                                    return sliderItems;
                                                    })()}
                                                </Slider> */}

<div style={{ position: 'relative' }}>
<Carousel
      showIndicators={false}
        showArrows={false}
        showStatus={false}
        showThumbs={true}
        infiniteLoop={true}
        autoPlay={true}
        draggable={true}
        swipeable={true}
        selectedItem={currentSlide}
        onChange={setCurrentSlide}
      >
        {images.map((image, index) => (
          <div key={index} 
          
        //   onClick={handleMouseEnter}
        //   onMouseEnter={handleMouseEnter}
          >
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </Carousel>
      {/* <div style={{ position: 'absolute', top: '8px', left: '8px', display: 'flex' }}>
        {images.map((_, index) => (
          <div
            key={index}
            style={{
              width: '24px',
              height: '2px',
              margin: '0 4px',
              background: index === currentSlide ? '#000' : '#fff',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            title={`${index + 1}`}
          />
        ))}
      </div> */}
</div>
                                                

                                            </div>
                                        </div>
                                    </div>

                                    </div>




                                </div>
                            
                        </div>
                        

                       </div>
                    </div>
                    :
                    activeTab == 2 ? 
                    <div className='mx-2 '>
                        
                       <div className='ml-4 flex flex-col'>
                       <div className='mb-4'>My Vouchers</div>
                       <hr className='mb-4'/>
                        
                        

                       </div>
                    </div>
                    :
                    activeTab == 3 ? 
                    <div className='mx-2 '>
                        
                       <div className='ml-4 flex flex-col'>
                       <div className='mb-4'>My Reviews</div>
                       <hr className='mb-4'/>
                        
                        

                       </div>
                    </div>
                    :
                    activeTab == 4 ?
                    <div className='mx-2 '>
                        
                       <div className='ml-4 flex flex-col'>
                       <div className='mb-4'>Account Management</div>
                       <hr className='mb-4'/>

                       <div className='flex w-full'>
                            <div className="flex flex-col flex-grow border border:bg-black mx-4 mt-2 mb-12 pl-4" style={{ flexBasis: '50%' }}>
                                <div className='flex justify-between items-center'>
                                    <p className='my-2'>Profile Details</p>
                                    <AccountCircleIcon 
                                    onClick={() => {
                                        
                                    }}
                                    style={{ width: '28px', height: '28px', color: '#000000', cursor: 'pointer' }} className='p-1.5 mr-4 hover:bg-gray-200 hover:rounded-full'/>
                                </div>
                                <hr className='mb-4'/>
                                <div className='flex flex-col'>
                                <p className='mb-8'>Basic Details</p>
                                <p className='mb-8'>Edit Phone Number</p>
                                </div>
                            </div>
                            <div className="flex flex-col flex-grow border border:bg-black mx-4 mt-2 mb-12 pl-4" style={{ flexBasis: '50%' }}>
                                <div className='flex justify-between items-center'>
                                    <p className='my-2'>Security Settings</p>
                                    <LockIcon 
                                    onClick={() => {
                                        
                                    }}
                                    style={{ width: '28px', height: '28px', color: '#000000', cursor: 'pointer' }} className='p-1.5 mr-4 hover:bg-gray-200 hover:rounded-full'/>
                                </div>
                                <hr className='mb-4'/>
                                {/* <p className='mb-8'>Manage Passkeys</p> */}
                                <p className='mb-8'>Change Password</p>
                                <p className='mb-8'>Pin Setting</p>
                                <p className='mb-8'>Delete Account</p>
                            </div>
                        </div>
                        
                        

                       </div>
                    </div>
                    :
                    activeTab == 5 ?
                    <div className='mx-2'>
                        <div className='mx-2'>
                        <div className='mx-2 '>
                        
                        <div className='ml-4 flex flex-col'>
                        <div className='mb-4 cursor-pointer'>Address Book</div>
                        {/* <div className='mb-4 cursor-pointer flex justify-between'>
                            <div>Address Book</div><div className='mr-4'>Add New Address</div>
                        </div> */}
                        <hr className='mb-4'/>
                     
 
                         <div className='flex w-full'>
                             <div className="flex flex-col flex-grow border border:bg-black mx-4 mt-2 mb-12 pl-4" style={{ flexBasis: '50%' }}>                                 
                                 <div className='flex flex-col my-2'>
                                 <p className='mb-2'>Firstname Lastname</p>
                                 <p className='mb-2'>No 1, Solar System Avenue</p>
                                 </div>
                                 <hr className='mb-4'/>
                                 <div className='flex justify-between items-center'>
                                     <p className='my-2 cursor-pointer'>Set As Default</p>
                                     <EditIcon 
                                     onClick={() => setActiveTab(7)}
                                     style={{ width: '28px', height: '28px', color: '#000000', cursor: 'pointer' }} className='p-1.5 mr-4 hover:bg-gray-200 hover:rounded-full'/>
                                 </div>                                 
                             </div>
                             <div className="flex flex-col flex-grow border border:bg-black mx-4 mt-2 mb-12 pl-4" style={{ flexBasis: '50%' }}>                                 
                                 <div className='flex flex-col my-2'>
                                 <p className='mb-2'>Firstname Lastname</p>
                                 <p className='mb-2'>No 2, Mercury Road</p>
                                 </div>
                                 <hr className='mb-4'/>
                                 <div className='flex justify-between items-center'>
                                     <p className='my-2 cursor-pointer'>Set As Default</p>
                                     <EditIcon 
                                     onClick={() => setActiveTab(7)}
                                     style={{ width: '28px', height: '28px', color: '#000000', cursor: 'pointer' }} className='p-1.5 mr-4 hover:bg-gray-200 hover:rounded-full'/>
                                 </div>                                 
                             </div>
                         </div>
                         <div className='flex w-full'>
                             <div className="flex flex-col flex-grow border border:bg-black mx-4 mt-2 mb-12 pl-4" style={{ flexBasis: '50%' }}>                                 
                                 <div className='flex flex-col my-2'>
                                 <p className='mb-2'>Firstname Lastname</p>
                                 <p className='mb-2'>No 3, Jupiter Crescent</p>
                                 </div>
                                 <hr className='mb-4'/>
                                 <div className='flex justify-between items-center'>
                                     <p className='my-2 cursor-pointer'>Set As Default</p>
                                     <EditIcon 
                                     onClick={() => setActiveTab(7)}
                                     style={{ width: '28px', height: '28px', color: '#000000', cursor: 'pointer' }} className='p-1.5 mr-4 hover:bg-gray-200 hover:rounded-full'/>
                                 </div>                                 
                             </div>
                             <div className="flex flex-col flex-grow border border:bg-black mx-4 mt-2 mb-12 pl-4" style={{ flexBasis: '50%' }}>                                 
                                 <div className='flex flex-col my-2'>
                                 <p className='mb-2'>Firstname Lastname</p>
                                 <p className='mb-2'>No 4, Memory Lane</p>
                                 </div>
                                 <hr className='mb-4'/>
                                 <div className='flex justify-between items-center'>
                                     <p className='my-2 cursor-pointer'>Set As Default</p>
                                     <EditIcon 
                                     onClick={() => setActiveTab(7)}
                                     style={{ width: '28px', height: '28px', color: '#000000', cursor: 'pointer' }} className='p-1.5 mr-4 hover:bg-gray-200 hover:rounded-full'/>
                                 </div>                                 
                             </div>
                         </div>
 
                        </div>
                     </div>
                    </div>
                    </div>
                : activeTab == 6 ? //logout
                <div className='mx-2'>6
                </div>
                : activeTab == 7 ? //edit address
                <div className='mx-2'>
                        <div className='mx-2'>
                        <div className='mx-2 '>
                        
                        <div className='ml-4 flex flex-col'>
                            {/* proprietary rbapps */}
                        <div className='mb-4 items-center flex cursor-pointer' 
                        onClick={() => {setActiveTab(5); handleLeaveWestNewIn();}}
                        // onMouseEnter={handleHoverWestNewIn}
        // onMouseLeave={handleLeaveWestNewIn}
        >
            <ArrowRightAltIcon
        // className='cursor-pointer'
        // onClick={() => setActiveTab(5)}
        onMouseEnter={handleHoverWestNewIn}
        onMouseLeave={handleLeaveWestNewIn}
        style={{ width: isHoverWestNewIn ? '32px' : '44px', transition: 'width 0.3s ease', transform: 'scaleX(-1)' }}
      />Edit Address</div>{/* proprietary rbapps */}
                        <hr className='mb-4'/>
                     
 
                        <div className='flex flex-wrap w-full'>
    <div className="flex flex-col flex-grow border border:bg-black mx-4 mt-2 mb-12 pl-4 w-full md:w-1/2">
        <div className='flex flex-col my-2 mr-4'>
        <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-2">
                <label htmlFor="" className="block text-sm font-medium text-gray-700">
                    Firstname
                </label>
                <input type="text"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                    placeholder='Firstname' />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-2">
                <label htmlFor="" className="block text-sm font-medium text-gray-700">
                    Lastname
                </label>
                <input type="text"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                    placeholder='Lastname' />
            </div>
        </div>

            <label htmlFor="" className="block text-sm font-medium text-gray-700">
                Phone Number
            </label>
            <input type="text"
                className="mb-2 bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                placeholder='Phone Number' />

            <label htmlFor="" className="block text-sm font-medium text-gray-700">
                Address
            </label>
            <input type="text"
                className="mb-2 bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                placeholder='Address' />

                <hr className='my-4'/>


<div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-2">
                <label htmlFor="" className="block text-sm font-medium text-gray-700">
                    Region
                </label>
                <input type="text"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                    placeholder='Region' />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-2">
                <label htmlFor="" className="block text-sm font-medium text-gray-700">
                    City
                </label>
                <input type="text"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                    placeholder='City' />
            </div>
        </div>



        </div>
    </div>


    
</div>

                         
 
                        </div>
                     </div>
                    </div>
                    </div>
                : ''
                
                }


                </div>
            </div>
        </div>
    </div>
    );
}

export default MyAccount;
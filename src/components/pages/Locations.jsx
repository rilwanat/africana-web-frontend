import React, {useState, Fragment} from 'react';
import Slider from "react-slick";
// import ReactTooltip from 'react-tooltip';

import './products.css';

import imgx from '../../assets/images/shop/img-2.jpg';

import {Link, useNavigate} from "react-router-dom";


import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import img1 from '../../assets/images/locations/1.png';
import img2 from '../../assets/images/locations/2.png';
import img3 from '../../assets/images/locations/3.png';
import img4 from '../../assets/images/locations/4.png';

/**
 * Recent Products component
 * @param onQuickViewClick
 * @returns {*}
 * @constructor
 */
function Locations({onQuickViewClick, products}) {

    const navigate = useNavigate();

    // const [isDragging, setIsDragging] = useState(false);

    const [isPrevHovered, setPrevHovered] = useState(false);
    const [isNextHovered, setNextHovered] = useState(false);

    const [isViewHovered, setViewHovered] = useState(false);
    const [isFavHovered, setFavHovered] = useState(false);
    const [isBagHovered, setBagHovered] = useState(false);

    
    function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: isNextHovered ? 'black' : '',
        zIndex: 1,
      }}
      onClick={onClick}
      onMouseEnter={() => setNextHovered(true)}
      onMouseLeave={() => setNextHovered(false)}
    >
      <ChevronRightIcon style={{ color: isNextHovered ? 'white' : '', }}/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: isPrevHovered ? 'black' : '',
        zIndex: 1,
      }}
      onClick={onClick}
      onMouseEnter={() => setPrevHovered(true)}
      onMouseLeave={() => setPrevHovered(false)}
    >
      <ChevronLeftIcon style={{ color: isPrevHovered ? 'white' : '', }}/>
    </div>
  );
}


    /**
     * slider settings
     */
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 600,
        swipeToSlide: true,
        autoplaySpeed: 6000,
        focusOnSelect: false,
        // prevArrow: <SamplePrevArrow />,
        // nextArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

// Function to find the lowest price among product variants
function findLowestPrice(product) {
    let lowestPrice = Infinity;
  
    //products.forEach(product => {
      product.productVariants.forEach(variant => {
        if (variant.price < lowestPrice) {
          lowestPrice = variant.price;
        }
      });
    //});
  
    return lowestPrice;
  }

  function findHighestPrice(product) {
    let highestPrice = 0;
  
    //products.forEach(product => {
      product.productVariants.forEach(variant => {
        if (variant.price > highestPrice) {
            highestPrice = variant.price;
        }
      });
    //});
  
    return highestPrice;
  }

  // Function to calculate the discount percentage
function calculateDiscountPercentage(price, oldPrice) {
    return parseInt(price) < parseInt(oldPrice) ?
      Math.round(((parseInt(oldPrice) - parseInt(price)) / parseInt(oldPrice)) * 100)
      : 0; // Return 0 if there's no discount
  }

  
  const handleLocartonClick = (product, e) => {
    

  };

  const locations = {
    "locations": [
      {
        "url": img1,// "https://shopafricana.co/wp-content/uploads/2023/12/africanacouture_80846503_2472020132847487_5391795363804777748_n-768x500.jpg",
        "location": "AFRICANA X ABUJA ",
        "street": "Jabi Lake Mall, Bala Sokoto Way, Jabi, ",
        "state": "Abuja, Nigeria. ",
        "time": "Mon – Sat: 9am – 7pm, Sun: 11am – 7pm"
      },
      {
        "url": img2,// "https://shopafricana.co/wp-content/uploads/2023/12/africanacouture_80846503_2472020132847487_5391795363804777748_n-768x500.jpg",
        "location": "AFRICANA COUTURE ABUJA ",
        "street": "17, Monrovia Street, Wuse 2, ",
        "state": "Abuja, Nigeria. ",
        "time": "Mon – Sat: 9am – 7pm, Sun: CLOSED"
      },
      {
        "url": img3,// "https://shopafricana.co/wp-content/uploads/2023/12/Africana-Dakar-2-1024x563.jpg",
        "location": "AFRICANA DAKAR ",
        "street": "En Face Huawei Technologies, Route de King Fahd Palace, ",
        "state": "Dakar, Senegal. ",
        "time": "Mon – Sat: 9am – 8pm, Sun: APPOINTMENTS"
      },
      {
        "url": img4,// "https://shopafricana.co/wp-content/uploads/2023/12/Abidjna-3-768x1024.jpg",
        "location": "AFRICANA ABIDJAN ",
        "street": "1055, Marcroni, ",
        "state": "Abidjan, Côte d’Ivoire 36BP. ",
        "time": "Mon – Sat: 9am – 8pm, Sun: APPOINTMENTS"
      }
    ]
  }
  

    return (
        <Fragment>
            {/* start recent-product-section */}
            <section className="trendy-product-section section-padding mt-12">

                <div className="container-1410">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="section-title-s2">
                                <h2>Our Locations</h2>
                            </div>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="products-wrapper">
                                <ul 
                                // className="products "
                                >
                                    <Slider {...settings}>
                                        {
                                            locations.locations.map((location, index) => (
                                                <li key={index} className="product">
                                                    <div className="product-holder mx-2">
                                                    
                                                    
                            <div 
                            // onClick={isDragging ? null : (e) => handleProductClick(item, e)} 
                            //onClick={(e) => handleProductClick(item, e)} 
                            style={{cursor: 'pointer'}}>

                            

                                                            <img loading="lazy" 
                                                            src=
                                                            // "https://shopafricana.co/wp-content/uploads/2023/12/Africana-Dakar-2-1024x563.jpg"
                                                            {location.url} 
                                                            alt=""/>
                                                        
                                                        {/* </Link> */}
                                                        </div>

                                                    </div>
                                                    <div className="product-info">
                                                        <h4>
                                                            <Link to="">
                                                                {location.location}
                                                            </Link>
                                                        </h4>
                                                        {/* <h4>
                                                        {location.address}
                                                        </h4> */}
                                                        <div className=" mx-4">                                                              
                                                                <span className="text-sm">{location.street}</span>                                                              
                                                                <span className="text-sm">{location.state}</span>                                                              
                                                                <span className="text-sm">{location.time}</span>                                                              
                                                            </div>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </Slider>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end container-1410 */}
            </section>
            {/* end recent-product-section */}
            {/* <ReactTooltip className='tool-tip' effect='solid'/> */}
        </Fragment>
    );
}

export default Locations;
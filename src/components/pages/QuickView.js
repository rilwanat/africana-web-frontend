import React, {useState, Fragment} from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

/**
 * product Quick View component
 * @param data
 * @param onQuickViewCloseClick
 * @returns {*}
 * @constructor
 */
function QuickView({data, onQuickViewCloseClick}) {

    const [productCount, setProductCount] = useState(1);

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

    return (
        <Fragment>
            <div className="quick-view-single-product activve-quick-view-single-product">
                <div className="view-single-product-inner clearfix">
                    <button className="btn quick-view-single-product-close-btn" onClick={onQuickViewCloseClick}><i
                        className="pe-7s-close-circle"/></button>
                    <div className="img-holder">
                        <img loading="lazy" src={process.env.PUBLIC_URL + data.mainImg} alt=""/>
                    </div>
                    <div className="product-details">
                        <h4>Short Sleeve</h4>
                        <div className="price">
                            <span className="current">{data.Symbol}{data.price}</span>
                            {parseInt(data.price) < parseInt(data.oldPrice) ?
                                <span className="old">{data.Symbol}{data.oldPrice}</span> : ''
                            }
                        </div>
                        <div className="rating">
                            <i className="fi flaticon-star"/>
                            <i className="fi flaticon-star"/>
                            <i className="fi flaticon-star"/>
                            <i className="fi flaticon-star"/>
                            <i className="fi flaticon-star-social-favorite-middle-full"/>
                            <span className='ml-2'>({data.reviewCounts} Customer review{data.reviewCounts > 1 ? 's' : ''})</span>
                        </div>
                        <p>{data.content}</p>
                        <div className="product-option">
                        <form className="form">
                                <div className="product-row flex items-center">

                                <div className="touchspin-wrap">
                                                <button
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
                                                       value={productCount} name="product-count"/>
                                            </div>


                                    
                                    {/* <div className='flex flex-grow'> */}
                                        <button className='px-4 ml-2' 
                                        style={{ height: '50px' }}
                                        // type="submit" 
                                        // onClick={onQuickViewCloseClick}
                                        >Add to cart</button>
                                    {/* </div> */}
                                </div>
                            </form>
                        </div>
                        <div className="thb-product-meta-before">
                            <div className="add-to-wishlist">
                                <a href="#" className="add_to_wishlist">
                                    {/* <i className="pe-7s-like"/> */}
                                    <FavoriteIcon className='mr-2' style={{ cursor: "pointer" }}/>
                                    <span>Add To Wishlist</span>
                                </a>
                            </div>
                            <div className="product_meta">
                                <span className="sku_wrapper">SKU:<span className="sku">{' ' + data.SKU}</span></span>
                                <span className="posted_in">
                                    Categories:
                                    {
                                        data.Categories.map((item, index) =>
                                            <a key={index}
                                               href={item.link}>{' ' + item.name}{data.Categories.length - 1 === index ? '' : ', '}</a>
                                        )
                                    }
                                </span>
                                <span className="tagged_as">
                                    Tags:
                                    {
                                        data.Tags.map((item, index) =>
                                            <a key={index}
                                               href={item.link}>{' ' + item.name}{data.Tags.length - 1 === index ? '' : ', '}</a>
                                        )
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default QuickView;
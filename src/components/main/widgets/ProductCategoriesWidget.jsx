import React, {useState, Fragment, useEffect} from 'react';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function ProductCategoriesWidget({ categories, category, navigateTo }) {

    const [openCategory, setOpenCategory] = useState(null);
    const handleCategoryClick = (categoryId) => {
        setOpenCategory(openCategory === categoryId ? null : categoryId);
    };



    return (
        <Fragment>
            <div className="widget woocommerce widget_product_categories">
                <h3>Filter by categories</h3>
                
                {/* <ul className="product-categories">
                {categories.map(category => (
                    <li key={category.id} className="cat-item cat-parent">
                        <a onClick={() => {navigateTo(category.name)}}  className='' style={{ color: category === category.name ? 'black' : '', cursor: 'pointer' }}>{category.name}</a> 
                        {category.children.length > 0 && (
                                <ul className="children">
                                    {category.children.map(childCategory => (
                                        <li key={childCategory.id} className="cat-item cat-item-213">
                                            <a style={{ cursor: 'pointer' }}>{childCategory.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                    </li>
                    ))}
                </ul> */}



{/* <ul className="product-categories">
            {categories.map(category => (
                <li key={category.id} className="cat-item cat-parent">
                    <div
                        onClick={() => handleCategoryClick(category.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        {category.name}
                    </div>
                    {openCategory === category.id && category.children.length > 0 && (
                        <ul className="children">
                            {category.children.map(childCategory => (
                                <li key={childCategory.id} className="cat-item cat-item-213">
                                    <div
                                        onClick={() => navigateTo(childCategory.name)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {childCategory.name}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul> */}

<div
                                // onClick={() => handleCategoryClick(category.id)}
                                className="flex justify-between"
                                style={{ cursor: 'pointer'}}
                            >
                                <span onClick={() => {navigateTo("all products")}}>{"All"}</span>
                                
                            </div>



<ul className="product-categories">
                    {categories.map(category => (
                        <li key={category.id} className="cat-item cat-parent">
                            <div
                                // onClick={() => handleCategoryClick(category.id)}
                                className="flex justify-between"
                                style={{ cursor: 'pointer'}}
                            >
                                <span onClick={() => {navigateTo(category.name)}}>{category.name}</span>
                                {category.children.length > 0 && (
                                    <span
                                    onClick={() => handleCategoryClick(category.id)} >
                                        {openCategory === category.id ? <KeyboardArrowUpIcon className='p-1'/> : <KeyboardArrowRightIcon className='p-1'/> }
                                    </span>
                                )}
                            </div>
                            {openCategory === category.id && category.children.length > 0 && (
                                <ul className="children">
                                    {category.children.map(childCategory => (
                                        <li key={childCategory.id} className="cat-item cat-item-213">
                                            <div
                                                onClick={() => navigateTo(childCategory.name)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {childCategory.name}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>





            </div>
        </Fragment>
    );
}

export default ProductCategoriesWidget;
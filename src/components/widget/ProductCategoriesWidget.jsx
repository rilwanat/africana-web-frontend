import React, {useState, Fragment, useEffect} from 'react';

/**
 * Product Categories Widget
 * @returns {*}
 * @constructor
 */
function ProductCategoriesWidget({ categories }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    return (
        <Fragment>
            <div className="widget woocommerce widget_product_categories">
                <h3>Filter by categories</h3>
                {/* <ul className="product-categories">
                    <li className="cat-item cat-parent">
                        <a href="#">Clothing</a>
                        <ul className="children">
                            <li className="cat-item cat-item-213">
                                <a >Accessories</a>
                            </li>
                            <li className="cat-item cat-item-212">
                                <a >Hoodies</a>
                            </li>
                            <li className="cat-item cat-item-211">
                                <a >Tshirts</a>
                            </li>
                        </ul>
                    </li>
                </ul> */}
                <ul className="product-categories">
                {categories.map(category => (
                    <li className="cat-item cat-parent">
                        <a href="">{category.name}</a>
                        {category.children.length > 0 && (
                                <ul className="children">
                                    {category.children.map(childCategory => (
                                        <li key={childCategory.id} className="cat-item cat-item-213">
                                            {/* <div>ID: {childCategory.id}</div> */}
                                            <a>{childCategory.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                    </li>
                    ))}
                </ul>


{/* <ul className="product-categories">
                    {categories.map(category => (
                        <li key={category.id} className="relative">
                            <div className="cursor-pointer" onClick={toggleDropdown}>
                                <div className="flex items-center">
                                    <div className="mr-2">ID: {category.id}</div>
                                    <div>Name: {category.name}</div>
                                </div>
                                {category.children.length > 0 && (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute top-1/2 right-0 transform -translate-y-1/2 transition duration-300" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 12a1 1 0 0 1-.707-.293l-3-3a1 1 0 0 1 1.414-1.414L10 10.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3A1 1 0 0 1 10 12z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </div>
                            {isOpen && category.children.length > 0 && (
                                <ul className="absolute top-0 left-full bg-white shadow-md rounded-md mt-1 w-full">
                                    {category.children.map(childCategory => (
                                        <li key={childCategory.id}>
                                            <div className="px-4 py-2">{childCategory.name}</div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul> */}



            </div>
        </Fragment>
    );
}

export default ProductCategoriesWidget;
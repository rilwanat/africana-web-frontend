import React, {Fragment, useState} from 'react';

import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

/**
 * Search Widget
 * @param title
 * @returns {*}
 * @constructor
 */
function SearchWidget({handleDataSearch, title}) {

    const [query, setQuery] = useState('');
    return (
        <Fragment>
            <div className="widget search-widget" >
                {
                    title.length > 0 ? <h3>{title}</h3> : ''
                }

                {/* <form> */}
                    {/* <div>
                        <input onChange={handleDataSearch} type="text" placeholder="Search.."/>
                        <button><i className="ti-search"/></button>
                        <button><SearchIcon className="ti-search"/></button>
                    </div> */}
                    <TextField
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                placeholder="Search.."
                className='bg-white'
                InputProps={{
                    endAdornment: (
                        <InputAdornment style={{ cursor: 'pointer'}} onClick={handleDataSearch} position="end">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
                {/* </form> */}
            </div>
        </Fragment>
    );
}

export default SearchWidget;